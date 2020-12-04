<template>
  <div v-clipboard:copy="HEXColor" class="palette" :style="{'background-color': `#${color}`}">
    <div>
      <p class="lead">Color</p>
      <p>{{ color }}</p>
    </div>
    <div>
      <p class="lead">Note</p>
      <p>{{ memo }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPalettePanel',
  props: {
    color: {
      type: String,
      required: true
    },
    memo: {
      type: String,
      default: 'None'
    }
  },
  computed: {
    HEXColor(){
      return `#${this.color}`
    }
  }
}
</script>

<style lang="scss" scoped>
div.palette {
  box-sizing: border-box;
  display: inline-flex;
  padding: 16px 16px;
  transition: transform .15s;
  width: 20%;

  &:hover {
    transform: scale(.9);
  }

  div:first-child {
    margin-right: 16px;
  }

  p {
    font-size: 14px;
    margin: 0;
    padding:  0;

    &.lead {
      opacity: .7;
      margin: 8px 0;
    }
  }
}
</style>