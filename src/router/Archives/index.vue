<template>
  <div class="inner">
    <section class="archives">
        <ul class="archive-list">
            <li v-for="item in demoList">
                <a :href="item.link">{{item.title}}</a>
            </li>
        </ul>
    </section>
  </div>
</template>

<script>
  import { demoList } from '../../caseList'
  export default {
    data() {
      return {
        demoList
      }
    },
    created() {
      this.$emit('setNav','我的作品集')
    }
  }
</script>