<template>
	<div class="scores">
		<div v-for="(player, index) in players" :key="index" class="score-row">
			<div class="score-group">
				<InputText
					:modelValue="player.name"
					@update:modelValue="$emit('player-updated', index, 'name', $event)"
				/>
				<div class="player-scores">
					<InputGroup class="scores-group--front">
						<InputGroupAddon>Front</InputGroupAddon>
						<InputNumber
							:modelValue="player.front"
							@input="$emit('player-updated', index, 'front', $event.value)"
						/>
					</InputGroup>
					<InputGroup class="score-group-back">
						<InputGroupAddon>Back</InputGroupAddon>
						<InputNumber
							:modelValue="player.back"
							@input="$emit('player-updated', index, 'back', $event.value)"
						/>
					</InputGroup>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';

export default {
	name: 'Scores',
	components: {
		InputGroup,
		InputGroupAddon,
		InputNumber,
		InputText,
	},
	props: {
		players: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style lang="scss">
.scores {
	margin-bottom: 2rem;
}

.score-row {
	margin-bottom: 2rem;
}

.score-group {
	display: grid;
	grid-template-rows: 1fr;
	grid-gap: 5px;
	margin: 10px auto;
}

.player-scores {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 10px;
}
</style>
