function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        if (roll === 1) {
            alert('Game over, no more rolls!');
            break;
        }
        if (roll === 4 && goldCoins > 0) {
            goldCoins -= 1;
            alert(`One point deduction. Running total: ${goldCoins}`);
        }
        if (roll < 5) continue;
        goldCoins += roll;
        alert(`Congratulations, you win ${roll} gold coins! Running total: ${goldCoins}`);
    }
    alert(`You have won ${goldCoins} gold coins!`);
}