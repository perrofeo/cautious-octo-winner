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
    
</style>
