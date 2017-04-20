<template>
    <div class="header">
    <header class="search">
        <div >
            <input type="text" placeholder="Search by type..." class="search_input">
        </div>
    </header>

    <loginBtn></loginBtn>
        
    </div>
</template>

<script>
    import loginForm from './LoginForm'
    export default {
        components: {
            'loginBtn': loginForm
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
</style>