<template>
        <div id="mapContainer"></div>
</template>

<page-query>
query Community {
  communities: allCommunity(sortBy: "date", limit: 6) {
    edges {
      node {
        id
        path
        title
        location
        image (width: 100, quality: 70)
      }
    }
  }
}
</page-query>

<script>
import mapboxgl from "mapbox-gl";

export default {
    data() {
    return {
      accessToken:
        "pk.eyJ1IjoibXJhcmMiLCJhIjoiY2pjbnFhOGl2MWt5ZTMwcGY1dDdwajVydSJ9.7dAnNN6tF3yu8caZ07k0Cw",
      center: [-95.3616427, 10.2003923],
      mapStyle: "mapbox://styles/mrarc/cjponzrq10dfg2rp7zaij9uhi?optimize=true",
      map: null,
    };
  },
  metaInfo() {
    return {
      title: "Mapa",
    };
  },
  methods: {

  },
 mounted() {
    mapboxgl.accessToken = this.accessToken;

    new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [103.811279, 1.345399],
      zoom: 12,
      maxBounds: [
        [103.6, 1.1704753],
        [104.1, 1.4754753],
      ],
    });
  },
};
</script>

<style lang="scss">
@import "~mapbox-gl/dist/mapbox-gl.css";

html,
body {
  margin: 0;
}
#app {
  margin: 0;
  height: 100vh;
}
</style>
