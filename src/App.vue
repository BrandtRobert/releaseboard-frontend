<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title v-text="title" class="white--text"></v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <v-layout column>
          <v-flex xs12>
            <data-table :headers="headers" :items="items"></data-table>
          </v-flex>
        </v-layout>
        <v-layout row mt-2>
          <v-flex xs12 text-xs-center>
            <v-btn primary light @click="updateTable">Save Changes</v-btn>
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
  import * as requestHandler from './requesthandler.js'

  export default {
    name: app,
    components: {
      DataTable
    },
    data() {
      return {
        fixed: false,
        title: 'Envysion Engineering Team -- Releases and Versioning',
        headers: [],
        items: []
      }
    },
    mounted() {
      this.getTableData()
    },
    methods: {
      getTableData () {
        requestHandler.getReleases((headers, items) => {
          this.headers = headers
          this.items = items
        })
      },
      updateTable () {
        
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
