<template>
	<div style="margin: 1.25rem;">
		<Input v-model="value" @on-change="emit">
		<span slot="prepend">{{label}}</span>
		</Input>
	</div>
</template>

<script>
	export default {
		name: 'InputWithLable',
		props: {
			label: String,
			initValue: String
		},
		data () {
			return {
				value: ''
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
