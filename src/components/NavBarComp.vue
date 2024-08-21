<template>
  <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mb-2 mb-lg-0">
                  <li class="nav-item">
                      <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" to="/about">About</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="navbar-brand" to="/">
              <img src="https://joshua-langeveldt.github.io/images/images/Logo/aniverse.png" loading="lazy" alt="logo">
          </router-link>
                   </li>
                   <li class="nav-item">
                      <router-link class="nav-link" to="/products">Products</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" to="/reachUs">Contact</router-link>
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
</template>