// const submit = document.getElementById("button20");

// // console.log(submit);

// submit.addEventListener("click",()=>{})

// function getValues(){
//    // get the values from the input fields
//     let button1 = document.querySelector("#button1").value;

// }

let string = ''
let buttons = document.querySelectorAll('.button');

// console.log(buttons);

Array.from(buttons).forEach((button)=>{
    // console.log(button);
    button.addEventListener("click",(b)=>{
        // console.log(b.target);
        
            // if(b.target.innerHTML == "="){
            //     string = eval(string);
            //     document.querySelector('input').value = string;
            //     string = ""
            // }
            // else if(b.target.innerHTML == "C"){
            //     string = "";
            //     document.querySelector('input').value = string;
            // }
            // else if(b.target.innerHTML == "CE"){
            //     string = "";
            //     document.querySelector('input').value = string;
            // }
            // else if(b.target.innerHTML == "X"){
            //     string = string.toString().slice(0,-1);
            //     document.querySelector('input').value = string;
            // }
            // else{
            // string = string + b.target.innerHTML;
            // document.querySelector('input').value = string;
            
            try {
            switch (b.target.innerHTML) {
                case "=":
                    
                    string = eval(string);
                    document.querySelector('input').value = string;
                    string = "";                   
                    break;
                case "C":
                    string = "";
                    document.querySelector('input').value = string;
                    break;
                case "CE":
                    string = "";
                    document.querySelector('input').value = string;
                    break;
                case "X":
                    string = string.toString().slice(0,-1);
                    document.querySelector('input').value = string;
                    break;
                default:
                    if(['/', '*', '+', '-', '.', '**', '%'].includes(b.target.innerHTML)){ 
                        if (string.endsWith('.') || string.endsWith('**') || string.endsWith('%') || string.endsWith('/') || string.endsWith('+') || string.endsWith('-') || string.endsWith('*'))  {
                            // showError();
                        }
                    }
                        // code for handling other operators
                        string = string + b.target.innerHTML;
                        document.querySelector('input').value = string;
                    break;
            }
        } catch (error) {
            showError();
            console.log("An Error occured!", error);
            // document.querySelector('input').value = "Error"
        }
        
    })
})

   
function showError() {
    document.querySelector('input').value = "Error";

    let evaluate = document.querySelector("#button20");
    evaluate.addEventListener("click",()=>{
        setTimeout(() =>{
            string = ""
            document.querySelector('input').value = string;
        },100);
    })
    
}