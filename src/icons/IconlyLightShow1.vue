<template>
  <svg
    :class="['iconly-light-show-1', className]"
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      clip-rule="evenodd"
      d="M15.1615 12.0531C15.1615 13.7991 13.7455 15.2141 11.9995 15.2141C10.2535 15.2141 8.8385 13.7991 8.8385 12.0531C8.8385 10.3061 10.2535 8.8911 11.9995 8.8911C13.7455 8.8911 15.1615 10.3061 15.1615 12.0531Z"
      fill-rule="evenodd"
      stroke="#130F26"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
    />
    <path
      class="path"
      clip-rule="evenodd"
      d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.4889 15.806 4.7509 11.998 4.7509H12.002C8.194 4.7509 4.711 7.4889 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z"
      fill-rule="evenodd"
      stroke="#130F26"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
    />
  </svg>
</template>

<script>
export default {
  name: "IconlyLightShow1",
  props: {
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
