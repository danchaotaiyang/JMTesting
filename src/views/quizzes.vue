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
        <swiper class="subject" :options="swiperOption">
            <swiper-slide v-for="(subject, index) in views" :key="index">
                {{subject.order || ''}}
                <div class=stuff></div>
                <div class=options></div>
            </swiper-slide>
        </swiper>
    </div>
</transition>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import {difference, cloneDeep, isEmpty, getStorage, setStorage} from '@/assets/js/util';
import {Swiper, SwiperSlide} from 'vue-awesome-swiper';

let outs;

export default {
    data() {
        return {
            swiperOption: {},
            parts: [],
            paper: [],
            part: {},
            view: [],
            beginAnswer: false,
            length: 0,
            keep: false
        };
    },
    components: {Swiper, SwiperSlide},
    computed: {
        remaining() {
            return getStorage('remaining');
        }
    },
    methods: {
        ...mapGetters(['getParts', 'getPaper', 'getPart', 'getCurrentIndex', 'getStatusAnswer', 'getStatusReport', 'getStatusAssignment', 'getStatusViewCard']),
        ...mapMutations({
            setPaperType: 'SET_PAPER_TYPE',
            setParts: 'SET_PARTS',
            setPaper: 'SET_PAPER',
            setPart: 'SET_PART',
            setCurrentIndex: 'SET_CURRENT_INDEX',
            setHasAnswer: 'SET_STATUS_HAS_ANSWER',
            setHasReport: 'SET_STATUS_HAS_REPORT',
            setStarted: 'SET_STATUS_STARTED',
            setAssignment: 'SET_STATUS_ASSIGNMENT'
        }),
        computeView(order) {
            // 计算显示题目
            // 判断当前题号
            // length 题目总数
            let length = this.length;
            let curOrder = order || 1;
            curOrder = curOrder > length ? 1 : curOrder;
            // prevOrder 上一题号  nextOrder 下一题号
            let prevOrder = curOrder - 1, nextOrder = curOrder + 1;
            // 判断上一题号与下一题号
            prevOrder = prevOrder < 1 ? length : prevOrder;
            nextOrder = nextOrder > length ? 1 : nextOrder;
            // 上一组题题号数组
            // let prevOrders = [...gdb.view.map(item => item.order)];
            let prevOrders = this.view.map(item => item.order);
            // 下一组题题号数组
            let nextOrders = [prevOrder, curOrder, nextOrder];
            // 将要获取的题号数组
            let quest = difference(nextOrders, prevOrders);
            // 被替换的题号数组
            let surplus = difference(prevOrders, nextOrders), index = [];

            // 保存当前题号到storage
            setStorage({
                'currentIndex': curOrder
            });
            // 收集要被替换的题号的数组索引
            surplus.forEach(i => index.push(prevOrders.indexOf(i)));
            // 获取将要获取的题号数组内的题目数据添加到视图数据中
            quest.forEach((order, qat) => {
                let idx = index.length ? index[qat] : qat;
                idx = idx > this.view.length ? 0 : idx;
                this.view[idx] = this.paper.find(sub => sub.order === order);
            });
            // 获取当前题目的索引
            let curIndex = this.view.findIndex(i => i.order === curOrder);
            // 获取当前题目数据
            let curSubject = this.view.find(item => item.order === curOrder);
            // 获取当前题目的part信息
            let part = this.parts.find(item => item.part.id === curSubject.part).part;
            // 设置当前题
            this.setCurrent(curSubject, part, curIndex);
            // 返回相关数据
            return { curOrder, curIndex, prevOrder, nextOrder, prevOrders, nextOrders, quest, surplus, index };
        },
        setCurrent(curSubject, part, curIndex) {
            // 获取上一题音频材料地址
            // 获取当前题材料信息
            let { order, hasStuffText, hasStuffAudio, hasStuffImg, stuff } = curSubject, hasStuff = hasStuffText || hasStuffAudio || hasStuffImg;
            let isPlaying = this.data.isPlaying;
            // 判断：当前题目音频材料并设置状态
            if (!hasStuffAudio || hasStuffAudio && (!this.audioSrc || this.audioSrc !== stuff.audio[0])) {
                isPlaying = 0;
                this.audioPause();
                this.audioSrc = stuff.audio[0];
            }
            // this.setData({ part, order, curIndex, stuff, hasStuff, hasStuffText, hasStuffAudio, hasStuffImg, view: gdb.view, isRead: 0, autoplay: false, isPlaying });
            this.setPart(part);
            this.order = order;
            this.curIndex = curIndex;
            this.stuff = stuff;
            this.hasStuff = hasStuff;
            this.hasStuffText = hasStuffText;
            this.hasStuffAudio = hasStuffAudio;
            this.hasStuffImg = hasStuffImg;
            this.isRead = false;
            this.autoplay = false;
            this.isPlaying = isPlaying;

            outs = setTimeout(() => {
                // wx.hideLoading();
                clearTimeout(outs);
                // this.setData({keep: false});
                this.keep = false;
            }, 500);

        },
    },
    created() {
        let {beginAnswer, remaining, currentIndex} = getStorage();
        this.parts = this.getParts();
        this.paper = this.getPaper();
        this.length = this.paper.length;
        this.computeView(currentIndex);
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
}

.subject {
    position: fixed;
    top: 11vw;
    width: 100%;
    bottom: 0;
    background-color: #ccc;
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
