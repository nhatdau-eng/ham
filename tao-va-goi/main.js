function processConfirm(answer){
    let result ="";
    if (answer){
        result = "exellent.We'll play a nice game of chess.";
    }else {
        result = "Maybe later then.";
    }
    return result;
}
let confirmAnswer = confirm("Shaw we play a game?");
let theAnswer = processConfirm(confirmAnswer);
alert(theAnswer);
