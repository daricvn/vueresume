<template>
    <div id="app">
        <slot></slot>
    </div>
</template>
<style>
    body{
        --theme-color: rgb(100,14,22);
        --theme-light-color: rgb(150,18,15);
        --theme-light-acolor: rgba(150,18,15,0.3);
        --theme-inverse-color: white;
        --theme-text-color: black;
        overflow-x: hidden;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
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
</style>

<script>
import { Vue, Component } from 'vue-property-decorator'


@Component
export default class ThemeApp extends Vue{

}
</script>