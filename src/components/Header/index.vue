<template>
  <!-- Header -->
  <header id="header">
    <div class="inner">
      <!-- Logo -->
      <a href="#" class="logo">
        <span class="symbol"><img src="../../images/logo.svg" alt="" /></span><span class="title">{{navigator}}</span>
      </a>
    </div>
  </header>
</template>

<script>
  export default {
    props: {
      navigator: String
    }
  }
</script>

