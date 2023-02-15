function GameDevice(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

GameDevice.prototype.connect = function () {
    if (this.isPlugged === false) {
        console.log(`${this.name} был подключен!`);
        this.isPlugged = true;
    } else {
        console.log('Устройство уже подключено к розетке!')
    }
}
GameDevice.prototype.disconnect = function () {
    if (this.isPlugged === true) {
        console.log(`${this.name} был отключен от сети!`);
        this.isPlugged = false;
    } else {
        console.log('Устройство уже было отключено от сети!')
    }
}

function Computer(name, brand, power, type, functionality){
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
}

Computer.prototype = new GameDevice();


function Light(name, brand, power, type, color) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.color = color
}

Light.prototype = new GameDevice();


//создаем примеры

const gamePC = new Computer('Game PC', 'HYPERPC', 400, 'Game', 'for the game');
const backLight = new Light('Backlight for the computer table', 'HYPER', 10, 'LED', 'RGB');


//подключаем наши устройства
gamePC.connect();
backLight.connect();

//проверяем
console.log(gamePC)
console.log(backLight)


//отключяем от сети
gamePC.disconnect();
backLight.disconnect();

//проверяем
console.log(gamePC)
console.log(backLight)

//рассчитаим общую мощность
console.log(`Общая мощность составляет ${gamePC.power + backLight.power} W!`)