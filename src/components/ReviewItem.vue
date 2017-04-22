<template>
    <article class="media">
        <figure class="media-left">
            <p class="image is-64x64">
                <img src="http://bulma.io/images/placeholders/128x128.png">
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
                <p class="review-name">
                    <strong>John Smith</strong> <small>@johnsmith</small>
                    <star-rating class="staritem":star-size="10" :read-only="true" :show-rating="false" :increment="1" :rating="5"></star-rating>
                <br></p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                </p>
            </div>
            <nav class="level is-mobile">
                <div class="level-left">
                    <a class="level-item">
                        <span class="icon is-small"><i class="fa fa-reply"></i></span>
                    </a>
                    <a class="level-item">
                        <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                    </a>
                    <a class="level-item">
                        <span class="icon is-small"><i class="fa fa-heart"></i></span>
                    </a>
                </div>
            </nav>
        </div>
        <div class="media-right">
            <button class="delete"></button>
        </div>
    </article>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    components: {
        StarRating
    }
}
</script>

<style lang="scss" scoped>
.review-name {
    display: -webkit-box;
    .staritem {
        padding-left: 5px;
    }
}

</style>