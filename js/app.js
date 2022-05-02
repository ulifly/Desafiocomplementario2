/*----readme----*/
//la idea de esta app es tener una boblioteca de los juegos que poseo para 
//tener una mejor organizacion y poder filtralos por plataforma asi como
//busacar juegos en especifico
// espero poder agregar mas features como el porcentaje del juego 
//(si lo termine no lo he jugado o deje una partida a medias)
//por ahora funciona con un array pero me parece que en su debido momento se debe 
//utilizar una base de datos

/*------------en progreso----------*/

// los botones en algun momento deben funcionar para agregar eliminar y buscar juegos 
// y que la salida sea en un html muy visual con las caratulas de los juegos como el html principal



/**------declaro el array juegos-------- **/

const juegos = [];
const porcentajes = []; 

/**------esta es la clase del objeto juego--------- **/
class Juego {
    constructor(nombre, plataforma, art) {
        this.nombre = nombre;
        this.plataforma = plataforma;
        this.art = art;
    }
}

/*------------aqui las funciones---------------- */ 

function agreagar_juego(nombre_juego, plataforma, url_imagen) {
    juegos.push(new Juego(nombre_juego, plataforma, url_imagen ));
}

function eliminar_juego(posicion) {
    juegos.splice(posicion, 1);
}

function buscar_juego(nombre_a_buscar) {
    let busqueda = null;
    busqueda = juegos.some( juego => juego.nombre == nombre_a_buscar);//esto despues regresara la tarjeta del juego por html
    if (busqueda == true) {
        alert("el juego esta en el catalogo");
    } else {
        alert("no se encuenta en el catalogo");
    }
}


/*---------------relleno el array con push------------------*/
juegos.push(new Juego("SUPER MARIO ODYSSEY", "NINTENDO SWITCH", "https://m.media-amazon.com/images/I/81sS-oqpkLS._AC_SY500_.jpg"));
juegos.push(new Juego("ANIMAL CROSSING: NEW HORIZONS", "NINTENDO SWITCH", "https://m.media-amazon.com/images/I/71EsARfsklS._AC_SY500_.jpg"));
juegos.push(new Juego("STARLINK", "NINTENDO SWITCH", "https://cdn.awsli.com.br/800x800/1631/1631815/produto/62201707/a7e4173ea6.jpg"));
juegos.push(new Juego("MONSTER HUNTER RISE", "NINTENDO SWITCH", "https://m.media-amazon.com/images/I/814mH7g4wdL._AC_SL1500_.jpg"));
juegos.push(new Juego("SUPER MARIO PARTY", "NINTENDO SWITCH", "https://m.media-amazon.com/images/I/81qGjOM5i9S._AC_SY500_.jpg"));
juegos.push(new Juego("SUPER MARIO 3D ALLSTARS", "NINTENDO SWITCH", "https://m.media-amazon.com/images/I/71TU0o8tAwS._AC_SL1125_.jpg" ))
juegos.push(new Juego("FINAL FANTASY VII REMAKE", "PLAYSTATION 4", "https://m.media-amazon.com/images/I/61F14y0nXAS._AC_SL1000_.jpg" ))
juegos.push(new Juego("GOD OF WAR 4", "PLAYSTATION 4", "https://http2.mlstatic.com/D_NQ_NP_770753-MLM47957258519_102021-O.webp" ))
juegos.push(new Juego("SPIDERMAN", "PLAYSTATION 4", "https://http2.mlstatic.com/D_NQ_NP_643458-MLA43439934747_092020-O.webp" ))
juegos.push(new Juego("DON'T STARVE TOGETHER ", "STEAM", "https://images.igdb.com/igdb/image/upload/t_cover_big/co1yg3.jpg" ))
juegos.push(new Juego("HALF-LIFE ALYX", "OCULUS", "https://www.cnet.com/a/img/resize/f5a9d3cbeab6b92f89fab11ac96877b3e6d4e78f/hub/2019/11/21/19db7c73-c881-4bd4-bf96-8c2174feff67/box-art-flat.png?auto=webp&width=1092" ))
juegos.push(new Juego("FINAL FANTASY VII REMAKE", "PLAYSTATION 4", "https://m.media-amazon.com/images/I/61F14y0nXAS._AC_SL1000_.jpg" ))



/* ----------------------AQUI LO QUE HACEN LOS BOTONES ---------------------------------- */

//por ahora solo funciona con 1 dato y solo actualiza en el log la idea es que actualize en el html
//aunque no se si para eso se necesita ya base de datos

let buttonAdd = document.getElementById("buttonAdd");
let buttonSubstract = document.getElementById("buttonSubstract");
let buttonSearch = document.getElementById("buttonSearch");
let buttonpercent = document.getElementById("buttonpercent");

buttonAdd.addEventListener("click", function(){
    let nombre_juego = prompt("ingresa el nombre del juego");
    nombre_juego = nombre_juego.toUpperCase();
    if (nombre_juego != "") {
        let plataforma = prompt("ingresa la plataforma de tu juego");
        plataforma = plataforma.toUpperCase();
        if (plataforma !="") {
            let url_imagen =prompt("ingresa una URL de la caratula del juego");
            if (url_imagen !="") {
                agreagar_juego(nombre_juego, plataforma, url_imagen);
            } else {
                alert("ingresa una URL para la imagen");
            }          
        } else {
            alert("ingresa una plataforma");
        }      
    } else {
        alert("ingrese un nombre");
    }    
    
})


buttonSubstract.addEventListener("click", function(){
    let juego_a_eliminar = prompt("ingresa numero del juego a eliminar");
    if (typeof(juego_a_eliminar) == Number) {
        
    } else {
        alert("introduce un valor numerico entre 0 y " + juegos.length);
    }
    eliminar_juego(juego_a_eliminar);
})


buttonSearch.addEventListener("click", function(){
    let juego_a_buscar = prompt("ingresa nombre del juego a buscar");
    juego_a_buscar = juego_a_buscar.toUpperCase();
    if (juego_a_buscar != "") {
        buscar_juego(juego_a_buscar);        
    } else {
        alert("error. no se introdujeron datos ");
    }
    
    
    
    
})

buttonpercent.addEventListener("click", function(){
    alert("el porcentaje de juegos de Playstation 4 es: " + Math.round((juegosps4.length / juegos.length)*100) + "%" + "\n" + 
          "el porcentaje de juegos de Nintendo Switch es: " + Math.round((juegosnintendo.length / juegos.length)*100) + "%" + "\n" +
          "el porcentaje de juegos de Steam es: " + Math.round((juegossteam.length / juegos.length)*100) + "%" + "\n" + 
          "el porcentaje de juegos de oculus es: " + Math.round((juegossteam.length / juegos.length)*100) + "%")
})




/*-----------------------cards que se genera desde el array--------------------------*/

for (let juego of juegos) {
    contenido.innerHTML +=`<div class="card" style="width: 18rem;">    
    <img src="${juego.art}" class="card-img-top" alt="...">
    <div class="card-body">
    <p class="card-text"> ${juego.nombre} <br> ${juego.plataforma}</p>
    </div>
    </div>`
}
/*----------------------filtrado de datos por plataforma----------------------------- */
let juegosps4 = juegos.filter(juego => juego.plataforma == "PLAYSTATION 4");
let juegosnintendo = juegos.filter(juego => juego.plataforma == "NINTENDO SWITCH");
let juegossteam = juegos.filter(juego => juego.plataforma == "STEAM");
let juegosoculus = juegos.filter(juego => juego.plataforma == "OCULUS");


/*-----------------------salida por consola-------------------------------------------*/
console.table(juegos);
console.table(juegosps4);
console.table(juegosnintendo);
console.table(juegossteam);
console.table(juegosoculus);

console.log("el porcentaje de juegos de Playstation 4 es: " + Math.round((juegosps4.length / juegos.length)*100) + "%");
console.log("el porcentaje de juegos de Nintendo Switch es: " + Math.round((juegosnintendo.length / juegos.length)*100) + "%");
console.log("el porcentaje de juegos de Steam es: " + Math.round((juegossteam.length / juegos.length)*100) + "%");
console.log("el porcentaje de juegos de oculus es: " + Math.round((juegossteam.length / juegos.length)*100) + "%");

