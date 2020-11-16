var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        counterUp: 1,    
        list: [
            { id: 0, name: 'Кликните 10 раз', done: false },
        ],
    },
    methods: {
        mainBtn: function() {
            console.log('mainBtn')
            this.counter += this.counterUp; 
            return this.counter;
        },
        counterUpM: function() {
            console.log('counterUpM')
            this.counterUp++
        }
    }
})