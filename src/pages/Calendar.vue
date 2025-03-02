<script setup lang='ts'>
import Footer from '../components/Footer.vue';
import CalendarLeft from '../components/CalendarComp/CalendarLeft.vue';
import CalendarCentr from '../components/CalendarComp/CalendarCentr.vue';
import CalenderRight from '../components/CalendarComp/CalenderRight.vue';

</script>
<template>
  <div class="laptop:h-screen laptop:flex laptop:items-center laptop:justify-center">
    <div class="border rounded-md flex flex-col laptop:items-start laptop:flex-row p-3 mx-auto items-center  w-[80vw]">
      <CalendarLeft />
      <CalendarCentr />
      <CalenderRight class="px-5" />
    </div>

  </div>
  <Footer />
</template>
