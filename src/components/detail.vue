<template>
<div class="detail">
    <stuff class="stuff" v-if="detail.hasStuff" :stuff="detail.stuff"></stuff>
    <scroll class="scroll" :class="scrollHeight" :data="isRead">
        <div>
            <div class="note">{{detail.note}}</div>
            <div class="question">{{detail.title}}</div>
            <div class="options">
                <dl v-for="option in detail.options" :class="{'active': option.op_key === detail.reply}" @click="chooseReply(detail.order, option.op_key)">
                    <dt>{{option.op_key}}</dt>
                    <dd>{{option.op_content}}</dd>
                </dl>
            </div>
        </div>
    </scroll>
</div>
</template>

<script>
import Scroll from '@/basic/scroll';
import Stuff from '@/components/stuff';
import {mapGetters, mapMutations} from 'vuex';
import {cloneDeep} from '@/assets/js/utils';

export default {
    components: {Scroll, Stuff},
    props: {
        detail: {
            type: Object,
            default: null
        }
    },
    computed: {
        ...mapGetters(['paper', 'length', 'view', 'choose', 'isRead']),
        scrollHeight() {
            return this.detail.hasStuff ? this.isRead ? 'isRead' : 'hasStuff' : '';
        }
    },
    methods: {
        ...mapMutations({
            setPaper: 'SET_PAPER',
            setView: 'SET_VIEW',
            setChoose: 'SET_STATUS_CHOOSE'
        }),
        chooseReply(order, reply) {
            this.setChoose(false);
            let paper = this.paper;
            let views = this.view;
            let subject = cloneDeep(paper.find(i => i.order === order));
            let paperIndex = paper.findIndex(i => i.order === order);
            let viewsIndex = views.findIndex(i => i.order === order);
            subject.reply = reply;
            paper[paperIndex] = subject;
            views[viewsIndex] = subject;
            this.$emit('choose', order, reply);
        },
    },
    watch: {
        detail(detail) {
            // console.log(detail);
        }
    }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
@import '../assets/sass/util/variables';
@import '../assets/sass/util/mixins';

.detail {
    .note {
        padding: 4vw;
        background-color: #eeeff2;
        font-weight: 300;
        line-height: 1.3125;
        color: #919298;
        @include box-sizing(border-box);
    }
    .question {
        padding: 4vw 4vw 6vw;
        font-size: 4.2667vw;
        line-height: 1.3125;
        color: #131313;
    }
    .scroll {
        position: relative;
        height: calc(100vh - 10.7794vh);
        overflow: hidden;
        &.hasStuff {
            height: calc(100vh - 10.7794vh - 30.9618vh);
        }
        &.isRead {
            height: calc(100vh - 10.7794vh - 75.2072vh);
        }
    }
    .options {
        padding: 4vw;
        dl {
            display: -webkit-flex;
            display: flex;
            -webkit-align-items: flex-start;
            align-items: flex-start;
            margin-bottom: 7.3333vw;
            font-size: 4vw;
            line-height: 1.2;
            color: #5a626b;
            dt {
                width: 8vw;
                height: 8vw;
                margin-right: 5.0667vw;
                border: 1px solid $color-blue;
                font-size: 4vw;
                line-height: calc(8vw - 2px);
                color: #5a626b;
                text-align: center;
                @include border-radius(50%);
                @include box-sizing(border-box);
            }
            dd {
                -webkit-flex: 1;
                flex: 1;
                margin: 2vw 0;
            }
            &.active {
                dt {
                    background-color: $color-blue;
                    color: #fff;
                }
            }
        }
    }
}
</style>
