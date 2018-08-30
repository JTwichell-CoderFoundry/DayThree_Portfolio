$(document).ready(function () {

    //This line of code executes as soon as the document is ready and hides the div tag holding our pre tag
    $("#code").hide();

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
        //When the button is clicked I need to do three things...
        //Thing 1: Acquire the user data
        var num1 = $("#num1").val();
        var num2 = $("#num2").val();
        var num3 = $("#num3").val();
        var num4 = $("#num4").val();
        var num5 = $("#num5").val();

        if (num1 === "" || num2 === "" || num3 === "" || num4 === "" || num5 === "") {
            alert("Hey you didnt give me all the input I asked for");
            return;
        }
        else {
            //Thing 2: Perform some set of calculations on the user data
            var sum = Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5);
            var product = +num1 * +num2 * +num3 * +num4 * +num5;
            var mean = sum / 5;
            var min = Math.min(num1, num2, num3, num4, num5);
            var max = Math.max(num1, num2, num3, num4, num5);

            //Thing 3: Write some results back to the screen for the user to see
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

});