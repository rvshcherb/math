import CharacterAdvanced from './CharacterAdvanced';

export default class Magician extends CharacterAdvanced {
  constructor(name, distanceToEnemy) {
    super(name, distanceToEnemy, 'Magician');
    this.attack = 100;
    this.defence = 40;
  }
}
