<template>
	<div class="scores">
		<div v-for="(player, index) in players" :key="index" class="score-row">
			<label>Name</label>
			<input
				:value="player.name"
				type="text"
				@change.stop="
					$emit('player-updated', index, 'name', $event.target.value)
				"
			/>
			<label>Front</label>
			<input
				:value="player.front"
				type="number"
				@change.stop="
					$emit('player-updated', index, 'front', $event.target.value)
				"
			/>
			<label>Back</label>
			<input
				:value="player.back"
				type="number"
				@change.stop="
					$emit('player-updated', index, 'back', $event.target.value)
				"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Scores',
	props: {
		players: {
			type: Array,
			required: true,
		},
	},
};
</script>
