this.hello = 'world';

setTimeout(function() {
    console.log('function notation: Hello ' + this.hello);
}, 500);
