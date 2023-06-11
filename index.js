function shout(word){
    return word.toUpperCase();
}

function whisper(word){
    return word.toLowerCase();
}

function logShout(word){
    console.log (word.toUpperCase());
}

function logWhisper(word){
    console.log (word.toLowerCase());
}


function sayHiToHeadphonedRoommate(word){
    if(whisper(word) === word){
        return "I can\'t hear you!"
    }
    else if(shout(word) === word){
        return "YES INDEED!"
    }
    else if(word === "Let\'s have dinner together!"){
        return "I would love to!"
    }
    
}