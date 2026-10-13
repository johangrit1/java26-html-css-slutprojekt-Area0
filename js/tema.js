// Javascripten som behövs för att knappen för mörkt/ljust ska fungera / Johan

const html = document.documentElement;
const systemMorkt = window.matchMedia("(prefers-color-scheme: dark)");

// Hämtar temat som besökaren valt tidigare (finns inget sparat blir det null)
function hamtaSparatTema() {
    try {
        return localStorage.getItem("tema");
    } catch (fel) {
        return null; // t.ex. privat läge där localStorage är avstängt
    }
}

function sparaTema(tema) {
    try {
        localStorage.setItem("tema", tema);
    } catch (fel) {
        // Går det inte att spara fungerar knappen ändå, men valet glöms vid nästa sida
    }
}

// Datorns/telefonens egen inställning
function systemetsTema() {
    return systemMorkt.matches ? "dark" : "light";
}

// Sätter temat och uppdaterar texten på knappen (om sidan har en knapp)
function sattTema(tema) {
    html.setAttribute("data-bs-theme", tema);

    const knapp = document.getElementById("tema-knapp");
    if (knapp) {
        // Knappen visar vilket läge man byter TILL
        knapp.textContent = tema === "dark" ? "Ljust läge" : "Mörkt läge";
    }
}

// 1. Direkt när sidan börjar laddas: sparat val, annars systemets inställning
sattTema(hamtaSparatTema() || systemetsTema());

// 2. När HTML:en är inläst finns knappen, då kopplar vi på klick
document.addEventListener("DOMContentLoaded", function () {
    sattTema(html.getAttribute("data-bs-theme")); // rätt text på knappen

    const knapp = document.getElementById("tema-knapp");
    if (!knapp) {
        return;
    }

    knapp.addEventListener("click", function () {
        const nyttTema = html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
        sattTema(nyttTema);
        sparaTema(nyttTema);
    });
});

// 3. Om besökaren inte valt själv följer sidan med när systemet byter läge
systemMorkt.addEventListener("change", function () {
    if (!hamtaSparatTema()) {
        sattTema(systemetsTema());
    }
});
