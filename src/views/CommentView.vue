<script>
    import { db } from "@/firebase";
    import { query, collection, addDoc, orderBy, getDocs } from "firebase/firestore";

    export default {
    data:() => {
        return {
            form: {
                wishes: "",
                name: "",
                company: "",
            },
            wishSubmitted: false,
            wishesList: []
        }
    },
    created() {
        this.fetchWishesList();
    },
    methods: {
        async fetchWishesList() {
            try {
                const querySnapshot = await getDocs(query(collection(db, "comments"), orderBy("timestamp", "desc")));
                this.wishesList = querySnapshot.docs.map(doc => doc.data());
                console.log("Fetched list:", this.wishesList)       
            } catch (e) {
                console.error("Error fetching comments: ", e);
            }
        },
        async submitForm() {
            if (this.wishSubmitted) {
                alert("Kirim sekali saja ya kak :)");
                return;
            } else {
                try {
                await addDoc(collection(db, "comments"), {
                    wishes: this.form.wishes,
                    name: this.form.name,
                    company: this.form.company,
                    timestamp: new Date()
                });
                this.wishSubmitted = true;
                this.fetchWishesList();
                this.resetForm();
            } catch (e) {
                console.error("Error adding document: ", e);
                alert("Error submitting comment. Please try again.");
            }
            }
        },
        resetForm() {
            this.form.wishes = "";
            this.form.name = "";
            this.form.company = "";
        }
    },
}
</script>

<template>
    <section class="py-16 px-4 md:px-12 border-b border-b-stone-300">
        <!-- start greetings -->
        <div class="flex flex-col">
            <div class="flex-4">
                <div class="flex justify-center items-center mb-10">
                    <form @submit.prevent="submitForm" class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <div class="mb-4">
                            <label for="wishes" class="block text-sm font-medium text-gray-700">Wishes</label>
                            <textarea id="wishes" v-model="form.wishes" rows="3" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"></textarea>
                        </div>
                        <div class="mb-4">
                            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" v-model="form.name" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm">
                        </div>
                        <div class="mb-4">
                            <label for="company" class="block text-sm font-medium text-gray-700">From</label>
                            <input type="text" id="company" v-model="form.company" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm">
                        </div>
                        <div class="flex justify-end">
                            <button type="submit" :disabled="!form.wishes || !form.name || !form.company" class="px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-800" :class="{'opacity-50 cursor-not-allowed': !form.wishes || !form.name || !form.company}">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="flex">
                <div class="grid grid-cols-1 gap-6">
                    <div class="flex space-x-6 overflow-x-auto">
                        <div class="bg-white p-6 rounded-lg shadow-lg flex-none w-80" v-for="(wish, index) in wishesList" :key="index">
                            <p class="text-gray-700 mb-4">{{ wish.wishes }}</p>
                            <div class="flex items-center">
                                <div>
                                    <p class="text-red-800 font-bold">{{ wish.name }}</p>
                                    <p class="text-gray-600">{{ wish.company }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
