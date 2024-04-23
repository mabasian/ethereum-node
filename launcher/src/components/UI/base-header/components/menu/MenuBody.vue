<template>
  <div class="col-start-19 col-span-full grid grid-cols-5 items-center">
    <SingleMenu
      v-for="item in items"
      :key="item.name"
      :item="item"
      @mouseenter="footerStore.cursorLocation = `${item.name}`"
      @mouseleave="footerStore.cursorLocation = ''"
    />
  </div>
</template>

//
<script setup>
import SingleMenu from "./SingleMenu.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useFooter } from "@/store/theFooter";
import { useNodeHeader } from "@/store/nodeHeader";

const footerStore = useFooter();
const router = useRouter();
const headerStore = useNodeHeader();

const items = ref([
  {
    name: "Help",
    icon: "/img/icon/base-header-icons/header-help-button.png",
  },
  {
    name: "Notifications",
    icon: "/img/icon/base-header-icons/header-notification-button.png",
  },
  {
    name: "Available Update",
    activeIcon: "/img/icon/base-header-icons/header-update-button-green.png",
    icon: "/img/icon/base-header-icons/header-update-button-blue.png",
  },
  {
    name: "Settings",
    icon: "/img/icon/base-header-icons/header-stereum-settings-button.png",
    path: "/setting",
  },
  {
    name: "Logout",
    icon: "/img/icon/base-header-icons/header-logout-button.png",
  },
]);

const handleShortcut = (event) => {
  if (event.ctrlKey && event.shiftKey) {
    switch (event.key.toLowerCase()) {
      case "h": // Ctrl+Shift+H for Help
        headerStore.setMenuModal("Help");
        break;
      case "j": // Ctrl+Shift+J for Notifications
        headerStore.setMenuModal("Notifications");
        break;
      case "u": // Ctrl+Shift+U for Available Update
        headerStore.setMenuModal("Available Update");
        break;
      case "g": // Ctrl+Shift+G for Settings
        router.push("/setting");
        break;
      case "l": // Ctrl+Shift+L for Logout
        headerStore.setMenuModal("Logout");
        break;
    }
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleShortcut);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleShortcut);
});
</script>
