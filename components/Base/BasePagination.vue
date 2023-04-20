<template>
  <div class="w-full flex justify-end">
    <p>.{{number}}</p>
  </div>
</template>
<script setup>
defineProps({
  number :{
    type: String,
  }
})

</script>