<template>
    <div>
        <div class="user-modal-container" :class="{ 'active': activePlace }" id="login-modal" @click="close()">
            <div class="user-modal" @click.stop>
                <div class="columns">
                    <div class="column is-7">
                        <figure class="image is-4by3">
                            <!-- <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image"> -->
                            <img :src="dataPlace.imgsrc">
                        </figure>
                        <div class="detail">
                            <p class="title is-3">{{dataPlace.PlaceName}}</p>
                            <p class="subtitle is-5">@{{dataPlace.stationName}} Station</p>
                            <p class="subtitle is-6">Description</p>
                            <p> TYPE : Shopping Mall</p>
                            <p> OPEN HOUR 10:00 - 18:00 </p>
                            <p>TEL : 02XXXXXXX</p>
                            <p>Website : www.transights.com</p>
                        </div>
                    </div>
                    <div class="column is-5">
                        <review></review>            
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import review from './Review.vue'
export default {
    props: ['activePlace', 'dataPlace'],
    components: {
        review
    },
    methods: {
        close(){
            this.$emit('closeModal', false)
        }
    }
}
    
</script>

<style lang="scss" >

.user-modal-container {
    z-index: 30;

    .user-modal {
        margin: 100px auto;
        max-width: 70%;
        // max-height: 75%;
        // height: 72%;
    }
}

.columns {
    padding: 20px;
    padding-top: 10px;
}

.detail {
    text-align: left;
    margin: 20px;
}

    
</style>