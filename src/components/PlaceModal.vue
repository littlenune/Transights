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
                            <p class="title is-3">{{ dataPlace.PlaceName }}</p>
                            <p class="subtitle is-5">@{{ dataPlace.stationName }} Station</p>
                            <p class="subtitle is-6"> {{ dataPlaceCon[0].DES }}</p>
                            <p> TYPE : {{ dataPlaceCon[0].TYPE }}</p>
                            <p> OPEN HOUR {{ dataPlaceCon[0].OPEN }} - {{ dataPlaceCon[0].CLOSE }} </p>
                            <p>TEL : {{ dataPlaceCon[0].TEL }}</p>
                            <p>Website : <a :href="dataPlaceCon[0].WEB"> {{ dataPlaceCon[0].WEB }}</a> </p>
                        </div>
                    </div>
                    <div class="column is-5">
                        <review :dataPlace="dataPlace" :dataReview="dataReview" :dataUserLogin="dataUserLogin"></review>            
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import review from './Review.vue'
export default {
    props: ['activePlace', 'dataPlace', 'dataPlaceCon', 'dataReview', 'dataUserLogin'],
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