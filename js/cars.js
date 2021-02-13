class Car {
  constructor(maker, model, color, mileage) {
    this.maker = maker, //メーカー
    this.model = model, //車種
    this.color = color, //カラー
    this.mileage = mileage // 走行距離　※１
  }
    // ※1
    // 例えば、ここで上記のmileageに0を代入してしまうと、新車のインスタンス化しかできなくなる
    // コンストラクターに引数として持たせてしまえば、インスタンス化するときに初めから走行距離のある車（＝中古車）
    // のような振る舞いができるという認識？
  initialize() {
    this.mileage = 0;
  }
    
  drive(km) {
    this.mileage += km;
  }

  getVal() {
    console.log(this);
  }
}


const car = new Car();

car.drive(150);

const car2 = new Car();
car2.drive(10000)








// Carクラスを継承したTruckクラス
class Truck extends Car {
  constructor(maker, model, color, mileage, size) {
    super(maker, model, color, mileage)
    this.size = size
  }

  // ここに独自のメソッドを記述する

}

const truck = new Truck();
truck.drive(300);



// Carクラスを継承したBusクラス
class Bus extends Car {
  constructor(maker, model, color, mileage, size, capacity) {
    super(maker, model, color, mileage);
    this.size = size;
    this.capacity = capacity;
  }

  // ここに独自のメソッドを記述する

}
