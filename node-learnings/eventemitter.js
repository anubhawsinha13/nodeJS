

var events = require('events');
var eventEmitter = new events.EventEmitter();

var function1 = function(){
    eventEmitter.emit('function2')
}

var function2 = function(){
    console.log('Function 2');
}

eventEmitter.on('function1', function1);
eventEmitter.on('function2', function2);

eventEmitter.emit('function1');
console.log(require('events').EventEmitter.listenerCount(eventEmitter,'function1'))
