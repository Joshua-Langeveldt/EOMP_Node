<template>
    <div id="nav">
        
        <ul class="nav justify-content-center">
  <li class="nav-item">
    <router-link class="nav-link"  :class="{ active: $route.path === '/' }" id="col" to="/">Home</router-link>  </li>
  <li class="nav-item">
    <router-link class="nav-link" :class="{ active: $route.path=== '/about' }" id="col" to="/about">About</router-link>
</li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true"><img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24"></a>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" :class="{ active: $route.path=== '/products' }" id="col" to="/products">Products</router-link>
</li>
  <li class="nav-item">
    <router-link class="nav-link" :class="{ active: $route.path=== '/contact' }" id="col" to="/contact">Get in touch</router-link>
</li>
  
  
</ul>

    </div>
</template>
<script>
export default {
    
}
</script>
<style>
#nav{
    background-color: #23252B;
    height: 80px;
    border-bottom: solid 10px #900A06;
    font-family: Playfair Display;
}
#col{
    color: white;

}
</style>