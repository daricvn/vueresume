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
    <div v-else-if="content.type==contentType.Timeline">
        <timeline :content="content" :delay="(initialDelay+index*120)" />
    </div>
    <div v-else-if="content.type==contentType.Text">
      <delayed-text :delay="(initialDelay+index*120)">{{ content.data }}</delayed-text>
    </div>
    <div v-else-if="content.type==contentType.Bar">
      <delayed-bar :color="content.color" :bg-color="content.bgColor" :title="content.data" :width="content.length" :delay="(initialDelay+index*120)"></delayed-bar>
    </div>
    <div v-else-if="content.type==contentType.Title">
      <delayed-text :delay="(initialDelay+index*120)">
        <h6 class="q-mb-none" :class="content.color">
        {{ content.data }}
        <span class="text-overline" v-if="!!content.length">- {{ content.length }}</span>
        </h6>
      </delayed-text>
    </div>
    <div v-else-if="content.type==contentType.Line">
      <delayed-text :delay="(initialDelay+index*120)">
        <q-separator style="width: 85%" />
      </delayed-text>
    </div>
    <div v-else-if="content.type==contentType.ChipList && !!content.child">
      <delayed-text :delay="(initialDelay+index*60)">
        <q-chip 
          v-for="(item, i) in content.child" :key="i"
          :icon="item.icon ? item.icon : undefined"
          :color="item.color?item.color:undefined"
          :outline="item.style=='outline'"
          :size="item.length ? item.length: undefined"
          :text-color="item.desc ? item.desc:undefined"
          :class="item.style"
          :style="{ transitionDelay: (initialDelay+i*100)}">{{ item.data }}</q-chip>
      </delayed-text>
    </div>
    <div v-else-if="content.type==contentType.Chip">
      <delayed-text :delay="(initialDelay+index*60)">
        <q-chip :icon="content.icon ? content.icon : undefined"
          :color="content.color?content.color:undefined"
          :outline="content.style=='outline'"
          :size="content.length ? content.length: undefined"
          :text-color="content.desc ? content.desc:undefined"
          :class="content.style">{{ content.data }}</q-chip>
      </delayed-text>
    </div>
    <div v-if="content.type!=contentType.ChipList && !content.skipChild && !!content.child && content.child.length>0">
      <flex-content
        v-for="(item, index) in content.child"
        :key="index"
        :content="item"
        :initialDelay="initialDelay+100+100*index"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import ResumeContent, { ContentType } from "../../models/ResumeContent";
import DelayedText from "./DelayedText.vue";
import DelayedBar from "./DelayedBar.vue";
import Column from "./Column.vue";
import Timeline from './Timeline.vue';

@Component({
  components: {
    DelayedText,
    DelayedBar,
    Column,
    Timeline
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
div.bar-container{
  width:100%;
}
</style>