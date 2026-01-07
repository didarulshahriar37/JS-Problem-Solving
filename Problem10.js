const printNum = (num) => {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            arr.push("PingPong");
        }
        else if (i % 5 == 0) {
            arr.push("Pong");
        }
        else if (i % 3 == 0) {
            arr.push("Ping");
        }
        else{
            arr.push(i);
        }
    }
    console.log(arr.join(", "));
}

printNum(20);