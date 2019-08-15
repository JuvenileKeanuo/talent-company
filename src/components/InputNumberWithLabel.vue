<template>
	<Form label-position="top" style="text-align: left;margin: 1em;">
		<Form-item :label="label">
			<Input-number v-model="value" style="width:100%;"></Input-number>
		</Form-item>
	</Form>
</template>

<script>
	export default {
		name: 'InputNumberWithLabel',
		props: {
			label: String,
			initValue: Number
		},
		data() {
			return {
				value: 0
			}
		},
		mounted() {
			this.$data.value = this.$props.initValue
			this.emit()
		},
		methods: {
			emit() {
				this.$emit('input', this.$data.value)
			}
		}
	}
</script>

<style>
</style>
