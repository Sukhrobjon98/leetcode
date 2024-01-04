function hammingWeight(n){
    let count = 0;
    while(n){
        n = n & (n-1);
        count++;
    }
    return count;
}


console.log(hammingWeight('00000000000000000000000000001011'));