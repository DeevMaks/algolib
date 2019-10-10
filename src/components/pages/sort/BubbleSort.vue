<template>
    <div>
        <ArrayEl
            v-model="demoArray"
        />
        <button @click="sort">start</button>
    </div>
</template>

<script>
import ArrayEl from '../../elements/ArrayEl.vue';

export default {
    components: {
        ArrayEl,
    },
    data() {
        return {
            demoArray: [245, 8, 132, 540, 5, 12, 100, 350],
            i: null,
            j: null,
            step_delay: 1000,
        }
    },
    methods: {
        add() {
            this.$set(this.demoArray, 0, this.demoArray[0] + 1)
        },
        sort(){
            const size = this.demoArray.length;
            let i = 0;
            let j = size - 1;

            const timerId = setInterval(() => {
                if(i >= size) {
                    clearTimeout(timerId)
                } else {
                    if(j <= i) {
                        i++;
                        j = 0;
                    } else {
                        if(this.demoArray[j-1] > this.demoArray[j]){
                            const buffer =  this.demoArray[j-1]
                            this.$set(this.demoArray, j-1, this.demoArray[j])
                            this.$set(this.demoArray, j, buffer)
                        }
                    }
                }
            }, this.step_delay)

            /*for(let i=0; i<size; i++){
                for(let j=size-1; j > i; j--){
                    if(this.demoArray[j-1] > this.demoArray[j]){
                        const buffer =  this.demoArray[j-1]
                        this.$set(this.demoArray, j-1, this.demoArray[j])
                        this.$set(this.demoArray, j, buffer)
                    }
                }
            }*/
        }
    }
}
</script>

<style lang="scss">

</style>
