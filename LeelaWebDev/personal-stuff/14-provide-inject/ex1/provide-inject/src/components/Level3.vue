<template>
<div class="bordered centered margined">
  <label for="lvl3-text">Insert text in Level 1 component</label><br/>
  <input type="text" name="level3-txt" placeholder="Write level 1 text here"><br/>
  <button>Submit</button>
  <br/><br/>
  <div>
    {{ text1 }}
  </div>
</div>
</template>


<script>
export default {
  inject: ['text1']
}
</script>


<style>

</style>
