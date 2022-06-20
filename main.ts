radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 0) {
        basic.showIcon(IconNames.Sad)
        basic.showNumber(receivedNumber)
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
        basic.showString("Game Over")
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Reset")
    control.reset()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Game Over") {
        basic.showIcon(IconNames.No)
        basic.showString("Game Over")
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    }
})
radio.setGroup(183)
basic.showIcon(IconNames.Happy)
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
