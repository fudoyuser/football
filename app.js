(() => {
  const $ = (id) => document.getElementById(id);
  const screens = { home: $("screen-home"), quiz: $("screen-quiz"), result: $("screen-result") };
  const KEYS = ["A", "B", "C", "D"];
  const CATEGORY_LABEL = { history: "Lịch sử & Danh hiệu", player: "Cầu thủ 2026/27" };

  const state = { mode: "all", questions: [], index: 0, score: 0, answered: false };

  // Fisher–Yates
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Xáo trộn đáp án nhưng vẫn ghi nhớ vị trí mới của đáp án đúng
  function prepareQuestion(q) {
    const opts = shuffle(q.options.map((text, i) => ({ text, correct: i === q.correctIndex })));
    return { ...q, shuffled: opts.map((o) => o.text), answer: opts.findIndex((o) => o.correct) };
  }

  function show(name) {
    Object.entries(screens).forEach(([key, el]) => (el.hidden = key !== name));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function start(mode) {
    state.mode = mode;
    const pool = mode === "all" ? QUESTIONS : QUESTIONS.filter((q) => q.category === mode);
    state.questions = shuffle(pool).map(prepareQuestion);
    state.questions.forEach((q) => q.photo && preloadPlayerPhoto(q.photo)); // tải trước ảnh cầu thủ
    state.index = 0;
    state.score = 0;
    show("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    const q = state.questions[state.index];
    const total = state.questions.length;
    state.answered = false;

    $("progress-text").textContent = `Câu ${state.index + 1}/${total}`;
    $("score-text").textContent = `Điểm: ${state.score}`;
    $("progress-bar").style.width = `${(state.index / total) * 100}%`;
    $("q-illustration").classList.remove("has-photo");
    $("q-illustration").innerHTML = getIllustration(q);
    if (q.photo && !q.hidePhotoUntilAnswered) showPhoto(q);
    $("q-tag").textContent = CATEGORY_LABEL[q.category];
    $("q-text").textContent = q.question;
    $("feedback").hidden = true;
    $("btn-next").hidden = true;

    const box = $("options");
    box.innerHTML = "";
    q.shuffled.forEach((text, i) => {
      const btn = document.createElement("button");
      btn.className = "option";
      btn.innerHTML = `<span class="option__key">${KEYS[i]}</span><span></span>`;
      btn.lastChild.textContent = text;
      btn.addEventListener("click", () => choose(i));
      box.appendChild(btn);
    });
  }

  // Hiện ảnh cầu thủ; nếu ảnh lỗi thì giữ card silhouette SVG
  function showPhoto(q) {
    const box = $("q-illustration");
    box.classList.add("has-photo");
    box.replaceChildren(playerPhotoCard(q, state.answered, () => {
      if (state.questions[state.index] !== q) return;
      box.classList.remove("has-photo");
      box.innerHTML = getIllustration(q, state.answered);
    }));
  }

  function revealNumber(q) {
    if (q.category !== "player") return;
    const num = $("q-illustration").querySelector(".photo-card__num");
    if (num) num.textContent = q.number;
    else $("q-illustration").innerHTML = getIllustration(q, true);
  }

  function choose(i) {
    if (state.answered) return;
    state.answered = true;
    const q = state.questions[state.index];
    revealNumber(q);
    if (q.photo && q.hidePhotoUntilAnswered) showPhoto(q);
    const correct = i === q.answer;
    if (correct) state.score++;

    [...$("options").children].forEach((btn, j) => {
      btn.disabled = true;
      if (j === q.answer) btn.classList.add("is-correct");
      else if (j === i) btn.classList.add("is-wrong");
      else btn.classList.add("is-dim");
    });

    const fb = $("feedback");
    fb.classList.toggle("is-wrong", !correct);
    $("feedback-verdict").textContent = correct ? "✓ Chính xác!" : `✗ Chưa đúng — đáp án: ${q.shuffled[q.answer]}`;
    $("feedback-explain").textContent = q.explanation;
    fb.hidden = false;

    $("score-text").textContent = `Điểm: ${state.score}`;
    $("progress-bar").style.width = `${((state.index + 1) / state.questions.length) * 100}%`;
    const isLast = state.index === state.questions.length - 1;
    $("btn-next").textContent = isLast ? "Xem kết quả →" : "Câu tiếp theo →";
    $("btn-next").hidden = false;
    $("btn-next").focus({ preventScroll: true });
  }

  function next() {
    if (state.index < state.questions.length - 1) {
      state.index++;
      renderQuestion();
    } else {
      renderResult();
    }
  }

  function renderResult() {
    const total = state.questions.length;
    const pct = state.score / total;
    $("result-score").textContent = state.score;
    $("result-total").textContent = total;
    $("result-correct").textContent = state.score;
    $("result-wrong").textContent = total - state.score;
    $("result-msg").textContent =
      pct === 1 ? "Hoàn hảo! Bạn là một Kopite thực thụ. YNWA!" :
      pct >= 0.8 ? "Xuất sắc! Kiến thức của bạn đáng nể." :
      pct >= 0.5 ? "Khá tốt! Thêm chút nữa là thành chuyên gia." :
      "Cố lên! Làm lại để hiểu thêm về The Reds nhé.";
    $("result-icon").innerHTML = HISTORY_ICONS[pct >= 0.5 ? "trophy" : "crest"];
    show("result");
  }

  document.querySelectorAll(".mode-btn").forEach((b) => b.addEventListener("click", () => start(b.dataset.mode)));
  $("btn-next").addEventListener("click", next);
  $("btn-retry").addEventListener("click", () => start(state.mode));
  $("btn-home").addEventListener("click", () => show("home"));
  $("btn-quit").addEventListener("click", () => show("home"));

  // Phím tắt: 1–4 / A–D chọn đáp án, Enter sang câu tiếp
  document.addEventListener("keydown", (e) => {
    if (screens.quiz.hidden) return;
    const k = e.key.toUpperCase();
    const idx = "1234".includes(k) && k ? Number(k) - 1 : KEYS.indexOf(k);
    if (!state.answered && idx >= 0 && idx < 4) choose(idx);
    else if (state.answered && e.key === "Enter" && document.activeElement !== $("btn-next")) next();
  });

  $("hero-icon").innerHTML = HISTORY_ICONS.crest;
})();
