<template>
  <div class="slider-container">
    <!-- 메인화면 가장 위의 큰 슬라이더 -->
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- 첫번째 슬라이드 -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- 두번째 슬라이드 -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Second slide</h1>
      </b-carousel-slide>

      <!-- 세번째 슬라이드 -->
      <b-carousel-slide
        caption="Third slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=58"
      ></b-carousel-slide>

      <!-- 네번째 슬라이드 -->
      <b-carousel-slide
        caption="Fourth slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      >
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <!-- 다섯번째 슬라이드 -->
      <b-carousel-slide
        caption="Fifth slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      >
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=54"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
    <!-- <p class="mt-4">
      Slide #: {{ slide + 1 }}<br />
      Sliding: {{ sliding }}
    </p> -->
  </div>
</template>
<style>
.slider-container {
  position: relative;
  height: 100vh; /* 높이를 브라우저 뷰포트 높이로 설정하거나 원하는 값으로 지정하세요 */
}

.select-container {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.slider-container {
  position: relative;
  height: 100vh;
}

.b-carousel-control-prev-icon,
.b-carousel-control-next-icon {
  font-size: 2rem;
}

.b-carousel-indicator-icon {
  background-color: rgba(255, 255, 255, 0.8);
}

.b-carousel-indicators .active .b-carousel-indicator-icon {
  background-color: #fff;
}

.b-carousel-caption {
  color: #fff;
  text-shadow: 1px 1px 2px #333;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 15px;
  border-radius: 4px;
  bottom: 10px;
}

.b-carousel-caption h3 {
  font-size: 1.5rem;
  font-weight: bold;
}

.b-carousel-caption p {
  font-size: 1rem;
}

.b-carousel-control-prev,
.b-carousel-control-next {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.8;
}

.b-carousel-control-prev:hover,
.b-carousel-control-next:hover {
  opacity: 1;
}

.b-carousel-control-prev {
  left: 10px;
}

.b-carousel-control-next {
  right: 10px;
}

.b-carousel-indicators {
  bottom: 10px;
}

.b-carousel-indicators li {
  width: 10px;
  height: 10px;
  margin: 0 4px;
  border-radius: 50%;
}

.b-carousel-indicators li button {
  width: 10px;
  height: 10px;
  padding: 0;
  border: none;
  background-color: transparent;
  outline: none;
  box-shadow: none;
}

.b-carousel-indicators li.active button {
  background-color: #fff;
}

</style>

<script>
export default {
  data() {
    return {
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb',
        width: 600,
        height: 400,
        class: 'my-5',
      },
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    getImageUrl(imageId) {
      const { width, height } = this.mainProps;
      return `https://picsum.photos/${width}/${height}/?image=${imageId}`;
    },

    // eslint-disable-next-line no-unused-vars
    onSlideStart(slide) {
      this.sliding = true;
    },
    // eslint-disable-next-line no-unused-vars
    onSlideEnd(slide) {
      this.sliding = false;
    },

    // 선택된 옵션 변경 시 textarea 높이 계산
    calculateTextAreaHeight() {
      const selectedArea = document.querySelector('.select-container');
      if (selectedArea) {
        this.selectedAreaHeight = selectedArea.offsetHeight;
      }
    },
  },
};
</script>
