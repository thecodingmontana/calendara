<script setup lang="ts">
import { EditIcon, SearchIcon } from 'lucide-vue-next'

const times = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM']
const days = [
  { date: '14', name: 'Sun' },
  { date: '15', name: 'Mon' },
  { date: '16', name: 'Tue' },
  { date: '17', name: 'Wed' },
  { date: '18', name: 'Thu' },
  { date: '19', name: 'Fri' },
  { date: '20', name: 'Sat' },
]
</script>

<template>
  <div class="p-4">
    <!-- Sub-header -->
    <div class="flex justify-between items-center mb-4">
      <div class="flex items-center space-x-2">
        <span class="text-lg font-medium">April 2024</span>
        <EditIcon class="w-5 h-5 text-gray-500" />
      </div>
      <div class="flex items-center space-x-4">
        <span class="text-gray-500">April 14, 2024 - April 20, 2024</span>
        <div class="relative">
          <input
            type="text"
            placeholder="Search"
            class="pl-10 pr-4 py-2 border rounded-lg w-64"
          >
          <SearchIcon class="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
        </div>
        <button class="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Create Schedule
        </button>
      </div>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-8 gap-4">
      <!-- Time Markers -->
      <div class="col-span-1">
        <div
          v-for="time in times"
          :key="time"
          class="h-16 text-right pr-4"
        >
          {{ time }}
        </div>
      </div>

      <!-- Days -->
      <div
        v-for="day in days"
        :key="day.date"
        class="col-span-1"
      >
        <div class="text-center font-medium">
          {{ day.name }}
        </div>
        <div class="border-l h-full">
          <div
            v-for="time in times"
            :key="time"
            class="h-16 border-b border-gray-200"
          />
        </div>
      </div>
    </div>
  </div>
</template>
