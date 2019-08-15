<template>
	<Form label-position="top" style="text-align: left;">
		<Form-item :label="label">
			<Row>
				<Col span="16">
				<Cascader :data="data" v-model="value1" @on-change="emit()" @on-visible-change="emit()" change-on-select></Cascader>
				</Col>
				<Col span="8">
				<Input-number v-model="value2" @on-change="emit()" style="width:95%; margin-bottom: 10px; margin-left: 5%; margin-right: 5px;"></Input-number>
				</Col>
			</Row>
		</Form-item>
	</Form>
</template>

<script>
	export default {
		name: 'CascaderWithInputWithLabel',
		props: {
			label: String,
			data: Array,
			initValue: Array,
			initNum: Number
		},
		data() {
			return {
				model1: '',
				value1: [],
				value2: null
			}
		},
		mounted() {
			if (this.$props.initValue !== undefined && this.$props.initValue !== null) {
				this.$data.value1 = this.$props.initValue
			}
			if (this.$props.initNum !== undefined && this.$props.initNum !== null) {
				this.$data.value2 = this.$props.initNum
			}
			this.emit()
		},
		methods: {
			emit() {
			    console.log('cascader change', this.$data.value1)
				setTimeout(() => {
					var obj = {
						cas: this.$data.value1,
						num: this.$data.value2
					}
					if (this.$data.value1.length && this.$data.value2) {
						this.$emit('input', obj)
					} else {
						this.$emit('input', null)
					}
				}, 100)
			}
		}
	}
</script>

<style>
</style>
