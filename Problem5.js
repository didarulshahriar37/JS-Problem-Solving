const removeDuplicates = (arr) => {
    let updatedArr = [];
    for(let i = 0; i<arr.length; i++){
        if(updatedArr.includes(arr[i])){
            continue;
        }
        else{
            updatedArr.push(arr[i]);
        }
    }
    console.log(updatedArr);
}

removeDuplicates([1, 2, 2, 3, 4, 2, 4]);