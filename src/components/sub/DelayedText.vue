<template>
  <transition name="slide-fade" appear>
    <div :style="{ 'transition-delay': delay +'ms' }" class="block theme-text" style="display: inline-block;">
      <slot></slot>
    </div>
  </transition>
</template>

<style scoped>
div.block {
  display: block;
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
  transform: translateX(60px);
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
export default class DelayedText extends Vue {
  @Prop({ default: 0, type: Number }) delay;
}
</script>