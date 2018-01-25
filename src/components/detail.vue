<template>
<div>
    {{detail.order || ''}}
    <div class="stuff"></div>
    <div class="options">
        {{detail.order || ''}}
        <ul>
            <li v-for="option in detail.options">
                <span @click.stop.prevent="chooseReply(detail.order, option.op_key)" :class="{'active': option.op_key === detail.reply}">{{option.op_content}}</span>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import {cloneDeep} from '@/assets/js/util';
export default {
    props: {
        detail: {
            type: Object,
            default: null
        }
    },
    computed: {
        ...mapGetters(['paper']),
    },
    methods: {
        ...mapMutations({
            setPaper: 'SET_PAPER'
        }),
        chooseReply(order, reply) {
            let paper = cloneDeep(this.paper);
            let index = paper.findIndex(i => i.order === order);
            let subject = paper.find(i => i.order === order);
            subject.reply = reply;
            paper[index] = subject;
            this.setPaper(paper);
            this.$emit('choose', order, reply);
        }
    }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.active {
    color: red;
}
</style>
