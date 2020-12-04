<template>
  <p>{{ name }}</p>
</template>

<script>
export default {
  name: 'ColorPaletteName',
  props: {
    name: String
  }
}
</script>

<style lang="scss" scoped>
p {
  text-transform: uppercase;
}
</style>