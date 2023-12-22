
<template>

<div class="w-full">

    <div class="bg-gray-800 px-6 py-2">
        <p class="text-[.725rem] sm:text-sm text-white justify-center">© 2023 - {{ year }}, Frank Gan 顏循禮</p>
    </div>

    <div class="flex justify-between items-center bg-gray-900 text-white text-[.725rem] sm:text-sm px-6 py-3 flex-col gap-y-4 sm:flex-row sm:py-4">
        <p><span class="text-gray-400">Powered By</span> Frank Gan 顏循禮</p>

        <div class="flex items-center gap-x-2">
            <span class="text-gray-400">Hosting at</span>
            <img class="w-auto h-[1rem] object-cover invert" src="../../public/img/github.webp" alt="">Github
        </div>

        <div class="flex gap-x-2">
            <p class="flex items-center gap-x-[.5rem]"><img class="w-auto h-[1rem] object-cover" src="../../public/img/vue.webp" alt="">Vue</p>
            +
            <p class="flex items-center gap-x-[.5rem]"><img class="w-auto h-[1rem] object-cover" src="../../public/img/tailwind.webp" alt="">Tailwind css</p>
        </div>
    </div>
</div>

</template>

<script>

import { defineProps } from 'vue'

export default {
  props: {
    year: Number
  }
}

</script>