<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// state
const userName = ref("")
const userEmail = ref("")
const userPassword = ref("")
const message = ref("")

//methods

const handleSignUp = () => {
    const userData = {
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value
    }
    if (!userData.name || userData.name.length < 2) {
        message.value = "Please at least 2 characters"
        return
    }
    if (!userData.email || !userData.email.includes("@") || !userData.email.includes(".")) {
        message.value = "Please enter a valid email"
        return
    }
    if (!userData.password) {
        message.value = "Please enter your password"
        return
    }
    console.log(userData)
    message.value = "Success! You will be redirected soon"
    setTimeout(() => { return router.push("/login") }, 1000)
    return
}

</script>
<template>
    <main class="signupView leavesBackground">
        <section>
            <div class="logoSmall" />
            <h2>Sign Up</h2>
            <p>Sign up now for free to start</p>
            <p>meditating and explore Medic</p>
            <input type="text" v-model="userName" placeholder="Name" />
            <input type="email" v-model="userEmail" placeholder="Email Adress" />
            <input type="password" v-model="userPassword" placeholder="Password" />
            <button @click="handleSignUp">SIGNUP</button>
            <p id="message">{{ message }}</p>
            <div>
                <p>
                    Already have an account?
                    <Router-Link to="/login">
                        <h4>Log In</h4>
                    </Router-Link>
                </p>
            </div>
        </section>
    </main>
</template>

<style lang="scss">
.signupView {
    > section {
        padding: 12vh 10vw 0 10vw;
        > h2 {
            color: #fff;
            font-weight: normal;
            padding-bottom: 10px;
        }
        > p {
            color: #bbb;
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
        > div {
            display: flex;
            justify-content: center;
            > p {
                display: flex;
                color: #fff;

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
}
</style>
