<script setup lang="ts">
defineProps<{
  title: string
  timeRange: string
  color: string
  avatars: Array
  attendeeCount: number
}>()
</script>

<template>
  <div
    class="rounded-lg p-3 shadow-sm bg-white/90 backdrop-blur-sm border-l-4"
    :style="{ borderColor: color }"
  >
    <div class="font-semibold">
      {{ title }}
    </div>
    <div class="text-sm text-gray-500">
      {{ timeRange }}
    </div>
    <div class="flex items-center mt-2">
      <div class="flex -space-x-2">
        <div
          v-for="(avatar, index) in avatars"
          :key="index"
          class="w-6 h-6 bg-gray-300 rounded-full"
        />
      </div>
      <span class="text-sm text-gray-500 ml-2">{{ attendeeCount }}+</span>
    </div>
  </div>
</template>
