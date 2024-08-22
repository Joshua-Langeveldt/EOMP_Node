 

  <template>
    <div id="carrousel" style="margin-top: 2.5%;">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="overlay-container">
              <img src="https://caitlin-dalwai.github.io/imgs/first%20img%20C%201.png" class="d-block w-100" alt=" ">
              <div id="text" style="background-color: rgba(0, 0, 0, 0.75); width: 400px; height: 700px; position: absolute; top: 50%; margin-left: 1%; ">
                <h1 style="font-family: 'Matemasie', sans-serif; color: black; margin-top: 30%; text-shadow: -3px -3px 0 #900A06, 3px -3px 0 #900A06, -3px 3px 0 #900A06, 3px 3px 0 #900A06; ">ANIVERSE</h1>
                <h3 style="margin-top: 12%; font-weight: bold; color: white; background-color: #900A0680;">The Cafe Terrace and Its Goddesses</h3>
                <h5 style="font-size: smaller; color:white ; font-weight: bold; background-color: black;">Sub | Dub - Comedy Romance</h5>
                <p style="font-size: medium; width: 350px; margin-left: 10%; color: white;  ">"The Cafe Terrace and Its Goddesses" is a captivating anime series that blends slice-of-life charm with a touch of fantasy. Set in a quaint, picturesque café, the story revolves around a young man who inherits the family business and discovers a world of enchanting and mysterious goddesses who frequent the café. Each episode delves into the unique personalities of these divine patrons and their intriguing interactions with the café’s new owner</p>
                <div class="btn">
                  <button style="border-radius: 25px; height: 50px;" class="btn"><a href="../views/ProductsView.vue" style="color: white; font-weight: bold;">See more in products</a></button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="overlay-container">
              <img src="https://caitlin-dalwai.github.io/imgs/secondC%201.png" class="d-block w-100" alt=" ">
              <div id="text" style="background-color: rgba(0, 0, 0, 0.75); width: 400px; height: 700px; position: absolute; top: 50%; ">
                <h1 style="font-family: 'Matemasie', sans-serif; color: black; margin-top: 30%; text-shadow: -3px -3px 0 #900A06, 3px -3px 0 #900A06, -3px 3px 0 #900A06, 3px 3px 0 #900A06; ">ANIVERSE</h1>       
                <h3 style="margin-top: 12%; font-weight: bold; color: white; background-color: #900A0680;">One Punch Man</h3>
                <h5 style="font-size: smaller; color: white; font-weight: bold; background-color: black;">Sub | Dub - Comedy Romance</h5>
                <p style="font-size: medium; width: 350px;  color: white; margin-left: 10%;  ">"One Punch Man" follows the story of Saitama, a seemingly ordinary man who has trained himself to become the strongest hero in the world. With just a single punch, Saitama can defeat any opponent, no matter how powerful. However, his overwhelming strength has left him bored and unfulfilled, as he yearns for a challenge worthy of his power.</p>
                <div class="btn">
                  <button style="border-radius: 25px; height: 50px;" class="btn"><a href="../views/ProductsView.vue" style="color: white; font-weight: bold;">See more in products</a></button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="overlay-container">
              <img src="https://caitlin-dalwai.github.io/imgs/solo-levelingC%201.png" class="d-block w-100" alt=" ">
              <div id="text" style="background-color: rgba(0, 0, 0, 0.75); width: 400px; height: 700px; position: absolute; top: 50%; ">
                <h1 style="font-family: 'Matemasie', sans-serif; color: black; margin-top: 30%; text-shadow: -3px -3px 0 #900A06, 3px -3px 0 #900A06, -3px 3px 0 #900A06, 3px 3px 0 #900A06; ">ANIVERSE</h1>
                <h3 style="margin-top: 12%; font-weight: bold; color: white; background-color: #900A0680;">Solo Leveling</h3>
                <h5 style="font-size: smaller; color: white; font-weight: bold; background-color: black;">Sub | Dub - Action, Fantasy, Adventure</h5>
                <p style="font-size: medium; width: 350px;  color: white; margin-left: 10%; ">Solo Leveling is an exhilarating anime series that plunges viewers into a world where powerful monsters and dungeons emerge, threatening humanity. The story follows Jinwoo Sung, a seemingly weak and powerless "E-rank" hunter who, after a near-death experience, discovers a unique ability that allows him to "level up" beyond human limitations.</p>
                <div class="btn">
                  <button style="border-radius: 25px; height: 50px;" class="btn"><a href="../views/ProductsView.vue" style="color: white; font-weight: bold;">See more in products</a></button>
                </div>
              </div>
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
  width: 100%;
  height: auto;
}

.overlay-container img {
  display: block;
  width: 100%;
  height: auto;
}

#text {
  position: absolute;
  top: 50%; 
  right: 0; 
  transform: translateY(-50%);
  color: white;
  text-align: center; 
  z-index: 10; 
  background-color: rgba(0, 0, 0, 0.75); 
}

#text .btn {
  margin-top: 10px; 
}

#text h3, #text h5, #text p {
  margin: 10px 0; 
}

#text button {
  background-color: #900a06;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
}

#text button a {
  color: white;
  text-decoration: none;
}


</style>


 