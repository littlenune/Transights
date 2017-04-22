<template>
    <article class="media">
        <figure class="media-left">
            <p class="image is-64x64">
                <img src="http://bulma.io/images/placeholders/128x128.png">
            </p>
        </figure>
        <div class="media-content">
            <div class="field">
                <p class="control">
                    <textarea class="textarea" placeholder="Add a comment..."></textarea>
                </p>
            </div>
            <nav class="level">
                <div class="level-left">
                    <div class="level-item">
                        <star-rating class="staritem":star-size="35" :show-rating="false" :increment="1" :rating="0"></star-rating>
                    </div>
                </div>
                <div class="level-right">
                    <div class="level-item">
                        <a class="button is-info">Submit</a>
                    </div>
                </div>
            </nav>
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