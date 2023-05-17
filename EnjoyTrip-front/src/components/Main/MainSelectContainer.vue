<template>
  <div class="select-container">
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="SEARCH"
      rows="1"
      max-rows="1"
      :style="{ height: selectedAreaHeight + 'px' }"
      class="select-textarea"
    ></b-form-textarea>
  </div>
</template>
<style>
.select-container {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>

<script>
export default {
  data() {
    return {
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
      text: '',
      selectedAreaHeight: 0, // selected 영역의 높이를 저장하는 변수
    };
  },
  methods: {
    // 선택된 옵션 변경 시 textarea 높이 계산
    calculateTextAreaHeight() {
      const selectedArea = document.querySelector('.select-container');
      if (selectedArea) {
        this.selectedAreaHeight = selectedArea.offsetHeight;
      }
    },
  },
  mounted() {
    // 초기 textarea 높이 계산
    this.calculateTextAreaHeight();
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    selected(newValue, oldValue) {
      // 선택된 옵션 변경 시 textarea 높이 재계산
      this.calculateTextAreaHeight();
    },
  },
};
</script>
