<template>
  <ThemeApp>
    <InfoBoard />
    <Content :showContent="showContent" />
  </ThemeApp>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InfoBoard from './components/InfoBoard.vue';
import ThemeApp from './theme/ThemeApp.vue';
import Content from './components/Content.vue';

@Component({
  components: {
    ThemeApp,
    InfoBoard,
    Content
  },
})
export default class App extends Vue {
  showContent=false;
  mounted() {
    setTimeout(()=>{ this.showContent=true },1000);
  }
}
</script>

<style>
</style>
