<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { ArcpayClient, createClient, useArcpay } from "arcpay-sdk";
import type { Transaction } from "../models/models";
import { default as TransactionDisplayer } from './TransactionDisplayer.vue';
import { useDark } from '@vueuse/core';

export default defineComponent({
    name: 'TransactionsViewer',
    components: {
        TransactionDisplayer
    },
    setup() {
        let client : ArcpayClient;
        const apiKey = import.meta.env.VITE_PRIVATE_DEV_API_KEY;
        const isDark = useDark();

        onMounted(() => {
            // Instantiate the arcpay client singleton for a given network. Calling this method twice with the same network will return the same instance.
            createClient("algo:testnet", {
                apiKey: apiKey, // API key can be obtained from the arcpay dashboard
                darkMode: useDark().value
            }).toggleDarkMode(isDark.value);
            client = useArcpay("algo:testnet");
        });

        const createListing = async () => {
            // You can use the useArcpay helper to get the client instance after instantiating it.

            console.log(await client.getListings());

            // Create a VOI -> ARC-72 sale
            const listingId: string = await client.create({ listingType: "sale" });
            console.log(listingId);
        };

        function sampleTest(): Transaction {
            const currencies = ['USD', 'Algo', 'Gem', 'Trump'];
            const randomCurrency = currencies[Math.floor(Math.random() * currencies.length)];
            return {
                amount: Math.floor(Math.random() * 1000),
                appId: Math.floor(Math.random() * 100),
                chain: 'ethereum',
                createdAt: new Date().toISOString(),
                currency: randomCurrency,
                fromAddress: '0x' + Math.random().toString(36).substring(2, 15),
                groupId: null,
                id: Math.random().toString(36).substring(2, 15),
                note: Math.floor(Math.random() * 100).toString(),
                type: 'transfer',
                listings: null,
            };
        }
        // Add your TypeScript code here
        function generateSampleTransactions(count: number): Transaction[] {
            const transactions: Transaction[] = [];
            for (let i = 0; i < count; i++) {
            transactions.push(sampleTest());
            }
            return transactions;
        }

        const transactions = generateSampleTransactions(20);

        return {
            transactions,
            createListing,
            // Return any reactive properties or methods here
        };
    },
});
</script>
<template>
    <div class="flex justify-center mb-4 mt-10 mb-10">
        <button @click="createListing" class="relative text-white font-bold py-1 px-1 rounded-full flex items-center border-4 border-transparent g transform transition-transform duration-300 hover:scale-105 active:scale-95">
            <span class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
            <span class="relative  bg-white rounded-full py-1 px-2 flex items-center">
                <img src="./logo-CPhBn9kk.png" class="w-6 h-6 mr-2 " alt="Logo" />
                <span class="text-black " >Make a listing</span>
            </span>
        </button>
    </div>
    <div class="grid grid-cols-3 gap-4">
        <div v-for="transaction in transactions" :key="transaction.id" >
            <TransactionDisplayer :transaction="transaction" />
        </div>
    </div>
        
</template>