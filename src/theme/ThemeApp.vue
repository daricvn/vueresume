<template>
    <div id="app">
        <slot></slot>
    </div>
</template>
<style>
    body{
        --theme-color: rgb(100,14,22);
        --theme-light-color: rgb(150,18,15);
        --theme-inverse-color: white;
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
</style>

<script>
import { Vue, Component } from 'vue-property-decorator'


@Component
export default class ThemeApp extends Vue{

}
</script>