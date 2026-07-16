const reasons = [
  ["1", "I love how you laugh at my corny jokes, even when they're not funny."],
  ["2", "I love how cute you look when you're laughing so hard."],
  ["3", "I love how your laugh is my favorite sound."],
  ["4", "I love how your smile instantly makes my day better."],
  ["5", "I love how you randomly sing whenever we run out of things to say."],
  ["6", "I love how you always make time to talk to me, even when you're tired and just want to sleep."],
  ["7", "I love how we can talk for hours without even noticing the time."],
  ["8", "I love how you always tell me about your day."],
  ["9", "I love every selfie you send me."],
  ["10", "I love hearing your little complaints because it means you trust me, and I'm always happy to listen."],
  ["11", "I love our little arguments because, in the end, we always choose each other."],
  ["12", "I love how you always have the cutest expressions."],
  ["13", "I love how you always say you love me forever, even when I tease you that it's too early."],
  ["14", "I love how patient you are with me, even when I'm annoying or stubborn."],
  ["15", "I love how your random stories always make me laugh."],
  ["16", "I love how you always ask if I'm okay."],
  ["17", "I love how you remember the little things I tell you."],
  ["18", "I love how you understand our situation."],
  ["19", "I love how your voice always calms me down."],
  ["20", "I love how loving you comes so naturally."],
  ["21", "I love how every day with you gives me another reason to smile."],
  ["22", "I love how your kindness shows in everything you do."],
  ["23", "I love how much you care about the people you love."],
  ["24", "I love how your messages can instantly brighten my day."],
  ["25", "I love how your presence brings me peace."],
  ["26", "I love every second I spend with you."],
  ["27", "I love how you make me feel important."],
  ["28", "I love how cute you are without even trying."],
  ["29", "I love how you trust me."],
  ["30", "I love how you truly listen to me."],
  ["31", "I love how our conversations never feel forced."],
  ["32", "I love how you always make me feel included in your life."],
  ["33", "I love how your happiness becomes my happiness too."],
  ["34", "I love how seeing your name pop up on my phone always makes me smile."],
  ["35", "I love how every \"good morning\" from you starts my day right."],
  ["36", "I love how every \"good night\" from you helps me sleep peacefully."],
  ["37", "I love how you're different from everyone else."],
  ["38", "I love how you make me laugh when I need it the most."],
  ["39", "I love how you never judge me, even when I'm insecure about myself."],
  ["40", "I love how honest you are with me."],
  ["41", "I love how you're never afraid to be yourself."],
  ["42", "I love how you notice when something's wrong."],
  ["43", "I love how you always try to cheer me up."],
  ["44", "I love how you make me feel safe."],
  ["45", "I love how you let me be myself without pretending."],
  ["46", "I love how you've become my favorite person."],
  ["47", "I love how every conversation with you becomes my favorite part of the day."],
  ["48", "I love how we can laugh over the smallest things."],
  ["49", "I love how every memory with you becomes special."],
  ["50", "I love how you make even the most ordinary moments enjoyable."],
  ["51", "I love how easy it is to be happy with you."],
  ["52", "I love your sleepy voice—it somehow makes my heart melt every time."],
  ["53", "I love how adorable you are when you're half asleep."],
  ["54", "I love your little habits that make you uniquely you."],
  ["55", "I love how your excitement is contagious."],
  ["56", "I love how you can still make me blush."],
  ["57", "I love how you understand me, even when I don't explain myself well."],
  ["58", "I love how you always try your best."],
  ["59", "I love how you're always worth waiting for."],
  ["60", "I love how you make the distance feel smaller."],
  ["61", "I love how we can be weird together without feeling embarrassed."],
  ["62", "I love how genuine your smile is."],
  ["63", "I love your cute little expressions."],
  ["64", "I love your caring heart."],
  ["65", "I love how genuine you are."],
  ["66", "I love how you make me feel lucky every single day."],
  ["67", "I love how you leave me little surprises, like your secret messages."],
  ["68", "I love how you're beautiful inside and out."],
  ["69", "I love how you're my comfort person."],
  ["70", "I love how you make everything feel lighter."],
  ["71", " I love how I always reread our conversations."],
  ["72", "I love how we can talk about literally anything."],
  ["73", "I love how your happiness matters to me."],
  ["74", "I love how much effort you put into us."],
  ["75", "I love how much you care about our relationship."],
  ["76", "I love how every day with you feels like a gift."],
  ["77", "I love how you inspire me to become a better person."],
  ["78", "I love how you're always on my mind."],
  ["79", "I love how you make me excited for tomorrow."],
  ["80", "I love how your happiness feels like my own."],
  ["81", "I love how you never fail to make me smile. (Baliw kasi 'to.)"],
  ["82", "I love how you always know how to comfort me."],
  ["83", "I love how you make me believe in love even more."],
  ["84", "I love how you turn simple moments into unforgettable memories."],
  ["85", "I love how I can picture so many beautiful memories with you."],
  ["86", "I love how your happiness matters so much to me."],
  ["87", "I love how you're always there whenever I need you."],
  ["88", "I love how every call with you feels too short."],
  ["89", "I love how every goodbye only makes me more excited for our next hello."],
  ["90", "I love how you make my world brighter every day."],
  ["91", "I love how hearing from you is always the best part of my day."],
  ["92", "I love how you're the first person I want to tell everything to."],
  ["93", "I love how you make my heart feel full."],
  ["94", "I love how you're part of my happiest memories."],
  ["95", "I love how you're my peace."],
  ["96", "I love how you make love feel easy."],
  ["97", "I love how every day with you teaches me something new about love."],
  ["98", "I love learning new things about you every day."],
  ["99", "I love every little thing that makes you... you."],
  ["99", "I love how you choose to stay, even when loving me isn't always easy."],
  ["99", "I love how you exist in my life."],
  ["99", "I love how, no matter what happens, I still choose you."],
  ["99", "I love how I can never stay mad at you for long."],
  ["99", "I love how you're always worth every effort."],
  ["99", "I love every version of you."],
  ["99", "I love you because loving you is my favorite thing to do."],
  ["99", "I love you because every single day gives me another reason to fall in love with you all over again."],
  ["100", "I love you because even after 100 reasons, I still couldn't fit everything I love about you."]
];

const symbols = ["♡", "✧", "❀", "☾", "⌁", "✦", "❦", "∞"];
const reasonsList = document.querySelector("#reasons-list");
reasons.forEach(([number, text], index) => {
  const entry = document.createElement("article");
  entry.className = `reason-entry${number === "100" ? " final-reason" : ""}`;
  entry.innerHTML = `<div class="reason-card"><small>Reason ${number.padStart(2, "0")}</small><h3>${text}</h3></div><div class="reason-marker">${number}</div><div class="reason-icon" aria-hidden="true">${symbols[index % symbols.length]}</div>`;
  reasonsList.appendChild(entry);
});

const petalNotes = [
  ["Our Future", "I wonder what we'll be laughing about a year from now."],
  ["Us", "I still smile whenever I think about us."],
  ["This Beginning", "It's only our second monthsary, but I already know these are memories I'll want to keep forever."],
  ["Your Beautiful Mind", "Don't overthink too much, okay?\nI know that's easier said than done.\nAnd if I've ever said something that made you overthink, I'm sorry.\nThat was never my intention."],
  ["That Smile", "I hope today gave you at least one reason to smile."],
  ["Please, Never Forget This", "I hope you always remember how much you mean to me."],
  ["You Deserve It", "You deserve good things."],
  ["Come Home Safe", "Stay safe wherever you go, okay?"],
  ["A New Tomorrow", "Remember that tomorrow is a brand-new day, hehe."],
  ["Please Rest", "Please remember to rest when you're tired."],
  ["One Day", "If you ever come back to this website months or years from now, I hope it still makes you smile."],
  ["One Last Thing...", "And one last reminder...\nI love you. 🤍"]
];
const petalPositions = [
  [35,18,-32,3],[65,18,32,3],[22,35,-52,4],[42,37,-18,5],[58,37,18,5],[78,35,52,4],
  [27,55,-44,6],[44,57,-15,7],[56,57,15,7],[73,55,44,6],[40,74,-23,8],[50,88,1,9]
];
const petalColors = ["#edcdd1", "#f5eadc", "#dcaeb5", "#ead5ba", "#efcdbf", "#ded4e4"];
const petalHeart = document.querySelector("#petal-heart");
const noteReveal = document.querySelector("#note-reveal");
const finalBloom = document.querySelector("#final-bloom");
const openedPetals = new Set();

petalNotes.forEach(([title], index) => {
  const petal = document.createElement("button");
  const [left, top, rotation, zIndex] = petalPositions[index];
  petal.className = `petal${index === 11 ? " locked" : ""}`;
  petal.type = "button";
  petal.style.cssText = `left:${left}%;top:${top}%;--rotation:${rotation}deg;--petal-z:${zIndex};--petal-color:${petalColors[index % petalColors.length]}`;
  petal.innerHTML = `<span>${title}</span>`;
  petal.dataset.index = index;
  petal.setAttribute("aria-label", `${index === 11 ? "Locked note: " : "Open note: "}${title}`);
  petalHeart.appendChild(petal);
});

function showNote(index) {
  const [title, message] = petalNotes[index];
  noteReveal.querySelector("span").textContent = "♡";
  noteReveal.querySelector("h3").textContent = title;
  noteReveal.querySelector("p").textContent = message;
  noteReveal.classList.add("show");
  noteReveal.setAttribute("aria-hidden", "false");
}

petalHeart.addEventListener("click", (event) => {
  const petal = event.target.closest(".petal");
  if (!petal) return;
  const index = Number(petal.dataset.index);
  if (index === 11 && openedPetals.size < 11) {
    petal.animate([{ transform: getComputedStyle(petal).transform }, { transform: `${getComputedStyle(petal).transform} scale(.97)` }, { transform: getComputedStyle(petal).transform }], { duration: 450 });
    return;
  }
  document.querySelectorAll(".petal.active").forEach((item) => item.classList.remove("active"));
  petal.classList.add("opened", "active");
  openedPetals.add(index);
  showNote(index);
  if (openedPetals.size === 11) {
    const finalPetal = petalHeart.querySelector('[data-index="11"]');
    finalPetal.classList.remove("locked");
    finalPetal.classList.add("unlocked");
    finalPetal.setAttribute("aria-label", "Open the final note: One Last Thing");
  }
});

function closeNote() {
  noteReveal.classList.remove("show");
  noteReveal.setAttribute("aria-hidden", "true");
  if (openedPetals.size === 12) window.setTimeout(() => finalBloom.classList.add("show"), 500);
}
noteReveal.querySelector("button").addEventListener("click", closeNote);
noteReveal.addEventListener("click", (event) => { if (event.target === noteReveal) closeNote(); });
finalBloom.addEventListener("click", () => finalBloom.classList.remove("show"));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
}, { threshold: 0.16 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const reasonObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("in-view"); });
}, { rootMargin: "0px 0px -15%", threshold: 0.12 });
document.querySelectorAll(".reason-entry").forEach((entry) => reasonObserver.observe(entry));

const memoryObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.target.classList.toggle("active", entry.isIntersecting));
}, { rootMargin: "-25% 0px -25%", threshold: 0.2 });
document.querySelectorAll(".memory").forEach((memory) => memoryObserver.observe(memory));

const chapterLinks = [...document.querySelectorAll(".chapter-nav a")];
const header = document.querySelector(".site-header");
const chapterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    chapterLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    header.classList.toggle("over-dark", ["chapter-2", "chapter-6", "chapter-8"].includes(entry.target.id));
  });
}, { rootMargin: "-45% 0px -45%" });
document.querySelectorAll(".chapter").forEach((chapter) => chapterObserver.observe(chapter));

function updateTimeline() {
  const timeline = document.querySelector(".timeline");
  const fill = document.querySelector(".timeline-fill");
  const rect = timeline.getBoundingClientRect();
  const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.55 - rect.top) / rect.height));
  fill.style.height = `${progress * 100}%`;
}
window.addEventListener("scroll", updateTimeline, { passive: true });
updateTimeline();

document.querySelectorAll("[data-envelope] .wax-seal").forEach((seal) => {
  seal.addEventListener("click", () => seal.closest(".envelope-stage").classList.add("open"));
});
const finalStage = document.querySelector("[data-final-envelope]");
finalStage.querySelector(".final-seal").addEventListener("click", () => finalStage.classList.add("open"));
finalStage.querySelector(".close-book").addEventListener("click", () => document.querySelector(".ending").classList.add("show"));

document.querySelectorAll(".scroll-invite").forEach((button) => {
  button.addEventListener("click", () => document.querySelector(button.dataset.target)?.scrollIntoView({ behavior: "smooth" }));
});

const moonChapter = document.querySelector(".moon-chapter");
const moon = document.querySelector(".moon");
const moonMessage = document.querySelector(".moon-message p");
const moonMessages = [
  "Remember saying,<br><em>“Bye, Moon?”</em>",
  "You don't have to anymore.",
  "Wherever you are...",
  "I'll always be your moon."
];
let moonStep = 0;
let moonFinished = false;
moon.addEventListener("click", () => {
  if (moonStep >= moonMessages.length - 1) return;
  moon.classList.remove("pulse");
  void moon.offsetWidth;
  moon.classList.add("pulse");
  moonMessage.classList.add("fade");
  window.setTimeout(() => {
    moonStep += 1;
    moonMessage.innerHTML = moonMessages[moonStep];
    moonMessage.classList.remove("fade");
    if (moonStep === moonMessages.length - 1) {
      moonChapter.classList.add("finished");
      window.setTimeout(() => { moonFinished = true; }, 4000);
    }
  }, 700);
});

function guardMoonScroll(event) {
  const rect = moonChapter.getBoundingClientRect();
  const centered = rect.top <= 10 && rect.bottom >= window.innerHeight - 10;
  if (centered && !moonFinished && event.deltaY > 0) event.preventDefault();
}
window.addEventListener("wheel", guardMoonScroll, { passive: false });

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".chapter-nav");
navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
});
chapterLinks.forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  navToggle.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}));
