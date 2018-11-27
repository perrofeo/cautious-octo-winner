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
        Creación audiovisual
      </h2>
      <div class="links">
        <a
          href="#" v-scroll-to="'#demo'"
          class="button--green"><font-awesome-icon icon="arrow-down" size="2x" /></a>
      </div>
    </div>
  </div>
  </div>
  <demo id="demo"></demo>
  <div class="descripcion">
    <b-container>
      <b-row align-h="center">
        <b-col sm="12">
          <h2>Contacto</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

            <div class="links">
        <a
          href="#"
          class="button--green">Youtube</a>
          <a
          href="#"
          class="button--green">Instagram</a>
      </div>
          <h4>arkaitz@noarefilms.com</h4>
          </b-col>
        
    </b-row>
    </b-container>
  </div>
</section>

</template>

<script>
import Demo from '~/components/Demo.vue'
import VueScrollTo from 'vue-scrollto';




export default {
  components: {
    Demo 
  },
  head () {
    return {
      title: 'Noare Films',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
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
    background-color: black;
}
.logo{
   display: inline-block;
  
  position: relative;
  overflow: hidden;
  height: 101px;
  width: 245px;
  z-index: 10;
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
  padding-bottom: 30px;
}
.links .icon{
  padding: 10px;
}
</style>
