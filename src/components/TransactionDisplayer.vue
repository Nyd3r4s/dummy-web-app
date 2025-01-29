<template>
    <div style="width: 300px;">
        <div class="h-full rounded-lg border-2 border-blue-500 flex flex-col relative overflow-hidden">
            <span v-if="transaction.amount < 500" class="bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                <div class="flex justify-center align-bottom mt-4">
                    <h1 class="sm:text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
                        {{ Math.floor(Math.random() * 1000) }}
                    </h1>
                    <img class="rounded-full w-16 h-16" src="./img.png" alt="Image" />
                </div>
                <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 uppercase">{{ transaction.type }}</h2>
                    <h1 class="title-font text-2xl font-semibold text-gray-900 mb-3">{{ transaction.amount }} {{ transaction.currency }}</h1>
                    <p class="leading-relaxed mb-3 text-gray-700">Chain: <span class="font-medium">{{ transaction.chain }}</span></p>
                    <p class="leading-relaxed mb-3 text-gray-500 text-sm">Created At: <span class="font-semibold text-gray-700">{{ new Date(transaction.createdAt).toLocaleDateString() }}</span></p>
                    <div class="flex items-center flex-wrap">
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Buy
                        </button>
                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                        </svg>{{ transaction.note }}
                        </span>
                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                        </span>
                    </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { Transaction } from "../models/models";
export default defineComponent({
    name: 'TransactionDisplayer',
    props: {
        transaction: {
            type: Object as () => Transaction,
            required: true
        }
    },
    setup() {
        return {
            // Return any reactive properties or methods here
        };
    },
});
</script>