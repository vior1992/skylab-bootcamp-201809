var calculator = (function () {

	return {
		error: false,
		calculated: false,
		values: [],
		setValue: function (x) {
			if (this.error) {
				this.reset();
			}
			this.values.push(x);
			this.paint();
		},
		cleanValues: function () {
			this.values.length = 0;
		},
		reset: function () {
			this.error = false;
			this.calculated = false;
			this.values.length = 0;
			document.getElementById("screen").innerText = 0;
		},
		paint: function () {

			document.getElementById("screen").innerText = this.values.join("");
		},
		calculate: function () {
			try {
				var result = eval(this.values.join(""));
				document.getElementById("screen").innerText = result;
				this.cleanValues();

			}
			catch (e) {
				this.values.length = 0;
				this.setValue("Err.");
				this.error = true;

			}

		},
		sqrt: function () {

			var val;

			if (document.getElementById("screen").innerText != 0)
				val = document.getElementById("screen").innerText
			else
				val = this.values.join("");

			if (isNaN(val)) {

				this.reset();
				this.setValue("Err.");
				this.error = true;
				return;
			}
			document.getElementById("screen").innerText = Math.sqrt(val);
			this.cleanValues();
		}
	}

})();


window.onload = function () {

	document.getElementById("screen").innerText = 0;

	var buttons = Array.prototype.filter.call(document.getElementsByClassName("button"), x => {

		return x.className.split(" ").find(x => { return x === "no-action" }) === undefined;
	});

	for (var i in buttons) {

		buttons[i].onclick = function (e) {

			switch (e.target.innerText) {

				case "c/ca":
					calculator.reset();
					break;
				case "=":
					calculator.calculate();
					break;
				case "sqrt":
					calculator.sqrt();
					break;
				case "x":
					calculator.setValue("*");
					break;
				default:
					calculator.setValue(e.target.innerText);
					break;
			}

		};
	}
}