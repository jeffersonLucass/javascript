const endIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/

console.log(endIp.test("127.0.0.1"));
console.log(endIp.test("244.178.44.111"));
console.log(endIp.test("244.178.44.1111"));
