<template>
  <div>
    <h4>Sample Watch Effect</h4>
    Nilai : {{ nilai }}<br/>
    <button @click="add">Add</button>
    <hr/>
    <h4>sample Watch</h4>
    nilai 2 : {{ nilai2 }}<br/>
    <button @click="change">Change</button>
    <h4>sample Watch Object</h4>
    nilai UAS : {{ state.nilaiUas }}<br/>
    <button @click="changeState">Change</button>
    <hr/>
    <h4>Sample Watch multiple state</h4>
    Angka 1 : {{ angka1 }} <br/>
    Angka 2 : {{ angka2 }}<br/>
    <button @click="watchMultiple">Change</button>
  </div>
</template>

<script setup>
import { reactive, ref, watch, watchEffect } from 'vue'
const nilai = ref(0)
const add = () => {
  nilai.value += Math.random()
}

const nilai2 = ref(0)

const state = reactive({
  nilaiUas : 0
})

const angka1 = ref(0)
const angka2 = ref(0)

const changeState = () => {
  state.nilaiUas +=3
}
const change = () => {
  nilai2.value += 3
}

const watchMultiple = () => {
  angka1.value += 3
  angka2.value +=2
}

watchEffect(() => {
  console.log(nilai.value)
},{
  onTrigger(e){
    console.log('onTrack : ', e)
  }
})

//watch state jenis object
watch(()=> state.nilaiUas,(current,before) =>{
  console.log('nilai uas : ' + state.nilaiUas)
  console.log('current : ' + current)
  console.log('before : ' + before)
})

//watch state selain object
watch(nilai2,(before,after)=>{
  console.log('nilai 2: ' + nilai2.value)
  console.log('before : ' + before)
  console.log('after : '+ after)
  if(before === 6){
    console.log('annda lulus')
  }
})

//watch state multiple
watch([angka1, angka2],(current,before) => {
  console.log('angka 1: ' + angka1.value)
  console.log('angka 2: ' + angka2.value)
})

</script>

<style lang="scss" scoped>

</style>