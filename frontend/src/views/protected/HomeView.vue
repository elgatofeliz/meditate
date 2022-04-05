<script setup>
import { RouterLink } from 'vue-router';
import homeItems from '@/json/homeItems.json'
let name = "Alex"

console.log(homeItems)
</script>
<template>
    <main class="homeView">
        <h2>Welcome back, {{ name }}!</h2>
        <p>What do you want to do?</p>
        <section>
            <article v-for="item in homeItems" class="homeCard">
                <RouterLink :to="item.path">
                    <div class="itemWrapper">
                        <div class="imageWrapper">
                            <img :src="`src/img/icons/${item.image}`" alt />
                        </div>
                        <div class="textWrapper">
                            <h2>{{ item.name }}</h2>
                            <p>{{ item.content }}</p>
                        </div>
                    </div>
                </RouterLink>
            </article>
        </section>
    </main>
</template>
<style lang="scss">
.homeView {
    color: #fff;
    background-color: #253334;
    padding: 0 7vw;

    > h2 {
        padding-top: 5vh;
    }

    > .iconBox {
        display: flex;
        justify-content: space-between;
        padding: 5vh 0;

        > article {
            text-align: center;
        }
    }
}

.homeCard {
    background-color: white;
    border-radius: 15px;
    color: black;
    > a {
        text-decoration: none;
        color: black;
    }
}

.itemWrapper {
    display: flex;
    align-items: center;
    margin: 10px 0;
}

.imageWrapper {
    background-color: white;
    padding: 10px;
    border-radius: 15px;
    height: 60px;
    width: 60px;
    display: grid;
    place-items: center;
}
.textWrapper {
    padding: 5px 0;
}
</style>
