<template>
    <v-card-text style="position: relative">
        <v-row>
            <v-col cols="6">
                <v-text-field outlined label="年月">
                </v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field outlined label="資格名">
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
