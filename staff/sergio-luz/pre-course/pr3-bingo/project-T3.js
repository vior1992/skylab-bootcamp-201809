

//Realiza un programa que simule un Bingo. 

//-VARIABLES-//
var UserName=[
	{name:"J1",points:50}, 
	{name:"J2",points:80}
]
var TamañoCarton=15;
var CartonK=[];
var ListaBolas=[];
var Puntos;
var comprobarLinea=true;
//-//
function BINGO(){
	var Turno=0, comprobarLinea=true;
	Puntos=100;
	var name=PedirNombre();

	UserName.push({name:name, points:Puntos});
	alert("Bienvenido "+name);
	InformarFuncionamientoPuntos();

	AskTurn(Turno);
}
//-//
function PedirNombre(){	//Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse. 
	var x="";
	while(x=="")	{x=prompt("Escribe tu nombre porfavor:", "Eustaquio");}
	console.log("Bienvenido "+x+". Empieza a jugar:");
	return x;
}
//-//
function InformarFuncionamientoPuntos(){
	confirm("Todos los jugadores empiezan inicialmente con 100 puntos. \nPor cada bola que salga perderán uno.\nEn caso de abandonar el juego no se almacenarán los puntos.\nCompleta tu carton más rapido que los demás para ganar.")
	console.log("Todos los jugadores empiezan inicialmente con 100 puntos. \nPor cada bola que salga perderán uno.\nEn caso de abandonar el juego no se almacenarán los puntos.\nCompleta tu carton más rapido que los demás para ganar.")
}
//-//
function AskTurn(turno){
	var Completed=CartonCompletado();
	if(turno==0){
		//Primer turno
		BorrarCarton()
		CreateCarton(TamañoCarton)
	}else if(Completed==true){
		FinishGame();
	}else{
		Esperar();
		ConfirmNewTurn();
	}
}
//-//
function CartonCompletado(){
	var i=0;
	for(i=0;i<CartonK.length;i++){		
		if(CartonK[i].matched==false){
			if(comprobarLinea==true){
				LineaCompletada();
			}
			return false;
		}
	}
	return true;
}
function LineaCompletada(){
	//Para cada linea
	for(var i=1; i<4; i++){
		//Obtenemos un array con los numeros de esa linea
		var TemporalArray=CartonK.filter(R=> (R.linea==i));
		//Comprobamos si en esa linea existe algún número NO tachado.
		var fallos=TemporalArray.filter(R=> (R.matched==false));
		//En caso de no fallar ha habido una linea
		if(fallos==0){
			console.log("¡¡¡LINEA!!!")
			comprobarLinea=false;
			break;
		}
	}
}
//-//
function BorrarCarton(){

	CartonK=[]; //vaciamos el antiguo carton
}
function CreateCarton(T){	// Durante el primer turno se mostrará un cartón con 15 números (excluyendo el 0 siempre)
	//Construimos el carton
	var i=0;
	for(i=0;i<T;i++){		
		var x= GenerarRandom();
		//comprobamos si el número ya existe en el cartón
		if(CartonK.some(elem => elem.number ==x)){
			CreateCarton(TamañoCarton-(CartonK.length));
			return;
		}
		var casilla={number:x,matched:false};
		CartonK.push(casilla);
	}
	//Los ordenamos
	CartonK.sort(function (a, b){ return (a.number - b.number) }); //Menor a mayor
	//Creamos las 3 lineas
	for(var i=0; i<15; i++){
		if(i<5){
			CartonK[i].linea=1;
		}else if(i<10){
			CartonK[i].linea=2;
		}else if(i<15){
			CartonK[i].linea=3;
		}
	}
	// Mostramos el carton
	MostrarCarton()
	//Preguntamos si quiere este carton
	Esperar();
	CambiarCarton();
}
function CambiarCarton(){
	var querer=prompt("¿Quieres este carton? En caso negativo te daremos otro:\ny/n","y");
	if(querer!=null){querer=querer.toLowerCase();}
	switch(querer) {
        case "y":
        	ConfirmNewTurn();
        	break;
    	case "n":
    		console.log("Procediendo a cambiar el carton...")
    		BorrarCarton();
    		CreateCarton(TamañoCarton);
        	break;
        default:
        	alert("No he entendido la respuesta. Por favor, responde otra vez");
        	CambiarCarton();
        	break;
    }
}
function MostrarCarton(){
	console.log("Este es tu carton:")
	console.log(CartonK);
}
//-//
function FinishGame(){
	if(CartonCompletado()==false){
		console.log("Sentimos que quieras abandonar el juego. Seguramente tendrás más suerte la proxima vez");
		console.log("Has realizado "+(100-Puntos)+" turnos en esta partida");
		UserName.pop();
	}else if(CartonCompletado()==true){
		console.log("Has completado tu carton! Felicidades");
		UserName.sort(function (a, b){ return (b.number - a.number) });
		InformarPuntosActuales();
	}
}
function InformarPuntosActuales(){
	UserName[UserName.length-1].points=Puntos;
	for(var i=0; i<UserName.length-1; i++){
		console.log("El jugador: "+UserName[i].name+" tiene "+UserName[i].points+" puntos")
	}
	console.log("\nTu tienes: "+UserName[UserName.length-1].points+" puntos\n ");
}
//-//
function GenerarRandom(){

	return Math.floor(Math.random() * 99)+1;
}
//-//
function ConfirmNewTurn(){
	var querer= prompt("¿Quieres realizar una tirada y probar suerte?) \ny/n", "y");
	if(querer!=null){ 	querer=querer.toLowerCase();}
	switch(querer) {
        case "y":
        	NewTurn()		
        	break;
    	case "n":
    		FinishGame();
        	break;
        default:
        	alert("No he entendido la respuesta. Por favor, responde otra vez");
        	ConfirmNewTurn();
    }
}
function NewTurn(){
	//generamos un número (sacamos una bola)
	var Numero= GenerarRandom();
	//comprobamos si la bola ya ha salido
	if(ListaBolas.some(elem => elem.number ==Numero)){
		NewTurn();
		return;
	}
	console.log("Sacamos una bola....")
	ListaBolas.push({number:Numero});
	ListaBolas.sort(function (a, b){ return (a.number - b.number) })
	//Comprobamos si la bola coincide con algún número de nuestro cartón
	var bool=Coincidencia(Numero);
	if(bool==true){
		console.log("Numero: "+Numero+"\nHas tenido suerte, la bola coincide con uno de tus numeros!\n ")
		confirm("Numero: "+Numero+"\nHas tenido suerte, la bola coincide con uno de tus numeros!\n ")
	}else{
		console.log("Numero: "+Numero+"\nSeguramente tengas más suerte la proxima vez\n ")
		confirm("Numero: "+Numero+"\nSeguramente tengas más suerte la proxima vez\n ")
	}
	Esperar();
	Puntos--;
	MostrarCarton();
	AskTurn();
}
//-//
function Coincidencia(num){
	for (var i=0; i<CartonK.length;i++){
		if(CartonK[i].number==num){
			CartonK[i].matched=true;
			return true;
		}
	}
	return false;
}
// Esperar un segundo
function Esperar(){
	var start = new Date().getTime();
	  for (var i = 0; i < 1e7; i++) {
	    if ((new Date().getTime() - start) > 500){
	      break;
	    }
	  }
}
//-//
BINGO();
//-//
