<template>
    <section class="game">
        <transition name="fade">
            <div class="step1" v-show="gameStep == 0">
                <div class="leaf leaf01"></div>
                <div class="leaf leaf02"></div>
                <div class="leaf leaf03"></div>
                <div class="game-tt blue"><span>零添加主張</span><span>
                    <span class="underline">捨/得測驗</span></span><span class="sub">學會捨棄，才能讓生活別具意義</span></div>
                <div class="tree poabs"><img src="../../img/tree.png" alt=""/>
                </div>
                <div class="main">
                    <div class="stickerBox">
                        <ul>
                            <li @click.prevent.stop="choosen = 0"><a class="option1" :class="{ 'active' : choosen == 0 }" href="#"><span class="img"><img src="../../img/sticker/option1.png" alt=""/></span>
                                <span class="txt">瓶瓶罐罐</span></a></li>
                            <li @click.prevent.stop="choosen = 1"><a class="option2" :class="{ 'active' : choosen == 1 }" href="#"><span class="img"><img src="../../img/sticker/option2.png" alt=""/></span>
                                <span class="txt">舊娃娃</span></a></li>
                            <li @click.prevent.stop="choosen = 2"><a class="option3" :class="{ 'active' : choosen == 2 }" href="#"><span class="img"><img src="../../img/sticker/option3.png" alt=""/></span>
                                <span class="txt">速食快餐</span></a></li>
                            <li @click.prevent.stop="choosen = 3"><a class="option4" :class="{ 'active' : choosen == 3 }" href="#"><span class="img"><img src="../../img/sticker/option4.png" alt=""/></span>
                                <span class="txt">摩托車</span></a></li>
                            <li @click.prevent.stop="choosen = 4"><a class="option5" :class="{ 'active' : choosen == 4 }" href="#"><span class="img"><img src="../../img/sticker/option5.png" alt=""/></span>
                                <span class="txt">彩妝品</span></a></li>
                            <li @click.prevent.stop="choosen = 5"><a class="option6" :class="{ 'active' : choosen == 5 }" href="#"><span class="img"><img src="../../img/sticker/option6.png" alt=""></span><span class="txt">和前男友的<br>合照</span></a></li>
                        </ul>
                    </div>
                    <div class="game-sub">請點擊一項<span class="blue">最想捨棄</span>的東西<br>測出妳的零添加主張</div>
                </div><a class="btn" @click.prevent="changeStep(1, 'game')" href="#">我決定好了<span class="arrow"></span></a>
            </div>
        </transition>
        <transition name="fade">
            <div class="step2" v-show="gameStep == 1">
                <div class="main">
                    <div class="result-tt"><span>肌膚的</span><span><span class="blue underline"> <span class="dot">零</span><span class="dot">添</span><span class="dot">加</span></span><span>秘密是</span></span></div>
                    <div class="resultBox">
                        <div class="topic" v-show="choosen == 2 || choosen == 4">斷</div>
                        <div class="topic" v-show="choosen == 0 || choosen == 5">捨</div>
                        <div class="topic" v-show="choosen == 1 || choosen == 3">離</div>
                        <div class="detail" v-show="choosen == 0">
                            <div class="img result1"><img src="../../img/sticker/result1.png" alt=""/>
                            </div>
                            <div class="txt">妳懂得捨棄過多的想要，<br>留下真正需要，<br>就像<span>freeplus零添加，<br></span>才是對自己真正好。 </div>
                        </div>
                        <div class="detail" v-show="choosen == 1">
                            <div class="img result2"><img src="../../img/sticker/result2.png" alt=""/>
                            </div>
                            <div class="txt">妳擁有揮別過往的勇氣，<br>擁抱<span>零添加、低刺激的freeplus，<br></span>重啟純淨美肌。</div>
                        </div>
                        <div class="detail" v-show="choosen == 2">
                            <div class="img result3"><img src="../../img/sticker/result3.png" alt=""/>
                            </div>
                            <div class="txt">妳願意斷開不好的事物，<br>如同<span>freeplus零添加香料色素，<br></span>才能展現生活的真實本色。 </div>
                        </div>
                        <div class="detail" v-show="choosen == 3">
                            <div class="img result4"><img src="../../img/sticker/result4.png" alt=""/>
                            </div>
                            <div class="txt">踏上純淨之路的你，<br>選擇對地球溫柔，<br>就像<span>零添加的freeplus<br></span>給肌膚的溫柔呵護。</div>
                        </div>
                        <div class="detail" v-show="choosen == 4">
                            <div class="img result5"><img src="../../img/sticker/result5.png" alt=""/>
                            </div>
                            <div class="txt">偶爾擁抱舒服的素顏！<br> 選擇<span>零添加的freeplus，<br></span>重拾自然少負擔的肌膚保養。 </div>
                        </div>
                        <div class="detail" v-show="choosen == 5">
                            <div class="img result6"><img src="../../img/sticker/result6.png" alt=""/>
                            </div>
                            <div class="txt">妳理解捨棄與釋懷後，<br>才能迎接全新局面，<br>就讓<span>零添加的freeplus，</span><br>還你真美顏。</div>
                        </div><a class="btn-again" @click.prevent="changeStep(0, 'game')" href="#">
                        <div class="inner">
                            <div class="content"><span class="icon"> <img src="../../asset/svg/again.svg" alt=""/></span><span>再玩一次</span></div>
                        </div></a>
                    </div>
                    <div class="leaves"><img src="../../img/leaves.png" alt=""/>
                    </div>
                </div>
                <div class="btnBox"><a class="fb btn" @click.prevent="shareFB" href="#"><span class="icon"><img src="../../asset/svg/fb.svg" alt=""/></span><span>分享零添加秘密</span></a><a class="go btn" @click.prevent="changeStep(2, 'form')" href="#"><span class="product"><img src="../../img/btn-game-pro.png" alt=""/></span><span>填單抽正貨</span></a></div>
            </div>
        </transition>
    </section>
</template>

<script>
    import isMobile from 'ismobilejs';
    export default {
        name: 'game',
        data () {
            return {
                gameStep: 0,
                choosen: 999
            }
        },
        computed:{
            isNext(){
                return (this.choosen != 999 && this.choosen >= 0 && this.choosen <= 5);
            }
        },
        mounted(){
            window.addEventListener('load', ()=> {
                
            });
        },
        methods:{
            changeStep(cnt, to){
                if(cnt == 1 && this.isNext){
                    this.gameStep = cnt;
                }else if(cnt == 0){
                    this.gameStep = cnt;
                    this.choosen = 999;
                }else if(cnt == 2 && this.isNext){

                }
                this.$nextTick(function(){
                    this.$parent.$parent.scrollMenu(to);
                });
            },
            shareFB(track){
                var date = new Date();
                var year = date.getFullYear().toString();
                var month = (date.getMonth()+1).toString();
                var day = ((date.getDate() < 10) ? '0' : '') + date.getDate().toString();
                var urlDate = year + month + day;

                var fb_url = (isMobile.phone) ? 'http://m.facebook.com/sharer.php?u=' : 'http://www.facebook.com/sharer.php?u=';
                var fbBack_url = (track) ? track + '&v=' + urlDate : '?v=' + urlDate;
                var share_u;
                share_u = 'https://goo.gl/UzRE23' + fbBack_url;
                window.open(fb_url + encodeURIComponent(share_u), 'sharer', 'toolbar=0,status=0,width=656,height=436');
            }
        }
    }
</script>