<template>
  <div id="app">
    <aside>
      <div class="container">
        <h1>Color Palettes</h1>
        <color-palette-add-color-form />
      </div>
    </aside>
    <main>
      <div class="container">
        <color-palette class="color-palette" v-for="(palette, index) in colorPalettes" :palette="palette" :key="index"/>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
body {
  background: #fafafa;
  font-family: 'Arial Nova', 'Yu Gothic', 游ゴシック, sans-serif;
  font-size: 14px;
}
</style>
<style lang="scss" scoped>
#app {
  display: flex;
  padding-top: 32px;

  aside {
    width: 20%;

    h1 {
      font-weight: 300;
    }
  }
  main {
    width: 80%;

    .color-palette {
      margin-bottom: 24px;
    }
  }

  .container {
    margin: auto;
    width: 90%;
  }
}
</style>

<script>
import ColorPalette from '@/components/ColorPalette.vue'
import ColorPaletteAddColorForm from '@/components/ColorPaletteAddColorForm.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    ColorPalette,
    ColorPaletteAddColorForm
  },
  computed: {
    ...mapGetters(['colorPalettes'])
  }
}
</script>