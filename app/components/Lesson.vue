<template>
    <GridLayout>
      <slot name="image"></slot>
      <slot name="subject"></slot>
      <slot name="location"></slot>
      <slot name="price"></slot>
      <slot name="spaces"></slot>
      <slot name="button"></slot>
    </GridLayout>
</template>

<script>
    export default {
        name: "Lesson.vue"
    }
</script>

<style scoped>

</style>