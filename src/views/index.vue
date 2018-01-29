<template>
<div class="index">
    <router-link to="/quizzes">开始</router-link>
</div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex';
import {isEmpty, getStorage, setStorage} from '@/assets/js/utils';
import {postMode} from '@/assets/js/config';

const data = {
    data: {
        "answer_status": 0,
        "show_status": 0,
        "paper_type": 0,
        "duration": 0,
        "is_answer": 0,
        "last_answer_num": 0,
        "parts": [
            {
                "part": {
                    "id": 1,
                    "name": "PartⅠ：Vocabulary and Grammar "
                },
                "subjects": [
                    {
                        "order": 1,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 2,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 3,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 4,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 5,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 6,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 7,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 8,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 9,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 10,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 11,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 12,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 13,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 14,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 15,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 16,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 17,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 18,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 19,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 20,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 21,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 22,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 23,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 24,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 25,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 26,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 27,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 28,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 29,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 30,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 31,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 32,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 33,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 34,
                        "reply": "",
                        "right": "D"
                    },
                    {
                        "order": 35,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 36,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 37,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 38,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 39,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 40,
                        "reply": "",
                        "right": "D"
                    },
                    {
                        "order": 41,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 42,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 43,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 44,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 45,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 46,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 47,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 48,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 49,
                        "reply": "",
                        "right": "D"
                    },
                    {
                        "order": 50,
                        "reply": "",
                        "right": "A"
                    }
                ]
            },
            {
                "part": {
                    "id": 4,
                    "name": "PartⅡ: Speaking"
                },
                "subjects": [
                    {
                        "order": 51,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 52,
                        "reply": "",
                        "right": "D"
                    },
                    {
                        "order": 53,
                        "reply": "",
                        "right": "D"
                    },
                    {
                        "order": 54,
                        "reply": "",
                        "right": "D"
                    },
                    {
                        "order": 55,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 56,
                        "reply": "",
                        "right": "D"
                    },
                    {
                        "order": 57,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 58,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 59,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 60,
                        "reply": "",
                        "right": "D"
                    },
                    {
                        "order": 61,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 62,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 63,
                        "reply": "",
                        "right": "D"
                    },
                    {
                        "order": 64,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 65,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 66,
                        "reply": "",
                        "right": "D"
                    },
                    {
                        "order": 67,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 68,
                        "reply": "",
                        "right": "D"
                    }
                ]
            },
            {
                "part": {
                    "id": 10,
                    "name": "PartⅢ: Listening "
                },
                "subjects": [
                    {
                        "order": 69,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 70,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 71,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 72,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 73,
                        "reply": "",
                        "right": "D"
                    },
                    {
                        "order": 74,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 75,
                        "reply": "",
                        "right": "D"
                    },
                    {
                        "order": 76,
                        "reply": "",
                        "right": "field"
                    },
                    {
                        "order": 77,
                        "reply": "",
                        "right": "footbridge"
                    },
                    {
                        "order": 78,
                        "reply": "",
                        "right": "viewpoint"
                    },
                    {
                        "order": 79,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 80,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 81,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 82,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 83,
                        "reply": "",
                        "right": "people"
                    },
                    {
                        "order": 84,
                        "reply": "",
                        "right": "water,sand"
                    },
                    {
                        "order": 85,
                        "reply": "",
                        "right": "Scotland"
                    },
                    {
                        "order": 86,
                        "reply": "",
                        "right": "outside"
                    },
                    {
                        "order": 87,
                        "reply": "",
                        "right": "local"
                    },
                    {
                        "order": 88,
                        "reply": "",
                        "right": "tops"
                    }
                ]
            },
            {
                "part": {
                    "id": 19,
                    "name": "PartⅣ：Reading"
                },
                "subjects": [
                    {
                        "order": 89,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 90,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 91,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 92,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 93,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 94,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 95,
                        "reply": "",
                        "right": "C"
                    }
                ]
            },
            {
                "part": {
                    "id": 20,
                    "name": "Part Ⅴ：Writing Test  "
                },
                "subjects": [
                    {
                        "order": 96,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 97,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 98,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 99,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 100,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 101,
                        "reply": "",
                        "right": "G"
                    },
                    {
                        "order": 102,
                        "reply": "",
                        "right": "A"
                    },
                    {
                        "order": 103,
                        "reply": "",
                        "right": "E"
                    },
                    {
                        "order": 104,
                        "reply": "",
                        "right": "J"
                    },
                    {
                        "order": 105,
                        "reply": "",
                        "right": "I"
                    },
                    {
                        "order": 106,
                        "reply": "",
                        "right": "D"
                    },
                    {
                        "order": 107,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 108,
                        "reply": "",
                        "right": "C"
                    },
                    {
                        "order": 109,
                        "reply": "",
                        "right": "B"
                    },
                    {
                        "order": 110,
                        "reply": "",
                        "right": "C"
                    }
                ]
            }
        ],
        "qsAll": [
            {
                "part": 1,
                "order": 1,
                "title": "Adequate",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "满足"
                    },
                    {
                        "op_key": "B",
                        "op_content": "充足"
                    },
                    {
                        "op_key": "C",
                        "op_content": "富足"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 1,
                "order": 2,
                "title": "analysis",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "分析"
                    },
                    {
                        "op_key": "B",
                        "op_content": "赏析"
                    },
                    {
                        "op_key": "C",
                        "op_content": "辨析"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 3,
                "title": "clarify",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "确信"
                    },
                    {
                        "op_key": "B",
                        "op_content": "确保"
                    },
                    {
                        "op_key": "C",
                        "op_content": "明确"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 1,
                "order": 4,
                "title": "commitment",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "投入"
                    },
                    {
                        "op_key": "B",
                        "op_content": "投机"
                    },
                    {
                        "op_key": "C",
                        "op_content": "投射"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 5,
                "title": "declare",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "宣传"
                    },
                    {
                        "op_key": "B",
                        "op_content": "宣布"
                    },
                    {
                        "op_key": "C",
                        "op_content": "宣战"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 1,
                "order": 6,
                "title": "disturb",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "干涉"
                    },
                    {
                        "op_key": "B",
                        "op_content": "干愿"
                    },
                    {
                        "op_key": "C",
                        "op_content": "干扰"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 7,
                "title": "fierce",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "激动"
                    },
                    {
                        "op_key": "B",
                        "op_content": "激烈"
                    },
                    {
                        "op_key": "C",
                        "op_content": "激情"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 1,
                "order": 8,
                "title": "harbor  ",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "包庇"
                    },
                    {
                        "op_key": "B",
                        "op_content": "包容"
                    },
                    {
                        "op_key": "C",
                        "op_content": "包装"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 9,
                "title": "ignore",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "忽略"
                    },
                    {
                        "op_key": "B",
                        "op_content": "忽然"
                    },
                    {
                        "op_key": "C",
                        "op_content": "忽悠"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 10,
                "title": "leak",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "泄露"
                    },
                    {
                        "op_key": "B",
                        "op_content": "流露"
                    },
                    {
                        "op_key": "C",
                        "op_content": "雨露"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 11,
                "title": "mentally",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "精神上"
                    },
                    {
                        "op_key": "B",
                        "op_content": "神经上"
                    },
                    {
                        "op_key": "C",
                        "op_content": "心理上"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 12,
                "title": "modest",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "中心"
                    },
                    {
                        "op_key": "B",
                        "op_content": "中庸"
                    },
                    {
                        "op_key": "C",
                        "op_content": "中间"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 1,
                "order": 13,
                "title": "observe",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "观察  "
                    },
                    {
                        "op_key": "B",
                        "op_content": "观赏  "
                    },
                    {
                        "op_key": "C",
                        "op_content": "观点   "
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 14,
                "title": "optional",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "选择的"
                    },
                    {
                        "op_key": "B",
                        "op_content": "选举的"
                    },
                    {
                        "op_key": "C",
                        "op_content": "选拔的"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 15,
                "title": "patent",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "专业  "
                    },
                    {
                        "op_key": "B",
                        "op_content": "专长  "
                    },
                    {
                        "op_key": "C",
                        "op_content": "专利   "
                    },
                    {
                        "op_key": "D",
                        "op_content": " I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 1,
                "order": 16,
                "title": "preserve",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "保留  "
                    },
                    {
                        "op_key": "B",
                        "op_content": "保护  "
                    },
                    {
                        "op_key": "C",
                        "op_content": "保险   "
                    },
                    {
                        "op_key": "D",
                        "op_content": " I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 17,
                "title": "reveal",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "显示"
                    },
                    {
                        "op_key": "B",
                        "op_content": "展示"
                    },
                    {
                        "op_key": "C",
                        "op_content": "警示"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 18,
                "title": "routine",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "常规"
                    },
                    {
                        "op_key": "B",
                        "op_content": "常识"
                    },
                    {
                        "op_key": "C",
                        "op_content": "常项"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 19,
                "title": "scenery  ",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "颜色"
                    },
                    {
                        "op_key": "B",
                        "op_content": "润色"
                    },
                    {
                        "op_key": "C",
                        "op_content": "景色"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 1,
                "order": 20,
                "title": "splash",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "泼洒"
                    },
                    {
                        "op_key": "B",
                        "op_content": "倾泻"
                    },
                    {
                        "op_key": "C",
                        "op_content": "注入"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 21,
                "title": "switch",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "转帐"
                    },
                    {
                        "op_key": "B",
                        "op_content": "转移"
                    },
                    {
                        "op_key": "C",
                        "op_content": "转变"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 1,
                "order": 22,
                "title": "terminal",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "终点"
                    },
                    {
                        "op_key": "B",
                        "op_content": "重点"
                    },
                    {
                        "op_key": "C",
                        "op_content": "中点"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 23,
                "title": "thus",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "如果"
                    },
                    {
                        "op_key": "B",
                        "op_content": "如似"
                    },
                    {
                        "op_key": "C",
                        "op_content": "如此"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 1,
                "order": 24,
                "title": "tuition",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "学费"
                    },
                    {
                        "op_key": "B",
                        "op_content": "车费"
                    },
                    {
                        "op_key": "C",
                        "op_content": "餐费"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 25,
                "title": "tutor",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "教育"
                    },
                    {
                        "op_key": "B",
                        "op_content": "教学"
                    },
                    {
                        "op_key": "C",
                        "op_content": "教师"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 1,
                "order": 26,
                "title": "pernicious",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "有害的"
                    },
                    {
                        "op_key": "B",
                        "op_content": "有益的"
                    },
                    {
                        "op_key": "C",
                        "op_content": "有趣的"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 27,
                "title": "prohibit",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "禁止"
                    },
                    {
                        "op_key": "B",
                        "op_content": "停止"
                    },
                    {
                        "op_key": "C",
                        "op_content": "截止"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 28,
                "title": "detrimental",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "有益的"
                    },
                    {
                        "op_key": "B",
                        "op_content": "有趣的"
                    },
                    {
                        "op_key": "C",
                        "op_content": "有害的"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 1,
                "order": 29,
                "title": "ethos",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "神经"
                    },
                    {
                        "op_key": "B",
                        "op_content": "精神"
                    },
                    {
                        "op_key": "C",
                        "op_content": "回声"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 1,
                "order": 30,
                "title": "deteriorate",
                "type": 0,
                "note": "词汇测试：选择正确的释义",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "变化"
                    },
                    {
                        "op_key": "B",
                        "op_content": "转化"
                    },
                    {
                        "op_key": "C",
                        "op_content": "恶化"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 1,
                "order": 31,
                "title": "The newcomer went to the library the other day and searched for ____he could find about Mark Twain.",
                "type": 0,
                "note": "语法测试：选择正确的单词或句子",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "whatever"
                    },
                    {
                        "op_key": "B",
                        "op_content": "however"
                    },
                    {
                        "op_key": "C",
                        "op_content": "wherever"
                    },
                    {
                        "op_key": "D",
                        "op_content": "whichever"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 32,
                "title": "Maria has written two novels, both of ____have been made into television series.",
                "type": 0,
                "note": "语法测试：选择正确的单词或句子",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "which"
                    },
                    {
                        "op_key": "B",
                        "op_content": "what"
                    },
                    {
                        "op_key": "C",
                        "op_content": "that"
                    },
                    {
                        "op_key": "D",
                        "op_content": "them"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 33,
                "title": "We ____have bought so much food now that Suzie won’t be with us for dinner.",
                "type": 0,
                "note": "语法测试：选择正确的单词或句子",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "may not"
                    },
                    {
                        "op_key": "B",
                        "op_content": "needn’t"
                    },
                    {
                        "op_key": "C",
                        "op_content": "can’t"
                    },
                    {
                        "op_key": "D",
                        "op_content": "mustn’t"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 1,
                "order": 34,
                "title": "Traditionally, _____in New England on Thanksgiving Day.",
                "type": 0,
                "note": "语法测试：选择正确的单词或句子",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "is served sweet cider"
                    },
                    {
                        "op_key": "B",
                        "op_content": "when sweet cider is served"
                    },
                    {
                        "op_key": "C",
                        "op_content": "when served is sweet cider"
                    },
                    {
                        "op_key": "D",
                        "op_content": "sweet cider is served"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "D"
            },
            {
                "part": 1,
                "order": 35,
                "title": "In 1964____of Henry Ossawa Tanner’s paintings was shown at the Smithsonian Institution.",
                "type": 0,
                "note": "语法测试：选择正确的单词或句子",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "a major collection"
                    },
                    {
                        "op_key": "B",
                        "op_content": "that a major collection"
                    },
                    {
                        "op_key": "C",
                        "op_content": "a collection was major"
                    },
                    {
                        "op_key": "D",
                        "op_content": "was a major collection"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 36,
                "title": "Sarah made ____to the airport just in time to catch her plane this morning.",
                "type": 0,
                "note": "语法测试：选择正确的单词或句子",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "it"
                    },
                    {
                        "op_key": "B",
                        "op_content": "this"
                    },
                    {
                        "op_key": "C",
                        "op_content": "that"
                    },
                    {
                        "op_key": "D",
                        "op_content": "herself"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 37,
                "title": "I don’t know about you, but I’m sick and tired of this weather.   ______.I can’t stand all this rain.",
                "type": 0,
                "note": "语法测试：选择正确的单词或句子",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "So am I"
                    },
                    {
                        "op_key": "B",
                        "op_content": "I don’t care"
                    },
                    {
                        "op_key": "C",
                        "op_content": "It’s hard to say"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I hope not"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 38,
                "title": "Having finished her project, she was invited by the school _____to the new students.",
                "type": 0,
                "note": "语法测试：选择正确的单词或句子",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "to speak"
                    },
                    {
                        "op_key": "B",
                        "op_content": "to have spoken"
                    },
                    {
                        "op_key": "C",
                        "op_content": "having spoken"
                    },
                    {
                        "op_key": "D",
                        "op_content": "speaking"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 39,
                "title": "Bicycling is good exercise; _____, it does not pollute the air.",
                "type": 0,
                "note": "语法测试：选择正确的单词或句子",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "otherwise"
                    },
                    {
                        "op_key": "B",
                        "op_content": "besides"
                    },
                    {
                        "op_key": "C",
                        "op_content": "nevertheless"
                    },
                    {
                        "op_key": "D",
                        "op_content": "therefore"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 1,
                "order": 40,
                "title": "He missed ___gold in the high jump, but will get __second chance in the long jump.",
                "type": 0,
                "note": "语法测试：选择正确的单词或句子",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "/ ; a"
                    },
                    {
                        "op_key": "B",
                        "op_content": "the; the"
                    },
                    {
                        "op_key": "C",
                        "op_content": "a ; /"
                    },
                    {
                        "op_key": "D",
                        "op_content": "The; a"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "D"
            },
            {
                "part": 1,
                "order": 41,
                "title": "Queen Elizabeth Ⅱ is often thought to be the richest woman in the world._____,her personal wealth seems rather small.",
                "type": 0,
                "note": "语法测试：选择正确的单词或句子",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "Otherwise"
                    },
                    {
                        "op_key": "B",
                        "op_content": "However"
                    },
                    {
                        "op_key": "C",
                        "op_content": "Altogether"
                    },
                    {
                        "op_key": "D",
                        "op_content": "Besides"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 1,
                "order": 42,
                "title": "The greater population there is in a locality, ____for water, transportation, and disposal of refuse.",
                "type": 0,
                "note": "语法测试：选择正确的单词或句子",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "the greater the need there is"
                    },
                    {
                        "op_key": "B",
                        "op_content": "greater need"
                    },
                    {
                        "op_key": "C",
                        "op_content": "is there great need"
                    },
                    {
                        "op_key": "D",
                        "op_content": "the great need"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 1,
                "order": 43,
                "title": "It was not until I came here ____I realized this place was famous, for not only its beauty but also its weather.",
                "type": 0,
                "note": "语法测试：选择正确的单词或句子",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "who"
                    },
                    {
                        "op_key": "B",
                        "op_content": "that"
                    },
                    {
                        "op_key": "C",
                        "op_content": "before"
                    },
                    {
                        "op_key": "D",
                        "op_content": "where"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 1,
                "order": 44,
                "title": "Look！Somebody ____the sofa. \r\nWell, it wasn’t me. I didn’t do it.",
                "type": 0,
                "note": "语法测试：选择正确的单词或句子",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "was cleaning"
                    },
                    {
                        "op_key": "B",
                        "op_content": "has cleaned"
                    },
                    {
                        "op_key": "C",
                        "op_content": "had cleaned"
                    },
                    {
                        "op_key": "D",
                        "op_content": "is cleaning"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 1,
                "order": 45,
                "title": "I hear ____boys in your school like playing football in their spare time, though others prefer basketball.",
                "type": 0,
                "note": "语法测试：选择正确的单词或句子",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "quite a bit"
                    },
                    {
                        "op_key": "B",
                        "op_content": "quite a lot"
                    },
                    {
                        "op_key": "C",
                        "op_content": "quite a few"
                    },
                    {
                        "op_key": "D",
                        "op_content": "quite a little"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 1,
                "order": 46,
                "title": "This restaurant was’t ____that other restaurant we went to.",
                "type": 0,
                "note": "语法测试：选择正确的单词或句子",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "as good as half"
                    },
                    {
                        "op_key": "B",
                        "op_content": "as half good as"
                    },
                    {
                        "op_key": "C",
                        "op_content": "half as good as"
                    },
                    {
                        "op_key": "D",
                        "op_content": "good as half as"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 1,
                "order": 47,
                "title": "They ____have arrived at lunchtime but their flight was delayed.",
                "type": 0,
                "note": "语法测试：选择正确的单词或句子",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "can"
                    },
                    {
                        "op_key": "B",
                        "op_content": "should"
                    },
                    {
                        "op_key": "C",
                        "op_content": "must"
                    },
                    {
                        "op_key": "D",
                        "op_content": "will"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 1,
                "order": 48,
                "title": "All the scientific evidence _____that increasing use of chemicals in farming ____damaging our health.",
                "type": 0,
                "note": "语法测试：选择正确的单词或句子",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "shows; are"
                    },
                    {
                        "op_key": "B",
                        "op_content": "shows; is"
                    },
                    {
                        "op_key": "C",
                        "op_content": "show; is"
                    },
                    {
                        "op_key": "D",
                        "op_content": "show; are"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 1,
                "order": 49,
                "title": "One’s life has value ____one brings value to the life of others.",
                "type": 0,
                "note": "语法测试：选择正确的单词或句子",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "except that"
                    },
                    {
                        "op_key": "B",
                        "op_content": "no matter how"
                    },
                    {
                        "op_key": "C",
                        "op_content": "so that"
                    },
                    {
                        "op_key": "D",
                        "op_content": "as long as"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "D"
            },
            {
                "part": 1,
                "order": 50,
                "title": "Of the millions who saw Haley’s comet in 1986,how many people _____long enough to see it return in the twenty-first century ?",
                "type": 0,
                "note": "语法测试：选择正确的单词或句子",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "will live"
                    },
                    {
                        "op_key": "B",
                        "op_content": "will they live"
                    },
                    {
                        "op_key": "C",
                        "op_content": "living"
                    },
                    {
                        "op_key": "D",
                        "op_content": "they will be living"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 4,
                "order": 51,
                "title": "It’s open to everyone, but students pay an annual fee that’s much less than the general public pay.",
                "type": 0,
                "note": "口语试题：划分正确停顿方式",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "It’s open to /everyone, but students pay an / annual fee that’s much/ less than the general public pay."
                    },
                    {
                        "op_key": "B",
                        "op_content": "It’s open to everyone,/ but students pay an annual fee/ that’s much less than the general public pay."
                    },
                    {
                        "op_key": "C",
                        "op_content": "It’s/ open to everyone, but students/ pay an annual fee that’s much less than the/ general public pay."
                    },
                    {
                        "op_key": "D",
                        "op_content": "It’s open/ to everyone, but students pay an annual fee that’s much less than the general public pay."
                    },
                    {
                        "op_key": "E",
                        "op_content": "我不确定"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 4,
                "order": 52,
                "title": "It’s a training resource - a collection of materials for people to study on their own, or use in their own organizations.",
                "type": 0,
                "note": "口语试题：划分正确停顿方式",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "It’s a training /resource - a collection of materials for /people to study on their own, or/ use in their own organizations."
                    },
                    {
                        "op_key": "B",
                        "op_content": "It’s a training resource/ - a collection /of materials for/ people to study /on their own, or use in their own organizations."
                    },
                    {
                        "op_key": "C",
                        "op_content": "It’s a training resource - a collection of /materials for people to study on their own, or/ use in their own organizations."
                    },
                    {
                        "op_key": "D",
                        "op_content": "It’s a training resource /- a collection of materials/ for people to study on their own/, or use in their own organizations."
                    },
                    {
                        "op_key": "E",
                        "op_content": "我不确定"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "D"
            },
            {
                "part": 4,
                "order": 53,
                "title": "I’ve decided to enroll on a part- time management course.",
                "type": 0,
                "note": "口语试题：划分正确停顿方式",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "I’ve /decided to enroll on a/ part- time management /course."
                    },
                    {
                        "op_key": "B",
                        "op_content": "I’ve decided/ to/ enroll on a part- time management course."
                    },
                    {
                        "op_key": "C",
                        "op_content": "I’ve decided to enroll on a/ part- time management course."
                    },
                    {
                        "op_key": "D",
                        "op_content": "I’ve decided to enroll /on a part- time management course."
                    },
                    {
                        "op_key": "E",
                        "op_content": "我不确定"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "D"
            },
            {
                "part": 4,
                "order": 54,
                "title": "Provided you warn the refectory in advance, it won’t be a problem.",
                "type": 0,
                "note": "口语试题：划分正确停顿方式",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "Provided you warn the /refectory in/ advance, it won’t be a problem."
                    },
                    {
                        "op_key": "B",
                        "op_content": "Provided you warn the/ refectory in advance, it won’t be a problem."
                    },
                    {
                        "op_key": "C",
                        "op_content": "Provided you warn the refectory in advance, /it /won’t be a problem."
                    },
                    {
                        "op_key": "D",
                        "op_content": "Provided/ you warn the refectory/ in advance, /it won’t be a problem."
                    },
                    {
                        "op_key": "E",
                        "op_content": "我不确定"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "D"
            },
            {
                "part": 4,
                "order": 55,
                "title": "Then she’s eligible to join the nursery, which is supervised by a qualified Nursery Nurse.",
                "type": 0,
                "note": "口语试题：划分正确停顿方式",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "Then she’s /eligible to join the/ nursery, which is supervised by a/ qualified Nursery Nurse."
                    },
                    {
                        "op_key": "B",
                        "op_content": "Then /she’s eligible to join the nursery, which is supervised by a qualified Nursery Nurse."
                    },
                    {
                        "op_key": "C",
                        "op_content": "Then /she’s eligible to join the nursery, /which is supervised/ by a qualified Nursery Nurse."
                    },
                    {
                        "op_key": "D",
                        "op_content": "Then she’s/ eligible /to join the/ nursery, which is/ supervised by a/ qualified Nursery Nurse."
                    },
                    {
                        "op_key": "E",
                        "op_content": "我不确定"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 4,
                "order": 56,
                "title": "S(a)tisfy",
                "type": 0,
                "note": "口语试题：选择与题目单词括号中字母读音一致的单词",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "arriv(a)l"
                    },
                    {
                        "op_key": "B",
                        "op_content": "t(a)le"
                    },
                    {
                        "op_key": "C",
                        "op_content": "b(a)lance"
                    },
                    {
                        "op_key": "D",
                        "op_content": "p(a)ssage"
                    },
                    {
                        "op_key": "E",
                        "op_content": "我不确定"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "D"
            },
            {
                "part": 4,
                "order": 57,
                "title": "Bo(th)er",
                "type": 0,
                "note": "口语试题：选择与题目单词括号中字母读音一致的单词",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "fai(th)"
                    },
                    {
                        "op_key": "B",
                        "op_content": "me(th)od"
                    },
                    {
                        "op_key": "C",
                        "op_content": "nor(th)ern"
                    },
                    {
                        "op_key": "D",
                        "op_content": "(th)reat"
                    },
                    {
                        "op_key": "E",
                        "op_content": "我不确定"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 4,
                "order": 58,
                "title": "B(ow)",
                "type": 0,
                "note": "口语试题：选择与题目单词括号中字母读音一致的单词",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "s(ow)"
                    },
                    {
                        "op_key": "B",
                        "op_content": "sh(ow)er"
                    },
                    {
                        "op_key": "C",
                        "op_content": "fl(ow)"
                    },
                    {
                        "op_key": "D",
                        "op_content": "gr(ow)n"
                    },
                    {
                        "op_key": "E",
                        "op_content": "我不确定"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 4,
                "order": 59,
                "title": "Pr(o)ve",
                "type": 0,
                "note": "口语试题：选择与题目单词括号中字母读音一致的单词",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "n(o)d"
                    },
                    {
                        "op_key": "B",
                        "op_content": "pl(o)t"
                    },
                    {
                        "op_key": "C",
                        "op_content": "rem(o)ve"
                    },
                    {
                        "op_key": "D",
                        "op_content": "r(o)ll"
                    },
                    {
                        "op_key": "E",
                        "op_content": "我不确定"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 4,
                "order": 60,
                "title": "Surfa(c)e",
                "type": 0,
                "note": "口语试题：选择与题目单词括号中字母读音一致的单词",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "dis(c)overy"
                    },
                    {
                        "op_key": "B",
                        "op_content": "(c)ondition"
                    },
                    {
                        "op_key": "C",
                        "op_content": "spe(c)ial"
                    },
                    {
                        "op_key": "D",
                        "op_content": "(c)ertain"
                    },
                    {
                        "op_key": "E",
                        "op_content": "我不确定"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "D"
            },
            {
                "part": 4,
                "order": 61,
                "title": "More importantly it’s full of equipment that’s ______to collect data. So, it can help us in building up a profile of different factors which work together within the world’s oceans.",
                "type": 0,
                "note": "口语试题：选择划线部分中应该填入的词汇。",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "occupied"
                    },
                    {
                        "op_key": "B",
                        "op_content": "greatly"
                    },
                    {
                        "op_key": "C",
                        "op_content": "designed"
                    },
                    {
                        "op_key": "D",
                        "op_content": "doubtful"
                    },
                    {
                        "op_key": "E",
                        "op_content": "我不确定"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 4,
                "order": 62,
                "title": "After about five hours on the surface the float _____sinks, beginning the whole process again.",
                "type": 0,
                "note": "口语试题：选择划线部分中应该填入的词汇。",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "wonderfully"
                    },
                    {
                        "op_key": "B",
                        "op_content": "automatically"
                    },
                    {
                        "op_key": "C",
                        "op_content": "normally"
                    },
                    {
                        "op_key": "D",
                        "op_content": "perfectly"
                    },
                    {
                        "op_key": "E",
                        "op_content": "我不确定"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 4,
                "order": 63,
                "title": "I’m struck by the awesome beauty of the place. It’s _____but you can really only visit it in the summer months.",
                "type": 0,
                "note": "口语试题：选择划线部分中应该填入的词汇。",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "awful"
                    },
                    {
                        "op_key": "B",
                        "op_content": "observant"
                    },
                    {
                        "op_key": "C",
                        "op_content": "stingy"
                    },
                    {
                        "op_key": "D",
                        "op_content": "magnificent"
                    },
                    {
                        "op_key": "E",
                        "op_content": "我不确定"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "D"
            },
            {
                "part": 4,
                "order": 64,
                "title": "how can you be______ of this?",
                "type": 0,
                "note": "口语试题：选择划线部分中应该填入的词汇。",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "known"
                    },
                    {
                        "op_key": "B",
                        "op_content": "ooze"
                    },
                    {
                        "op_key": "C",
                        "op_content": "certain"
                    },
                    {
                        "op_key": "D",
                        "op_content": "awareness"
                    },
                    {
                        "op_key": "E",
                        "op_content": "我不确定"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 4,
                "order": 65,
                "title": "Apes get a large ______of their food by ‘fishing’ ants from ant hills.",
                "type": 0,
                "note": "口语试题：选择划线部分中应该填入的词汇。",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "proportion"
                    },
                    {
                        "op_key": "B",
                        "op_content": "chart"
                    },
                    {
                        "op_key": "C",
                        "op_content": "mass"
                    },
                    {
                        "op_key": "D",
                        "op_content": "mess"
                    },
                    {
                        "op_key": "E",
                        "op_content": "我不确定"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 4,
                "order": 66,
                "title": "ren·o·va·tion",
                "type": 0,
                "note": "口语试题：请选择单词重音标注正确的选项。",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "ren"
                    },
                    {
                        "op_key": "B",
                        "op_content": "o"
                    },
                    {
                        "op_key": "C",
                        "op_content": "tion"
                    },
                    {
                        "op_key": "D",
                        "op_content": "va"
                    },
                    {
                        "op_key": "E",
                        "op_content": "我不确定"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "D"
            },
            {
                "part": 4,
                "order": 67,
                "title": "en·dur·ance",
                "type": 0,
                "note": "口语试题：请选择单词重音标注正确的选项。",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "ance"
                    },
                    {
                        "op_key": "B",
                        "op_content": "en"
                    },
                    {
                        "op_key": "C",
                        "op_content": "dur"
                    },
                    {
                        "op_key": "D",
                        "op_content": "dur·ance"
                    },
                    {
                        "op_key": "E",
                        "op_content": "我不确定"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 4,
                "order": 68,
                "title": "res·i·den·cy",
                "type": 0,
                "note": "口语试题：请选择单词重音标注正确的选项。",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "cy"
                    },
                    {
                        "op_key": "B",
                        "op_content": "den"
                    },
                    {
                        "op_key": "C",
                        "op_content": "i"
                    },
                    {
                        "op_key": "D",
                        "op_content": "res"
                    },
                    {
                        "op_key": "E",
                        "op_content": "我不确定"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "D"
            },
            {
                "part": 10,
                "order": 69,
                "title": "When the writer Sebastian George first saw Rosewood House, he",
                "type": 0,
                "note": "SECTION 2:Choose the correct letter, A, B or C.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "thought he might rent it."
                    },
                    {
                        "op_key": "B",
                        "op_content": "felt it was too expensive for him."
                    },
                    {
                        "op_key": "C",
                        "op_content": "was unsure whether to buy it."
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "THE HISTORY OF ROSEWOOD HOUSE"
                        ],
                        "content": ""
                    },
                    "audio": [
                        "https://stream.jiemo.net/Upload/exams/audio/20180104020447557.mp3"
                    ],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": true,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 10,
                "order": 70,
                "title": "Before buying the house, George had",
                "type": 0,
                "note": "SECTION 2:Choose the correct letter, A, B or C.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "experienced severe family problems."
                    },
                    {
                        "op_key": "B",
                        "op_content": "struggled to become a successful author."
                    },
                    {
                        "op_key": "C",
                        "op_content": "suffered a serious illness."
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "THE HISTORY OF ROSEWOOD HOUSE"
                        ],
                        "content": ""
                    },
                    "audio": [
                        "https://stream.jiemo.net/Upload/exams/audio/20180104020447557.mp3"
                    ],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": true,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 10,
                "order": 71,
                "title": "According to the speaker, George viewed Rosewood House as",
                "type": 0,
                "note": "SECTION 2:Choose the correct letter, A, B or C.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "a rich source of material for his books."
                    },
                    {
                        "op_key": "B",
                        "op_content": "a way to escape from his work."
                    },
                    {
                        "op_key": "C",
                        "op_content": "a typical building of the region."
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "THE HISTORY OF ROSEWOOD HOUSE"
                        ],
                        "content": ""
                    },
                    "audio": [
                        "https://stream.jiemo.net/Upload/exams/audio/20180104020447557.mp3"
                    ],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": true,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 10,
                "order": 72,
                "title": "Pear Alley",
                "type": 0,
                "note": "SECTION 2:Label the map below.Write the correct letter, A-J",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "J"
                    },
                    {
                        "op_key": "B",
                        "op_content": "H"
                    },
                    {
                        "op_key": "C",
                        "op_content": "I"
                    },
                    {
                        "op_key": "D",
                        "op_content": "G"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "ROSEWOOD HOUSE AND GARDENS"
                        ],
                        "content": ""
                    },
                    "audio": [
                        "https://stream.jiemo.net/Upload/exams/audio/20180104020447557.mp3"
                    ],
                    "images": [
                        "https://foobar.jiemo.net/Upload/exams/images/20180104111201843.png"
                    ]
                },
                "hasStuffText": true,
                "hasStuffAudio": true,
                "hasStuffImg": true,
                "reply": "",
                "right": "B"
            },
            {
                "part": 10,
                "order": 73,
                "title": "Mulberry Garden",
                "type": 0,
                "note": "SECTION 2:Label the map below.Write the correct letter, A-J",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "C"
                    },
                    {
                        "op_key": "B",
                        "op_content": "D"
                    },
                    {
                        "op_key": "C",
                        "op_content": "E"
                    },
                    {
                        "op_key": "D",
                        "op_content": "F"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "ROSEWOOD HOUSE AND GARDENS"
                        ],
                        "content": ""
                    },
                    "audio": [
                        "https://stream.jiemo.net/Upload/exams/audio/20180104020447557.mp3"
                    ],
                    "images": [
                        "https://foobar.jiemo.net/Upload/exams/images/20180104111201843.png"
                    ]
                },
                "hasStuffText": true,
                "hasStuffAudio": true,
                "hasStuffImg": true,
                "reply": "",
                "right": "D"
            },
            {
                "part": 10,
                "order": 74,
                "title": "Shop",
                "type": 0,
                "note": "SECTION 2:Label the map below.Write the correct letter, A-J",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "A"
                    },
                    {
                        "op_key": "B",
                        "op_content": "B"
                    },
                    {
                        "op_key": "C",
                        "op_content": "C"
                    },
                    {
                        "op_key": "D",
                        "op_content": "D"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "ROSEWOOD HOUSE AND GARDENS"
                        ],
                        "content": ""
                    },
                    "audio": [
                        "https://stream.jiemo.net/Upload/exams/audio/20180104020447557.mp3"
                    ],
                    "images": [
                        "https://foobar.jiemo.net/Upload/exams/images/20180104111201843.png"
                    ]
                },
                "hasStuffText": true,
                "hasStuffAudio": true,
                "hasStuffImg": true,
                "reply": "",
                "right": "B"
            },
            {
                "part": 10,
                "order": 75,
                "title": "Tea Room",
                "type": 0,
                "note": "SECTION 2:Label the map below.Write the correct letter, A-J",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "A"
                    },
                    {
                        "op_key": "B",
                        "op_content": "B"
                    },
                    {
                        "op_key": "C",
                        "op_content": "C"
                    },
                    {
                        "op_key": "D",
                        "op_content": "D"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "ROSEWOOD HOUSE AND GARDENS"
                        ],
                        "content": ""
                    },
                    "audio": [
                        "https://stream.jiemo.net/Upload/exams/audio/20180104020447557.mp3"
                    ],
                    "images": [
                        "https://foobar.jiemo.net/Upload/exams/images/20180104111201843.png"
                    ]
                },
                "hasStuffText": true,
                "hasStuffAudio": true,
                "hasStuffImg": true,
                "reply": "",
                "right": "D"
            },
            {
                "part": 10,
                "order": 76,
                "title": "You can walk through the ______that goes along the river bank.",
                "type": 1,
                "note": "SECTION 2:Complete the sentences below.Write ONE WORD ONLY for each answer.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "field"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "RIVER WALK"
                        ],
                        "content": ""
                    },
                    "audio": [
                        "https://stream.jiemo.net/Upload/exams/audio/20180104020447557.mp3"
                    ],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": true,
                "hasStuffImg": false,
                "reply": "",
                "right": "field"
            },
            {
                "part": 10,
                "order": 77,
                "title": "You can go over the _____and then into a wooded area.",
                "type": 1,
                "note": "SECTION 2:Complete the sentences below.Write ONE WORD ONLY for each answer.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "footbridge"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "RIVER WALK"
                        ],
                        "content": ""
                    },
                    "audio": [
                        "https://stream.jiemo.net/Upload/exams/audio/20180104020447557.mp3"
                    ],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": true,
                "hasStuffImg": false,
                "reply": "",
                "right": "footbridge"
            },
            {
                "part": 10,
                "order": 78,
                "title": "On your way back, you could also go up to the_________",
                "type": 1,
                "note": "SECTION 2:Complete the sentences below.Write ONE WORD ONLY for each answer.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "viewpoint"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "RIVER WALK"
                        ],
                        "content": ""
                    },
                    "audio": [
                        "https://stream.jiemo.net/Upload/exams/audio/20180104020447557.mp3"
                    ],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": true,
                "hasStuffImg": false,
                "reply": "",
                "right": "viewpoint"
            },
            {
                "part": 10,
                "order": 79,
                "title": "According to the speaker, it is not clear",
                "type": 0,
                "note": "SECTION 4:Choose the correct letter, A, B or C.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "when the farming economy was introduced to Ireland."
                    },
                    {
                        "op_key": "B",
                        "op_content": "why people began to farm in Ireland."
                    },
                    {
                        "op_key": "C",
                        "op_content": "where the early Irish farmers came from."
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "IRELAND IN THE NEOLITHIC PERIOD"
                        ],
                        "content": ""
                    },
                    "audio": [
                        "https://stream.jiemo.net/Upload/exams/audio/20180104020521903.mp3"
                    ],
                    "images": [
                        "https://foobar.jiemo.net/Upload/exams/images/20180104111212798.png"
                    ]
                },
                "hasStuffText": true,
                "hasStuffAudio": true,
                "hasStuffImg": true,
                "reply": "",
                "right": "C"
            },
            {
                "part": 10,
                "order": 80,
                "title": "What point does the speaker make about breeding animals in Neolithic Ireland?",
                "type": 0,
                "note": "SECTION 4:Choose the correct letter, A, B or C.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "Their numbers must have been above a certain level."
                    },
                    {
                        "op_key": "B",
                        "op_content": "They were under threat from wild animals."
                    },
                    {
                        "op_key": "C",
                        "op_content": "Some species died out during this period."
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "IRELAND IN THE NEOLITHIC PERIOD"
                        ],
                        "content": ""
                    },
                    "audio": [
                        "https://stream.jiemo.net/Upload/exams/audio/20180104020521903.mp3"
                    ],
                    "images": [
                        "https://foobar.jiemo.net/Upload/exams/images/20180104111212798.png"
                    ]
                },
                "hasStuffText": true,
                "hasStuffAudio": true,
                "hasStuffImg": true,
                "reply": "",
                "right": "A"
            },
            {
                "part": 10,
                "order": 81,
                "title": "What does the speaker say about the transportation of animals?",
                "type": 0,
                "note": "SECTION 4:Choose the correct letter, A, B or C.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "Livestock would have limited the distance the farmers could sail."
                    },
                    {
                        "op_key": "B",
                        "op_content": "Neolithic boats were too primitive to have been used."
                    },
                    {
                        "op_key": "C",
                        "op_content": "Probably only a few breeding animals were imported."
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "IRELAND IN THE NEOLITHIC PERIOD"
                        ],
                        "content": ""
                    },
                    "audio": [
                        "https://stream.jiemo.net/Upload/exams/audio/20180104020521903.mp3"
                    ],
                    "images": [
                        "https://foobar.jiemo.net/Upload/exams/images/20180104111212798.png"
                    ]
                },
                "hasStuffText": true,
                "hasStuffAudio": true,
                "hasStuffImg": true,
                "reply": "",
                "right": "A"
            },
            {
                "part": 10,
                "order": 82,
                "title": "What is the main evidence for cereal crops in Neolithic Ireland?",
                "type": 0,
                "note": "SECTION 4:Choose the correct letter, A, B or C.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "the remains of burnt grain in pots"
                    },
                    {
                        "op_key": "B",
                        "op_content": "the marks left on pots by grains"
                    },
                    {
                        "op_key": "C",
                        "op_content": "the patterns painted on the surface of pots"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "IRELAND IN THE NEOLITHIC PERIOD"
                        ],
                        "content": ""
                    },
                    "audio": [
                        "https://stream.jiemo.net/Upload/exams/audio/20180104020521903.mp3"
                    ],
                    "images": [
                        "https://foobar.jiemo.net/Upload/exams/images/20180104111212798.png"
                    ]
                },
                "hasStuffText": true,
                "hasStuffAudio": true,
                "hasStuffImg": true,
                "reply": "",
                "right": "B"
            },
            {
                "part": 10,
                "order": 83,
                "title": "Ploughs could either have been pulled by _______ or by cattle.",
                "type": 1,
                "note": "SECTION 4:Complete the sentences below.Write NO MORE THAN TWO WORDS for each answer.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "people"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "STONE TOOLS"
                        ],
                        "content": ""
                    },
                    "audio": [
                        "https://stream.jiemo.net/Upload/exams/audio/20180104020521903.mp3"
                    ],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": true,
                "hasStuffImg": false,
                "reply": "",
                "right": "people"
            },
            {
                "part": 10,
                "order": 84,
                "title": "（The farmers needed homes which were permanent dwellings.）\r\nIn the final stages of axe-making,  _______ and _______ were necessary\r\nfor grinding and polishing.\r\n两个单词，请用逗号隔开",
                "type": 1,
                "note": "SECTION 4:Complete the sentences below.Write NO MORE THAN TWO WORDS for each answer.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "water,sand"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "STONE TOOLS"
                        ],
                        "content": ""
                    },
                    "audio": [
                        "https://stream.jiemo.net/Upload/exams/audio/20180104020521903.mp3"
                    ],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": true,
                "hasStuffImg": false,
                "reply": "",
                "right": "water,sand"
            },
            {
                "part": 10,
                "order": 85,
                "title": "Irish axes were exported from Ireland to ________ and England.",
                "type": 1,
                "note": "SECTION 4:Complete the sentences below.Write NO MORE THAN TWO WORDS for each answer.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "Scotland"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "STONE TOOLS"
                        ],
                        "content": ""
                    },
                    "audio": [
                        "https://stream.jiemo.net/Upload/exams/audio/20180104020521903.mp3"
                    ],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": true,
                "hasStuffImg": false,
                "reply": "",
                "right": "Scotland"
            },
            {
                "part": 10,
                "order": 86,
                "title": "（The colonisers used clay to make pots.）\r\nThe  ______ of the pots was often polished to make them watertight.",
                "type": 1,
                "note": "SECTION 4:Complete the sentences below.Write NO MORE THAN TWO WORDS for each answer.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "outside"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "POTTERY MAKING"
                        ],
                        "content": ""
                    },
                    "audio": [
                        "https://stream.jiemo.net/Upload/exams/audio/20180104020521903.mp3"
                    ],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": true,
                "hasStuffImg": false,
                "reply": "",
                "right": "outside"
            },
            {
                "part": 10,
                "order": 87,
                "title": "Clay from ______ areas was generally used.",
                "type": 1,
                "note": "SECTION 4:Complete the sentences below.Write NO MORE THAN TWO WORDS for each answer.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "local"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "POTTERY MAKING"
                        ],
                        "content": ""
                    },
                    "audio": [
                        "https://stream.jiemo.net/Upload/exams/audio/20180104020521903.mp3"
                    ],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": true,
                "hasStuffImg": false,
                "reply": "",
                "right": "local"
            },
            {
                "part": 10,
                "order": 88,
                "title": "Decoration was only put around the _______ of the earliest pots.",
                "type": 1,
                "note": "SECTION 4:Complete the sentences below.Write NO MORE THAN TWO WORDS for each answer.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "tops"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "POTTERY MAKING"
                        ],
                        "content": ""
                    },
                    "audio": [
                        "https://stream.jiemo.net/Upload/exams/audio/20180104020521903.mp3"
                    ],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": true,
                "hasStuffImg": false,
                "reply": "",
                "right": "tops"
            },
            {
                "part": 19,
                "order": 89,
                "title": "Michael Faraday was the first person to recognise Perkin's ability as a student of chemistry.",
                "type": 0,
                "note": "TRUE:\t\tif the statement agrees with the information\r\nFALSE :\t\tif the statement contradicts the information \r\nNOT GIVEN: \tif there is no information on this",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "TRUE"
                    },
                    {
                        "op_key": "B",
                        "op_content": "FALSE"
                    },
                    {
                        "op_key": "C",
                        "op_content": "NOT GIVEN"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "William Henry Perkin",
                            "The man who invented synthetic dyes"
                        ],
                        "content": "William Henry Perkin was born on March 12, 1838, in London, England. As a boy, Perkin's curiosity prompted early interests in the arts, sciences, photography, and engineering. But it was a chance stumbling upon a run-down, yet functional, laboratory in his late grandfather's home that solidified the young man's enthusiasm for chemistry.\r\n\r\nAs a student at the City of London School, Perkin became immersed in the study of chemistry. His talent and devotion to the subject were perceived by his teacher, Thomas Hall, who encouraged him to attend a series of lectures given by the eminent scientist Michael Faraday at the Royal Institution. Those speeches fired the young chemist's enthusiasm further, and he later went on to attend the Royal College of Chemistry, which he succeeded in entering in 1853, at the age of 15.\r\n\r\nAt the time of Perkin's enrolment, the Royal College of Chemistry was headed by the noted German chemist August Wilhelm Hofmann. Perkin's scientific gifts soon caught Hofmann's attention and, within two years, he became Hofmann's youngest assistant. Not long after that, Perkin made the scientific breakthrough that would bring him both fame and fortune.\r\n\r\nAt the time, quinine was the only viable medical treatment for malaria. The drug is derived from the bark of the cinchona tree, native to South America, and by 1856 demand for the drug was surpassing the available supply. Thus, when Hofmann made some passing comments about the desirability of a synthetic substitute for quinine, it was unsurprising that his star pupil was moved to take up the challenge.\r\n\r\nDuring his vacation in 1856, Perkin spent his time in the laboratory on the top floor of his family's house. He was attempting to manufacture quinine from aniline, an inexpensive and readily available coal tar waste product. Despite his best efforts, however, he did not end up with quinine. Instead, he produced a mysterious dark sludge. Luckily, Perkin's scientific training and nature prompted him to investigate the substance further. Incorporating potassium dichromate and alcohol into the aniline at various stages of the experimental process, he finally produced a deep purple solution. And, proving the truth of the famous scientist Louis Pasteur's words 'chance favours only the prepared mind', Perkin saw the potential of his unexpected find.\r\n\r\n"
                    },
                    "audio": [],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 19,
                "order": 90,
                "title": "Michael Faraday suggested Perkin should enrol in the Royal College of Chemistry.",
                "type": 0,
                "note": "TRUE:\t\tif the statement agrees with the information\r\nFALSE :\t\tif the statement contradicts the information \r\nNOT GIVEN: \tif there is no information on this",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "TRUE"
                    },
                    {
                        "op_key": "B",
                        "op_content": "FALSE"
                    },
                    {
                        "op_key": "C",
                        "op_content": "NOT GIVEN"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "William Henry Perkin",
                            "The man who invented synthetic dyes"
                        ],
                        "content": "William Henry Perkin was born on March 12, 1838, in London, England. As a boy, Perkin's curiosity prompted early interests in the arts, sciences, photography, and engineering. But it was a chance stumbling upon a run-down, yet functional, laboratory in his late grandfather's home that solidified the young man's enthusiasm for chemistry.\r\n\r\nAs a student at the City of London School, Perkin became immersed in the study of chemistry. His talent and devotion to the subject were perceived by his teacher, Thomas Hall, who encouraged him to attend a series of lectures given by the eminent scientist Michael Faraday at the Royal Institution. Those speeches fired the young chemist's enthusiasm further, and he later went on to attend the Royal College of Chemistry, which he succeeded in entering in 1853, at the age of 15.\r\n\r\nAt the time of Perkin's enrolment, the Royal College of Chemistry was headed by the noted German chemist August Wilhelm Hofmann. Perkin's scientific gifts soon caught Hofmann's attention and, within two years, he became Hofmann's youngest assistant. Not long after that, Perkin made the scientific breakthrough that would bring him both fame and fortune.\r\n\r\nAt the time, quinine was the only viable medical treatment for malaria. The drug is derived from the bark of the cinchona tree, native to South America, and by 1856 demand for the drug was surpassing the available supply. Thus, when Hofmann made some passing comments about the desirability of a synthetic substitute for quinine, it was unsurprising that his star pupil was moved to take up the challenge.\r\n\r\nDuring his vacation in 1856, Perkin spent his time in the laboratory on the top floor of his family's house. He was attempting to manufacture quinine from aniline, an inexpensive and readily available coal tar waste product. Despite his best efforts, however, he did not end up with quinine. Instead, he produced a mysterious dark sludge. Luckily, Perkin's scientific training and nature prompted him to investigate the substance further. Incorporating potassium dichromate and alcohol into the aniline at various stages of the experimental process, he finally produced a deep purple solution. And, proving the truth of the famous scientist Louis Pasteur's words 'chance favours only the prepared mind', Perkin saw the potential of his unexpected find.\r\n\r\n"
                    },
                    "audio": [],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 19,
                "order": 91,
                "title": "Perkin employed August Wilhelm Hofmann as his assistant.",
                "type": 0,
                "note": "TRUE:\t\tif the statement agrees with the information\r\nFALSE :\t\tif the statement contradicts the information \r\nNOT GIVEN: \tif there is no information on this",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "TRUE"
                    },
                    {
                        "op_key": "B",
                        "op_content": "FALSE"
                    },
                    {
                        "op_key": "C",
                        "op_content": "NOT GIVEN"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "William Henry Perkin",
                            "The man who invented synthetic dyes"
                        ],
                        "content": "William Henry Perkin was born on March 12, 1838, in London, England. As a boy, Perkin's curiosity prompted early interests in the arts, sciences, photography, and engineering. But it was a chance stumbling upon a run-down, yet functional, laboratory in his late grandfather's home that solidified the young man's enthusiasm for chemistry.\r\n\r\nAs a student at the City of London School, Perkin became immersed in the study of chemistry. His talent and devotion to the subject were perceived by his teacher, Thomas Hall, who encouraged him to attend a series of lectures given by the eminent scientist Michael Faraday at the Royal Institution. Those speeches fired the young chemist's enthusiasm further, and he later went on to attend the Royal College of Chemistry, which he succeeded in entering in 1853, at the age of 15.\r\n\r\nAt the time of Perkin's enrolment, the Royal College of Chemistry was headed by the noted German chemist August Wilhelm Hofmann. Perkin's scientific gifts soon caught Hofmann's attention and, within two years, he became Hofmann's youngest assistant. Not long after that, Perkin made the scientific breakthrough that would bring him both fame and fortune.\r\n\r\nAt the time, quinine was the only viable medical treatment for malaria. The drug is derived from the bark of the cinchona tree, native to South America, and by 1856 demand for the drug was surpassing the available supply. Thus, when Hofmann made some passing comments about the desirability of a synthetic substitute for quinine, it was unsurprising that his star pupil was moved to take up the challenge.\r\n\r\nDuring his vacation in 1856, Perkin spent his time in the laboratory on the top floor of his family's house. He was attempting to manufacture quinine from aniline, an inexpensive and readily available coal tar waste product. Despite his best efforts, however, he did not end up with quinine. Instead, he produced a mysterious dark sludge. Luckily, Perkin's scientific training and nature prompted him to investigate the substance further. Incorporating potassium dichromate and alcohol into the aniline at various stages of the experimental process, he finally produced a deep purple solution. And, proving the truth of the famous scientist Louis Pasteur's words 'chance favours only the prepared mind', Perkin saw the potential of his unexpected find.\r\n\r\n"
                    },
                    "audio": [],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 19,
                "order": 92,
                "title": "Perkin was still young when he made the discovery that made him rich and famous.",
                "type": 0,
                "note": "TRUE:\t\tif the statement agrees with the information\r\nFALSE :\t\tif the statement contradicts the information \r\nNOT GIVEN: \tif there is no information on this",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "TRUE"
                    },
                    {
                        "op_key": "B",
                        "op_content": "FALSE"
                    },
                    {
                        "op_key": "C",
                        "op_content": "NOT GIVEN"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "William Henry Perkin",
                            "The man who invented synthetic dyes"
                        ],
                        "content": "William Henry Perkin was born on March 12, 1838, in London, England. As a boy, Perkin's curiosity prompted early interests in the arts, sciences, photography, and engineering. But it was a chance stumbling upon a run-down, yet functional, laboratory in his late grandfather's home that solidified the young man's enthusiasm for chemistry.\r\n\r\nAs a student at the City of London School, Perkin became immersed in the study of chemistry. His talent and devotion to the subject were perceived by his teacher, Thomas Hall, who encouraged him to attend a series of lectures given by the eminent scientist Michael Faraday at the Royal Institution. Those speeches fired the young chemist's enthusiasm further, and he later went on to attend the Royal College of Chemistry, which he succeeded in entering in 1853, at the age of 15.\r\n\r\nAt the time of Perkin's enrolment, the Royal College of Chemistry was headed by the noted German chemist August Wilhelm Hofmann. Perkin's scientific gifts soon caught Hofmann's attention and, within two years, he became Hofmann's youngest assistant. Not long after that, Perkin made the scientific breakthrough that would bring him both fame and fortune.\r\n\r\nAt the time, quinine was the only viable medical treatment for malaria. The drug is derived from the bark of the cinchona tree, native to South America, and by 1856 demand for the drug was surpassing the available supply. Thus, when Hofmann made some passing comments about the desirability of a synthetic substitute for quinine, it was unsurprising that his star pupil was moved to take up the challenge.\r\n\r\nDuring his vacation in 1856, Perkin spent his time in the laboratory on the top floor of his family's house. He was attempting to manufacture quinine from aniline, an inexpensive and readily available coal tar waste product. Despite his best efforts, however, he did not end up with quinine. Instead, he produced a mysterious dark sludge. Luckily, Perkin's scientific training and nature prompted him to investigate the substance further. Incorporating potassium dichromate and alcohol into the aniline at various stages of the experimental process, he finally produced a deep purple solution. And, proving the truth of the famous scientist Louis Pasteur's words 'chance favours only the prepared mind', Perkin saw the potential of his unexpected find.\r\n\r\n"
                    },
                    "audio": [],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 19,
                "order": 93,
                "title": "The trees from which quinine is derived grow only in South America.",
                "type": 0,
                "note": "TRUE:\t\tif the statement agrees with the information\r\nFALSE :\t\tif the statement contradicts the information \r\nNOT GIVEN: \tif there is no information on this",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "TRUE"
                    },
                    {
                        "op_key": "B",
                        "op_content": "FALSE"
                    },
                    {
                        "op_key": "C",
                        "op_content": "NOT GIVEN"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "William Henry Perkin",
                            "The man who invented synthetic dyes"
                        ],
                        "content": "William Henry Perkin was born on March 12, 1838, in London, England. As a boy, Perkin's curiosity prompted early interests in the arts, sciences, photography, and engineering. But it was a chance stumbling upon a run-down, yet functional, laboratory in his late grandfather's home that solidified the young man's enthusiasm for chemistry.\r\n\r\nAs a student at the City of London School, Perkin became immersed in the study of chemistry. His talent and devotion to the subject were perceived by his teacher, Thomas Hall, who encouraged him to attend a series of lectures given by the eminent scientist Michael Faraday at the Royal Institution. Those speeches fired the young chemist's enthusiasm further, and he later went on to attend the Royal College of Chemistry, which he succeeded in entering in 1853, at the age of 15.\r\n\r\nAt the time of Perkin's enrolment, the Royal College of Chemistry was headed by the noted German chemist August Wilhelm Hofmann. Perkin's scientific gifts soon caught Hofmann's attention and, within two years, he became Hofmann's youngest assistant. Not long after that, Perkin made the scientific breakthrough that would bring him both fame and fortune.\r\n\r\nAt the time, quinine was the only viable medical treatment for malaria. The drug is derived from the bark of the cinchona tree, native to South America, and by 1856 demand for the drug was surpassing the available supply. Thus, when Hofmann made some passing comments about the desirability of a synthetic substitute for quinine, it was unsurprising that his star pupil was moved to take up the challenge.\r\n\r\nDuring his vacation in 1856, Perkin spent his time in the laboratory on the top floor of his family's house. He was attempting to manufacture quinine from aniline, an inexpensive and readily available coal tar waste product. Despite his best efforts, however, he did not end up with quinine. Instead, he produced a mysterious dark sludge. Luckily, Perkin's scientific training and nature prompted him to investigate the substance further. Incorporating potassium dichromate and alcohol into the aniline at various stages of the experimental process, he finally produced a deep purple solution. And, proving the truth of the famous scientist Louis Pasteur's words 'chance favours only the prepared mind', Perkin saw the potential of his unexpected find.\r\n\r\n"
                    },
                    "audio": [],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 19,
                "order": 94,
                "title": "Perkin hoped to manufacture a drug from a coal tar waste product.",
                "type": 0,
                "note": "TRUE:\t\tif the statement agrees with the information\r\nFALSE :\t\tif the statement contradicts the information \r\nNOT GIVEN: \tif there is no information on this",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "TRUE"
                    },
                    {
                        "op_key": "B",
                        "op_content": "FALSE"
                    },
                    {
                        "op_key": "C",
                        "op_content": "NOT GIVEN"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "William Henry Perkin",
                            "The man who invented synthetic dyes"
                        ],
                        "content": "William Henry Perkin was born on March 12, 1838, in London, England. As a boy, Perkin's curiosity prompted early interests in the arts, sciences, photography, and engineering. But it was a chance stumbling upon a run-down, yet functional, laboratory in his late grandfather's home that solidified the young man's enthusiasm for chemistry.\r\n\r\nAs a student at the City of London School, Perkin became immersed in the study of chemistry. His talent and devotion to the subject were perceived by his teacher, Thomas Hall, who encouraged him to attend a series of lectures given by the eminent scientist Michael Faraday at the Royal Institution. Those speeches fired the young chemist's enthusiasm further, and he later went on to attend the Royal College of Chemistry, which he succeeded in entering in 1853, at the age of 15.\r\n\r\nAt the time of Perkin's enrolment, the Royal College of Chemistry was headed by the noted German chemist August Wilhelm Hofmann. Perkin's scientific gifts soon caught Hofmann's attention and, within two years, he became Hofmann's youngest assistant. Not long after that, Perkin made the scientific breakthrough that would bring him both fame and fortune.\r\n\r\nAt the time, quinine was the only viable medical treatment for malaria. The drug is derived from the bark of the cinchona tree, native to South America, and by 1856 demand for the drug was surpassing the available supply. Thus, when Hofmann made some passing comments about the desirability of a synthetic substitute for quinine, it was unsurprising that his star pupil was moved to take up the challenge.\r\n\r\nDuring his vacation in 1856, Perkin spent his time in the laboratory on the top floor of his family's house. He was attempting to manufacture quinine from aniline, an inexpensive and readily available coal tar waste product. Despite his best efforts, however, he did not end up with quinine. Instead, he produced a mysterious dark sludge. Luckily, Perkin's scientific training and nature prompted him to investigate the substance further. Incorporating potassium dichromate and alcohol into the aniline at various stages of the experimental process, he finally produced a deep purple solution. And, proving the truth of the famous scientist Louis Pasteur's words 'chance favours only the prepared mind', Perkin saw the potential of his unexpected find.\r\n\r\n"
                    },
                    "audio": [],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 19,
                "order": 95,
                "title": "Perkin was inspired by the discoveries of the famous scientist Louis Pasteur.",
                "type": 0,
                "note": "TRUE:\t\tif the statement agrees with the information\r\nFALSE :\t\tif the statement contradicts the information \r\nNOT GIVEN: \tif there is no information on this",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "TRUE"
                    },
                    {
                        "op_key": "B",
                        "op_content": "FALSE"
                    },
                    {
                        "op_key": "C",
                        "op_content": "NOT GIVEN"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "William Henry Perkin",
                            "The man who invented synthetic dyes"
                        ],
                        "content": "William Henry Perkin was born on March 12, 1838, in London, England. As a boy, Perkin's curiosity prompted early interests in the arts, sciences, photography, and engineering. But it was a chance stumbling upon a run-down, yet functional, laboratory in his late grandfather's home that solidified the young man's enthusiasm for chemistry.\r\n\r\nAs a student at the City of London School, Perkin became immersed in the study of chemistry. His talent and devotion to the subject were perceived by his teacher, Thomas Hall, who encouraged him to attend a series of lectures given by the eminent scientist Michael Faraday at the Royal Institution. Those speeches fired the young chemist's enthusiasm further, and he later went on to attend the Royal College of Chemistry, which he succeeded in entering in 1853, at the age of 15.\r\n\r\nAt the time of Perkin's enrolment, the Royal College of Chemistry was headed by the noted German chemist August Wilhelm Hofmann. Perkin's scientific gifts soon caught Hofmann's attention and, within two years, he became Hofmann's youngest assistant. Not long after that, Perkin made the scientific breakthrough that would bring him both fame and fortune.\r\n\r\nAt the time, quinine was the only viable medical treatment for malaria. The drug is derived from the bark of the cinchona tree, native to South America, and by 1856 demand for the drug was surpassing the available supply. Thus, when Hofmann made some passing comments about the desirability of a synthetic substitute for quinine, it was unsurprising that his star pupil was moved to take up the challenge.\r\n\r\nDuring his vacation in 1856, Perkin spent his time in the laboratory on the top floor of his family's house. He was attempting to manufacture quinine from aniline, an inexpensive and readily available coal tar waste product. Despite his best efforts, however, he did not end up with quinine. Instead, he produced a mysterious dark sludge. Luckily, Perkin's scientific training and nature prompted him to investigate the substance further. Incorporating potassium dichromate and alcohol into the aniline at various stages of the experimental process, he finally produced a deep purple solution. And, proving the truth of the famous scientist Louis Pasteur's words 'chance favours only the prepared mind', Perkin saw the potential of his unexpected find.\r\n\r\n"
                    },
                    "audio": [],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 20,
                "order": 96,
                "title": "Cost of teaching everyone the language",
                "type": 0,
                "note": "请判断下述观点与题目之间的逻辑关联",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "Argument for"
                    },
                    {
                        "op_key": "B",
                        "op_content": "Argument against"
                    },
                    {
                        "op_key": "C",
                        "op_content": "Irrelevant idea"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "Section 1"
                        ],
                        "content": "An international language would remove one of the main differences which separate people of different nationalities and this would lead to greater international understanding and co-operation. There should be one international language which everyone agrees to learn and speak.\r\nTo what extent do you agree or disagree?\r\n\r\n"
                    },
                    "audio": [],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 20,
                "order": 97,
                "title": "Many languages already have a large number of words in common.",
                "type": 0,
                "note": "请判断下述观点与题目之间的逻辑关联",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "Argument for"
                    },
                    {
                        "op_key": "B",
                        "op_content": "Argument against"
                    },
                    {
                        "op_key": "C",
                        "op_content": "Irrelevant idea"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "Section 1"
                        ],
                        "content": "An international language would remove one of the main differences which separate people of different nationalities and this would lead to greater international understanding and co-operation. There should be one international language which everyone agrees to learn and speak.\r\nTo what extent do you agree or disagree?\r\n\r\n"
                    },
                    "audio": [],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 20,
                "order": 98,
                "title": "Interpreters and translators would lose their jobs.",
                "type": 0,
                "note": "请判断下述观点与题目之间的逻辑关联",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "Argument for"
                    },
                    {
                        "op_key": "B",
                        "op_content": "Argument against"
                    },
                    {
                        "op_key": "C",
                        "op_content": "Irrelevant idea"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "Section 1"
                        ],
                        "content": "An international language would remove one of the main differences which separate people of different nationalities and this would lead to greater international understanding and co-operation. There should be one international language which everyone agrees to learn and speak.\r\nTo what extent do you agree or disagree?\r\n\r\n"
                    },
                    "audio": [],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 20,
                "order": 99,
                "title": "Many people enjoy learning new languages.",
                "type": 0,
                "note": "请判断下述观点与题目之间的逻辑关联",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "Argument for"
                    },
                    {
                        "op_key": "B",
                        "op_content": "Argument against"
                    },
                    {
                        "op_key": "C",
                        "op_content": "Irrelevant idea"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "Section 1"
                        ],
                        "content": "An international language would remove one of the main differences which separate people of different nationalities and this would lead to greater international understanding and co-operation. There should be one international language which everyone agrees to learn and speak.\r\nTo what extent do you agree or disagree?\r\n\r\n"
                    },
                    "audio": [],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 20,
                "order": 100,
                "title": "Reduce nationalism",
                "type": 0,
                "note": "请判断下述观点与题目之间的逻辑关联",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "Argument for"
                    },
                    {
                        "op_key": "B",
                        "op_content": "Argument against"
                    },
                    {
                        "op_key": "C",
                        "op_content": "Irrelevant idea"
                    },
                    {
                        "op_key": "D",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "Section 1"
                        ],
                        "content": "An international language would remove one of the main differences which separate people of different nationalities and this would lead to greater international understanding and co-operation. There should be one international language which everyone agrees to learn and speak.\r\nTo what extent do you agree or disagree?\r\n\r\n"
                    },
                    "audio": [],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 20,
                "order": 101,
                "title": "101",
                "type": 0,
                "note": "Choose the correct letter, A~K.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "daimed"
                    },
                    {
                        "op_key": "B",
                        "op_content": "reduce"
                    },
                    {
                        "op_key": "C",
                        "op_content": "intimated"
                    },
                    {
                        "op_key": "D",
                        "op_content": "operated"
                    },
                    {
                        "op_key": "E",
                        "op_content": "exposed"
                    },
                    {
                        "op_key": "F",
                        "op_content": "switched"
                    },
                    {
                        "op_key": "G",
                        "op_content": "known"
                    },
                    {
                        "op_key": "H",
                        "op_content": "increase"
                    },
                    {
                        "op_key": "I",
                        "op_content": "agreed"
                    },
                    {
                        "op_key": "J",
                        "op_content": "introduced"
                    },
                    {
                        "op_key": "K",
                        "op_content": "I don’t konw"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "Section 2"
                        ],
                        "content": "There are some persuassive arguments in favour of restricting ownership. \r\nFirstly, radio wave emissions from mobile phones are____101___to affect brain activity and some scientists are worried about the effects this may have on the health of children who use such phones. It is____102__ _that fewer people would be___103___to these risks if restriction were___104____. Furthermore, it is generally ___105___that such measures would reduce the number of traffic accidents caused by people talking on their moblie phones."
                    },
                    "audio": [],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "G"
            },
            {
                "part": 20,
                "order": 102,
                "title": "102",
                "type": 0,
                "note": "Choose the correct letter, A~K.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "daimed"
                    },
                    {
                        "op_key": "B",
                        "op_content": "reduce"
                    },
                    {
                        "op_key": "C",
                        "op_content": "intimated"
                    },
                    {
                        "op_key": "D",
                        "op_content": "operated"
                    },
                    {
                        "op_key": "E",
                        "op_content": "exposed"
                    },
                    {
                        "op_key": "F",
                        "op_content": "switched"
                    },
                    {
                        "op_key": "G",
                        "op_content": "known"
                    },
                    {
                        "op_key": "H",
                        "op_content": "increase"
                    },
                    {
                        "op_key": "I",
                        "op_content": "agreed"
                    },
                    {
                        "op_key": "J",
                        "op_content": "introduced"
                    },
                    {
                        "op_key": "K",
                        "op_content": "I don’t konw"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "Section 2"
                        ],
                        "content": "There are some persuassive arguments in favour of restricting ownership. \r\nFirstly, radio wave emissions from mobile phones are____101___to affect brain activity and some scientists are worried about the effects this may have on the health of children who use such phones. It is____102__ _that fewer people would be___103___to these risks if restriction were___104____. Furthermore, it is generally ___105___that such measures would reduce the number of traffic accidents caused by people talking on their moblie phones."
                    },
                    "audio": [],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "A"
            },
            {
                "part": 20,
                "order": 103,
                "title": "103",
                "type": 0,
                "note": "Choose the correct letter, A~K.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "daimed"
                    },
                    {
                        "op_key": "B",
                        "op_content": "reduce"
                    },
                    {
                        "op_key": "C",
                        "op_content": "intimated"
                    },
                    {
                        "op_key": "D",
                        "op_content": "operated"
                    },
                    {
                        "op_key": "E",
                        "op_content": "exposed"
                    },
                    {
                        "op_key": "F",
                        "op_content": "switched"
                    },
                    {
                        "op_key": "G",
                        "op_content": "known"
                    },
                    {
                        "op_key": "H",
                        "op_content": "increase"
                    },
                    {
                        "op_key": "I",
                        "op_content": "agreed"
                    },
                    {
                        "op_key": "J",
                        "op_content": "introduced"
                    },
                    {
                        "op_key": "K",
                        "op_content": "I don’t konw"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "Section 2"
                        ],
                        "content": "There are some persuassive arguments in favour of restricting ownership. \r\nFirstly, radio wave emissions from mobile phones are____101___to affect brain activity and some scientists are worried about the effects this may have on the health of children who use such phones. It is____102__ _that fewer people would be___103___to these risks if restriction were___104____. Furthermore, it is generally ___105___that such measures would reduce the number of traffic accidents caused by people talking on their moblie phones."
                    },
                    "audio": [],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "E"
            },
            {
                "part": 20,
                "order": 104,
                "title": "104",
                "type": 0,
                "note": "Choose the correct letter, A~K.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "daimed"
                    },
                    {
                        "op_key": "B",
                        "op_content": "reduce"
                    },
                    {
                        "op_key": "C",
                        "op_content": "intimated"
                    },
                    {
                        "op_key": "D",
                        "op_content": "operated"
                    },
                    {
                        "op_key": "E",
                        "op_content": "exposed"
                    },
                    {
                        "op_key": "F",
                        "op_content": "switched"
                    },
                    {
                        "op_key": "G",
                        "op_content": "known"
                    },
                    {
                        "op_key": "H",
                        "op_content": "increase"
                    },
                    {
                        "op_key": "I",
                        "op_content": "agreed"
                    },
                    {
                        "op_key": "J",
                        "op_content": "introduced"
                    },
                    {
                        "op_key": "K",
                        "op_content": "I don’t konw"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "Section 2"
                        ],
                        "content": "There are some persuassive arguments in favour of restricting ownership. \r\nFirstly, radio wave emissions from mobile phones are____101___to affect brain activity and some scientists are worried about the effects this may have on the health of children who use such phones. It is____102__ _that fewer people would be___103___to these risks if restriction were___104____. Furthermore, it is generally ___105___that such measures would reduce the number of traffic accidents caused by people talking on their moblie phones."
                    },
                    "audio": [],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "J"
            },
            {
                "part": 20,
                "order": 105,
                "title": "105",
                "type": 0,
                "note": "Choose the correct letter, A~K.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "daimed"
                    },
                    {
                        "op_key": "B",
                        "op_content": "reduce"
                    },
                    {
                        "op_key": "C",
                        "op_content": "intimated"
                    },
                    {
                        "op_key": "D",
                        "op_content": "operated"
                    },
                    {
                        "op_key": "E",
                        "op_content": "exposed"
                    },
                    {
                        "op_key": "F",
                        "op_content": "switched"
                    },
                    {
                        "op_key": "G",
                        "op_content": "known"
                    },
                    {
                        "op_key": "H",
                        "op_content": "increase"
                    },
                    {
                        "op_key": "I",
                        "op_content": "agreed"
                    },
                    {
                        "op_key": "J",
                        "op_content": "introduced"
                    },
                    {
                        "op_key": "K",
                        "op_content": "I don’t konw"
                    }
                ],
                "stuff": {
                    "text": {
                        "title": [
                            "Section 2"
                        ],
                        "content": "There are some persuassive arguments in favour of restricting ownership. \r\nFirstly, radio wave emissions from mobile phones are____101___to affect brain activity and some scientists are worried about the effects this may have on the health of children who use such phones. It is____102__ _that fewer people would be___103___to these risks if restriction were___104____. Furthermore, it is generally ___105___that such measures would reduce the number of traffic accidents caused by people talking on their moblie phones."
                    },
                    "audio": [],
                    "images": []
                },
                "hasStuffText": true,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "I"
            },
            {
                "part": 20,
                "order": 106,
                "title": "The destruction of forest habitats has______many animal species to die out.",
                "type": 0,
                "note": "Choose the correct letter, A~E.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "resulted in"
                    },
                    {
                        "op_key": "B",
                        "op_content": "brought about"
                    },
                    {
                        "op_key": "C",
                        "op_content": "given rise to"
                    },
                    {
                        "op_key": "D",
                        "op_content": "led"
                    },
                    {
                        "op_key": "E",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "D"
            },
            {
                "part": 20,
                "order": 107,
                "title": "In many parts of the world, once fertile land is turning into semi-desert_______intensive farming methods.",
                "type": 0,
                "note": "Choose the correct letter, A~E.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "leading to"
                    },
                    {
                        "op_key": "B",
                        "op_content": "owing to"
                    },
                    {
                        "op_key": "C",
                        "op_content": "since"
                    },
                    {
                        "op_key": "D",
                        "op_content": "resulting in"
                    },
                    {
                        "op_key": "E",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 20,
                "order": 108,
                "title": "Accidents at sea involving large oil tankers have often_______environmental damage on a huge scale。",
                "type": 0,
                "note": "Choose the correct letter, A~E.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "stemmed from"
                    },
                    {
                        "op_key": "B",
                        "op_content": "been caused by"
                    },
                    {
                        "op_key": "C",
                        "op_content": "given rise to"
                    },
                    {
                        "op_key": "D",
                        "op_content": "been due to"
                    },
                    {
                        "op_key": "E",
                        "op_content": "I don’t konw"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            },
            {
                "part": 20,
                "order": 109,
                "title": "Zoos can sometimes help prevent certain species from becoming extinct_______ they can breed the animals in captivity.",
                "type": 0,
                "note": "Choose the correct letter, A~E.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "owing to"
                    },
                    {
                        "op_key": "B",
                        "op_content": "because"
                    },
                    {
                        "op_key": "C",
                        "op_content": "due to"
                    },
                    {
                        "op_key": "D",
                        "op_content": "on account to"
                    },
                    {
                        "op_key": "E",
                        "op_content": "I don’t know"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "B"
            },
            {
                "part": 20,
                "order": 110,
                "title": "Poor air quality in urban areas is known to have______an increase in breathing disorders such as asthma.",
                "type": 0,
                "note": "Choose the correct letter, A~E.",
                "options": [
                    {
                        "op_key": "A",
                        "op_content": "stemmed form"
                    },
                    {
                        "op_key": "B",
                        "op_content": "resulted from"
                    },
                    {
                        "op_key": "C",
                        "op_content": "resulted in"
                    },
                    {
                        "op_key": "D",
                        "op_content": "been due to"
                    },
                    {
                        "op_key": "E",
                        "op_content": "I don’t konw"
                    }
                ],
                "stuff": {
                    "text": [],
                    "audio": [],
                    "images": []
                },
                "hasStuffText": false,
                "hasStuffAudio": false,
                "hasStuffImg": false,
                "reply": "",
                "right": "C"
            }
        ]
    }
};

export default {
    data() {
        return {};
    },
    methods: {
        ...mapMutations({
            setType: 'SET_TYPE',
            setParts: 'SET_PARTS',
            setPaper: 'SET_PAPER',
            setLength: 'SET_LENGTH',
            setPart: 'SET_PART',
            setCurrentIndex: 'SET_CURRENT_INDEX',
            setHasAnswer: 'SET_STATUS_HAS_ANSWER',
            setHasReport: 'SET_STATUS_HAS_REPORT',
            setStarted: 'SET_STATUS_STARTED',
            setAssignment: 'SET_STATUS_ASSIGNMENT'
        }),
        ...mapActions([
            'initData'
        ])
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>
