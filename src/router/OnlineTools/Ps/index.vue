<!--<template>
  <div class="inner">
    <p>
      <span>
        <input type="checkbox" id="invert"> 反相（负片）
    </span>

      <span>
        <input type="checkbox" id="grayscale"> 灰化
    </span>

      <span>
        <input type="checkbox" id="sepia"> 复古(怀旧)
    </span>

      <span>
        <input type="checkbox" id="brightness"> 变亮
    </span>

      <span>
        <input type="checkbox" id="threshold"> 阈值
    </span>

      <span>
        <input type="checkbox" id="blur"> 模糊
    </span>

      <span>
        <input type="checkbox" id="relief"> 浮雕
    </span>
    </p>
    <canvas id="canvas" width="500" height="355"></canvas>
    <p>提示：设置图片效果后，可直接右键保存！</p>

  </div>
</template>

<style>

</style>

<script>
  export default {
    data() {
      return {
        mul_table: [
          512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512,
          454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512,
          482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456,
          437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512,
          497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328,
          320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456,
          446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335,
          329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512,
          505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405,
          399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328,
          324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271,
          268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456,
          451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388,
          385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335,
          332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292,
          289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
        shg_table: [
          9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17,
          17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19,
          19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20,
          20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21,
          21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
          21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24]
      }
    },
    methods: {

      stackBlurImage: function (imageID, canvasID, radius, blurAlphaChannel) {

        var img = document.getElementById(imageID);
        var w = img.naturalWidth;
        var h = img.naturalHeight;

        var canvas = document.getElementById(canvasID);

        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        canvas.width = w;
        canvas.height = h;

        var context = canvas.getContext("2d");
        context.clearRect(0, 0, w, h);
        context.drawImage(img, 0, 0);

        if (isNaN(radius) || radius < 1) return;

        if (blurAlphaChannel)
          stackBlurCanvasRGBA(canvasID, 0, 0, w, h, radius);
        else
          stackBlurCanvasRGB(canvasID, 0, 0, w, h, radius);
      },


      stackBlurCanvasRGBA: function (id, top_x, top_y, width, height, radius) {
        if (isNaN(radius) || radius < 1) return;
        radius |= 0;

        var canvas = document.getElementById(id);
        var context = canvas.getContext("2d");
        var imageData;

        try {
          try {
            imageData = context.getImageData(top_x, top_y, width, height);
          } catch (e) {
            try {
              netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
              imageData = context.getImageData(top_x, top_y, width, height);
            } catch (e) {
              alert("Cannot access local image");
              throw new Error("unable to access local image data: " + e);
              return;
            }
          }
        } catch (e) {
          alert("Cannot access image");
          throw new Error("unable to access image data: " + e);
        }

        var pixels = imageData.data;

        var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum,
          r_out_sum, g_out_sum, b_out_sum, a_out_sum,
          r_in_sum, g_in_sum, b_in_sum, a_in_sum,
          pr, pg, pb, pa, rbs;

        var div = radius + radius + 1;
        var w4 = width << 2;
        var widthMinus1 = width - 1;
        var heightMinus1 = height - 1;
        var radiusPlus1 = radius + 1;
        var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;

        var stackStart = new BlurStack();
        var stack = stackStart;
        for (i = 1; i < div; i++) {
          stack = stack.next = new BlurStack();
          if (i == radiusPlus1) var stackEnd = stack;
        }
        stack.next = stackStart;
        var stackIn = null;
        var stackOut = null;

        yw = yi = 0;

        var mul_sum = this.mul_table[radius];
        var shg_sum = this.shg_table[radius];

        for (y = 0; y < height; y++) {
          r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;

          r_out_sum = radiusPlus1 * (pr = pixels[yi]);
          g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
          b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
          a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);

          r_sum += sumFactor * pr;
          g_sum += sumFactor * pg;
          b_sum += sumFactor * pb;
          a_sum += sumFactor * pa;

          stack = stackStart;

          for (i = 0; i < radiusPlus1; i++) {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
          }

          for (i = 1; i < radiusPlus1; i++) {
            p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
            r_sum += (stack.r = (pr = pixels[p])) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = (pg = pixels[p + 1])) * rbs;
            b_sum += (stack.b = (pb = pixels[p + 2])) * rbs;
            a_sum += (stack.a = (pa = pixels[p + 3])) * rbs;

            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            a_in_sum += pa;

            stack = stack.next;
          }


          stackIn = stackStart;
          stackOut = stackEnd;
          for (x = 0; x < width; x++) {
            pixels[yi + 3] = pa = (a_sum * mul_sum) >> shg_sum;
            if (pa != 0) {
              pa = 255 / pa;
              pixels[yi] = ((r_sum * mul_sum) >> shg_sum) * pa;
              pixels[yi + 1] = ((g_sum * mul_sum) >> shg_sum) * pa;
              pixels[yi + 2] = ((b_sum * mul_sum) >> shg_sum) * pa;
            } else {
              pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
            }

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            a_sum -= a_out_sum;

            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            a_out_sum -= stackIn.a;

            p = (yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1)) << 2;

            r_in_sum += (stackIn.r = pixels[p]);
            g_in_sum += (stackIn.g = pixels[p + 1]);
            b_in_sum += (stackIn.b = pixels[p + 2]);
            a_in_sum += (stackIn.a = pixels[p + 3]);

            r_sum += r_in_sum;
            g_sum += g_in_sum;
            b_sum += b_in_sum;
            a_sum += a_in_sum;

            stackIn = stackIn.next;

            r_out_sum += (pr = stackOut.r);
            g_out_sum += (pg = stackOut.g);
            b_out_sum += (pb = stackOut.b);
            a_out_sum += (pa = stackOut.a);

            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            a_in_sum -= pa;

            stackOut = stackOut.next;

            yi += 4;
          }
          yw += width;
        }


        for (x = 0; x < width; x++) {
          g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;

          yi = x << 2;
          r_out_sum = radiusPlus1 * (pr = pixels[yi]);
          g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
          b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
          a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);

          r_sum += sumFactor * pr;
          g_sum += sumFactor * pg;
          b_sum += sumFactor * pb;
          a_sum += sumFactor * pa;

          stack = stackStart;

          for (i = 0; i < radiusPlus1; i++) {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
          }

          yp = width;

          for (i = 1; i <= radius; i++) {
            yi = (yp + x) << 2;

            r_sum += (stack.r = (pr = pixels[yi])) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = (pg = pixels[yi + 1])) * rbs;
            b_sum += (stack.b = (pb = pixels[yi + 2])) * rbs;
            a_sum += (stack.a = (pa = pixels[yi + 3])) * rbs;

            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            a_in_sum += pa;

            stack = stack.next;

            if (i < heightMinus1) {
              yp += width;
            }
          }

          yi = x;
          stackIn = stackStart;
          stackOut = stackEnd;
          for (y = 0; y < height; y++) {
            p = yi << 2;
            pixels[p + 3] = pa = (a_sum * mul_sum) >> shg_sum;
            if (pa > 0) {
              pa = 255 / pa;
              pixels[p] = ((r_sum * mul_sum) >> shg_sum) * pa;
              pixels[p + 1] = ((g_sum * mul_sum) >> shg_sum) * pa;
              pixels[p + 2] = ((b_sum * mul_sum) >> shg_sum) * pa;
            } else {
              pixels[p] = pixels[p + 1] = pixels[p + 2] = 0;
            }

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            a_sum -= a_out_sum;

            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            a_out_sum -= stackIn.a;

            p = (x + (((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width)) << 2;

            r_sum += (r_in_sum += (stackIn.r = pixels[p]));
            g_sum += (g_in_sum += (stackIn.g = pixels[p + 1]));
            b_sum += (b_in_sum += (stackIn.b = pixels[p + 2]));
            a_sum += (a_in_sum += (stackIn.a = pixels[p + 3]));

            stackIn = stackIn.next;

            r_out_sum += (pr = stackOut.r);
            g_out_sum += (pg = stackOut.g);
            b_out_sum += (pb = stackOut.b);
            a_out_sum += (pa = stackOut.a);

            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            a_in_sum -= pa;

            stackOut = stackOut.next;

            yi += width;
          }
        }

        context.putImageData(imageData, top_x, top_y);

      },


      stackBlurCanvasRGB: function (id, top_x, top_y, width, height, radius) {
        if (isNaN(radius) || radius < 1) return;
        radius |= 0;

        var canvas = document.getElementById(id);
        var context = canvas.getContext("2d");
        var imageData;

        try {
          try {
            imageData = context.getImageData(top_x, top_y, width, height);
          } catch (e) {

            // NOTE: this part is supposedly only needed if you want to work with local files
            // so it might be okay to remove the whole try/catch block and just use
            // imageData = context.getImageData( top_x, top_y, width, height );
            try {
              netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
              imageData = context.getImageData(top_x, top_y, width, height);
            } catch (e) {
              alert("Cannot access local image");
              throw new Error("unable to access local image data: " + e);
              return;
            }
          }
        } catch (e) {
          alert("Cannot access image");
          throw new Error("unable to access image data: " + e);
        }

        var pixels = imageData.data;

        var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum,
          r_out_sum, g_out_sum, b_out_sum,
          r_in_sum, g_in_sum, b_in_sum,
          pr, pg, pb, rbs;

        var div = radius + radius + 1;
        var w4 = width << 2;
        var widthMinus1 = width - 1;
        var heightMinus1 = height - 1;
        var radiusPlus1 = radius + 1;
        var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;

        var stackStart = new BlurStack();
        var stack = stackStart;
        for (i = 1; i < div; i++) {
          stack = stack.next = new BlurStack();
          if (i == radiusPlus1) var stackEnd = stack;
        }
        stack.next = stackStart;
        var stackIn = null;
        var stackOut = null;

        yw = yi = 0;

        var mul_sum = mul_table[radius];
        var shg_sum = shg_table[radius];

        for (y = 0; y < height; y++) {
          r_in_sum = g_in_sum = b_in_sum = r_sum = g_sum = b_sum = 0;

          r_out_sum = radiusPlus1 * (pr = pixels[yi]);
          g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
          b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);

          r_sum += sumFactor * pr;
          g_sum += sumFactor * pg;
          b_sum += sumFactor * pb;

          stack = stackStart;

          for (i = 0; i < radiusPlus1; i++) {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack = stack.next;
          }

          for (i = 1; i < radiusPlus1; i++) {
            p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
            r_sum += (stack.r = (pr = pixels[p])) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = (pg = pixels[p + 1])) * rbs;
            b_sum += (stack.b = (pb = pixels[p + 2])) * rbs;

            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;

            stack = stack.next;
          }


          stackIn = stackStart;
          stackOut = stackEnd;
          for (x = 0; x < width; x++) {
            pixels[yi] = (r_sum * mul_sum) >> shg_sum;
            pixels[yi + 1] = (g_sum * mul_sum) >> shg_sum;
            pixels[yi + 2] = (b_sum * mul_sum) >> shg_sum;

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;

            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;

            p = (yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1)) << 2;

            r_in_sum += (stackIn.r = pixels[p]);
            g_in_sum += (stackIn.g = pixels[p + 1]);
            b_in_sum += (stackIn.b = pixels[p + 2]);

            r_sum += r_in_sum;
            g_sum += g_in_sum;
            b_sum += b_in_sum;

            stackIn = stackIn.next;

            r_out_sum += (pr = stackOut.r);
            g_out_sum += (pg = stackOut.g);
            b_out_sum += (pb = stackOut.b);

            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;

            stackOut = stackOut.next;

            yi += 4;
          }
          yw += width;
        }


        for (x = 0; x < width; x++) {
          g_in_sum = b_in_sum = r_in_sum = g_sum = b_sum = r_sum = 0;

          yi = x << 2;
          r_out_sum = radiusPlus1 * (pr = pixels[yi]);
          g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
          b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);

          r_sum += sumFactor * pr;
          g_sum += sumFactor * pg;
          b_sum += sumFactor * pb;

          stack = stackStart;

          for (i = 0; i < radiusPlus1; i++) {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack = stack.next;
          }

          yp = width;

          for (i = 1; i <= radius; i++) {
            yi = (yp + x) << 2;

            r_sum += (stack.r = (pr = pixels[yi])) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = (pg = pixels[yi + 1])) * rbs;
            b_sum += (stack.b = (pb = pixels[yi + 2])) * rbs;

            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;

            stack = stack.next;

            if (i < heightMinus1) {
              yp += width;
            }
          }

          yi = x;
          stackIn = stackStart;
          stackOut = stackEnd;
          for (y = 0; y < height; y++) {
            p = yi << 2;
            pixels[p] = (r_sum * mul_sum) >> shg_sum;
            pixels[p + 1] = (g_sum * mul_sum) >> shg_sum;
            pixels[p + 2] = (b_sum * mul_sum) >> shg_sum;

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;

            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;

            p = (x + (((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width)) << 2;

            r_sum += (r_in_sum += (stackIn.r = pixels[p]));
            g_sum += (g_in_sum += (stackIn.g = pixels[p + 1]));
            b_sum += (b_in_sum += (stackIn.b = pixels[p + 2]));

            stackIn = stackIn.next;

            r_out_sum += (pr = stackOut.r);
            g_out_sum += (pg = stackOut.g);
            b_out_sum += (pb = stackOut.b);

            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;

            stackOut = stackOut.next;

            yi += width;
          }
        }

        context.putImageData(imageData, top_x, top_y);

      },

      BlurStack: function () {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 0;
        this.next = null;
      },
      draw: function () {
        var canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d"),
          img = new Image(),
          tempImageData = null,
          imgData = null;

        var invert = document.getElementById("invert"),
          grayscale = document.getElementById("grayscale"),
          sepia = document.getElementById("sepia"),
          brightness = document.getElementById("brightness"),
          threshold = document.getElementById("threshold"),
          blur = document.getElementById("blur"),
          relief = document.getElementById("relief");

        function getInitImageData() {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          tempImageData = ctx.getImageData(0, 0, canvas.width, canvas.height); // 重新获取原始图像数据点信息
          imgData = tempImageData.data;
        }

        function resetImageData() {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }

        var canvasFilter = {
          invert: function (obj, i) {
            obj[i] = 255 - obj[i];
            obj[i + 1] = 255 - obj[i + 1];
            obj[i + 2] = 255 - obj[i + 2];
          },
          grayscale: function (obj, i) {
            var average = (obj[i] + obj[i + 1] + obj[i + 2]) / 3;
            //var average = 0.2126*obj[i] + 0.7152*obj[i+1] + 0.0722*obj[i+2]; 或者
            obj[i] = obj[i + 1] = obj[i + 2] = average;
          },
          sepia: function (obj, i) {
            var r = obj[i],
              g = obj[i + 1],
              b = obj[i + 2];
            obj[i] = (r * 0.393) + (g * 0.769) + (b * 0.189);
            obj[i + 1] = (r * 0.349) + (g * 0.686) + (b * 0.168);
            obj[i + 2] = (r * 0.272) + (g * 0.534) + (b * 0.131);
          },
          brightness: function (obj, i, brightVal) {
            var r = obj[i],
              g = obj[i + 1],
              b = obj[i + 2];
            obj[i] += brightVal;
            obj[i + 1] += brightVal;
            obj[i + 2] += brightVal;
          },
          threshold: function (obj, i, thresholdVal) {
            var average = (obj[i] + obj[i + 1] + obj[i + 2]) / 3;
            obj[i] = obj[i + 1] = obj[i + 2] = average > thresholdVal ? 255 : 0;
          },
          relief: function (obj, i, canvas) {
            if ((i + 1) % 4 !== 0) { // 每个像素点的第四个（0,1,2,3  4,5,6,7）是透明度。这里取消对透明度的处理
              if ((i + 4) % (canvas.width * 4) == 0) { // 每行最后一个点，特殊处理。因为它后面没有边界点，所以变通下，取它前一个点
                obj[i] = obj[i - 4];
                obj[i + 1] = obj[i - 3];
                obj[i + 2] = obj[i - 2];
                obj[i + 3] = obj[i - 1];
                i += 4;
              }
              else { // 取下一个点和下一行的同列点
                obj[i] = 255 / 2         // 平均值
                  + 2 * obj[i]   // 当前像素点
                  - obj[i + 4]   // 下一点
                  - obj[i + canvas.width * 4]; // 下一行的同列点
              }
            }
            else {  // 最后一行，特殊处理
              if ((i + 1) % 4 !== 0) {
                obj[i] = obj[i - canvas.width * 4];
              }
            }
          }
        }


        // 反相：取每个像素点与255的差值
        invert.addEventListener("click", function () {
          getInitImageData();
          if (this.checked) {
            for (var i = 0, len = imgData.length; i < len; i += 4) {
              canvasFilter.invert(imgData, i);
            }
            ctx.putImageData(tempImageData, 0, 0);
          }
          else {
            resetImageData();
          }
        }, false);

        // 灰化：取某个点的rgb的平均值
        grayscale.addEventListener("click", function () {
          getInitImageData();
          if (this.checked) {
            for (var i = 0, len = imgData.length; i < len; i += 4) {
              canvasFilter.grayscale(imgData, i);
            }
            ctx.putImageData(tempImageData, 0, 0);
          }
          else {
            resetImageData();
          }
        }, false);

        // 怀旧：特定公式
        sepia.addEventListener("click", function () {
          getInitImageData();
          if (this.checked) {
            for (var i = 0, len = imgData.length; i < len; i += 4) {
              canvasFilter.sepia(imgData, i);
            }
            ctx.putImageData(tempImageData, 0, 0);
          }
          else {
            resetImageData();
          }
        }, false);

        // 变亮：rgb点加上某个数值
        brightness.addEventListener("click", function () {
          getInitImageData();
          if (this.checked) {
            for (var i = 0, len = imgData.length; i < len; i += 4) {
              canvasFilter.brightness(imgData, i, 30);
            }
            ctx.putImageData(tempImageData, 0, 0);
          }
          else {
            resetImageData();
          }
        }, false);

        // 阈值：将灰度值与设定的阈值比较，如果大于等于阈值，则将该点设置为255，否则设置为0
        //“阈值”命令将灰度或彩色图像转换为高对比度的黑白图像。您可以指定某个色阶作为阈值。所有比阈值亮的像素转换为白色；而所有比阈值暗的像素转换为黑色。“阈值”命令对确定图像的最亮和最暗区域很有用。
        threshold.addEventListener("click", function () {
          getInitImageData();
          if (this.checked) {
            for (var i = 0, len = imgData.length; i < len; i += 4) {
              canvasFilter.threshold(imgData, i, 150);
            }
            ctx.putImageData(tempImageData, 0, 0);
          }
          else {
            resetImageData();
          }
        }, false);

        // 模糊 
        // stackblur
        blur.addEventListener("click", function () {
          getInitImageData();
          if (this.checked) {
            stackBlurCanvasRGBA("canvas", 0, 0, canvas.width, canvas.height, 10);
          }
          else {
            resetImageData();
          }
        }, false);

        // 浮雕：取下一个点和下一行对应的点值
        relief.addEventListener("click", function () {
          getInitImageData();
          if (this.checked) {
            for (var i = 0, len = imgData.length; i < len; i++) {
              canvasFilter.relief(imgData, i, canvas);
            }
            ctx.putImageData(tempImageData, 0, 0);
          }
          else {
            resetImageData();
          }
        }, false);

        // init
        img.onload = function () {
          getInitImageData();
        }

        img.src = "beach.png";
      }
    }
  }
</script>-->