<template>
    <div class="info-board" ref="board">
        <div class="avatar center" v-if="candidate.avatar"></div>
        <div class="row q-pt-lg" v-if="!candidate.avatar"></div>
        <div class="block text-center white--text">
            <h6>{{ candidate.name }}</h6>
        </div>
        <div class="row" style="margin-top: 10px" v-if="!!candidate.socialNetworks">
            <div class="row">
                <div class="col-5 white--text text-right q-pr-sm text-weight-bold q-pt-sm">{{ string['address'] }}</div>
                <div class="col-7 q-pl-sm small-border q-pt-sm">
                    <div class="white--text" v-for="(address, index) in candidate.addressLines" :key="index">
                        {{ address }}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-5 white--text text-right q-pr-sm text-weight-bold q-pt-md">{{ string['phone'] }}</div>
                <div class="col-7 q-pl-sm small-border white--text q-pt-md">
                    {{ candidate.phone }}
                </div>
            </div>
            <div class="row">
                <div class="col-5 white--text text-right q-pr-sm text-weight-bold q-pt-md">{{ string['email'] }}</div>
                <div class="col-7 q-pl-sm small-border white--text q-pt-md">
                    <flex-link :link="candidate.email" />
                </div>
            </div>
            <div class="row" v-if="candidate.socialNetworks">
                <div class="col-5 white--text  q-pr-sm text-right text-weight-bold  q-pt-md">{{ string['socialNetworks'] }}</div>
                <div class="col-7 q-pl-sm small-border q-pt-md">
                    <div class="row" v-for="(item, index) in candidate.socialNetworks" :key="index">
                        <flex-link :link="item" />
                    </div>
                </div>
            </div>
            <div class="row" v-if="candidate.otherLinks">
                <div class="col-5 white--text  q-pr-sm text-right text-weight-bold  q-pt-md">{{ string['otherLinks'] }}</div>
                <div class="col-7 q-pl-sm small-border q-pt-md">
                    <div class="row" v-for="(item, index) in candidate.otherLinks" :key="index">
                        <flex-link :link="item" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row q-pt-lg" style="margin-top: 55px">
            <div v-for="(skill,index) in skills" :key="index" class="row">
                <div class="col-3 text-right line-height white--text">
                    <flex-content  
                    :content="skill"
                    :initialDelay="400"
                    :index="index" ></flex-content>
                </div>
                <div class="col-9 q-pr-sm q-pt-sm q-pl-sm">
                    <flex-content 
                    v-for="(item, i) in skill.child" :key="i"
                    :content="item"
                    :initialDelay="500"
                    :index="i" ></flex-content>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h6{
    font-weight: bold;
}
.row{
    width: 100%;
}
.small-border{
    border-left: 1px solid white;
}
.line-height{
    line-height: 24px;
}
    div.info-board{
        min-width: 220px;
        flex-basis: 280px;
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
import { Skills } from '../data/Skill';
import Language from '../resources/LanguageService';
import FlexContent from './sub/FlexContent.vue';
import FlexLink from './sub/FlexLink.vue';

@Component({
    components:{
        FlexContent,
        FlexLink
    }
}
)
export default class InfoBoard extends Vue{
    candidate = MyContact;
    string= Language;
    skills= Skills;
    mounted() {
        setTimeout(()=>{
            this.$refs.board.className += " show";
        },0);
    }
}
</script>