<template>
    <div class="bubble-sort">
        <ArrayEl
            v-bind:arr="demoArray"
            v-bind:iter="iteration"
            v-bind:cur="cursor"
        />
        <button @click="start">start</button>
    </div>
</template>

<script>
import ArrayEl from '../../elements/ArrayEl.vue';

export default {
    components: {
        ArrayEl
    },

    data() {
        return {
            demoArray: [
                {value: 6,  current_pos: 0},
                {value: 2,  current_pos: 1},
                {value: 5,  current_pos: 2},
                {value: 8,  current_pos: 3},
                {value: 1,  current_pos: 4},
                {value: 3,  current_pos: 5},
                {value: 4,  current_pos: 6},
                {value: 7,  current_pos: 7},
                {value: 10, current_pos: 8},
                {value: 9,  current_pos: 9},
            ],
            iteration: 0,
            cursor:    null,
            arraySize: null,
            stepDelay: 500,
        }
    },

    methods: {
        step(next) {
            if(next === false) {
                return true;
                console.log('алгоритм завершен');
            }
            setTimeout(next, this.stepDelay);
        },

        start() {
            console.log('запуск цикла');
            this.init();
            this.step(this.checkIteration);
        },

        init() {
            this.arraySize = this.demoArray.length;
            this.iteration = 0;
            this.cursor = this.arraySize - 1;
            console.log(`size: ${this.arraySize}`);
            console.log(`итерация: ${this.iteration}`);
            console.log(`курсор: ${this.cursor}`);
        },

        checkIteration() {
            console.log('проверяем итерацию');
            console.log(`${this.iteration} < ${this.arraySize}`);
            console.log(`${this.iteration < this.arraySize}`);
            if(this.iteration < this.arraySize){
                this.step(this.checkCursor);
            } else {
                this.step(false);
            }
        },

        nextIteration() {
            this.iteration++;
            console.log(`итерация: ${this.iteration}`);
            this.step(this.initCursor);
        },

        initCursor() {
            this.cursor = this.arraySize - 1;
            console.log(`курсор: ${this.cursor}`);
            this.step(this.checkIteration);
        },

        checkCursor() {
            console.log('проверяем курсор');
            console.log(`${this.cursor} > ${this.iteration}`);
            console.log(`${this.cursor > this.iteration}`);
            if(this.cursor > this.iteration){
                this.step(this.checkItems);
            } else {
                this.step(this.nextIteration);
            }
        },

        checkItems() {
            console.log('сравниваем элементы');
            console.log(`${this.demoArray[this.cursor - 1].value} > ${this.demoArray[this.cursor].value}`);
            console.log(`${this.demoArray[this.cursor - 1] > this.demoArray[this.cursor]}`);
            if(this.demoArray[this.cursor - 1].value > this.demoArray[this.cursor].value){
                this.step(this.moveItems);
            } else {
                this.step(this.moveCursor);
            }
        },

        moveItems() {
            console.log('перемещаем элементы');
            const bufferUp = {
                value: this.demoArray[this.cursor].value,
                current_pos: this.demoArray[this.cursor - 1].current_pos
            };
            const bufferDown = {
                value: this.demoArray[this.cursor - 1].value,
                current_pos: this.demoArray[this.cursor].current_pos
            };
            this.$set(
                this.demoArray,
                this.cursor - 1,
                bufferUp
            );
            this.$set(
                this.demoArray,
                this.cursor,
                bufferDown
            );
            this.step(this.moveCursor)
        },

        moveCursor() {
            this.cursor--;
            console.log(`курсор: ${this.cursor}`);
            this.step(this.checkCursor);
        }

    }
}
</script>

<style lang="scss" scoped>

</style>
