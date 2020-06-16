basic.forever(function () {
    maqueen.ServoRun(maqueen.aServos.S1, 0)
    maqueen.ServoRun(maqueen.aServos.S2, 0)
    basic.pause(2000)
    maqueen.ServoRun(maqueen.aServos.S1, 180)
    maqueen.ServoRun(maqueen.aServos.S2, 180)
    basic.pause(2000)
})
