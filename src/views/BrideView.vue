<template>
    <div class="bride">
        <div class="bride__profile --photo"></div>
        <div class="bride__profile">
            <span>Dita Rahma Puspitasari</span>
            <span>Putri dari Bapak Rochmadi dan Ibu Sujilah</span>
        </div>
    </div>
</template>

<style scoped>
.bride {
    @apply h-screen w-full;
    @apply flex;
}

.bride__profile {
    @apply w-full;
}

.bride__profile.--photo {
    @apply bg-cover bg-bottom;

    background-image: url(@/assets/images/img_bride.jpg);
}
</style>