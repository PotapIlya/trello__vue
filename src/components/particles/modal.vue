<template>
    <div class="modal" ref="modal" :class="{ 'd-none' : !statusModal }">

       <div ref="modalWrapper" class="modal__wrapper">
           <div class="modal__header">
               <slot name="header" />
           </div>
           <div class="modal__body">
               <slot />
           </div>
           <div class="modal__footer">
               <slot name="footer" />
           </div>
       </div>

    </div>
</template>

<script>
  export default {
    props: {
      statusShow: {
        type: Boolean,
        default: false,
      }
    },
    data: () => ({
      statusModal: false,
    }),
    watch: {
      statusShow () {
        this.statusModal = this.statusShow
      },
      statusModal() {
        this.statusModal ?
          document.addEventListener('click', this.addHandled) :
          document.removeEventListener('click', this.addHandled)
      }
    },
    methods: {
      addHandled(e){
        if (e.target === this.$refs.modal){
          this.statusModal = false;
          this.$emit('closeModal')
        }
      }
    }
  }
</script>
