const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: 'foo' };
    const actual = utils.trimProperties(input);
    expect(actual).not.toBe(input);
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo  ' };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toBe(input);
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }];
    const expected = 3;
    const actual = utils.findLargestInteger(input);
    expect(actual).toBe(expected);
  })
})

describe('[Exercise 4] Counter', () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const actual = counter.countDown();
    const expected = 3
    expect(actual).toBe(expected)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown();
    const actual = counter.countDown();
    const expected = 2;
    expect(actual).toBe(expected);
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    for (let i = 0; i < 5; i++) counter.countDown();
    const actual = counter.countDown();
    const expected = 0;
    expect(actual).toBe(expected);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const actual = seasons.next();
    const expected = 'summer';
    expect(actual).toBe(expected);
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next();
    const actual = seasons.next();
    const expected = 'fall';
    expect(actual).toBe(expected);
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    const calls = 3;
    for (let i = 0; i < calls - 1; i++) seasons.next();
    const actual = seasons.next();
    const expected = 'winter';
    expect(actual).toBe(expected);
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    const calls = 4;
    for (let i = 0; i < calls - 1; i++) seasons.next();
    const actual = seasons.next();
    const expected = 'spring';
    expect(actual).toBe(expected);
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    const calls = 5;
    for (let i = 0; i < calls - 1; i++) seasons.next();
    const actual = seasons.next();
    const expected = 'summer';
    expect(actual).toBe(expected);
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    const calls = 40;
    for (let i = 0; i < calls - 1; i++) seasons.next();
    const actual = seasons.next();
    const expected = 'spring';
    expect(actual).toBe(expected);
  })
})

describe('[Exercise 6] Car', () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    const actual = focus.drive(50);
    const expected = 50;
    expect(actual).toBe(expected);
  })
  test('[16] driving the car uses gas', () => {
    const startingFuel = focus.fuel;
    focus.drive(30);
    const endingFuel = focus.fuel;
    expect(endingFuel).toBeLessThan(startingFuel);
    expect(endingFuel).toBe(19);
  })
  test('[17] refueling allows to keep driving', () => {
    let odometer = focus.drive(1000);
    let fuel = focus.fuel;
    expect(fuel).toBe(0)
    expect(odometer).toBe(600);
    focus.refuel(10);
    odometer = focus.drive(60);
    fuel = focus.fuel;
    expect(fuel).toBe(8);
    expect(odometer).toBe(660);
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    expect(focus.fuel).toBe(20);
    focus.refuel(10);
    expect(focus.fuel).toBe(20);
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const result1 = await utils.isEvenNumberAsync(10);
    expect(result1).toBe(true);
  })
  test('[20] resolves false if passed an odd number', async () => {
    const result2 = await utils.isEvenNumberAsync(13);
    expect(result2).toBe(false);
  })
})
