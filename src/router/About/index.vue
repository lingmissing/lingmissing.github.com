<template>
  <div class="inner">
    <!-- Main Content -->             
    <!--<h1>about</h1>-->
    <span class="image main"><img src="../../assets/about.jpg" alt="" /></span>
    <!-- Content -->
    <p>每个人都有属于自己的一片森林，也许我们从来不曾去过，但它一直在那里，总会在那里。迷失的人迷失了，相逢的人会再相逢。即使是你最心爱的人，心中都会有一片你无法到达的森林。</p> 
    <p class="anthor">——村上春树《挪威的森林》</p>
    <!-- Comments -->
    <div>
      <hr/>
      <h3>Code Description:</h3>
      <div id="disqus_thread">
        <pre>
          <code class="code-color">
<span class="b">function</span> <span class="g">People</span>(<span class="y">name</span>,<span class="y">sex</span>){
    <span class="r">this</span>.<span class="b">name</span> = <span class="db">name</span>
    <span class="r">this</span>.<span class="r">sex</span>  = <span class="db">sex</span>
    <span class="r">this</span>.<span class="r">hobbit</span> = <span class="db">[]</span>
}

<span class="g">People</span>.<span class="b">prototype</span>.<span class="g">addHobbit</span> = <span class="r">function</span>(<span class="y">h</span>){
    <span class="r">this</span>.<span class="r">hobbit</span>.<span class="g">push</span>(<span class="db">h</span>)
    <span class="r">return</span> <span class="r">this</span>
}

<span class="b">var</span> <span class="db">I</span> = <span class="r">new</span> <span class="g">People</span>('<span class="r">Elaine</span>','<span class="r">girl</span>')
<span class="b">I</span>.<span class="g">addHobbit</span>('<span class="r">Ukulele</span>').<span class="g">addHobbit</span>('<span class="r">Painting</span>').<span class="g">addHobbit</span>('<span class="r">coding</span>')
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<style>
  .anthor {
    text-align: right;
  }
  .code-color {
    color: rgba(171, 178, 191, 1);
  }
  .code-color .b {
    color: rgba(86, 182, 194, 1)
  }
  .code-color .g {
    color: rgba(152, 195, 121, 1)
  }
  .code-color .y {
    color: rgba(209, 154, 102, 1)
  }
  .code-color .db {
    color: rgba(97, 175, 239, 1)
  }
  .code-color .r {
    color: rgba(224, 108, 117, 1)
  }
  .code-color .w {
    color:rgba(171, 178, 191, 1)
  }
  .code-color .z {
    color:rgba(198, 120, 221, 1)
  }
  .code-color .b {
    color: rgba(86, 182, 194, 1)
  }
</style>

<script>
  export default {
    created () {
      this.$emit('setNav', '关于我')
    }
  }
</script>