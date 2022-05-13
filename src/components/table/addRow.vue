<template>
    <div>
        <button v-if="!showForm" @click="showForm = true" class="">
            Добавить карточку
        </button>
        <div class="d-flex" v-if="showForm">

            <label for="">
                <input type="text" v-model="input">
            </label>
            <div class="d-flex">
                <button @click="showForm = false">закрыть</button>
                <button @click="save">Добавить</button>
            </div>

        </div>
    </div>
</template>

<script>
  export default {
    props:{
      col: {
        type: Number,
        required: false,
      }
    },
    data: () => ({
      showForm: false,
      input: '',
    }),
    methods: {
      save(){
        if (this.input.trim().length){
          this.$store.dispatch('actAddRow', {
            col: this.col, val: this.input.trim()
          });
          this.input = '';
          this.showForm = false;
        }
      }
    }
  }
</script>
