<template>
  <div class="inner">
    <header>
      <h1>Code Is Poetry</h1>
      <p>代码如诗,一样可以点缀这个世界 <br/>
          爱生活,爱自由,热爱前端,贴近用户，向上吧少年!</p>
    </header>
    <section class="tiles">
      <case-article 
        v-for="item in moduleItem"
        :item="item"
      />
    </section>
    <div class="pagination-container" v-show="total > 1">
        <div class="pagination" :class="{disabled: page == 1}">
          <a @click.prevent="goPage('prev')">
            <i class="icon fa-caret-left"></i>
          </a>
        </div>
        <div class="pagination" :class="{disabled: total == page }">
          <a @click.prevent="goPage('next')">
            <i class="icon fa-caret-right"></i>
          </a>
        </div>
    </div>
  </div>
</template>


<script>
  import Article from 'components/Article'
  import moduleList from './config'

  export default {
    components: {
      'case-article': Article
    },
    data () {
      return {
        moduleList,
        page: this.$route.query.page || 1
      }
    },
    created () {
      this.$emit('setNav', '时光的涂鸦墙')
    },
    computed: {
      total () {
        return Math.ceil(this.moduleList / 9)
      },
      moduleItem () {
        return this.moduleList.slice((this.page - 1) * 9, this.page * 9)
      }
    },
    methods: {
      goPage (type) {
        const { page, total } = this
        let newpage
        switch (type) {
          case 'prev':
            newpage = page > 1 ? page - 1 : page
            break
          case 'next':
            newpage = total > page ? page + 1 : page
            break
        }
        this.$router.push({path: '/', query: {page: newpage}})
      }
    }
  }
</script>