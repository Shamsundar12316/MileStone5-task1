var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get references to form elements using their IDs
    var firstnameElement = document.getElementById("firtsname");
    var emailElement = document.getElementById("email");
    var mobilphonenumberElement = document.getElementById("mobilephonenumber");
    var addressElement = document.getElementById("address");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    //** 
    var usernameElement = document.getElementById("username");
    if (firstnameElement &&
        emailElement &&
        mobilphonenumberElement &&
        educationElement &&
        experienceElement &&
        skillsElement &&
        //**
        usernameElement) {
        var firstname = firstnameElement.value;
        var email = emailElement.value;
        var mobilephonenumber = mobilphonenumberElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //** 
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        //create resume output
        var resumeOutput = "\n    <h2>Resume</h2>\n    <p><strong> First Name:</strong> ".concat(firstname, "</p> \n    <p><strong>Email:</strong> ").concat(email, "</p>\n     <p><strong> Mobile Phone Number:</strong> ").concat(mobilephonenumber, " </p>\n     <p><strong>Address:</strong> ").concat(address, " </p>\n     <h3>Education</h3>\n     <p>").concat(education, "</p>\n    <h3>Experience</h3>\n     <p>").concat(experience, "</p>\n       <h3>Skills</h3>\n     <p>").concat(skills, "</p>\n\n    ");
        //** 
        var downloadLink = document.createElement('a');
        downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Your 2024 Resume';
        // Resume output
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            //** 
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = 'block';
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
