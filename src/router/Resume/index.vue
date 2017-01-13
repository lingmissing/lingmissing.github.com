<template>
  <div class="resume">
    <div id="top">
      <div class="ryan">
        <img class="avatar" src="../../images/me-nose.gif" alt="Ealine" />
        <h2>{{config.name}} <span>{{config.job}}</span></h2>
        <div class="social">
          <a class="fa fa-github" href="https://github.com/lingmissing/">Github</a>
          <a class="fa fa-envelope-o" href="mailto:1227046827@qq.com">Email</a>
        </div>
      </div>
    </div>

    <svg id="logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 107.57">
      <title>logo2</title>
      <path d="M56.39,67.33l23.25,40.24H62.17L39.95,69.12H25.51v38.45H10.38V54H31.21L8.74,15.12H8.65V15L0,0H44.11V0c0.43,0,.86,0,1.3,0A34.56,34.56,0,0,1,56.39,67.33ZM44.11,15.12H26.22L48.4,53.51A19.43,19.43,0,0,0,44.11,15.12Z"
        transform="translate(0 0)" style="fill:#fff"/>
    </svg>

    <div id="container">
      <h2><span><em class="lefty">教育背景</em><em class="righty">所获证书</em></span></h2>
      <section class="portfolio">
        <section class="column">
          <p v-for="item in config.edu">{{item}}</p>
        </section>
        <section class="column">
          <p v-for="item in config.ca">{{item}}</p>
        </section>
      </section>

      <h2><span><em>IT技能</em></span></h2>
      <section class="portfolio">
        <div class="culumn">
          <p v-for="item in config.skill">{{item}}</p>
        </div>
      </section>


      <h2><span><em>工作经历</em></span></h2>
      <section class="portfolio work-box">
        <div class="work-item"  v-for="item in config.work">
          <p><strong>{{item.name}}</strong></p>
          <p><strong>担任职位：</strong>{{item.job}}</p>
          <p><strong>工作内容：</strong>
          <ul>
            <li v-for="c in item.content">{{c}}</li>
          </ul>
        </div>
      </section>

      <h2><span><em>CONTACT</em></span></h2>

      <section id="contact">
        <h2 class="title">Say Hello.</h2>
        <h3 class="sml-title">生活是一种绵延不绝的渴望,渴望不断上升,变得更伟大而高贵。</h3>

        <form id="email-frm">
          <p>
            <input type="text" placeholder="Subject" v-model="form.subject"/>
          </p>
          <p>
            <input type="text" placeholder="body" v-model="form.body"/>
          </p>
          <p>
            <select placeholder="Budget" v-model="form.budget">
              <option value="交流">交流</option>
              <option value="求职">求职</option>
              <option value="闲聊">闲聊</option>
            </select>
          </p>
          <div id="status">
            <button type="button" @click.prev="emailFor">EMAIL ME</button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<style scoped>
.work-box {
  flex-wrap: nowrap;
}
#contact .title{
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  padding-bottom: 5px;
  color: #585858;
  border-bottom: 0;
  height: auto;
}
#contact .sml-title {
  opacity: 0.7;
  text-align: center;
  font-size: 15px;
  padding-bottom: 5px;
  color: #585858;
  border-bottom: 0;
  height: auto;
}
#email-frm p {
  width: 500px;
  padding-top: 20px;
  margin-bottom: 40px;
  margin: 0 auto;
}
#email-frm input,
#email-frm select {
  border-bottom: 1px solid #585858;
  font-size: 14px;
  padding: 10px;
  color: #585858;
}
#email-frm input:focus,
#email-frm select:focus {
  border-bottom-color: #585858;
  box-shadow: none;
}
::-webkit-input-placeholder {
	color: #585858 !important;
	text-transform: uppercase;
	font-size: 12px;
}
:-moz-placeholder {
	color: #585858 !important;
	text-transform: uppercase;
	font-size: 12px;
}
#status {
  margin-top: 20px;
}

#top {
  background: #f4f3f3 url(../../images/header.gif) repeat-x center top fixed;
	color: #444948;
	height: 526px;
	position: fixed;
	top: 0;
	width: 100%;
}
#top .ryan {
	padding-top: 150px;
}
#top .avatar {
	display: block;
	border-radius: 50%;
	width: 70px;
	height: 70px;
	margin: 0 auto;
}
#top h2 {
	color: #fff;
	text-align: center;
	display: block;
	font-size: 3em;
	line-height: 1em;
	padding-top: 20px;
}
#top h2 span {
	display: block;
	font-size: 14px;
	padding-top: 15px;
	font-weight: normal;
	color: rgba(255, 255, 255, 0.6);
	letter-spacing: 0.2em;
	text-transform: uppercase;
}
#top .social {
	text-align: center;
	padding-top: 0;
}
#top .social a{
  margin: 0 5px;
}

#logo {
	position: fixed;
	top: 20px;
	left: 20px;
	width: 20px;
}

#container {
	margin: 526px auto 0 auto;
	width: 100%;
	background: #fff;
	position: relative;
	box-shadow: 0 0 5px rgba(0, 0, 0, .2);
	z-index: 3;
	padding-top: 20px;
}
#container h2 {
	border-bottom: 1px solid #f4f3f3;
	display: block;
	width: 100%;
	font-size: 0.8em;
	font-weight: bold;
	padding: 0;
	margin: 0;
	height: 50px;
}
#container h2 span {
	margin: 0;
	display: block;
	width: 780px;
	margin: 0 auto;
}
#container h2 span em {
	border-bottom: 1px solid #444948;
	font-style: normal;
	display: inline-block;
	padding: 20px 0;
	height: 10px;
}
#container h2 span em.lefty {
	float: left;
}
#container h2 span em.righty {
	float: left;
	margin-left: 380px;
}
.portfolio {
	width: 780px;
	padding: 20px 20px 40px;
	overflow: hidden;
	margin: 0 auto;
  display: flex;
  flex-direction: row;
}
.portfolio .column {
  flex: 1;
}
.portfolio .work-item{
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
}
.portfolio img {
	max-width: 100%;
}
.portfolio .item {
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	margin-bottom: 30px;
}

.portfolio section.column:last-child {
	padding-left: 30px;
}
.portfolio section a.item {
	position: relative;
	display: block;
	width: 375px;
	overflow: hidden;
	margin-bottom: 30px;
	border: 0;
}
.portfolio section .icon {
	margin-bottom: 30px;
}
.portfolio section a img {
	display: block;
}
#contact {
	clear: both;
	display: block;
	width: 100%;
	margin: 0 auto;
	overflow: hidden;
	padding: 60px 0;
	text-align: center;
}

.portfolio p {
	font-size: 14px;
	margin: 5px;
}
.portfolio li {
	font-size: 14px;
}

@media only screen and (max-width:640px) {
	.portfolio, .portfolio .column, footer, #contact form, #container, #container h2 span {
		width: 100%;
		box-sizing: border-box;
	}
	#container {
		margin-bottom: 0;
	}
	.portfolio section a.item, .portfolio section a.item img, .portfolio section.thirds, .portfolio section.thirds:nth-child(2), .portfolio section.column:nth-child(2), .portfolio section.column {
		padding: 0;
		margin: 0;
		float: none;
		width: 100%;
	}
	.portfolio section a.item, .portfolio section.thirds .icon, .portfolio section.thirds .item {
		margin-bottom: 10px;
	}
	#container, #contact form {
		padding-left: 10px;
		padding-right: 10px;
	}
	#top .ryan {
		padding-top: 120px;
	}
	#top h2 span {
		padding-top: 0;
		padding-bottom: 20px;
	}
}
</style>

<script>
  import config from './config'
  export default {
    data () {
      return {
        config,
        form: {
          budget: '交流',
          body: '',
          subject: ''
        }
      }
    },
    mounted () {
      document.body.scrollTop = 0
    },
    methods: {
      emailFor () {
        console.log(this.form)
        const { subject, body, budget } = this.form
        window.location.href = `mailto:1227046827@qq.com?subject=${subject}-${budget}&body=${body}`
      }
    }
  }
</script>

