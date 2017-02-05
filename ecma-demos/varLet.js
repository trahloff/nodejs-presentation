function varTest() {
    var x = 1;
    if (true) {
        var x = 2;
        console.log('var  innerhalb if: ' + x);
    }
    console.log('var  außerhalb if: ' + x);
}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;
        console.log('let innerhalb if: ' + x);
    }
    console.log('let außerhalb if: ' + x);
}

varTest();
letTest();
