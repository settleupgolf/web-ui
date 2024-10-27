<template>
	<div class="home">
		<stakes
			:stakes="stakes"
			:double="double"
			@stakes="stakes = $event"
			@double="double = $event"
		/>
		<scores :players="players" @player-updated="onScoresChange" />
		<Button
			@click="
				players.push({
					name: `Player ${players.length + 1}`,
					front: 0,
					back: 0,
				})
			"
			style="margin-bottom: 1rem"
		>
			Add Player
		</Button>
		<div class="head-to-head-output">
			<div v-for="player in players" :key="player.name" class="head-to-head">
				<strong>{{ player.name }}</strong>
				<table>
					<tr
						v-for="[opponent, pl] in Object.entries(result[player.name])"
						:key="`${player.name}-${opponent}`"
					>
						<td>{{ opponent }}</td>
						<td>{{ pl }}</td>
					</tr>
				</table>
			</div>
		</div>
		<Rules />
	</div>
</template>

<script>
import Button from 'primevue/button';

import { calculate } from '@/lib/payout';

import Scores from '@/components/Scores';
import Stakes from '@/components/Stakes';
import Rules from '@/components/Rules';

export default {
	name: 'Home',
	components: {
		Button,
		Rules,
		Scores,
		Stakes,
	},
	data() {
		return {
			stakes: 10,
			double: true,
			players: [
				{
					name: 'Player One',
					front: 0,
					back: 0,
				},
				{
					name: 'Player Two',
					front: 0,
					back: 0,
				},
				{
					name: 'Player Three',
					front: 0,
					back: 0,
				},
				{
					name: 'Player Four',
					front: 0,
					back: 0,
				},
			],
		};
	},
	computed: {
		result() {
			return calculate(this.players, {
				stakes: this.stakes,
				double: this.double,
			});
		},
	},
	methods: {
		onScoresChange(index, prop, value) {
			this.players[index][prop] = value;
		},
	},
};
</script>
