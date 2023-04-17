const palindrome = (str) => {
    let res = ""
    for (let i = str.length - 1; i >= 0; i--){
        res+=str[i]
    }
    res==str ? console.log("Yes") : console.log("No");
}

palindrome("maam")
