<template>
  <v-data-table
    v-bind:headers="headers"
    v-bind:items="items"
    hide-actions
    class="elevation-1"
  >
  <template slot="headers" scope="props">
    <span v-tooltip:bottom="{ 'html': props.item.text }">
      {{ props.item.text }}
    </span>
  </template>
  <template slot="items" scope="props">
    <td>
      <v-text-field :value="props.item.package" v-model="props.item.package">
      </v-text-field>
    </td>
    <td class="text-xs-right">
      <v-text-field :value="props.item.release" v-model="props.item.release">
      </v-text-field>
    </td>
    <td class="text-xs-right">
      <v-text-field :value="props.item.version" v-model="props.item.version">
      </v-text-field>
    </td>
    <td> 
      <v-checkbox
        hide-details
        success
        v-model="props.item.merged"
      ></v-checkbox>
    </td>
  </template>
  </v-data-table>
</template>

<script>

import * as requestHandler from './requesthandler.js'

export default {
  data () {
      return {
        headers: [],
        items: []
      }
  },
  mounted () {
    this.getTableData();
  },
  methods: {
    getTableData () {
      requestHandler.getReleases((headers, items) => {
        this.headers = headers
        this.items = items
      })
    },
  addNewRelease(){}
  }
}
</script>

<style>
</style>


