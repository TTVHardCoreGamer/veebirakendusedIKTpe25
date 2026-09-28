function muusikaLugemine(){
    let tund=document.getElementById("tund");
    let vastus=document.getElementById("vastus");

    vastus.innerHTML="Sa kuulad muusikat " +tund.value+ " tundi päevas";
    vastus.style.color="red";

    return tund.value;
}

function raadioValik(){
    let vastus2=document.getElementById("vastus2");
    let jah=document.getElementById("jah");
    let ei=document.getElementById("ei");

    //radio valikud
    let raadio="";

    if(jah.checked){
        raadio=jah.value;
    }
    else if(ei.checked){
        raadio=ei.value;
    }
    else{
        raadio="ühtegi ei valitud";
    }

    vastus2.innerHTML="Raadio kuulamine: " +raadio;
    vastus2.style.color="blue";

    return raadio;
}

function muusikValik(){
    let vastus3=document.getElementById("vastus3");
    let noep=document.getElementById("NOËP");
    let nublu=document.getElementById("nublu");
    let tommy=document.getElementById("Tommy Cash");

    let muusikud="";

    if(noep.checked){
        muusikud +=noep.value +`, `;
    }

    if(nublu.checked){
        muusikud +=nublu.value +`, `;
    }

    if(tommy.checked){
        muusikud +=tommy.value +`, `;
    }

    if(muusikud==""){
        muusikud="ühtegi ei valitud";
    }

    vastus3.innerHTML="Sinu valitud muusikud: " +muusikud;
    vastus3.style.color="green";

    return muusikud;
}

function tervitus(){
    let vastus4=document.getElementById("vastus4");
    let tund=muusikaLugemine();
    let raadio=raadioValik();
    let muusikud=muusikValik();

    vastus4.innerHTML='Muusika kuulamise aeg: '+tund+' tundi päevas<br>'
        +'Raadio kuulamine: '+raadio+'<br>'
        +'Sinu valitud muusikud: '+muusikud;

    vastus4.style.backgroundColor="yellow";
}

function puhasta(){
    vastus.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
}
