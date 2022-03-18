function Upper(){
    let uppeCont = document.getElementById("campText");
     uppeCont.value = uppeCont.value.toLocaleUpperCase();
     uppeCont.style = "text-transform: none";
}

function Lowern(){
   let lowernCont = document.getElementById("campText");
   lowernCont.value =lowernCont.value.toLowerCase();
   lowernCont.style = "text-transform: none";
   
}

function Cap(){
   let capCont = document.getElementById("campText");
   capCont.style = "text-transform:capitalize";
}

function Cop(){
   let copCont = document.getElementById("campText");
   copCont.select();
   document.execCommand('copy');
}

function limpar(){
   document.getElementById('campText').value='';
}
