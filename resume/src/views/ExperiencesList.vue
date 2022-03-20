<template>
    <v-card-text style="position: relative">
        <v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <v-date-picker v-model="dates" range></v-date-picker>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="dateRangeText"
                  label="Date range" prepend-icon="mdi-calendar"
                  readonly ></v-text-field>
                model: {{ dates }}
              </v-col>
            </v-row>
            <v-col cols="6">
                <v-text-field label="業種">
                </v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field label="業務内容">
                </v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field label="使用ツール等">
                </v-text-field>
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script>
export default {
  name: 'ExperiencesList',
  props: {
    experience: Object
  },
  data: () => ({
    dates: []
  }),
  computed: {
    dateRangeText () {
      return this.dates.join(' - ')
    }
  }
}
</script>
