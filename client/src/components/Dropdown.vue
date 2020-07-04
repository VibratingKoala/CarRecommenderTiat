<template>
  <div class="dropdown_main">
    <label for="dropdown">{{quesTitle}}</label>
    <select v-model="selectedOption" @change="$emit('update:selectedOption',selectedOption)" >
      <option v-for="option in options" v-bind:key="option" :value="option">{{option}}</option>
    </select>
    Selected: {{selectedOption}}
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    quesTitle: { type: String, default: 'test' },
    options: { type: Array, default: ['None' ] },
    selectedOption: { type: String, default: 'None' },
  },
  methods: {
  },
};
</script>

<style>
.dropdown_main {
  height: 90px;
  width: 100%;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  border: solid thin black;
  padding: 5px 5px 5px 5px;
}


</style>
