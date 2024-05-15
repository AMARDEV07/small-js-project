const inputbox=document.getElementById("myinput");
const listcontainer=document.querySelector(".list-container");




function newElement(){
//jan empety hoga toh alerty so hoga
    if(inputbox.value===''){
        alert("write somthing");
      
    }


    //nahi toh 
    //li add kr do.......
    else{
        let li=document.createElement("li");
        //crete
        li.innerText=inputbox.value;
        //chnge
        listcontainer.appendChild(li);
        //apend

//add span tag for x
        //append x span crete 
        let span =document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    //bhai jessa tum add kr do gya toh inputvox wokhali ho jayga
    inputbox.value="";
    savedata();
    //use for empty box//
    // -------------------------------------------------

}
//click event lsitner on check box checked 

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
//delet// remove x   

    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();}
        savedata();

    },false);

//save data in brower
    function savedata(){
        localStorage.setItem("data",listcontainer.innerHTML);
    }

    //data removed nahi hoga 

    function showtask(){
        listcontainer.innerHTML=localStorage.getItem("data");

    }
   showtask();