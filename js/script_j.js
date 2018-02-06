$(document).ready(function () {
}); 

/////    $(window).bind('beforeunload', function () {
//        return '>>>>>Before You Go<<<<<<<< \n Your custom message go here';
//    });

//$(window).on("beforeunload", function () {
//    alert("you leaving this page");
//    console.log("you leaving this page");
//});

////$(window).on("unload", function (e) {
////    alert("call");
//});

function ProcessBox1()
{
    var ranNum;
    do {
        ranNum = Math.floor((Math.random() * 10) + 1);
    } while (ranNum == 0 || ranNum >= 4)

    if (ranNum == 1) {
        $('#one').addClass('one');
    }
    else if (ranNum == 2) {
        $('#one').addClass('two');
    }

    else if (ranNum == 3) {
        $('#one').addClass('three');
    }
    return ranNum;
}

function ProcessBox2()
{
    do {
        ranNum2 = Math.floor((Math.random() * 10) + 1);
    } while (ranNum2 == 0 || ranNum2 >= 4)

    if (ranNum2 == 1) {
        $('#second').addClass('one');
    }
    else if (ranNum2 == 2) {
        $('#second').addClass('two');
    }

    else if (ranNum2 == 3) {
        $('#second').addClass('three');
    }
    return ranNum2;
}

function ProcessBox3()
{
    do {
        ranNum3 = Math.floor((Math.random() * 10) + 1);
    } while (ranNum3 == 0 || ranNum3 >= 4)
    if (ranNum3 === 1) {
        $('#third').addClass('one');
    }
    else if (ranNum3 === 2) {
        $('#third').addClass('two');
    }
    else if (ranNum3 === 3) {
        $('#third').addClass('three');
    }
    return ranNum3;
}

function Congrats(ranNum, ranNum2, ranNum3)
{
    if (ranNum === 1 && ranNum2 === 1 && ranNum3 === 1) {
        document.getElementById('msg').innerHTML = 'Congrats! You Won!';
    }
    else if (ranNum === 2 && ranNum2 === 2 & ranNum3 === 2) {
    document.getElementById('msg').innerHTML = "Congrats! You Won!";
    }
   else if (ranNum === 3 && ranNum2 === 3 && ranNum3 === 3) {
        document.getElementById('msg').innerHTML = "Congrats! You Won!";
   }
    else {
        document.getElementById('msg').innerHTML = "Sorry! Try Again!";
    }
}

$(function Button()
{
    $('#spin').mouseover(function () {
        $('#spin').css({ 'color':'white', 'background-color': 'darkgreen', 'font-size': '40px' });
        $('#spin').html('Spin Now');
        $('#spin').mouseout(function () {
            $(this).css({ 'color':'black','background-color': 'lightgreen', 'font-size': '32px' });
       
        $('#spin').html('Spin Again');
     });
    });
});

$(function ()
{
    $("#goodbye").hide();
});

$(function ()
{
    $(".btn1").click(function () {
        //window.delay(5000).close();
       setTimeout(function () {window.close() }, 3000);
        $("#fadeout").fadeOut(2000);
        $("#goodbye").fadeIn(2000);
        //setTimeout(function () { alert("Goodbye!"); }, 2000);
    }); 
});

function startProcess()
{
    var ranNum = ProcessBox1();
    var ranNum2 = ProcessBox2();
    var ranNum3 = ProcessBox3();
    Congrats(ranNum, ranNum2, ranNum3);
}
startProcess();