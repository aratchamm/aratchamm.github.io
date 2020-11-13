  
var $logo = $('ion-ios-analytics-outline');

$logo.on('mouseenter focus', function()
{
    $logo.get(0).play();
});

$logo.on('mouseout blur', function()
{
    $logo.get(0).pause();
});