var niza = new Array("торта", "писмо", "мачка", "јакна", "ламба", "ливче", "молив", "сонце", "мотор", "јајце");

var slucaen_zbor;
var pomosen_zbor;
var attempts;

function StartGame(){

    slucaen_zbor = niza[Math.floor(Math.random() * niza.length)];

    pomosen_zbor = Array(slucaen_zbor.length).fill("-");

    attempts = 5;

    var i = 0;
    pomosen_zbor[i] = slucaen_zbor[i]; //se otkriva prvata bukva

    i = Math.ceil( Math.random() * (slucaen_zbor.length - 1)); //length - 1 i ceil funkcija za da ja isklucime moznosta da ni generirat broj 0, zatoa sto prvata bukva vekje ja otkrivame od start.

    pomosen_zbor[i] = slucaen_zbor[i]; //se otkriva uste edna random bukva

    document.getElementById("zbor").innerText = pomosen_zbor.join(" ");
    document.getElementById("preostanatiobidi").innerText = attempts;
    document.getElementById("letter").innerText = "";
    document.getElementById("mssg").innerText = "";
}

function proverkabukva(){
    let bukvata = document.getElementById("letter").value.toLowerCase();
    let najdena = false;
    document.getElementById("letter").value = "";
    
    for(let i = 0; i < slucaen_zbor.length; i++){
        if(slucaen_zbor[i] == bukvata && pomosen_zbor[i] == "-"){
                pomosen_zbor[i] = bukvata;
                najdena = true;
        }
    }

    if(!najdena){
        attempts--;
        document.getElementById("preostanatiobidi").innerText = attempts;
        if(attempts == 0){
            window.alert("Жалам, играта не е успешна!");
            document.getElementById("mssg").innerText = "Играта заврши, а ти не го погоди зборот. Зборот беше: " + slucaen_zbor;
            attempts = 5;
        }
    } 
    else{
        if(!pomosen_zbor.includes("-")){
            window.alert("Играта е успешна!");
            document.getElementById("mssg").innerText = "Браво го погоди зборот: " + slucaen_zbor + "!";
            attempts = 5;
        }
        else{
            document.getElementById("zbor").innerText = pomosen_zbor.join(" ");
        }
    } 
}

addEventListener("load", StartGame, false)