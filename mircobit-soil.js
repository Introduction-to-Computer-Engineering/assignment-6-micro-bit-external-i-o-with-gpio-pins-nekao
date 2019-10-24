let moistureReading = 0 // giving moisture a default value of 0
basic.forever(function () { // using a forever loop
 
 pins.digitalWritePin(DigitalPin.P6, 1) //setting the value to 1 to turn on the sensor to prevent over use that may cause damage 
 moistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), 10, 750, 0, 4) // set the values for the sensor to read
 basic.showNumber(Math.round(moistureReading)) // this displays the input
 pins.digitalWritePin(DigitalPin.P6, 0)// turns the sensor off again to prevent over use 
 basic.pause(2000)// adds a pause 
})