<template>
  <div class="demo">
    <h1 class="">Show-reel</h1>
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
    padding: 100px 0;
    background-color: black;
    }
    .demo-video{
      max-width: 700px;
      width: 100%;
      margin: auto;
    }
    
</style>
