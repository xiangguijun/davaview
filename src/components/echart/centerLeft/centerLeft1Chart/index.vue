<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  data () {
    return {
      cdata: {
        xData: ['通信学院', '计算机学院', '美术学院', '电影学院'],
        seriesData: [
          { value: 10, name: '通信学院' },
          { value: 5, name: '计算机学院' },
          { value: 15, name: '美术学院' },
          { value: 25, name: '电影学院' }
        ]
      }
    }
  },
  components: {
    Chart
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
