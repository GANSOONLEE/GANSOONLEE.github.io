<script setup lang="ts"></script>

<template>
  <div>
    <h2>你好 我叫阿循</h2>
    <p>我是一名來自馬來西亞的21歲青年，目前在台北讀書留學。</p>
    <div class="label">
      <span>#程式設計師</span>
      <span>#化工系學生</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div {
  div.label {
    margin: 0.7rem 0 0;
    span {
      padding: 0 0.7rem 0 0;
      &:not(:first-child) {
        padding: 0 0.7rem;
        border-left: 1px solid #000;
      }
    }
  }
}
</style>
