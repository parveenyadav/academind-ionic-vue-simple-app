<template>
    <form class="ion-padding" @submit.prevent="submitForm">
        <ion-list>
            <ion-item>
                <ion-label position="floating">Title</ion-label>
                <ion-input type="text" required v-model="enteredTitle" />
            </ion-item>
            <ion-item>
                <ion-label position="floating">Image URL</ion-label>
                <ion-input type="url" required  v-model="enteredImageURL"/>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Description</ion-label>
                <ion-textarea rows="5"  v-model="enteredDescription"/>
            </ion-item>
                
        </ion-list>
        <ion-button expand="block" fill="outline" type="submit">save</ion-button>
        </form>
</template>

<script>
import {IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton} from '@ionic/vue'
export default {
    emits:['save-memory'],
    components:{
        IonList, IonItem, IonLabel, IonInput, IonTextarea,IonButton
    },
    data(){
        return {
            enteredTitle:'',
            enteredImageURL: '',
            enteredDescription: ''
        }
    },
    methods:{
        submitForm(){
            const memoryData ={
                title: this.enteredTitle,
                image: this.enteredImageURL,
                description: this.description
            };
            this.$emit('save-memory', memoryData);
        }
    }
}
</script>