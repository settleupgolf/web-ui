<template>
	<div class="stakes">
		<label>stakes</label>
		<input
			:value="stakes"
			type="number"
			@change="$emit('stakes', parseInt($event.target.value, 10))"
		/>
		<label for="double">
			Double on the back
			<input
				:checked="double"
				name="double"
				type="checkbox"
				@change="$emit('double', $event.target.checked)"
			/>
		</label>
	</div>
</template>

<script>
export default {
	name: 'Stakes',
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
