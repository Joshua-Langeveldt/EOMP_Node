<!-- <template>
    <div id="nav" class="sticky-top">
        
     
<div >
  <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                      <router-link class="nav-link"  :class="{ active: $route.path === '/' }" id="col" to="/">Home</router-link>                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" :class="{ active: $route.path=== '/about' }" id="col" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="navbar-brand" to="/">
                <img src="https://joshua-langeveldt.github.io/images/images/Logo/aniverse.png" loading="lazy" alt="logo" style="border-radius: 50%; border: solid white 1.5px;">
            </router-link>
                     </li>
                     <li class="nav-item">
                      <router-link class="nav-link" :class="{ active: $route.path=== '/products' }" id="col" to="/products">Products</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" :class="{ active: $route.path=== '/contact' }" id="col" to="/contact">Get in touch</router-link>
                    </li>
                    <ul class="admin-icon">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin"><i class="bi bi-person-circle icon"></i></router-link>
                    </li>
                </ul>
                </ul>
                

            </div>
        </div>
        
    </nav>
    <div class="color-gradient">
    </div>

    </div>
</div>

</template>
<script>
export default {
    
}
</script>
<style >

#nav {
    background-color: #23252B;
    height: 80px;
    font-family: Playfair Display;
}

#col {
    color: white;
}

.nav-link {
    font-family: Playfair Display;
    transition: color 0.3s ease, border-bottom 0.3s ease; 
}

nav {
    padding: 30px;
    background-color: #23252B;
    text-align: center;
}

.navbar-nav {
    margin-left: 26rem;
}

nav a {
    font-weight: 500;
    font-size: 1.2rem !important;
    color: #fff !important;
    margin: 1.5rem;
    margin-right: 3rem;
    text-decoration: none; 
}

nav a.router-link-exact-active {
    color: #B21616; 
    border-bottom: 2px solid #B21616; 
}

.nav-link:hover {
    color: #FF5733; 
    border-bottom: 2px solid #FF5733; 
}

.admin-icon {
    margin-left: 13rem;
}

.color-gradient {
    height: 10px;
    background: linear-gradient(-45deg, #900A06, #900A0680, #FF0000, #900A06);
    background-size: 400% 400%;
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
}

img[alt='logo'] {
    width: 5rem;
    border-radius: 20px;
    border: 1px solid white;
}

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
.navbar-toggler {
    border-color: white;
}
.navbar-collapse {
    display: flex !important;
    justify-content: center;
}
.navbar-nav {
    flex-direction: column;
    align-items: center;
}

@media (max-width: 300px) {
    .navbar-collapse {
        display: flex !important;
        flex-direction: column;
        align-items: center; 
    }
    .navbar-nav {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
    nav a {
        text-align: center;
        margin-left: -38rem;
    }
    .admin-icon {
        margin-left: 0;
    }
}
@media (max-width: 720px) {
    .navbar-collapse {
        display: flex !important;
        flex-direction: column;
        align-items: center;
    }
    .navbar-nav {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
    nav a {
        text-align: center;
        margin-left: -38rem;
    }
    .admin-icon {
        margin-left: 0;
    }
}

</style> -->

<template>
    <div id="nav">
<div class="fixed-top">
  <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                      <router-link class="nav-link"  :class="{ active: $route.path === '/' }" id="col" to="/">Home</router-link>                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" :class="{ active: $route.path=== '/about' }" id="col" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="navbar-brand" to="/">
                <img src="https://joshua-langeveldt.github.io/images/images/Logo/aniverse.png" loading="lazy" alt="logo" style="border-radius: 50%; border: solid white 1.5px;">
            </router-link>
                     </li>
                     <li class="nav-item">
                      <router-link class="nav-link" :class="{ active: $route.path=== '/products' }" id="col" to="/products">Products</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" :class="{ active: $route.path=== '/contact' }" id="col" to="/contact">Contact</router-link>
                    </li>
                    <ul class="admin-icon">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin"><i class="bi bi-person-circle icon"></i></router-link>
                    </li>
                </ul>
                </ul>
            </div>
        </div>
    </nav>
    <div class="color-gradient">
    </div>
    </div>
</div>
</template>
<script>
export default {
}
</script>
<style>
#nav {
    background-color: #23252B;
    height: 80px;
    font-family: Playfair Display;
}
#col {
    color: white;
}
.nav-link {
    font-family: Playfair Display;
    transition: color 0.3s ease, border-bottom 0.3s ease;
}
nav {
    padding: 30px;
    background-color: #23252B;
    text-align: center;
}
.navbar-nav {
    margin-left: 26rem;
}
nav a {
    font-weight: 500;
    font-size: 1.2rem !important;
    color: #fff !important;
    margin: 1.5rem;
    margin-right: 3rem;
    text-decoration: none;
}
nav a.router-link-exact-active {
    color: #B21616;
    border-bottom: 2px solid #B21616;
}
.nav-link:hover {
    color: #FF5733;
    border-bottom: 2px solid #FF5733;
}
.admin-icon {
    margin-left: 13rem;
}
.color-gradient {
    height: 10px;
    background: linear-gradient(-45deg, #900A06, #900A0680, #FF0000, #900A06);
    background-size: 400% 400%;
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
}
img[alt='logo'] {
    width: 5rem;
    border-radius: 20px;
    border: 1px solid white;
}
/* Style the hamburger menu button */
.navbar-toggler {
    border: none; /* Remove border */
    background-color: transparent; /* Transparent background */
}
.navbar-toggler-icon {
    background-image: none; /* Remove default icon */
}
/* Add custom white icon for the hamburger button */
.navbar-toggler::before {
    content: "\2630"; /* Unicode for hamburger icon */
    font-size: 1.5rem;
    color: white; /* White color for the icon */
}
/* Style the links within the collapsed menu */
.navbar-collapse {
    background-color: #23252B; /* Match the background color */
}
.navbar-nav .nav-link {
    color: white; /* White color for the links */
}
/* Optional: Ensure the active and hover states also have white text */
.navbar-nav .nav-link.active {
    color: #B21616; /* Active link color */
}
.navbar-nav .nav-link:hover {
    color: #FF5733; /* Hover color */
}
/* Ensure the links are white when in the collapsed state */
.navbar-collapse.show .navbar-nav .nav-link {
    color: white; /* Ensure links are white when menu is open */
}
@media (max-width: 300px) {
    .navbar-nav {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
    nav a {
        text-align: center;
        margin-left: -65rem !important;
    }
    .admin-icon {
        margin-left: 0;
    }
}
@media (max-width: 720px) {
    .navbar-nav {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
    nav a {
        text-align: center;
        margin-left: -65rem !important;
    }
    .admin-icon {
        margin-left: 0;
    }
}

</style>