<template>
    <div class="nearby">
        <ProgressTracker>
            <step-item v-for="(item, index) in [1, 2, 3, 'A', 'B']" :key="key" :marker="item + ''"></step-item>
        </ProgressTracker>
    </div>
    
</template>

<script>
import ProgressTracker, { StepItem } from 'vue-bulma-progress-tracker'
export default {
  components: {
    ProgressTracker,
    StepItem
  }
}
    
</script>

<style >
    
</style>