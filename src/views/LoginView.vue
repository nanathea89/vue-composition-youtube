<template>
  <div class="container-fluid">
    <div class="card" width="500px">
      <div class="card-title bg-danger p-3"><h3>Login</h3></div>
      <div class="card-body">
<div class="row">
     <div class="col-10 ml-auto mr-auto">
       <div class="form-group">
         <input type="text" placeholder="User" class="form-control">
       </div>
       <div class="form-group">
         <input type="text" placeholder="Password" class="form-control">
       </div>
       <button class="btn btn-info" @click="login">Login</button>
     </div>
    </div>
      </div>
      <div class="card-footer">
        <div class="text-muted">PT. Global Loyalty Indonesia</div>
      </div>
    </div>

    
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter()

const login =() =>{
  localStorage.setItem('isAuth',true)
  router.push({name: 'dashboard'})
}

</script>

<style lang="scss" scoped>

</style>