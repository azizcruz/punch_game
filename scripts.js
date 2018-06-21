new Vue({
    el:"#app",
    data: {
        ended: false,
        health: 100,
        hit: false
    },
    methods: {
        punch: function() {
            this.health -= 10;
            if(this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function() {
            this.health = 100;
            this.ended = false;
        },
        hitting: function() {
            this.hit = !this.hit;
        }
    }
})