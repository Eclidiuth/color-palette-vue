<template>
  <div>
    <label>
      Color: <input type="text" v-model="newPaletteColor">
    </label>
    <label>
      Platte Name
      <select v-model="selectedPaletteName">
        <option value="" disabled>Select palette name</option>
        <option v-for="(colorPalette, index) in colorPalettes" :key="index"
          :value="colorPalette.name">
          {{ colorPalette.name }}
        </option>
      </select>
    </label>
    <div>
      <button @click="handleAddNewColor">+ Add new color</button>
    </div>
    <transition-group>
      <p v-if="isColorEmpty" key="isColorEmpty">Please input hex color code.</p>
      <p v-if="!isColorCodeCorrect" key="isColorCodeCorrect">Color code is incorecct.</p>
      <p v-if="!isPaletteSelected" key="isPaletteSelected">Select palette name to add new color.</p>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ColorPaletteAddColorForm',
  data(){
    return {
      newPaletteColor    : '',
      selectedPaletteName: ''
    }
  },
  computed: {
    ...mapGetters(['colorPalettes']),

    isColorEmpty(){
      return (this.newPaletteColor.length === 0)
    },
    isColorCodeCorrect(){
      return this.newPaletteColor.match(/^#?([A-Fa-f0-9]{6})$/) !== null
    },
    isPaletteSelected(){
      const paletteNames = this.colorPalettes.map(palette => palette.name)
      return (this.selectedPaletteName !== "" || paletteNames.includes(this.selectedPaletteName))
    }
  },
  methods: {
    ...mapActions(['addNewColor']),
    handleAddNewColor(){
      if(this.isColorEmpty || !this.isPaletteSelected) return

      const paletteName  = this.selectedPaletteName
      const paletteColor = this.newPaletteColor.replaceAll("#", "")

      this.addNewColor({ paletteName,  paletteColor })
    }
  },
}
</script>

<style scoped>
  .v-enter-active, .v-leave-active {
    transition: opacity .15s
  }

  .v-enter, .v-leave-to {
    opacity: 0;
  }
</style>
<style lang="scss" scoped>
label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
}

input:focus,
select:focus,
button:focus {
  outline: solid 1px #17a2b8;
}

input[type="text"],
select {
  border: none;
  background: #f0f0f0;
  font-size: 14px;
  font-family: 'Arial Nova';
  padding: 8px 16px;
  width: 140px;
}

button {
  background: #007bff;
  border: none;
  box-shadow: 0 0 8px rgba(0, 123, 255, .8);
  color: #ffffff;
  font-size: 14px;
  height: 36px;
  line-height: 36px;
  transition: transform .15s;
  padding: 0 16px;

  &:hover {
    background: #17a2b8;
  }
  &:active {
    transform: scale(.9);
  }
}

p {
  margin: 1.5em 0;
}
</style>