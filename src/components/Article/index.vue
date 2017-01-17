<template>
  <article :class="`style${item.id}`">
    <span class="image">
      <img src="../../images/elaine.png"/>
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
    }
  }
</script>