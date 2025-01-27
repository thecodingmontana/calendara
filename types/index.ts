export interface Event {
  id: string
  title: string
  startTime: string
  endTime: string
  attendees: number
  type: 'meeting' | 'project' | 'review'
  color?: string
}
