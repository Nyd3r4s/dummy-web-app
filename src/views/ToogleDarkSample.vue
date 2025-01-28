<script setup lang="ts">
import { ArcpayClient, createClient, useArcpay } from "arcpay-sdk";
import { ref, onMounted } from "vue";
import { useDark, useToggle } from '@vueuse/core';

const apiKey = import.meta.env.VITE_PRIVATE_DEV_API_KEY;
const isDark = useDark()
let client : ArcpayClient;
 const toggleTheme = useToggle(isDark);

onMounted(() => {
  // Instantiate the arcpay client singleton for a given network. Calling this method twice with the same network will return the same instance.
  createClient("algo:testnet", {
    apiKey: apiKey, // API key can be obtained from the arcpay dashboard
    darkMode: useDark().value
  }).toggleDarkMode(isDark.value);
  client = useArcpay("algo:testnet");

});

const handleEvent = async () => {
  // You can use the useArcpay helper to get the client instance after instantiating it.

  console.log(await client.getListings());

  // Create a VOI -> ARC-72 sale
  const listingId: string = await client.create({ listingType: "sale" });
  console.log(listingId);
  
};

const listListings = async () => {
  // You can use the useArcpay helper to get the client instance after instantiating it.

  console.log(await client.getListings());
};

const toggleDark = () => {
  toggleTheme();
  console.log(isDark.value);
  client.toggleDarkMode(isDark.value);
};

</script>

<template>
  <div>
    
    <btn
    @click="toggleDark"
    class="flex-shrink-0 text-white dark:bg-indigo-400 dark:hover:bg-indigo-800 bg-green-400 hover:bg-green-900 border-0 py-2 px-8 focus:outline-none text-lg mt-10 sm:mt-0 ml-4 rounded"
  >
    Toggle Dark Mode : {{ isDark }}
  </btn>
      <div class="p-4 md:w-1/3">
        
          <div class="h-full border-8 border-gray-900 border-opacity-60 rounded-lg overflow-hidden">
              <div class="p-6">
                  <h1 class="tracking-widest title-font font-medium text-gray-400 mb-1 pb-8">Sample dummy test</h1>
                  <btn class="flex-shrink-0 text-white  dark:bg-indigo-400 dark:hover:bg-indigo-800 bg-green-400 hover:bg-green-900 border-0 py-2 px-8 focus:outline-none rounded text-lg" 
                  @click="handleEvent"
        >
          Sell to arcpay
        </btn>
        
              </div>
          </div>
          <div class="h-full border-8 border-gray-900 border-opacity-60 rounded-lg overflow-hidden">
            <div class="p-6">
          <btn class="flex-shrink-0 text-white  dark:bg-indigo-400 dark:hover:bg-indigo-800 bg-green-400 hover:bg-green-900 border-0 py-2 px-8 focus:outline-none rounded text-lg" 
                  @click="listListings"
        >
          List listings
        </btn>
        </div></div>
      </div>
      </div>
</template>
