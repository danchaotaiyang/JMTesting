<template>
<div class="subjects" ref="subjects">
    <div class="subjects-group" ref="subjectsGroup">
        <slot></slot>
    </div>
</div>
</template>

<script>
import {addClass} from '@/assets/js/dom';
import BScroll from 'better-scroll';

export default {
    props: {
        loop: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        _initWidth(isInit) {
            this.children = this.$refs.subjectsGroup.children;
            let width = 0;
            let subjectWidth = this.$refs.subjects.clientWidth;
            for (let i = 0; i < this.children.length; i++) {
                let child = this.children[i];
                addClass(child, 'subject');
                child.style.width = subjectWidth + 'px';
                width += subjectWidth;
            }
            if (this.loop && isInit) {
                width += 2 * subjectWidth;
            }
            this.$refs.subjectsGroup.style.width = width + 'px';
        },
        _initSubject() {
            this.subjects = new BScroll(this.$refs.subjects, {
                scrollX: true,
                scrollY: false,
                momentum: false,
                autoPlay: false,
                snap: {
                    loop: this.loop,
                    threshold: 0.3,
                    speed: 300
                }
            });
            this.subjects.on('scrollEnd', () => {
                this.$emit('change', this.subjects.getCurrentPage().pageX);
            });
            this.subjects.goToPage(1, 0, 0);
        },
        next() {
            this.subjects && this.subjects.next(300, {});
        },
        refresh() {
            this.subjects && this.subjects.refresh();
        }
    },
    created() {
    },
    mounted() {
        setTimeout(() => {
            this._initWidth(true);
            this._initSubject();
        }, 20);
        window.addEventListener('resize', () => {
            if (!this.subjects) return;
            this._initWidth();
            this.refresh();
        });
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.subjects {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .subjects-group {
        height: 100%;
    }
}
.subject {
    float: left;
    height: 100%;
}
</style>
