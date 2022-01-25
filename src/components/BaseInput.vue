<template>
  <div>
    <input
      :type="type"
      :placeholder="placeholder"
      :readonly="readonly"
      @input="Vmodel"
      v-model="value"
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
    replyValue: { type: String },
  },
  setup(props, context) {
    const value = toRef(props, 'replyValue');
    const Vmodel = context.emit('input', value);
    return { Vmodel, value };
  },
});
</script>

<style></style>
