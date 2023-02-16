<template>
  <div>
    nilai : {{ nilai }}<br/>
    num : {{ num }}<br/>
    result : {{ resultComp }}
    result 2 : {{ resultCompSetGet }}
    <button @click="add">Add</button>

  </div>
</template>

<script>
import { ref, reactive, computed, toRefs} from 'vue';
export default {
  setup () {
    
    const state = reactive({
      nilai: 1
    })

    const num = ref(1)

    const add = () => {
      resultCompSetGet.value =4
      state.nilai++
    }

    const resultComp = computed(() => num.value + state.nilai)
    const resultCompSetGet = computed({
      get:() => num.value + state.nilai,
      set:(val) => num.value = val
    })

    return {
      ...toRefs(state),
      num,
      resultComp,
      resultCompSetGet,
      add
    }
  }
}
</script>

<style lang="scss" scoped>

</style>