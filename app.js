var counter=0;
setInterval(function(){

    document.getElementById('radiobtn'+counter).checked=true;
    counter++;

    if(counter>5){
        counter=0;

    }
},5000);