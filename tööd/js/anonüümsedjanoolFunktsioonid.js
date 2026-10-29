// 1. Erinevad funktsioonid (klassikaline ja noolefunktsioon)
function minuNimi() {
    console.log("Aaron");
}
minuNimi();

const minuNimi2 = () => console.log("Aaron");
minuNimi2();


// 2. Argumendiga funktsioon
function kuupaevEesti(kuupaev) {
    const osad = kuupaev.split("."); // "19.07.25" -> ["19", "07", "25"]
    const kuud = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni",
        "juuli", "august", "september", "oktoober", "november", "detsember"];

    const paev = Number(osad[0]);
    const kuu = kuud[Number(osad[1]) - 1];

    console.log(`${paev}. ${kuu}`);
}

kuupaevEesti("19.07.25"); // 19. juuli


// 3. Teadmata hulk arve
function arvudeStatistika() {
    let kogus = 0;
    let summa = 0;
    let sisend = prompt("Sisesta täisarv (tühi väli lõpetab):");

    while (sisend !== null && sisend !== "") {
        summa = summa + Number(sisend);
        kogus = kogus + 1;
        sisend = prompt("Sisesta järgmine täisarv (tühi väli lõpetab):");
    }

    if (kogus === 0) {
        return [0, 0];
    }
    return [kogus, summa / kogus];
}

const tulemus = arvudeStatistika();
console.log(`Arve kokku: ${tulemus[0]}, keskmine: ${tulemus[1]}`);


// 4. Salajane sõnum
const salajaneSonum = sonum => {
    const vokaalid = "aeiouõäöüAEIOUÕÄÖÜ";
    let salajane = "";

    for (let i = 0; i < sonum.length; i++) {
        if (vokaalid.indexOf(sonum[i]) !== -1) {
            salajane = salajane + "*";
        } else {
            salajane = salajane + sonum[i];
        }
    }
    return salajane;
};

console.log(salajaneSonum("Tere maailm")); // T*r* m**l*m


// 5. Unikaalsed nimed
const leiaUnikaalsedNimed = nimed => {
    const unikaalsed = [];

    nimed.forEach(nimi => {
        if (unikaalsed.indexOf(nimi) === -1) {
            unikaalsed.push(nimi);
        }
    });
    return unikaalsed;
};

console.log(leiaUnikaalsedNimed(["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"]));