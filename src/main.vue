<template>
    <div id="app">
        <loading></loading>
        <transbg></transbg>
        <router-view></router-view>
    </div>
</template>

<script>
    import loading from './component/loading.vue';
    import transbg from './component/transbg.vue';
    export default {
        name: 'app',
        data () {
            return {
                
            }
        },
        components:{
            loading,
            transbg
        },
        mounted(){
            window.addEventListener('load', ()=> {
                
            });
        },
        methods:{
            scrollMenu(target){
                var target = target || null;
                if(target) target = document.querySelector('.'+target).offsetTop - document.querySelector('header').offsetHeight;

                this.scrollToY(target);
            },
            scrollToY(scrollTargetY, speed, easing, callback){
                var scrollY = window.scrollY || document.documentElement.scrollTop,
                    scrollTargetY = scrollTargetY || 0,
                    speed = speed || 200,
                    easing = easing || 'easeOutSine',
                    callback = callback || null,
                    currentTime = 0;
                var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));
                var easingEquations = {
                    easeOutSine: function (pos) {
                        return Math.sin(pos * (Math.PI / 2));
                    },
                    easeInOutSine: function (pos) {
                        return (-0.5 * (Math.cos(Math.PI * pos) - 1));
                    },
                    easeInOutQuint: function (pos) {
                        if ((pos /= 0.5) < 1) {
                            return 0.5 * Math.pow(pos, 5);
                        }
                        return 0.5 * (Math.pow((pos - 2), 5) + 2);
                    }
                };
                function tick() {
                    currentTime += 1 / 60;
                    var p = currentTime / time;
                    var t = easingEquations[easing](p);

                    if (p < 1) {
                        requestAnimFrame(tick);
                        window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
                    } else {
                        window.scrollTo(0, scrollTargetY);
                        if(callback) callback();
                    }
                }
                tick();
            }
        }
    }
</script>

<style>
    @import 'css/style.css';
    @import 'css/self.css';
</style>