<template>
<div class="stuff" :class="stuffHeight">
    <scroll class="scroll" :data="isRead">
        <div>
            <div class="content">
                有材料
            </div>
        </div>
    </scroll>
    <div class="boundary" @click.prevent="toggleStuff"></div>
</div>
</template>

<script>
import Scroll from '@/basic/scroll';
import {mapGetters, mapMutations} from 'vuex';

export default {
    components: {Scroll},
    props: {
        stuff: {
            type: Object,
            default: null
        }
    },
    computed: {
        ...mapGetters(['isRead']),
        stuffHeight() {
            return this.isRead ? 'isRead' : '';
        }
    },
    methods: {
        ...mapMutations({
            setRead: 'SET_STATUS_READ'
        }),
        toggleStuff() {
            this.setRead(!this.isRead);
        }
    }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
@import '../assets/sass/util/variables';
@import '../assets/sass/util/mixins';

.stuff {
    position: relative;
    height: 30.9618vh;
    background-color: #eee;
    border-bottom: 1px solid #dcdcdc;
    .scroll {
        position: relative;
        height: 100%;
        overflow: hidden;
    }
    .content {
        padding: 4vw;
    }
    .boundary {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 2;
        width: 100vw;
        height: 2.5vh;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAAaCAYAAAAAEkYfAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAADWklEQVR42u3avXMbRRjH8e/ey96dLVuRgnROUIwzWirGVFAwqaAhBQzMUGDTUDuT/4A+VYYmw1BT5A+go+c/SNLxNDiQxLLHGSImimXpjgI7JMJ68wtnm+dT7u7t7GoerX6aW8OURMQDPgO+AD4AFoCZaedRagovgKfAPeAn4Afn3NNpJjDTDBaRm8CdOE6I4hhrLZ7nY8xU0yg1lTzPyfOM3d1dujs7dDrPybLslnPum0nnmLhCReROaO3NcrlCEARF7139j2VZRvvZH3Q6z78Hbjnnfhv3zEQVKyLfJTMzN8rlStF7VArP8yhfqBAEwVq7/Qzgxthnxg0QkdtJokWuTp/Z0hzJzMyaiHw7buzI6CIiXwVhePfixZrmcHUq5XnO1laLfq/3uXPux2Hjhp7oImKAu/PzF7TI1alljGF+vgywNmrcqOjydRwnWGuL3otSI0VRjI2ij0VkZdiYUYW+NlsqFb0HpSZSKs3BiFP9wEwiIu8EQfjgjVq96PUfyf1794tewpmy/O5y0Us4kq3NFr3e7rJz7sFg37ATfSVOkqLXrdRU9mr2wPgy7ET/pVZLna8vhtQZ0u/12NzcEOfc24N9/zrRReS9MLRa5OrM8YOAMLRORN4f7DsouqxqbFFn1bD48lp02buZ2K/VF/B9v+g1KzW1fr/PZusJgO+cy/bbB/PJNWutFvkRbG9v8+j3R+R5fqjnjTFcfvMy1Wq16K2cSb7vY62l2+1eA37ebx+MLitxolfLj6JardJ0zUO9aAttSNM1tciPaK+GV19texldRCQAduvpJTxv7F0vNUa/3+fh+kPa7fZE4+fm5riyeEV/TY9BlmW0Nh4DhM65Hrx+on9oo0iL/Jj4vs/S1SXq6fiXbvW0ztLVJS3yY+J5HlEUAXz0su2V/tUk1thy3NI0HVrE+1+GNE2LXua5MxhfDICIRMaYF7X6gp7oJ6Tb7bL+6zqdTgeAJElYfGtRL82dkCzL2Gw9Ic/z2Dm3s1/V1zW2nCxrLU3XpFKtUKlWDv2HVU3G8zzs3/HlOvwTXb7U2HLyjDE0Gg0ajYbe8f8P7NX0CoARkVljzJ/19JJ++OpcyfOc1sZj8jwvecAnURxrkatzxxhDFMcAn3rASqyxRZ1T+/HlLzmh0ntnIsWyAAAAAElFTkSuQmCC") no-repeat 50% 100%;
        background-size: auto 100%;
    }
    &.isRead {
        height: 75.2072vh;
        .boundary {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAAaCAMAAAA3zLYtAAAAflBMVEUAAADc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nz09ffHx8rc3Nzx8vTs7O7k5OXp6evz9Pbf4OHi4+Pu7/Hm5ufe3t7U1NfQ0NPNzdDKys0WkwKyAAAAGXRSTlMAlQJYTwmmjYT228W4sJ9uRT00Kxbm3YxgK8qvRAAAARJJREFUWMPV11mOgzAQRdEiEDLP6eF5xECm/W+wQSI0pJOPSNUSdRZgvY8r2aauUZJ+zvRAzT6WmyO9sNHOmgwDlRlbnqb0VJQbDJxx0fHZ8hIC+Ij++HIQoZzQgzgMNvK+LCTUpwsIYZfU8y0kl1oeU9eiAL9M6wz8igV1HAL4FRelLgX4hUNn+tSDnb+pyu0/Tu5eTHMDbkE1TuBm5tTaBzAzZ9U6GzALe7qbePCyV9VxteDl22tppA1YOfXAgZXRo2b6Locw+a6ZHnkI46N7L4N/7L4qZiuuFyDfUm1t8T7FCO+za6qMtZE33ehxNT0R9Gj85ZJqemohkE3rXoR8j/qyqphYZC+Ai2klshfArn4AuknCQ6I8zsAAAAAASUVORK5CYII=");
        }
    }
}
</style>
