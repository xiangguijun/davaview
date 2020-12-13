<template>
  <div id="center">
    <div class="up">
      <div class="bg-color-black item" v-for="item in titleItem" :key="item.title">
        <p class="ml-3 colorBlue fw-b">{{item.title}}</p>
        <div>
          <dv-digital-flop :config="item.number" style="width:1.25rem;height:.625rem;" />
        </div>
      </div>
    </div>

    <div class="down">
      <div class="ranking bg-color-black">
        <span style="color:#5cd9e8">
          <icon name="align-left"></icon>
        </span>
        <span class="fs-xl text mx-2 mb-1">设备开放时间排行榜(今日)</span>
        <dv-scroll-ranking-board :config="ranking" style="height:2.75rem" />
      </div>
      <div class="percent">
        <div class="item bg-color-black">
          <span>设备完好率</span>
          <CenterChart :id="rate[0].id" :tips="rate[0].tips" :colorObj="rate[0].colorData" />
        </div>
        <div class="item bg-color-black">
          <span>贵重设备完好率</span>
          <CenterChart :id="rate[1].id" :tips="rate[1].tips" :colorObj="rate[1].colorData" />
        </div>
        <div class="water">
          <span>开放设备完好率</span>
          <dv-water-level-pond :config="water" style="height: 1.5rem" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import CenterChart from '@/components/echart/center/centerChartRate'

export default {
  data () {
    return {
      titleItem: [
        {
          title: '当前学校设备总数',
          number: {
            number: [1120],
            toFixed: 0,
            content: '{nt}'
          }
        },
        {
          title: '设备完好总数',
          number: {
            number: [1100],
            toFixed: 0,
            content: '{nt}'
          }
        },
        {
          title: '开放设备总数',
          number: {
            number: [823],
            toFixed: 1,
            content: '{nt}'
          }
        },
        {
          title: '当前贵重仪器总数',
          number: {
            number: [978],
            toFixed: 0,
            content: '{nt}'
          }
        },
        {
          title: '贵重仪器完好总数',
          number: {
            number: [837],
            toFixed: 0,
            content: '{nt}'
          }
        },
        {
          title: '贵重仪器开放总数',
          number: {
            number: [734],
            toFixed: 0,
            content: '{nt}'
          }
        }
      ],
      ranking: {
        data: [
          {
            name: '通信与信息工程学院',
            value: 55
          },
          {
            name: '计算机学院',
            value: 120
          },
          {
            name: '机械工程与自动化学院',
            value: 78
          },
          {
            name: '材料学院',
            value: 66
          },
          {
            name: '生命学院',
            value: 80
          },
          {
            name: '美术学院',
            value: 80
          },
          {
            name: '土木工程',
            value: 80
          },
          {
            name: '体育学院',
            value: 80
          },
          {
            name: '情报档案系',
            value: 80
          },
          {
            name: '外国语学院',
            value: 80
          }
        ],
        carousel: 'single',
        unit: '分钟'
      },
      water: {
        data: [24, 45],
        shape: 'roundRect',
        formatter: '{value}%',
        waveNum: 3
      },
      // 通过率和达标率的组件复用数据
      rate: [
        {
          id: 'centerRate1',
          tips: 60,
          colorData: {
            textStyle: '#3fc0fb',
            series: {
              color: ['#00bcd44a', 'transparent'],
              dataColor: {
                normal: '#03a9f4',
                shadowColor: '#97e2f5'
              }
            }
          }
        },
        {
          id: 'centerRate2',
          tips: 40,
          colorData: {
            textStyle: '#67e0e3',
            series: {
              color: ['#faf3a378', 'transparent'],
              dataColor: {
                normal: '#ff9800',
                shadowColor: '#fcebad'
              }
            }
          }
        }
      ]
    }
  },
  components: {
    CenterChart
    // centerChart1,
    // centerChart2
  }
}
</script>

<style lang="scss" scoped>
#center {
  display: flex;
  flex-direction: column;
  .up {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      border-radius: 0.0625rem;
      padding-top: 0.2rem;
      padding-bottom: 0.5rem;
      margin-top: 0.1rem;
      width: 32%;
      height: 0.975rem;
    }
  }
  .down {
    padding: 0.07rem 0.05rem;
    padding-bottom: 0;
    width: 100%;
    display: flex;
    height: 3.6875rem;
    justify-content: space-between;
    .bg-color-black {
      border-radius: 0.0625rem;
    }
    .ranking {
      padding: 0.125rem;
      width: 59%;
    }
    .percent {
      width: 40%;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        height: 1.5rem;
        span {
          margin-top: 0.0875rem;
          display: flex;
          justify-content: center;
        }
      }
      .water {
        width: 100%;
      }
    }
  }
}
</style>
