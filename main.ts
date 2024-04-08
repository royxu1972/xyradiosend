let _1000xy = 0
let y = 0
let x = 0
radio.setGroup(88)
basic.forever(function () {
    x = input.rotation(Rotation.Roll)
    y = input.rotation(Rotation.Pitch)
    _1000xy = x + 90 * (1000 + (y + 90))
    radio.sendNumber(_1000xy)
    basic.showNumber(_1000xy)
})
