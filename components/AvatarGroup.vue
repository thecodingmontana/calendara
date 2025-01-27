<template>
  <div
    :class="cn('flex items-center -space-x-2', className)"
    v-bind="props"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

interface AvatarGroupProps {
  className?: string
}

const props = defineProps<AvatarGroupProps>()
</script>

  <style scoped>
  /* Add custom styles if needed */
  </style>
