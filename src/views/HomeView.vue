<script lang="ts">
import { defineComponent } from 'vue';
import TransactionsViewer from '../components/TransactionsViewer.vue';
export default defineComponent({
    name: 'HomeView',
    components: {
      TransactionsViewer
    },
    setup() {
        return {
            // Return any reactive properties or methods here
        };
    },
});
</script>

<template>
 <header class="text-gray-600 body-font">
   <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" 
      class="w-10 h-10 text-white bg-gradient-to-br from-cyan-400 to-purple-500 p-2 rounded-full">
         <path d="M6 3L2 9l10 12L22 9l-4-6H6z"></path>
         <path d="M2 9h20"></path>
         <path d="M12 22L8 9"></path>
         <path d="M16 9L12 22"></path>
         <path d="M2 9l10 3 10-3"></path>
       </svg>
       <span class="ml-3 text-xl">Good morning !</span>
     </a>
    
     <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
       <a class="mr-5 hover:text-gray-900">My listing</a>
       <a class="mr-5 hover:text-gray-900">History</a>
       <a class="mr-5 hover:text-gray-900">AlgoGems</a>
     </nav>
   </div>
 </header>
	<div class="text-center mb-20 mt-20">
	  <h1 class="text-6xl font-bold title-font text-gray-900 mb-4">This is the 
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Dummy Gems </span> 
      App</h1>
	  <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Nothing important to read there.</p>
	  <div class="flex mt-6 justify-center">
		<div class="w-16 h-1 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 inline-flex"></div>
	  </div>
    <transactions-viewer class="mt-20" />
	</div>
</template>
