<template>
  <a class="white--text" :href="link.ref" target="_blank">
    <q-icon :name="link.icon" v-if="!!link.icon" class="white--text q-mr-sm" size="18pt" />
    <span class="line-height">{{ !!link.alias ? link.alias : link.ref }}</span>
  </a>
</template>


<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import { Link } from '../../models/ResumeContact';

@Component
export default class FlexLink extends Vue {
    @Prop({ default: undefined, type: Link | undefined}) link;
}
</script>

<style scoped>
.line-height{
    line-height: 24px;
}
</style>