<template>
  <div class="bordered centered">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <label for="lvl1-text">Insert text in Level 3 component</label><br/>
    <input
       ref="lvl1Input"
       type="text"
       name="level1-txt"
       value=""
       placeholder="Write level 3 text here."
    ><br/>
    <button
      @click.prevent="setText1"
    >Submit</button>
    <br/><br/>
    <div>
      TEXT HERE
    </div>
    <Level2 />
  </div>
</template>

<script>
import Level2 from '@/components/Level2.vue'
import {computed} from 'vue';

export default {
  name: 'App',
  components: {
    Level2
  },
  data() {
    return {
      text1: undefined
    }
  },
  methods: {
    setText1() {
      this.text1 = this.$refs.lvl1Input.value
    }
  },
  provide() {
    return {
      text1: computed(() => this.text1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.bordered {
  border: 1px solid black;
  padding: 2rem;
  width: 60%;
}

.centered {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.margined {
  margin: 2rem;
}
</style>
