<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- <the-avatar v-if="isLogged" /> -->
      <the-avatar></the-avatar>
      <v-icon left dark></v-icon
      ><v-switch
        v-model="$vuetify.theme.dark"
        prepend-icon="mdi-invert-colors"
      ></v-switch>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import TheAvatar from "~/components/TheAvatar.vue";
export default {
  components: { TheAvatar },
  name: "DefaultLayout",
  middleware: "auth",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/",
        },
        {
          icon: "mdi-silverware ",
          title: "Daily-menu",
          to: "/DailyMenu",
        },
        {
          icon: "mdi-set-none",
          title: "Product Types",
          to: "/PTypes",
        },
        {
          icon: "mdi-family-tree",
          title: "Families",
          to: "/Families",
        },
        {
          icon: "mdi-chart-tree",
          title: "Departments",
          to: "/Departments",
        },
        {
          icon: "mdi-pasta",
          title: "Products",
          to: "/Products",
        },
      ],
      miniVariant: false,
      right: true,
      title: "Menu-Nuxt",
      dark: true,
    };
  },
  computed: {
    isLogged: function () {
      console.log("isLogged");
      let result = this.$store.getters.getIsLogged;

      return result;
    },
    isAdmin: function () {
      let result = this.$store.getters.getIsAdmin;
      return result;
    },
  },
  created() {
    if (this.$store.getters.getIsAdmin) {
      this.items.push(
        {
          icon: "mdi-account-plus-outline",
          title: "Register",
          to: "/Register",
        },
        {
          icon: "mdi-account-outline",
          title: "Users",
          to: "/Users",
        },
        {
          icon: "mdi-vuetify ",
          title: "Pruebas",
          to: "/ComponentTester",
        }
      );
    }
    if (this.isLogged) {
      this.items.push({
        icon: "mdi-logout ",
        title: "Log Out",
        to: "/LogOut",
      });
    }
  },
};
</script>
<style lang="scss" scoped>
html {
  overflow-y: auto;
}
</style>
