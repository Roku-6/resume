<template>
    <v-card-text style="position: relative">
        <v-row>
            <v-col cols="6">
                <v-text-field label="開始日">
                </v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field label="終了日">
                </v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field label="職業">
                </v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field label="ツール">
                </v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field label="環境">
                </v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field label="詳細">
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
  }
}
</script>
