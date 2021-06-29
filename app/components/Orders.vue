<template>
  <GridLayout>
    <Label>Order By: </Label>
    <Button  v-for="(order, index) in orders" :key="index" @tap="$store.state.orderBy = order.toLowerCase()">{{order}}</Button>
  </GridLayout>
</template>

<script>
export default {
  name: "Orders",
  data() {
    return {
      orders: ["Ascending", "Descending"]
    }
  }
}
</script>