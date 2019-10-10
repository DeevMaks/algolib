<template>
    <div class="array">
        <div
            class="array__item relation"
            v-bind:key="index"
            v-for="(item, index) in arr"
        >
            <div class="relation__ration"></div>
            <div class="array__index relation__content">
                {{ index }}
            </div>
            <div class="array_content relation__content">
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr: []
        }
    },
    props: {
        'value': Array
    },
    watch: {
        value: (val) => {
            this.arr = val
        }
    },
    mounted(){
        this.arr = this.value
    }
}
</script>

<style lang="scss">
    .array{
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        display: flex;
        color: #fff;

        &__item{
            width: 40px;
            background: rgb(209, 17, 17);
            margin: 0 5px;
            padding: 2px;
            text-align: center;
            line-height: 44px;
            z-index: 1;
            font-weight: 600;
        }

        &__index{
            position: absolute;
            color: rgba(255, 255, 255, .2);
            font-size: 4.1rem;
            font-weight: 600;
            z-index: 0;
        }
    }

    .relation {
        position: relative;

        &__ration {
            padding-top: 100%;
            // 16 на 9
            // Процент берется от высоты родителя!!
            height: 0;
        }

        &__content {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
        }
    }
</style>
