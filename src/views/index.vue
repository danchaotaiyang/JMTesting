<template>
<div class="index">
    <router-link to="/quizzes">开始</router-link>
</div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex';
import {isEmpty, getStorage, setStorage} from '@/assets/js/util';

const data = {
    data: {
        paper_type: 0,
        answer_status: 0,
        is_answer: 0,
        show_status: 0,
        parts: [
            {
                part: {id: 1, name: 'PartⅠ：Vocabulary and Grammar '},
                subjects: [
                    {order: 1, reply: '', right: 'B'}, {order: 2, reply: '', right: 'A'}, {order: 3, reply: '', right: 'C'}, {order: 4, reply: '', right: 'A'}, {order: 5, reply: '', right: 'B'}, {order: 6, reply: '', right: 'A'}, {order: 7, reply: '', right: 'B'}, {order: 8, reply: '', right: 'A'}, {order: 9, reply: '', right: 'A'}, {order: 10, reply: '', right: 'A'}, {order: 11, reply: '', right: 'A'}, {order: 12, reply: '', right: 'B'},
                    {order: 13, reply: '', right: 'A'}, {order: 14, reply: '', right: 'A'}, {order: 15, reply: '', right: 'C'}, {order: 16, reply: '', right: 'A'}, {order: 17, reply: '', right: 'A'}, {order: 18, reply: '', right: 'A'}, {order: 19, reply: '', right: 'C'}, {order: 20, reply: '', right: 'A'}, {order: 21, reply: '', right: 'B'}, {order: 22, reply: '', right: 'A'}, {order: 23, reply: '', right: 'C'}, {order: 24, reply: '', right: 'A'},
                    {order: 25, reply: '', right: 'C'}, {order: 26, reply: '', right: 'A'}, {order: 27, reply: '', right: 'A'}, {order: 28, reply: '', right: 'C'}, {order: 29, reply: '', right: 'C'}, {order: 30, reply: '', right: 'C'}, {order: 31, reply: '', right: 'A'}, {order: 32, reply: '', right: 'A'}, {order: 33, reply: '', right: 'B'}, {order: 34, reply: '', right: 'D'}, {order: 35, reply: '', right: 'A'}, {order: 36, reply: '', right: 'A'},
                    {order: 37, reply: '', right: 'A'}, {order: 38, reply: '', right: 'A'}, {order: 39, reply: '', right: 'B'}, {order: 40, reply: '', right: 'D'}, {order: 41, reply: '', right: 'B'}, {order: 42, reply: '', right: 'A'}, {order: 43, reply: '', right: 'B'}, {order: 44, reply: '', right: 'B'}, {order: 45, reply: '', right: 'C'}, {order: 46, reply: '', right: 'C'}, {order: 47, reply: '', right: 'B'}, {order: 48, reply: '', right: 'B'},
                    {order: 49, reply: '', right: 'D'}, {order: 50, reply: '', right: 'A'}
                ]
            },
            {
                part: {id: 4, name: 'PartⅡ: Speaking'},
                subjects: [
                    {order: 51, reply: '', right: 'B'}, {order: 52, reply: '', right: 'D'}, {order: 53, reply: '', right: 'D'}, {order: 54, reply: 'C', right: 'D'}, {order: 55, reply: 'B', right: 'C'}, {order: 56, reply: 'B', right: 'D'}, {order: 57, reply: 'B', right: 'C'}, {order: 58, reply: 'B', right: 'B'}, {order: 59, reply: 'D', right: 'C'}, {order: 60, reply: 'C', right: 'D'},
                    {order: 61, reply: '', right: 'C'}, {order: 62, reply: '', right: 'B'}, {order: 63, reply: '', right: 'D'}, {order: 64, reply: '', right: 'C'}, {order: 65, reply: 'E', right: 'A'}, {order: 66, reply: 'E', right: 'D'}, {order: 67, reply: 'C', right: 'C'}, {order: 68, reply: 'E', right: 'D'}
                ]
            }
        ],
        qsAll: [
            {part: 1, order: 1, title: 'Adequate', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '满足'}, {op_key: 'B', op_content: '充足'}, {op_key: 'C', op_content: '富足'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 2, title: 'analysis', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '分析'}, {op_key: 'B', op_content: '赏析'}, {op_key: 'C', op_content: '辨析'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 3, title: 'clarify', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '确信'}, {op_key: 'B', op_content: '确保'}, {op_key: 'C', op_content: '明确'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 4, title: 'commitment', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '投入'}, {op_key: 'B', op_content: '投机'}, {op_key: 'C', op_content: '投射'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 5, title: 'declare', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '宣传'}, {op_key: 'B', op_content: '宣布'}, {op_key: 'C', op_content: '宣战'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 6, title: 'disturb', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '干涉'}, {op_key: 'B', op_content: '干愿'}, {op_key: 'C', op_content: '干扰'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 7, title: 'fierce', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '激动'}, {op_key: 'B', op_content: '激烈'}, {op_key: 'C', op_content: '激情'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 8, title: 'harbor  ', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '包庇'}, {op_key: 'B', op_content: '包容'}, {op_key: 'C', op_content: '包装'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 9, title: 'ignore', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '忽略'}, {op_key: 'B', op_content: '忽然'}, {op_key: 'C', op_content: '忽悠'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 10, title: 'leak', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '泄露'}, {op_key: 'B', op_content: '流露'}, {op_key: 'C', op_content: '雨露'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 11, title: 'mentally', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '精神上'}, {op_key: 'B', op_content: '神经上'}, {op_key: 'C', op_content: '心理上'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 12, title: 'modest', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '中心'}, {op_key: 'B', op_content: '中庸'}, {op_key: 'C', op_content: '中间'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 13, title: 'observe', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '观察  '}, {op_key: 'B', op_content: '观赏  '}, {op_key: 'C', op_content: '观点   '}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 14, title: 'optional', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '选择的'}, {op_key: 'B', op_content: '选举的'}, {op_key: 'C', op_content: '选拔的'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 15, title: 'patent', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '专业  '}, {op_key: 'B', op_content: '专长  '}, {op_key: 'C', op_content: '专利   '}, {op_key: 'D', op_content: ' I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 16, title: 'preserve', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '保留  '}, {op_key: 'B', op_content: '保护  '}, {op_key: 'C', op_content: '保险   '}, {op_key: 'D', op_content: ' I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 17, title: 'reveal', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '显示'}, {op_key: 'B', op_content: '展示'}, {op_key: 'C', op_content: '警示'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 18, title: 'routine', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '常规'}, {op_key: 'B', op_content: '常识'}, {op_key: 'C', op_content: '常项'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 19, title: 'scenery  ', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '颜色'}, {op_key: 'B', op_content: '润色'}, {op_key: 'C', op_content: '景色'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 20, title: 'splash', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '泼洒'}, {op_key: 'B', op_content: '倾泻'}, {op_key: 'C', op_content: '注入'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 21, title: 'switch', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '转帐'}, {op_key: 'B', op_content: '转移'}, {op_key: 'C', op_content: '转变'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 22, title: 'terminal', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '终点'}, {op_key: 'B', op_content: '重点'}, {op_key: 'C', op_content: '中点'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 23, title: 'thus', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '如果'}, {op_key: 'B', op_content: '如似'}, {op_key: 'C', op_content: '如此'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}}, {part: 1, order: 24, title: 'tuition', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '学费'}, {op_key: 'B', op_content: '车费'}, {op_key: 'C', op_content: '餐费'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 25, title: 'tutor', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '教育'}, {op_key: 'B', op_content: '教学'}, {op_key: 'C', op_content: '教师'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 26, title: 'pernicious', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '有害的'}, {op_key: 'B', op_content: '有益的'}, {op_key: 'C', op_content: '有趣的'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}}, {part: 1, order: 27, title: 'prohibit', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '禁止'}, {op_key: 'B', op_content: '停止'}, {op_key: 'C', op_content: '截止'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}}, {part: 1, order: 28, title: 'detrimental', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '有益的'}, {op_key: 'B', op_content: '有趣的'}, {op_key: 'C', op_content: '有害的'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 29, title: 'ethos', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '回答'}, {op_key: 'B', op_content: '回复'}, {op_key: 'C', op_content: '回声'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 30, title: 'deteriorate', type: 0, note: '词汇测试：选择正确的释义', options: [{op_key: 'A', op_content: '变化'}, {op_key: 'B', op_content: '转化'}, {op_key: 'C', op_content: '恶化'}, {op_key: 'D', op_content: 'I don’t know'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 31, title: 'The newcomer went to the library the other day and searched for ____he could find about Mark Twain.', type: 0, note: '语法测试：选择正确的单词或句子', options: [{op_key: 'A', op_content: 'whatever'}, {op_key: 'B', op_content: 'however'}, {op_key: 'C', op_content: 'wherever'}, {op_key: 'D', op_content: 'whichever'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 32, title: 'Maria has written two novels, both of ____have been made into television series.', type: 0, note: '语法测试：选择正确的单词或句子', options: [{op_key: 'A', op_content: 'which'}, {op_key: 'B', op_content: 'what'}, {op_key: 'C', op_content: 'that'}, {op_key: 'D', op_content: 'them'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 33, title: 'We ____have bought so much food now that Suzie won’t be with us for dinner.', type: 0, note: '语法测试：选择正确的单词或句子', options: [{op_key: 'A', op_content: 'may not'}, {op_key: 'B', op_content: 'needn’t'}, {op_key: 'C', op_content: 'can’t'}, {op_key: 'D', op_content: 'mustn’t'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 34, title: 'Traditionally, _____in New England on Thanksgiving Day.', type: 0, note: '语法测试：选择正确的单词或句子', options: [{op_key: 'A', op_content: 'is served sweet cider'}, {op_key: 'B', op_content: 'when sweet cider is served'}, {op_key: 'C', op_content: 'when served is sweet cider'}, {op_key: 'D', op_content: 'sweet cider is served'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 35, title: 'In 1964____of Henry Ossawa Tanner’s paintings was shown at the Smithsonian Institution.', type: 0, note: '语法测试：选择正确的单词或句子', options: [{op_key: 'A', op_content: 'a major collection'}, {op_key: 'B', op_content: 'that a major collection'}, {op_key: 'C', op_content: 'a collection was major'}, {op_key: 'D', op_content: 'was a major collection'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 36, title: 'Sarah made ____to the airport just in time to catch her plane this morning.', type: 0, note: '语法测试：选择正确的单词或句子', options: [{op_key: 'A', op_content: 'it'}, {op_key: 'B', op_content: 'this'}, {op_key: 'C', op_content: 'that'}, {op_key: 'D', op_content: 'herself'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 37, title: 'I don’t know about you, but I’m sick and tired of this weather.   ______.I can’t stand all this rain.', type: 0, note: '语法测试：选择正确的单词或句子', options: [{op_key: 'A', op_content: 'So am I'}, {op_key: 'B', op_content: 'I don’t care'}, {op_key: 'C', op_content: 'It’s hard to say'}, {op_key: 'D', op_content: 'I hope not'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 38, title: 'Having finished her project, she was invited by the school _____to the new students.', type: 0, note: '语法测试：选择正确的单词或句子', options: [{op_key: 'A', op_content: 'to speak'}, {op_key: 'B', op_content: 'to have spoken'}, {op_key: 'C', op_content: 'having spoken'}, {op_key: 'D', op_content: 'speaking'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 39, title: 'Bicycling is good exercise; _____, it does not pollute the air.', type: 0, note: '语法测试：选择正确的单词或句子', options: [{op_key: 'A', op_content: 'otherwise'}, {op_key: 'B', op_content: 'besides'}, {op_key: 'C', op_content: 'nevertheless'}, {op_key: 'D', op_content: 'therefore'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 40, title: 'He missed ___gold in the high jump, but will get __second chance in the long jump.', type: 0, note: '语法测试：选择正确的单词或句子', options: [{op_key: 'A', op_content: '/ ; a'}, {op_key: 'B', op_content: 'the; the'}, {op_key: 'C', op_content: 'a ; /'}, {op_key: 'D', op_content: 'The; a'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 41, title: 'Queen Elizabeth Ⅱ is often thought to be the richest woman in the world._____,her personal wealth seems rather small.', type: 0, note: '语法测试：选择正确的单词或句子', options: [{op_key: 'A', op_content: 'Otherwise'}, {op_key: 'B', op_content: 'However'}, {op_key: 'C', op_content: 'Altogether'}, {op_key: 'D', op_content: 'Besides'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 42, title: 'The greater population there is in a locality, ____for water, transportation, and disposal of refuse.', type: 0, note: '语法测试：选择正确的单词或句子', options: [{op_key: 'A', op_content: 'the greater the need there is'}, {op_key: 'B', op_content: 'greater need'}, {op_key: 'C', op_content: 'is there great need'}, {op_key: 'D', op_content: 'the great need'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 43, title: 'It was not until I came here ____I realized this place was famous, for not only its beauty but also its weather.', type: 0, note: '语法测试：选择正确的单词或句子', options: [{op_key: 'A', op_content: 'who'}, {op_key: 'B', op_content: 'that'}, {op_key: 'C', op_content: 'before'}, {op_key: 'D', op_content: 'where'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 44, title: 'Look！Somebody ____the sofa. \r\nWell, it wasn’t me. I didn’t do it.', type: 0, note: '语法测试：选择正确的单词或句子', options: [{op_key: 'A', op_content: 'was cleaning'}, {op_key: 'B', op_content: 'has cleaned'}, {op_key: 'C', op_content: 'had cleaned'}, {op_key: 'D', op_content: 'is cleaning'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 45, title: 'I hear ____boys in your school like playing football in their spare time, though others prefer basketball.', type: 0, note: '语法测试：选择正确的单词或句子', options: [{op_key: 'A', op_content: 'quite a bit'}, {op_key: 'B', op_content: 'quite a lot'}, {op_key: 'C', op_content: 'quite a few'}, {op_key: 'D', op_content: 'quite a little'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 46, title: 'This restaurant was’t ____that other restaurant we went to.', type: 0, note: '语法测试：选择正确的单词或句子', options: [{op_key: 'A', op_content: 'as good as half'}, {op_key: 'B', op_content: 'as half good as'}, {op_key: 'C', op_content: 'half as good as'}, {op_key: 'D', op_content: 'good as half as'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 47, title: 'They ____have arrived at lunchtime but their flight was delayed.', type: 0, note: '语法测试：选择正确的单词或句子', options: [{op_key: 'A', op_content: 'can'}, {op_key: 'B', op_content: 'should'}, {op_key: 'C', op_content: 'must'}, {op_key: 'D', op_content: 'will'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 48, title: 'All the scientific evidence _____that increasing use of chemicals in farming ____damaging our health.', type: 0, note: '语法测试：选择正确的单词或句子', options: [{op_key: 'A', op_content: 'shows; are'}, {op_key: 'B', op_content: 'shows; is'}, {op_key: 'C', op_content: 'show; is'}, {op_key: 'D', op_content: 'show; are'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 49, title: 'One’s life has value ____one brings value to the life of others.', type: 0, note: '语法测试：选择正确的单词或句子', options: [{op_key: 'A', op_content: 'except that'}, {op_key: 'B', op_content: 'no matter how'}, {op_key: 'C', op_content: 'so that'}, {op_key: 'D', op_content: 'as long as'}], stuff: {text: [], audio: [], images: []}},
            {part: 1, order: 50, title: 'Of the millions who saw Haley’s comet in 1986,how many people _____long enough to see it return in the twenty-first century ?', type: 0, note: '语法测试：选择正确的单词或句子', options: [{op_key: 'A', op_content: 'will live'}, {op_key: 'B', op_content: 'will they live'}, {op_key: 'C', op_content: 'living'}, {op_key: 'D', op_content: 'they will be living'}], stuff: {text: [], audio: [], images: []}},
            {part: 4, order: 51, title: 'It’s open to everyone, but students pay an annual fee that’s much less than the general public pay.', type: 0, note: '口语试题：划分正确停顿方式', options: [{op_key: 'A', op_content: 'It’s open to /everyone, but students pay an / annual fee that’s much/ less than the general public pay.'}, {op_key: 'B', op_content: 'It’s open to everyone,/ but students pay an annual fee/ that’s much less than the general public pay.'}, {op_key: 'C', op_content: 'It’s/ open to everyone, but students/ pay an annual fee that’s much less than the/ general public pay.'}, {op_key: 'D', op_content: 'It’s open/ to everyone, but students pay an annual fee that’s much less than the general public pay.'}, {op_key: 'E', op_content: '我不确定'}], stuff: {text: [], audio: [], images: []}},
            {part: 4, order: 52, title: 'It’s a training resource - a collection of materials for people to study on their own, or use in their own organizations.', type: 0, note: '口语试题：划分正确停顿方式', options: [{op_key: 'A', op_content: 'It’s a training /resource - a collection of materials for /people to study on their own, or/ use in their own organizations.'}, {op_key: 'B', op_content: 'It’s a training resource/ - a collection /of materials for/ people to study /on their own, or use in their own organizations.'}, {op_key: 'C', op_content: 'It’s a training resource - a collection of /materials for people to study on their own, or/ use in their own organizations.'}, {op_key: 'D', op_content: 'It’s a training resource /- a collection of materials/ for people to study on their own/, or use in their own organizations.'}, {op_key: 'E', op_content: '我不确定'}], stuff: {text: [], audio: [], images: []}},
            {part: 4, order: 53, title: 'I’ve decided to enroll on a part- time management course.', type: 0, note: '口语试题：划分正确停顿方式', options: [{op_key: 'A', op_content: 'I’ve /decided to enroll on a/ part- time management /course.'}, {op_key: 'B', op_content: 'I’ve decided/ to/ enroll on a part- time management course.'}, {op_key: 'C', op_content: 'I’ve decided to enroll on a/ part- time management course.'}, {op_key: 'D', op_content: 'I’ve decided to enroll /on a part- time management course.'}, {op_key: 'E', op_content: '我不确定'}], stuff: {text: [], audio: [], images: []}},
            {part: 4, order: 54, title: 'Provided you warn the refectory in advance, it won’t be a problem.', type: 0, note: '口语试题：划分正确停顿方式', options: [{op_key: 'A', op_content: 'Provided you warn the /refectory in/ advance, it won’t be a problem.'}, {op_key: 'B', op_content: 'Provided you warn the/ refectory in advance, it won’t be a problem.'}, {op_key: 'C', op_content: 'Provided you warn the refectory in advance, /it /won’t be a problem.'}, {op_key: 'D', op_content: 'Provided/ you warn the refectory/ in advance, /it won’t be a problem.'}, {op_key: 'E', op_content: '我不确定'}], stuff: {text: [], audio: [], images: []}},
            {part: 4, order: 55, title: 'Then she’s eligible to join the nursery, which is supervised by a qualified Nursery Nurse.', type: 0, note: '口语试题：划分正确停顿方式', options: [{op_key: 'A', op_content: 'Then she’s /eligible to join the/ nursery, which is supervised by a/ qualified Nursery Nurse.'}, {op_key: 'B', op_content: 'Then /she’s eligible to join the nursery, which is supervised by a qualified Nursery Nurse.'}, {op_key: 'C', op_content: 'Then /she’s eligible to join the nursery, /which is supervised/ by a qualified Nursery Nurse.'}, {op_key: 'D', op_content: 'Then she’s/ eligible /to join the/ nursery, which is/ supervised by a/ qualified Nursery Nurse.'}, {op_key: 'E', op_content: '我不确定'}], stuff: {text: [], audio: [], images: []}},
            {part: 4, order: 56, title: 'S(a)tisfy', type: 0, note: '口语试题：选择与题目单词括号中字母读音一致的单词', options: [{op_key: 'A', op_content: 'arriv(a)l'}, {op_key: 'B', op_content: 't(a)le'}, {op_key: 'C', op_content: 'b(a)lance'}, {op_key: 'D', op_content: 'p(a)ssage'}, {op_key: 'E', op_content: '我不确定'}], stuff: {text: [], audio: [], images: []}},
            {part: 4, order: 57, title: 'Bo(th)er', type: 0, note: '口语试题：选择与题目单词括号中字母读音一致的单词', options: [{op_key: 'A', op_content: 'fai(th)'}, {op_key: 'B', op_content: 'me(th)od'}, {op_key: 'C', op_content: 'nor(th)ern'}, {op_key: 'D', op_content: '(th)reat'}, {op_key: 'E', op_content: '我不确定'}], stuff: {text: [], audio: [], images: []}},
            {part: 4, order: 58, title: 'B(ow)', type: 0, note: '口语试题：选择与题目单词括号中字母读音一致的单词', options: [{op_key: 'A', op_content: 's(ow)'}, {op_key: 'B', op_content: 'sh(ow)er'}, {op_key: 'C', op_content: 'fl(ow)'}, {op_key: 'D', op_content: 'gr(ow)n'}, {op_key: 'E', op_content: '我不确定'}], stuff: {text: [], audio: [], images: []}},
            {part: 4, order: 59, title: 'Pr(o)ve', type: 0, note: '口语试题：选择与题目单词括号中字母读音一致的单词', options: [{op_key: 'A', op_content: 'n(o)d'}, {op_key: 'B', op_content: 'pl(o)t'}, {op_key: 'C', op_content: 'rem(o)ve'}, {op_key: 'D', op_content: 'r(o)ll'}, {op_key: 'E', op_content: '我不确定'}], stuff: {text: [], audio: [], images: []}},
            {part: 4, order: 60, title: 'Surfa(c)e', type: 0, note: '口语试题：选择与题目单词括号中字母读音一致的单词', options: [{op_key: 'A', op_content: 'dis(c)overy'}, {op_key: 'B', op_content: '(c)ondition'}, {op_key: 'C', op_content: 'spe(c)ial'}, {op_key: 'D', op_content: '(c)ertain'}, {op_key: 'E', op_content: '我不确定'}], stuff: {text: [], audio: [], images: []}},
            {part: 4, order: 61, title: 'More importantly it’s full of equipment that’s ______to collect data. So, it can help us in building up a profile of different factors which work together within the world’s oceans.', type: 0, note: '口语试题：选择划线部分中应该填入的词汇。', options: [{op_key: 'A', op_content: 'occupied'}, {op_key: 'B', op_content: 'greatly'}, {op_key: 'C', op_content: 'designed'}, {op_key: 'D', op_content: 'doubtful'}, {op_key: 'E', op_content: '我不确定'}], stuff: {text: [], audio: [], images: []}},
            {part: 4, order: 62, title: 'After about five hours on the surface the float _____sinks, beginning the whole process again.', type: 0, note: '口语试题：选择划线部分中应该填入的词汇。', options: [{op_key: 'A', op_content: 'wonderfully'}, {op_key: 'B', op_content: 'automatically'}, {op_key: 'C', op_content: 'normally'}, {op_key: 'D', op_content: 'perfectly'}, {op_key: 'E', op_content: '我不确定'}], stuff: {text: [], audio: [], images: []}},
            {part: 4, order: 63, title: 'I’m struck by the awesome beauty of the place. It’s _____but you can really only visit it in the summer months.', type: 0, note: '口语试题：选择划线部分中应该填入的词汇。', options: [{op_key: 'A', op_content: 'awful'}, {op_key: 'B', op_content: 'observant'}, {op_key: 'C', op_content: 'stingy'}, {op_key: 'D', op_content: 'magnificent'}, {op_key: 'E', op_content: '我不确定'}], stuff: {text: [], audio: [], images: []}},
            {part: 4, order: 64, title: 'how can you be______ of this?', type: 0, note: '口语试题：选择划线部分中应该填入的词汇。', options: [{op_key: 'A', op_content: 'known'}, {op_key: 'B', op_content: 'ooze'}, {op_key: 'C', op_content: 'certain'}, {op_key: 'D', op_content: 'awareness'}, {op_key: 'E', op_content: '我不确定'}], stuff: {text: [], audio: [], images: []}},
            {part: 4, order: 65, title: 'Apes get a large ______of their food by ‘fishing’ ants from ant hills.', type: 0, note: '口语试题：选择划线部分中应该填入的词汇。', options: [{op_key: 'A', op_content: 'proportion'}, {op_key: 'B', op_content: 'chart'}, {op_key: 'C', op_content: 'mass'}, {op_key: 'D', op_content: 'mess'}, {op_key: 'E', op_content: '我不确定'}], stuff: {text: [], audio: [], images: []}},
            {part: 4, order: 66, title: 'ren·o·va·tion', type: 0, note: '口语试题：请选择单词重音标注正确的选项。', options: [{op_key: 'A', op_content: 'ren'}, {op_key: 'B', op_content: 'o'}, {op_key: 'C', op_content: 'tion'}, {op_key: 'D', op_content: 'va'}, {op_key: 'E', op_content: '我不确定'}], stuff: {text: [], audio: [], images: []}},
            {part: 4, order: 67, title: 'en·dur·ance', type: 0, note: '口语试题：请选择单词重音标注正确的选项。', options: [{op_key: 'A', op_content: 'ance'}, {op_key: 'B', op_content: 'en'}, {op_key: 'C', op_content: 'dur'}, {op_key: 'D', op_content: 'dur·ance'}, {op_key: 'E', op_content: '我不确定'}], stuff: {text: [], audio: [], images: []}},
            {part: 4, order: 68, title: 'res·i·den·cy', type: 0, note: '口语试题：请选择单词重音标注正确的选项。', options: [{op_key: 'A', op_content: 'cy'}, {op_key: 'B', op_content: 'den'}, {op_key: 'C', op_content: 'i'}, {op_key: 'D', op_content: 'res'}, {op_key: 'E', op_content: '我不确定'}], stuff: {text: [], audio: [], images: []}}
        ]
    }
};

export default {
    data() {
        return {
            params: {
                paper_type: 0
            }
        }
    },
    methods: {
        ...mapMutations({
            setPaperType: 'SET_PAPER_TYPE',
            setParts: 'SET_PARTS',
            setPaper: 'SET_PAPER',
            setViews: 'SET_VIEWS',
            setPart: 'SET_PART',
            setCurrentIndex: 'SET_CURRENT_INDEX',
            setHasAnswer: 'SET_STATUS_HAS_ANSWER',
            setHasReport: 'SET_STATUS_HAS_REPORT',
            setStarted: 'SET_STATUS_STARTED',
            setAssignment: 'SET_STATUS_ASSIGNMENT'
        }),
        ...mapActions([
            'initData'
        ]),
        init() {
            let {paperType, remaining} = getStorage();
            // 防止：数据加载完毕前，点击首页按钮跳页错误
            /*
                        wx.showLoading({
                            title: '请稍后...',
                            mask: true
                        });
            */
            // 重置已有栈数据
            this.initData();
            // 解构请求所得数据
            let { paper_type, answer_status, is_answer, show_status, parts, qsAll } = data.data;

            let paper = qsAll.map(item => {
                item['hasStuffText'] = !isEmpty(item.stuff.text);
                item['hasStuffAudio'] = !isEmpty(item.stuff.audio);
                item['hasStuffImg'] = !isEmpty(item.stuff.images);
                return item;
            });
            parts.forEach(item => {
                item.subjects.forEach(subject => {
                    Object.assign(paper.find(sub => sub.order === subject.order), subject);
                });
            });
            // 设置：请求参数 paper_type
            this.params.paper_type = paper_type;
            // 设置材料状态
            this.setParts(parts);
            this.setPaper(paper);
            // 合并题目数据与试卷数据

            // 存入本地缓存
            // 如版本有改变，重置题号及时间
            if (remaining !== 0 && !remaining) {
                remaining = 60;
            }
            if (paperType !== paper_type) {
                setStorage({currentOrder: 1});
                this.setCurrentIndex(1);
                if (paper_type === 1) {
                    remaining = 90;
                }
            }
            setStorage({
                remaining,
                // 答题状态
                hasAnswer: is_answer,
                // 交卷状态
                isAssignment: answer_status,
                // 报告状态
                hasReport: show_status
            });
            // wx.hideLoading();
            typeof cb === 'function' && cb(data);
        }
    },
    created() {
        this.init();
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>
