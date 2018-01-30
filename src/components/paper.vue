<template>
<transition name="paper">
    <div class="paper" v-if="viewPaper" @click.stop.prevent="hidePaper">
        <div class="paperHead">
            <div class="title">雅思能力测评</div>
            <div class="remaining"></div>
        </div>
        <scroll class="paperBody" ref="scroll">
            <div>
                <div class="part" v-for="part in parts">
                    <div class="name">{{part.part.name}}</div>
                    <div class="subjects">
                        <span v-for="subject in part.subjects" @click="getQuizzes(subject)">{{subject.order}}</span>
                    </div>
                </div>
            </div>
        </scroll>
    </div>
</transition>
</template>

<script>
import Scroll from '@/basic/scroll';
import {mapGetters, mapMutations} from 'vuex';

export default {
    components: {Scroll},
    computed: {
        ...mapGetters(['parts', 'remaining', 'isAssignment', 'viewPaper'])
    },
    methods: {
        ...mapMutations({
            setViewPaper: 'SET_STATUS_VIEW_PAPER'
        }),
        getQuizzes(subject) {

        },
        hidePaper() {
            this.setViewPaper(false);
        }
    }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
@import '../assets/sass/util/variables';
@import '../assets/sass/util/mixins';

.paper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 500;
    background: #ffffff;
    .paperHead {
        height: 10vh;
        padding: 4vw;
        text-align: center;
        box-sizing: border-box;
        .title {
            float: left;
            font-size: 4.2667vw;
        }
        .remaining {
            float: right;
            padding-left: 6.6667vw;
            background-position: 0 50%;
            font-size: 3.7333vw;
            color: #5a5a5a;
            background-size: auto 4vw;
        }
    }
    .paperBody {
        position: relative;
        height: 80vh;
        overflow: hidden;
        @include box-sizing(border-box);
        .part {
            padding: 0 4vw;
            font-size: 3.7333vw;
            .name {
                margin-top: 9.0667vw;
                color: #a4a5ac;
            }
            .subjects {
                span {
                    display: inline-block;
                    width: 9.0667vw;
                    height: 9.0667vw;
                    margin: 2.9333vw 5.44vw;
                    line-height: 9.0667vw;
                    border: 1px solid #e4e4e4;
                    font-weight: 300;
                    text-align: center;
                    color: #4c9cff;
                    @include border-radius(50%);
                    &:nth-child(5n + 1) {
                        margin-left: 0;
                    }
                    &:nth-child(5n + 5) {
                        margin-right: 0;
                    }
                    &.active {
                        background-color: #4c9cff;
                        border: 1px solid #4c9cff;
                        color: #fff;
                    }
                    &.error {
                        background-color: #f34e4e;
                        border: 1px solid #f34e4e;
                        color: #fff;
                    }
                }
            }
            &:first-child .name {
                margin-top: 0;
            }
        }
    }
    &.paper-enter-active, &.paper-leave-active {
        @include transition(all 0.4s);
    }
    &.paper-enter, &.paper-leave-to {
        opacity: 0;
    }
}
</style>
