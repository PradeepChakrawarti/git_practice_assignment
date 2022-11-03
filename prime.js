const Prime_Check = (Num) => {
    let count = 0;
    for (let i = 1; i < Num; i++) {
        if (Num % i === 0) {
            count++;
        }
    };
    if (count > 1) {
        console.log("Not Prime");
    } else {
        console.log("Prime");


    }
};

Prime_Check(19);