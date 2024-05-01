class SuperMath {
  check(obj) {
    const { X, Y, znak } = obj;
    if (this._isValidOperator(znak)) {
      const confirmation = confirm(
        `Ви хочете зробити дію ${znak} з числами ${X} і ${Y}?`
      );
      if (confirmation) {
        const result = this._calculate(X, Y, znak);
        console.log(`Результат: ${result}`);
      } else {
        this.input();
      }
    } else {
      console.log(
        "Некоректний оператор. Введіть один з наступних: +, -, /, *, %."
      );
      this.input();
    }
  }

  input() {
    const X = parseFloat(prompt("Введіть число X:"));
    const Y = parseFloat(prompt("Введіть число Y:"));
    const znak = prompt("Введіть математичний оператор (+, -, /, *, %):");
    this.check({ X, Y, znak });
  }

  _isValidOperator(znak) {
    const operators = ["+", "-", "/", "*", "%"];
    return operators.includes(znak);
  }

  _calculate(X, Y, znak) {
    switch (znak) {
      case "+":
        return X + Y;
      case "-":
        return X - Y;
      case "/":
        return X / Y;
      case "*":
        return X * Y;
      case "%":
        return X % Y;
      default:
        return "Некоректний оператор";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("superMathForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const X = parseFloat(document.getElementById("numberX").value);
    const Y = parseFloat(document.getElementById("numberY").value);
    const znak = document.getElementById("operator").value;

    const p = new SuperMath();
    const obj = { X, Y, znak };
    p.check(obj);
  });
});
