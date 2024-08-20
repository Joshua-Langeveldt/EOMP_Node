<template>
  <div class="home">
   <CarrouselComp/>
   <div>
    <h1 style="font-family: Playfair Display; font-size: 35px; color: white; font-weight: bold; margin-top: 5%;">Fan Favorites</h1>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.postimg.cc/2SmXNGzt/image-2-1.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/2SmXNGzt/image-2-1.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/2SmXNGzt/image-2-1.png" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   </div>
   
   <div id="coming" >
    <h1 style="font-family: Playfair Display; font-size: 35px; color: white; font-weight: bold; margin-top: 5%;">Coming soon!</h1>
    <div class="container text-center">
  <div class="row">
    <div class="col align-self-start" style="margin-top: 15%;">
      <img src="https://i.postimg.cc/jdQYfL2G/image-2-3.png" alt="">
    </div>
    
    <div class="col align-self-end" style="margin-top: 15%;">
      <img src="https://i.postimg.cc/jdQYfL2G/image-2-3.png" alt="">
    </div>
  </div>
</div>

   </div>
  </div>
</template>

<script>
import CarrouselComp from '../components/CarrouselComp.vue';

export default {
  components:{
   CarrouselComp
  }
  
  
}
</script>
<style>
#coming{
  background-image: url("https://i.postimg.cc/j2xLrBF5/Group-4.png");
  background-size: contain;
  background-repeat: no-repeat;
  min-height: 100vh;
  min-width: 100vw;

}
</style>
