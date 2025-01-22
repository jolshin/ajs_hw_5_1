export const charactersList = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']

function checkParams (name, type) { 
    if (name.length < 2 || name.length > 10 || !charactersList.includes(type) ) {
        return true;
    } else {
        return false;
    }
}

export default class Character {
    constructor(data) {
        if (checkParams(data.name, data.type)) {
            throw new Error ('Недопустимый параметр')
        } else {
            this.name = data.name;
            this.type = data.type;
            this.health;
            this.level;
            this.attack;
            this.defence;
        }
    };

    levelUp() {
        if (this.health !== 0) {
            this.level += 1;
            this.attack += 0.2*this.attack;
            this.defence += 0.2*this.defence;
            this.health = 100;
        } else {
            throw new Error ('нельзя повысить левел умершего')
        }
    };

    damage(points) {
        if (points * (1 - this.defence / 100) <= 100) {
            this.health -= points * (1 - this.defence / 100)
        } else {
            this.health = 0;
        }
    };

}