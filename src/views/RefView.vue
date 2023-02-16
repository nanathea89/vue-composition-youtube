<template>
  <div>
    <h3>Ref Sample</h3>
    <div class="msg">
      Message : {{ msg }}<br/>
      <button @click="changeMsg">Change</button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const msg = ref('hello');
  const changeMsg = () => {
    msg.value  = 'pesan berubaha'
    console.log(msg)
  }

</script>

<style lang="scss" scoped>

</style>