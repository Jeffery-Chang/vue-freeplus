<template>
    <div id="indexPage" v-cloak>
        <popup></popup>
        <div class="wrap">
            <menuHeader></menuHeader>
            <div class="container">
                <transition name="fade">
                    <div v-show="goGameFG" class="btnBox-kv poabs" @click.prevent.stop="scrollToMenu('game')"><a class="btn-game bg-blue" href="#">
                        <div class="inner"><span class="pro"><img src="../img/btn-pro.png" alt=""/></span><span>測驗抽正貨</span><span class="triBox"><span class="triangle"></span></span></div></a></div>
                </transition>
                <kv></kv>
                <intro></intro>
                <game></game>
                <about></about>
                <product></product>
                <shop></shop>
            </div>
        </div>
    </div>
</template>

<script>
    import ScrollReveal from 'scrollreveal';
    import popup from './popup.vue';
    import menuHeader from './menu.vue';
    import kv from './content/kv.vue';
    import intro from './content/intro.vue';
    import game from './content/game.vue';
    import about from './content/about.vue';
    import product from './content/product.vue';
    import shop from './content/shop.vue';
    window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame   ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
    })();
    window.sr = ScrollReveal({
        duration: 750,
        distance: '50px',
        easing: 'ease',
        opacity: 0,
        scale: 1
    });
    export default {
        name: 'index',
        data () {
            return {
                goGameFG: true
            }
        },
        components: {
            popup,
            menuHeader,
            kv,
            intro,
            game,
            about,
            product,
            shop
        },
        mounted(){
            this.initSR();
        },
        methods:{
            initSR(){
                // 上進物件
                var kvObj = '.kv h1';
                var introObj = '.intro .txt-fir, .intro .txt-sec, .intro .txt-thir';
                var gameObj = '.game .game-tt';
                var formObj = '.form h2, .form .sub, .form .main';
                var aboutObj = '.about h2, .about h3, .about .feature, .about .sub, .about .btn';
                var pdtObj = '.productBox .pro-kv, .productBox .product .bottom';
                var shopObj = '.shop h2, .shop h3, .shop .w-btn, .shop .img, .shop .btn, .shop .txt';
                var fadeInDownStr = kvObj + ', ' + introObj + ', ' + gameObj + ', ' + formObj + ', ' + aboutObj + ', ' + pdtObj + ', ' + shopObj;

                // 左進物件
                var formLeftObj = '.form .img img';
                var pftLeftObj = '.productBox .product.one .top .proBox, .productBox .product.two .detail';
                var fadeInLeftStr = formLeftObj + ', ' + pftLeftObj;

                // 右進物件
                var formRightObj = '.form .detail';
                var pftRightObj = '.productBox .product.one .detail, .productBox .product.two .top .proBox';
                var fadeInRightStr = formRightObj + ', ' + pftRightObj;


                // 從上面掉下來的所有物件
                sr.reveal(fadeInDownStr, {
                    origin: 'top',
                    delay: 250
                });

                // 左進
                sr.reveal(fadeInLeftStr, {
                    origin: 'left',
                    distance: '75px',
                    delay: 250
                });

                // 右進
                sr.reveal(fadeInRightStr, {
                    origin: 'right',
                    distance: '75px',
                    delay: 250
                });

                // kv產品現身
                sr.reveal('.kv .kv-product', {
                    distance: '0',
                    delay: 250
                });

                // kv泡泡們
                sr.reveal('.kv .mainBox .poabs.bubbleWord, .kv .mainBox .poabs .bubbleImg', {
                    duration: 1000,
                    origin: 'bottom',
                    distance: '200px',
                    scale: 0.7,
                    delay: 500
                });

                // game底板 .game .main
                // game選項 .game .stickerBox li
                // game文案 .game .game-sub
                sr.reveal('.game .step1 .main', {
                    duration: 500,
                    distance: '0',
                    delay: 500,
                    beforeReveal: function (domEl){
                        // game 物件進場 用css做
                        document.querySelector('.game .stickerBox ul').classList.add('active');
                        document.querySelector('.game .game-sub').classList.add('active');
                    }
                });
            },
            scrollToMenu(target){
                this.$parent.scrollMenu(target);
            }
        }
    }
</script>