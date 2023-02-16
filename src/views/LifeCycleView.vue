<template>
  <div>
    <h4>Sample LifeCycle Hook</h4>
    result : {{ result }}
    <button @click="proses">Proses</button>
  </div>
</template>

<script setup>

//lifecycle yang sudah dhapus di vue 3, beforeCreate, created
// onBeforeMount = akan dijalankan sebelum component di render,
// onMounted = dijalankan setelah component di render, 
// onBeforeUnmount = dijalankan sebelum state di hancurkan/unmount, 
// onUnmounted = dijalankan setelah state di hancurkan/unmount,
// onBeforeUpdate = dijalankan ketika ada reactive data yang berubah sebelum di render ke template, 
// onUpdated = dijalankan ketika ada reactive state yng berubah dan sudah di render ke template, 
// onActivated = ketika keep-alive di aktifkan, 
// onDeactivated = ketika keep-alive di nonaktifkan, 
// onErrorCaptured = ketika ada error di childcomponent
import { ref, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onBeforeUpdate, onUpdated, onActivated, onDeactivated, onErrorCaptured } from 'vue'

onMounted(() => {
  console.log('data onmount')
})
onErrorCaptured((e) => {
  console.log('ada error ',e)
})

const result = ref(0)

const proses = () => {
  result.value = 3 /0
}
</script>

<style lang="scss" scoped>



</style>