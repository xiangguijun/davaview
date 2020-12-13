<template>
  <div class="bottom-right-table-1">
    <dv-border-box-6>
      <div class="table-name">
        <img src="./img/icon1.png" />预约用户使用排行榜
      </div>

      <dv-scroll-board :config="config" />
    </dv-border-box-6>
  </div>
</template>

<script>
export default {
  name: 'BottomRightTable1',
  data () {
    return {
      config: {
        data: [
          ['张三', '月累计预约使用：4次'],
          ['李四', '月累计预约使用：3次'],
          ['王五', '月累计预约使用：3次'],
          ['赵六', '月累计预约使用：3次'],
          ['钱七', '月累计预约使用：2次'],
          ['孙八', '月累计预约使用：2次'],
          ['杨九', '月累计预约使用：2次'],
          ['吴十', '月累计预约使用：2次'],
          ['李雷', '月累计预约使用：2次'],
          ['韩梅梅', '月累计预约使用：2次']
        ],
        index: true,
        columnWidth: [30, 70],
        align: ['center'],
        oddRowBGC: 'rgba(9, 37, 50, 0.4)',
        evenRowBGC: 'rgba(10, 32, 50, 0.3)'
      }
    }
  }
}
</script>

<style lang="less">
.bottom-right-table-1 {
  width: calc(~"25% + 10px");
  height: 100%;
  margin: 0 -5px;

  .border-box-content {
    padding: 20px;
    box-sizing: border-box;
  }

  .table-name {
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;

    img {
      width: 40px;
      height: 40px;
      margin-right: 5px;
    }
  }

  .dv-scroll-board {
    height: calc(~"100% - 60px");
  }
}
</style>
