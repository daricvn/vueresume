<template>
    <div class="info-board" ref="board">
        <div class="avatar center"></div>
        <div class="block text-center white--text">
            <h6>{{ candidate }}</h6>
        </div>
    </div>
</template>

<style scoped>
    div.info-board{
        height: 720px;
        flex-basis: 300px;
        float: left;
        padding: 10px 5px 10px 10px;
        background: linear-gradient(to top right, var(--theme-color),var(--theme-light-color));
        transition: ease 1s all;
        transform:rotateY(-220deg) translate3d(0,0px,130px);
        opacity: 0.2;
        position: relative;
        perspective: 0px;
    }
    div.info-board.show{
        transform:rotate3d(0,1,0, 0deg) translate3d(0,0,0);
        opacity: 1;
    }

    .avatar{
        height: 150px;
        width: 65%;
        border: 4px solid var(--theme-inverse-color);
        background: black;
        margin-top: 20px;
    }
</style>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class InfoBoard extends Vue{
    candidate = "Darick Nguyen";

    mounted() {
        setTimeout(()=>{
            this.$refs.board.className += " show";
        },0);
    }
}
</script>