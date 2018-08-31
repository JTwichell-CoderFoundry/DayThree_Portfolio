$(document).ready(function () {

    //This line of code executes as soon as the document is ready and hides the div tag holding our pre tag
    $("#code").hide();

    //$("#btnCalc").hover(function () {
    //    $(this).text("Hovering!");
    //},
    //    function () {
    //        $(this).text("Calculate");
    //});

    $("#btnShowCode").click(function () {        
        $("#code").toggle();        
        //if ($(this).text().indexOf("Show") >= 0) {
        //    $("#btnShowCode").html("Hide Code <span class='dropup'><span class='caret'></span></span>");
        //}
        //else {
        //    $("#btnShowCode").html("Show Code <span class='caret'></span>");
        //}
        if ($(this).text().indexOf("Show") >= 0) {
        $("#btnShowCode").html("Hide Code <i class='fa fa-caret-up' />");
        }
        else {
            $("#btnShowCode").html("Show Code <i class='fa fa-caret-down' />");
        }
    });

    //First thing I need to do is handle a click event for the btn1 button
    $("#btnCalc").click(function () {       
        var num1 = $("#num1").val();
        var num2 = $("#num2").val();
        var num3 = $("#num3").val();
        var num4 = $("#num4").val();
        var num5 = $("#num5").val();

        if (num1 === "" || num2 === "" || num3 === "" || num4 === "" || num5 === "") {
            swal("Oops", "Hey you didnt give me all the input I asked for!", "error");
            //alert("Hey you didnt give me all the input I asked for");
            return;
        }
        else {           
            var sum = Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5);
            var product = +num1 * +num2 * +num3 * +num4 * +num5;
            var mean = sum / 5;
            var min = Math.min(num1, num2, num3, num4, num5);
            var max = Math.max(num1, num2, num3, num4, num5);
          
            $("#output1").text("The sum of your numbers is " + sum);
            $("#output2").html("The <b>product</b> of your numbers is <b>" + product + "</b>");
            $("#output3").html("The <b>mean</b> of your numbers is <b>" + mean + "</b>");
            $("#output4").html("The <b>minimum</b> number entered is <b>" + min + "</b>");
            $("#output5").html("The <b>maximum</b> number entered is <b>" + max + "</b>");
        }

    });

    $("#btnClear").click(function () {
        $("#num1, #num2, #num3, #num4, #num5").val("");
        $("#output1, #output2, #output3, #output4, #output5").html("");
        $("#word1").val("");
        $("#palout").html("");
        $("#code").hide();
    });

    $("#btnPalindrome").click(function () {
        //Step 1: Gather user input
        var word = $("#word1").val();

        //Step 2: Do something with the input
        //What we need to do is reverse the original word
        //This can be achieved in a few different ways

        //Approach #1: Decrementing For Loop
        var revWord = "";
        for (var loop = word.length - 1; loop >= 0; loop--) {
            revWord += word.substr(loop, 1);
        }

        //Approach #2: Working with an Array (1 liner)
        //revword = word.split("").reverse().join("");

        //Step 3: Write output to the screen
        if (word.toUpperCase() === revWord.toUpperCase()) {
            $("#palout").text(word + " is a palindrome");
        }
        else {
            $("#palout").text(word + " is not a palindrome");
        }
    });

    $("#toggleIcon").click(function () {

        if ($("#toggleSpan").text().indexOf("On") >= 0) {
            $("#toggleSpan").text("Toggle Off");
            $("#toggleIcon").html("<i class='fa fa-toggle-on'></i>");
        }
        else {
            $("#toggleSpan").text("Toggle On");
            $("#toggleIcon").html("<i class='fa fa-toggle-off'></i>");
        }   
        $("#code").toggle();   
    });


    //Possible algo for Fizz-Buzz
    $("#btnFizzBuzz").click(function () {
        //Step 1: Acquire the user input
        var fizzNum = Number($("#fizz").val()); //3
        var buzzNum = Number($("#buzz").val()); //5

        //Step 2: Do something with it
        //declare an empty array for adding the output for each iteration of the loop
        var outputArray = [];

        //Kick off my for loop from 1 to 100
        for (var loop = 1; loop <= 100; loop++) {
            //Check if the loop % fizzNum AND buzzNUm = 0            
            if (loop % fizzNum === 0 && loop % buzzNum === 0) {
                outputArray.push("<span class='basicFB boldRed'>FizzBuzz</span>");
            }
            //Check if the loop mod fizzNum = 0           
            else if (loop % fizzNum === 0) {
                outputArray.push("<span class='basicFB boldBlue'>Fizz</span>");
            }
            //Check if the loop mod buzzNum = 0
            else if (loop % buzzNum === 0) {
                outputArray.push("<span class='basicFB boldGreen'>Buzz</span>");
            }
            else {
                outputArray.push("<span class='basicFB'>" + loop + "</span>");
            }
        }

        //Step 3: Output to the screen
        $("#fizzBuzzOut").html(outputArray.join(", "));

    });





});