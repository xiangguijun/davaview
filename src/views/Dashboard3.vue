<template>
  <div class="dashboard2">
    <data-v3 />
  </div>
</template>

<script>
import DataV3 from '@/components/datav3'
export default {
  name: 'Dashboard3',
  components: { DataV3 },
  data () {
    return {}
  },
  mounted () {
    this.skip()
  },
  methods: {
    skip () {
      setTimeout(() => {
        this.$router.push({
          name: 'home',
          query: { disabled: true }
        })
      }, 10000)
    }
  }
}
</script>

<style lang="less" scoped>
.dashboard2 {
  width: 100%;
  height: 100%;
}
</style>
