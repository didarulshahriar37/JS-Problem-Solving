const capitalFirst = (str) => {
    let words = str.split(" ");
    let capFirstWord = "";

    for(let i = 0; i<words.length; i++){
        capFirstWord = capFirstWord + words[i][0].toUpperCase() + words[i].slice(1);

        if(i < words.length - 1){
            capFirstWord = capFirstWord + " ";
        }
    }
    console.log(capFirstWord);
}

capitalFirst("hello world");