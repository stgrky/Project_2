<template id = "body">
    <div id="login">
        <h2>Doctor Login Portal</h2>
        <input id="bubbles" type="text" name="username" v-model="input.username" placeholder="Username" />
        <input id="bubbles" type="password" name="password" v-model="input.password" placeholder="Password" />
        <button id="bubbles-two" type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            };
        },
        methods: {
            login() {
                if(this.input.username !== "" && this.input.password !== "") {
                    if(this.input.username === this.$parent.mockAccount.username && this.input.password === this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    };
</script>

<style>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        border-radius: 20px;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 100px;

    }

    #bubbles {
        padding: 5px;
        margin: 5px;
        border-radius: 20px;
        outline: none;
    }

    #password {
        padding: 5px;
    }

    #bubbles-two {
        margin: 10px;
        padding: 5px;
        border-radius: 20px;
        margin: 10px;
        width: 100px;
        outline: none;
    }

    #bubbles-two:hover{
        background-color: lightblue;
        outline: none;

    }


</style>