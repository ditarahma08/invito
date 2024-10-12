<template>
    <div class="quote">
        <p> Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.</p>
        <span>(QS Ar-Rum:21)</span>
    </div>
</template>

<style scoped>
.quote {
    @apply flex flex-col items-center justify-center;
    @apply text-center gap-4 my-36;
}

.quote p {
    @apply max-w-[320px] md:max-w-[600px] lg:max-w-[700px];
    @apply text-xl;
}

.quote span {
    @apply text-xl font-bold;
}
</style>