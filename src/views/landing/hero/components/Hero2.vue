<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts"></script>

<template>
  <v-card class="my-5" rounded>
    <v-card-title class="card-title">Hero2</v-card-title>
    <v-divider></v-divider>
    <v-row class="pa-10">
      <v-col cols="12" md="6">
        <img class="mx-auto" width="200" src="@/assets/logo2.svg" alt="" />
        <v-card variant="flat" max-width="800" class="mx-auto my-10">
          <h1 style="color: #4a4d6d" class="font-weight-black text-h3 text-lg-h2 text-xl-h1">
            We organize chaotic
            <span class="text-primary">internet</span>
          </h1>
          <h2 class="text-h6 text-secondary mt-4 mx-auto">Stack is a Spatial Browser for Mindful Online Living</h2>
        </v-card>
        <div class="text-center">
          <v-btn size="x-large" class="text-white" color="primary">Get Stack</v-btn>
        </div>
      </v-col>
      <v-col cols="0" md="6">
        <v-card variant="flat">
          <v-img
            height="420"
            src="https://img.freepik.com/free-vector/group-people-working-together_52683-28615.jpg?w=2000&t=st=1678176451~exp=1678177051~hmac=5848d02937d139b407d25a00e631d57a3161339e32e353f832f53e31d6424624"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped lang="scss"></style>
