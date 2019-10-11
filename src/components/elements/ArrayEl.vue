<template>
    <div class="array">
        <div
            v-bind:key="index"
            v-for="(item, index) in demoArray"
            class="array__item relation"
            v-bind:class="{cursor__j: cursor == index, cursor__i: iteration <= index}"
            :style="`order: ${item.current_pos}`"
        >
            <div class="relation__ration"></div>
            <div class="array__index relation__content">
                {{ index }}
            </div>
            <div class="array__content relation__content">
                {{ item.value }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            demoArray: [],
            iteration: null,
            cursor:    null,
        }
    },

    props: {
        arr:  Array,
        iter: Number,
        cur:  Number,
    },

    watch: {
        arr: function(val) {
            this.demoArray = val;
        },

        iter: function(val) {
            this.iteration = val;
        },

        cur: function(val) {
            this.cursor = val;
        }
    },

    mounted() {
        this.demoArray = this.arr;
        this.iteration = this.iter;
        this.cursor    = this.cur;
    }
}
</script>

<style lang="scss" scoped>
    .array{
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        display: flex;
        color: #fff;
        flex-direction: column;
        align-items: center;
        transition: flex .3s ease;

        &__item{
            width: 40px;
            background: rgb(209, 17, 17);
            margin: 5px;
            padding: 2px;
            text-align: center;
            line-height: 44px;
            z-index: 1;
            font-weight: 600;
            overflow: hidden;
        }

        &__index{
            position: absolute;
            color: rgba(255, 255, 255, .2);
            font-size: 4.2rem;
            font-weight: 600;
            z-index: 0;
        }
    }

    .cursor{
        &__i{
            box-shadow: 0 0 20px rgb(175, 93, 93);
        }

        &__j{
            border-left: 3px solid #017ca1;
            border-right: 3px solid #017ca1;
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
