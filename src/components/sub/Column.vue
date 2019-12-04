<template>
    <div class="column" :style="{ 'minWidth': minWidth+'px' }">
        <slot></slot>
    </div>
</template>

<script>
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class Column extends Vue{
    @Prop({ default: 0, type: Number | undefined }) minWidth;
}
</script>

<style scoped>
    div.column{
        flex-grow: 1;
    }
</style>