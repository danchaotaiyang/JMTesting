<template>
<transition name="quizzes">
    <div class="quizzes">
        <div class="head">
            <div class="introduce">
                <div class="title"><strong>{{partName[0]}}:</strong><span>{{partName[1]}}</span></div>
                <div class="viewPaper" @click="showPaper">
                    <span><icon name="dot-circle-o"></icon></span><span>答题卡</span>
                </div>
            </div>
            <div class="pagination"><strong>{{currentOrder}}</strong> / {{length}}</div>
            <!--<div class="hourglass"><icon name="clock-o"></icon>{{remaining || '&#45;&#45;'}}</div>-->
        </div>
        <views ref="views" @change="changeViews">
            <detail v-for="(detail, index) in view" :key="index" :detail="detail" @choose="saveReply"></detail>
        </views>
        <div class="gesture" v-if="!hasAnswer" @touchmove.stop.prevent="touchMove"></div>
        <div class="viewLock" v-show="!choose" @touchmove.stop.prevent="touchMove"></div>
        <paper></paper>
    </div>
</transition>
</template>

<script>
import Views from '@/components/views';
import Detail from '@/components/detail';
import Paper from '@/components/paper';
import Icon from 'vue-awesome/components/Icon';
import {mapGetters, mapMutations} from 'vuex';
import {difference, cloneDeep, isEmpty, getStorage, setStorage} from '@/assets/js/utils';
import 'vue-awesome/icons/clock-o';
import 'vue-awesome/icons/dot-circle-o';
import 'vue-awesome/icons/calendar-check-o';
import 'vue-awesome/icons/hourglass-start';

export default {
    data() {
        return {
            beginAnswer: false,
            keep: false
        };
    },
    components: {Views, Detail, Paper, Icon},
    computed: {
        ...mapGetters(['type', 'parts', 'paper', 'length', 'part', 'view', 'currentOrder', 'currentIndex', 'remaining', 'hasAnswer', 'hasReport', 'isAssignment', 'choose']),
        partName() {
            let partName = this.part;
            console.log(partName);
            return this.part.name ? this.part.name.split(/:|：/) : [];
        }
    },
    methods: {
        ...mapMutations({
            setType: 'SET_TYPE',
            setParts: 'SET_PARTS',
            setPaper: 'SET_PAPER',
            setPart: 'SET_PART',
            setView: 'SET_VIEW',
            setCurrentOrder: 'SET_CURRENT_ORDER',
            setAnswer: 'SET_STATUS_HAS_ANSWER',
            setAssignment: 'SET_STATUS_ASSIGNMENT',
            setHasReport: 'SET_STATUS_HAS_REPORT',
            setViewPaper: 'SET_STATUS_VIEW_PAPER',
            setChoose: 'SET_STATUS_CHOOSE'
        }),
        showPaper() {
            this.setViewPaper(true);
        },
        computeView(curOrder) {
            // 计算显示题目
            // 判断当前题号
            // length 题目总数
            let length = this.length;
            curOrder = +curOrder || 1;
            curOrder = curOrder > length ? 1 : curOrder;
            this.setCurrentOrder(curOrder);
            // 保存当前题号到storage
            setStorage({
                'currentOrder': curOrder
            });
            let views = cloneDeep(this.view);
            // 获取当前题目
            // 获取当前题目数据
            let curSubject = this.paper.find(item => item.order === curOrder);
            // 获取当前题目的part信息
            let part = this.parts.find(item => item.part.id === curSubject.part).part;
            if (part.id !== this.part.id) {
                this.setPart(part);
            }
            // prevOrder 上一题号  nextOrder 下一题号
            let prevOrder = curOrder - 1, nextOrder = curOrder + 1;
            // 判断上一题号与下一题号
            prevOrder = prevOrder < 1 ? length : prevOrder;
            nextOrder = nextOrder > length ? 1 : nextOrder;
            // 上一组题题号数组
            // let prevOrders = [...gdb.view.map(item => item.order)];
            let prevOrders = views.map(item => item.order);
            // 下一组题题号数组
            let nextOrders = [prevOrder, curOrder, nextOrder];
            // 将要获取的题号数组
            let quest = difference(nextOrders, prevOrders);
            // 被替换的题号数组
            let surplus = difference(prevOrders, nextOrders), index = [];
            // 收集要被替换的题号的数组索引
            surplus.forEach(i => index.push(prevOrders.indexOf(i)));
            // 获取将要获取的题号数组内的题目数据添加到视图数据中
            quest.forEach((item, qat) => {
                let idx = index.length ? index[qat] : qat;
                idx = idx > views.length ? 0 : idx;
                views[idx] = this.paper.find(sub => sub.order === item);
            });
            this.setView(views);
            // 获取当前题目的索引
            // let curIndex = this.views.findIndex(i => i.order === curOrder);
            // 设置当前题
            this.setCurrent(curSubject);
        },
        setCurrent(curSubject) {
            // 获取上一题音频材料地址
            // 获取当前题材料信息
            let {hasStuffText, hasStuffAudio, hasStuffImg, hasStuff, stuff} = curSubject;
            // 判断：当前题目音频材料并设置状态
            if (!hasStuffAudio || hasStuffAudio && (!this.audioSrc || this.audioSrc !== stuff.audio[0])) {
                // this.audioPause();
                this.audioSrc = stuff.audio[0];
            }
            // this.order = order;
            // this.setCurrentIndex(curIndex);
            this.t = setTimeout(() => {
                this.setChoose(true);
                clearTimeout(this.t);
            }, 800);
        },
        changeViews(index) {
            this.computeView(this.view[index].order);
        },
        saveReply(order, reply) {
            let views = cloneDeep(this.view);
            views.find(i => i.order === order).reply = reply;
            this.setView(views);
            this.$refs.views.nextView();
            if (!this.hasAnswer) {
                this.setAnswer(true);
                setStorage({
                    hasAnswer: true
                });
            }
        },
        touchMove() {
            return false;
        }
    },
    created() {
        setTimeout(() => {
            let {currentOrder} = getStorage(['currentOrder']);
            this.computeView(currentOrder);
        }, 20);
    }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
@import '../assets/sass/util/variables';
@import '../assets/sass/util/mixins';

.quizzes {
    width: 100%;
    height: 100%;
    background-color: #f7f8fc;
    overflow: hidden;
    .head {
        position: relative;
        z-index: 5;
        width: 100vw;
        height: 10.7794vh;
        background: #eee;
        overflow: hidden;
        @include box-sizing(border-box);
        @include box-shadow(0 0 10px rgba(175, 175, 175, .35));
        .introduce {
            display: -webkit-flex;
            display: flex;
            -webkit-justify-content: space-between;
            justify-content: space-between;
            -webkit-align-items: center;
            align-items: center;
            padding: 2vw 0;
            .title {
                -webkit-flex: 1;
                flex: 1;
                text-indent: .75em;
                font-size: 4.2667vw;
                color: #131313;
            }
            strong {
                /*color: #999;*/
            }
            .viewPaper {
                display: -webkit-flex;
                display: flex;
                -webkit-align-items: center;
                align-items: center;
                padding: 1.75vw 1.75vw 1.75vw 2.5vw;
                background-color: $color-blue;
                font-weight: 300;
                font-size: 3vw;
                color: #fff;
                @include background-size(auto 2.4vw);
                @include border-radius(2em 0 0 2em);
                svg {
                    display: block;
                    margin-right: 3px;
                }
                span {
                    display: block;
                }
            }
        }
        .pagination {
            width: 21%;
            font-size: 3.7333vw;
            color: #868895;
            text-align: right;
            strong {
                font-size: 4.8vw;
                color: #4c9cff;
            }
        }
        .period,
        .timing {
            margin-top: 2.75vw;
            padding-left: 6.6667vw;
            background-position: 0 50%;
            font-size: 3.7333vw;
            color: #5a5a5a;
            @include background-size(auto 4vw);
        }
        .period {
            float: left;
        }
        .timing {
            float: right;
        }

    }
    .viewLock {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 10000;
        background-color: rgba(255, 255, 255, .01);
    }
    .gesture {
        position: fixed;
        right: 23.2vw;
        bottom: 18.1333vw;
        width: 18.4vw;
        height: 26.2667vw;
        background: url("data:image/png;base64,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") no-repeat 0 0;
        @include background-size(contain);
    }
}

.quizzes-enter-active,
.quizzes-leave-active {
    @include transition(all .15s ease-out);
}

.quizzes-enter,
.quizzes-leave-to {
    @include transform(translate(100%, 0));
}
</style>
