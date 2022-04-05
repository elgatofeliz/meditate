import { defineStore } from "pinia";

export const useLoginStatusStore = defineStore('loginStatus', {
    id: 'loginStatus',
    state: () => ({
        isLoggedIn: false
    }),
    actions: {
        logIn() {
            this.isLoggedIn = true
            console.log("Login", this.isLoggedIn)
        },
        logOut() {
            this.isLoggedIn = false
            console.log("Logout", this.isLoggedIn)
        }
    }
})
