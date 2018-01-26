<template>
<div class="paper" v-show="isPaper">
    <transition name="paper">
        <div class="paperHead">
            <div class="title"></div>
            <div class="remaining"></div>
        </div>
        <scroll class="scroll">
            <div class="paperBody">
                <div class="part" v-for="part in parts">
                    <div class="name">{{part.name}}</div>
                    <div class="subjects">
                        <span v-for="subject in part.subjects" @click="getQuizzes(subject)">{{subject.order}}</span>
                    </div>
                </div>
            </div>
        </scroll>
    </transition>
</div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import Scroll from '@/components/scroll';

export default {
    components: {Scroll},
    computed: {
        ...mapGetters(['parts', 'remaining', 'isAssignment', 'isPaper'])
    },
    methods: {
        ...mapMutations({
            setViewPaper: 'SET_STATUS_PAPER'
        }),
        getQuizzes(subject) {

        }
    }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
@import '../assets/sass/util/variables';
@import '../assets/sass/util/mixins';

&.paper-enter-active, &.paper-leave-active {
    @include transition(all 0.4s);
}
&.paper-enter, &.paper-leave-to {
    opacity: 0;
}
</style>
