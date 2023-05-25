<template>
  <div>
    <div id="map"></div>
    <div class="button-group"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

const attrStore = "attrStore";

export default {
  name: "AttrDetailMap",
  computed: {
    ...mapState(attrStore, ["attractions"]),
  },
  data() {
    return {
      markers: [],
      infowindow: null,
      kakaoLoaded: false,
    };
  },
  created() {
    if (window.kakao && window.kakao.maps) {
      this.loadKakaoMaps();
    } else {
      const script = document.createElement("script");
      script.onload = this.loadKakaoMaps;
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=" + process.env.VUE_APP_KAKAOMAP_KEY;

      document.head.appendChild(script);
    }
  },
  watch: {
    attractions: {
      handler() {
        if (this.attractions && this.kakaoLoaded) {
          this.initMap();
        }
      },
      deep: true,
    },
  },
  methods: {
    loadKakaoMaps() {
      window.kakao.maps.load(() => {
        this.kakaoLoaded = true;
        if (this.attractions) {
          this.initMap();
        }
      });
    },
    initMap() {
      if (!this.attractions || !this.kakaoLoaded || !this.attractions.latitude || !this.attractions.longitude) {
        return;
      }

      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(this.attractions.latitude, this.attractions.longitude),
        level: 5,
      };

      this.map = new window.kakao.maps.Map(container, options);

      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
        this.markers = [];
      }

      const markerPosition = new window.kakao.maps.LatLng(this.attractions.latitude, this.attractions.longitude);

      const marker = new window.kakao.maps.Marker({
        map: this.map,
        position: markerPosition,
      });

      this.markers.push(marker);

      this.map.setCenter(markerPosition);
    },
  },
};
</script>

<style scoped>
#map {
  width: 400px;
  height: 400px;
}

.button-group {
  margin: 10px 0px;
}

button {
  margin: 0 3px;
}
</style>
