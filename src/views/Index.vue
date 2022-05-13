<template>

     <div class="d-flex">
         <draggable class="d-flex mr-10" group="col">
             <div
                     class="card__wrapper"
                     v-for="(el, idx) in getTables()"
                     :key="idx"
             >
                 <h3 class="card__wrapper-title p-2">
                     {{ el.name }}
                 </h3>

                 <draggable
                         class="row card__wrapper-body p-2" group="row">
                     <div
                         v-if="el.children.length"
                         v-for="(children, i) in el.children"
                          :key="i"
                          class="card__wrapper-el py-2"
                        @click="getElById(el.id, children.id)"
                     >
                         {{ children.name }}
                     </div>
                     <addRow :col="el.id" />

                 </draggable>

             </div>
         </draggable>

         <addColumn class="card__wrapper" />

         <Modal @closeModal="closeModal" :statusShow="showModal">
             {{modal.body}}
         </Modal>
     </div>


</template>

<script>

  import draggable from "vuedraggable";
  import addColumn from "@/components/table/addColumn";
  import addRow from "@/components/table/addRow";
  import Modal from "@/components/particles/modal";

  export default {
    name: "Index",
    components: {
      draggable,
      addColumn,
      addRow,
      Modal,
    },
    data: () => ({
      showModal: false,
      modal: {
        body: '',
      }
    }),
    computed: {
      getTables(){
        return this.$store.getters.getTables;
      }
    },
    methods: {
      getElById(col, row) {
        this.showModal = true;
        this.modal.body = this.$store.getters.getElById({col, row})?.name;
      },
      closeModal(){
        this.showModal = false;
      }
    },
    mounted() {
      // console.log(this.getTables())
    }
  }
</script>
