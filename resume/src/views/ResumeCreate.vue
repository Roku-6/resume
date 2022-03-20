<template>
  <v-dialog v-model="dialog" scrollable persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn elevation="8" height="200px" width="100%"
        v-bind="attrs" v-on="on" class="resumeCard ma-1">
        職務経歴書1
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-text-field label="タイトル"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea placeholder="経験・知識" outlined>
            </v-textarea>
          </v-col>
          <v-col cols="12">
            <v-textarea placeholder="自己PR" outlined>
            </v-textarea>
          </v-col>
          <v-col cols="12" v-for="(qualification, index) in card.contents.qualifications" :key="index">
            <QualificationsList :qualification="qualification" />
          </v-col>
          <v-col>
            <v-card-text style="position: relative">
              <v-fab-transition>
                <v-btn color="green" dark absolute top right fab @click="addQualification">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-fab-transition>
            </v-card-text>
          </v-col>
          <v-col cols="12" v-for="(experience, index) in card.contents.experiences" :key="index">
            <ExperiencesList :experience="experience" />
          </v-col>
          <v-col>
            <v-card-text style="position: relative">
              <v-fab-transition>
                <v-btn color="green" dark absolute top right fab @click="addExperience">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-fab-transition>
            </v-card-text>
          </v-col>
          <v-col cols="12" align="center">
            <small>入力した内容は、自動保存されます。</small>
          </v-col>
          <v-col cols="12" align="center">
            <v-btn center color="blue darken-1" text @click="dialog = false; save()">
              閉じる
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import QualificationsList from './QualificationsList'
import ExperiencesList from './ExperiencesList'

export default {
  name: 'ResumeCreate',
  components: {
    QualificationsList,
    ExperiencesList
  },
  props: {
    card: Object,
    index: Number
  },
  methods: {
    addQualification: function () {
      this.$store.commit('addQualification', this.index)
    },
    addExperience: function () {
      this.$store.commit('addExperience', this.index)
    },
    clearText: function () {
      this.$store.commit('clearText')
    },
    save: function () {
      this.$store.dispatch('doSave')
    }
  },
  data () {
    return {
      dialog: false,
      selfInfo: this.card
    }
  }
}
</script>

<style>
.resumeCard {
  border-radius: 20px;
}
</style>
