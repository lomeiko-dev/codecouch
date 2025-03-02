<script setup lang="ts">
import Panel from 'primevue/panel';


interface Props {
  title: string
  list:string[]
}
 
  const props = defineProps<Props>()
</script>
<template>
  <div>
    <div class="laptop:w-2/3 w-full mx-auto mt-8 border-b">
      <Panel toggleable collapsed>
          <template #header>
              <div class="flex items-center gap-2">
                  <span class=" font-medium text-lg leading-6">{{ props.title }}</span>
              </div>
          </template>
          <ul>
            <li v-for="(item, index) in props.list" :key="index" class=" mt-5">{{ item }}</li>
          </ul>
      </Panel>
    </div>
  </div>
</template>


