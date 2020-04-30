<template>
  <div class="hello">
    <h1 ref="root">{{ msg }}</h1>
    {{state.count}} double is{{double}}
    <input type="button" value="+" @click="inc"/>
  </div>
</template>

<script>
import { ref,reactive,computed,watch,onMounted} from "vue";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    const state=reactive({
      count:1
    });
    let double=computed(()=>state.count*2)
    let inc=()=>{
      state.count++;
    }

    const root=ref(null)
    onMounted(()=>{
      let dom=root.value;
      dom.style.color='red';
    });

    watch(()=>state.count,value=>{
      console.log('count is change')
    });

    return{state,double,root,inc}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

a {
  color: #42b983;
}
</style>
