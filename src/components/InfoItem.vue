<template>
  <article>
    <h5>{{title}}</h5>
    <p>{{content}}</p>
  </article>
  <div v-if="extraClass" class="separation"/>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        content: string
        title: string
        extraClass: boolean
    }>()
</script>
