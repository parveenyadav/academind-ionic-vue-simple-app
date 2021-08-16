<template>
    <base-layout 
    page-title="Add a Memory" 
    page-default-back-link="/memories" >
        <create-memeory-form @save-memory="saveMemory"></create-memeory-form>
    </base-layout>
</template>

<script>
import CreateMemeoryForm from './../components/memories/CreateMemoryForm.vue'
export default {
    components:{
        CreateMemeoryForm
    },
    methods:{
        saveMemory(memoryData){
            this.$store.dispatch('addMemory', memoryData);
            this.$router.replace('/memories');
        }
    }
}
</script>