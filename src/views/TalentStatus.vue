<template>
	<div class="box">
		<el-tabs tab-position="left">
			<el-tab-pane v-for="(item,index) in result" :key="index" :label="item['year']">
				<p class="title">单位人才情况汇总表-存量信息-{{item.year}}年</p>
				<TalentStatus v-model="item.info" :initObj="initArray[index]['info']"></TalentStatus>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>
<style scoped>
	.box {
		margin-top: 20px;
	}

	.title {
		text-align: center;
		font-size: 16px;
		font-weight: bolder;
	}
</style>
<script>
	import TalentStatus from '../components/TalentStatus.vue'

	export default {
		components: {
			TalentStatus,
		},
		data() {
			return {
				result: [{
						"year": "2009",
						"info": null
					},
					{
						"year": "2010",
						"info": null
					},
					{
						'year': '2011',
						"info": null
					},
					{
						'year': '2012',
						"info": null
					},
					{
						'year': '2013',
						"info": null
					},
					{
						'year': '2014',
						"info": null
					},
					{
						'year': '2015',
						"info": null
					},
					{
						'year': '2016',
						"info": null
					},
					{
						'year': '2017',
						"info": null
					},
					{
						'year': '2018',
						"info": null
					}
				],
				initArray: []
			}
		},
		beforeMount() {
			console.log('created')
			this.$data.initArray = this.$store.state.form._summary
			console.log(this.$data.initArray)
		},
		watch: {
			result: {
				handler(val, oldval) {
					this.$store.state.form._summary = this.$data.result
				},
				deep: true
			}
		}
	}
</script>
