// IMPORT MODULES under test here:
import { getThrowFromNumber } from '../utilities.js';

const test = QUnit.test;

test('Returns string "rock" if random number is 0', function(assert) {
    // Set up your parameters and expectations
    const number = 0;

    // Call the function you're testing and set the result to a const
    const computerThrow = getThrowFromNumber(number);

    // Make assertions about what is expected valid result
    assert.equal(computerThrow, 'rock');
});

test('Returns string "paper" if random number is 1', function(assert) {
    // Set up your parameters and expectations
    const number = 1;

    // Call the function you're testing and set the result to a const
    const computerThrow = getThrowFromNumber(number);

    // Make assertions about what is expected valid result
    assert.equal(computerThrow, 'paper');
});

test('Returns string "scissors" if random number is 2', function(assert) {
    // Set up your parameters and expectations
    const number = 2;

    // Call the function you're testing and set the result to a const
    const computerThrow = getThrowFromNumber(number);

    // Make assertions about what is expected valid result
    assert.equal(computerThrow, 'scissors');
});


