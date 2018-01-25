<template>
<transition name="quizzes">
    <div class="quizzes">
        <div class="introduce">
            <div class="title">{{part && part.name || '加载中...'}}</div>
            <div class="period icn-calendar">有效期5天</div>
            <div class="timing icn-clock" v-if="!isAssignment">{{remaining || '--'}}</div>
            <!--<div class="cardView icn-list" @click="viewCard">答题卡</div>-->
            <div class="cardView icn-list">答题卡</div>
        </div>
        <views class="view" ref="subjects" @change="changeViews">
            <detail v-for="(detail, index) in views" :key="index" :detail="detail" @choose="saveReply"></detail>
        </views>
    </div>
</transition>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';
import {difference, cloneDeep, isEmpty, getStorage, setStorage} from '@/assets/js/util';
import Views from '@/components/views';
import Detail from '@/components/detail';


let outs;

export default {
    data() {
        return {
            beginAnswer: false,
            keep: false,
            part: {},
            views: []
        };
    },
    components: {Views, Detail},
    computed: {
        ...mapGetters(['type', 'parts', 'paper', 'length', 'currentOrder', 'currentIndex', 'remaining', 'hasAnswer', 'hasReport', 'isAssignment', 'isViewCard'])
    },
    methods: {
        ...mapMutations({
            setType: 'SET_TYPE',
            setParts: 'SET_PARTS',
            setPaper: 'SET_PAPER',
            setPart: 'SET_PART',
            setView: 'SET_VIEW',
            setCurrentOrder: 'SET_CURRENT_ORDER',
            setCurrentIndex: 'SET_CURRENT_INDEX',
            setHasAnswer: 'SET_STATUS_HAS_ANSWER',
            setAssignment: 'SET_STATUS_ASSIGNMENT',
            setHasReport: 'SET_STATUS_HAS_REPORT'
        }),
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
            // 获取当前题目
            // 获取当前题目数据
            let curSubject = this.paper.find(item => item.order === curOrder);
            // 获取当前题目的part信息
            let part = this.parts.find(item => item.part.id === curSubject.part).part;
            if (part.id !== this.part.id) {
                this.setPart(part);
                this.part = part;
            }
            // prevOrder 上一题号  nextOrder 下一题号
            let prevOrder = curOrder - 1, nextOrder = curOrder + 1;
            // 判断上一题号与下一题号
            prevOrder = prevOrder < 1 ? length : prevOrder;
            nextOrder = nextOrder > length ? 1 : nextOrder;
            // 上一组题题号数组
            // let prevOrders = [...gdb.view.map(item => item.order)];
            let prevOrders = this.views.map(item => item.order);
            // 下一组题题号数组
            let nextOrders = [prevOrder, curOrder, nextOrder];
            // 将要获取的题号数组
            let quest = difference(nextOrders, prevOrders);
            // 被替换的题号数组
            let surplus = difference(prevOrders, nextOrders), index = [];
            // 收集要被替换的题号的数组索引
            surplus.forEach(i => index.push(prevOrders.indexOf(i)));
            // 获取将要获取的题号数组内的题目数据添加到视图数据中
            let views = this.views;
            quest.forEach((item, qat) => {
                let idx = index.length ? index[qat] : qat;
                idx = idx > views.length ? 0 : idx;
                this.$set(this.views, idx, this.paper.find(sub => sub.order === item));
            });
            // this.setView(this.views);
            // 获取当前题目的索引
            // let curIndex = this.views.findIndex(i => i.order === curOrder);
            // 设置当前题
            this.setCurrent(curSubject);
        },
        setCurrent(curSubject) {
            // 获取上一题音频材料地址
            // 获取当前题材料信息
            let {hasStuffText, hasStuffAudio, hasStuffImg, stuff} = curSubject, hasStuff = hasStuffText || hasStuffAudio || hasStuffImg;
            let isPlaying = this.isPlaying;
            // 判断：当前题目音频材料并设置状态
            if (!hasStuffAudio || hasStuffAudio && (!this.audioSrc || this.audioSrc !== stuff.audio[0])) {
                isPlaying = 0;
                // this.audioPause();
                this.audioSrc = stuff.audio[0];
            }
            // this.order = order;
            // this.setCurrentIndex(curIndex);
            this.stuff = stuff;
            this.hasStuff = hasStuff;
            this.hasStuffText = hasStuffText;
            this.hasStuffAudio = hasStuffAudio;
            this.hasStuffImg = hasStuffImg;
            this.isRead = false;
            this.isPlaying = isPlaying;
            outs = setTimeout(() => {
                // wx.hideLoading();
                clearTimeout(outs);
                this.keep = false;
            }, 500);
        },
        changeViews(index) {
            let {order} = this.views[index];
            this.computeView(order);
        },
        saveReply(order, reply) {
            console.log(order, reply);
            let index = this.views.findIndex(i => i.order === order);
            let subject = this.views.find(i => i.order === order);
            subject.reply = reply;
            this.$set(this.views, index, subject);
            this.$refs.subjects.next();
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
    overflow: hidden;
    .view {
        width: 100%;
        background-color: #ccc;
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
