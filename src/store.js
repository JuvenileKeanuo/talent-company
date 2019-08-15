import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 155,
		loaded: false,
		form: {
			_from_user: null,
			_confirmed: false,
			_basic: {
				'单位名称': null,
				'统一社会信用代码': null,
				'所属地域': null,
				'所属行业': null,
				'行业分类': null,
				'单位性质': null,
				'填报人': null,
				'联系电话': null,
				'QQ': null,
				'微信': null,
				'电子邮箱': null
			},
			_summary: [],
			_sum_in: [],
			_sum_out: [],
			_out_status: [],
			_need: []
		}
	},
	mutations: {

	},
	actions: {

	}
})
