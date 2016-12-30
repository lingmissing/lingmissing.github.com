<template>
  <div class="inner">
    <header>
      <h1>Code Is Poetry</h1>
      <p>代码如诗,一样可以点缀这个世界 <br/>
          爱生活,爱自由,热爱前端,贴近用户，向上吧girl!</p>
    </header>
    <section class="tiles">
      <case-article 
        v-for="item in moduleList"
        :item="item"
      />
    </section>
  </div>
</template>

<script>
  import Article from 'components/Article'
  import { moduleList } from '../../caseList'

  export default {
    data() {
      return {
        moduleList
      }
    },
    created() {
      this.$emit('setNav','时光的涂鸦墙')
    },
    components: {
      'case-article': Article
    },
    methods: {

    }
  }
</script>