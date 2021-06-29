<template>
    <GridLayout>

        <!-- Checkout -->
        <Checkout :confirmed="confirmed" :cart="cart" :snackbar="snackbar" :success="success" v-on:cartCleared="confirmed=false" />

        <!-- Items in Cart -->
        <Cart v-on:confirmCheckout="confirmCheckout" :confirmed="confirmed" :cart="cart"/>

        <!-- No Items In Cart -->
        <Span v-show="$store.getters.cartCount <= 0">
            No Item In Cart
        </Span>

    </GridLayout>
</template>

<script>
    import Cart from "../components/Cart"
    import Checkout from '../components/Checkout.vue'
    import {mapState} from 'vuex'
    
    export default {
        components: {
            Cart, Checkout
        },
        data() {
            return {
                confirmed: false,
                snackbar: false,
                success: null
            }
        },
        name: "ShoppingCart",
        methods: {
            confirmCheckout() {
                this.confirmed = true
                this.snackbar = true
                this.success = 'Checked out successfully.'
                console.log(this.cart);

                this.$store.dispatch('checkedOut')
            }
        },
        computed: {
            ...mapState([
                'cart'
            ])
        }
    }
</script>

<style scoped>

</style>