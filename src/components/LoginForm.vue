<template>
<div>
<div id="fake-nav"><a class = "loginForm" href="#login" @click="open('login', $event)">Login</a></div>
        <div class="user-modal-container" :class="{ 'active': active }" id="login-modal" @click="close">
            <div class="user-modal">
                <ul class="form-switcher">
                    <li @click="flip('register', $event)"><a href="" id="register-form">Register</a></li>
                    <li @click="flip('login', $event)"><a href="" id="login-form">Login</a></li>
                    </ul>
                <div class="form-register" :class="{ 'active': active == 'register' }" id="form-register">
                    <div class="error-message" v-text="registerError"></div>
                    <input type="text" name="name" placeholder="Name" v-model="registerName" @keyup.enter="submit('register', $event)">
                    <input type="email" name="email" placeholder="Email" v-model="registerEmail" @keyup.enter="submit('register', $event)">
                    <input type="password" name="password" placeholder="Password" v-model="registerPassword" @keyup.enter="submit('register', $event)">
                    <input type="submit" :class="{ 'disabled': submitted == 'register' }" @click="submit('register', $event)" v-model="registerSubmit" id="registerSubmit">
                    <div class="links"> <a href="" @click="flip('login', $event)">Already have an account?</a></div>
                </div>
                <div class="form-login" :class="{ 'active': active == 'login' }" id="form-login">
                    <div class="error-message" v-text="loginError"></div>
                    <input type="text" name="user" placeholder="Email or Username" v-model="loginUser" @keyup.enter="submit('login', $event)">
                    <input type="password" name="password" placeholder="Password" v-model="loginPassword" @keyup.enter="submit('login', $event)">
                    <input type="submit" :class="{ 'disabled': submitted == 'login' }" @click="submit('login', $event)" v-model="loginSubmit" id="loginSubmit">
                    <div class="links"> <a href="" @click="flip('password', $event)">Forgot your password?</a></div>
                </div>
                <div class="form-password" :class="{ 'active': active == 'password' }" id="form-password">
                    <div class="error-message" v-text="passwordError"></div>
                    <input type="text" name="email" placeholder="Email" v-model="passwordEmail" @keyup.enter="submit('password', $event)">
                    <input type="submit" :class="{ 'disabled': submitted == 'password' }" @click="submit('password', $event)" v-model="passwordSubmit" id="passwordSubmit">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'

var modal_submit_register = 'Register';
var modal_submit_password = 'Reset Password';
var modal_submit_login = 'Login';

export default
{
    data() { 
         return{
    active: null,
    submitted: null,

    // Submit button text
    registerSubmit: modal_submit_register,
    passwordSubmit: modal_submit_password,
    loginSubmit: modal_submit_login,

    // Modal text fields
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    loginUser: '',
    loginPassword: '',
    passwordEmail: '',

    // Modal error messages
    registerError: '',
    loginError: '',
    passwordError: '',
  }
     },
    methods: {
     open: function(which, e) {
      e.preventDefault();
      this.active = which;
    },
  close: function(e) {
      e.preventDefault();
      if (e.target === this.$el) {
        this.active = null;
      }
    },
    flip: function(which, e) {
      e.preventDefault();
      if (which !== this.active) {
        this.active = which;
      }
    },
    submit: function(which, e) {
      e.preventDefault();
      this.submitted = which
      var data = {
        form: which
      };

      switch (which) {
        case 'register':
          data.name = this.registerName;
          data.email = this.registerEmail;
          data.password = this.registerPassword;
          this.$set('registerSubmit', 'Registering...');
          break;
        case 'login':
          data.user = this.loginUser;
          data.password = this.loginPassword;
          this.$set('loginSubmit', 'Logging In...');
          break;
        case 'password':
          data.email = this.passwordEmail;
          this.$set('passwordSubmit', 'Resetting Password...')
          break;
      }

      // TODO: submit our `data` variable
    }
}
}

    
</script>

<style>


</style>

<style lang="scss" scoped>

.loginForm {
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #222F39;
    color: white;
    font-size: 25px;
    font-weight: bold;
}

.loginButton{
    font-size: 20px;
}

.signupButton {
    font-size: 20px;
}

.user-modal-container * {
    box-sizing: border-box;
}

.user-modal-container {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    cursor: pointer;
    overflow-y: auto;
    z-index: 3;
    font-family: 'Lato', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif';
    font-size: 14px;
    background-color: rgba(17, 17, 17, .9);
    -webkit-transition: all 0.25s linear;
    -moz-transition: all 0.25s linear;
    -o-transition: all 0.25s linear;
    -ms-transition: all 0.25s linear;
    transition: all 0.25s linear;

    &.active {
        opacity: 1;
        visibility: visible;
    }

    .user-modal {
        position: relative;
        margin: 50px auto;
        width: 90%;
        max-width: 500px;
        background-color: #f6f6f6;
        cursor: initial;
    }

    .form-login, .form-register, .form-password {
        padding: 75px 25px 25px;
        display: none;
    }
    .form-login.active, .form-register.active, .form-password.active {
        display: block;
    }

    ul.form-switcher {
        margin: 0;
        padding: 0;

        li {
            list-style: none;
            display: inline-block;
            width: 50%;
            float: left;
            margin: 0;

            a {
                width: 100%;
                display: block;
                height: 50px;
                line-height: 50px;
                color: #666666;
                background-color: #dddddd;
                text-align: center;

                &.active {
                    color: #000000;
                    background-color: #222F39;
                }
            }
        }
    }

    input {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #eeeeee;

        &[type="submit"] {
            color: #f6f6f6;
            border: 0;
            margin-bottom: 0;
            background-color: #222F39;
            cursor: pointer;

            &:hover {
                background-color: #222F39;
            }
            &:active {
                background-color: #222F39;
            }
            &.disables {
                background-color: #222F39;
            }
        }
    }

    .links {
        text-align: center;
        padding-top: 25px;

        a {
            color: #222F39;
        }
    }
}
</style>