let Sum = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 10; index++) {
        Sum = index + Sum
    }
    basic.showNumber(Sum)
})
basic.forever(function () {
	
})
