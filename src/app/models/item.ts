export class Item {
  id?: number;
  name: string;
  price: number;

  constructor(name: string, price: number, id?: number) {
    this.name = name;
    this.price = price;
    if (id) {
      this.id = id;
    }
  }
}
