<template>
    <transition name="slide-fade" appear>
        <div class="flex items-center" :style="{ transitionDelay: delay+'ms'}" >
            <q-icon :name="icon" :color="color" :size="size" class="q-mr-sm"  />
            <div :class="textColor">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>
<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class IconText extends Vue{
    @Prop({ default: undefined, type: String | undefined | null }) icon;
    @Prop({ default: undefined, type: String | undefined | null }) color;
    @Prop({ default: undefined, type: Number | undefined | null }) size;
    @Prop({ default: 0, type: Number | undefined | null }) delay;

    get textColor(){
        return this.color ? `text-${this.color}`:"";
    }
}
</script>

<style scoped>
div.flex{
    display: flex;
    line-height: 21px;
}
</style>