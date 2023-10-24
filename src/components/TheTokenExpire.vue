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
                <a class="box" href="https://dev-user-halokak.betalogika.tech/">
                  <div class="rectangle"></div>
                  <div class="label">
                    <div class="text-wrapper">Home</div>
                  </div>
                </a>
                <a href="halo"></a>
                <p class="hai-ahmad-selamat">
                  Token Sudah Tidak Berlaku/Expire! <br />
                  <br />
                  <!-- {{ this.items }} -->
                  <b>{{ this.verify.data.data.message }}</b>
                  <br />
                  Contact Admin Jika Ada Masalah Dalam Verifikasi
                </p>
                <img
                  class="element"
                  alt="Element"
                  src="https://alibabaspaces.betalogika.tech/assets/emailverify/img/tokenexpire.png"
                />
              </div>
              <p class="terima-kasih-tim">
                Terima kasih! <br />
                <br />
                Tim HaloKak
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Div from "@/screens/NotifEmail/sections/Div.vue";
import apis from "@/api";

export default {
  name: "token-expire",
  // props: { items: Object }, not use props
  components: {
    Div,
  },
  data() {
    return {
      verify: {
        isLoading: false,
        data: {
          message: "",
          data: {},
        },
      },
    };
  },
  mounted() {
    this.verifyAccount();
  },
  created() {},
  computed: {},
  methods: {
    verifyAccount() {
      apis
        .verify(this.$route.params.token)
        .then(({ data }) => {
          this.verify.isLoading = true;
          this.verify.data = data;
        })
        .catch((error) => {
          this.verify.data = error.response;
          console.log(error.response);
        })
        .finally(() => {
          this.verify.isLoading = false;
        });
    },
  },
  watch: {},
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
  height: 192px;
  left: 227px;
  position: absolute;
  top: 110px;
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

.box {
  width: 101px;
  height: 30px;
}

.box .rectangle {
  position: fixed;
  width: 101px;
  height: 30px;
  top: 0;
  left: 0;
  background-color: #6ac8d2;
  border-radius: 80px;

  /**box wrapper */
  height: 34px;
  left: 281px;
  position: absolute;
  top: 304px;
  width: 105px;
}

.label {
  width: 71px;
  height: 15px;

  /**label wrapper */
  height: 34px;
  left: 300px;
  position: absolute;
  top: 314px;
  width: 105px;
}

.label .text-wrapper {
  position: fixed;
  width: 71px;
  height: 15px;
  top: 20;
  left: 30;
  font-family: "Poppins-Medium", Helvetica;
  font-weight: 500;
  color: #ffffff;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 15px;
}
</style>
