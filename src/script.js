class SuperMath {
  constructor() {
    this.form = document.getElementById("superMathForm");
    this.resultContainer = document.getElementById("result");

    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.submitForm();
    });
  }

  check(obj) {
    const { X, Y, znak } = obj;
    if (!this._isValidOperator(znak)) {
      console.log(
        "Некоректний оператор. Введіть один з наступних: +, -, /, *, %."
      );
      this.input();
      return;
    }

    const userConfirmation = confirm(
      `Ви хочете зробити дію ${znak} з числами ${X} і ${Y}?`
    );
    if (userConfirmation) {
      const result = this._calculate(X, Y, znak);
      console.log(`Результат: ${result}`);
      this.resultContainer.innerHTML = `Результат: ${result}`;
    } else {
      this.input();
    }
  }

  input() {
    const X = parseFloat(prompt("Введіть число X:"));
    const Y = parseFloat(prompt("Введіть число Y:"));
    const znak = prompt("Введіть математичний оператор (+, -, /, *, %):");
    this.check({ X, Y, znak });
  }

  submitForm() {
    const X = parseFloat(document.getElementById("numberX").value);
    const Y = parseFloat(document.getElementById("numberY").value);
    const znak = document.getElementById("operator").value;
    this.check({ X, Y, znak });
  }

  _isValidOperator(znak) {
    return ["+", "-", "/", "*", "%"].includes(znak);
  }

  _calculate(X, Y, znak) {
    switch (znak) {
      case "+":
        return X + Y;
      case "-":
        return X - Y;
      case "*":
        return X * Y;
      case "/":
        return X / Y;
      case "%":
        return X % Y;
      default:
        return "Некоректний оператор";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  new SuperMath();
});
