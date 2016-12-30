<template>
  <article :class="`style${item.id}`">
    <span class="image">
      <img src="../assets/img8.png"/>
    </span>
    <a :href="item.link">
      <h2>{{item.title}}</h2>
      <div class="content">
        {{item.desc}}
      </div>
    </a>
  </article>
</template>

<script>
  export default {
    props: {
      item: Object
    },
    methods: {
      imgSrc: function(id) {
        return `../assets/img${id}.png`
      }
    }
  }
</script>