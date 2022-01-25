<template>
  <div>
    <input
      :type="type"
      :placeholder="placeholder"
      :readonly="readonly"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue';
export default defineComponent({
  props: {
    type: { type: String, default: 'text' },
    placeholder: { type: String },
    readonly: { type: Boolean },
    modelValue: { type: String },
  },
  setup(props) {
    const value = toRef(props, 'modelValue');
    return { value };
  },
});
</script>

<style lang="scss">
input {
  ::placeholder {
    color: #434343;
    font-weight: 900;
  }
}
</style>
