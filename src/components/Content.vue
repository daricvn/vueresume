<template>
    <div class="side-block">
        <div class="inline-content" v-if="showContent">
            <div v-for="history in historyData" :key="history.id">
                <title-bar :words="history.title" :initialDelay="(history.id-1)*1500"></title-bar>
                <div class="child-content">
                    <div v-for="(content, index) in history.contents" :key="index">
                        <!-- <div v-if="content.type==contentType.Text">
                            <delayed-text :delay="(800+(history.id-1)*1500+index*120)">{{ content.data }}</delayed-text>
                        </div>
                        <div v-else-if="content.type==contentType.Bar">
                            <delayed-bar :width="content.length" :delay="(800+(history.id-1)*1500+index*120)"></delayed-bar>
                        </div> -->
                        <flex-content :content="content"
                            :initialDelay="(800+(history.id-1)*1500)"
                            :index="index" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import TitleBar from './TitleBar.vue'
import { MyHistory } from '../data/History';
import { ContentType } from '../models/ResumeContent';
import DelayedText from './sub/DelayedText.vue';
import DelayedBar from './sub/DelayedBar.vue';
import FlexContent from './sub/FlexContent.vue';

@Component({
    components:{
        TitleBar,
        FlexContent
    }
}
)
export default class Content extends Vue{
    historyData = MyHistory;
    contentType= ContentType;
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
    padding-top: 10px;
    max-width: 800px;
  }
  .child-content{
      padding-left: 15px;
      padding-top: 5px;
      padding-bottom: 10px;
  }
</style>