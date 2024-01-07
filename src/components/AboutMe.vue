
<style scoped>

</style>

<template>

    <div class="w-full bg-gray-700 px-8 py-2 pt-8 sm:py-4 sm:pt-14">

        <h2 class="text-xl sm:text-4xl text-orange-400 font-bold mb-3 sm:mb-8">關於我 About Me</h2>

        <div class="flex flex-col lg:flex-row">
    
            <!-- About Me -->
            <div class="">
    
                <ul class="w-[22rem] sm:w-[28rem]">
                    <li class="text-sm sm:text-lg flex flex-col lg:flex-row text-start py-2 text-white">
                        <div class="w-[45%] text-nowrap">名稱 Name:</div>
                        <div class="w-[55%] text-nowrap">顏循禮 Frank Gan Soon Lee</div>
                    </li>
                    <li class="text-sm sm:text-lg flex flex-col lg:flex-row text-start py-2 text-white">
                        <div class="w-[45%] text-nowrap">年齡 Age:</div>
                        <div class="w-[55%] text-nowrap">{{ age }}</div>
                    </li>
                    <li class="text-sm sm:text-lg flex flex-col lg:flex-row text-start py-2 text-white">
                        <div class="w-[45%] text-nowrap">生日 Date of Birth:</div>
                        <div class="w-[55%] text-nowrap">2004 April 02</div>
                    </li>
                    <li class="text-sm sm:text-lg flex flex-col lg:flex-row text-start py-2 text-white">
                        <div class="w-[45%] text-nowrap">電子郵件 Email:</div>
                        <div class="w-[55%] text-nowrap">vincentgan0402@gmail.com</div>
                    </li>
                    <li class="text-sm sm:text-lg flex flex-col lg:flex-row text-start py-2 text-white">
                        <div class="w-[45%] text-nowrap">國籍 Nationality:</div>
                        <div class="w-[55%] text-nowrap">馬來西亞 Malaysia</div>
                    </li>
                </ul>
    
            </div>

            <!-- Timeline -->
            <div class="px-16 py-4 z-[1] w-full">
                <TimeLine />
            </div>

        </div>

    </div>

</template>

<script setup>
import TimeLine from './TimeLine.vue';

defineProps({
    age: Number
})
</script>
