import data from '../../data/courses.json';

// Numbers
const numItems = data.length;

describe('Number tests', () => {
    test('Number of items = 12', () => {
        expect(numItems).toBe(12);
    });

    test('Number of items to be greater than 12', () => {
        expect(numItems).toBeGreaterThanOrEqual(12);
    });

});


// Strings
describe('String tests', () => {
    const dataTest = data[0].title;

    test('There is a JS in this title', () => {
        expect(dataTest).toMatch(/JS/);
    });

    test('The title contains React', () => {
        expect(dataTest).toContain('React');
    });
});

// Arrays
describe('Array tests', () => {
    const data2 = ['React Native', 'MeteorJS'];

    test('The list of courses mentions React Native and MeteorJS', () => {
        expect(['React Native', 'MeteorJS', 'React'])
            .toEqual(expect.arrayContaining(data2));
    });
});

// Objects
describe('Object tests', () => {
    test('The first course to have a property of Title', () => {
        expect(data[0]).toHaveProperty('title');
    });

    test('The number of view to be 31,266', () => {
        expect(data[0]).toHaveProperty('views', '31,266');
    });
});
