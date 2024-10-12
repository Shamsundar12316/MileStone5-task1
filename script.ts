
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

  // Get references to form elements using their IDs

    const firstnameElement = document.getElementById("firtsname") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const mobilphonenumberElement = document.getElementById("mobilephonenumber") as HTMLInputElement;
    const addressElement = document.getElementById("address") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLTextAreaElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLTextAreaElement;
    const skillsElement = document.getElementById(
      "skills"
    ) as HTMLTextAreaElement;

    //** 
    const usernameElement = document.getElementById(
      "username"
    ) as HTMLInputElement;



   if (
    
    firstnameElement && 
    emailElement &&
     mobilphonenumberElement && 
     educationElement && 
     experienceElement && 
     skillsElement &&

     //**
     usernameElement


     ){

    const firstname = firstnameElement.value;
    const email = emailElement.value;
    const mobilephonenumber = mobilphonenumberElement.value;
    const address = addressElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;

    //** 
    const username = usernameElement.value;
    const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`


    //create resume output
    const resumeOutput = `
    <h2>Resume</h2>
    <p><strong> First Name:</strong> ${firstname}</p> 
    <p><strong>Email:</strong> ${email}</p>
     <p><strong> Mobile Phone Number:</strong> ${mobilephonenumber} </p>
     <p><strong>Address:</strong> ${address} </p>
     <h3>Education</h3>
     <p>${education}</p>
    <h3>Experience</h3>
     <p>${experience}</p>
       <h3>Skills</h3>
     <p>${skills}</p>

    `;

    //** 
    const downloadLink = document.createElement('a')
    downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput)
    downloadLink.download = uniquePath;
    downloadLink.textContent = 'Download Your 2024 Resume';



    // Resume output
    const resumeOutputElement = document.getElementById('resumeOutput')
    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput

      //** 
       resumeOutputElement.appendChild(downloadLink)


        resumeOutputElement.style.display = 'block';
        
   }

 } else {
    console.error('one or more output elements are missing');
 }

});







          
      
