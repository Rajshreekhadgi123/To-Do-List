

//this function will allow us to check the clicked elements
// li.onclick = function(ev){
//     if(ev.target.tagName == 'li'){
//          ev.target.classList.toggle('checked');
//     }
// };



// variable declaration for  Buttons

var button1 = document.getElementById("btn1");


// for input
var input1 = document.getElementById("add1");


// for ul
var ul1 = document.getElementById("list1");


// -----------------------------------------------------------------------------------------------

// Function for  input 

function inputLength_first() {
    return input1.value.length;
}
function createListElement_first() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input1.value));
    input1.value = ""; 

    // for delete 
    let cross4= document.createElement("i");
    cross4.className="fa-solid fa-trash";
    cross4.addEventListener("click", function (){
        li.remove();
    })
    li.appendChild(cross4);
    ul1.appendChild(li);
 
   

}


// for blank space
function addListAfterClick_first() {
    if (inputLength_first() > 0 && input1.value.trim().length > 0) {
        createListElement_first();
    }
  
}

// for adding items till 8 
function abc(){
    if(ul1.length >= 8)
    {
         btn1.disabled = true;
    }
}





// -----------------------------------------------------------------------------------------------

// keypress event for first input block
function addListAfterKeypress_first(e) {
    if (inputLength_first() > 0 && e.keyCode === 13 && input1.value.trim().length > 0) 
    {
        createListElement_first();
        
    }
   
    
}


 

// -----------------------------------------------------------------------------------------------------

// Click Events for all four Buttons..

button1.addEventListener("click", addListAfterClick_first );

input1.addEventListener("keypress", addListAfterKeypress_first);


