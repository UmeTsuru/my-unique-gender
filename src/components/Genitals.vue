<template>
  <div class="
  card
            bg-white p-12 rounded-md shadow-sm
            md:bg-white md:p-12 md:rounded-md md:shadow-md
              sm:bg-white sm:p-12 sm:rounded-md sm:shadow-md
              lg:bg-slate-50 lg:p-6 lg:shadow-lg">
    <h2 class="text-4xl pb-6 z-10 md:text-center md:text-4xl lg:text-3xl lg:text-left  ">
      <a href="#" :class="['font-semibold', `text-amber`]"> 外生殖器形态
      </a>
    </h2>
    <div>
      <div class="flex justify-between">
        <span>阴道</span>
        <span>未分化</span>
        <span>阴茎</span>
      </div>
      <input type="range" min="0" max="100" value="0" :class="[
        'w-full',
        'h-2',
        'rounded-full',
        'bg-gradient-to-r',
        'from-amber-500',
        `to-purple-500`,
      ]" />
    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped></style>