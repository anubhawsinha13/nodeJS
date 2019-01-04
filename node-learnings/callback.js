/** Node JS is async in nature */

function addNumber(array, callback){
    console.log('Entering the function')
    var sum = 0
    for(var number in array){
        sum = sum +array[number]
    }
    console.log('calculated the sum')
    callback(sum);
}
console.log('Executing callback.js')
addNumber([10,20,30], function(data){
console.log('entering callback function')
   console.log(data) 
})