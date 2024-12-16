<script>
export default {
    data() {
        return {
        form: {
            wishes: "",
            name: "",
            company: "",
        },
        currentPage: 1,
        totalPages: 3,
        };
    },
    methods: {
        submitForm() {
        console.log(this.form);
        },
        nextPage() {
        this.currentPage++;
        },
        prevPage() {
        this.currentPage--;
        },
    },
}
</script>

<template>
    <section class="bg-gray-100 py-12">
        <!-- start greetings -->
        <div class="flex flex-col lg:flex-row">
            <div class="flex-4 p-4">
                <div class="grid grid-cols-1 gap-6">
                    <div class="flex space-x-6 overflow-x-auto">
                        <div class="bg-white p-6 rounded-lg shadow-lg flex-none w-80">
                            <p class="text-gray-700 mb-4">"This is the best service I have ever used. Highly recommend to everyone!"</p>
                            <div class="flex items-center">
                                <img class="w-10 h-10 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Avatar">
                                <div>
                                    <p class="text-gray-900 font-bold">John Doe</p>
                                    <p class="text-gray-600">CEO, Company</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-lg flex-none w-80">
                            <p class="text-gray-700 mb-4">"Amazing experience, will definitely use again."</p>
                            <div class="flex items-center">
                                <img class="w-10 h-10 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Avatar">
                                <div>
                                    <p class="text-gray-900 font-bold">Jane Smith</p>
                                    <p class="text-gray-600">CTO, Another Company</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-lg flex-none w-80">
                            <p class="text-gray-700 mb-4">"Exceptional quality and customer service."</p>
                            <div class="flex items-center">
                                <img class="w-10 h-10 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Avatar">
                                <div>
                                    <p class="text-gray-900 font-bold">Alice Johnson</p>
                                    <p class="text-gray-600">Manager, Some Company</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-lg flex-none w-80">
                            <p class="text-gray-700 mb-4">"Exceptional quality and customer service."</p>
                            <div class="flex items-center">
                                <img class="w-10 h-10 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Avatar">
                                <div>
                                    <p class="text-gray-900 font-bold">Alice Johnson</p>
                                    <p class="text-gray-600">Manager, Some Company</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-lg flex-none w-80">
                            <p class="text-gray-700 mb-4">"Exceptional quality and customer service."</p>
                            <div class="flex items-center">
                                <img class="w-10 h-10 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Avatar">
                                <div>
                                    <p class="text-gray-900 font-bold">Alice Johnson</p>
                                    <p class="text-gray-600">Manager, Some Company</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-lg flex-none w-80">
                            <p class="text-gray-700 mb-4">"Exceptional quality and customer service."</p>
                            <div class="flex items-center">
                                <img class="w-10 h-10 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Avatar">
                                <div>
                                    <p class="text-gray-900 font-bold">Alice Johnson</p>
                                    <p class="text-gray-600">Manager, Some Company</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-lg flex-none w-80">
                            <p class="text-gray-700 mb-4">"Exceptional quality and customer service."</p>
                            <div class="flex items-center">
                                <img class="w-10 h-10 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Avatar">
                                <div>
                                    <p class="text-gray-900 font-bold">Alice Johnson</p>
                                    <p class="text-gray-600">Manager, Some Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="flex-4 p-4">
                <div class="flex justify-center items-center mt-10">
                    <form @submit.prevent="submitForm" class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <div class="mb-4">
                            <label for="wishes" class="block text-sm font-medium text-gray-700">Wishes</label>
                            <textarea id="wishes" v-model="form.wishes" rows="3" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                        </div>
                        <div class="mb-4">
                            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" v-model="form.name" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
                        <div class="mb-4">
                            <label for="company" class="block text-sm font-medium text-gray-700">Company</label>
                            <input type="text" id="company" v-model="form.company" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
                        <div class="flex justify-end">
                            <button type="submit" class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        <!-- end of greetings -->
        <!-- start form -->
                
        <!-- end form -->
    </section>
</template>

<style scoped>
.first {
  @apply h-screen flex flex-col;
  @apply border-b border-b-stone-300;
}

.header {
  @apply absolute w-full;
  @apply flex justify-center items-center;
  @apply p-6;
}

.header__title {
  @apply text-xl font-extrabold;
  @apply text-red-800;
  @apply top-40;

  font-family: "Quentin";
}

.hero {
  @apply flex w-full h-full;
}

.hero__section {
  @apply w-full;

  /* &.--right {
    @apply bg-cover bg-bottom hidden;
    @apply lg:block;

    background-image: url("/src/assets/images/img_hero_cover.jpg");
  } */
}
</style>
