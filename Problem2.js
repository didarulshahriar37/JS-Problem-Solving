const countVowel = (str) => {
    let count = 0;
    for(let i = 0; i<str.length; i++){
        if(str[i].toUpperCase() == "A" || str[i].toUpperCase() == "E" || str[i].toUpperCase() == "I" || str[i].toUpperCase() == "O" || str[i].toUpperCase() == "U"){
            count++;
        }
    }
    console.log(count);
}

countVowel("programming");