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
export default {
  data () {
      return {
        headers: [
            { text: 'Package', value: 'package', left: true },
            { text: 'Product Release', value: 'release', sortable: false, left: true },
            { text: 'Version', value: 'version', sortable: false, left:true},
            { text: 'Merged', value: 'merged', sortable: false, left:true}
        ],
        items: [
          {
            value: false,
            package: 'Service',
            release: '406',
            version: '5.28.1',
            merged: false
          },
          {
            value: false,
            package: 'Video Web',
            release: '406',
            version: '4.28.0',
            merged: false
          }
        ]
      }
  }
}
</script>

<style>
</style>


