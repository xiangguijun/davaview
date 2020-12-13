<template>
  <div class="dashboard">
    <datav />
  </div>
</template>

<script>
import datav from '@/components/datav/index'
export default {
  name: 'Dashboard',
  components: { datav },
  data () {
    return {}
  },
  mounted() {
  }
}
</script>

<style scoped>
.dashboard {
  width: 100%;
  height: 100%;
}
</style>
