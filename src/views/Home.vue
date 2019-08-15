<template>
	<div class="home">
		<Card :bordered="false" style="width:600px;text-align: left;margin:100px;">
			<p slot="title">性别结构</p>
			<InputWithLabel label="姓名" v-model="form[0]" />
			<InputWithLabel label="组织机构代码" v-model="form[1]" />
		</Card>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'
	import InputWithLabel from '@/components/InputWithLabel.vue'
	import InputNumberWithLabel from '@/components/InputNumberWithLabel.vue'
	import SelectWithLabel from '@/components/SelectWithLabel.vue'

	export default {
		name: 'home',
		components: {
			HelloWorld,
			InputWithLabel,
			SelectWithLabel,
			InputNumberWithLabel
		},
		data: () => ({
			form: {},
			citys: [{
					value: '哈尔滨',
					label: '哈尔滨'
				},
				{
					value: '齐齐哈尔',
					label: '齐齐哈尔'
				}
			],
			testinit: '齐齐哈尔'
		}),
		methods: {
			test() {
				console.log(this.$data.form)
			}
		},
	}
</script>
