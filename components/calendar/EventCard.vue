<script setup lang="ts">
const props = defineProps<{
  id: string
  title: string
  timeRange: string
  color: string
  avatars: Array
  attendeeCount: number
}>()

const emit = defineEmits(['dragstart', 'dragend'])

const onDragStart = (event: DragEvent) => {
  event.dataTransfer?.setData('text/plain', props.id)
  emit('dragstart', props.id)
}

const onDragEnd = () => {
  emit('dragend')
}
</script>

<template>
  <div
    class="rounded-lg p-3 shadow-sm bg-white/90 backdrop-blur-sm border-l-4 cursor-move"
    :style="{ borderColor: color }"
    draggable="true"
    @dragstart="onDragStart"
    @dragend="onDragEnd"
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
