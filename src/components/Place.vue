<template>
    <div class="component inline-flex">
        <div v-for="(item, index) in placeData" v-if="index < 20">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
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
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
    props:['placeData'],
    components: {
        StarRating
    },
    data() {
        return {
            places: [
                { name: 'Place1', station: 'station 1'},
                { name: 'Place2', station: 'station 2'},
                { name: 'Place3', station: 'station 3'},
                { name: 'Place4', station: 'station 4'},
                { name: 'Place5', station: 'station 5'},
                { name: 'Place6', station: 'station 6'},
            ]
        }
    }
}
    
</script>

<style lang="scss" scoped>
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
    background-color: #F7F7F7;
    padding-left: 35px;
    padding-right: 40px;
}

.tile.is-parent {
    height: 400px;
    padding-left: 70px;
}
.column.is-6.station {
    padding-top: 20px;
}
.title.is-4 {
    margin-bottom: 0px;
}
.subtitle.is-6 {
    margin-bottom: 0px;
}
.place {
    width: 400px;
    height: 250px;
    background-color: #000000;
    margin: 0px 40px 30px 40px;
    
    &List{
        display: flex;
        background-color: #F7F7F7;
    }
}
</style>
