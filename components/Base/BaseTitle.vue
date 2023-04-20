<template>
  <div>
  <p class="text-3xl pb-2">{{ text }}</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  text: {
    type:String,
  }
})
</script>