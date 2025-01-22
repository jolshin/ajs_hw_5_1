import Heroe from "../heroe.js";
import { charactersList } from "../character";

test('make a new heroe', () => {
  
    const heroe = {name: 'Лучник', type: 'Bowman'};

    const expected = {
      "armor": 25, 
      "attack": 25, 
      "health": 100, 
      "level": 1, 
      "name": "Лучник", 
      "type": "Bowman"
    };
    
    const received = new Heroe(heroe);

    expect(received).toEqual(expected);

});

test('error test - if name is less than 2 symbols', () => {

  const heroe = {name: '', type: 'Bowman'};

  expect(() => new Heroe(heroe)).toThrow(Error);
  
})

test('error test - if name is more than 10 symbols', () => {

  const heroe = {name: '12345678900', type: 'Bowman'};

  expect(() => new Heroe(heroe)).toThrow(Error);
  
})

test('error test - iftype is out of the list', () => {

  const heroe = {name: 'Лучник', type: 'B'};

  expect(() => new Heroe(heroe)).toThrow(Error);
  
})