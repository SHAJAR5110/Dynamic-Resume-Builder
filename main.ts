const resumeDisplay = document.getElementsByClassName("resumeDisplay")[0] as HTMLElement;
const form = document.getElementById("form") as HTMLFormElement;

form.addEventListener('submit', function(event: Event) {
    event.preventDefault();
    resumeDisplay.style.display='block';
    const fname = (document.getElementById('fname') as HTMLInputElement).value;
    const lname = (document.getElementById('lname') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('phone') as HTMLInputElement).value;
    const gender = (document.getElementById('gender') as HTMLSelectElement).value;
    const edu = (document.getElementById('edu') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const exp = (document.getElementById('exp') as HTMLInputElement).value;
    const pictureInput = document.getElementById('picture') as HTMLInputElement;
    const pictureFile = pictureInput.files ? pictureInput.files[0] : null;
    let imageUrl = '';

    const downloadBtn = document.getElementById('downloadBtn') as HTMLElement;
    downloadBtn.style.display = 'block';

    const resumeDisplayElement = `
        <h1><b>${fname}'s Resume</b></h1>
        <br>
        <h2>Information</h2>
        <p><b>First Name: </b>${fname}</p>
        <p><b>Last Name: </b>${lname}</p>
        <p><b>Email: </b>${email}</p>
        <p><b>Contact Number: </b>${contact}</p>
        <p><b>Gender: </b>${gender}</p>
        <p><b>Education: </b>${edu}</p>
        <p><b>Skills: </b>${skills}</p>
        <p><b>Experience: </b>${exp}</p>
    `;

    resumeDisplay.innerHTML = resumeDisplayElement;

    if (pictureFile) {
        const reader = new FileReader();

        reader.onload = function(e) {
            imageUrl = e.target?.result as string;
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.style.maxWidth = "100px";
            imgElement.style.display = "block";

            const imageContainer = document.createElement('div');
            imageContainer.style.textAlign = "right";
            imageContainer.appendChild(imgElement);
            resumeDisplay.appendChild(imageContainer);
        };

        reader.readAsDataURL(pictureFile);
    }

    downloadBtn.addEventListener('click', function() {
        const pdfContent = `
            <h1>${fname}'s Resume</h1>
            <h2>Information</h2>
            <img src="${imageUrl}" style="width: 200px; height:200px;" />
            <p><b>First Name: </b>${fname}</p>
            <p><b>Last Name: </b>${lname}</p>
            <p><b>Email: </b>${email}</p>
            <p><b>Contact Number: </b>${contact}</p>
            <p><b>Gender: </b>${gender}</p>
            <p><b>Education: </b>${edu}</p>
            <p><b>Skills: </b>${skills}</p>
            <p><b>Experience: </b>${exp}</p>
            
        `;

        const pdfWindow = window.open('', '_blank');
        pdfWindow?.document.write('<html><head><title>Resume</title></head><body>');
        pdfWindow?.document.write(pdfContent);
        pdfWindow?.document.write('</body></html>');
        pdfWindow?.document.close();
        pdfWindow?.print();
    });
});
