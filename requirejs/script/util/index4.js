define(function(require, exports, module) {
        /**
         * 直接 用require 来引入模块
         * **/
        var add = require('calc/add');

        var num = add.add(2,3);

        console.log(num);

        function fun(){
            console.log("fun");
        }

        function fun2(){
            console.log("fun2");
        }

        /**
         * 暴露方法
         * 1.exports
         * 2.moduel.exports
         * */
        //exports.fun = fun;
        //exports.fun2 = fun2;

        module.exports = {
            fun:fun,
            fun2:fun2,
            fun3:fun2
        }



        /**使用jquery 等其他 第三方插件***/
        //jquery 插件
        var $ = require("jquery");

        $("h1").css("color","red");

        //lodash 插件

        var _ = require("lodash");

        var lodash_content = _.difference([1, 2, 3], [4, 2]);
        console.log("-------");
        console.log(lodash_content);
        console.log("-------");


        /***使用swiper 插件***/
        require('./swipe-plugin');
    }
);
