export default class Team {
  constructor(...units) {
    this.members = units;
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже есть');
    }
    this.members.add(character);
  }

  addAll([...characters]) {
    characters.forEach((character) => {
      this.members.add(character);
    });
  }

  toArray() {
    return [...this.members];
  }

  * [Symbol.iterator]() {
    for (const person of this.members) {
      yield person;
    }
  }
}
