<template>
    <div class="info-board" ref="board">
        <div class="avatar center"></div>
        <div class="block text-center white--text">
            <h6>{{ candidate.name }}</h6>
        </div>
        <div class="row" style="margin-top: 10px" v-if="!!candidate.socialNetworks">
            <div class="col-4">{{ string['socialNetworks'] }}</div>
            <div class="col-8">
                <div class="row" v-for="(item, index) in candidate.socialNetworks" :key="index">
                    <q-icon :name="item.icon" v-if="!!item.icon" class="white--text" />
                    <a :href="item.ref">{{ !!item.alias ? item.alias : item.ref }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h6{
    font-weight: bold;
}
    div.info-board{
        min-width: 190px;
        flex-basis: 250px;
        float: left;
        padding: 10px 5px 10px 10px;
        background: linear-gradient(to top right, var(--theme-color),var(--theme-light-color));
        transition: ease 1s all;
        transform:rotateY(-90deg) scale(0.95) translate3d(0,0px,130px);
        opacity: 0.2;
        position: relative;
        perspective: 400px;
        perspective-origin: 100px;
    }
    div.info-board.show{
        transform:rotate3d(0,1,0, 0deg) scale(1) translate3d(0,0,0);
        opacity: 1;
    }

    .avatar{
        height: 150px;
        width: 160px;
        border: 4px solid var(--theme-inverse-color);
        background: black;
        margin-top: 20px;
        transition: all 0.4s cubic-bezier(0.95, 0.05, 0.795, 0.035);
    }

    @media screen and (max-width: 920px) {
        .avatar{
            height: 120px;
            width: 120px;
        }
    }
</style>

<script>
import { Vue, Component } from 'vue-property-decorator';
import { MyContact } from '../data/MyContact';
import { Language } from '../resources/LanguageService';

@Component
export default class InfoBoard extends Vue{
    candidate = MyContact;
    string= Language;
    mounted() {
        setTimeout(()=>{
            this.$refs.board.className += " show";
        },0);
    }
}
</script>