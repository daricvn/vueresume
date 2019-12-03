<template>
    <div class="side-block">
        <div class="inline-content" v-if="showContent">
            <title-bar v-for="history in historyData" :key="history.id" :words="history.title" :initialDelay="(history.id-1)*1500"></title-bar>
        </div>
    </div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import TitleBar from './TitleBar.vue'
import { MyHistory } from '../data/History';

@Component({
    components:{
        TitleBar
    }
}
)
export default class Content extends Vue{
    historyData = MyHistory;


    @Prop({ default: false, type: Boolean}) showContent ;
    mounted() {
    }
}
</script>

<style>
  .side-block{
    display: inline-block;
    width: 100%;
    padding-left: 10px;
    margin: auto;
  }
</style>