<template>
    <div class="header">
    <header class="search">
        <div >
            <input type="text" placeholder="Search by type..." class="search_input">
        </div>
    </header>
        
        <div>
            <a class="loginForm"  @click="open"> Login</a>
            <sweet-modal ref="modal">
	            <sweet-modal-tab title="Sign Up" id="tab1" >
                    <div class="signupForm">
                        <float-label><input type="name" placeholder="Name"></float-label>
                        <float-label><input type="lastname" placeholder="Last Name"></float-label>
                        <float-label><input type="username" placeholder="Username"></float-label>
                        <float-label><input type="password" placeholder="Password"></float-label>
                        <div><a class="signupButton">Create an account</a></div> 
                    </div>
                </sweet-modal-tab>
	            <sweet-modal-tab title="Login" id="tab2" >
                    <div>
                        <float-label><input type="username" placeholder="Username"></float-label>
                        <float-label><input type="password" placeholder="Password"></float-label>
                        <div><a class="loginButton">Login</a></div> 
                    </div>

                </sweet-modal-tab>
            </sweet-modal>
        </div>
    </div>
</template>

<script>
import FloatLabel from 'vue-float-label/components/FloatLabel'
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
export default
{
    components: {
        SweetModal,
        SweetModalTab,
        FloatLabel
    },
    methods: {
    open: function () {
      this.$refs.modal.open()
    }  
}
}

</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    margin-left: 300px;
    height: 80px;
    position: fixed;
    z-index: 25;
    display: flex;
    border-top: 0;
    border-bottom: 0;
}

.search {
    width: calc(100% - 390px );
    position: relative;
    height: 80px;

    &_input {
        padding: 15px 30px 15px 90px;
        outline: none;
        border: 0;
        height: 80px;
        width: 100%;
        display: block;
        font-size: 18px;
    }
}

.loginForm{
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


.vfl-label-on-focus {
  color: #ff851b;
}

.vfl-label + input {
  padding-left: 0;
  font-size: 25px;
  border: 0;
  border-bottom: 2px solid #aaa;
  transition: border 0.2s;
}

.vfl-label-on-focus + input  {
  border-bottom: 2px solid #ff851b;
}
.loginButton{
    font-size: 20px;
}

.signupButton {
    font-size: 20px;
}

</style>