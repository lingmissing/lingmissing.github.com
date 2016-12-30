<template>
  <div class="doraemon">
    <div class="head">
      <div class="eyes">
        <div class="eye left"><div class="black bleft"></div></div>
        <div class="eye right"><div class="black bright"></div></div>
      </div>
      <div class="face">
        <div class="white"></div>
        <div class="nose"><div class="light"></div></div>
        <div class="nose_line"></div>
        <div class="mouth"></div>
        <div class="whiskers">
          <div class="whisker rTop r160"></div>
          <div class="whisker rt"></div>
          <div class="whisker rBottom r20"></div>
          <div class="whisker lTop r20"></div>
          <div class="whisker lt"></div>
          <div class="whisker lBottom r160"></div>
        </div>
      </div>
    </div>
    <div class="choker">
      <div class="bell">
        <div class="bell_line"></div>
        <div class="bell_circle"></div>
        <div class="bell_under"></div>
        <div class="bell_light"></div>
      </div>
    </div>
    <div class="bodys">
      <div class="body"></div>
      <div class="wraps"></div>
      <div class="pocket"></div>
      <div class="pocket_mask"></div>
    </div>
    <div class="hand_right">
      <div class="arm"></div>
      <div class="circle"></div>
      <div class="arm_rewrite"></div>
    </div>
    <div class="hand_left">
      <div class="arm"></div>
      <div class="circle"></div>
      <div class="arm_rewrite"></div>
    </div>
    <div class="foot">
      <div class="left"></div>
      <div class="right"></div>
      <div class="foot_rewrite"></div>
    </div>
  </div>
</template>

<style>
.doraemon{
	position: relative;
	margin-left: 30%;
}
.doraemon .head{
	width: 320px;
	height: 300px;
	background: #07bbee;
	border-radius: 150px;
	background: -webkit-radial-gradient(right top,#fff 10%,#07bbee 20%,#10a6ce 75%,#000);
	background: -moz-radial-gradient(right top,#fff 10%,#07bbee 20%,#10a6ce 75%,#000);
	background: -ms-radial-gradient(right top,#fff 10%,#07bbee 20%,#10a6ce 75%,#000);
	border: #555 2px solid;
	box-shadow: -5px 10px 15px rgba(0,0,0,0.45);
	position: relative;
}
.doraemon .face{
	position: relative;
	z-index: 2;
}
/*白色脸底*/
.doraemon .face .white{
	border: #000 solid 2px;
	width: 265px;
	height: 195px;
	border-radius: 150px 150px;
	position: absolute;
	top: 75px;
	left: 25px;
	background: #fff;
	background: -webkit-radial-gradient(right top,#fff 75%,#eee 80%,#999 90%,#444);
	background: -moz-radial-gradient(right top,#fff 75%,#eee 80%,#999 90%,#444);
	background: -ms-radial-gradient(right top,#fff 75%,#eee 80%,#999 90%,#444);
}
/*鼻子*/
.doraemon .face .nose{
	background: #c93300;
	width: 30px;
	height: 30px;
	border-radius: 30px;
	position: absolute;
	top: 110px;
	left: 140px;
	z-index: 3;

}
/*鼻子上的高光*/
.doraemon .face .nose .light{
	border-radius: 5px;
	box-shadow: 19px 8px 5px #fff;
	height: 10px;
	width: 10px;
}
/*鼻子上的线*/
.doraemon .face .nose_line{
	background: #333;
	width: 3px;
	height: 100px;
	position: absolute;
	top: 143px;
	left: 155px;
	z-index: 3;
}
/*嘴巴*/
.doraemon .face .mouth{
	width: 220px;
	height: 400px;
	border-bottom: 3px solid #333;
	border-radius: 120px;
	position: absolute;
	top: -160px;
	left: 45px;
}
/*眼睛*/
.doraemon .eyes{
	position: relative;
	z-index: 3;
}
.doraemon .eyes .eye{
	position: absolute;
	top: 40px;
	width: 72px;
	height: 82px;
	background: #fff;
	border: #000 2px solid;
	border-radius: 35px 35px;
}
.doraemon .eyes .eye .black{
	width: 14px;
	height: 14px;
	background: #000;
	border-radius: 14px;
	position: relative;
	top: 40px;
}
.doraemon .eyes .left{left: 82px;}
.doraemon .eyes .right{left: 156px;}
.doraemon .eyes .eye .bleft{left: 50px;}
.doraemon .eyes .eye .bright{left: 7px;}
/*胡须背景，主要挡住嘴巴的一部分*/
.doraemon .whiskers{
	background: #fff;
	width: 220px;
	height: 80px;
	position: relative;
	top: 120px;
	left: 45px;
	border-radius: 15px;
	z-index: 2;
}
/*所有胡须的公共样式*/
.doraemon .whiskers .whisker{
	background: #333;
	height: 2px;
	width: 60px;
	position: absolute;
	z-index: 2;
}
/*右上边的胡子*/
.doraemon .whiskers .rTop{
	left: 165px;
	top: 25px;
}
.doraemon .whiskers .rt{
	left: 167px;
	top: 35px;
}
.doraemon .whiskers .rBottom{
	left: 165px;
	top: 65px;
}
/*左上边的胡子*/
.doraemon .whiskers .lTop{
	left: 0;
	top: 25px;
}
.doraemon .whiskers .lt{
	left: -2px;
	top: 45px;
}
.doraemon .whiskers .lBottom{
	left: 0;
	top: 65px;
}
.doraemon .whiskers .r160{
	transform:rotate(160deg);
	-webkit-transform:rotate(160deg);
}
.doraemon .whiskers .r20{
	transform:rotate(20deg);
	-webkit-transform:rotate(20deg);
}
/*脖子和铃铛*/
.doraemon .choker{
	position: relative;
	z-index: 4;
	top: -40px;
	left: 45px;
	background: #C40;
	border: 2px solid #000;
	border-radius: 10px;
	height: 20px;
	width: 230px;
	background: -webkit-gradient(linear,left top,left bottom,from(#c40),to(#800400));
	background: -moz-linear-gradient(center top,#c40,#800400);
	background: -ms-linear-gradient(center top,#c40,#800400);

}
.doraemon .choker .bell{
	width: 40px;
	height: 40px;
	_overflow: hidden;
	border-radius: 50px;
	border: 2px solid #000;
	background: #f9f12a;
	box-shadow: -5px 5px 10px rgba(0,0,0,0.25);
	position: relative;
	top: 5px;
	left: 90px;
	background: -webkit-gradient(linear,left top,left bottom,from(#f9f12a),color-stop(0.5,#e9e11a),to(#a9a100));
	background: -ms-linear-gradient(top,#f9f12a,#e9e11a 75%,#a9a100);
	background: -moz-linear-gradient(top,#f9f12a,#e9e11a 75%,#a9a100);
}
.doraemon .choker .bell .bell_line{
	background: #F9F12A;
	border-radius: 3px 3px 0px 0px ;
	border: 2px solid #333;
	height: 2px;
	width: 36px;
	position: relative;
	top: 10px;
}
.doraemon .choker .bell .bell_circle{
	background: #000;
	border-radius: 5px;
	height: 10px;
	width: 12px;
	position: relative;
	top: 14px;
	left: 14px;
}
.doraemon .choker .bell .bell_under{
	background: #000;
	height: 15px;
	width: 3px;
	position: relative;
	left: 18px;
	top: 10px;
}
.doraemon .choker .bell .bell_light{
	border-radius: 10px;
	box-shadow: 19px 8px 5px #fff;
	height: 12px;
	width: 12px;
	left: 5px;
	top: -35px;
	position: relative;
	opacity: 0.7;
}

.doraemon .bodys{
	position: relative;
	top: -310px;
}
/*肚子*/
.doraemon .bodys .body{
	background: #07beea;
	background: -webkit-gradient(linear,right top,left top,from(#07beea),color-stop(0.5,#0073b3),color-stop(0.75,#00b0e0),to(#0096be));
	background: -ms-linear-gradient(right center,#07beea,#0073b3 50%,#00b0e0 75%,#0096be 100%);
	background: -moz-linear-gradient(right center,#07beea,#0073b3 50%,#00b0e0 75%,#0096be 100%);
	border: 2px solid #333;
	height: 165px;
	width: 220px;
	position: absolute;
	left: 50px;
	top: 265px;	
}
/*白色肚兜*/
.doraemon .bodys .wraps{
	background: #fff;
	border: 2px solid #000;
	border-radius: 85px;
	position: absolute;
	left: 50px;
	top: 265px;
	background: -webkit-gradient(linear,right top,left bottom,from(#fff),color-stop(0.75,#fff),color-stop(0.83,#eee),color-stop(0.90,#999),to(#000));
	background: -ms-linear-gradient(right top,#fff,#fff 75%,#eee 83%,#999 90%,#444 95%,#000);
	background: -moz-linear-gradient(right top,#fff,#fff 75%,#eee 83%,#999 90%,#444 95%,#000);
}
.doraemon .bodys .pocket{
	position: relative;
	width: 130px;
	height: 130px;
	border-radius: 65px;
	background: #fff;
	border: 2px solid #000;
	top: 250px;
	left: 92px;
	/**/
}
/*挡住口袋一半*/
.doraemon .bodys .pocket_mask{
	position: relative;
	width: 134px;
	height: 60px;
	background: #fff;
	border-bottom: 2px solid #000;
	top: 125px;
	left: 92px;
}
/*右手	*/
.doraemon .hand_right{
	height: 100px;
	width: 100px;
	position: absolute;
	top: 272px;
	left: 248px;
}
/*左手*/
.doraemon .hand_left{
	height: 100px;
	width: 100px;
	position: absolute;
	top: 272px;
	left: -10px;
}
/*手臂公共部分*/
.doraemon .arm{
	background: #07beea;
	border: 1px solid #000;
	height: 50px;
	width: 80px;
	z-index: -1;
	position: relative;
	box-shadow: -10px 7px 10px rgba(0,0,0,0.35);
	background: -webkit-gradient(linear,right top,left bottom,from(#07beea),color-stop(0.85,#07beea),to(#555));
	background: -ms-linear-gradient(center top,#07beea,#07beea 85%,#555);
	background: -moz-linear-gradient(center top,#07beea,#07beea 85%,#555);
}
/*右手手臂*/
.doraemon .hand_right .arm{
	top: 17px;
	transform: rotate(35deg);
	-webkit-transform: rotate(35deg);
}
/*左手手臂*/
.doraemon .hand_left .arm{
	top: 17px;
	background: #0096be;
	box-shadow: 5px -7px 10px rgba(0,0,0,0.25);
	transform: rotate(145deg);
	-webkit-transform: rotate(145deg);	
}
/*圆形手掌公共部分*/
.doraemon .circle{
	position: absolute;
	width: 60px;
	height: 60px;
	border-radius: 30px;
	border: 2px solid #000;
    background-color: #fff;
  	background: -webkit-gradient(linear,right top,left bottom,from(#fff),color-stop(0.5,#fff),color-stop(0.7,#eee),color-stop(0.90,#ddd),to(#999));
	background: -ms-linear-gradient(right top,#fff,#fff 50%,#eee 70%,#ddd 90%,#999);
	background: -moz-linear-gradient(right top,#fff,#fff 50%,#eee 70%,#ddd 90%,#999);
}
/*右手手掌*/
.doraemon .hand_right .circle{
	left: 40px;
	top: 32px;
}
/*左手手掌*/
.doraemon .hand_left .circle{
	left: -20px;
	top: 32px;
}
/*手臂和身体结合处*/
.doraemon .arm_rewrite{
	background: #07beea;
	height: 45px;
	width: 5px;
	position: relative;
}
/*右手结合处*/
.doraemon .hand_right .arm_rewrite{
	top: -45px;
	left: 22px;
}
/*左手结合处*/
.doraemon .hand_left .arm_rewrite{
	top: -45px;
	left: 60px;
	background: #0096be;
}
/*脚*/
.doraemon .foot{
	height: 40px;
	width: 280px;
	position: relative;
	top: -141px;
	left: 20px;
}
/*左脚*/
.doraemon .foot .left{
	background: #fff;
	border: 2px solid #333;
	border-radius: 80px 60px 60px 40px;
	box-shadow: -6px 0 10px rgba(0,0,0,0.35);
	height: 30px;
	width: 125px;
	position: relative;
	left: 8px;
	top: 65px;
	background: -webkit-gradient(linear,right top,left bottom,from(#fff),color-stop(0.75,#fff),color-stop(0.85,#eee)to(#999));
	background: -ms-linear-gradient(right top,#fff,#fff 75%,#eee 85%,#999);
	background: -moz-linear-gradient(right top,#fff,#fff 75%,#eee 85%,#999);
}
/*右脚*/
.doraemon .foot .right{
	background: #fff;
	border: 2px solid #333;
	border-radius: 80px 60px 60px 40px;
	box-shadow: -6px 0 10px rgba(0,0,0,0.35);
	height: 30px;
	width: 125px;
	position: relative;
	left: 141px;
	top: 31px;
	background: -webkit-gradient(linear,right top,left bottom,from(#fff),color-stop(0.75,#fff),color-stop(0.85,#eee)to(#999));
	background: -ms-linear-gradient(right top,#fff,#fff 75%,#eee 85%,#999);
	background: -moz-linear-gradient(right top,#fff,#fff 75%,#eee 85%,#999);	
}
.doraemon .foot .foot_rewrite{
	position: relative;
	top: -11px;
	left: 130px;
	_left: 127px;
	width: 20px;
	height: 10px;
	background: #fff;
	border-top: 2px solid #000;
	border-left: 2px solid #000;
	border-right: 2px solid #000;
	border-top-right-radius:40px;
	border-top-left-radius:40px;
	background: -webkit-gradient(linear,right top,left bottom,from(#666),color-stop(0.83,#fff),to(#fff));
	background: -ms-linear-gradient(right top,#666,#fff 83%,#fff);
	background: -moz-linear-gradient(right top,#666,#fff 83%,#fff);

}

@keyframes eyemove{
	80%{margin: 0 auto;}
	85%{margin: -20px 0 0 0;}
	90%{margin: 0 0 0 0;}
	93%{margin: 0 0 0 7px;}
	96%{margin: 0 0 0 0;}
}
@-webkit-keyframes eyemove{
	80%{margin: 0 auto;}
	85%{margin: -20px 0 0 0;}
	90%{margin: 0 0 0 0;}
	93%{margin: 0 0 0 7px;}
	96%{margin: 0 0 0 0;}
}
@-moz-keyframes eyemove{
	80%{margin: 0 auto;}
	85%{margin: -20px 0 0 0;}
	90%{margin: 0 0 0 0;}
	93%{margin: 0 0 0 7px;}
	96%{margin: 0 0 0 0;}
}
@-ms-keyframes eyemove{
	80%{margin: 0 auto;}
	85%{margin: -20px 0 0 0;}
	90%{margin: 0 0 0 0;}
	93%{margin: 0 0 0 7px;}
	96%{margin: 0 0 0 0;}
}
@-o-keyframes eyemove{
	80%{margin: 0 auto;}
	85%{margin: -20px 0 0 0;}
	90%{margin: 0 0 0 0;}
	93%{margin: 0 0 0 7px;}
	96%{margin: 0 0 0 0;}
}
.doraemon .eyes .eye .black{
	animation: eyemove 5s linear 2000;
	-webkit-animation: eyemove 5s linear 2000;
	-moz-animation: eyemove 5s linear 2000;
	-ms-animation: eyemove 5s linear 2000;
	-o-animation: eyemove 5s linear 2000;
}

@keyframes larmmove{
	50%{transform: rotate(180deg);}
	100%{transform: rotate(145deg);}
}
@-webkit-keyframes larmmove{
	50%{transform: rotate(180deg);}
	100%{transform: rotate(145deg);}
}
@-moz-keyframes larmmove{
	50%{transform: rotate(180deg);}
	100%{transform: rotate(145deg);}
}
@-ms-keyframes larmmove{
	50%{transform: rotate(180deg);}
	100%{transform: rotate(145deg);}
}
@keyframes lcirclemove{
	50%{top:13px;left: -41px;}
	100%{top:32px;left: -20px;}
}
@-webkit-keyframes lcirclemove{
	50%{top:13px;left: -41px;}
	100%{top:32px;left: -20px;}
}
@-moz-keyframes lcirclemove{
	50%{top:13px;left: -41px;}
	100%{top:32px;left: -20px;}
}
@-ms-keyframes lcirclemove{
	50%{top:13px;left: -41px;}
	100%{top:32px;left: -20px;}
}
.doraemon .hand_left .arm{
	animation: larmmove 2s linear 2000;
	-webkit-animation: larmmove 2s linear 2000;
	-moz-animation: larmmove 2s linear 2000;
	-ms-animation: larmmove 2s linear 2000;
	-o-animation: larmmove 2s linear 2000;	
}
.doraemon .hand_left .circle{
	animation: lcirclemove 2s linear 2000;
	-webkit-animation: lcirclemove 2s linear 2000;
	-moz-animation: lcirclemove 2s linear 2000;
	-ms-animation: lcirclemove 2s linear 2000;
	-o-animation: lcirclemove 2s linear 2000;
}

@keyframes rarmmove{
	50%{transform: rotate(0deg);}
	100%{transform: rotate(35deg);}
}
@-webkit-keyframes rarmmove{
	50%{transform: rotate(0deg);}
	100%{transform: rotate(35deg);}
}
@-moz-keyframes rarmmove{
	50%{transform: rotate(0deg);}
	100%{transform: rotate(35deg);}
}
@-ms-keyframes rarmmove{
	50%{transform: rotate(0deg);}
	100%{transform: rotate(35deg);}
}
@keyframes rcirclemove{
	50%{top:13px;left: 47px;}
	100%{top:32px;left: 40px;}
}
@-webkit-keyframes rcirclemove{
	50%{top:13px;left: 47px;}
	100%{top:32px;left: 40px;}
}
@-moz-keyframes rcirclemove{
	50%{top:13px;left: 47px;}
	100%{top:32px;left: 40px;}
}
@-ms-keyframes rcirclemove{
	50%{top:13px;left: 47px;}
	100%{top:32px;left: 40px;}
}
.doraemon .hand_right .arm{
	animation: rarmmove 2s linear 2000;
	-webkit-animation: rarmmove 2s linear 2000;
	-moz-animation: rarmmove 2s linear 2000;
	-ms-animation: rarmmove 2s linear 2000;
	-o-animation: rarmmove 2s linear 2000;	
}
.doraemon .hand_right .circle{
	animation: rcirclemove 2s linear 2000;
	-webkit-animation: rcirclemove 2s linear 2000;
	-moz-animation: rcirclemove 2s linear 2000;
	-ms-animation: rcirclemove 2s linear 2000;
	-o-animation: rcirclemove 2s linear 2000;
}
</style>

<script>
	export default {
    created() {
      this.$emit('setNav','哆啦A梦')
    }
	}
</script>