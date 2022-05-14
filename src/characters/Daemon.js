import CharacterAdvanced from './CharacterAdvanced';

export default class Daemon extends CharacterAdvanced {
  constructor(name, distanceToEnemy) {
    super(name, distanceToEnemy, 'Daemon');
    this.attack = 100;
    this.defence = 40;
  }
}
