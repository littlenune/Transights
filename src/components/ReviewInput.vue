<template>
    <article class="media">
        <div class="media-content">
            <div class="field">
                <p class="control">
                    <textarea v-model="commentData" class="textarea" placeholder="Add a comment..."></textarea>
                </p>
            </div>
            <nav class="level">
                <div class="level-left">
                    <div class="level-item">
                        <star-rating v-model="rating" class="staritem" :star-size="35" :show-rating="false" :increment="1" :rating="rating" @rating-selected="setRating"></star-rating>
                    </div>
                </div>
                <div class="level-right">
                    <div class="level-item">
                        <a class="button is-dark" @click="submit">Submit</a>
                    </div>
                </div>
                
            </nav>
        </div>
        
    </article>
</template>

<script>
import StarRating from 'vue-star-rating'
import axios from 'axios'

export default {
    props: ['dataPlace', 'dataUserLogin'],
    components: {
        StarRating
    },
    data() {
        return {
            commentData: '',
            rating: 0
        }
    },
    methods: {
        submit() {
                if(this.dataUserLogin[0].userID != null){
                    console.log('user not null')
                    axios.post('http://localhost:7777/inputReview', {
                        userID : this.dataUserLogin[0].userID,
                        placeID : this.dataPlace.placeID,
                        review : this.commentData,
                        rate : this.rating
                    }).then( response2 => {
                        this.$emit('dataReviewInput',{ review : this.commentData,  rate:this.rating })
                        this.commentData = ''
                        this.rating = 0
                    })
                    
                } else {
                    console.log('please login first before review!')
                }
        },
        setRating(rating) {
          this.rating = rating;
        }
    }
}    
</script>