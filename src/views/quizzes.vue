<template>
<transition name="quizzes">
    <div class="quizzes">
        <div class="introduce"></div>
        <swiper class="subject" :options="swiperOption">
            <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
                <div class="stuff"></div>
                <div class="options"></div>
            </swiper-slide>
        </swiper>
    </div>
</transition>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper';

export default {
    data() {
        return {
            swiperOption: {
                loop : true,
                autoplay:true
            },
            swiperSlides: [1, 2, 3, 4, 5]
        };
    },
    components: {
        swiper, swiperSlide
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../assets/sass/util/variables";
@import "../assets/sass/util/mixins";

.quizzes {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.subject {
    position: fixed;
    top: 11vw;
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
