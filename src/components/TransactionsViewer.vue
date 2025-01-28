<script lang="ts">
import { defineComponent } from 'vue';
import { ArcpayClient, createClient, useArcpay } from "arcpay-sdk";
import type { Transaction } from "../models/models";
import { default as TransactionDisplayer } from './TransactionDisplayer.vue';
export default defineComponent({
    name: 'TransactionsViewer',
    components: {
        TransactionDisplayer
    },
    setup() {
        function sampleTest(): Transaction {
            return {
                amount: Math.random() * 1000,
                appId: Math.floor(Math.random() * 100),
                chain: 'ethereum',
                createdAt: new Date().toISOString(),
                currency: 'USD',
                fromAddress: '0x' + Math.random().toString(36).substring(2, 15),
                groupId: null,
                id: Math.random().toString(36).substring(2, 15),
                note: 'Sample transaction',
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

        const transactions = generateSampleTransactions(10);

        return {
            transactions
            // Return any reactive properties or methods here
        };
    },
});
</script>
<template>
    <div >
        <div v-for="transaction in transactions" :key="transaction.id" class="mt-20">
            <TransactionDisplayer :transaction="transaction" />
        </div>
    </div>
        
</template>