<template>
  <q-page class="flex flex-center q-pa-md">
    <div class="column items-center q-gutter-md">
      <q-form @submit.prevent="handleSubmit">
        <q-input
          filled
          v-model="url"
          label="Enter a web URL"
          class="input-width"
          :rules="[
            (val) => !!val || 'Field is required',
            (val) => isValidURL(val) || 'Enter a valid HTTPS URL',
          ]"
        />
        <q-btn label="Submit" type="submit" />
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

const url = ref("");
const router = useRouter();
const $q = useQuasar();

const handleSubmit = () => {
  if (url.value && isValidURL(url.value)) {
    // Store the URL in localStorage to pass it to the next page
    localStorage.setItem("submittedUrl", url.value);
    // Navigate to the DisplayPage
    router.push({ path: "/display" });
  } else {
    $q.notify({
      message: "Please enter a valid HTTPS URL",
      color: "red",
      position: "top",
    });
  }
};

const isValidURL = (string) => {
  const pattern = new RegExp("^https:\\/\\/");
  return !!pattern.test(string);
};
</script>

<style>
.input-width {
  width: 500px;
}
</style>
