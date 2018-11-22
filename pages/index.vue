<template>
<section class="Header">
  <div class="VideoBg">
  <video autoplay="autoplay" loop="loop" muted="muted" style="visibility: visible;">
    <source src="~/assets/timelapse.mp4" type="video/mp4">
  </video>
  <div class="container">
    <div>
      <div class="logo">
        <img src="~/assets/LOGO_noare_blanco.png" alt="Noare Films">
      </div>
      <h2 class="subtitle">
        My neat Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </div>
  </div>
  <demo/>
</section>

</template>

<script>
import Logo from '~/components/Logo.vue'
import Demo from '~/components/Demo.vue'



export default {
  components: {
    Demo 
  }
}
</script>

<style>
.VideoBg {
    position: relative;
    background-size: cover;
    background-position: 50%;
    overflow: hidden;
    
    
    

}
.VideoBg video {
    position: absolute;
    top: 50%;
    left: 50%;
    visibility: hidden;
    transform: translate(-50%,-50%);
    z-index: -10;
    min-width: 100%;
    height: auto;
    min-height: 100%;
    background-image: url("~assets/timelapse_img.png");
}
.logo{
   display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  height: 101px;
  width: 245px;
}
.logo img{
  width: 100%;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: black;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
