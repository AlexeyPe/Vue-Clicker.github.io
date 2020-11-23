var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        score: 0, scoreUp: 1, passiveScore: 0,    
        achievements: [
            { counter: 10, name: 'Кликните 10 раз', done: false },
            { counter: 100, name: 'Кликните 100 раз', done: false },
            { counter: 500, name: 'Кликните 500 раз', done: false },
            { counter: 1000, name: 'Кликните 1000 раз', done: false },
            { score: 100, name: 'Накопите 100 очков', done: false },
            { score: 500, name: 'Накопите 500 очков', done: false },
            { score: 1000, name: 'Накопите 1000 очков', done: false },
        ],
        upgrade: [
            { idUp: 0, cost: 10, name: 'Увеличить получение очков', info: 'Очков за клик', info_int: 1, level: 0},
            { idUp: 1, cost: 100, name: 'Увеличить получение очков', info: 'Очков за клик', info_int: 2, level: 0 },
            { idUp: 2, cost: 350, name: 'Увеличить получение очков', info: 'Очков за клик', info_int: 3, level: 0 },
            { idUp: 3, cost: 600, name: 'Автоматические очки', info: 'Очков в секунду', info_int: 1, level: 0 },
            { idUp: 3, cost: 1000, name: 'Автоматические очки', info: 'Очков в секунду', info_int: 2, level: 0 },
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
                item.level++
                document.querySelector('#upgrade').play()

                if (item.idUp == 3) {
                    if(item.cost <= 999999) {
                        item.cost *= 3
                    } else {
                        item.cost *= 1.5
                    }
                    return this.passiveScore *= this.info_int
                }
                if(item.cost <= 999999) {
                    item.cost *= 2
                } else {
                    item.cost *= 1.2
                }

                this.scoreUp += item.info_int
            } 
            else {
                document.querySelector('#errorText').style.display = "block";
                setTimeout(() => {
                    document.querySelector('#errorText').style.display = "none";
                },2500)
                document.querySelector('#error').play()
            }
        }
    },
    computed: {
        achievementsUpdate: function() {
            this.achievements.forEach((item) => {
                if(item.counter == this.counter) {
                    if( item.done === false) {
                        item.done = true
                        document.querySelector('#complited').play()
                        document.querySelector('#complitedText').style.display = "block";
                        setTimeout(() => {
                            document.querySelector('#complitedText').style.display = "none";
                        },4000)
                    }
                }
                if(item.score <= this.score) {
                    if( item.done === false) {
                        item.done = true
                        document.querySelector('#complited').play()
                        document.querySelector('#complitedText').style.display = "block";
                        setTimeout(() => {
                            document.querySelector('#complitedText').style.display = "none";
                        },4000)
                    }
                }
            })
        },
        scoreUpdate: function() {
            setInterval(() => {
                this.score += this.passiveScore
                clearInterval()
            },4000)
        }
    },
})