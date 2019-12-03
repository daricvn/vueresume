<template>
    <div style="display: block; width: 92%; max-width: 780px; margin-top: 10px;">
        <div class="title-text"><slot></slot>
            <transition-group name="slide-fade" appear>
                <span v-for="(word, index) in words" :key="index" :style="{ 'transitionDelay': (initialDelay+defaultDelay+50*(index+1))+'ms' }">{{word}}</span>
            </transition-group>
        </div>
        <transition name="length-right" appear>
            <div class="h-line" :style="{ 'transitionDelay': initialDelay+'ms'}"></div>
        </transition>
    </div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class TitleBar extends Vue{
    @Prop(String) words;
    @Prop({default: 0, type: Number}) initialDelay;

    defaultDelay= 200;
    visible= false;

    mounted() {
        this.visible=true;
    }
}
</script>

<style scoped>
    .title-text{
        color: var(--theme-light-color);
        margin-bottom: 3px;
        font-weight: bold;
        font-size: 14pt;
        cursor: default;
        user-select: none;
    }

    .slide-fade-enter-active {
        display: inline-block;
        transition: all .4s ease;
    }
    .slide-fade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter
    /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(40px) scale(1.8);
        opacity: 0;
    }
    .slide-fade-enter-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(0px) scale(1);
        opacity: 1;
    }
</style>