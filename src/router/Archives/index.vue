<template>
  <div class="inner">
    <section class="archives">
        <ul class="archive-list">
            <li v-for="item in demoList">
                <a :href="item.link">{{item.title}}</a>
                <ul class="archive-item-list">
                  <li v-for="innerItem in item.children">
                    <a :href="innerItem.link">{{innerItem.title}}</a>
                  </li>
                </ul>
            </li>
        </ul>
    </section>
  </div>
</template>

<style>
  .archive-item-list {
    list-style: none;
    margin: 0;
    font-size: 14px;
  }
</style>

<script>
  import demoList from './config'
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