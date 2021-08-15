<template>
    <base-layout :key="loadedMemory ? loadedMemory.title: 'Loading'" page-default-back-link="/memories">
        <h2 v-if="!loadedMemory">Could not load memory</h2>
        <h2 v-else>Loaded</h2>
    </base-layout>
</template>
<script>
export default {
    
    data(){
        return{
            memoryId: this.$route.params.id
        }
    },
    computed :{
        loadedMemory(){
            return this.$store.getters.memory(this.memoryId)
        }
    },
   /*  watch:{
        $route(currentRoute){
            this.memoryId=currentRoute.params.id;
        }
    } */
}
</script>