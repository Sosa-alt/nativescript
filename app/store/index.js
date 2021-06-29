import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lessons: null,
        cart: [],
        sortBy: 'subject',
        orderBy: 'ascending',
        lessonIndex: null,
    },
    getters: {

        cartCount(state) {
            return state.cart.length
        }
    },
    mutations: {
        findLesson(state, lesson) {
            return state.cart.findIndex((item) => item._id === lesson._id)
        },
        setLessons(state, data) {
            state.lessons = data
        },
        addToCart(state, lesson) {
            // Check availability
            if (lesson.spaces > 0) {
                // Check if element is available
                state.lessonIndex = state.cart.findIndex((item) => item._id === lesson._id)

                if (state.lessonIndex > -1) {
                    // If available: modify values
                    state.lessonIndex = state.cart.findIndex((item) => item._id === lesson._id)

                    // Increase space
                    state.cart[state.lessonIndex].spaces++;

                    // Increase price
                    state.cart[state.lessonIndex].price = parseInt(lesson.price) * parseInt(state.cart[state.lessonIndex].spaces)
                } else {
                    // If not available: add new lesson
                    state.cart.push({
                        '_id': lesson._id,
                        'subject': lesson.subject,
                        'location': lesson.location,
                        'price': lesson.price,
                        'spaces': 1,
                        'image': lesson.image
                    })
                }

                lesson.spaces--
                    console.log(state.cart)

            } else {
                this.error = "Lesson Not Available"
                this.snackbar = true
            }
        },
        clearCart(state) {
            state.cart = []
        }
    },
    actions: {
        async getLessons({ commit }) {
            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            }
            await fetch(`https://restapicoursework.herokuapp.com/lessons`, requestOptions)
                .then(response => response.json())
                .then(data => commit('setLessons', data))
                .catch(error => console.log('error', error));
        },
        removeFromCart(context, lesson) {
            context.state.cart.splice(context.commit("findLesson", lesson), 1)
        },
        clearCart(context) {
            context.commit('clearCart')
        },
        async checkedOut(context) {

            // Save order
            const order = {
                lessons: context.state.cart
            }

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(order),
                redirect: 'follow'
            };
            await fetch("https://restapicoursework.herokuapp.com/orders", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));


            // Update lesson
            context.state.cart.forEach((item) => {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({ "quantity": item.spaces });

                var requestOptions = {
                    method: 'PUT',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch(`https://restapicoursework.herokuapp.com/lessons/${item._id}`, requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
            })
        }
    },
    modules: {}
})