<template>
    <div>
        <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div class="flex justify-end mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
                        <!-- Algorand Logo -->
                        <g transform="translate(10, 10)">
                        <path d="M30.5,0 L0,60 L10,60 L20,40 L40,40 L50,60 L60,60 L30.5,0 Z M30.5,20 L40,20 L30.5,40 L20,20 L30.5,20 Z" fill="#000000"/>
                        </g>

                        <!-- Arrow -->
                        <g transform="translate(120, 40)">
                        <path d="M0,10 L60,10 L50,0 L60,10 L50,20" fill="none" stroke="#000000" stroke-width="2"/>
                        </g>

                        <!-- Bitcoin Logo -->
                        <g transform="translate(200, 10)">
                        <circle cx="30" cy="30" r="30" fill="#f7931a"/>
                        <path d="M30,10 C20.0589,10 12,18.0589 12,28 C12,37.9411 20.0589,46 30,46 C39.9411,46 48,37.9411 48,28 C48,18.0589 39.9411,10 30,10 Z M30,42 C22.268,42 16,35.732 16,28 C16,20.268 22.268,14 30,14 C37.732,14 44,20.268 44,28 C44,35.732 37.732,42 30,42 Z" fill="#ffffff"/>
                        <path d="M30,18 C26.6863,18 24,20.6863 24,24 C24,27.3137 26.6863,30 30,30 C33.3137,30 36,27.3137 36,24 C36,20.6863 33.3137,18 30,18 Z M30,26 C28.3431,26 27,24.6569 27,23 C27,21.3431 28.3431,20 30,20 C31.6569,20 33,21.3431 33,23 C33,24.6569 31.6569,26 30,26 Z" fill="#ffffff"/>
                        </g>
                    </svg>
                </div>
                <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">SALE</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">300 -> 20</h1>
                    <p class="leading-relaxed mb-3">Fake Transaction description.</p>
                    <div class="flex items-center flex-wrap">
                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Apply
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                        </svg>1.2K
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
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { Transaction } from "../models/models";
export default defineComponent({
    name: 'TransactionDisplayer',
    
    setup() {
        return {
            // Return any reactive properties or methods here
        };
    },
});
</script>