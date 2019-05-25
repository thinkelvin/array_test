var A = {a:1, b:4}; // A is an object with two properties: 'a" and 'b' and values 1, 2 accordingly
console.log(A['a']);
console.log(A.b);
console.log(Object.keys(A).length);
var B = [1, 2]; // B is an array with two entries
console.log(B.length);
console.log(Object.keys(A));
var ObjectArray = {
    client1: new Array()
}
ObjectArray.client1[0] = 0;
ObjectArray.client1[1] = 1;
console.log(ObjectArray.client1[0]);
ObjectArray.client2 = new Array();
ObjectArray.client2[0] = 2;
console.log(ObjectArray.client2[0]);
var ArrivalTimes={};
ArrivalTimes.client1 = 10;
console.log(ArrivalTimes.client1);
if (!ArrivalTimes.hasOwnProperty('client2')) {
    console.log("Client 2 not connected");
}