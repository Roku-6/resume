<template>
  <v-card elevation="6" outlined style="box-shadow: 1px 2px gray;">
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{ card.name }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-dialog v-model="dialog" scrollable persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn elevation="8" color="primary" icon @click="$store.commit('dellCard')">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <v-btn elevation="8" color="primary" icon v-bind="attrs" v-on="on">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-text-field solo v-model='selfInfo.name'
            clear-icon="mdi-close-circle" clearable @click:clear="clearText"
            placeholder="タイトルを入力してください。">
          </v-text-field>
          <v-spacer></v-spacer>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field label="日付">
                </v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="姓">
                </v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="名" persistent-hint required>
                </v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="セイ">
                </v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="メイ" persistent-hint required>
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea label="職務要約" required>
                </v-textarea>
              <small>テキストエリアの大きさは右下の矢印から変更できます。</small>
              </v-col>
              <v-col cols="12">
                <v-textarea label="自己PR" required>
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
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false; save()">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-actions>
  </v-card>
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
