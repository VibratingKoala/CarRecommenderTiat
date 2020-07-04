<template>
  <div class="home">
    <div class="title">Car Recommendation System</div>
    <div class="content_main">
      <div class="content_window">
        <div class="content_left">
          <QuesFilter @selectedAnsFilter="ansSelect" :carChange="carsToDisplay"/>
        </div>
        <div class="content_right">
          <div class="right_top">
            <ImageGrid :carTypeSelected.sync="carsToDisplay"/>
          </div>
          <div class="right_bottom">
            <div class="rules_top">Rules Fired</div>
            <div class="rules_bottom">
              <textarea id="rulesBoxTextArea" :disabled=true v-model="text"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import QuesFilter from '@/components/QuesFilter.vue';
import ImageGrid from '@/components/ImageGrid.vue';

export default {
  name: 'Home',
  components: {
    QuesFilter, ImageGrid,
  },
  props: {
    text: { type: String, default: '' },
    allAnsHome: { type: Array, default: function () { return [] } },
    rulesFired: { type: Array, default: function () { return [] } },
    carsToDisplay: { type: String, default: 'All' },
  },
  methods: {
    ansSelect(e) {
      this.allAnsHome = e;
    },
    fireRules() {
      this.text = '';
      this.possibleCars = [];
      this.rulesFired = [];
      
      //Hatch
      if (this.allAnsHome[0] == 'Short') {
        this.rulesFired.push(1);
      }
      if (this.allAnsHome[0] == 'Short' && this.allAnsHome[1] == 'Medium' && this.allAnsHome[2] == '5' && this.allAnsHome[3] == '5') {
        this.rulesFired.push(2);
      }
      //Hatch

      //Sports
      if (this.allAnsHome[3] == '2') {
        this.rulesFired.push(3);
      }
      if (this.allAnsHome[0] == 'Medium') {
        this.rulesFired.push(4);
      }
      if (this.allAnsHome[2] == '2') {
        this.rulesFired.push(5);
      }
      if (this.allAnsHome[0] == 'Medium' && this.allAnsHome[1] == 'Low' && this.allAnsHome[2] == '2' && this.allAnsHome[3] == '2') {
        this.rulesFired.push(6);
      }
      //Sports

      //MPV
      if (this.allAnsHome[1] == 'Tall') {
        this.rulesFired.push(7);
      }
      if (this.allAnsHome[2] == '7') {
        this.rulesFired.push(8);
      }
      if (this.allAnsHome[0] == 'Long' && this.allAnsHome[1] == 'Tall' && this.allAnsHome[2] == '7' && this.allAnsHome[3] == '5') {
        this.rulesFired.push(9);
      }
      //MPV

      //Sedan
      if (this.allAnsHome[3] == '4') {
        this.rulesFired.push(10);
      }
      if (this.allAnsHome[0] == 'Long' && this.allAnsHome[1] == 'Low') {
        this.rulesFired.push(11);
      }
      if (this.allAnsHome[1] == 'Low' && this.allAnsHome[2] == '5' ) {
        this.rulesFired.push(12);
      }
      if (this.allAnsHome[0] == 'Long' && this.allAnsHome[1] == 'Low' && this.allAnsHome[2] == '5' && this.allAnsHome[3] == '4') {
        this.rulesFired.push(13);
      }
      //Sedan

      //SUV
      if (this.allAnsHome[0] == 'Long' && this.allAnsHome[1] == 'Medium' ) {
        this.rulesFired.push(14);
      }
      if (this.allAnsHome[0] == 'Long' && this.allAnsHome[1] == 'Medium' && this.allAnsHome[2] == '5' && this.allAnsHome[3] == '5') {
        this.rulesFired.push(15);
      }
      //SUV
      
      this.rulesFired.forEach((r) => { this.displayRules(r) })
    },
    displayRules(r) {
      switch (r) {
        case 1:
          this.text = this.text.concat('Rule_1: If length is short, then height is medium & number of seats is 5 & number of doors is 5 \n');
          break;
        case 2:
          this.text = this.text.concat('Rule_2: If length is short & height is medium & number of seats is 5 & number of doors is 5, then recommended car is hatch \n');
          this.carsToDisplay = 'Hatch';
          break;
        case 3:
          this.text = this.text.concat('Rule_3: If number of doors is 2, then length is medium & height is low & number of seats is 2 \n');
          break;
        case 4:
          this.text = this.text.concat('Rule_4: If length is medium, then height is low & number of seats is 2 & number of doors is 2 \n');
          break;
        case 5:
          this.text = this.text.concat('Rule_5: If number of seats is 2, then length is short & height is low & number of seats is 2 & number of doors is 2 \n');
          break;
        case 6:
          this.text = this.text.concat('Rule_6: If length is medium & height is low & number of seats is 2 & number of doors is 2, then recommended car is sports \n');
          this.carsToDisplay = 'Sports';
          break;
        case 7:
          this.text = this.text.concat('Rule_7: If height is tall, then length is long & number of seats is 7 & number of doors is 5 \n');
          break;
        case 8:
          this.text = this.text.concat('Rule_8: If number of seats is 7, then length is long & height is tall & number of doors is 5 \n');
          break;
        case 9:
          this.text = this.text.concat('Rule_9: If length is long & height is tall & number of seats is 7 & number of doors is 5, then recommended car is MPV \n');
          this.carsToDisplay = 'MPV';
          break;
        case 10:
          this.text = this.text.concat('Rule_10: If number of doors is 4, then length is long & height is low & number of seats is 5 \n');
          break;
        case 11:
          this.text = this.text.concat('Rule_11: If length is long & height is low, then number of seats is 5 & number of doors is 4 \n');
          break;
        case 12:
          this.text = this.text.concat('Rule_12: If height is low & number of seats is 5, then length is long & height is low \n');
          break;
        case 13:
          this.text = this.text.concat('Rule_13: If length is long & height is low & number of seats is 5 & number of doors is 4, then recommended car is sedan \n');
          this.carsToDisplay = 'Sedan';
          break;
        case 14:
          this.text = this.text.concat('Rule_14: If length is long & height is medium, then number of seats is 5 & number of doors is 5 \n');
          break;
        case 15:
          this.text = this.text.concat('Rule_15: If length is long & height is medium & number of seats is 5 & number of doors is 5, then recommended car is SUV \n');
          this.carsToDisplay = 'SUV';
          break;
      }
    },
  },
  watch: {
    allAnsHome: function () {
      this.fireRules();
    },
    text: function () {
      if (this.text == '') {
        this.carsToDisplay = 'All';
      }
    },
  },
  mounted: async function () {
  },
  
};
</script>

<style>

.home {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 30px;
  padding: 10px 10px 10px 30px;
  height: 10%;
  background-color: lightgray;
}

.content_main {
  height: 90%;
  padding: 20px;
}

.content_window {
  display: flex;
  border: solid thin grey;
}

.content_left {
  width: 30%;
}

.content_right {
  width: 70%;
}

.right_top {
  height: 70%;
}

.right_bottom {
  height: 30%;
  padding: 15px 10px 10px 10px;
  background-color: lightgrey;
}

.rules_top {
  height: 20%;
}

.rules_bottom {
  height: 80%;
}

#rulesBoxTextArea, .right_bottom, .right_top, .content_main, .title {
  width: 100%;
}

#rulesBoxTextArea, .content_right, .content_left, .content_window, .home {
  height: 100%;
}

</style>
