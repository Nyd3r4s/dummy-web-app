<script setup lang="ts">
import { createClient, useArcpay } from "arcpay-sdk";
import { ref, onMounted } from "vue";
const apiKey = import.meta.env.VITE_PRIVATE_API_KEY;

onMounted(() => {
  // Instantiate the arcpay client singleton for a given network. Calling this method twice with the same network will return the same instance.
  createClient("algo:testnet", {
    apiKey: apiKey, // API key can be obtained from the arcpay dashboard
  });
});

const handleEvent = async () => {
  console.log("blabla");
  // You can use the useArcpay helper to get the client instance after instantiating it.
  const client = useArcpay("algo:testnet");
  console.log(client);

  console.log(await client.getListings());

  // Create a VOI -> ARC-72 sale
  const listingId: string = await client.create({ listingType: "sale" });
  console.log(listingId);

  // Get all listings for your account
  const listings = await client.getListings();
  console.log(listings);
};
</script>

<template>
  <section class="text-gray-200 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div
        class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto"
      >
        <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font">
          Sample dummy test
        </h1>
        <button
          @click="handleEvent"
          class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
        >
          Create a Sale
        </button>
      </div>
    </div>
  </section>
</template>
