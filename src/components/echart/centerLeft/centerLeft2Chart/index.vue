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
        angleAxisData: [
          '分析仪器',
          '医学诊断',
          '电子测量',
          '体育竞技',
          '计算机类',
          '音乐器材',
          '美术器材',
          '其他',
          '天文仪器',
          '特种检测'
        ],
        seriesData: [
          {
            value: 87,
            itemStyle: {
              normal: {
                color: '#f54d4d'
              }
            }
          },
          {
            value: 80,
            itemStyle: {
              normal: {
                color: '#f87544'
              }
            }
          },
          {
            value: 75,
            itemStyle: {
              normal: {
                color: '#ffae00'
              }
            }
          },
          {
            value: 69,
            itemStyle: {
              normal: {
                color: '#dcff00'
              }
            }
          },
          {
            value: 63,
            itemStyle: {
              normal: {
                color: '#25d053'
              }
            }
          },
          {
            value: 54,
            itemStyle: {
              normal: {
                color: '#01fff5'
              }
            }
          },
          {
            value: 47,
            itemStyle: {
              normal: {
                color: '#007cff'
              }
            }
          },
          {
            value: 40,
            itemStyle: {
              normal: {
                color: '#4245ff'
              }
            }
          },
          {
            value: 35,
            itemStyle: {
              normal: {
                color: '#c32eff'
              }
            }
          },
          {
            value: 33,
            itemStyle: {
              normal: {
                color: '#ff62e8'
              }
            }
          }
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
