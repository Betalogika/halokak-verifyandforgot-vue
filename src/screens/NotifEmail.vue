<template>
  <div class="notif-email">
    <div class="group-wrapper-2">
      <div class="group-18">
        <div class="overlap-2">
          <Div />
          <OverlapWrapper />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Div from "./NotifEmail/sections/Div.vue";
import OverlapWrapper from "./NotifEmail/sections/OverlapWrapper.vue";

export default {
  name: "NotifEmail",
  components: {
    Div,
    OverlapWrapper,
  },
};
</script>

<style>
.notif-email {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.notif-email .group-wrapper-2 {
  background-color: #ffffff;
  height: 735px;
  width: 762px;
}

.notif-email .group-18 {
  height: 620px;
  left: 28px;
  position: relative;
  top: 30px;
  width: 694px;
}

.notif-email .overlap-2 {
  height: 620px;
  position: relative;
  width: 698px;
}
</style>