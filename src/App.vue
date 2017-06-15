<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <v-layout column>
          <v-flex xs12>
            <data-table></data-table>
          </v-flex>
        </v-layout>
        <v-layout row mt-2>
          <v-flex xs12>
            <v-card primary><p>Hello</p></v-card>
          </v-flex>
        </v-layout>
      </v-container>

    </main>
    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import DataTable from './DataTable.vue'

  export default {
    name: app,
    components: { DataTable },
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Envysion Engineering Team -- Releases and Versioning'
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
