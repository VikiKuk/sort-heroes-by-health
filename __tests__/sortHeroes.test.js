import { sortHeroesByHealth } from '../src/sortHeroes';

test('heroes should be sorted by health descending', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 }
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 }
  ];

  expect(sortHeroesByHealth(input)).toEqual(expected);
});