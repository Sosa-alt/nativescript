<template>
  <GridLayout>
    <Label>Sort By: </Label>
    <Button v-for="(filter, index) in filters" :key="index" @tap="$store.state.sortBy = filter.toLowerCase()">{{filter}}</Button>
  </GridLayout>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {
      filters: ["Subject", "Location", "Price", "Availability"]
    }
  }
}
</script>