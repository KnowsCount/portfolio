<!--
 * @Description: My personal portfolio. 我的个人主页。
 * @Date: 2020-03-19 09:00:26
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-12-06 20:08:03
 * @FilePath: /vuepress-theme-terminal-master/Modal.vue
-->
<template>
  <transition name="modal" v-if="value">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body flex">
            <slot></slot>
          </div>

          <div class="modal-footer flex">
            <button class="close" @click="$emit('input', false)">Close</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: { value: Boolean },
};
</script>

<style scoped lang="stylus">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.flex {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.close {
  background: rgba(0, 0, 0, 0);
  border: none;
  border-radius: 3px;
  padding: 10px 20px;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
}

.modal-body {
  margin: 20px 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container, .modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
