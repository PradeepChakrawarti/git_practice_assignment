let count = 0
let num = 13 
for(let i=1;i<=num;i++){
    if(num%i==0){
        count++;
    }
    if(count==1){
        console.log("prime number")
    }else{
        console.log("not prime number")
    }
}