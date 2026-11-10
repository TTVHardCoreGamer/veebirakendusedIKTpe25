//sirge joon
function sirgeJoon() {
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d")
        //joon
        t.beginPath();
        t.strokeStyle="red";
        t.lineWidth = 2;
        t.moveTo(50,50); //alguspunkt
        t.lineTo(150,200); //lõpppunkt
        t.stroke();
    }
}
function puhasta(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d")
        t.clearRect(0,0,300,400);
    }
}
//kolmnurk
function kolmnurk() {
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d")
        //kolmnurk
        t.beginPath();
        t.strokeStyle="red";
        t.fillStyle="green"; //taust
        t.lineWidth = 2;
        t.moveTo(50,50); //alguspunkt
        t.lineTo(150,200);
        t.lineTo(50,200);
        t.lineTo(50,50); //lõpppunkt
        t.line
        t.stroke();
        t.fill();
    }
}
function ristkylik(){
    const tahvel=document.getElementById("tahvel");
    const laius=document.getElementById("laius");
    const korgus=document.getElementById("korgus");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d")
        t.fillStyle="olive";
        t.fillRect(100,50,laius.value,korgus.value); //alguspunkt - x, y, laius, kõrgus
    }
}
function ring(){
    const tahvel=document.getElementById("tahvel");
    const r=document.getElementById("raadius");
    const varv=document.getElementById("varv");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d")
        t.fillStyle=varv.value;
        t.arc(100,50,r.value, 0,2*Math.PI, true); //alguspunkt - x, y, raadius, 2*180kraadi
        t.fill();
    }
}


function pea() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");

        t.beginPath();
        t.strokeStyle = "black";
        t.lineWidth = 2;
        t.arc(150, 200, 90, 0, 2 * Math.PI);
        t.stroke();
    }
}

function vasaksilm() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");

        t.beginPath();
        t.strokeStyle = "black";
        t.arc(120, 175, 10, 0, 2 * Math.PI);
        t.stroke();
    }
}

function paremsilm() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");

        t.beginPath();
        t.strokeStyle = "black";
        t.arc(180, 175, 10, 0, 2 * Math.PI);
        t.stroke();
    }
}

function suu() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");

        t.beginPath();
        t.strokeStyle = "black";
        t.lineWidth = 2;
        t.moveTo(120, 245);
        t.lineTo(180, 245);
        t.stroke();
    }
}

function nina() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");

        t.strokeStyle = "black";
        t.strokeRect(145, 185, 10, 30);
    }
}

function korvad() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");

        t.strokeStyle = "black";

        t.strokeRect(50, 175, 15, 45);
        t.strokeRect(235, 175, 15, 45);
    }
}
function terveNagu(){
    pea();
    korvad();
    vasaksilm();
    paremsilm();
    nina();
    suu();
}