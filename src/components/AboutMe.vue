
<style scoped>

</style>

<template>

    <div class="w-full bg-gray-700 px-8 py-6 pt-8 sm:py-4 sm:pt-14">

        <h2 class="text-3xl sm:text-4xl text-green-400 font-bold ">關於我 About Me</h2>

        <!-- 學歷 -->
        <div> 
            <h3 class="text-2xl text-slate-300 my-3 sm:mb-8">學歷 Euducation</h3>
            <div class="flex flex-col lg:flex-row">
                <!-- Timeline -->
                <div class="px-16 py-4 z-[1] w-full">
                    <TimeLine />
                </div>
            </div>
        </div>

        <!-- 證書 -->
        <!-- <div> 
            <h3 class="text-2xl text-slate-300 my-3 sm:mb-8">證書 Cetrificate</h3>
            <div class="flex flex-col lg:flex-row">
                
                <div class="px-16 py-4 z-[1] w-full">
                    <Diploma />
                </div>
            </div>
        </div> -->

    </div>

</template>

<script setup>
import TimeLine from './TimeLine.vue';
// import Diploma from './Diploma.vue';

defineProps({
    age: Number
})
</script>
