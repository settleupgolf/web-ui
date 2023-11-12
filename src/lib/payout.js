export function calculate(players, wager) {
	return players.reduce((results, player) => {
		const opponents = players.filter((p) => p.name !== player.name);

		results[player.name] = opponents.reduce((payouts, opponent) => {
			const dots = {
				front: player.front - opponent.front,
				back: player.back - opponent.back,
			};

			if (wager.double) {
				dots.back *= 2;
			}

			const payout = (dots.front + dots.back) * wager.stakes;

			payouts[opponent.name] = payout;

			return payouts;
		}, {});

		return results;
	}, {});
}
