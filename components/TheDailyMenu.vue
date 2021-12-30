<template>
  <v-card class="pa-5" elevation="10" shaped>
    <v-row>
      <v-col class="d-flex justify-end mr-4">
        {{ menu.InitDate }}
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-card-title>Menú</v-card-title>
      </v-col>
    </v-row>
    <v-divider class="mt-5" />
    <v-row>
      <v-col class="d-flex justify-center">
        <v-card-subtitle class="subtitle-1">Primeros</v-card-subtitle>
      </v-col>
    </v-row>
    <v-row v-for="starter in menu.Starters" :key="starter._id.$oid">
      <v-col class="d-flex flex-column align-center">
        <p class="mb-1">{{ starter.ShortName[language] }}</p>
        <p class="caption">{{ starter.Description[language] }}</p>
      </v-col>
    </v-row>
    <v-divider class="mt-5"></v-divider>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-card-subtitle class="d-flex justify-center subtitle-1"
          >Segundos</v-card-subtitle
        >
      </v-col>
    </v-row>
    <v-row v-for="main in menu.Main" :key="main._id.$oid">
      <v-col class="d-flex flex-column align-center">
        <p class="mb-1">{{ main.ShortName[language] }}</p>
        <p class="caption">{{ main.Description[language] }}</p>
      </v-col>
    </v-row>
    <v-divider class="mt-5" />
    <v-card-text class="d-flex flex-column align-center">
      <p>{{ menu.Text[language] }}</p>
      <p class="body-1">{{ menu.Price[0] }} €</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TheDailyMenu",
  props: ["menu", "language"],
};
</script>

<style></style>
