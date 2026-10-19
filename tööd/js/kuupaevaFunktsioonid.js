const now = new Date();
//tagastab päeva
const paev = now.getDate();

console.log('Täna on ' +paev + 'päev');

function tanaOn(){
    const now = new Date();

    const paev = now.getDate(); //päevad
    const kuu = now.getMonth(); //kuud
    const aasta = now.getFullYear(); ///aastad
    const tunnid = now.getHours(); //tunnid
    const minutid= now.getMinutes(); //minutid

    let vastus=document.getElementById("vastus");

    vastus.innerHTML='Täna on '+ paev + "."+kuu+"."+aasta+'<br>'+
        'Kellaaeg on '+tunnid+':'+minutid;
}

function synnipaevani(){
    const synnipaev= new Date(2027, 2, 22); //aasta, kuu, päev
    const tana= new Date();

    const vahe= synnipaev.getTime()-tana.getTime();
    const paevad=vahe/(1000 * 60 * 60 * 24); //päevades

    let vastus2=document.getElementById("vastus2");

    vastus2.innerHTML=("Minu sünnipäevani " +paevad.toFixed(0)+" päeva");
}

