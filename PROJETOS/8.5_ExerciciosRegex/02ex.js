const regex = /.*ID\b/;
// \b e $ signfica que o 'ID' deve estar no final da string.

console.log(regex.test("userID")); 
console.log(regex.test("123ID"));  
console.log(regex.test("ID"));     
console.log(regex.test("ID123"));  
console.log(regex.test("abc"));    
