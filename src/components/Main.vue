<template>
    <div class="main">
        <p>Welcome to sightseeing near BTS</p>
        <ul>
            <li v-for="data in datas" v-if="data.btsStation && data.placeID">
            Station : {{ data.btsStation }} is from {{ data.placeName }}
            </li>
        </ul>
        <button v-on:click='search'>Submit</button>
        
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
    export default {
        data() {
            return {
                datas: [],
                errorMsg: 'A'
            }
        },
        methods: {
            search() {
                const api = 'http://localhost:7777/address'
                Vue.axios.get(api).then(response => {
                    this.datas = response.data
                    console.log(response.data)
                }).catch(error => {
                    this.errorMsg = 'Error Data not found'
                    this.datas = []
                })
            }
        }
    }
</script>

<style>
.main {
    margin-left: 300px;
}
</style>