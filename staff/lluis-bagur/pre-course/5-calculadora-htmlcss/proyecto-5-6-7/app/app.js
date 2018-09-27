
	var n1;
	var n2;
	var operacion;


  function fnueve(){
      document.getElementById('resultado').textContent = document.getElementById('resultado').textContent  + "9";
  }
  function focho(){
      document.getElementById('resultado').textContent = document.getElementById('resultado').textContent  + "8";
  }
  function fsiete(){
      document.getElementById('resultado').textContent = document.getElementById('resultado').textContent  + "7";
  }
  function fseis(){
      document.getElementById('resultado').textContent = document.getElementById('resultado').textContent  + "6";
  }
  function fcinco(){
      document.getElementById('resultado').textContent = document.getElementById('resultado').textContent  + "5";
  }
  function fcuatro(){
      document.getElementById('resultado').textContent = document.getElementById('resultado').textContent  + "4";
  }
  function ftres(){
      document.getElementById('resultado').textContent = document.getElementById('resultado').textContent  + "3";
  }
  function fdos(){
      document.getElementById('resultado').textContent = document.getElementById('resultado').textContent  + "2";
  }
  function funo(){
      document.getElementById('resultado').textContent = document.getElementById('resultado').textContent  + "1";
  }
  function fcero(){
      document.getElementById('resultado').textContent = document.getElementById('resultado').textContent  + "0";
  }

  function fcoma(){
      document.getElementById('resultado').textContent = document.getElementById('resultado').textContent  + ".";
  }


  function freset(){
      resetear();
  }
  function fsuma(){
      n1 = document.getElementById('resultado').textContent;
      operacion = "+";
      limpiar();
  }
  function fresta(){
      n1 = document.getElementById('resultado').textContent;
      operacion = "-";
      limpiar();
  }
  function fmulti(){
      n1 = document.getElementById('resultado').textContent;
      operacion = "*";
      limpiar();
  }
  function fdivi(){
      n1 = document.getElementById('resultado').textContent;
      operacion = "/";
      limpiar();
  }
  function figual(){
      n2 = document.getElementById('resultado').textContent;
      resolver();
  }

  function limpiar(){
    document.getElementById('resultado').textContent = "";
  }
  function resetear(){
    document.getElementById('resultado').textContent = "";
    n1 = 0;
    n2 = 0;
    operacion = "";
  }

  function resolver(){
    console.log(n1 + n2);
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(n1) + parseFloat(n2);
        break;
      case "-":
          res = parseFloat(n1) - parseFloat(n2);
          break;
      case "*":
        res = parseFloat(n1) * parseFloat(n2);
        break;
      case "/":
        res = parseFloat(n1) / parseFloat(n2);
        break;
    }
    resetear();
    document.getElementById('resultado').textContent = res;
  }