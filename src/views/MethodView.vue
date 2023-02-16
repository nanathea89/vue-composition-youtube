<template>
  <div>
    count : {{ count }}
    <button @click="add">Add</button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup () {
    const state = reactive({
      count: 0,
    })
    const add = () => {
      state.count++
    }
  
    return {
      ...toRefs(state),
      add
    }
  }
}
</script>

<style lang="scss" scoped>

</style>