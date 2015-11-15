//config
require.config({
    paths:{
        jquery:'../src/bower_components/jquery/dist/jquery',
        lodash:"../src/bower_components/lodash/lodash",
        swipe:"../src/bower_components/Swipe/swipe"
    },
    shim:{
      'swipe': {
           exports: 'Swipe'
       },
    }
});

require(["util/index4"],function(util){
    console.log(util);
})
