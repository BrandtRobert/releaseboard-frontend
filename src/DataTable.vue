<template>
  <v-data-table
    v-bind:headers="headers"
    v-bind:items="items"
    v-model="selected"
    select-key="package"
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
      <v-checkbox error hide-details v-model="props.selected">
      </v-checkbox>
    </td>
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
  props: ['headers', 'items', 'removeSelected'],
  data () {
    return {
      selected: []
    }
  },
  methods: {
    deleteSelections: function () {
      console.log('Calling local remove')
      this.removeSelected(selected)
    }
  }
}
</script>

<style>
</style>


