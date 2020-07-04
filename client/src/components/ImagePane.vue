<template>
  <div class="imagepane_main">
    <div class="imagepane_content" @click="imgClicked()">
      <div class="imagepane_imgdiv">
          <img class="imagepane_img" :src="require('../assets/' + carModel + '.png')">
      </div>
      <div class="imagepane_text" style="padding-left: 4px;">Brand: {{carBrand}}</div>
      <div class="imagepane_text" style="padding-left: 1px;">Model: {{carModel}}</div>
      <div class="imagepane_text" style="padding-left: 10px;">Type: {{carType}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Image Pane',
  props: {
    carBrand: { type: String, default: '' },
    carModel: { type: String, default: '' },
    carType: { type: String, default: '' },

       
  },
  methods: {
    imgClicked: function () {
      var clickedCar = {brand:this.carBrand,model:this.carModel,type:this.carType};
    },
  },
  mounted: async function() {
  },
};
</script>

<style>
.imagepane_main {
  height: 200px;
  width: 200px;
  padding: 10px 10px 10px 10px;
}

.imagepane_content {
  height: 100%;
  width: 100%;
  border: solid thin black;
}

.imagepane_imgdiv {
  height: 70%;
  width: 100%;
}

.imagepane_img {
  height: 100%;
  width: 100%;
}

.imagepane_text {
  height: 10%;
  width: 100%;
  background-color: lightgray;
  font-size: 12px;
}

</style>
