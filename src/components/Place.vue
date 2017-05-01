<template>
    <div class="place">
        <div class="component">
        <div v-for="(item, index) in placeData" v-if="loadPlace(index)">
            <div class="card" @click="activeModal(item)" >
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img :src="item.imgsrc">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{{item.PlaceName }}</p>
                            <div class="columns">
                                <div class="column is-6 station">
                                    <p class="subtitle is-6">@{{ item.stationName }} Station</p>
                                </div>
                                <div class="column is-6">
                                    <star-rating :star-size="30" :read-only="true" :show-rating="false" :increment="0.1" :rating="5"></star-rating>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="button_container">
            <a class="button" :class="{'is-loading' : isLoading()}" @click="loadmore()" v-if="checkLoad()">Load More</a>
            <span v-else>End of result</span>
        </div>
        <placeModal :activePlace="activePlace" :dataPlace="dataPlace" @closeModal="activePlace = $event"></placeModal>
    </div>  
</template>

<script>
import StarRating from 'vue-star-rating'
import placeModal from './PlaceModal.vue'
export default {
    props: ['placeData', 'goStation'],
    components: {
        StarRating,
        placeModal
    },
    data() {
        return {
            index: 0,
            numberOfList: 10,
            loadingState: false,
            activePlace: false,
            dataPlace: []
        }
    },
    methods: {
        loadmore() {
            this.loadingState = true
            this.sleep(500).then(() => {
                this.numberOfList += 10
                this.loadingState = false 
            })         
        },
        loadPlace(index) {
            this.index = index
            if(index < this.numberOfList) return true 
            return false;
        },
        isLoading() {
            return this.loadingState
        },
        checkLoad() {
            if(this.numberOfList >= this.placeData.length ) return false;
            return true;
        },
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        activeModal(item) {
            this.activePlace = true
            this.dataPlace = item
        }
    }
}
    
</script>

<style lang="scss" scoped>

.place {
    background-color: #F7F7F7;
}
.card {
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    margin: 45px;
    width: 360px;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 8px rgba(#000000, 0.3);
    }
}

.component {
    list-style: none;
    display: flex;
    flex-wrap: wrap;   
    padding-top:20px;
    padding-left: 35px;
    padding-right: 40px;
}

.tile.is-parent {
    height: 400px;
    padding-left: 70px;
}
.column.is-6.station {
    padding: 0;
    padding-top: 20px;
    
}
.title.is-4 {
    margin-bottom: 0px;
}
.subtitle.is-6 {
    margin-bottom: 0px;
}

.button, span{
    padding: 20px;
    margin-bottom: 40px;
    border-radius: 0;
}

</style>
