let raamatukogu = {
    //omadused
    raamatud: [
        { pealkiri: 'Kevade', autor: 'Oskar Luts', aasta: 1912 },
        { pealkiri: 'Rehepapp', autor: 'Andrus Kivirähk', aasta: 2000 },
        { pealkiri: 'Puhastus', autor: 'Sofi Oksanen', aasta: 2008 }
    ],

    //meetodid
    kuvaRaamatud() {
        let tulemus = "";

        this.raamatud.forEach((raamat) => {
            console.log(`${raamat.pealkiri}, ${raamat.autor}, ${raamat.aasta}`);
            tulemus += `
        <p>
          <b>Pealkiri:</b> ${raamat.pealkiri}<br>
          <b>Autor:</b> ${raamat.autor}<br>
          <b>Aasta:</b> ${raamat.aasta}
        </p>
        <hr>
      `;
        });

        let vastus1 = document.getElementById("vastus1");
        vastus1.innerHTML = tulemus;
    },

    lisaRaamat(pealkiri, autor, aasta) {
        this.raamatud.push({ pealkiri: pealkiri, autor: autor, aasta: aasta });
    },

    koguarv() {
        console.log("Raamatuid kokku: " + this.raamatud.length);
        let vastus2 = document.getElementById("vastus2");
        vastus2.innerHTML = "Raamatuid kokku: " + this.raamatud.length;
    },

    peale2000() {
        let uued = this.raamatud.filter(raamat => raamat.aasta > 2000);
        console.log("Pärast 2000. aastat ilmunud: " + uued.length);
        let vastus3 = document.getElementById("vastus3");
        vastus3.innerHTML = "Pärast 2000. aastat ilmunud: " + uued.length;
    },

    // Minu oma meetod: leiab kõik raamatud, mille autor on antud nimega
    otsiAutori(nimi) {
        let leitud = this.raamatud.filter(raamat => raamat.autor === nimi);
        console.log(nimi + " raamatuid: " + leitud.length);
        let vastus4 = document.getElementById("vastus4");
        vastus4.innerHTML = nimi + " raamatuid: " + leitud.length;
    }
};

raamatukogu.lisaRaamat('Hinges', 'Mari Saat', 2019);
raamatukogu.kuvaRaamatud();
raamatukogu.koguarv();
raamatukogu.peale2000();
raamatukogu.otsiAutori('Oskar Luts');