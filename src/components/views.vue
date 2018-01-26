<template>
<div class="views" ref="views">
    <div class="views-group" ref="viewsGroup">
        <slot></slot>
    </div>
</div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import {addClass} from '@/assets/js/dom';
import BScroll from 'better-scroll';

export default {
    props: {
        loop: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        ...mapGetters(['choose'])
    },
    methods: {
        ...mapMutations({
            setCurrentIndex: 'SET_CURRENT_INDEX',
            setChoose: 'SET_STATUS_CHOOSE',
        }),
        _initWidth(isInit) {
            this.children = this.$refs.viewsGroup.children;
            let width = 0;
            let subjectWidth = this.$refs.views.clientWidth;
            for (let i = 0; i < this.children.length; i++) {
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
            this.views.goToPage(1, 0, 0);

            this.views.on('scrollStart', () => {
                this.setChoose(false);
                this.updateViews();
            });
            this.views.on('scrollEnd', () => {
                this.setChoose(true);
                this.setCurrentIndex(this.views.getCurrentPage().pageX);
                this.$emit('change', this.views.getCurrentPage().pageX);
            });
        },
        nextView() {
            this.updateViews();
            this.timeout = setTimeout(() => {
                this.views && this.views.next(300, {});
                clearTimeout(this.timeout);
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
    },
    mounted() {
        setTimeout(() => {
            this._initWidth(true);
            this._initSubject();
        }, 20);
        window.addEventListener('resize', () => {
            if (!this.views) return;
            this._initWidth();
            this.refresh();
        });
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
