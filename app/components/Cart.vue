<template>
    <GridLayout>
      <GridLayout v-show="$store.getters.cartCount > 0 && !confirmed">
        
        <Lesson v-for="(lesson, index) in cart" :key="index">
          <template v-slot:image>
              {{ lesson.image}}
          </template>
          <template v-slot:subject>
              Subject: {{lesson.subject}}
          </template>
          <template v-slot:location>
              Location: {{lesson.location}}
          </template>
          <template v-slot:price>
              Price: {{lesson.price}}
          </template>
          <template v-slot:spaces>
              Spaces: {{lesson.spaces}}
          </template>
          <template v-slot:button>
            <Button
                    v-if="lesson.spaces > 0"
                    @tap="removeFromCart(lesson)"
            >
                Add To Cart
            </Button>
          </template>
        </Lesson>

        <Form v-on:confirmed="$emit('confirmCheckout')" />
      </GridLayout>
    </GridLayout>
</template>

<script>
import Form from './Form'
import Lesson from './Lesson'
export default {
  name: "Cart",
  components: {
    Form, Lesson
  },
  props: {
    cart: {
      type: Array,
      required: true
    }, 
    confirmed: {
      required: true
    }
  },
  methods: {
    removeFromCart(lesson) {
      this.$store.dispatch('removeFromCart', lesson)
    },
  }
}
</script>