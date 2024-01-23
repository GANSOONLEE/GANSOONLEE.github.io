
<style scoped>

</style>

<template>

    <div class="flex justify-center mt-12 w-full h-[calc(100vh-7.2rem)]">

        <div class="flex flex-col justify-center items-center w-auto h-auto">
            <img class="rounded-[100%] object-cover w-[60%] lg:w-full" src="../../public/img/profile.webp" alt="profile-picture">
            <p class="text-4xl mt-6">顏循禮 · Frank Gan</p>
            <p class="flex flex-col sm:block text-xl mt-4 text-orange-500">
                <span>馬來西亞人</span>
                <span class="separator-vertical-line hidden sm:inline mx-4 text-black"></span>
                <span>{{age}} 嵗</span>
                <span class="separator-vertical-line hidden sm:inline mx-4 text-black"></span>
                <span>全端工程師</span>
            </p>
        </div>

    </div>

</template>

<script>
export default({
    props: {
        age: Number
    }
})
</script>

