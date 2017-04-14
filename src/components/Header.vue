<template>
    <header class="header">
        <div class="search">
            <input type="text" placeholder="Search by type..." class="search_input">
        </div>
        <div class="login">
        </div>
    </header>
</template>

<script>
    
</script>

<style scoped>
.header {
    margin-left: 300px;
    height: 80px;
    width: calc(100% - 390px );
    position: fixed;
    z-index: 25;
    display: flex;
    border-top: 0;
    border-bottom: 0;
}

.search {
    position: relative;
    height: 80px;
    width: 100%;
}

.search_input {
    padding: 15px 30px 15px 90px;
    outline: none;
    border: 0;
    height: 80px;
    width: 100%;
    display: block;
    font-size: 18px;
}


</style>