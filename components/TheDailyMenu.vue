<template>
  <v-card class="pa-5">
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
    <v-divider />
    <v-row>
      <v-col class="d-flex justify-center">
        <v-card-subtitle>Primeros</v-card-subtitle>
      </v-col>
    </v-row>
    <v-row v-for="starter in menu.Starters" :key="starter._id.$oid">
      <v-col class="d-flex justify-center direction-column">
        {{ starter.ShortName[0] }}
        {{ starter.Description[0] }}
      </v-col>
    </v-row>
    <v-divder></v-divder>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-card-subtitle class="d-flex justify-center"
          >Segundos</v-card-subtitle
        >
      </v-col>
    </v-row>
    <v-row v-for="main in menu.Main" :key="main._id.$oid">
      <v-col class="d-flex direction-column justify-center">
        {{ main.ShortName[0] }}
        {{ main.Description[0] }}
      </v-col>
    </v-row>
    <v-divider />
    <v-card-text class="d-flex direction-column">
      {{ menu.Text[0] }}
      {{ menu.Price[0] }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TheDailyMenu",
  props: ["menu"],
};
</script>

<style></style>
