const messages=[
    "This is where it all begins...",
    "Commit committed",
    "Version control is awful",
    "COMMIT ALL THE FILES!",
    "The same thing we do every night, Pinky - try to take over the world!",
    "Lock S-foils in attack position",
    "This commit is a lie",
    "I'll explain when you're older!",
    "Here be Dragons","Reinventing the wheel. Again.",
    "This is not the commit message you are looking for",
    "Batman! (this commit has no parents)",

    "Las mejores cosas de la vida te deshacen el pelo",
    "No soy vago, estoy en modo ahorro de energía",
    "Lo malo no es vivir en las nubes, sino bajar",
    "Odio ser bipolar, es una sensación fantástica",
    "Previsión del tiempo para esta noche: estará oscuro",
    "Las cuatro palabras más bonitas de nuestro idioma: ya te lo dije",
    "Lo más cerca que una persona llega a la perfección es el día que rellena una solicitud de empleo",
    "Un día sin sol es, ya sabes, de noche",
    "No renuncies a tus sueños... Sigue durmiendo",
    "El tiempo sin ti es empo",
    "Tengo que ir al oculista, pero nunca veo el momento",
    "Si buscas una mano que te ayude... ¡Búscala al final de tu brazo!",
    "Lo importante no es ganar, es hacer perder al otro",
    "Solía pensar que soy indeciso, pero ahora no estoy seguro",
    "Tu ignorancia es enciclopédica",
    "Hay dos palabras que te abrirán muchas puertas: Tire y Empuje",
    "Siembra un árbol y harás feliz a un perro",
    "Ríe y el mundo reirá contigo, ronca y dormirás solo",
    "Si no puedes convencerlos, confúndelos",
    "Al que madruga, nadie le hace el desayuno",
    "Gracias a Dios que soy ateo",
    "Me hago responsable de lo que digo, no de lo que entiendas",
    "Si el mundo es un pañuelo, ¿nosotros qué somos?",
    "Odio que hablen cuando interrumpo",
];

const funnyCommit=()=>{
    const message = messages [Math.floor(Math.random()*messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);

}
module.exports = {
    funnyCommit
};