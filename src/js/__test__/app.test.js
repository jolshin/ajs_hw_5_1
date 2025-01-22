import Heroe from "../heroes.js";

test('make a new heroe', () => {
  
    const data = {name: 'Лучник', type: 'Bowman'};

    const expected = {
      "defence": 25, 
      "attack": 25, 
      "health": 100, 
      "level": 1, 
      "name": "Лучник", 
      "type": "Bowman"
    };
    
    const received = new Heroe(data);

    expect(received).toEqual(expected);

});

test('naming condition (if the name is less than 2 symbols)', () => {

  const data = {name: '', type: 'Bowman'};

  expect(() => new Heroe(data)).toThrow(Error);
  
});

test('naming condition (if the name is more than 10 symbols)', () => {

  const heroe = {name: '12345678900', type: 'Bowman'};

  expect(() => new Heroe(heroe)).toThrow(Error);
  
});

test('type condition (if the type is out of the list)', () => {

  const data = {name: 'Лучник', type: 'B'};

  expect(() => new Heroe(data)).toThrow(Error);
  
});

test('levelUp method (if the heroe is alive)', () => {

  const data = {name: 'Лучник', type: 'Bowman'};

  const expected = {
    "defence": 30, 
    "attack": 30, 
    "health": 100, 
    "level": 2, 
    "name": "Лучник", 
    "type": "Bowman"
  };
    
  const received = new Heroe(data);

  received.levelUp();

  expect(received).toEqual(expected);

});

test('levelUp method (if the heroe is dead)', () => {

  const data = {name: 'Лучник', type: 'Bowman'};
    
  const heroe = new Heroe(data);

  heroe.health = 0;

  expect(() => heroe.levelUp()).toThrow(Error);

});

test('damage method (if health > 0)', () => {

  const data = {name: 'Лучник', type: 'Bowman'};

  const expected = {
    "defence": 25, 
    "attack": 25, 
    "health": 85, 
    "level": 1, 
    "name": "Лучник", 
    "type": "Bowman"
  };
    
  const received = new Heroe(data);

  received.damage(20);

  expect(received).toEqual(expected);

});


test('damage method (if health <= 0)', () => {

  const data = {name: 'Лучник', type: 'Bowman'};

  const expected = {
    "defence": 25, 
    "attack": 25, 
    "health": 0, 
    "level": 1, 
    "name": "Лучник", 
    "type": "Bowman"
  };
    
  const received = new Heroe(data);

  received.damage(1000);

  expect(received).toEqual(expected);

});