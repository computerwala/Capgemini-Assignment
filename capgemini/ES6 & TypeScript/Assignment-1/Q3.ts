/*3.Enhanced object properties: Create an ‘Order’ object 
having data members ‘id’, ‘title’, ‘price’. Add the methods 
printOrder() & getPrice(). Now, copy the order object using 
Object.assign().*/

let obj = {id:1,title:"one",price:50};

const temp = {
	printOrder(){
		return obj;
}};
console.log(temp.printOrder());

const tmp = {
	getPrice(){
		return obj.price;
}};
console.log(tmp.getPrice());

let object = Object.assign({},obj);
console.log(object);