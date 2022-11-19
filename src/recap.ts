const myName = 'Pepe 7-s';
const myAge = 18;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(12, 23);

class Persona {
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const pepe = new Persona(15, 'pepe 7-s');
pepe.getSummary();
