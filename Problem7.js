const even = (num) => {
    let evenNum = [];
    for(let i = 0; i<num.length; i++){
        if(num[i] %2 == 0){
            evenNum.push(num[i]);
        }
    }
    console.log(evenNum);
}

even([1, 2, 3, 4, 5, 6]);