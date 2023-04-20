<template>
  <div>
    <p class="font-ibm text-left">{{ text }}</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  text : String
})
</script>