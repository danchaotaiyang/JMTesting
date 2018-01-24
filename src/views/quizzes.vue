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
import {difference, cloneDeep, isEmpty, getStorage, setStorage} from '@/assets/js/util';
import {Swiper, SwiperSlide} from 'vue-awesome-swiper';
import {mapGetters} from 'vuex';


export default {
    data() {
        return {};
    },
    components: {Swiper, SwiperSlide},
    methods: {},
    created() {
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
