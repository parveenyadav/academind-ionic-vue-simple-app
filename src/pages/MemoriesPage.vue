<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>All Memories</ion-title>
            </ion-toolbar>
            
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item>List item 1</ion-item>
                <ion-item>List item 2</ion-item>
                <ion-item>List item 3</ion-item>
                <ion-item>List item 4</ion-item>
            </ion-list>
            
        </ion-content>
    </ion-page>
</template>
<script>

import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonList, IonItem} from '@ionic/vue';
export default {
    components:{
        IonPage, IonHeader,IonToolbar, IonTitle, IonContent, IonList, IonItem
    }
}
</script>
