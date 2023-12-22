
<style scoped>

</style>

<template>

    <nav class="border-gray-600 bg-gray-800 sticky top-0">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <a href="https://github.frankgan.com" class="flex items-center space-x-5 rtl:space-x-reverse">
                <img src="../../public/img/transparent.webp" class="h-12" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Frankgan</span>
            </a>
            <button id="navbar" data-collapse-toggle="mega-menu-full" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                aria-controls="mega-menu-full" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div id="mega-menu-full" class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
                <ul
                    class="flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   border-gray-700">
                    <li>
                        <a href="#"
                            class="block py-2 px-3 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700"
                            aria-current="page">首頁</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-3 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700">關於我</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-3 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700">聯絡我</a>
                    </li>
                    <li>
                        <button id="triggerEl" data-collapse-toggle="mega-menu-full-dropdown"
                            class="flex items-center md:justify-between w-full py-2 px-3 rounded md:w-auto md:border-0  md:p-0 justify-center text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700">資源
                            <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div id="targetEl" class="sticky  mt-1 hidden shadow-sm  md:border-y bg-gray-800 border-gray-600">
            <div class="bg-gray-800 md:fixed relative min-w-absoulute-full md:top-[4.2rem] grid max-w-screen-xl px-4 py-5 mx-auto text-white sm:grid-cols-2 md:px-6">
                <ul>
                    <li>
                        <a href="#" class="block p-3 rounded-lg hover:bg-gray-700">
                            <div class="font-semibold">攝影</div>
                            <span class="text-sm text-gray-400">我的攝影作品</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="block p-3 rounded-lg hover:bg-gray-700">
                            <div class="font-semibold">網頁模板</div>
                            <span class="text-sm text-gray-400">經過我在網路上參考和自己設計排版的模板</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#" class="block p-3 rounded-lg hover:bg-gray-700">
                            <div class="font-semibold">Figma 設計稿</div>
                            <span class="text-sm text-gray-400">用戶界面的設計稿</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="block p-3 rounded-lg hover:bg-gray-700">
                            <div class="font-semibold">專案</div>
                            <span class="text-sm text-gray-400">關於我自己專案的開發過程，想法</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </nav>
</template>

<script setup>

    import { onMounted, ref } from 'vue';
    import { Collapse } from 'flowbite';

    let targetEl = ref(null);
    let triggerEl = ref(null);

    onMounted(() => {
        targetEl.value = document.querySelector('#targetEl');
        triggerEl.value = document.querySelector('#triggerEl');

        const options = {
            onCollapse: () => {},
            onExpand: () => {},
            onToggle: () => {},
        };

        const instanceOptions = {
            id: 'targetEl',
            override: true
        };

        const collapse = new Collapse(targetEl.value, triggerEl.value, options, instanceOptions);
    });

</script>