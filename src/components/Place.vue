<template>
    <div class="component inline-flex">
        <div v-for="item in places">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{{item.name }}</p>
                            <p class="subtitle is-6">@{{ item.station }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>

export default {
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

<style scoped>
.card {
    margin: 45px;
    width: 360px;
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
.placeList {
    display: flex;
    background-color: #F7F7F7;
}
.place {
    width: 400px;
    height: 250px;
    background-color: #000000;
    margin: 0px 40px 30px 40px;
}
</style>
