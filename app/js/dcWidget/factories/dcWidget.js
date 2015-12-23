'use strict';

var factoriesModule = require('./_index');

/**
 * @ngInject
 */
function dcWidgetFactory() {
    var dcWidgetFactory = {
        getBullets: function(){
            return this.bullets;
        },
        getGoodies: function(){
            return this.goodies;

        },
        bullets:[{
            bulletText:"msg_effectivenessBullet"

        },{
            bulletText:"msg_gamesAndActivitiesBullet"

        },{
            bulletText:"msg_accessibilityBullet"
        }],
        goodies:[
            {
                goodyID: "EXCEL",
                goodyTitle: "msg_excelMathTitle",
                goodyText: "msg_excelMathText",
                goodyIcon: "fa fa-lightbulb-o",
                goodyVideoBackgroundPosition: "-1155px 0px",
                goodyColor:"#8bc34a"


            },{
                goodyID: "SCREEN",
                goodyTitle: "msg_screenTimeTitle",
                goodyText: "msg_screenTimeText",
                goodyIcon: "fa fa-laptop",
                goodyVideoBackgroundPosition: "-1155px -166px",
                goodyColor:"#00BCD4"

            }, {
                goodyID: "SUPPORT",
                goodyTitle: "msg_supportTitle",
                goodyText: "msg_supportText",
                goodyIcon: "fa fa-child",
                goodyVideoBackgroundPosition: "-1155px -332px",
                goodyColor: "#607D8B"
            },

            {
                goodyID: "PERFORMANCE",
                goodyTitle: "msg_performanceTitle",
                goodyText: "msg_performanceText",
                goodyIcon: "fa fa-line-chart",
                goodyVideoBackgroundPosition: "-1155px -498px",
                goodyColor:"#FF9800"

            },
            {
                goodyID: "AWARD",
                goodyTitle: "msg_awardWinningTitle",
                goodyText: "msg_awardWinningText",
                goodyIcon: "fa fa-trophy",
                goodyVideoBackgroundPosition: "-1155px -664px",
                goodyColor:"#E91E63"

            }]

    };

    return dcWidgetFactory;



}

factoriesModule.factory('$dcWidgetFactory', dcWidgetFactory);