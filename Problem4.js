const findLargest = (arr) => {
    let largest = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(largest < arr[i]){
            largest = arr[i];
        }
    }
    console.log(largest);
}

findLargest([5, 1, 9, 3]);