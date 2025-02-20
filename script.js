import {
    Ripple,
    initTWE,
  } from "tw-elements";
  
  initTWE({ Ripple });
document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("dynamic-text");
  const phrases = ["|Analista QA", "|Especialista em Testes", "|Entusiasta de Tecnologia"];
  let phraseIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function typeEffect() {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
          textElement.textContent = currentPhrase.substring(0, letterIndex--);
      } else {
          textElement.textContent = currentPhrase.substring(0, letterIndex++);
      }

      if (!isDeleting && letterIndex === currentPhrase.length + 1) {
          isDeleting = true;
          setTimeout(typeEffect, 100);
      } else if (isDeleting && letterIndex === 1) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 100) % phrases.length;
          setTimeout(typeEffect, 100);
      } else {
          setTimeout(typeEffect, isDeleting ? 100 : 100);
      }
  }

  typeEffect();
});
