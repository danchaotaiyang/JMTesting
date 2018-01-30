<template>
<div class="detail">
    {{detail.order || ''}}
    <stuff class="stuff" v-if="detail.hasStuff" :data="detail.stuff"></stuff>
    <div class="options">
        <div v-for="option in detail.options" @click="chooseReply(detail.order, option.op_key)" :class="{'active': option.op_key === detail.reply}">
            <span>{{option.op_content}}</span>
        </div>
    </div>
</div>
</template>

<script>
import Stuff from '@/components/stuff';
import {mapGetters, mapMutations} from 'vuex';
import {cloneDeep} from '@/assets/js/utils';

export default {
    components: {Stuff},
    props: {
        detail: {
            type: Object,
            default: null
        }
    },
    computed: {
        ...mapGetters(['paper', 'view', 'choose']),
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
        }
    },
    watch: {
        detail(detail) {
            // console.log(detail);
        }
    }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.options {
    div {
        position: relative;
        z-index: 500;
        display: block;
        padding: 1em;
    }
}

.active {
    color: red;
}
</style>
