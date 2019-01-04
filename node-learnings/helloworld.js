var helloworld_text= 'Hello World!!!'
console.log(helloworld_text)

/* Defining variables in Node*/
var string = 'This is a string'
var string2 = " This is another string"
var number = 23
var boolean = true
var string3= 23
console.log(string, string2, number*2, boolean)
console.log(number ==string3)

/*Defining arrays*/
 var array = ['string', 'string2', 'string3'];
 console.log(array[1])
 /* How to add an element */
 array.push('string4');
 console.log(array.length)

 /* defining objects */

 var object  = {'name' : 'John', 'age' : 23, array : ['string', 'string2']}
 console.log(object)
 console.log(object.name)

 object['email'] = 'sample@email.com'
 object.lname = 'Sam'

 console.log(object)

 /*Find the type of variable */
 console.log(typeof[array])

 /*conditional statements*/

 var clear = true
 if(clear)
 {
     console.log('Inside if loop')
 }

 if(2=='2'){
     console.log('Inside if check loop')
 }

 var i=0

 while(i<5){
     i++
     console.log(i)
 }

 for(var element in array){
     console.log(array[element])
 }

 /** functions in nodeJS */

 function testFunction(){
     console.log('Test finction called');
 }
 testFunction();

 function addNumber(a,b){

    return a+b;
 }
 var a = 2
 var b =3
 console.log(addNumber(a,b));
 var sum = addNumber(addNumber(2,3),10)
 console.log(sum);