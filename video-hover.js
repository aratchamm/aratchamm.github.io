var $wendy = $('.wendy');

$wendy.on('mouseenter focus', function()
{
    $wendy.get(0).play();
});

$wendy.on('mouseout blur', function()
{
    $wendy.get(0).pause();
});

var $yeri = $('.yeri');

$yeri.on('mouseenter focus', function()
{
    $yeri.get(0).play();
});

$yeri.on('mouseout blur', function()
{
    $yeri.get(0).pause();
});

var $irene = $('.irene');

$irene.on('mouseenter focus', function()
{
    $irene.get(0).play();
});

$irene.on('mouseout blur', function()
{
    $irene.get(0).pause();
});

var $bt = $('.butterfly');

$bt.on('mouseenter focus', function()
{
    $bt.get(0).play();
});

$bt.on('mouseout blur', function()
{
    $bt.get(0).pause();
});