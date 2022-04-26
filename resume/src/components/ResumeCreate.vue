<template>
  <v-container mx-2 @click.stop="dialog = !dialog">
    <v-card ripple elevation="8" class="resumeCard" flat rounded="xl" height="192px" width="100%">
      <v-card-text>
        <v-row align="center">
          <v-col cols="6">更新日時：</v-col>
          <v-col cols="2">
            <v-btn icon @click.stop="">
              <v-icon>mdi-tray-arrow-down</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn icon @click.stop="duplicateCard">
              <v-icon>mdi-content-copy</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn icon @click.stop="deleteDialog = !deleteDialog">
              <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
            <v-dialog v-model="deleteDialog" persistent width="25%">
              <v-card flat rounded="xl" height="200px">
                <v-container fill-height>
                  <v-col>
                    <v-card-title class="justify-center">
                      {{ selfInfo.title }} を削除します
                    </v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click.stop="deleteCard">削除</v-btn>
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
        {{ selfInfo.title }}
      </v-card-title>
    </v-card>
    <v-dialog v-model="dialog" scrollable persistent max-width="1800px"><!--fullscreen-->
      <v-card class="pa-10">
        <v-card-text>
          <v-row  class="my-5">
            <v-col cols="4">
              <v-text-field hide-details label="タイトル" v-model='selfInfo.title' color="#A0A0A0"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="my-6 pa-2">
            <v-col cols="3">
              <v-text-field hide-details readonly label="名前" v-model='this.selfInfo.contents.fullName' color="#A0A0A0"></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field hide-details readonly label="フリガナ" v-model='this.selfInfo.contents.furigana' color="#A0A0A0"></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field hide-details readonly label="生年月日" v-model='this.selfInfo.contents.birthday' color="#A0A0A0"></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field hide-details readonly label="性別" v-model='this.selfInfo.contents.sex' color="#A0A0A0"></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field hide-details readonly label="最寄駅" v-model='this.selfInfo.contents.nearestStation' color="#A0A0A0"></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field hide-details readonly label="路線" v-model='this.selfInfo.contents.railRoute' color="#A0A0A0"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="my-6 pa-2">
            <v-col cols="12">
              <v-textarea hide-details placeholder="職務要約" color="#A0A0A0" outlined>
              </v-textarea>
            </v-col>
          </v-row>
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
          </v-row>
          <v-row class="my-6 pa-2">
            <v-col cols="12">
              <v-textarea hide-details placeholder="活かせる経験・知識・スキル" color="#A0A0A0" outlined>
              </v-textarea>
            </v-col>
          </v-row>
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
          </v-row>
          <v-row class="my-6 pa-2">
            <v-col cols="12">
              <v-textarea hide-details placeholder="自己PR" color="#A0A0A0" outlined>
              </v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" align="center">
              <v-btn center color="blue darken-1" text @click="dialog = false">
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
import QualificationsList from './QualificationsList'
import ExperiencesList from './ExperiencesList'

export default {
  name: 'ResumeCreate',
  data () {
    return {
      dialog: false,
      deleteDialog: false,
      selfInfo: this.card
    }
  },
  mounted () {
  },
  components: {
    QualificationsList,
    ExperiencesList
  },
  props: {
    card: Object
  },
  methods: {
    duplicateCard: function () {
      this.$store.commit('duplicateCard', this.selfInfo.id)
    },
    deleteCard: function () {
      this.$store.commit('deleteCard', this.selfInfo.id)
    },
    addQualification: function () {
      this.$store.commit('addQualification', this.selfInfo.id)
    },
    addExperience: function () {
      this.$store.commit('addExperience', this.selfInfo.id)
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
