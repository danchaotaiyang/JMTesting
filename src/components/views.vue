<template>
<div class="views" ref="views">
    <div class="views-group" ref="viewsGroup">
        <slot></slot>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll';
import {mapGetters, mapMutations} from 'vuex';
import {addClass} from '@/assets/js/dom';
let t1, t2;
export default {
    props: {
        loop: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        ...mapGetters(['length', 'currentOrder', 'currentIndex', 'choose'])
    },
    methods: {
        ...mapMutations({
            setCurrentIndex: 'SET_CURRENT_INDEX',
            setChoose: 'SET_STATUS_CHOOSE',
        }),
        _initWidth(isInit) {
            this.children = this.$refs.viewsGroup.children;
            let width = 0, length = this.children.length;
            let subjectWidth = this.$refs.views.clientWidth;
            for (let i = 0; i < length; i++) {
                let child = this.children[i];
                addClass(child, 'subject');
                child.style.width = subjectWidth + 'px';
                width += subjectWidth;
            }
            if (this.loop && isInit) {
                width += 2 * subjectWidth;
            }
            this.$refs.viewsGroup.style.width = width + 'px';
        },
        _initSubject() {
            this.views = new BScroll(this.$refs.views, {
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
            // 默认选择当前为第一题
            this.views.goToPage(typeof this.currentIndex === 'undefined' ? 1 : this.currentIndex, 0, 0);
            this.views.on('scrollStart', this.updateViews);
            this.views.on('scrollEnd', () => {
                let pageX = this.views.getCurrentPage().pageX;
                console.log(this.currentIndex,pageX);
                if (this.currentIndex === pageX) {
                    return;
                }
                this.setCurrentIndex(pageX);
                this.$emit('change', pageX);
                t1 = setTimeout(() => {
                    this.setChoose(true);
                    clearTimeout(t1);
                }, 500);
            });
        },
        nextView() {
            if (this.currentOrder === this.length) {
                return;
            }
            this.updateViews();
            t2 = setTimeout(() => {
                this.views && this.views.next(500, {});
                clearTimeout(t2);
            }, 500);
        },
        refresh() {
            this.views && this.views.refresh();
        },
        updateViews() {
            this.children[0].innerHTML = this.children[3].innerHTML;
            this.children[4].innerHTML = this.children[1].innerHTML;
        }
    },
    created() {
        setTimeout(() => {
            this._initWidth(true);
            this._initSubject();
        }, 20);
        window.addEventListener('resize', () => {
            if (!this.views) return;
            this._initWidth();
            this.refresh();
        });
    },
    mounted() {

    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.views {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .views-group {
        height: 100%;
    }
}
.subject {
    float: left;
    height: 100%;
}
</style>
