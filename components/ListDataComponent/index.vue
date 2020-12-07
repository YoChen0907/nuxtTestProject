
<script>
export default {
  name: 'ListDataComponent',
  props: {
    listData: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
        isEdit: false
    }
  },
  methods: {
      doEdit() {
          this.isEdit = !this.isEdit;
      }
  }
}
</script>

<template src="./template.html" />
