var userInput1;
var userInput2;
var userInput3;

$("#sandwich").click(function(){
    userInput1=$("#input1").val();
    userInput2=$("#input2").val();
    userInput3=$("#input3").val();
    lunchTime(userInput1,userInput2,userInput3);
});

function lunchTime(ing1,ing2,ing3){
    return $("#message").text("Here is your " +ing1+", "+ing2+", and "+ ing3+ " sandwich!");
    
}