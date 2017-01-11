<template>  
  <!-- Nav -->
  <nav id="head-nav">
    <ul>
      <li ><a href="#menu" @click.prevent="$emit('openNav',true)"></a></li>
    </ul>
  </nav>
</template>