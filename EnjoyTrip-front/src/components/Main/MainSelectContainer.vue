<template>
  <div class="select-container">
    <b-form-select v-model="selected[0]" :options="options"></b-form-select>
    <b-form-select v-model="selected[1]" :options="options"></b-form-select>
    <b-form-select v-model="selected[2]" :options="options"></b-form-select>
    <b-form-select v-model="selected[3]" :options="options"></b-form-select>
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
      selected: [null, null, null, null], // 선택된 값들을 배열로 저장
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
