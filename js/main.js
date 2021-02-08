// インスタンス化したときに引数に設定する
const car1 = new Car("Toyota", "C-HR", "Black");
car1.initialize();

const car2 = new Car("Honda", "Vezel", "Red");
car2.initialize();

const truck1 = new Truck("Hino", "Titan", "White", "", "middle");
truck1.initialize();

const bus1 = new Bus("ISUZU", "Garla", "silver", "", "large", 120);
bus1.initialize();


car1.getVal();

car2.drive(2000);
car2.getVal();

truck1.drive(100000);
truck1.getVal();

bus1.getVal();
