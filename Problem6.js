const sum = (arr) => {
    let result = 0;
    for(let i = 0; i<arr.length; i++){
        result += arr[i];
    }
    console.log(result);
}

sum([1, 2, 3, 4]);