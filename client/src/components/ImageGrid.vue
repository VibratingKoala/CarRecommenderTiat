<template>
  <div class="imagegrid_main">
    <div class="car_box">Available Cars</div>
    <div class="sideByDiv">
      <select class="imagegrid_type" v-model="carTypeSelected" @change="$emit('update:carTypeSelected',carTypeSelected)" >
        <option>All</option>
        <option>Hatch</option>
        <option>Sedan</option>
        <option>MPV</option>
        <option>SUV</option>
        <option>Sports</option>
        </select>
      <div class="imagegrid_search">Search Result: {{carList.length}}</div>
    </div>
    <div class="imagegrid_bottom">
      <ImagePane v-for="car in carList" v-bind:key="car" :carBrand="car.brand" :carModel="car.model" :carType="car.type" @carClicked="thisCarClicked"/>
    </div>
  </div>
</template>

<script>
import ImagePane from '@/components/ImagePane.vue';

export default {
  name: 'ImageGrid',
  components: {
    ImagePane,
  },
  props: {
    carTypeSelected: { type: String, default: 'All' },
       
    carList: { type: Array, default: [] },
    
    hatchList: { type: Array, default: [
      {brand:'Proton', model:'Iriz', type:'Hatch'},
      {brand:'Mazda', model:'Mazda3_Hatch', type:'Hatch'},
      {brand:'Perodua', model:'Axia', type:'Hatch'},
      {brand:'Perodua', model:'Myvi', type:'Hatch'},
    ] },

    sedanList: { type: Array, default: [
      {brand:'Proton', model:'Saga', type:'Sedan'},
      {brand:'Proton', model:'Persona', type:'Sedan'},
      {brand:'Proton', model:'Perdana', type:'Sedan'},
      {brand:'Mazda', model:'Mazda6', type:'Sedan'},
      {brand:'Mazda', model:'Mazda3_Sedan', type:'Sedan'},
      {brand:'Toyota', model:'Vios', type:'Sedan'},
    ] },

    mpvList: { type: Array, default: [
      {brand:'Proton', model:'Exora', type:'MPV'},
      {brand:'Perodua', model:'Alza', type:'MPV'},
      {brand:'Toyota', model:'Innova', type:'MPV'},
      {brand:'Toyota', model:'Avanza', type:'MPV'},
    ] },

    suvList: { type: Array, default: [
      {brand:'Proton', model:'X70', type:'SUV'},
      {brand:'Mazda', model:'CX3', type:'SUV'},
      {brand:'Mazda', model:'CX5', type:'SUV'},
    ] },

    sportsList: { type: Array, default: [
      {brand:'Mazda', model:'MX5', type:'Sports'},
      {brand:'Toyota', model:'Supra', type:'Sports'},
      {brand:'Nissan', model:'GTR', type:'Sports'},
    ] },
  },
  methods: {
    thisCarClicked(e) {
      this.carTypeSelected = e.type;
      this.$emit('carChanged',e.type);
    },
    loadAllCars() {
      this.hatchList.forEach((c) => { this.carList.push(c) })
      this.sedanList.forEach((c) => { this.carList.push(c) })
      this.mpvList.forEach((c) => { this.carList.push(c) })
      this.suvList.forEach((c) => { this.carList.push(c) })
      this.sportsList.forEach((c) => { this.carList.push(c) })
    },
  },
  watch: {
    carTypeSelected: function() {
      this.carList = [];
      if (this.carTypeSelected == 'All') {
        this.loadAllCars();
      }
      if (this.carTypeSelected == 'Hatch') {
        this.carList = this.hatchList;
      }
      if (this.carTypeSelected == 'Sedan') {
        this.carList = this.sedanList;
      }
      if (this.carTypeSelected == 'MPV') {
        this.carList = this.mpvList;
      }
      if (this.carTypeSelected == 'SUV') {
        this.carList = this.suvList;
      }
      if (this.carTypeSelected == 'Sports') {
        this.carList = this.sportsList;
      }
    }
  },
  mounted: function() {
    this.loadAllCars();
  },
};
</script>

<style>
.imagegrid_main {
  height: 100%;
  width: 100%;
}

.car_box {
  color: white;
  text-align: center;
  padding-top: 5px;
  background-color: grey;
  height: 30px;
  width: 100%;
}

.sideByDiv {
  display: flex;
  height: 30px;
  width: 100%;
  padding-left: 10px;
}

.imagegrid_type {
  width: 100px;
}

.imagegrid_bottom {
  height: 87%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
}

.imagegrid_search{
  padding-left: 5px;
}
</style>
