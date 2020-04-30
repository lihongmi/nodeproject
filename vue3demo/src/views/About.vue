<template>
  <div class="about">
    <h1 @click="inc">This is an about page</h1>
    <div>{{count}}</div>
    <input type="button" value="+" @click="inc"/>
  </div>
</template>
<script>
import{computed} from 'vue'
import{useStore} from 'vuex'
export default {
  setup(){
    let store=useStore();
    let count=computed(()=>store.state.count);
    let inc=()=>{
      store.commit('inc')
    }
    return {count,inc}
  }
}
</script>
