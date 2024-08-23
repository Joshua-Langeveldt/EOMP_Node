<template>
    <div id="contactP">
      <canvas id="demo"></canvas>
        <div class="container pt-5">
            <h1 style="margin-top: 2%; color: white; font-weight: bolder; margin-bottom: 5%;">Get In Touch !</h1>
            <div class="row">
                <div class="col-lg-4">
                    <FormComp/>
                </div>
                <div class="col-lg-4">
                    <img src="https://caitlin-dalwai.github.io/imgs-fin/klipartz.com%201.png" alt="" id="imgC" >
                </div>
            
            <div class="col-lg-4" style="height: fit-content; color: white;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=white class="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                      </svg><p>Cape Town, South Africa</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=white class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                      </svg><p style="margin-bottom: 0%;">langeveldt20joshua@gmail.com</p><p>dalwaicaitlin@gmail.com</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=white class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                      </svg><p style="margin-bottom: 0%;">+27 78 450 3293</p><p>+27 82 701 8105</p>
                </div>
                </div>
            </div>

    </div>
</template>
<script>
/* eslint-disable */
import FormComp from '@/components/FormComp.vue';
import _ from 'lodash';
export default {
  components: {
    FormComp
  },
  mounted() {
    let { random, range, times, assign } = _;
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;

    const FloatArray = window.Float32Array || Array;

    function fuzzy(range, base) {
      return (base || 0) + (Math.random() - 0.5) * range * 2;
    }

    function makeOctaveNoise(width, height, octaves) {
      let canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');

      canvas.width = width;
      canvas.height = height;

      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, width, height);

      ctx.globalAlpha = 1 / octaves;
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < octaves; i++) {
        let octave = makeNoise(width >> i, height >> i);
        ctx.drawImage(octave, 0, 0, width, height);
      }
      return canvas;
    }

    function makeNoise(width, height) {
      let canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');

      canvas.width = width;
      canvas.height = height;

      let imgData = ctx.getImageData(0, 0, width, height),
        data = imgData.data,
        pixels = data.length;

      for (let i = 0; i < pixels; i += 4) {
        data[i] = Math.random() * 255;
        data[i + 1] = Math.random() * 255;
        data[i + 2] = Math.random() * 255;
        data[i + 3] = 255;
      }
      ctx.putImageData(imgData, 0, 0);

      return canvas;
    }

    let defaults = {
      maxAge: 70,
      exposure: 0.1,
      damping: 0.8,
      noise: 1.0,
      fuzz: 1.0,
      intensity: 1.0,
      vx: 10,
      vy: 10,
      spawn: 5,
      octaves: 8,
      color: {
        r: 144, // Red color component for #900A06
        g: 10,  // Green color component for #900A06
        b: 6    // Blue color component for #900A06
      },
      width: WIDTH,
      height: HEIGHT,
      x: WIDTH * 0.5,
      y: HEIGHT * 0.5
    }

    class Emitter {
      constructor(options) {
        assign(this, defaults, options);

        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext('2d');

        this.noiseData = this.noiseCanvas.getContext('2d').getImageData(0, 0, this.width, this.height).data;
        this.particles = [];

        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.imgdata = this.ctx.getImageData(0, 0, this.width, this.height);
        this.data = this.imgdata.data;
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.hdrdata = new FloatArray(this.data.length);
        times(this.noiseData.length, n => {
          this.hdrdata[n] = 0;
        });
        this.velocity = {
          x: random(-0.5, 0.5, true),
          y: random(-0.5, 0.5, true)
        }

        this.update = this.update.bind(this);
      }

      tonemap(n) {
        return (1 - Math.pow(2, -n * 0.005 * this.exposure)) * 255;
      }

      getNoise(x, y, channel) {
        return this.noiseData[(~~x + ~~y * this.width) * 4 + channel] / 127 - 1.0;
      }

      update() {
        if (this.x < 0 || this.x > this.width) {
          return;
        }
        if (this.y < 0 || this.y > this.height) {
          return;
        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;

        let { x, y, vx, vy, width, height, color, maxAge, damping, noise, fuzz, intensity, spawn } = this;
        let { r, g, b } = color;

        times(spawn, n => {
          this.particles.push({
            vx: fuzzy(vx),
            vy: fuzzy(vy),
            x: x,
            y: y,
            age: 0
          });
        });

        let alive = [];

        this.particles.forEach(p => {
          p.vx = p.vx * damping + this.getNoise(p.x, p.y, 0) * 4 * noise + fuzzy(0.1) * fuzz;
          p.vy = p.vy * damping + this.getNoise(p.x, p.y, 1) * 4 * noise + fuzzy(0.1) * fuzz;
          p.age++;
          times(10, x => {
            p.x += p.vx * 0.1;
            p.y += p.vy * 0.1;
            let index = (~~p.x + ~~p.y * width) * 4;
            this.data[index] = this.tonemap(this.hdrdata[index] += r * intensity);
            this.data[index + 1] = this.tonemap(this.hdrdata[index + 1] += g * intensity);
            this.data[index + 2] = this.tonemap(this.hdrdata[index + 2] += b * intensity);
          });
          if (p.age < maxAge) {
            alive.push(p);
          }
        });
        this.ctx.putImageData(this.imgdata, 0, 0);
        this.particles = alive;
      }
    }

    class Smoke {
      constructor(container) {
        let canvas = container;
        let width = WIDTH;
        let height = HEIGHT;
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext('2d');
        let y = canvas.height * 0.5;
        let noiseCanvas = makeOctaveNoise(width, height, 8);

        let emitter = new Emitter({
          maxAge: 300,
          width: canvas.width,
          height: canvas.height,
          damping: 0.75,
          exposure: 0.05,
          intensity: 1.0,
          noiseCanvas: noiseCanvas
        });

        emitter.x = 0;
        emitter.y = y;
        emitter.velocity.x = 1;
        emitter.velocity.y = 0;

        this.canvas = canvas;
        this.ctx = ctx;
        this.emitters = [emitter];

        this.update = this.update.bind(this);
        this.loop = this.loop.bind(this);
        this.loop();
      }

      update() {
        let ctx = this.ctx,
          canvas = this.canvas;

        ctx.globalCompositeOperation = 'normal';
        ctx.fillStyle = 'black'; // Black background color
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        this.ctx.globalCompositeOperation = 'lighter';
        this.emitters.forEach(emitter => {
          emitter.update();
          this.ctx.drawImage(emitter.canvas, 0, 0);
          emitter.ctx.restore();
        });
      }

      loop() {
        this.update();
        requestAnimationFrame(this.loop);
      }
    }

    let smoke = new Smoke(document.getElementById('demo'), { width: WIDTH, height: HEIGHT });
  }
}
</script>
<style>
   *{
    font-family: Playfair Display;
   } 
   #demo{
    position: absolute;
   z-index: -1;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   width: 100vw;
   }
   @media (max-width: 300px){
    #imgC{
      display: none;
    }
   }
</style>