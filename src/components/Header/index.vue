<template>
  <!-- Header -->
  <header id="header">
    <div class="inner">
      <!-- Logo -->
      <a href="#" class="logo">
        <span class="symbol"><img src="../../images/logo.svg" alt="" /></span><span class="title">{{navigator}}</span>
      </a>
      <!-- Nav -->
      <nav>
        <ul>
          <li ><a href="#menu" @click.prevent="$emit('openNav',true)"></a></li>
        </ul>
      </nav>
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

