<template>
    <transition name="flip" appear>
        <q-timeline color="primary" v-if="!!content" transition-show="flip-down" :style="{ 'transition-delay': delay +'ms'}">
            <q-timeline-entry v-for="(item, index) in content.child" :key="index"
                :title="item.data"
                :subtitle="item.length"
                :icon="item.icon ? item.icon : undefined"
                :color="item.color ? item.color : undefined"
            >
                <div>
                {{ item.desc }}
                </div>
            </q-timeline-entry>
            <q-timeline-entry heading>
            </q-timeline-entry>
        </q-timeline>
    </transition>
</template>


<script>
import {Vue, Component, Prop} from 'vue-property-decorator'
import ResumeContent from '../../models/ResumeContent'

@Component
export default class Timeline extends Vue{
    @Prop({ default: undefined, type: ResumeContent | undefined }) content;
  @Prop({ default: 0, type: Number }) delay;
}
</script>

<style>
h6.q-timeline__title{
    margin-bottom: 4px !important;
    padding: 1px !important;
}
.q-timeline__content{
    padding-bottom: 12px !important;
}

.flip-enter-active {
  transition: all 0.4s ease-in-out;
}
.flip-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.flip-enter
    /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: rotateX(90deg);
  opacity: 0;
}
.flip-enter-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: rotateX(0);
  opacity: 1;
}
</style>