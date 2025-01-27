<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '~/components/ui/dialog'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '~/components/ui/select'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'

const color = ref('#2C87F2')
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <button>Create Schedule</button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create Schedule</DialogTitle>
      </DialogHeader>
      <div class="space-y-4">
        <Input placeholder="Title" />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Audience" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="team">
              Team
            </SelectItem>
            <SelectItem value="individual">
              Individual
            </SelectItem>
          </SelectContent>
        </Select>
        <Input type="datetime-local" />
        <ColorPicker v-model:value="color" />
      </div>
      <DialogFooter>
        <Button
          variant="outline"
          @click="closeModal"
        >
          Cancel
        </Button>
        <Button>Continue</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
