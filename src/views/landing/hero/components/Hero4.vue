<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts"></script>

<template>
  <v-card class="my-5" rounded>
    <v-card-title class="card-title">Hero4</v-card-title>
    <v-divider></v-divider>
    <v-row align="stretch">
      <v-col cols="12" md="6">
        <v-sheet color="transparent" elevation="0" class="py-10">
          <v-card color="transparent" elevation="0" max-width="800" class="mx-auto my-10 px-10">
            <img class="mb-10" width="200" src="@/assets/logo2.svg" alt="" />
            <h1 style="color: #4a4d6d" class="font-weight-black text-h3 text-lg-h2 text-xl-h1">
              We organize chaotic
              <span class="text-primary">internet</span>
            </h1>
            <h2 class="text-h6 text-secondary mt-4 mx-auto">Stack is a Spatial Browser for Mindful Online Living</h2>
            <v-row class="mt-5">
              <v-col cols="12" sm="6">
                <v-btn block size="x-large" class="text-white mr-5" color="primary">Get Stack</v-btn>
              </v-col>
              <v-col cols="12" sm="6">
                <v-btn variant="outlined" block size="x-large" class="text-primary">Watch Demo</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-sheet>
      </v-col>
      <v-col md="6">
        <v-card class="h-full" color="blue">
          <v-img
            height="100%"
            cover
            src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped lang="scss"></style>
