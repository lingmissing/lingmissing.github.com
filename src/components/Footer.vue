<template>
  <!-- Footer -->
  <footer id="footer">
    <div class="inner">
      <section>
        <h2>About</h2>
        <div>
          Let life be beautiful like summer flowers and death like autumn leaves
        </div>
      </section>
      <section>
        <h2>Follow</h2>
        <ul class="icons">
          <li v-for="item in footerList">
            <a :href="item.link" class="icon style2" :class="item.className" target="_blank">
              <span class="label">{{item.name}}</span>
            </a>
          </li>
        </ul>
      </section>
      <ul class="copyright">
        <li>&copy; 时光的涂鸦墙</li>
        <li>Author: <a href="" target="_blank">Elaine</a></li>
      </ul>
    </div>
  </footer>
</template>

<style>
  .hide-footer {
    display: none;
  }
</style>

<script>
  import { footerList } from '../caseList'
  export default {
    data() {
      return {
        footerList
      }
    }
  }
</script>