export function Contactform() {
  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });

  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const operator = document.getElementById("operator");
  const captchaInput = document.getElementById("captchaInput");
  const resultText = document.getElementById("captchaResult");
  const checkBtn = document.getElementById("checkCaptcha");

  let answer;
  function generateCaptcha() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const ops = ['+', '-'];
    const op = ops[Math.floor(Math.random() * ops.length)];
    num1.textContent = a;
    num2.textContent = b;
    operator.textContent = op;
    answer = op === '+' ? a + b : a - b;
  }

  checkBtn.addEventListener("click", () => {
    if (parseInt(captchaInput.value) === answer) {
      resultText.textContent = "✅ Correct!";
      resultText.classList.add("text-success");
      resultText.classList.remove("text-danger");
      generateCaptcha();
      captchaInput.value = "";
    } else {
      resultText.textContent = "❌ Wrong! Try again.";
      resultText.classList.add("text-danger");
      resultText.classList.remove("text-success");
      generateCaptcha();
      captchaInput.value = "";
    }
  });
  

  generateCaptcha();
}
