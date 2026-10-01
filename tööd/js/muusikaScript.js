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
    let noep=document.getElementById("noep");
    let nublu=document.getElementById("nublu");
    let tommy=document.getElementById("tommy");

    let muusikud="";

    if(noep.checked){
        muusikud +=noep.value +", ";
    }

    if(nublu.checked){
        muusikud +=nublu.value +", ";
    }

    if(tommy.checked){
        muusikud +=tommy.value +", ";
    }

    if(muusikud==""){
        muusikud="ühtegi ei valitud";
    }

    vastus3.innerHTML="Sinu valitud muusikud: " +muusikud;
    vastus3.style.color="green";

    return muusikud;
}


function stiiliValik(){
    let vastus5=document.getElementById("vastus5");
    let pop=document.getElementById("pop");
    let rock=document.getElementById("rock");
    let rap=document.getElementById("rap");
    let jazz=document.getElementById("jazz");
    let klassika=document.getElementById("klassika");
    let elektrooniline=document.getElementById("elektrooniline");

    let stiil="";

    if(pop.checked){
        stiil=pop.value;
    }
    else if(rock.checked){
        stiil=rock.value;
    }
    else if(rap.checked){
        stiil=rap.value;
    }
    else if(jazz.checked){
        stiil=jazz.value;
    }
    else if(klassika.checked){
        stiil=klassika.value;
    }
    else if(elektrooniline.checked){
        stiil=elektrooniline.value;
    }
    else{
        stiil="ühtegi ei valitud";
    }

    vastus5.innerHTML="Sinu vastus: " +stiil;
    vastus5.style.color="purple";

    return stiil;
}


function tervitus(){
    let vastus4=document.getElementById("vastus4");

    let tund=muusikaLugemine();
    let raadio=raadioValik();
    let muusikud=muusikValik();
    let stiil=stiiliValik();

    vastus4.innerHTML='Muusika kuulamise aeg: '+tund+' tundi päevas<br>'
        +'Raadio kuulamine: '+raadio+'<br>'
        +'Sinu valitud muusikud: '+muusikud+'<br>'
        +'Kõige rohkem kuulad: '+stiil;

    vastus4.style.backgroundColor="yellow";
}


function puhasta(){
    let vastus=document.getElementById("vastus");
    let vastus2=document.getElementById("vastus2");
    let vastus3=document.getElementById("vastus3");
    let vastus4=document.getElementById("vastus4");
    let vastus5=document.getElementById("vastus5");

    vastus.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
}