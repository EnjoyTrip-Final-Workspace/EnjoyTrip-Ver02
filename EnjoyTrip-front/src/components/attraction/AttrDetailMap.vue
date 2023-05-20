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
    ...mapState(attrStore, ["attr"]),
  },
  data() {
    return {
      markers: [],
      infowindow: null,
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=" + process.env.VUE_APP_KAKAOMAP_KEY;

      document.head.appendChild(script);
    }
  },
  watch: {
    attr: {
      handler() {
        this.initMap();
      },
      deep: true,
    },
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      console.log(this.attr.latitude, this.attr.longitude);
      const options = {
        center: new kakao.maps.LatLng(this.attr.latitude, this.attr.longitude),
        level: 5,
      };

      this.map = new kakao.maps.Map(container, options);

      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
        this.markers = [];
      }

      if (this.attr.latitude && this.attr.longitude) {
        const markerPosition = new kakao.maps.LatLng(this.attr.latitude, this.attr.longitude);

        const marker = new kakao.maps.Marker({
          map: this.map,
          position: markerPosition,
        });

        this.markers.push(marker);

        this.map.setCenter(markerPosition);
      }
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
