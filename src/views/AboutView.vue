<template>
  <div class="about">
    <div class="container text-center" style=" margin-top: 3%;">
      <canvas id="demo"></canvas>

      <h1 style="margin-top: 1%; color: white; font-weight: bolder;">About Aniverse</h1>

      <div class="row">
        <div class="col-lrg-6 align-self-start" data-aos="fade-right">
          <img src="https://caitlin-dalwai.github.io/imgs-fin/aniverse%20(3)%202.png" alt="">
        </div>
        
        <div class="col-lrg-6 align-self-end" data-aos="fade-left" style="margin-top: 1%; text-align: center;">
          <p style="color: white; height: fit-content; width: 50%; background-color: #900A0680; margin: 0 auto 10%; border-radius: 5%; font-size: 17px; box-shadow: 4px 4px 4px white;">
            Aniverse is your ultimate destination for all things anime, merging the vibrant world of anime with the expansive universe of fandom. Our name, a fusion of "anime" and "universe," perfectly captures our mission to offer a comprehensive and immersive experience for anime enthusiasts. At Aniverse, we curate an extensive selection of anime movies, series, and merchandise, ensuring that every fan finds their favorite titles and collectibles. By choosing Aniverse, you're not just shopping—you're entering a universe where your anime passion is celebrated and nurtured with high-quality products and exceptional service. Dive into Aniverse and discover a world where your love for anime knows no bounds.
          </p>
        </div>
      </div>
    </div>

    <div data-aos="fade-up" id="nextP" style="margin-top: -5rem; margin-bottom: 5%;">
      <h1 style="font-family: Playfair Display; font-size: 35px; color: white; font-weight: bold; margin-top: 5%;">Meet The Team</h1>
      <div class="container text-center">
        <div class="row">
          <div class="col align-self-start" style="margin-top: 5%;" data-aos="fade-up">
            <img src="https://caitlin-dalwai.github.io/imgs-fin/caity%20boo%201%20(1).png" alt="" style="margin-top: 5%;">
            <h1 style="font-family: Playfair Display; font-size: 30px; color: white; font-weight: bold; margin-top: 2%;">Caitlin Dalwai</h1>
            <button type="button" class="btn" id="frontendModalBtn" data-bs-toggle="modal" data-bs-target="#frontendModal" style="border:10px solid #900A06; margin-right: 1%; background-color: #900A06; width: 150px; height: 58px; border-radius: 10rem;">
              <label for="button" style="font-family: Playfair Display; font-size: 18px; color: white; font-weight: bold; text-align: center">Read more</label>
            </button>
            <div class="modal fade" id="frontendModal" tabindex="-1" aria-labelledby="frontendModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="frontendModalLabel">FRONTEND</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="border:5px solid #900A06"></button>
                  </div>
                  <div class="modal-body">
                    <div style="margin-top: 3%; border: #900A06 solid 5px;">
                      <div class="card-text">
                        <p>As the frontend developer for Aniverse, my primary responsibility was to design and implement an engaging and functional layout for our ecommerce website, tailored for anime enthusiasts. I used VueJS to create a seamless user experience. My tasks included developing key views such as the Home view to introduce users to our products, the About view to provide insights about Aniverse, and the Contact view to enable communication through forms and social media. I also worked on a dynamic Products view that showcased all our anime films, series, and merchandise, with each product featuring a "View Details" button that led to a detailed Single Product view, I did this with the help of my partner, Jamin Langeveldt. Additionally, we implemented an Admin view to manage user and product data with CRUD functionalities. Essential components like NavBarComp, FooterComp, Card, and SpinnerComponent were integrated to enhance the user interface and ensure a smooth browsing experience.</p>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="border:5px solid #900A06">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col align-self-end" style="margin-top: 1%; text-align: center;" data-aos="fade-up">
            <img src="https://caitlin-dalwai.github.io/imgs-fin/Jam-Inside%201.png" alt="" style="margin-top: 5%;">
            <h1 style="font-family: Playfair Display; font-size: 30px; color: white; font-weight: bold; margin-top: 2%;">Jamin Langeveldt</h1>
            <button type="button" class="btn" id="backendModalBtn" data-bs-toggle="modal" data-bs-target="#backendModal" style="border:10px solid #900A06; margin-right: 1%; background-color: #900A06; width: 150px; height: 58px; border-radius: 10rem;">
              <label for="button" style="font-family: Playfair Display; font-size: 18px; color: white; font-weight: bold; text-align: center;">Read more</label>
            </button>
            <div class="modal fade" id="backendModal" tabindex="-1" aria-labelledby="backendModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="backendModalLabel">BACKEND</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="border:5px solid #900A06"></button>
                  </div>
                  <div class="modal-body">
                    <div style="margin-top: 3%; border: #900A06 solid 5px;">
                      <div class="card-text">
                        <p>As the backend developer for Aniverse, my primary role was to build and maintain a robust backend system using MySQL and Express API. I focused on creating a secure and efficient API, handling data operations for both users and products. This involved hashing passwords before storing them in the database and ensuring that each API response included a token and a valid status code to inform the frontend of success or errors. I set up the database on Clever Cloud and hosted the API on Render, making sure to include environmental variables for configuration. I also created a comprehensive index.html file for the API home page, detailing all routes and methods in a tabular format to guide frontend development. My backend responsibilities included implementing CRUD operations for users and products. This setup allowed for smooth integration with the frontend, enabling the display and management of anime films, series, and merchandise on our Aniverse site.</p>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="border:5px solid #900A06">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import AOS from 'aos';
import 'aos/dist/aos.css';
import _ from 'lodash';


export default {
  mounted() {
    AOS.init();


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
        r: 144, 
        g: 10,  
        b: 6    
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
        ctx.fillStyle = 'black'; 
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

    
  },

 
  
}
</script>
