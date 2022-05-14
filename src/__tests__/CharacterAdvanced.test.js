import Daemon from '../characters/Daemon';
import Magician from '../characters/Magician';

test.each([
  [Daemon, 'Vasya', 2, true, 85],
  [Daemon, 'Vasya', 2, false, 90],
  [Magician, 'Vasya', 2, true, 85],
  [Magician, 'Vasya', 2, false, 90],
])('Attack and stoned test for: %o with name: %s, distance: %s, stoneFlag: %s', (Type, name, distance, stonedFlag, attackValue) => {
  const unit = new Type(name, distance);
  unit.stoned = stonedFlag;
  expect(unit.attack).toBe(attackValue);
  expect(unit.stoned).toBe(stonedFlag);
});
