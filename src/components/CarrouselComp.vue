   <template>
    <div id="carrousel">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000" 
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="overlay-container">
              <img src="https://i.postimg.cc/q7mJWQ3c/Group-4-1.png" class="d-block w-100" alt=" ">
              <div class="overlay"></div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="overlay-container">
              <img src="https://i.postimg.cc/hvB5sRt2/Group-5-1.png" class="d-block w-100" alt=" ">
              <div class="overlay"></div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="overlay-container">
              <img src="https://i.postimg.cc/L5DNVq7s/Group-6-1.png" class="d-block w-100" alt=" ">
              <div class="overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CarrouselComp'
  }
  </script>
  
  <style scoped>
  .overlay-container {
    position: relative;
  }
  
  .overlay-container img {
    display: block;
    width: 100%;
    height: auto;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(144, 10, 6, 0.5); 
  }
  </style>
  