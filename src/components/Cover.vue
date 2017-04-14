<template>
    <header class="cover_pic">
        <div class="content_pic">
            <p class="title is-2 is-spaced">Have no idea where to go ?</p>
            <p class="subtitle is-5">Our career is to help you discover places nearby BTS.</br> Let us make your travelling easier !</p>
        </div>
    </header>
</template>

<script>
    
</script>

<style scoped>
.cover_pic {
    display: flex;
    height: 400px;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    position: relative;
    background-image: url('../assets/cover.jpg');
}

.cover_pic:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: hsla(0, 0%, 97%, .7)
}

.content_pic {
    text-align: center;
    position: relative;
}

p.title {
    font-weight: 600;
}

p.subtitle {
    font-weight: 400;
}
    
</style>