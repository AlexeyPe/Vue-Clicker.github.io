var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        score: 0, scoreUp: 1,    
        achievements: [
            { inte: 10, name: 'Кликните 10 раз', done: false },
            { inte: 20, name: 'Кликните 20 раз', done: false },
            { inte: 40, name: 'Кликните 120 раз', done: true },
            { inte: 50, name: 'Кликните 2940 раз', done: true },
        ],
        upgrade: [
            { idUp: 0, cost: 10, name: 'Увеличить получение очков', info: 'Очков за клик', info_int: 1, level: 0},
            { idUp: 1, cost: 100, name: 'Увеличить получение очков', info: 'Очков за клик', info_int: 2, level: 0 },
            { idUp: 2, cost: 350, name: 'Увеличить получение очков', info: 'Очков за клик', info_int: 3, level: 0 }
        ],
        skeleton: ['sound/skeleton/skeleton_1.mp3','sound/skeleton/skeleton_2.mp3','sound/skeleton/skeleton_3.mp3','sound/skeleton/skeleton_4.mp3','sound/skeleton/skeleton_5.mp3']
    },
    methods: {
        mainBtn: function() {
            this.counter++
            this.score += this.scoreUp

            let random = Math.floor(Math.random() * this.skeleton.length)
            let audio = new Audio(this.skeleton[random])
            audio.play()
        },
        shopBtnClick: function(item) {
            if(item.cost <= this.score) 
            {
                this.score -= item.cost
                this.scoreUp += item.info_int
                item.level++
                if(item.cost <= 999999) {
                    item.cost *= 2
                } else {
                    item.cost *= 1.2
                }
                document.querySelector('#upgrade').play()
            } 
            else {
                document.querySelector('#errorText').style.opacity = 1;
                setTimeout(() => {
                    document.querySelector('#errorText').style.opacity = 0;
                },1000)
                document.querySelector('#error').play()
            }
        }
    },
    computed: {
        achievementsUpdate: function() {
            this.achievements.forEach((item) => {
                if(item.inte == this.counter) {
                    if( item.done === false) {
                        item.done = true
                        document.querySelector('#complited').play()
                        document.querySelector('#complitedText').style.opacity = 1;
                        setTimeout(() => {
                            document.querySelector('#complitedText').style.opacity = 0;
                        },8000)
                    }
                }
            })
        }
    },
})