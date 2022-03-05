<template>
    <v-card-text style="position: relative">
        <v-row>
            <v-col cols="6">
                <v-text-field hide-details label="日付">
                </v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field hide-details label="資格名">
                </v-text-field>
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script>
export default {
  name: 'QualificationsList',
  props: {
    qualification: Object
  }
}
</script>
