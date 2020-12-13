<template>
  <div id="scroll-board">
    <dv-scroll-board :config="config" />
  </div>
</template>

<script>
export default {
  name: 'ScrollBoard',
  data () {
    return {
      config: {
        header: ['时间', '学院', '预约人数'],
        data: [
          ['2019-07-01 19:25:00', '机自学院', '18'],
          ['2019-07-02 17:25:00', '通信与信息工程学院', '12'],
          ['2019-07-03 16:25:00', '材料学院', '6'],
          ['2019-07-04 15:25:00', '美术学院', '2'],
          ['2019-07-05 14:25:00', '生命科学', '1'],
          ['2019-07-06 13:25:00', '计算机学院', '3'],
          ['2019-07-07 12:25:00', '土木工程', '4'],
        ],
        index: true,
        columnWidth: [80, 180, 100],
        align: ['center'],
        rowNum: 7,
        headerBGC: '#1981f6',
        headerHeight: 45,
        oddRowBGC: 'rgba(0, 44, 81, 0.8)',
        evenRowBGC: 'rgba(10, 29, 50, 0.8)'
      }
    }
  }
}
</script>

<style lang="less">
#scroll-board {
  width: 50%;
  box-sizing: border-box;
  margin-left: 20px;
  height: 100%;
  overflow: hidden;
}
</style>
