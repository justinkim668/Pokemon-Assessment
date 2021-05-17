const Pokemon = require('../pokemon');
// const attackOpponent = Pokemon.attackOpponent;

describe('Pokemon class', () => {
    // Task 1 definition test
    it('should be defined', () => {
        expect(Pokemon).toBeDefined();
    });

    // Task 2 property initialization tests
    it('should properly initialize all 5 traits', () => {
        const charmander = new Pokemon('Charmander', 100, 110, 130, 'fire');
        expect(typeof charmander.name).toBe('string');
        expect(typeof charmander.attack).toBe('number');
        expect(typeof charmander.defense).toBe('number');
        expect(typeof charmander.health).toBe('number');
        expect(typeof charmander.type).toBe('string');

        expect(charmander.name).toBe('Charmander');
        expect(charmander.attack).toBe(100);
        expect(charmander.defense).toBe(110);
        expect(charmander.health).toBe(130);
        expect(charmander.type).toBe('fire');
        expect(charmander).toBeInstanceOf(Pokemon);
    });

    // Task 3 takeDamage() method test
    it('should have a method called takeDamage() which takes a number as an argument and reduces the health of the pokemon who called it by that number', () => {
        const squirtle = new Pokemon('Squirtle', 110, 100, 120, 'water');
        expect(squirtle).toBeInstanceOf(Pokemon);
        expect(squirtle.takeDamage).toBeDefined();
        expect(typeof squirtle.takeDamage).toEqual('function');
        expect(squirtle.health).toBe(120);
        squirtle.takeDamage(20);
        expect(squirtle.health).toBe(100);
        squirtle.takeDamage(100000);
        expect(squirtle.health).toBe(0);
    });


    // Task 4 attackOpponent() method test
    it('should have a method called attackOpponent() which takes a Pokemon as an argument and reduces the given pokemon\'s health by the proper amount. Seee README.md for damage calculation', () => {
        const charmander = new Pokemon('Charmander', 100, 110, 130, 'fire');
        const squirtle = new Pokemon('Squirtle', 110, 80, 120, 'water');
        const spy = jest.spyOn(squirtle, 'takeDamage');
        
        expect(charmander).toBeInstanceOf(Pokemon);
        expect(squirtle).toBeInstanceOf(Pokemon);
        expect(charmander.attackOpponent).toBeDefined();
        expect(typeof charmander.attackOpponent).toBe('function');

        expect(squirtle.health).toBe(120);
        expect(squirtle.defense).toBe(80);
        charmander.attackOpponent(squirtle);
        expect(squirtle.health).toBe(100);
        expect(spy).toHaveBeenCalled();
        charmander.attackOpponent(squirtle);
        expect(squirtle.health).toBe(80);
        expect(spy).toHaveBeenCalledTimes(2);

    });

    // Task 5 display() method
    it('should have a method called display', () => {
        const bulbasaur = new Pokemon('Bulbasaur', 90, 220, 200, 'grass');
        expect(bulbasaur.display).toBeDefined();
        expect(bulbasaur).toBeInstanceOf(Pokemon);
        expect(typeof bulbasaur.display).toEqual('function');
        expect(typeof bulbasaur.display()).toBe('string');

        expect(bulbasaur.display()).toBe('BULBASAUR (GRASS) 200/200');
        bulbasaur.takeDamage(10);
        expect(bulbasaur.display()).toBe('BULBASAUR (GRASS) 190/200');
    });
});