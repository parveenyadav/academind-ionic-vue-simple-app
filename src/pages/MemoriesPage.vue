<template>
   

            <base-layout page-title="All Memories">
            <ion-list>
                <ion-item router-link="/memories/1">A trip to Himalays</ion-item>
                <ion-item>Rafting in Ganaga</ion-item>
                <ion-item>Beautiful north east</ion-item>
                <ion-item>Historical South</ion-item>
            </ion-list>
            </base-layout>
        
</template>
<script>

import {IonList, IonItem} from '@ionic/vue';
import BaseLayout from '@/components/base/BaseLayout.vue';
export default {
    components:{
        IonList, IonItem,
        BaseLayout
    }
}
</script>
