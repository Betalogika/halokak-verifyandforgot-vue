<template>
  <div class="div">
    <img class="vector-2" alt="Vector" :src="`${assetsComponent}/vector.svg`" />
    <Group />
    <GroupWrapper />
    <DivWrapper />
  </div>
</template>

<script>
import Group from "./Div/sections/Group.vue";
import GroupWrapper from "./Div/sections/GroupWrapper.vue";
import DivWrapper from "./Div/sections/DivWrapper.vue";

export default {
  name: "Div",
  components: {
    Group,
    GroupWrapper,
    DivWrapper,
  },

  computed: {
    assetsComponent() {
      return `https://alibabaspaces.betalogika.tech/assets/pageVerify/static/img`;
    },
  },
  methods: {},
  mounted() {},

  created() {},

  watch: {},
};
</script>

<style>
.div {
  height: 620px;
  left: 0;
  position: absolute;
  top: 0;
  width: 687px;
}

.div .vector-2 {
  height: 75px;
  left: 0;
  position: absolute;
  top: 43px;
  width: 66px;
}
</style>
