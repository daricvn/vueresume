<template>
  <div style="display: flex; margin-top: 5px; margin-bottom: 10px;">
    <transition name="slide-fade" appear>
      <div :style="{ 'transition-delay': delay +'ms' }" class="bar-title">Content</div>
    </transition>
    <transition name="length-right" appear @after-enter="inlineBar=true">
      <div
        :style="{ 'transition-delay': (100+delay) +'ms' }"
        class="bar"
        style="transition-duration: 0.4s"
      >
        <div class="bar-block" :style="{ 'width': barWidth }">
          <transition name="length-right">
            <div class="active-bar" v-if="inlineBar"></div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
div.bar-title{
    padding-right: 10px;
}
div.bar-block {
  height: 6px;
  display: block;
  position: relative;
}
div.bar {
  display: block;
  position: relative;
  background: var(--theme-light-acolor);
  height: 8px;
  width: 100%;
  margin: 4px 0px 4px 0px;
}
div.bar .active-bar {
  display: block;
  height: 8px;
  background: var(--theme-light-color);
}
div.top-margin {
  margin-top: 5px;
}
.slide-fade-enter-active {
  transition: all 0.4s ease-in-out;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter
    /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-60px);
  opacity: 0;
}
.slide-fade-enter-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(0);
  opacity: 1;
}

</style>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class DelayedBar extends Vue {
  @Prop({ default: 0, type: Number }) delay;
  @Prop({ default: 0, type: Number | String }) width;
  inlineBar = false;

  get barWidth() {
    if (!!this.width && isNaN(this.width)) {
      console.log(this.width);
      return this.width;
    }
    return this.width + "%";
  }
}
</script>