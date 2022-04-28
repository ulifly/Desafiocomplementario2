const juegos = []

class Juego {
    constructor(nombre, plataforma, art) {
        this.nombre = nombre;
        this.plataforma = plataforma;
        this.art = art;
    }
}


juegos.push(new Juego("SUPER MARIO ODYSSEY", "NINTENDO SWITCH", "https://m.media-amazon.com/images/I/81sS-oqpkLS._AC_SY500_.jpg"));
juegos.push(new Juego("ANIMAL CROSSING: NEW HORIZONS", "NINTENDO SWITCH", "https://m.media-amazon.com/images/I/71EsARfsklS._AC_SY500_.jpg"));
juegos.push(new Juego("STARLINK", "NINTENDO SWITCH", "https://cdn.awsli.com.br/800x800/1631/1631815/produto/62201707/a7e4173ea6.jpg"));
juegos.push(new Juego("MONSTER HUNTER RISE", "NINTENDO SWITCH", "https://m.media-amazon.com/images/I/814mH7g4wdL._AC_SL1500_.jpg"));
juegos.push(new Juego("SUPER MARIO PARTY", "NINTENDO SWITCH", "https://m.media-amazon.com/images/I/81qGjOM5i9S._AC_SY500_.jpg"));
juegos.push(new Juego("SUPER MARIO 3D ALLSTARS", "NINTENDO SWITCH", "https://m.media-amazon.com/images/I/71TU0o8tAwS._AC_SL1125_.jpg" ))
juegos.push(new Juego("FINAL FANTASY VII REMAKE", "PLAYSTATION 4", "https://m.media-amazon.com/images/I/61F14y0nXAS._AC_SL1000_.jpg" ))


console.table(juegos)


for (let juego of juegos) {
    contenido.innerHTML +=`<div class="card" style="width: 18rem;">    
    <img src="${juego.art}" class="card-img-top" alt="...">
    <div class="card-body">
    <p class="card-text"> ${juego.nombre} <br> ${juego.plataforma}</p>
    </div>
    </div>`
}
