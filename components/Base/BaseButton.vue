<template>
  <NuxtLink class="bg-experimental rounded-full">
    <span class="px-3 py-2">{{props.title}}</span>
  </NuxtLink>
</template>
<script setup lang="ts">
const props =defineProps({
  title:{
    type:String
  },
})
</script>