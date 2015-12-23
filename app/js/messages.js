'use strict';
require('../lib/angular-translate');
/**
 * @ngInject
 */
function Messages($translateProvider) {
    $translateProvider.translations('en', {
        //navBar
        'msg_search': "Search",
        'msg_submit': "Submit",
        //SidePanel
        'msg_menu': "Menu",
        'msg_home': "Home",
        'msg_parents': "DC View",
        //why matific?
        'msg_whyMatific': 'Why Matific Works...',
        //bullets
        'msg_effectivenessBullet': 'The most effective way to help your child learn math',
        'msg_gamesAndActivitiesBullet': "Hundreds of games and activities mapped to your child's school work",
        'msg_accessibilityBullet':'Any time, any place access, using a computer or tablet, online or offline',

        //goodies
        'msg_excelMathTitle' : "Help your child excel in math",
        'msg_excelMathText' : "Matific features hundreds of playful interactions called ”episodes”. Children enjoy playing our episodes for hours, learning math in a process of guided self-discovery.",
        'msg_screenTimeTitle' : "Turn screen time into learning time",
        'msg_screenTimeText' : "Matific episodes lay the foundations for a deep understanding of math concepts and insights, opening gates to careers in science and technology.",
        'msg_supportTitle' : "Support your child's individual learning needs",
        'msg_supportText' : "Every child learns at a different pace. From engaging after-school practice to individual intervention, Matific provides adaptive support at the right level.",
        'msg_performanceTitle' : "Strengthen your child's classroom performance",
        'msg_performanceText' : "Teachers love Matific! Help us bring Matific to your local school, boosting the learning experience with classroom management and teacher-oriented tools.",
        'msg_awardWinningTitle' : "Enjoy award winning content, recognized worldwide",
        'msg_awardWinningText' : "Matific is the winner of awards and recognition from CODiE, SXSWedu, TED, ISTE, and BETT, for offering math education at the highest levels of effectiveness and engagement."

    });

    $translateProvider.translations('heb', {
        'msg_search': "חפש",
        'msg_submit': "הגש",
        'msg_menu': "תפריט",
        'msg_home': "בית",
        'msg_parents': "הורים",


        'msg_whyMatific': "מדוע השיטה של 'עשר אצבעות' פועלת...",
        //bullets
        'msg_effectivenessBullet': "גרו את התיאבון של ילדיכם לסקרנות ולגילוי עצמאי",
        'msg_gamesAndActivitiesBullet': "מאות משחקים ופעילויות המתאימים לשיעורי הבית של הילדים שלכם",
        'msg_accessibilityBullet':"גישה בכל עת ומכל מקום, באמצעות מחשב או טאבלט, במצב מקוון ולא מקוון",

        //goodies
        'msg_excelMathTitle' : 'עזרו לילדכם להצטיין במתמטיקה',
        'msg_excelMathText' : "עשר אצבעות, מציעה מאות פעילויות משעשעות הנקראות פרקים. ילדנים נהנים לשחק בפרקים שלנו במשך שעות, וללמוד מתמטיקה בתהליך של גילוי עצמי מונחה" ,
        'msg_screenTimeTitle' : 'השעות מול המסך הופכות לשעות לימוד',

        'msg_screenTimeText' : "הפרקים של עשר אצבעות מניחים את היסודות להבנה עמוקה של תובנות ורעיונות מתמטיים, ופותחים את הדלתות אל עבר קריירה במדעים וטכנולוגיה.",
        'msg_supportTitle' : "תמכו בצרכי הלמידה האינדיבידואליים של ילדכם",
        'msg_supportText' : " כל ילד לומד בקצב שונה. מתרגול מרתק אחרי שעות הלימודים ועד חניכה פרטנית, עשר אצבעות מציעה תמיכה מותאמת ברמה הנכונה.",
        'msg_performanceTitle' : "שפרו את הישגי ילדכם בכיתה",
        'msg_performanceText' : "מורים אוהבים את עשר אצבעות! עזרו לנו להביא את עשר אצבעות אל בית הספר המקומי שלכם, ובכך לשפר את חוויית הלימוד בעזרת ניהול הכיתה וכלים המותאמים למורים.",
        'msg_awardWinningTitle' : "תיהנו מתוכן זוכה פרסים, המוכר ברחבי העולם",
        'msg_awardWinningText' : "עשר אצבעות זכתה בפרסים והכרה של CODiE‏, SXSWedu‏, TED‏, ISTE ו-BETT, על לימוד מתמטיקה ברמות האפקטיביות והעניין הגבוהות ביותר."
    });
    $translateProvider.preferredLanguage('en');
}
module.exports = Messages;
