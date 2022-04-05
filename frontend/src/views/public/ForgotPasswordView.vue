<script setup>
import { ref, reactive } from 'vue'

const requestSent = ref(false)
const resetSuccesful = ref(false)
const email = ref("")

const handleNewPassword = async () => {
    const userData = {
        email: email.value
    }
    requestSent.value = true
    resetSuccesful.value = true
    console.log(userData)
}
</script>
<template>
    <main class="forgotPasswordView leavesBackground">
        <section v-if="!requestSent">
            <div class="logoSmall" />
            <h2>Forgot your Password?</h2>
            <p>Put your Email below to</p>
            <p>reset your password.</p>
            <input type="email" v-model="email" placeholder="Email Adress" />
            <button @click="handleNewPassword">RESET PASSWORD</button>
            <p>
                <Router-Link to="/login">
                    <h4>Back to Login</h4>
                </Router-Link>
            </p>
        </section>
        <section v-if="resetSuccesful">
            <div class="logoSmall" />
            <h2>Password successfully reset.</h2>
            <p>You just recieved an Email with</p>
            <p>further details.</p>
            <p>
                <Router-Link to="/login">
                    <h4>Back to Login</h4>
                </Router-Link>
            </p>
        </section>
    </main>
</template>
<style lang="scss">
.forgotPasswordView {
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
        > a {
            text-decoration: none;
            color: #bbb;
            margin-left: 60%;
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