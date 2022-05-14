import Character from './Character';

export default class AdvancedCharacter extends Character {
  constructor(name, distanceToEnemy, type) {
    super(name, type);
    this.distanceToEnemy = distanceToEnemy;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    this._attack *= (1 - (this.distanceToEnemy - 1) * 0.1);
    if (this._stoned) {
      this._attack -= Math.log2(this.distanceToEnemy) * 5;
    }
    return this._attack;
  }
}
