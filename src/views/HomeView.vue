<template>
  <div class="home">
   <CarrouselComp/>
   <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">

</div>
   <div id="arrows" style="margin-bottom: 5%;">
    <h1 style="font-family: Playfair Display; font-size: 35px; color: white; font-weight: bold; margin-top: 3%; margin-bottom: 1%;">Most Popular</h1>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://caitlin-dalwai.github.io/imgs/image%208.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://caitlin-dalwai.github.io/imgs/image%207.png" class="d-block w-100" alt="...">
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true" style="background-color: #900A06;"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true" style="background-color: #900A06;" ></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   </div>
   
   

   <div id="coming" data-aos="flip-left">
    <div id="bg-wrap">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" class="custom-gradient">
            <defs>
                <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
                    <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                    <stop offset="0%" stop-color="#780804"></stop>
                    <stop offset="100%" stop-color="#900A06"></stop>
                </radialGradient>
                <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
                    <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                    <stop offset="0%" stop-color="#780804"></stop>
                    <stop offset="100%" stop-color="#B8120C"></stop>
                </radialGradient>
                <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
                    <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                    <stop offset="0%" stop-color="#600603"></stop>
                    <stop offset="100%" stop-color="#480403"></stop>
                </radialGradient>
                <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5">
                    <animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate>
                    <stop offset="0%" stop-color="#300202"></stop>
                    <stop offset="100%" stop-color="#900A06"></stop>
                </radialGradient>
                <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5">
                    <animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate>
                    <stop offset="0%" stop-color="#B8120C"></stop>
                    <stop offset="100%" stop-color="#5E0704"></stop>
                </radialGradient>
                <radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5">
                    <animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite"></animate>
                    <stop offset="0%" stop-color="#4A0603"></stop>
                    <stop offset="100%" stop-color="#A50D08"></stop>
                </radialGradient>
            </defs>
            <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)">
                <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate>
                <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite"></animateTransform>
            </rect>
            <rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)">
                <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate>
                <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate>
                <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite"></animateTransform>
            </rect>
            <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)">
                <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                <animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite"></animateTransform>
            </rect>
        </svg>
    </div>

    <h1 style="font-family: Playfair Display; font-size: 35px; color: white; font-weight: bold; margin-top: 5%; text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black; " class="animate__animated animate__flash" >Coming soon!</h1>
    <div class="container text-center">
        <div class="row">
            <div class="col align-self-start" style="margin-top: 3%; margin-bottom: 3%;">
                <img src="https://caitlin-dalwai.github.io/imgs/demon-slayer%201%20(1).png" alt="" style="box-shadow: 6px 6px 6px black; border: black 5px solid;">
            </div>
            <div class="col align-self-end" style="margin-top: 3%; margin-bottom: 3%;">
                <img src="https://caitlin-dalwai.github.io/imgs/image%209.png" alt="" style="box-shadow: 6px 6px 6px black; border: black 5px solid;">
            </div>
        </div>
    </div>
</div>


  </div>
</template>

<script>
import CarrouselComp from '../components/CarrouselComp.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
    mounted() {
    AOS.init();
    
  },
  components:{
   CarrouselComp
  }
}

</script>
<style scoped>

/* .custom-gradient{
    background: linear-gradient(-45deg, #FFA500, #FF4500, #FF0000, #900A06
);
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
} */

#coming {

    position: relative;
    overflow: hidden;
}

#bg-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; 
}

#coming h1 {
    z-index: 1; 
}

#coming .container {
    z-index: 1; 
}
.animate__animated.animate__flash {
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

</style>
