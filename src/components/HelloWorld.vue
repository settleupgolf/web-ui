<template>
	<div class="home">
		<stakes
			:stakes="stakes"
			:double="double"
			@stakes="stakes = $event"
			@double="double = $event"
		/>
		<scores :players="players" @player-updated="onScoresChange" />
		<div class="head-to-head-output" style="text-align: left">
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
	</div>
</template>

<script>
import { calculate } from '@/lib/payout';

import Scores from '@/components/Scores';
import Stakes from '@/components/Stakes';

export default {
	name: 'Home',
	components: {
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
