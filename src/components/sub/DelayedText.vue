<template>
  <transition name="slide-fade" appear>
    <div :style="{ 'transition-delay': delay +'ms', 'padding-left':padLeft+'px' }" class="block theme-text" style="display: inline-block;">
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
</style>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class DelayedText extends Vue {
  @Prop({ default: 0, type: Number }) delay;
  @Prop({ default: 0, type: Number }) padLeft;
}
</script>