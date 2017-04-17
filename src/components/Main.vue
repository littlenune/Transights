<template>
    <div class="main">
        <cover></cover>
        <nearby></nearby>
        <place></place>
    </div>
</template>
<script>
import cover from './Cover'
import nearby from './NearBy'
import place from './Place'

    export default {
        components: {
            'cover': cover,
            'nearby': nearby,
            'place': place
        },
        data() {
            return {
                datas: [],
                errorMsg: 'A'
            }
        }
    }
</script>

<style scoped >
.main {
    padding-top: 80px;
    margin-left: 300px;
}
</style>