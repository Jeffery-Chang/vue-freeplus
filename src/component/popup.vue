<template>
    <div id="popup">
        <transition name="fade">
            <div class="popup" v-show="checkFG">
                <div class="main form-check"><a class="close" @click.prevent="checkFG = false" href=""><img src="../asset/svg/del.svg" alt=""/></a>
                    <p v-for="(item, $index) in chkmsg" v-html="item"></p>
                </div>
                <div class="bg"></div>
            </div>
        </transition>
        <transition name="fade">
            <div class="popup" v-show="doneFG">
                <div class="main finish"><a class="close" @click.prevent="doneFG = false" href=""><img src="../asset/svg/del.svg" alt=""/></a>
                    <div class="sub">謝謝您的參與<br>中獎名單將於2018/03/31公佈</div>
                    <h4 class="blue">＼邀您搶先體驗！／<br>                    【freeplus泡泡體驗快閃活動】 </h4>
                    <div class="sub">我的零添加主張，就從洗臉開始！ </div>
                    <div class="sub cafeBox">
                        <span>
                            <span class="cafe"><img src="../img/cafe.png" alt=""/></span>
                            <span>
                                <span class="break">凡參加freeplus泡泡體驗，</span>
                                <span class="break">即可獲得洗顏皂霜試用包及奶泡咖啡!</span>
                                <span class="break">※贈品數量有限，送完為止。</span>
                            </span>
                        </span></div>
                    <div class="sub-tt blue"> 活動時間 </div>
                    <div class="timeBox">
                        <div class="time">
                            <ul> 
                                <li class="date">3/2</li>
                                <li>17:00-21:00</li>
                            </ul>
                        </div>
                        <div class="time">
                            <ul> 
                                <li class="date">3/3-3/4</li>
                                <li>13:00-21:00</li>
                            </ul>
                        </div>
                    </div>
                    <div class="sub-tt blue"> 活動地點</div>
                    <div class="sub">ATT 4 fun forever21前廣場</div>
                    <div class="house"><img src="../img/house.png" alt=""/></div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'popup',
        data () {
            return {
                checkFG: false,
                chkmsg: [],
                doneFG: false
            }
        },
        mounted(){
            window.addEventListener('load', ()=> {
                
            });
        }
    }
</script>