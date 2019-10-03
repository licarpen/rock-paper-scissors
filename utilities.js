

export const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
};

export const getThrowFromNumber = (n) => {
    // switch to array if time
    const plays = ['rock', 'paper', 'scissors'];
    return plays[n];
};

export const getWinner = (userPlay, computerPlay) => {
    if ((userPlay === 'rock' && computerPlay === 'scissors')
    || (userPlay === 'scissors' && computerPlay === 'paper')
    || (userPlay === 'paper' && computerPlay === 'rock')){
        return 'You';
    }
    else if (userPlay === computerPlay){
        return 'Draw';
    }
    else
        return 'Computer';
};
