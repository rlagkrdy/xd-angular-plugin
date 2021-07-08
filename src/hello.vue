<template>
  <form>
    <textarea rows="100" v-model="html"></textarea>
    <footer>
      <!--      <button uxp-variant="cta" @click="increment">クリックしてね</button>-->
      <button type="submit" @click="close">닫기</button>
    </footer>
  </form>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
export default Vue.extend({
  props: {
    dialog: {
      type: Object as PropType<HTMLDialogElement>,
    },
    html: {
      type: String,
      required: true,
    },
  },
  methods: {
    close() {
      this.dialog.close();
    },
  },
  data: {
    // @ts-ignore
    html: this.html || '',
  },
});
</script>

<style scoped>
form {
  width: 600px;
}

textarea {
  height: 300px;
}
</style>
