const flores = document.getElementById("flores");

// Crear rama principal
const rama = document.createElement("div");
rama.className = "rama";
flores.appendChild(rama);

for (let i = 1; i <= 3; i++) {
    const ramita = document.createElement("div");
    ramita.className = `ramita ramita${i}`;
    flores.appendChild(ramita);
}


// FUNCIÓN PARA CREAR UNA FLOR
function crearFlor(x, y, retraso) {

    const flor = document.createElement("div");
    flor.className = "flor";

    flor.style.left = `${x}px`;
    flor.style.top = `${y}px`;
    flor.style.animationDelay = `${retraso}s`;

    // Crear pétalos
    for (let i = 0; i < 8; i++) {
        const petalo = document.createElement("div");
        petalo.className = "petalo";
        flor.appendChild(petalo);
    }

    // Centro de la flor
    const centro = document.createElement("div");
    centro.className = "centro";
    flor.appendChild(centro);

    flores.appendChild(flor);
}

// 🌻 GIRASOLES FORMANDO UN CÍRCULO

// PARTE INFERIOR
crearFlor(145, 500, 1);
crearFlor(200, 515, 1.3);
crearFlor(255, 520, 1.6);
crearFlor(310, 510, 1.9);
crearFlor(365, 495, 2.2);

// SEGUNDA FILA
crearFlor(100, 450, 2.5);
crearFlor(155, 455, 2.8);
crearFlor(215, 465, 3.1);
crearFlor(275, 465, 3.4);
crearFlor(335, 455, 3.7);
crearFlor(390, 440, 4);

// TERCERA FILA
crearFlor(75, 395, 4.3);
crearFlor(135, 400, 4.6);
crearFlor(195, 410, 4.9);
crearFlor(255, 415, 5.2);
crearFlor(315, 405, 5.5);
crearFlor(375, 395, 5.8);
crearFlor(420, 385, 6.1);

// CUARTA FILA
crearFlor(100, 340, 6.4);
crearFlor(155, 345, 6.7);
crearFlor(215, 350, 7);
crearFlor(275, 350, 7.3);
crearFlor(335, 345, 7.6);
crearFlor(390, 335, 7.9);

// PARTE SUPERIOR
crearFlor(145, 295, 8.2);
crearFlor(200, 285, 8.5);
crearFlor(255, 280, 8.8);
crearFlor(310, 285, 9.1);
crearFlor(365, 295, 9.4);

// CENTRO SUPERIOR
crearFlor(195, 245, 9.7);
crearFlor(255, 235, 10);
crearFlor(315, 245, 10.3);

// 🌻 FLORES QUE VUELAN
function crearFlorVolando() {

    const flor = document.createElement("div");
    flor.className = "volando"

    for (let i = 0; i < 8; i++) {
        const petalo = document.createElement("div");
        petalo.className = "petalo";
        flor.appendChild(petalo);
    }
    
    const centro = document.createElement("div");
    centro.className = "centro";
    flor.appendChild(centro);

    flor.style.left = `${Math.random() * 40}%`;
    flor.style.top = `${30 + Math.random() * 50}%`;

    flor.style.animationDelay = `${Math.random() * 3}s`;

    flores.appendChild(flor);

    // Eliminar después de la animación
    setTimeout(() => {
        flor.remove();
    }, 15000);
}


// Crear varias flores volando después de que aparezcan los girasoles
for (let i = 0; i < 30; i++) {
    setTimeout(crearFlorVolando, 8000 + i * 500);
}
