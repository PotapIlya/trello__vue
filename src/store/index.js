import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    tables: [
      {
        id:1,
        name: 'col_1',
        children: [
          { name: "John1", id: 1 },
          { name: "Joao1", id: 2 },
          { name: "Jean1", id: 3 },
          { name: "Gerard1", id: 4 }
        ]
      },
      {
        id: 2,
        name: 'col_2',
        children: [
          { name: "John2", id: 1 },
          { name: "Joao2", id: 2 },
          { name: "Jean2", id: 3 },
          { name: "Gerard2", id: 4 }
        ]
      }
    ]
  },
  getters: {
    getTables: ({tables}) => () => tables,
    getElById: ({tables}) => ({col, row}) => tables.find(table => table.id === col)?.children.find(child => child.id === row),
  },
  mutations: {
    mutAddColumn: ({tables}, data) => tables.push({name: data, children: []}),
    mutAddRow: ({tables}, {col, val}) => tables.find(table => table.id === col).children.push({ name: val, id: 1 }),
  },
  actions: {
    actAddColumn: ({commit}, data) => commit('mutAddColumn', data),
    actAddRow: ({commit}, data) => commit('mutAddRow', data),
  },
  modules: {
  }
})
