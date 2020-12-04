<template>
  <div v-clipboard:copy="HEXColor" class="palette" :style="{'background-color': `#${colorRecord.color}` }">
    <p class="lead">COLOR</p>
    <p>{{ colorRecord.color }}</p>
    <p class="lead">MEMO</p>
    <p>{{ colorRecord.note }}</p>
  </div>
</template>

<script>
export default {
  name: 'CPColorPalette',
  props: {
    colorRecord:  {
      type: Object,
      required: true
    }
  },
  computed: {
    HEXColor(){
      return `#${this.colorRecord.color}`
    }
  }
}
</script>

<style lang="scss" scoped>
div.palette {
  box-sizing: border-box;
  display: inline-block;
  padding: 32px 32px;
  transition: transform .15s;
  width: 10%;

  &:hover {
    transform: scale(.9);
  }

  p {
    font-size: 14px;
    margin: 0;
    padding:  0;

    &.lead {
      opacity: .7;
      margin: 1em 0;
    }
  }
}
</style>