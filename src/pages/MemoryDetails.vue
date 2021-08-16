<template>
    <base-layout :key="loadedMemory ? loadedMemory.title: 'Loading'" page-default-back-link="/memories">
        <h2 v-if="!loadedMemory">Could not load memory</h2>
        <memory-over-view 
            :title="loadedMemory.title" 
            :description="loadedMemory.description"
            :image="loadedMemory.image"/>
    </base-layout>
</template>
<script>
import MemoryOverView from './../components/memories/MemoryOverview.vue'
export default {
    components:{
        MemoryOverView
    },
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