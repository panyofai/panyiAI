<script lang="ts" setup>
let msg = $ref("");
onMounted(() => {
  msg = "away";
});
</script>
<template>
  <div>
    <div class="ab">关于{{ msg }}</div>
  </div>
</template>

<style>
.ab {
  font-size: 18px;
}
</style>
