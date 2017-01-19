<template>
  <input 
  :type="type" 
  :value="value" 
  :placehoder="disabled ? '' : placehoder" 
  :disabled="disabled"
  :class="{'half': isHalf}">
</template>

<script>
  export default {
    props: {
      value: String,
      placehoder: String,
      type: String,
      disabled: Boolean,
      isHalf: Boolean
    }
  }
</script>