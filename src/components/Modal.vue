<template>
	<div>
	  <b-button @click="showModal" ref="btnShow">Open Modal</b-button>
	  <b-button @click="toggleModal" ref="btnToggle">Toggle Modal</b-button>

	  <b-modal id="modal-1">
	    <div class="d-block">Hello From My Modal!</div>
	    <b-button @click="hideModal">Close Me</b-button>&nbsp;
	    <b-button @click="toggleModal">Toggle Me</b-button>
	  </b-modal>
	</div>
</template>
<script type="text/javascript">
	export default {
	  methods: {
	    showModal() {
	      this.$root.$emit('bv::show::modal', 'modal-1', '#btnShow')
	    },
	    hideModal() {
	      this.$root.$emit('bv::hide::modal', 'modal-1', '#btnShow')
	    },
	    toggleModal() {
	      this.$root.$emit('bv::toggle::modal', 'modal-1', '#btnToggle')
	    }
	  }
}
</script>