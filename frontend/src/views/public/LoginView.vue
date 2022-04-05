<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useLoginStatusStore } from '../../stores/loginStatus.js'

const router = useRouter()
const loginStatusStore = useLoginStatusStore()
const logIn = loginStatusStore.logIn

//local state data
let email = ref("")
let password = ref("")
let message = ref("")

//methods
const handleLogin = () => {
    const userData = {
        email: email.value,
        password: password.value
    }
    if (!userData.email || !userData.email.includes("@") || !userData.email.includes(".")) {
        message.value = "Please enter a valid email"
        return
    }
    if (!userData.password) {
        message.value = "Please enter your password"
        return
    }
    message.value = userData
    loginStatusStore.logIn()
    router.push("/home")
}
</script>

<template>
    <main class="loginView leavesBackground">
        <section>
            <div class="logoSmall" />
            <h2>Sign In</h2>
            <p>Sign in now to access your exercises</p>
            <p>and saved music.</p>
            <input type="email" v-model="email" placeholder="Email Adress" />
            <input type="password" v-model="password" placeholder="Password" />
            <div class="alignRight">
                <Router-Link to="/resetpassword">Forgot Password?</Router-Link>
            </div>
            <button @click="handleLogin">LOGIN</button>
            <p id="message">{{ message }}</p>
            <p>
                Don't have an account?
                <Router-Link to="/signup">
                    <h4>Sign Up</h4>
                </Router-Link>
            </p>
        </section>
    </main>
</template>

<style lang="scss">
.loginView {
    > section {
        padding: 12vh 10vw 0 10vw;
        > h2 {
            color: #fff;
            font-weight: normal;
            padding-bottom: 10px;
        }
        > p:nth-of-type(2) {
            padding-bottom: 5vh;
        }
        > input {
            background: #253334;
            border: none;
            border-bottom: 1px solid #bbb;
            width: 100%;
            padding: 10px;
            margin: 10px 0;
        }
        .alignRight {
            text-align: right;
            > a {
                text-decoration: none;
                color: #bbb;
            }
        }
        > button {
            margin-top: 4.5vh;
            margin-bottom: 2vh;
            padding: 20px 0;
            text-align: center;
            background-color: #7c9a92;
            color: #fff;
            border-radius: 15px;
            width: 100%;
            text-decoration: none;
            font-size: 24px;
            border: none;
        }
        > p {
            display: flex;
            color: rgba(255, 255, 255, 0.644);

            > a {
                text-decoration: none;

                > h4 {
                    color: #fff;
                    padding-left: 5px;
                }
            }
        }
    }
}
</style>
