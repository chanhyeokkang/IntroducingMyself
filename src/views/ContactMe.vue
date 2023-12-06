<template>
    <v-container>
      <h1 class="text-center py-5">Contact me!</h1>
      <v-card dark flat>
        <v-layout wrap row class="my-5">
          <v-flex>
            <v-btn text class="my-5 mx-3">
              <v-icon large left>mdi-phone</v-icon>
              <span class="subheading font-weight-bold"> <a href="tel:+chanhyeokkang@sillain.ac.kr" style="text-decoration: none; color: #FFF"> FaceTime</a></span>
            </v-btn>
          </v-flex>
          <v-flex>
            <v-btn text class="my-5 mx-3">
              <v-icon large left>mdi-email</v-icon>
              <span class="subheading font-weight-bold"> <a href="mailto:chanhyeokkang@sillain.ac.kr?subject=안녕하세요." style="text-decoration:none; color: #FFF"> chanhyeokkang@sillain.ac.kr</a></span>
            </v-btn>
          </v-flex>
          <v-flex>
            <v-btn text class="my-5 mx-3">
              <v-icon large left>mdi-google-maps</v-icon>
              <span class="subheading font-weight-bold"> Busan, Republic of Korea</span>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-footer class="py-5">
          <v-layout>
            <v-flex >
              <v-btn text>
                <a href="https://github.com/chanhyeokkang" ref="github" target="_blank"></a>
                <v-icon large left @click="github">
                  mdi-github
                </v-icon>
              </v-btn>
            </v-flex>
            <v-flex>
              <v-btn text>
              <a href="https://twitter.com/AndroidDev" ref="twitter" target=_blank></a>
              <v-icon large left @click="twitter"> mdi-twitter </v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-footer>
      </v-card>
    </v-container>
</template>
<script>
export default {
  methods: {
    github () {
      this.$refs.github.click()
    },
    twitter () {
      this.$refs.twitter.click()
    }
  }
}
</script>