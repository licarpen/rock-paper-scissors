// IMPORT MODULES under test here:
import { getWinner } from '../utilities.js';

const test = QUnit.test;

test('Returns string "You" if user plays rock and computer plays scissors', function(assert) {
    // Set up your parameters and expectations
    const user = 'rock';
    const computer = 'scissors';

    // Call the function you're testing and set the result to a const
    const result = getWinner(user, computer);

    // Make assertions about what is expected valid result
    assert.equal(result, 'You');
});

test('Returns string "You" if user plays paper and computer plays rock', function(assert) {
    // Set up your parameters and expectations
    const user = 'paper';
    const computer = 'rock';

    // Call the function you're testing and set the result to a const
    const result = getWinner(user, computer);

    // Make assertions about what is expected valid result
    assert.equal(result, 'You');
});

test('Returns string "You" if user plays scissors and computer plays paper', function(assert) {
    // Set up your parameters and expectations
    const user = 'scissors';
    const computer = 'paper';

    // Call the function you're testing and set the result to a const
    const result = getWinner(user, computer);

    // Make assertions about what is expected valid result
    assert.equal(result, 'You');
});

test('Returns string "Computer" if user plays rock and computer plays paper', function(assert) {
    // Set up your parameters and expectations
    const user = 'rock';
    const computer = 'paper';

    // Call the function you're testing and set the result to a const
    const result = getWinner(user, computer);

    // Make assertions about what is expected valid result
    assert.equal(result, 'Computer');
});

test('Returns string "Computer" if user plays paper and computer plays scissors', function(assert) {
    // Set up your parameters and expectations
    const user = 'paper';
    const computer = 'scissors';

    // Call the function you're testing and set the result to a const
    const result = getWinner(user, computer);

    // Make assertions about what is expected valid result
    assert.equal(result, 'Computer');
});

test('Returns string "Computer" if user plays rock and computer plays scissors', function(assert) {
    // Set up your parameters and expectations
    const user = 'scissors';
    const computer = 'rock';

    // Call the function you're testing and set the result to a const
    const result = getWinner(user, computer);

    // Make assertions about what is expected valid result
    assert.equal(result, 'Computer');
});

test('Returns string "Draw" if user plays rock and computer plays rock', function(assert) {
    // Set up your parameters and expectations
    const user = 'rock';
    const computer = 'rock';

    // Call the function you're testing and set the result to a const
    const result = getWinner(user, computer);

    // Make assertions about what is expected valid result
    assert.equal(result, 'Draw');
});

test('Returns string "Draw" if user plays scissors and computer plays scissors', function(assert) {
    // Set up your parameters and expectations
    const user = 'scissors';
    const computer = 'scissors';

    // Call the function you're testing and set the result to a const
    const result = getWinner(user, computer);

    // Make assertions about what is expected valid result
    assert.equal(result, 'Draw');
});

test('Returns string "Draw" if user plays paper and computer plays paper', function(assert) {
    // Set up your parameters and expectations
    const user = 'paper';
    const computer = 'paper';

    // Call the function you're testing and set the result to a const
    const result = getWinner(user, computer);

    // Make assertions about what is expected valid result
    assert.equal(result, 'Draw');
});


