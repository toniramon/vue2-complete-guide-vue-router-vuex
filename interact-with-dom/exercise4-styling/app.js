new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    float: 'float',
    userClass: '',
    isVisible: true,
    myStyle: {
      width: '100px',
      height: '150px',
      backgroundColor: 'gray'
    },
    myProgress: 0
  },
  methods: {
    startEffect: function() {
      var vm = this;
        setInterval(function() {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
          vm.effectClasses.shrink = !vm.effectClasses.shrink;
        }, 1000);
      },
      startProgress: function() {
        setInterval(() => {
          this.myProgress < 100 ? this.myProgress++ : clearInterval();
        }, 20);
      },
  },
  computed: {
    showProgress() {
      return "width: " + this.myProgress + 'px';
    }
  }
});
