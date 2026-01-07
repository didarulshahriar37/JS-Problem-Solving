const reverseString = (str) =>{
    
    let reverse = "";
    for(let i = str.length-1; i>=0; i--){
        reverse = reverse + str[i];
    }

    str.toLowerCase() == reverse.toLowerCase() ? console.log("true" ) : console.log("false");
}

reverseString("hello");
reverseString("madam");