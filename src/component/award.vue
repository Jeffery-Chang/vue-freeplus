<template>
    <div class="wrap">
        <menuHeader></menuHeader>
        <div class="container">
            <div class="award-list"> 
                <h2 class="blue">零添加主張<br>捨/得測驗 中獎名單</h2>
                <div class="search">
                    <label>中獎查詢</label>
                    <div class="bar"><span class="icon poabs"><img src="../asset/svg/search.svg" alt=""/></span>
                        <input type="tel" maxlength="3" placeholder="請輸入手機末三碼" v-model="phoneKey">
                    </div>
                </div>
                <div class="awardBox" v-show="firstList.length">
                    <div class="award-tt">首獎</div>
                    <div class="award fir-award">
                        <div class="img">
                            <div class="fir-prize"><img src="../img/gift1.png" alt=""/>
                            </div>
                        </div>
                        <div class="txt fir-txt">freeplus溫和淨潤皂霜 &#038; <br>freeplus溫和淨潤卸粧霜<br>正貨乙組，共5名</div>
                    </div>
                    <div class="list">
                        <ul>
                            <li v-for="(first, $index) in firstList">
                                <span class="name">{{ first.name }}</span>
                                <span class="num">{{ first.phone }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="awardBox" v-show="secList.length">
                    <div class="award-tt">普獎</div>
                    <div class="award">
                        <div class="img">
                            <div class="normal-prize"><img src="../img/gift2.png" alt=""/>
                            </div>
                        </div>
                        <div class="txt">freeplus溫和淨潤皂霜7g<br> (三日份) 試用包乙份<br>共1992名</div>
                    </div>
                    <div class="list">
                        <ul>
                            <li v-for="(first, $index) in secList">
                                <span class="name">{{ first.name }}</span>
                                <span class="num">{{ first.phone }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="awardBox" v-show="!firstList.length && !secList.length">
                    <div class="txt">查無資料</div>
                </div>
                <div class="cirBox" v-show="phoneKey == ''">
                    <div class="poabs cir1 cir"><img src="../asset/svg/cir-w.svg" alt=""/>
                    </div>
                    <div class="poabs cir2 cir"><img src="../asset/svg/cir-w.svg" alt=""/>
                    </div>
                    <div class="poabs cir3 cir"><img src="../asset/svg/cir-w.svg" alt=""/>
                    </div>
                    <div class="poabs cir4 cir"><img src="../asset/svg/cir-w.svg" alt=""/>
                    </div>
                    <div class="poabs cir5 cir"><img src="../asset/svg/cir-w.svg" alt=""/>
                    </div>
                    <div class="poabs cir6 cir"><img src="../asset/svg/cir-w.svg" alt=""/>
                    </div>
                    <div class="poabs cir7 cir"><img src="../asset/svg/cir-w.svg" alt=""/>
                    </div>
                </div>
                <div class="pattern poabs"><img src="../asset/svg/pattern.svg" alt=""/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import menuHeader from './menu.vue';
    export default {
        name: 'rule',
        data () {
            return {
                awardList: [
                    { name: '李Ｘ燕', phone: '0929XXX409', type: 'A' },
                    { name: '李Ｘ燕', phone: '0929XXX215', type: 'A' },
                    { name: '李Ｘ燕', phone: '0929XXX588', type: 'A' },
                    { name: '李Ｘ燕', phone: '0929XXX412', type: 'A' },
                    { name: '李Ｘ燕', phone: '0929XXX409', type: 'A' },
                    { name: '李Ｘ燕', phone: '0929XXX358', type: 'B' },
                    { name: '李Ｘ燕', phone: '0929XXX739', type: 'B' },
                    { name: '李Ｘ燕', phone: '0929XXX873', type: 'B' },
                    { name: '李Ｘ燕', phone: '0929XXX665', type: 'B' },
                    { name: '李Ｘ燕', phone: '0929XXX431', type: 'B' },
                    { name: '李Ｘ燕', phone: '0929XXX447', type: 'B' },
                    { name: '李Ｘ燕', phone: '0929XXX999', type: 'B' },
                    { name: '李Ｘ燕', phone: '0929XXX299', type: 'B' },
                    { name: '李Ｘ燕', phone: '0929XXX989', type: 'B' },
                    { name: '李Ｘ燕', phone: '0929XXX399', type: 'B' },
                    { name: '李Ｘ燕', phone: '0929XXX589', type: 'B' },
                    { name: '李Ｘ燕', phone: '0929XXX559', type: 'B' },
                    { name: '李Ｘ燕', phone: '0929XXX768', type: 'B' },
                    { name: '李Ｘ燕', phone: '0929XXX768', type: 'B' },
                    { name: '李Ｘ燕', phone: '0929XXX675', type: 'B' },
                    { name: '李Ｘ燕', phone: '0929XXX409', type: 'B' }
                ],
                phoneKey: ''
            }
        },
        computed:{
            showList(){
                var endTime = Date.parse('2018/01/31 00:00:00').valueOf();
                var nowTime = Date.parse(new Date()).valueOf();
                var result = nowTime >= endTime;
                return result;
            },
            allList(){
                return (this.phoneKey === '') ? this.awardList : this.awardList.filter((item) => { return item.phone.slice(7, 10).indexOf(this.phoneKey) > -1; });
            },
            firstList(){
                return this.allList.filter((item) => { return item.type === 'A'; });
            },
            secList(){
                return this.allList.filter((item) => { return item.type === 'B'; });
            }
        },
        components: {
            menuHeader
        },
        mounted(){
            window.addEventListener('load', ()=> {
                
            });
        },
        methods:{
            
        }
    }
</script>