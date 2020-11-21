var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        score: 0,    
        achievements: [
            { inte: 10, name: 'Кликните 10 раз', done: false },
            { inte: 20, name: 'Кликните 20 раз', done: false },
        ],
        upgrade: [
            { cost: 10, name: 'Увеличить получение очков', info: 'Очков за клик', info_int: 1 },
            { cost: 50, name: 'Увеличить получение очков', info: 'Очков за клик', info_int: 2 },
            { cost: 200, name: 'Увеличить получение очков', info: 'Очков за клик', info_int: 3 }
        ]
    },
    methods: {
        mainBtn: function() {
            this.counter++
            this.score++
        }
    },
    computed: {
        achievementsUpdate: function() {
            this.achievements.forEach((item) => {
                if(item.inte == this.counter) {
                    item.done = true
                }
            })
        }
    }
})