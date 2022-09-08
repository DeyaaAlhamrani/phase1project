var x = document.querySelector(".readMore");

function readML(el){
    console.log(el.className);
    console.log(el.style.display);
        if(el.className =="readMore"){
            el.style.display ="none";
            el.nextElementSibling.style.display="inline-block";
        }
        else{
            el.style.display ="none";
            el.previousElementSibling.style.display="inline-block";
        }
        
    };



