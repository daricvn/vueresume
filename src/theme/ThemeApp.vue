<template>
    <div id="app">
        <slot></slot>
    </div>
</template>
<style>
    body{
        --theme-color: rgb(100,14,22);
        --q-color-primary:rgb(150,18,15);
        --theme-light-color: rgb(150,18,15);
        --theme-light-acolor: rgba(150,18,15,0.3);
        --theme-bar-color: rgb(43,160,255);
        --theme-bar-acolor: rgb(180,224,255);
        --theme-inverse-color: white;
        --theme-text-color: black;
        overflow-x: hidden;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        min-height: 100vh;
    }
    .center {
        margin-left: 49%;
        transform: translateX(-50%);
    }
    .block{
        display: block;
    }
    .full-width{
        width: 100%;
    }
    .text-center{
        text-align: center;
    }
    .white--text{
        color: var(--theme-inverse-color);
    }
    h6{
        font-size: 18pt;
        margin-top: 12px;
        margin-bottom: 18px;
    }
    .h-line{
        width: auto;
        display: block;
        border-bottom: 4px solid;
        border-color: var(--theme-light-color);
    }
    .theme-text{
        color: var(--theme-text-color);
    }

    
    .length-right-enter-active{
        transition: all 0.8s cubic-bezier(.52,.84,.72,1.25);
    }
    .length-right-enter{
        opacity: 0 !important;
        width: 0 !important;
    }
    .length-right-enter-to{
        opacity: 1;
        width: 100%;
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
import { Vue, Component } from 'vue-property-decorator'


@Component
export default class ThemeApp extends Vue{

}
</script>