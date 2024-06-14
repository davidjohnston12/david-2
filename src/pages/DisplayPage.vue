<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-img
          src="@/assets/png image.jpg"
          alt="Logo"
          style="width: 40px; height: 40px; margin-right: 10px"
        />
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title> Quasar App </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above>
      <!-- Drawer content goes here -->
      <q-list>
        <q-item clickable v-ripple>
          <q-item-section> Menu Item 1 </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section> Menu Item 2 </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

defineOptions({
  name: "MainLayout",
});
</script>
