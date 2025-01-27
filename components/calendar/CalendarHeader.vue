<script setup lang="ts">
const views = ['Weekly', 'Monthly', 'Yearly']
const activeView = ref('Weekly')

const setView = (view: string) => {
  activeView.value = view
}
</script>

<template>
  <div class="bg-white border-b p-4 flex justify-between items-center">
    <!-- Left Side -->
    <div class="flex items-center space-x-4">
      <h1 class="text-xl font-bold">
        My Calendar
      </h1>
      <div class="flex space-x-2">
        <button
          v-for="view in views"
          :key="view"
          :class="{ 'bg-blue-500 text-white': activeView === view, 'bg-gray-100': activeView !== view }"
          class="px-4 py-2 rounded-lg"
          @click="setView(view)"
        >
          {{ view }}
        </button>
      </div>
      <button class="px-4 py-2 bg-gray-100 rounded-lg">
        Export
      </button>
      <button class="px-4 py-2 bg-gray-100 rounded-lg">
        Deleted Schedule
      </button>
    </div>

    <!-- Right Side -->
    <button class="px-4 py-2 bg-blue-500 text-white rounded-lg">
      Invite User
    </button>
  </div>
</template>
