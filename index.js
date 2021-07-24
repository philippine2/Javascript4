function counter() {
    for (var num = 0; num <= 5; num++) {
        console.log(num);
    }
}
counter();    // run the function
counter();

function counter1(startNum) {    //The function is expecting some PARAMETER in order to run
    for (var num = startNum; num >= 0; num--) {
        console.log(num);
    }
}
counter1(6);    // Passing in an ARGUMENT of 6, the console would display: 6, 5, 4, 3, 2, 1, 0
counter1(3);    // Passing in an ARGUMENT of 3, the console would display: 3, 2, 1, 0