import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class GetQuestionsService {

	constructor() { }

	getQuestions() {
		return {

			a: [{ answer: "abducir", question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien", done: false }, { answer: "almacen", question: "CON LA A.Lugar que sirve para guardar cosas", done: false }, { answer: "astuto", question: "CON LA A. Persona inteligente, perpicaz...", done: false }],

			b: [{ answer: "bingo", question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso", done: false }, { answer: "bodega", question: "CON LA B. Lugar donde se almacena y macera el vino", done: false }, { answer: "barcelona", question: "CON LA B. Provincia donde se encuentra la academia de SKYLABS", done: false }],

			c: [{ answer: "churumbel", question: "CON LA C. Niño, crío, bebé", done: false }, { answer: "cazar", question: "CON LA C. Matar a un animal", done: false }, { answer: "casio", question: "CON LA C. Antigua marca de relojes que usamos todos", done: false }],

			d: [{ answer: "diarrea", question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida", done: false }, { answer: "dinamica", question: "CON LA D. Rama de la física que describe la evolución en el tiempo de un sistema físico", done: false }, { answer: "dinamometro", question: "CON LA D. instrumento utilizado para medir fuerzas o para pesar objetos", done: false }],

			e: [{ answer: "ectoplasma", question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación", done: false }, { answer: "electron", question: "CON LA E. partícula subatómica...", done: false }, { answer: "equivalente", question: "CON LA E. Se dice que es igual o...", done: false }],

			f: [{ answer: "facil", question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad", done: false }, { answer: "feudo", question: "CON LA F. Tierra, bien o derecho que se concede por este contrato.", done: false }, { answer: "fratricidio", question: "CON LA F. Delito que consiste en matar a un hermano", done: false }],

			g: [{ answer: "galaxia", question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas", done: false }, { answer: "gelatinoso", question: "CON LA G. Que tiene el aspecto consistente de la gelatina", done: false }, { answer: "gastronomia", question: "CON LA G. Conjunto de conocimientos y actividades que están relacionados con los ingredientes, recetas y técnicas de la culinaria así como con su evolución histórica", done: false }],

			h: [{ answer: "harakiri", question: "CON LA H. Suicidio ritual japonés por desentrañamiento", done: false }, { answer: "helio", question: "CON LA H. Tipo de gas menos denso que el oxígeno", done: false }, { answer: "habon", question: "CON LA H. Pápula de contenido blando (edematoso), generalmente pruriginosa, cuya curación no deja secuela", done: false }],

			i: [{ answer: "iglesia", question: "CON LA I. Templo cristiano", done: false }, { answer: "intruso", question: "CON LA I. Que se ha introducido en un lugar o reunión sin derecho o autorización.", done: false }, { answer: "injuria", question: "CON LA I. Ofensa o agravio inferido a una persona", done: false }],

			j: [{ answer: "jabali", question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba", done: false }, { answer: "jade", question: "CON LA J. Roca ornamental", done: false }, { answer: "jarron", question: "CON LA J. Recipiente en forma de vaso alto, copa o jarro, grande y de función ornamental", done: false }],

			k: [{ answer: "kamikaze", question: "CON LA K. Persona que se juega la vida realizando una acción temeraria", done: false }, { answer: "kalmuko", question: "CON LA K. Gentilicio pueblo de Mongolia", done: false }, { answer: "kabuki", question: "CON LA K. Teatro japonés", done: false }],

			l: [{ answer: "licantropo", question: "CON LA L. Hombre lobo", done: false }, { answer: "leon", question: "CON LA L. Provincia de España", done: false }, { answer: "libelula", question: "CON LA L. Pertenece a la familia de los anisópteros", done: false }],

			m: [{ answer: "misantropo", question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas", done: false }, { answer: "mediania", question: "CON LA M. Lugar medio entre dos partes o extremos.", done: false }, { answer: "madrid", question: "CON LA M. Capital de España", done: false }],

			n: [{ answer: "necedad", question: "CON LA N. Demostración de poca inteligencia", done: false }, { answer: "neutron", question: "CON LA N. Partícula subatómica de carga neutra", done: false }, { answer: "ninfomana", question: "CON LA N. Mujer que siente un deseo sexual exagerado o exacerbado.", done: false }],

			ñ: [{ answer: "señal", question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.", done: false }, { answer: "araña", question: "CONTIENE LA Ñ. Insecto de ocho ojos", done: false }, { answer: "cuñado", question: "CONTIENE LA Ñ. Hermano o hermana del cónyuge.", done: false }],

			o: [{ answer: "orco", question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien", done: false }, { answer: "ostra", question: "CON LA O. Molusco...", done: false }, { answer: "opaco", question: "CON LA O. Que es oscuro o poco vibrante.", done: false }],

			p: [{ answer: "protoss", question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft", done: false }, { answer: "payaso", question: "CON LA P. personaje estereotipado representado comúnmente con vestimentas extravagantes, maquillaje excesivo y pelucas", done: false }, { answer: "peluca", question: "CON LA P. Cabellera postiza de cabello sintético o natural", done: false }],

			q: [{ answer: "queso", question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche", done: false }, { answer: "quark", question: "CON LA Q. Fermiones elementales masivos que interactúan fuertemente formando la materia nuclear", done: false }, { answer: "quebrantahuesos", question: "CON LA Q. Raza de buitre...", done: false }],

			r: [{ answer: "raton", question: "CON LA R. Roedor", done: false }, { answer: "rodillo", question: "CON LA R. Utencilio de cocina", done: false }, { answer: "raza", question: "CON LA R. Cada uno de los cuatro grandes grupos étnicos en que se suele dividir la especie humana ", done: false }],

			s: [{ answer: "stackoverflow", question: "CON LA S. Comunidad salvadora de todo desarrollador informático", done: false }, { answer: "sinestesia", question: "CON LA S. Sensación secundaria o asociada que se produce en una parte del cuerpo a consecuencia de un estímulo aplicado en otra", done: false }, { answer: "silla", question: "CON LA S. Aparejo para montar a caballo", done: false }],

			t: [{ answer: "terminator", question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984", done: false }, { answer: "trasladar", question: "CON LA T. Acción de mover", done: false }, { answer: "tutankamon", question: "CON LA T. Antiguo emperador egipcio", done: false }],

			u: [{ answer: "unamuno", question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914", done: false }, { answer: "util", question: "CON LA U. Es válido, sirve para algo...", done: false }, { answer: "uña", question: "CON LA U. Utilizada comúnmente para rascarse", done: false }],

			v: [{ answer: "vikingos", question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa", done: false }, { answer: "version", question: "CON LA V. Modo particular de narrar un suceso.", done: false }, { answer: "vision", question: "CON LA V. Capacidad de interpretar el entorno gracias a los rayos de luz que alcanzan el ojo", done: false }],

			w: [{ answer: "sandwich", question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso", done: false }, { answer: "bmw", question: "CONTIENE LA W. Marca de coche", done: false }, { answer: "wilson", question: "CONTIENE LA W. Nombre que Tom Hanks le da a una pelota", done: false }],

			x: [{ answer: "botox", question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética", done: false }, { answer: "extasis", question: "CONTIENE LA X. Tipo de droga", done: false }, { answer: "anexionar", question: "CONTIENE LA X. Acción de juntar", done: false }],

			y: [{ answer: "peyote", question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos", done: false }, { answer: "yoyo", question: "CONTIENE LA Y. Juguete que soliamos usar", done: false }, { answer: "yaya", question: "CONTIENE LA Y. Forma cariñosa de llamar a nuestra abuela", done: false }],

			z: [{ answer: "zen", question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional", done: false }, { answer: "zara", question: "CON LA Z. Multinacional conocida de venta de ropa", done: false }, { answer: "zarpa", question: "CON LA Z. Mano o pie del animal que tiene uñas fuertes, curvas y afiladas.", done: false }]
		};
	}
}
