<template>
  <div>
    <nuxt/>
    <footer class="footer">
      <div class="container-footer">
        <span>NOARE FILMS © 2018 - BY MOTXUELO</span>
      </div>
    </footer>
  </div>
</template>

<style>
html {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--white {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid rgb(204, 204, 204);
  color: rgb(204, 204, 204);
  text-decoration: none;
  padding: 10px 30px;
}

.button--white:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.container-footer{
  text-align: center;
  height: 40px;
  color: rgb(204, 204, 204);
  padding: 8px;
  border-top: solid 1px rgb(204, 204, 204);
  background-color: black;
}
</style>
