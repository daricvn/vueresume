<template>
  <div :style="styles">
    <div v-if="content.type==contentType.Column">
      <div v-if="!!content.child && content.child.length>0" class="flex-box">
        <column v-for="(item, index) in content.child"
            :key="index" :minWidth="200">
          <flex-content
            :content="item"
            :initialDelay="initialDelay+50*index"
            :index="index"
            :styles="{ paddingRight: '10px' }"
          />
        </column>
      </div>
    </div>
    <div v-else-if="!!content.child && content.child.length>0">
      <flex-content
        v-for="(item, index) in content.child"
        :key="index"
        :content="item"
        :initialDelay="initialDelay+50*index"
        :index="index"
      />
    </div>
    <div v-else-if="content.type==contentType.Text">
      <delayed-text :delay="(initialDelay+index*120)">{{ content.data }}</delayed-text>
    </div>
    <div v-else-if="content.type==contentType.Bar">
      <delayed-bar :title="content.data" :width="content.length" :delay="(initialDelay+index*120)"></delayed-bar>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import ResumeContent, { ContentType } from "../../models/ResumeContent";
import DelayedText from "./DelayedText.vue";
import DelayedBar from "./DelayedBar.vue";
import Column from "./Column.vue";

@Component({
  components: {
    DelayedText,
    DelayedBar,
    Column
  }
})
export default class FlexContent extends Vue {
  @Prop({ default: null, type: ResumeContent | undefined | null }) content;
  @Prop({ default: 0, type: Number }) index;
  @Prop({ default: 0, type: Number }) initialDelay;
  @Prop({ default: undefined }) styles; 
  contentType = ContentType;
}
</script>

<style scoped>
div.flex-box {
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
}
</style>