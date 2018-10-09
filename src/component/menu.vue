<template>
    <div id="menuHeader">
        <header :class="{ 'open' : menuFG }" v-if="!isNotIndex">
            <!--<a @click="gaclick('logo');" class="logo" href="index.html"> <img src="../asset/svg/logo.svg" alt="logo"></a>
            <div class="burBox" @click.prevent.stop="{ menuFG = !menuFG; gaclick('menu')"><a class="bur" :class="{ 'active' : menuFG }" href=""><span></span></a></div>-->
            <router-link class="logo" to="index"> <img src="../asset/svg/logo.svg" alt="logo"></router-link>
            <div class="burBox" @click.prevent.stop="menuFG = !menuFG"><router-link class="bur" :class="{ 'active' : menuFG }" to="index"><span></span></router-link></div>
        </header>
        <header v-else>
            <router-link class="logo" to="index"> <img src="../asset/svg/logo.svg" alt="logo"></router-link>
            <div class="burBox"><router-link class="bur active" to="index"><span></span></router-link></div>
        </header>
        <transition name="fade">
            <div class="menuBox" v-show="menuFG">
                <ul>
                    <!--<li><a @click.prevent.self="scrollToMenu(); gaclick('index')" :class="{ 'active' : pageStep == 0 }" href="#">回首頁</a></li>
                    <li><a @click.prevent.self="scrollToMenu('intro'); gaclick('brand')" :class="{ 'active' : pageStep == 1 }" href="#">品牌介紹</a></li>
                    <li><a @click.prevent.self="scrollToMenu('game'); gaclick('game')" :class="{ 'active' : pageStep == 2 }" href="#">捨/得測驗</a></li>
                    <li><a @click.prevent.self="scrollToMenu('about'); gaclick('products')" :class="{ 'active' : pageStep == 3 }" href="#">產品介紹</a></li>
                    <li><a @click.prevent.self="scrollToMenu('productBox'); gaclick('links')" :class="{ 'active' : pageStep == 4 }" href="#">立即選購</a></li>
                    <li><a @click="{ menuFG = false; gaclick('award')" href="award.html" target="_blank" v-if="showList">中獎名單</a></li>
                    <li><a @click="{ menuFG = false; gaclick('rules')" href="rule.html" target="_blank">活動辦法</a></li>-->
                    <li><router-link :class="{ 'active' : pageStep == 0 }" to="index">回首頁</router-link></li>
                    <li><a @click.prevent.self="scrollToMenu('intro')" :class="{ 'active' : pageStep == 1 }" href="#">品牌介紹</a></li>
                    <li><a @click.prevent.self="scrollToMenu('game')" :class="{ 'active' : pageStep == 2 }" href="#">捨/得測驗</a></li>
                    <li><a @click.prevent.self="scrollToMenu('about')" :class="{ 'active' : pageStep == 3 }" href="#">產品介紹</a></li>
                    <li><a @click.prevent.self="scrollToMenu('productBox')" :class="{ 'active' : pageStep == 4 }" href="#">立即選購</a></li>
                    <li><a @click.prevent="switchRoute('award')" v-if="showList" href="#">中獎名單</a></li>
                    <li><a @click.prevent="switchRoute('rule')" href="#">活動辦法</a></li>
                </ul><router-link class="menu-logo poabs" to="index"> <img src="../asset/svg/logo.svg" alt="logo"></router-link>
                <div class="pattern poabs"><img src="../asset/svg/pattern.svg" alt=""/>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'menuHeader',
        data () {
            return {
                menuFG: false,
                pageStep: 0
            }
        },
        computed:{
            showList(){
                var endTime = Date.parse('2018/01/31 00:00:00').valueOf();
                var nowTime = Date.parse(new Date()).valueOf();
                var result = nowTime >= endTime;
                return result;
            },
            isNotIndex(){
                return (this.$route.name == 'rule' || this.$route.name == 'award')
            }
        },
        mounted(){
            window.addEventListener('load', ()=> {
                
            });
        },
        methods:{
            switchRoute(page){
                this.menuFG = false;
                this.$router.push(page);
            },
            scrollToMenu(target){
                this.menuFG = false;
                this.$nextTick(() =>{
                    this.$parent.$parent.scrollMenu(target);
                });
            }
        }
    }
</script>