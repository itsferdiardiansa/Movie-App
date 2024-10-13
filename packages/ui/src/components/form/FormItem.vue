<template>
  <div :class="`${prefixClass}-form-item`">
    <div :class="`${prefixClass}-form-control--label`">
      <label v-text="label"></label>
    </div>

    <div :class="`${prefixClass}-form-control--wrapper`">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.#{$prefixClass}-form-item {
  @apply flex items-center mb-4;
}

.#{$prefixClass}-form-control {
  @apply flex items-center;

  .has-icon {
    .#{$prefixClass}-form-control--input {
      @apply pl-10;
    }
  }

  .has-error {
    .#{$prefixClass}-form-control--input {
      @apply border-red-400 mb-2;
    }
  }

  &--label {
    @apply w-1/4 block uppercase tracking-wide text-xs font-bold;
    flex: 0 0 18%;
  }

  &--wrapper {
    @apply w-full grid grid-flow-col gap-4;
  }

  /** 
   * Color Picker
   */
  .pickr {
    button {
      @apply border border-gray-400;
    }
  }
}
</style>
