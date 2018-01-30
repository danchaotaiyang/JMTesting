<template>
<div class="index" :class="version">
    <span @click="setView">{{isAssignment ? '查看报告' : hasAnswer ? '继续答题' : '开始答题'}}</span>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
import {isEmpty, getStorage, setStorage} from '@/assets/js/utils';
import {postMode} from '@/assets/js/config';

export default {
    computed: {
        ...mapGetters(['type', 'hasAnswer', 'isAssignment']),
        version() {
            return this.type > 0 ? 'XV-CVT' : 'basic'
        }
    },
    methods: {
        setView() {
            this.$router.push({
                path: `/${this.isAssignment ? 'report' : 'quizzes'}`
            });
        }
    },
    created() {
        console.log(this.hasAnswer);
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.index {
    width: 100vw;
    height: 100vh;
    &.basic {
        background: #63d2ff;
        background-size: contain;
    }
    &.XV-CVT {
        background: #ffdf6d;
        background-size: contain;
    }
}
</style>
