<template>
  <div class="dashboard2">
    <data-view2 />
  </div>
</template>

<script>
import DataView2 from '@/components/DataView2/index'
export default {
  name: 'Dashboard2',
  components: { DataView2 },
  data () {
    return {}
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.dashboard2 {
  width: 100%;
  height: 100%;
}
</style>
