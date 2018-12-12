<template>
  <div class="demo">
    
    <div class="demo-video">
        <b-embed type="iframe"
                 aspect="16by9"
                 src="https://www.youtube.com/embed/ZxJuLiBmUf8"
                 frameborder="0"
                 allowfullscreen
                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
       ></b-embed>
    </div>
    <div class="descripcion">
    
      <b-row align-h="center">
        <b-col sm="8">
          
          <p>En Noare Films nos encanta relatar historias a través de imágenes y música. 
            Nos dedicamos a la producción audiovisual en varios campos. 
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
    
  </div>
  </div>
  
</template>

<style>
    
    .demo{
         
    justify-content: center;
    
    text-align: center;
    padding: 100px 25px;
    background-color: black;
    }
    .demo-video{
      max-width: 900px;
      width: 100%;
      margin: auto;
    }
    .descripcion, #demo{
  font-family: 'Open Sans', sans-serif;
  background-color: black;
  color: rgb(204, 204, 204);
}
.descripcion .container{
  height: auto;
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
