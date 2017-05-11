<template>
    <div>
        <article class="media" v-for="(item, index) in dataReview">
            <div class="media-content">
                <div class="content">
                    <p class="review-name">
                        <strong>{{item.name}} {{item.lastName}}</strong> <small>@{{item.userName}}</small>
                        <star-rating class="staritem":star-size="10" :read-only="true" :show-rating="false" :increment="1" :rating="item.Rate"></star-rating>
                    <br></p>
                    <p v-if="!(edit && checkSameUser(item))">
                        {{ item.Review }}
                    </p>
                    <div v-else-if="checkSameUser(item)">
                        <textarea  v-model="editComment" class="textarea edit"> {{ item.Review }}</textarea>   
                        <span class="button is-dark" @click="saveEdit(item)">Save</span>
                        <span class="button is-dark" @click="cancelEdit()">Cancel</span>                 
                    </div>
                </div>
            </div>
            <div class="media-right" v-if="checkSameUser(item)">
                <button @click="editMsg(item)">Edit</button>
                <button  class="delete" @click="deleteReview(index)"></button>
            </div>
        </article>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'
import axios from 'axios'

export default {
    props: ['dataPlace', 'dataReview', 'dataUserLogin'],
    components: {
        StarRating
    },
    data() {
        return {
            visible: false,
            edit: false,
            edited: false,
            editComment: ''
        }
    },
    methods: {
        editMsg(item) {
            this.edit = true
            this.editComment = item.Review
        },
        cancelEdit() {
            this.edit = false
        },
        saveEdit(item) {
            this.edited = true
            this.edit = false
            item.Review = this.editComment
            axios.post('http://localhost:7777/editReview', {
                userID : this.dataUserLogin[0].userID,
                placeID : this.dataPlace.placeID,
                editReview : this.editComment
            })
        },
        checkSameUser(item) {
            if(this.dataUserLogin[0].userID == item.userID)
                return true
            else 
                return false
        },
        deleteReview(index) {
            axios.post('http://localhost:7777/deleteReview', {
                userID : this.dataUserLogin[0].userID,
                placeID : this.dataPlace.placeID
            })
            this.dataReview.splice(index, 1)
        }
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

.textarea.edit {
    margin-bottom: 20px;
}

</style>