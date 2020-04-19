var vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  beforeCreate: function() {
  	console.log('beforeCreate()');
  },
  created: function() {
  	console.log('created()'); 
  },
  beforeMount: function() {
  	console.log('beforeMount()');
  },
  mounted: function() {
  	console.log('mounted()');
  },
  beforeUpdate: function() {
  	console.log('beforeUpdate()');
  },
  updated: function() {
  	console.log('updated()');
  },
  beforeDestroy: function() {
  	console.log('beforeDestroy()'); 
  },
  destroyed: function() {
  	console.log('destroyed()');
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});


var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The VueJS Instance Another One!',
  },
  methods: {
    onChange: function() {
      vm1.title = 'Changed!!';
    }
  }
});

setTimeout(function() {
  vm1.title = 'Changed by timer!';
}, 3000);