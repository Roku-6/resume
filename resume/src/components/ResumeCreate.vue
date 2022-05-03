<template>
  <v-container mx-2 @click.stop="dialog = !dialog">
    <v-card ripple elevation="8" class="resumeCard" flat rounded="xl" height="192px" width="100%">
      <v-card-text>
        <v-row align="center">
          <v-col cols="6">更新日時：{{ resumeInfo.update_date }}</v-col>
          <v-col cols="2">
            <v-btn icon @click.stop="">
              <v-icon>mdi-tray-arrow-down</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn icon @click.stop="duplicateResume">
              <v-icon>mdi-content-copy</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn icon @click.stop="deleteDialog = true">
              <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
            <v-dialog v-model="deleteDialog" persistent width="25%">
              <v-card flat rounded="xl" height="200px">
                <v-container fill-height>
                  <v-col>
                    <v-card-title class="justify-center">
                      {{ resumeInfo.title }} を削除します
                    </v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click.stop="deleteDialog = false; deleteResume();">削除</v-btn>
                      <v-divider vertical></v-divider>
                      <v-btn color="primary" text @click.stop="deleteDialog = false">キャンセル</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-col>
                </v-container>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-title class="justify-center">
        {{ resumeInfo.title }}
      </v-card-title>
    </v-card>
    <v-dialog v-model="dialog" scrollable persistent max-width="1800px"><!--fullscreen-->
      <v-card class="pa-10">
        <v-card-text>
          <v-row  class="my-5">
            <v-col cols="4">
              <v-text-field hide-details label="タイトル" v-model='resumeInfo.title' color="#A0A0A0"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="my-6 pa-2">
            <v-col cols="3">
              <v-text-field hide-details label="名前" v-model='resumeInfo.contents.user_name' color="#A0A0A0"></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field hide-details label="フリガナ" v-model='resumeInfo.contents.user_kana' color="#A0A0A0"></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field hide-details label="生年月日" v-model='resumeInfo.contents.birth_date' color="#A0A0A0"></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field hide-details label="性別" v-model='resumeInfo.contents.gender' color="#A0A0A0"></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field hide-details label="最寄駅" v-model='resumeInfo.contents.nearest' color="#A0A0A0"></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field hide-details label="路線" v-model='resumeInfo.contents.line' color="#A0A0A0"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="my-6 pa-2">
            <v-col cols="12">
              <v-textarea hide-details label="職務要約" v-model='resumeInfo.contents.job_summary' color="#A0A0A0" outlined>
              </v-textarea>
            </v-col>
          </v-row> <!--
          <v-row class="my-6 pa-2">
            <v-col cols=12 class="ml-2">
              職務職歴
              <v-btn color="green" class="ml-2" x-small dark fab @click="addExperience">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" v-for="experience in card.contents.experiences" :key="experience.id">
              <ExperiencesList :card="card" :experience="experience"  style="border: solid #A0A0A0 0.3px" class="pa-4"/>
            </v-col>
          </v-row> -->
          <v-row class="my-6 pa-2">
            <v-col cols="12">
              <v-textarea hide-details label="活かせる経験・知識・スキル"  v-model='resumeInfo.contents.skills' color="#A0A0A0" outlined>
              </v-textarea>
            </v-col>
          </v-row><!--
          <v-row class="my-6 pa-2">
            <v-col cols=12>
              資格
              <v-btn color="green" class="ml-2" x-small dark fab @click="addQualification">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="6" v-for="qualification in card.contents.qualifications" :key="qualification.id">
              <QualificationsList :card="card" :qualification="qualification"/>
            </v-col>
          </v-row> -->
          <v-row class="my-6 pa-2">
            <v-col cols="12">
              <v-textarea hide-details label="自己PR" v-model='resumeInfo.contents.about_myself' color="#A0A0A0" outlined>
              </v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" align="center">
              <v-btn center color="blue darken-1" text @click="dialog = false; save();">
                保存して閉じる
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
// import QualificationsList from './QualificationsList'
// import ExperiencesList from './ExperiencesList'

export default {
  name: 'ResumeCreate',
  data () {
    return {
      dialog: false,
      deleteDialog: false,
      resumeInfo: this.resume
    }
  }, /*
  components: {
    QualificationsList,
    ExperiencesList
  }, */
  mounted () {
  },
  props: {
    resume: Object
  },
  methods: {
    duplicateResume: function () {
      this.$store.commit('duplicateResume', this.resumeInfo.id)
    },
    deleteResume: function () {
      this.$store.dispatch('deleteResume', this.resumeInfo.resume_id)
    },
    save () {
      this.$store.dispatch('saveResume', this.resumeInfo.resume_id)
    },
    addQualification: function () {
      this.$store.commit('addQualification', this.resumeInfo.id)
    },
    addExperience: function () {
      this.$store.commit('addExperience', this.resumeInfo.id)
    }
  }
}
</script>

<style>
.resumeCard {
  border-radius: 20px;
  overflow: hidden;
}
</style>
