
<template>
    
    <ol class="flex flex-wrap justify-between items-center flex-col gap-x-16 sm:flex-row">
        <li v-for="education in educations" class="relative flex-1 mb-6 sm:mb-0">
            <div class="flex items-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </div>
                <div class="sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-500"></div>
            </div>
            <div class="mt-2 md:mt-4">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {{ education.educationLevel }}
                </h2>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                    於 {{ formatDate(education.admissionDate) }} 入學
                    <span v-if="education.completionDate !== null">
                        至
                        於 {{ formatDate(education.completionDate) }} 結業
                    </span>
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-300">
                    {{ education.schoolName }}
                </p>
            </div>
        </li>
    </ol>

</template>

<script setup>
import { ref } from 'vue';

const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const year = date.getFullYear() ?? null;
  const month = date.getMonth() + 1 ?? null;
  return `${year}年 ${month}月`;
};

const educations = ref([
    {
        educationLevel: '國小',
        admissionDate: '2011-01',
        completionDate: '2016-11',
        schoolName: '峇東加里國民型華小',
    },
    {
        educationLevel: '國中',
        admissionDate: '2017-01',
        completionDate: '2019-11',
        schoolName: '巴生濱華中學初中部',
    },
    {
        educationLevel: '高中',
        admissionDate: '2020-01',
        completionDate: '2021-11',
        schoolName: '巴生濱華中學高中部',
    },
    {
        educationLevel: '大學先修班',
        admissionDate: '2024-02',
        completionDate: null,
        schoolName: '國立台灣師範大學僑生先修部',
    },
    // {
    //     educationLevel: '大學',
    //     admissionDate: '2024-09',
    //     completionDate: '2028-09',
    //     schoolName: '國立XX大學',
    // }
])

</script>