<script setup>
import Div from "@/screens/ForgotPassword/sections/Div.vue";
</script>

<template>
  <div class="notif-email">
    <div class="group-wrapper-2">
      <div class="group-18">
        <div class="overlap-2">
          <Div />
          <div class="overlap-wrapper">
            <div class="overlap">
              <div class="overlap-group-4">
                <!-- <a href="https://www.google.com">
          <img
            class="group-17"
            alt="Group"
            src="https://alibabaspaces.betalogika.tech/assets/pageVerify/static/img/group-35123.png"
        /></a> -->
                <div class="box">
                  <div class="group">
                    <div class="text-wrapper">
                      <h2>Forgot Password</h2>
                      <ul class="listError" v-for="error in validation">
                        <li class="text-config">{{ error }}</li>
                      </ul>
                    </div>
                    <div class="group-9">
                      <div class="div-wrapper">
                        <button class="overlap-group-4" @click="forgotPass">
                          <div class="text-wrapper-2">Kirim</div>
                        </button>
                      </div>
                      <div class="group-10">
                        <div class="text-wrapper-3">Password</div>
                        <div>
                          <input
                            type="text"
                            class="iconly-light-show-wrapper"
                            v-model="email"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconlyLightShow from "@/components/IconlyLightShow.vue";
import IconlyLightHideWrapper from "@/components/IconlyLightHideWrapper.vue";
import apis from "@/api";
export default {
  name: "NotifEmail",
  components: {
    Div,
    IconlyLightShow,
    IconlyLightHideWrapper,
  },

  data() {
    return {
      forgot: {
        isLoading: false,
        data: null,
      },
      email: "",
      errors: [],
      validation: [],
    };
  },

  methods: {
    forgotPass: function (e) {
      apis
        .forgotPassword({ email: this.email })
        .then(({ data }) => {
          this.forgot.isLoading = true;
          this.$router.push({ name: "success-forgot-password" });
        })
        .catch((error) => {
          //catch error validation
          this.errors.push(error.response.data.data); //simpan semua list object errornya
          this.errors.forEach((data, i) => {
            // buatin logic foreach untuk loop semua object errornya
            console.log(data[i]); // debug loop by index errornya, untuk memastikan loop errornya jalan
            this.validation.push(data[i].message); //ambil semua index errornya lalu tampilkan pesannya errornya
            window.location.reload(); //jika masih error maka refresh pagenya agar kembali ke untuk mengisi data
          });
        })
        .finally(() => {
          this.forgot.isLoading = false;
        });
      e.preventDefault();
    },
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

.overlap-wrapper {
  height: 500px;
  left: 13px;
  position: absolute;
  top: 87px;
  width: 685px;
}

.overlap-wrapper .overlap {
  background-color: #f8f7f3;
  border-radius: 30px;
  height: 500px;
  position: relative;
  width: 681px;
}

.overlap-wrapper .overlap-group-4 {
  height: 338px;
  left: 7px;
  position: absolute;
  top: 13px;
  width: 667px;
}

.overlap-wrapper .group-17 {
  height: 34px;
  left: 281px;
  position: absolute;
  top: 304px;
  width: 105px;
}

.overlap-wrapper .hai-ahmad-selamat {
  color: #53565a;
  font-family: "Poppins", Helvetica;
  font-size: 15px;
  font-weight: 400;
  height: 133px;
  left: 0;
  letter-spacing: 0.15px;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 0;
  width: 667px;
}

.overlap-wrapper .element {
  height: 212px;
  left: 227px;
  position: absolute;
  top: 104px;
  width: 212px;
}

.overlap-wrapper .terima-kasih-tim {
  color: #53565a;
  font-family: "Poppins", Helvetica;
  font-size: 15px;
  font-weight: 400;
  height: 67px;
  left: 271px;
  letter-spacing: 0.15px;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 392px;
  width: 138px;
}

.label {
  width: 71px;
  height: 15px;

  /**label wrapper */
  height: 34px;
  left: 308px;
  position: absolute;
  top: 314px;
  width: 105px;
}

.label .text-wrapper {
  position: fixed;
  width: 71px;
  height: 15px;
  font-family: "Poppins-Medium", Helvetica;
  font-weight: 500;
  color: #ffffff;
  font-size: 15px;
  letter-spacing: 0;
  line-height: 15px;
}

/** class css for forgot password */
.overlap-wrapper .box {
  height: 499px;
  width: 589px;
}

.overlap-wrapper .box .group {
  height: 499px;
  left: 30px;
  position: absolute;
  top: -35px;
  width: 589px;
}
/** text wrapper for change password */
.box .text-wrapper {
  color: #333333;
  font-family: "Poppins", Helvetica;
  font-size: 15px;
  font-weight: 700;
  height: 25px;
  left: 202px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 75px;
  white-space: nowrap;
  width: 207px;
}

ul .listError {
  list-style-type: circle;
}

.text-config {
  /* margin-left: 100px; */
  color: #d00a0a;
}

.box .div {
  height: 49px;
  left: 192px;
  position: absolute;
  top: 24px;
  width: 227px;
}

.box .group-2 {
  height: 49px;
  left: 0;
  position: absolute;
  top: 0;
  width: 56px;
}

.box .overlap-group {
  height: 49px;
  left: 11px;
  position: absolute;
  top: 0;
  width: 45px;
}

.box .rectangle {
  background-color: #fec395;
  border-radius: 100px;
  height: 49px;
  left: 20px;
  position: absolute;
  top: 0;
  width: 11px;
}

.box .rectangle-2 {
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

.box .rectangle-3 {
  background-color: #6ac8d2;
  border-radius: 100px;
  height: 49px;
  left: 0;
  position: absolute;
  top: 0;
  width: 11px;
}

.box .group-3 {
  height: 27px;
  left: 71px;
  position: absolute;
  top: 11px;
  width: 156px;
}

.box .img {
  height: 23px;
  left: 46px;
  position: absolute;
  top: 2px;
  width: 15px;
}

.box .group-4 {
  height: 27px;
  left: 90px;
  position: absolute;
  top: 0;
  width: 19px;
}

.box .group-5 {
  height: 27px;
  left: 137px;
  position: absolute;
  top: 0;
  width: 19px;
}

.box .group-6 {
  height: 25px;
  left: 21px;
  position: absolute;
  top: 1px;
  width: 21px;
}

.box .group-7 {
  height: 25px;
  left: 113px;
  position: absolute;
  top: 1px;
  width: 21px;
}

.box .group-8 {
  height: 23px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 18px;
}

.box .rectangle-4 {
  background-color: #6ac8d2;
  height: 23px;
  left: 0;
  position: absolute;
  top: 0;
  width: 3px;
}

.box .overlap-group-2 {
  height: 23px;
  left: 6px;
  position: absolute;
  top: 0;
  width: 12px;
}

.box .rectangle-5 {
  height: 23px;
  left: 10px;
  position: absolute;
  top: 0;
  width: 3px;
}

.box .rectangle-6 {
  height: 3px;
  left: 0;
  position: absolute;
  top: 10px;
  width: 10px;
}

.box .group-wrapper {
  height: 23px;
  left: 64px;
  position: absolute;
  top: 2px;
  width: 23px;
}

.box .overlap-group-wrapper {
  background-color: #c7c5ac;
  border-radius: 11.33px;
  height: 23px;
}

.box .overlap-group-3 {
  height: 18px;
  position: relative;
  top: 2px;
  width: 23px;
}

.box .ellipse {
  background-color: #ffffff;
  border-radius: 8.96px;
  height: 18px;
  left: 2px;
  position: absolute;
  top: 0;
  width: 18px;
}

.box .rectangle-7 {
  background-color: #ffffff;
  height: 3px;
  left: 0;
  position: absolute;
  top: 7px;
  width: 23px;
}

.box .group-9 {
  height: 228px;
  left: 126px;
  position: absolute;
  top: 177px;
  width: 358px;
}

.box .div-wrapper {
  height: 46px;
  left: 114px;
  position: absolute;
  top: 170px;
  width: 128px;
}

.box .overlap-group-4 {
  background-color: #6ac8d2;
  border-radius: 15px;
  height: 40px;
  position: relative;
  width: 126px;
}

.box .text-wrapper-2 {
  color: #ffffff;
  font-family: "Poppins", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 15px;
  left: 17px;
  letter-spacing: 0;
  line-height: 36px;
  position: absolute;
  text-align: center;
  top: 2.5px;
  white-space: nowrap;
  width: 91px;
}

.box .group-10 {
  height: 162px;
  left: 0;
  position: absolute;
  top: 25px;
  width: 362px;
}

.box .text-wrapper-3 {
  color: #333333;
  font-family: "Poppins", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 15px;
  left: 0;
  letter-spacing: 0;
  line-height: 36px;
  position: absolute;
  top: -10px;
  white-space: nowrap;
  width: 97px;
}

.box .text-wrapper-4 {
  color: #333333;
  font-family: "Poppins", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 15px;
  left: 0;
  letter-spacing: 0;
  line-height: 36px;
  position: absolute;
  top: 85px;
  white-space: nowrap;
  width: 140px;
}

.box .iconly-light-show-wrapper {
  background-color: #ffffff;
  border: 1px solid;
  border-color: #6ac8d2;
  border-radius: 15px;
  height: 46px;
  left: 0;
  position: absolute;
  top: 25px;
  width: 358px;
}

.box .iconly-light-hide-wrapper {
  background-color: #ffffff;
  border: 1px solid;
  border-color: #6ac8d2;
  border-radius: 15px;
  height: 46px;
  left: 0;
  position: absolute;
  top: 116px;
  width: 358px;
}
</style>
