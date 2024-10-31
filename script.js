// using alert so that user could know ......

alert("Greetings User !!! Welcome to random Color Generator!!!!!!");

// fetching each value form HTML using quarrySelector.....
let inputBox = document.querySelector("#input-box");
let container = document.querySelector(".container");
let headingContainer = document.querySelector(".heading");

// we create a funciton to create the number  of boxes......

    inputBox.addEventListener("keyup" ,(event) =>{

        // converting the user input into integer format......
        let noOfBoxes = parseInt(inputBox.value);
        // problem faced is to generate the boxes only after user presses Enter solution
        if(event.key == "Enter"){
        if(noOfBoxes > 0){

            // making the initial box display none....
            
            headingContainer.style.display = "none";

        // then we use loop to generate the number of boxes....    
        for(let i = 1 ; i <= noOfBoxes; i ++){
        let divBoxes = document.createElement("div");
        divBoxes.className = "color-container";
        container.appendChild(divBoxes);
        divBoxes.style.backgroundColor = getrandomColor();
            divBoxes.innerHTML = "#" + getrandomColor();
        }
    }
}

    })

    // function used to generate random color ...............
    function getrandomColor(){
        let hex = "0123456789ABCDEF";
        let color ="#"
        for(let i = 1 ; i <= 6 ; i++){
            color += hex[Math.floor(Math.random()*hex.length)];
        }
        return color;
    }