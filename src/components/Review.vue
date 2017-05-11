<template>
    <div class="review">
        <p class="title is-4">Reviews
            <star-rating class="starrate":star-size="20" :read-only="true" :show-rating="true" :increment="0.1" :rating="dataPlace.avgRate"></star-rating>
        </p>
        <ReviewInput class="inputReview" :dataPlace="dataPlace" :dataUserLogin="dataUserLogin"></ReviewInput>
        <ReviewItem :dataPlace="dataPlace" :dataReview="dataReview" :dataUserLogin="dataUserLogin"></ReviewItem>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'
import ReviewItem from './ReviewItem.vue'
import ReviewInput from './ReviewInput.vue'

export default {
    props: ['dataPlace', 'dataReview', 'dataUserLogin'],
    components: {
        StarRating,
        ReviewItem,
        ReviewInput
    }
}
    
</script>

<style lang="scss" scoped>
.review {
    text-align: left;

    .title.is-4 {
        display: flex;
        
        .starrate {
            font-size: 15px;
            margin-left: 40px;
            color: #999999;
        }
    }
}
.inputReview {
    padding-bottom: 20px;
}

</style>