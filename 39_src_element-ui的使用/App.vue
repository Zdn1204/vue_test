<template>
  <div>
    <button>原生的按钮</button>
    <zdn-date-picker
      type="date"
      placeholder="选择日期">
    </zdn-date-picker>
    <zdn-row>
        <zdn-button plain>朴素按钮</zdn-button>
        <zdn-button type="primary" plain>主要按钮</zdn-button>
        <zdn-button type="success" plain>成功按钮</zdn-button>
        <zdn-button type="info" plain>信息按钮</zdn-button>
        <zdn-button type="warning" plain>警告按钮</zdn-button>
        <zdn-button type="danger" plain>危险按钮</zdn-button>
    </zdn-row>
  </div>
    

</template>

<script>

 
  export default {
    name:'App',
  }
    
</script>


