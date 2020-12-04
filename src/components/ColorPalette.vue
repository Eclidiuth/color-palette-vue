<template>
  <div>
    <color-palette-name :name="palette.name" class="color-palette-name" />
    <div id="colorPaletteRow">
      <color-palette-panel v-for="(palette, index) in palette.palette"
        :color="palette.color"
        :memo="palette.memo"
        :key="index" />    
    </div>
  </div>
</template>

<script>
import ColorPaletteName from '@/components/ColorPaletteName.vue'
import ColorPalettePanel from '@/components/ColorPalettePanel.vue'

export default {
  name: 'ColorPalette',
  components: {
    ColorPaletteName,
    ColorPalettePanel,
  },
  props: {
    palette: Object
  }
}
</script>

<style lang="scss" scoped>
.color-palette-name {
  margin-left: 16px;
}
</style>