<template>
	<div class="stakes">
		<InputGroup class="stakes--value">
			<InputGroupAddon>stakes</InputGroupAddon>
			<InputNumber
				:modelValue="stakes"
				@input="$emit('stakes', $event.value)"
			/>
		</InputGroup>
		<div class="stakes--double">
			<Checkbox
				:modelValue="double"
				:binary="true"
				@change="$emit('double', !double)"
			/>
			<label for="double"> Double on the back </label>
		</div>
	</div>
</template>

<script>
import Checkbox from 'primevue/checkbox';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputNumber from 'primevue/inputnumber';

export default {
	name: 'Stakes',
	components: {
		Checkbox,
		InputGroup,
		InputGroupAddon,
		InputNumber,
	},
	props: {
		double: {
			type: Boolean,
			default: true,
		},
		stakes: {
			type: Number,
			required: true,
		},
	},
};
</script>

<style lang="scss">
.stakes {
	display: grid;
	grid-template-columns: repeat(2, 0.5fr);
	grid-gap: 10px;
	align-items: center;

	margin-bottom: 2rem;
}
</style>
