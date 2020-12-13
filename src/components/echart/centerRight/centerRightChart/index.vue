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
        indicatorData: [
          { name: '自主送样', max: 300 },
          { name: '委托送样', max: 250 }
        ],
        dataBJ: [
          [94, 69, 114, 2.08, 73, 39, 22],
          [99, 73, 110, 2.43, 76, 48, 23]
        ],
        dataGZ: [
          [84, 94, 140, 2.238, 68, 18, 22],
          [93, 77, 104, 1.165, 53, 7, 23]
        ],
        dataSH: [
          [91, 45, 125, 0.82, 34, 23, 1],
          [65, 27, 78, 0.86, 45, 29, 2]
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
