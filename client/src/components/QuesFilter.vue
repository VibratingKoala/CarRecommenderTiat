<template>
  <div class="filter_main">
    <div class="filter_title">Filter</div>
    <div class="filter_bottom">
      <Dropdown :quesTitle="ques1" :options="ques1options" :selectedOption.sync="ans1"/>
      <Dropdown :quesTitle="ques2" :options="ques2options" :selectedOption.sync="ans2"/>
      <Dropdown :quesTitle="ques3" :options="ques3options" :selectedOption.sync="ans3"/>
      <Dropdown :quesTitle="ques4" :options="ques4options" :selectedOption.sync="ans4"/>
      <button v-on:click="resetButton" >Reset</button>
    </div>
  </div>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue';

export default {
  name: 'QuesFilter',
  components: {
    Dropdown,
  },
  props: {
    ques1: { type: String, default: 'Preferred length of car' },
    ques1options: { type: Array, default: function () { return ['None','Short','Medium','Long']; } },
    ans1: { type: String, default: 'None' },

    ques2: { type: String, default: 'Preferred Height of car' },
    ques2options: { type: Array, default: function () { return ['None', 'Low', 'Medium', 'Tall']; } },
    ans2: { type: String, default: 'None' },

    ques3: { type: String, default: 'Preferred number of seats' },
    ques3options: { type: Array, default: function () { return ['None', '2', '5', '7']; } },
    ans3: { type: String, default: 'None' },

    ques4: { type: String, default: 'Preferred number of doors' },
    ques4options: { type: Array, default: function () { return ['None', '2', '4', '5']; } },
    ans4: { type: String, default: 'None' },

    allAns: { type: Array, default: function () { return ['None','None','None']; } },
    carChange: { type: String, default: 'None' },
  },
  methods: {
    resetButton: function () {
      this.ans1 = 'None';
      this.ans2 = 'None';
      this.ans3 = 'None';
      this.ans4 = 'None';
    },
    filterAns () {
      // Rule1
      if (this.ans1 == 'Short') {
        this.ans2 = 'Medium';
        this.ans3 = '5';
        this.ans4 = '5';
      }
      // Rule3
      if (this.ans4 == '2') {
        this.ans1 = 'Medium';
        this.ans2 = 'Low';
        this.ans3 = '2';
      }
      // Rule4
      if (this.ans1 == 'Medium') {
        this.ans2 = 'Low';
        this.ans3 = '2';
        this.ans4 = '2';
      }
      // Rule5
      if (this.ans3 == '2') {
        this.ans1 = 'Medium';
        this.ans2 = 'Low';
        this.ans4 = '2';
      }
      // Rule7
      if (this.ans2 == 'Tall') {
        this.ans1 = 'Long';
        this.ans3 = '7';
        this.ans4 = '5';
      }
      // Rule8
      if (this.ans3 == '7') {
        this.ans1 = 'Long';
        this.ans2 = 'Tall';
        this.ans4 = '5';
      }
      // Rule10
      if (this.ans4 == '4') {
        this.ans1 = 'Long';
        this.ans2 = 'Low';
        this.ans3 = '5';
      }
      // Rule11
      if (this.ans1 == 'Long' && this.ans2 == 'Low') {
        this.ans3 = '5';
        this.ans4 = '4';
      }
      // Rule12
      if (this.ans2 == 'Low' && this.ans3 == '5') {
        this.ans1 = 'Long';
        this.ans4 = '4';
      }
      // Rule14
      if (this.ans1 == 'Long' && this.ans2 == 'Medium') {
        this.ans3 = '5';
        this.ans4 = '5';
      }
    },
    updateAns() {
      this.filterAns();
      this.allAns = [this.ans1,this.ans2,this.ans3,this.ans4];
      this.$emit('selectedAnsFilter',this.allAns);
    },
  },
  mounted: function() {
  },
  watch: {
    ans1: function () {
      this.updateAns();
    },
    ans2: function () {
      this.updateAns();
    },
    ans3: function () {
      this.updateAns();
    },
    ans4: function () {
      this.updateAns();
    },
    carChange: function () {
      if (this.carChange == 'Hatch') {
        this.ans1 = 'Short';
        this.ans2 = 'Medium';
        this.ans3 = '5';
        this.ans4 = '5';
      }
      if (this.carChange == 'Sports') {
        this.ans1 = 'Long';
        this.ans2 = 'Low';
        this.ans3 = '2';
        this.ans4 = '2';
      }
      if (this.carChange == 'Sedan') {
        this.ans1 = 'Long';
        this.ans2 = 'Low';
        this.ans3 = '5';
        this.ans4 = '4';
      }
      if (this.carChange == 'SUV') {
        this.ans1 = 'Long';
        this.ans2 = 'Medium';
        this.ans3 = '5';
        this.ans4 = '5';
      }
      if (this.carChange == 'MPV') {
        this.ans1 = 'Long';
        this.ans2 = 'Tall';
        this.ans3 = '7';
        this.ans4 = '5';
      }
      if (this.carChange == 'All') {
        this.resetButton();
      }
    },
  },
};
</script>

<style>
.filter_main {
  height: 100%;
  width: 100%;
}

.filter_title {
  height: 30px;
  background-color: grey;
  color: white;
  text-align: center;
  padding-top: 5px;
}

.filter_bottom {
  background-color: lightgrey;
  height: 95.5%;
}

</style>
