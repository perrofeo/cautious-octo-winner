<template>
<section class="Header">
  <div class="VideoBg">
    <video autoplay="autoplay" loop="loop" muted="muted" style="visibility: visible;">
    <source src="~/assets/Noare15s.mp4" type="video/mp4">
  </video>
  <div class="container">
    <div>
      <div class="logo">
        <img src="~/assets/LOGO_noare_blanco.png" alt="Noare Films">
      </div>
      
      <div class="links">
        <a
          href="#" v-scroll-to="'#demo'"
          class="button--white">Ver Demo</a>
      </div>
    </div>
  </div>
  </div>
  <demo id="demo"></demo>
  <div class="descripcion">
    <b-container>
      <b-row align-h="center">
        <b-col sm="8">
          <div class="logo2">
        <img src="~/assets/LOGO_noare_blanco.png" alt="Noare Films">
      </div>
          <p>En Noare Films nos encanta relatar historias a través de imágenes y música, 
            nos dedicamos a la producción audiovisual en varios campos. 
            Nuestro objetivo es crear películas con un toque cinematográfico que consigan emocionar y sorprender.</p>

            <div class="links">
        <a
          href="https://vimeo.com/noarefilms"
          target="_blank"
          class="button--white">Vimeo</a>
          <a
          href="https://www.instagram.com/noarefilms/"
          target="_blank"
          class="button--white">Instagram</a>
      </div>
          <h4>contacto@noarefilms.com</h4>
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
    background-image: url("~assets/frame1.png");
    background-color: black;
}
.logo{
   display: inline-block;
  
  position: relative;
  overflow: hidden;
  
  max-width: 350px;
  z-index: 10;
}
.logo2{
  max-width: 300px;
  display: inline-block;
  
  position: relative;
  overflow: hidden;
}
.logo img, .logo2 img{
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
  font-family: 'Open Sans', sans-serif;
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
  font-family: 'Open Sans', sans-serif;
}
.descripcion, #demo{
  font-family: 'Open Sans', sans-serif;
  background-color: black;
  color: rgb(204, 204, 204);
}
.descripcion img{
  padding-bottom: 30px;
}

.links {
  padding-top: 15px;
  padding-bottom: 30px;
}
.links .icon{
  padding: 10px;
}
</style>
