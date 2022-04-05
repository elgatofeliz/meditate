<script>
import { RouterLink } from "vue-router";
</script>
<template>
    <main class="welcomeView">
        <div class="mainLogo"></div>
        <article>
            <h2>WELCOME</h2>
            <p>Do meditation. Stay focused.</p>
            <p>Live a healthy life</p>
        </article>
        <Router-Link class="buttonPublic" to="/login">Login with Email</Router-Link>
        <p>
            Don't have an account?
            <Router-Link to="/signup">
                <h4>Sign Up</h4>
            </Router-Link>
        </p>
    </main>
</template>

<style lang="scss">
.welcomeView {
    background: url("../../img/images/background.jpg") center/cover no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > article {
        color: #fff;
        text-align: center;
        padding-bottom: 15vh;
        > h2 {
            font-size: 30px;
        }
    }
    > p {
        display: flex;
        color: #fff;
        padding-top: 10px;

        > a {
            text-decoration: none;

            > h4 {
                color: #fff;
            }
        }
    }
}
</style>
