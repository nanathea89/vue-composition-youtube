<template>
  <div>
    <h3>Reactive Sample</h3>
    nik : {{ nik }}<br/>
    nama : {{ nama }}<br/>
    <button @click="changeName">Change</button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup () {
    const state = reactive({
      count: 0,
      nik: 124,
      nama: 'Nana'
    })

    const changeName = () => {
      alert('ok')
      console.log(state)
      state.nama = 'Sopur'
      console.log(state)
    }
  
    return {
      ...toRefs(state),
      changeName
    }
  }
}
</script>

<style lang="scss" scoped>

</style>