<script setup lang="ts">
import CalendarView from '~/components/calendar/CalendarView.vue'
import type { Event } from '~/types'

const events = ref<Event[]>([
  {
    id: '1',
    title: 'Team Meeting',
    startTime: '09:00',
    endTime: '10:00',
    attendees: 5,
    type: 'meeting',
  },
  {
    id: '2',
    title: 'Project Review',
    startTime: '11:00',
    endTime: '12:00',
    attendees: 8,
    type: 'review',
  },
  {
    id: '3',
    title: 'Development Sprint',
    startTime: '14:00',
    endTime: '15:00',
    attendees: 4,
    type: 'project',
  },
])
</script>

<template>
  <div className="flex h-screen flex-col p-4">
    <div className="mb-4">
      <h1 className="text-2xl font-bold">
        Calendar
      </h1>
    </div>
    <div className="flex-1 rounded-lg border bg-white">
      <CalendarView :events="events" />
    </div>
  </div>
</template>
