<template>
  <div class="home">
	  <InputWithLable label="姓名" v-model="form[0]"/>
	  <InputWithLable label="组织机构代码" v-model="form[1]"/>
	  <Button type="success" @click="test()">成功按钮</Button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import InputWithLable from '@/components/InputWithLable.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
	InputWithLable
  },
  data: () => ({
	  form: {}
  }),
  methods: {
  	test() {
  		console.log(this.$data.form)
  	}
  },
}
</script>
