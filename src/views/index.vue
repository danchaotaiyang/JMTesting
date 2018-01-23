<template>
<div class="index">
    <router-link to="/quizzes">开始</router-link>
</div>
</template>

<script>
import {difference, cloneDeep, isEmpty, getStorage} from '@/assets/js/util';
export default {
    methods: {
        initQuizzes() {
            let {paperType, remaining} = getStorage();
            // 防止：数据加载完毕前，点击首页按钮跳页错误
            /*
                        wx.showLoading({
                            title: '请稍后...',
                            mask: true
                        });
            */
            // 重置已有栈数据
            this.parts = [];
            this.paper = [];
            this.views = [];

            // 解构请求所得数据
            // let { paper_type, answer_status, is_answer, show_status, parts, qsAll } = data.data;
            let ctype = 0;
            // 设置：请求参数 paper_type
            // this.params.paper_type = paperType;
            this.parts = parts;
            // 设置材料状态
            this.paper = qsAll.map(item => {
                item.hasStuffText = !isEmpty(item.stuff.text);
                item.hasStuffAudio = !isEmpty(item.stuff.audio);
                item.hasStuffImg = !isEmpty(item.stuff.images);
                return item;
            });
            // 合并题目数据与试卷数据
            this.parts.forEach(item => {
                item.subjects.forEach(subject => {
                    Object.assign(this.paper.find(sub => sub.order === subject.order), subject);
                });
            });
            // 存入本地缓存
            // 如版本有改变，重置题号及时间
            if (remaining === 'undefined') {
                remaining = 60;
            }
            if (paperType !== ctype) {
                localStorage.setItem('curOrder', 1);
                if (ctype === 1) {
                    remaining = 90;
                }
            }
            localStorage.setItem('remaining', remaining);
            // 答题状态
            localStorage.setItem('hasAnswer', is_answer);
            // 交卷状态
            localStorage.setItem('isAssignment', answer_status);
            // 报告状态
            localStorage.setItem('hasReport', show_status);
            // wx.hideLoading();
            typeof cb === 'function' && cb(data);
        }
    },
    created() {
        // let currentOrder = localStorage.getItem('currentOrder') || 1;
        // this.computeView(currentOrder);
        this.initQuizzes();
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>
