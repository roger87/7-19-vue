console.log("我是js")

var vue1 = new Vue({
    el: "#vue1",
    data: {
        text:"哈囉~我喜高金say",
        a:999,
        b:3
    }
});

var vue2 = new Vue({
    el: "#vue2",
    data:{
        aligment:"center",
        google:"http://google.com"
    }
});

var vue3 = new Vue({
    el: "#vue3",
    data: {
        test:true,
        activity:false
    }
});

var vue4 = new Vue({
    el: "#vue4",
    data: {
        products: [
            {name:"奶茶", price:45},
            {name:"紅茶", price:35},
            {name:"多多綠茶", price:50},
            {name:"珍珠奶茶", price:25},
            {name:"花草茶", price:30}
        ]
    }
});

var vue5 = new Vue({
    el: "#vue5",
    data : {
        text: "",
        count: 0,
        msg: "",
    },
    methods: {
        show: function() {
            this.text = "點到了~"
        },
        add: function() {
            this.count++;
        },
        sub: function () {
            this.count--;
        },
        change: function() {
            this.msg = "點到了!!!"
        },
    }
});

var vue6 = new Vue({
    el: "#vue6",
    data: {
        name: ""
    }
});