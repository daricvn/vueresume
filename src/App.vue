<template>
  <q-layout>
    <ThemeApp>
      <InfoBoard />
      <Content :maxWidth="720" :padLeft="20" :showContent="showContent" />
    </ThemeApp>
  </q-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InfoBoard from './components/InfoBoard.vue';
import ThemeApp from './theme/ThemeApp.vue';
import Content from './components/Content.vue';
import { MyContact } from './data/MyContact';

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
    (document as any).title= `${MyContact.name}'s Resume`;
  }
}
</script>

<style>
</style>
