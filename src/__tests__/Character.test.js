import Character from '../characters/Character';
import Daemon from '../characters/Daemon';
import Magician from '../characters/Magician';

test.each([
  [Daemon, 'Vasya'],
  [Magician, 'Vasya'],
])('Name test for: %o with name: %s', (Type, name) => {
  const unit = new Type(name);
  expect(unit.name).toBe(name);
});

test.each([
  [Daemon, '0'],
  [Magician, ''],
])('Incorrect name test for: %o with name: %s', (Type, name) => {
  const unit = new Type(name);
  expect(() => {
    unit.name();
  }).toThrow('Недопустимая длина имени');
});

test.each([
  ['Character', 'Daemon'],
  ['Character', 'Magician'],
])('Type test for: %o with type %s', (name, type) => {
  const unit = new Character(name, type);
  expect(unit.type).toBe(type);
});

test('Incorrect type test for character', () => {
  const unit = new Character('testName', 'Soldier');
  expect(() => {
    unit.type();
  }).toThrow('Недопустимый тип персонажа');
});

test('levelUp test', () => {
  const unit = new Daemon('vasya');
  unit.levelUp();
  expect(unit.level).toBe(2);
  expect(unit.health).toBe(100);
  expect(unit.defence).toBe(48);
});

test('levelUp error test', () => {
  const unit = new Daemon('vasya');
  unit.health = 0;
  expect(() => unit.levelUp()).toThrow('Нельзя повысить левел умершего');
});

test.each([
  [100, 85],
  [-2, -2],
])('test damage', (health, expected) => {
  const unit = new Daemon('vasya');
  unit.health = health;
  unit.damage(25);
  expect(unit.health).toBe(expected);
});
