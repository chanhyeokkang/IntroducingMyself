<template>
  
    <div id="MyProject" class="container-fluid">
    <h1 class="subheading grey--text">My Project</h1>
      <div class="row">
    <div class="mb-3 col-lg-4 col-md-4 col-sm-4 col-12" :key="index" v-for="(project,index) in MyProject">
      <div class="card border-info text-light">
        <div class="card-body  bg-dark">
          <h5 class="card-title">{{project.name}}</h5>
          <p class="card-text text-justify">{{project.desc}}</p>
          <a target="_blank" :href="project.link" class="btn btn-info"><i :class="{'fas fa-external-link-alt': project.button=='Admin Console','fab fa-github':project.button=='Github','fab fa-gitlab':project.button=='Gitlab'}"></i> {{project.button}}</a>
        </div>
      </div>
    </div>
  </div>
  <v-container>
      <v-card style="width: 300" height="200">
        <v-toolbar dark>
          <v-toolbar-title>범죄자 검색 시스템</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn :href="'https://sillain-my.sharepoint.com/:b:/g/personal/chanhyeokkang_sillain_ac_kr/EQwYNtdc2kxNlqzcJQTw_LABmj2B8Nm3MOiX_GdW7LN3hg?e=S4ImwZ'">보고서</v-btn>
        </v-toolbar>
        <v-card-title>Java</v-card-title>
        <v-card-subtitle>Completed</v-card-subtitle>
        <v-card-text>
          GUI와 데이터베이스를 연동해 만든 일반인과 숨어든 범죄자 사이에서 범죄자만을 색출하는 시스템
        </v-card-text>
      </v-card>
    </v-container>

    <v-container>
      <v-card style="width: 300" height="200">
        <v-toolbar dark>
          <v-toolbar-title>전동 킥보드 대여 & 음주 측정 앱</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn :href="'https://www.youtube.com/watch?v=zMnO8m4aX7A'">YouTube</v-btn>
        </v-toolbar>
        <v-card-title>Java</v-card-title>
        <v-card-subtitle>Completed</v-card-subtitle>
        <v-card-text>
          전동 킥보드를 타기 전에 음주 여부를 측정할 수 있고, 킥보드의 위치 정보를 파악할 수 있는 앱
        </v-card-text>
      </v-card>
    </v-container>

    <v-container>
      <v-card style="width: 300" height="200">
        <v-toolbar dark>
          <v-toolbar-title>국가 사전</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn :href="'https://sillain-my.sharepoint.com/:p:/g/personal/chanhyeokkang_sillain_ac_kr/ES-s6bpb0ixEvBbDPUIjYvUBljxAF_2vlwafpShhBBGKPA?e=2vSDNT'">보고서</v-btn>
        </v-toolbar>
        <v-card-title>Java</v-card-title>
        <v-card-subtitle>Completed</v-card-subtitle>
        <v-card-text>
          국기를 눌렀을 떄 그 나라의 랜드마크, 음식 등을 소개해주는 앱
        </v-card-text>
      </v-card>
    </v-container>

    <v-container>
      <v-card style="width: 300" height="200">
        <v-toolbar dark>
          <v-toolbar-title>웹툰 앱</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn>보고서 준비 중</v-btn>
        </v-toolbar>
        <v-card-title>Java</v-card-title>
        <v-card-subtitle>Completed</v-card-subtitle>
        <v-card-text>
          기존의 웹툰 앱의 화면 구성과 기능을 따라 만든 학습용 앱
        </v-card-text>
      </v-card>
    </v-container>

    <v-container>
      <v-card style="width: 300" height="200">
        <v-toolbar>
          <v-toolbar-title>영화 앱</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn>보고서 준비 중</v-btn>
        </v-toolbar>
        <v-card-title>Kotlin</v-card-title>
        <v-card-subtitle>Ongoing</v-card-subtitle>
        <v-card-text>
          Kotlin 기반의 REST-API를 활용한 일일 박스오피스 정보 등을 나타내는 앱
        </v-card-text>
      </v-card>
    </v-container>


    </div>
  </template>
  
  <script>
  export default {
    name : 'MyProject',
    data(){
      return{
        MyProject:[
        
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  a:hover{
    color: black;
    background-color: white;
  }
  </style>