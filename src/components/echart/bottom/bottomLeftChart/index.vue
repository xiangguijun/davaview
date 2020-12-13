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
        category: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月'
        ],
        lineData: [
          180,
          207,
          240,
          283,
          328,
          360,
          398,
          447,
          484,
          504,
          560,
          626
        ],
        barData: [
          46,
          50,
          55,
          65,
          75,
          85,
          99,
          125,
          140,
          215,
          232,
          244
        ],
        rateData: []
      }
    }
  },
  components: {
    Chart
  },
  mounted () {
    this.setData()
  },
  methods: {
    // 根据自己的业务情况修改
    setData () {
      for (let i = 0; i < this.cdata.barData.length - 1; i++) {
        let rate = this.cdata.barData[i] / this.cdata.lineData[i]
        this.cdata.rateData.push(rate.toFixed(2))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
