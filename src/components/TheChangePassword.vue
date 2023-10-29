<script setup>
import Div from "@/screens/ForgotPassword/sections/Div.vue";
import OverlapWrapper from "@/screens/ForgotPassword/sections/OverlapWrapper.vue";
</script>

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
export default {
  name: "NotifEmail",
  components: {
    Div,
    OverlapWrapper,
  },
};
</script>

<style scoped>
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
