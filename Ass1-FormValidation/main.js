$(document).ready(function () {
    $("small").hide();
    $("#submit").click(function () {
        $("small").hide();
        validateFName();
        validateLName();
        validateEmail();
        validateGender();
        validateCourse();
        console.log(fNameError);
        console.log(lNameError);
        console.log(emailError);
        console.log(genderError);
        console.log(courseError);
        if ((fNameError == true) || (lNameError == true) || (emailError == true) || (genderError == true) || (courseError == true)) {
            return false;

        } else {
            alert("Form submitted Successfully");
            return true;
        }

    })

    function validateFName() {
        fNameError = false;
        let FName = $("#firstname").val();
        if (FName == undefined || FName.length == "") {
            $("#fname_err").show();
            fNameError = true;
        }
    }

    function validateLName() {
        lNameError = false;
        let LName = $("#lastname").val();
        if (LName == undefined || LName.length == "") {
            $("#lname_err").show();
            lNameError = true;
        }

    }


    function validateEmail() {
        emailError = false;
        let email = $("#email").val();
        if (email == undefined || email.length == "") {
            $("#email_err").show();
            emailError = true;
        }
    }


    function validateGender() {
        genderError = false;
        var gender = $("#gender").val();
        if (gender == "") {
            $("#gender_err").show();
            genderError = true;
        }
    }

    function validateCourse() {
        courseError = false;
        var check = $("input[type='checkbox']:checked");
        console.log(check);
        if (check.length == 0) {
            $("#course_err").show();
            courseError = true;
        }
    }

})