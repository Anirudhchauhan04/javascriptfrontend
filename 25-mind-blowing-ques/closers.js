//? function to print no 1 to 5 after i seconds

// function x () {
//     for(var i = 1; i<=5; i++){
//         function close(x){
//             setTimeout(function() {
//                 console.log(x);
//             }, x * 1000);
//         }
//         close(i);// ! in this we are using close function to make a different var i eack time the function is running
//     }
//     console.log("good morning");
// }

// x();



function ab(){
    let x = 10;
    function ac(){
        console.log(x);
    }
    return ac();
}


ab();