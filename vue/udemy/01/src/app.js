import Vue from 'vue/dist/vue.js';

new Vue({
    el: '#app',
    data: {
        title: 'Hello, World!'
    },
    methods: {
        changeTitle(e) {
            this.title = e.target.value;
        }
    }
})
