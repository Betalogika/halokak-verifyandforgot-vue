<template>
  <div class="group-wrapper">
    <div class="group-2">
      <div class="overlap-group">
        <div class="rectangle" />
        <div class="rectangle-2" />
      </div>
      <div class="rectangle-3" />
    </div>
    <div class="group-3">
      <img
        class="group-4"
        alt="Group"
        :src="`${assetsComponent}/group-35212.png`"
      />
      <img
        class="group-5"
        alt="Group"
        :src="`${assetsComponent}/group-35207.png`"
      />
      <img
        class="group-6"
        alt="Group"
        :src="`${assetsComponent}/group-35214.png`"
      />
      <img
        class="group-7"
        alt="Group"
        :src="`${assetsComponent}/group-35211.png`"
      />
      <img
        class="group-8"
        alt="Group"
        :src="`${assetsComponent}/group-35213.png`"
      />
      <div class="group-9">
        <div class="rectangle-4" />
        <div class="overlap-group-2">
          <img
            class="rectangle-5"
            alt="Rectangle"
            :src="`${assetsComponent}/rectangle-714.svg`"
          />
          <img
            class="rectangle-6"
            alt="Rectangle"
            :src="`${assetsComponent}/rectangle-715.svg`"
          />
        </div>
      </div>
      <div class="group-10">
        <div class="overlap-group-wrapper">
          <div class="overlap-group-3">
            <div class="ellipse-7" />
            <div class="rectangle-7" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupWrapper",

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
.group-wrapper {
  height: 49px;
  left: 240px;
  position: absolute;
  top: 0;
  width: 227px;
}

.group-wrapper .group-2 {
  height: 49px;
  left: 0;
  position: absolute;
  top: 0;
  width: 56px;
}

.group-wrapper .overlap-group {
  height: 49px;
  left: 11px;
  position: absolute;
  top: 0;
  width: 45px;
}

.group-wrapper .rectangle {
  background-color: #fec395;
  border-radius: 100px;
  height: 49px;
  left: 20px;
  position: absolute;
  top: 0;
  width: 11px;
}

.group-wrapper .rectangle-2 {
  background: linear-gradient(
    180deg,
    rgb(208.25, 10.41, 10.41) 0.34%,
    rgba(208.25, 10.41, 10.41, 0.93) 56.03%,
    rgba(208.25, 10.41, 10.41, 0.5) 100%
  );
  border-radius: 0px 100px 0px 0px;
  height: 45px;
  left: 17px;
  position: absolute;
  top: 2px;
  transform: rotate(90deg);
  width: 11px;
}

.group-wrapper .rectangle-3 {
  background-color: #6ac8d2;
  border-radius: 100px;
  height: 49px;
  left: 0;
  position: absolute;
  top: 0;
  width: 11px;
}

.group-wrapper .group-3 {
  height: 27px;
  left: 71px;
  position: absolute;
  top: 11px;
  width: 156px;
}

.group-wrapper .group-4 {
  height: 23px;
  left: 46px;
  position: absolute;
  top: 2px;
  width: 15px;
}

.group-wrapper .group-5 {
  height: 27px;
  left: 90px;
  position: absolute;
  top: 0;
  width: 19px;
}

.group-wrapper .group-6 {
  height: 27px;
  left: 137px;
  position: absolute;
  top: 0;
  width: 19px;
}

.group-wrapper .group-7 {
  height: 25px;
  left: 21px;
  position: absolute;
  top: 1px;
  width: 21px;
}

.group-wrapper .group-8 {
  height: 25px;
  left: 113px;
  position: absolute;
  top: 1px;
  width: 21px;
}

.group-wrapper .group-9 {
  height: 23px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 18px;
}

.group-wrapper .rectangle-4 {
  background-color: #6ac8d2;
  height: 23px;
  left: 0;
  position: absolute;
  top: 0;
  width: 3px;
}

.group-wrapper .overlap-group-2 {
  height: 23px;
  left: 6px;
  position: absolute;
  top: 0;
  width: 12px;
}

.group-wrapper .rectangle-5 {
  height: 23px;
  left: 10px;
  position: absolute;
  top: 0;
  width: 3px;
}

.group-wrapper .rectangle-6 {
  height: 3px;
  left: 0;
  position: absolute;
  top: 10px;
  width: 10px;
}

.group-wrapper .group-10 {
  height: 23px;
  left: 64px;
  position: absolute;
  top: 2px;
  width: 23px;
}

.group-wrapper .overlap-group-wrapper {
  background-color: #c7c5ac;
  border-radius: 11.33px;
  height: 23px;
}

.group-wrapper .overlap-group-3 {
  height: 18px;
  position: relative;
  top: 2px;
  width: 23px;
}

.group-wrapper .ellipse-7 {
  background-color: #ffffff;
  border-radius: 8.96px;
  height: 18px;
  left: 2px;
  position: absolute;
  top: 0;
  width: 18px;
}

.group-wrapper .rectangle-7 {
  background-color: #ffffff;
  height: 3px;
  left: 0;
  position: absolute;
  top: 7px;
  width: 23px;
}
</style>
