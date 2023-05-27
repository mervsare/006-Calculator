let A = [12, 14, 16, [1,4,7,8]]; 
let B = [11, 13, 17];
//! 1/alternatif
//let C = A.concat(B)
 //A.push(...B)
//console.log(C)
//A.sort((a,b) => a-b)
//console.log(A)



//! 2.alternatif
const alfa = [...A,...B]
alfa.sort((a,b) => a-b)
console.log(alfa)

