import Vue from 'vue/dist/vue.js';

new Vue({
    el: '#app',
    data: {
        finishedLink: '<a href="https://google.com">Google</a>',
        link: 'https://google.com',
        title: 'Hello, World!'
    },
    methods: {
        sayHello() {
            this.title = 'Hello!';
            return this.title;
        }
    }
});

new Vue({
    el: '#event-handling',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increase: function(event, step) {
            this.counter += step;
        },
        updateCoordinates: function(event) {
            this.x = event.clientX,
            this.y = event.clientY
        },
        dummy: function(event) {
            event.stopPropagation();
        },
        logMe() {
            console.log('Hello!');
        }
    }
});
