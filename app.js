var counter=0;
setIntervat(function(){

    document.getElementById('radiobtn'+counter).checked=true;
    counter++;

    if(counter>5){
        counter=0;

    }
},6000);