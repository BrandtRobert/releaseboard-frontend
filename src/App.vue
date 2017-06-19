<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title v-text="title" class="white--text"></v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <v-layout column>
          <v-flex xs12>
            <data-table :headers="headers" :items="items" :removeSelected="deleteSelected"></data-table>
          </v-flex>
        </v-layout>
        <v-layout row mt-2>
          <v-flex xs12 text-xs-center>
            <v-btn success light v-on:click.native="updateTable">Save Changes</v-btn>
            <v-btn primary light v-on:click.native.stop="showReleaseModal = true">Add New Release</v-btn>
            <v-btn class="red" light v-on:click.native="deleteReleases">Delete Selected</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row mt-2>
          <v-flex xs12 text-xs-center>
            <v-alert success dismissible v-model="success">Changes Saved!</v-alert>
          </v-flex>
        </v-layout>
        <new-release-dialog :showDialog="showReleaseModal" :submitRelease="addNewRelease"
          :closeDialog="closeReleaseModal"></new-release-dialog>
      </v-container>

    </main>
    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import DataTable from './DataTable.vue'
  import NewReleaseDialog from './NewReleaseDialog.vue'
  import * as requestHandler from './requesthandler.js'

  export default {
    name: app,
    components: {
      DataTable,
      NewReleaseDialog
    },
    data () {
      return {
        fixed: false,
        title: 'Envysion Engineering Team -- Releases and Versioning',
        headers: [],
        items: [],
        success: false,
        showReleaseModal: false,
        confirmDeleteModal: false,
        selected: []
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
        requestHandler.postChanges(this.items, (err) => { 
            this.getTableData()
            this.success = true
        })
      },
      addNewRelease (pack, release, version) {
        let newRelease = {
          package: pack,
          release: release,
          version: version
        }
        requestHandler.addNewRelease(newRelease, () => {
          // figure out why getTableData doesn't update fast enough
          this.updateTable()
          this.showReleaseModal = false
          this.success = true
        })
      },
      closeReleaseModal () {
        this.showReleaseModal = false
      },
      deleteSelected (items) {
        console.log(JSON.stringify(items))
      }
    }
  }
</script>
<style lang="stylus">
  @import './stylus/main'
</style>
