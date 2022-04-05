<script setup>
import { useLoginStatusStore } from "../../stores/loginStatus.js";

const loginStatusStore = useLoginStatusStore()
const logIn = loginStatusStore.logIn
const logOut = loginStatusStore.logOut

</script>
<template name="component-name">
    <nav class="devNav">
        <ul>
            <li>
                <RouterLink to="/">Splash</RouterLink>
            </li>
            <li>
                <RouterLink to="/welcome">Welcome</RouterLink>
            </li>
            <li>
                <RouterLink to="/login">Log In</RouterLink>
            </li>
            <li>
                <RouterLink to="/signup">Sign Up</RouterLink>
            </li>
            <li>
                <RouterLink to="/home">Home Page</RouterLink>
            </li>
            <li>
                <RouterLink to="/sounds">sounds Page</RouterLink>
            </li>
            <li>
                <RouterLink to="/player">player Page</RouterLink>
            </li>
            <li>
                <RouterLink to="/profile">Profile Page</RouterLink>
            </li>
            <li>
                <RouterLink to="/meditation">Meditation Page</RouterLink>
            </li>
            <li>
                <button @click="logIn">Login</button>
            </li>
            <li>
                <button @click="logOut">Logout</button>
            </li>
        </ul>
    </nav>
</template>
<style lang="scss">
.devNav {
    justify-content: center;
    > ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        list-style: none;
        > li {
            padding: 10px;
        }
    }
}
</style>
