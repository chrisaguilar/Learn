import Vue from 'vue/dist/vue.js';

new Vue({
    el: '#app',
    data: {
        age: 21,
        cat: 'https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg',
        name: 'Chris'
    },
    methods: {
        randInt() {
            return Math.floor(Math.random() * 100);
        }
    }
});
