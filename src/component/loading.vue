<template>
    <transition name="fade">
        <div class="loadingBox" v-if="!loadFG">
            <div class="loading"></div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'loading',
        data () {
            return {
                loadFG: false
            }
        },
        mounted(){
            window.addEventListener('load', ()=> {
                this.loadFG = true;
            });
        }
    }
</script>