<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { useLoginStatusStore } from "../../stores/loginStatus.js";
const router = useRouter()

const loginStatusStore = useLoginStatusStore()
const logOut = () => {
    loginStatusStore.logOut()
    router.push("/")
}


const openMenu = () => {

}

</script>
<template>
    <header>
        <nav>
            <ul>
                <li>
                    <div class="hamburger" @click="openMenu"></div>
                </li>
                <li>
                    <RouterLink to="/home">
                        <div class="navLogoSmall"></div>
                    </RouterLink>
                </li>
                <li>
                    <div class="profilePicture" @click="logOut" />
                    <p>logout</p>
                </li>
            </ul>
        </nav>
    </header>
</template>
<style lang="scss">
.profilePicture {
    background: url("@/img/icons/Anonymous-Profile-Picture.jpg") center/cover
        no-repeat;
    height: 30px;
    width: 30px;
}
.hamburger {
    background: url("@/img/icons/hamburger.svg") center/cover no-repeat;
    height: 20px;
    width: 20px;
}
.navLogoSmall {
    background: url("@/img/icons/main.png") center/cover no-repeat;
    height: 75px;
    width: 75px;
}
header {
    height: 10vh;
    padding: 0 7vw;
    background-color: #253334;
    > nav {
        > ul {
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            > li:nth-of-type(1),
            li:nth-of-type(3) {
                &:hover {
                    cursor: pointer;
                }
            }
            > li:nth-of-type(3) > div {
                border-radius: 50%;
            }
        }
    }
}
</style>