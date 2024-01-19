<template>
  <div class="container">
    <img :src="urlImg" alt="No se puede visualizar" />
    <label for=""> {{ texto }} </label>
  </div>
</template>

<script>
export default {
  props: {
    texto: {
      type: String,
    },
    urlImg: {
      type: String,
    },
  },
};
</script>

<style>
.container{
    display: grid;
    justify-content: center;
    align-items: center;
}
img{
    width: 200px;
    height: 200px;
}
label{
    margin: 15px;
}

</style>