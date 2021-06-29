<template>
  <GridLayout>
    <Span v-for="(error, index) in errors" :key="index" :text="error" color="red"></Span>
    <TextField @blur="validate" v-model="name" hint="Enter your name" />
    <TextField @blur="validate" v-model="name" hint="Enter your name" />
    <Button v-show="valid" @tap="$emit('confirmed')">Checkout</Button>
  </GridLayout>
</template>

<script>
  export default {
    name: "Form",
    data: () => ({
        valid: false,
        name: '',
        phone: '',
        errors: []
    }),
    methods: {
      validate() {
        this.errors = []
        if (!this.name || this.name == '' || this.name == null) {
          this.errors.push('Name is required')
        } else if (this.name.length >= 10) {
          this.errors.push('Name must be less than 10 characters')
        } else if (!this.phone || this.phone == '' || this.phone == null) {
          this.errors.push('Phone is required')
        } else {
          this.errors = []
          this.valid = true
        }
      }
    }
  }
</script>

<style scoped>

</style>