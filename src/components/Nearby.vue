<template>
    <div class="nearby">
    <ul class="progress-tracker progress-tracker--center progress-tracker--word progress-tracker--word-center">
          <li class="progress-step">
            <span class="progress-marker"></span>
            <span class="progress-text">
              <h4 class="progress-title">Step 1</h4>
            </span>
          </li>

          <li class="progress-step">
            <span class="progress-marker"></span>
            <span class="progress-text">
              <h4 class="progress-title">Step 2</h4>
            </span>
          </li>

          <li class="progress-step is-active">
            <span class="progress-marker"></span>
            <span class="progress-text">
              <h4 class="progress-title">Step 3</h4>
            </span>
          </li>

          <li class="progress-step">
            <span class="progress-marker"></span>
            <span class="progress-text">
              <h4 class="progress-title">Step 4</h4>
            </span>
          </li>

          <li class="progress-step">
            <span class="progress-marker"></span>
            <span class="progress-text">
              <h4 class="progress-title">Step 5</h4>
            </span>
          </li>
        </ul>
    </div>
    
</template>

<script>
import 'progress-tracker/app/styles/_progress-tracker.scss'

export default {
    
}
    
</script>

<style>
.nearby {
    background-color: #FBFBFB;
    padding-top: 1px;
    padding-bottom: 1px;
    margin-bottom: -30px;
}
    
</style>