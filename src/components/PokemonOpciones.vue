<template>
  <div class="options-container">
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
ul{
    list-style-type: none;
}
li{
    background-color: white;
    border-radius: 5px;
    border: 1px solid gray;
    width: 250px;
    margin-bottom: 10px;
    cursor: pointer;
}
li:hover{
    background-color: bisque;
}
.options-container{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>