new Vue({
    el: '#exercise',
    data: {
        value: '',
    },
    methods: {
        alertMe: function() {
            alert('Alert!');
        },
        storeData: function(event) {
            this.value = event.target.value;
        }
    }
});