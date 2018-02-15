import Vue from 'vue/dist/vue.js';

new Vue({
    el: '#app',
    data: {
        value: ''
    },
    methods: {
        showAlert() {
            alert(this.value);
        },
        updateValue(e) {
            this.value = e.target.value;
        }
    }
});
