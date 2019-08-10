var app = new Vue({
    el:'#freecell',
    data:{
        toDayDate:'',
        toDayTime:'',
        status:1,
        charted:false,
        timer:"25:00",
        newToDo:''
    },
    methods:{
        start:function(){
            this.status=2;
        }
    }
});