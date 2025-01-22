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
        }
    }

}