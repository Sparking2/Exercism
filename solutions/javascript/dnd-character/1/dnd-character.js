//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (input) => {
  if(input < 3) throw new Error("Ability scores must be at least 3");

  if(input > 18) throw new Error("Ability scores can be at most 18");
  
  return Math.floor((input - 10) / 2);
};

export class Character {
  
  static rollAbility() {
    const random = () => {
      return Math.floor(Math.random() * 6) + 1;
    }

    const results = [];
    for(let i = 0; i < 4; i++){
      results.push(random());
    }
    results.sort((a,b) => a - b);
   
    return results[3] + results[2] + results[1];
  }

  get strength() {
    if(!this.str){
      this.str = Character.rollAbility();
    }
    return this.str;
  }

  get dexterity() {
    if(!this.dex){
      this.dex = Character.rollAbility();
    }
    return this.dex;
  }

  get constitution() {
    if(!this.const){
      this.const = Character.rollAbility();
    }
    return this.const;
  }

  get intelligence() {
    if(!this.int){
      this.int = Character.rollAbility();
    }
    return this.int;
  }

  get wisdom() {
    if(!this.wis){
      this.wis = Character.rollAbility();
    }
    return this.wis;
  }

  get charisma() {
    if(!this.char){
      this.char = Character.rollAbility();
    }
    return this.char;
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution);
  }
}
