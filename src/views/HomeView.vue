<template>
  <div>
    <h1 class="subheading grey--text">Dashboard</h1>

   


    <v-main>
      <v-container class="my-3">
        <v-row class="mb-3 ml-2">
          <v-btn @click="sortBy('title')" small plain>
            <span>by Project name</span>
          </v-btn>
          <v-btn @click="sortBy('person')" small plain>
            <span>by Person</span>
          </v-btn>
        </v-row>

        <v-card class="gray lighten-4" v-for="project in projects" :key="project.title">
          <v-row no-gutters wrap :class="`pa-3 project ${project.state}`">
            <v-col cols="12" md="6">
              <div class="caption gray--text">Project Title</div>
              <div>{{project.title}}</div>
            </v-col>

            <v-col cols="4" sm="4" md="2">
              <div class="caption gray--text">Person</div>
              <div>{{project.person}}</div>
            </v-col>

            <v-col cols="8" sm="5" md="2">
              <div class="caption gray--text">Due</div>
              <div>{{project.due}}</div>
            </v-col>

            <v-col cols="4" sm="3" md="2" class="pl-4">
              <div class="caption gray--text">State</div>
              <div :class="`${project.state} state`">{{project.state}}</div>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-main>
  </div>
</template>

<script>
  export default {
   data() {
    return {
      projects: [
        {title: '범죄자 검색 시스템 (Java)', person:'team', due:'2022.12.01 ~ ', state:'ongoing'},
        {title: '포트폴리오 제작', person:'solo', due:'2022.11.30~', state:'ongoing'},
        {title: '전동 킥보드 대여 & 음주 측정 안드로이드 앱', person:'team (컴사모)', due:'2022.06 ~ 2022.12.06', state:'completed'},
        {title: '국가 사전 (안드로이드 앱)', person:'team', due:'2022.06.30 ~ 2022.07.14', state:'completed'},
        {title: '웹툰 앱', person:'solo', due:'2023. 03 ~ 2023. 05', state:'completed'},
        {title: '영화 앱', person:'solo', due:'2023. 06 ~', state:'ongoing'},
      ]
    }
   },
   methods : {
        sortBy(prop) {
          this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
        }
      }
  }
  
</script>

<style>
  .project.complete {
    border-left: 4px soild skyblue;
  }
  .project.ongoing {
    border-left: 4px soild orange;
  }
  .state.complete {
    color: skyblue;
  }
  .state.ongoing {
    color: orange;
  }
  .theme--light.v-btn:not(.v-btn--icon).complete {
    background-color: #3cd1c2;
  }
  .theme--light.v-btn:not(.v-btn--icon).ongoing {
    background-color: #ffaa2c;
  }
  .theme--light.v-btn.complete {
    color: #3cd1c2;
  }
  .theme--light.v-btn.ongoing {
    color: #ffaa2c;
  }
</style>