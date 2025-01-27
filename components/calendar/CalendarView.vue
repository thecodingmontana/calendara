<template>
  <div class="flex h-full flex-col">
    <!-- Header Row (Days of the Week) -->
    <div class="flex border-b">
      <div class="w-20 border-r bg-muted/5" />
      <div
        v-for="day in days"
        :key="day.toString()"
        class="flex-1 border-r px-2 py-3 text-center"
      >
        <div class="text-sm font-medium">
          {{ format(day, "EEE") }}
        </div>
        <div class="text-xs text-muted-foreground">
          {{ format(day, "d") }}
        </div>
      </div>
    </div>

    <!-- Scrollable Calendar Grid -->
    <ScrollArea class="flex-1">
      <div class="relative">
        <!-- Time Slots -->
        <div
          v-for="hour in timeSlots"
          :key="hour"
          class="flex border-b"
        >
          <!-- Time Label -->
          <div class="w-20 border-r bg-muted/5 p-2 text-xs">
            {{ format(new Date().setHours(hour, 0), "h:mm a") }}
          </div>

          <!-- Events for Each Day -->
          <div
            v-for="day in days"
            :key="`${day}-${hour}`"
            class="relative flex-1 border-r"
            :style="{ height: '4rem' }"
          >
            <!-- Draggable Event Cards -->
            <draggable
              :list="getEventsForHour(day, hour)"
              group="calendar-events"
              item-key="id"
              class="h-full"
              @start="onDragStart"
              @end="onDragEnd"
            >
              <template #item="{ element: event }">
                <Card
                  class="absolute left-1 right-1 m-1 overflow-hidden border"
                  :class="[getEventStyle(event.type), { 'opacity-50': isDragging && draggedEventId === event.id }]"
                >
                  <CardContent class="p-2">
                    <div class="flex items-center justify-between">
                      <!-- Event Details -->
                      <div>
                        <p class="text-xs font-medium">
                          {{ event.title }}
                        </p>
                        <p class="text-xs">
                          {{ event.startTime }} - {{ event.endTime }}
                        </p>
                      </div>

                      <!-- Attendee Avatars -->
                      <div class="flex items-center gap-1">
                        <AvatarGroup>
                          <Avatar
                            v-for="i in Math.min(3, event.attendees)"
                            :key="i"
                            class="h-6 w-6 border-2 border-white"
                          >
                            <AvatarImage
                              src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww"
                              :alt="`Attendee ${i}`"
                            />
                            <AvatarFallback>{{ i }}</AvatarFallback>
                          </Avatar>
                        </AvatarGroup>
                        <span
                          v-if="event.attendees > 3"
                          class="text-xs text-muted-foreground"
                        >
                          +{{ event.attendees - 3 }}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </template>
            </draggable>
          </div>
        </div>
      </div>
    </ScrollArea>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { VueDraggableNext as draggable } from 'vue-draggable-next'
import { addDays, format } from 'date-fns'
import AvatarGroup from '../AvatarGroup.vue'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Card, CardContent } from '~/components/ui/card'
import { ScrollArea } from '~/components/ui/scroll-area'
import type { Event } from '~/types'

interface CalendarViewProps {
  events: Event[]
  currentDate?: Date
}

const props = withDefaults(defineProps<CalendarViewProps>(), {
  events: () => [],
  currentDate: () => new Date(),
})

// Drag state
const isDragging = ref(false)
const draggedEventId = ref<string | null>(null)

// Generate time slots (8 AM to 9 PM)
const timeSlots = Array.from({ length: 14 }, (_, i) => i + 8)

// Generate days of the week
const days = computed(() =>
  Array.from({ length: 7 }, (_, i) => addDays(props.currentDate, i)),
)

// Get events for a specific hour
const getEventsForHour = (day: Date, hour: number) => {
  return props.events.filter((event) => {
    const [eventHour] = event.startTime.split(':')
    return Number.parseInt(eventHour!) === hour
  })
}

// Get event styling based on type
const getEventStyle = (type: Event['type']) => {
  switch (type) {
    case 'meeting':
      return 'border-blue-200 bg-blue-50 text-blue-700'
    case 'project':
      return 'border-green-200 bg-green-50 text-green-700'
    case 'review':
      return 'border-orange-200 bg-orange-50 text-orange-700'
    default:
      return 'border-gray-200 bg-gray-50 text-gray-700'
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onDragStart = (event: any) => {
  isDragging.value = true
  draggedEventId.value = event.item.dataset.id
}

const onDragEnd = () => {
  isDragging.value = false
  draggedEventId.value = null
}
</script>

  <style scoped>
  /* Add custom styles if needed */
  </style>
