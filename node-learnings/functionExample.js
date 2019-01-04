

/**This is a constructor example */
function functionExample(){

    this.name = 'John';
    this.age = 23;
}

functionExample.prototype.testFunction  = function(){
    console.log('This is a test function');
}

functionExample.prototype.functionExampleValues = function(){

    console.log('The name is ' + this.name);
    console.log('The age is ' +this.age);
}

module.exports = functionExample;