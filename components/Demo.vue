<template>
  <div class="demo">
    
    <div class="demo-video">
        <b-embed type="iframe"
                 title="Haz clic si te atreves"
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
            Nos dedicamos a la producción audiovisual en varios campos y 
            nuestro objetivo es crear vídeos con un toque cinematográfico que consigan emocionar y sorprender.</p><br>
            <div class="lista">
            <p>Somos especialistas en realizar:</p>
            <div class="lista2">
            <ul class="text-left">
  <li>Reportajes de boda</li>
  <li>Videoclips</li>
  <li>Videomarketing</li>
  <li>Comuniones</li>
  <li>Eventos sociales</li>
  <li>Invitaciones de boda</li>
</ul>
            </div>
            </div>

            <div class="links2">
        <a
          href="https://vimeo.com/noarefilms"
          target="_blank"
          rel="noopener"
          class="button--white">Vimeo</a>
          <a
          href="https://www.instagram.com/noarefilms/"
          target="_blank"
          rel="noopener"
          class="button--white">Instagram</a>
      </div>
          <p><a href="mailto:contacto@noarefilms.com"><strong>contacto@noarefilms.com</strong></a></p>
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
.descripcion{
  padding-top: 30px;
}
.descripcion .container{
  height: auto;
}
.descripcion img{
  padding-bottom: 30px;
}
.lista{

  text-align: center;
  padding-bottom: 20px;
}
.lista2{
  display: inline-block;
}
.links2 {
  padding: 15px 0px 40px;
}
.links2 a{
  margin: 10px 10px;
  
}
.descripcion a{
  color: rgb(204, 204, 204);
}
    
</style>
