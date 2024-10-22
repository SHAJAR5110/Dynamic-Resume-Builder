var resumeDisplay = document.getElementsByClassName("resumeDisplay")[0];
var form = document.getElementById("form");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    resumeDisplay.style.display = 'block';
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('phone').value;
    var gender = document.getElementById('gender').value;
    var edu = document.getElementById('edu').value;
    var skills = document.getElementById('skills').value;
    var exp = document.getElementById('exp').value;
    var pictureInput = document.getElementById('picture');
    var pictureFile = pictureInput.files ? pictureInput.files[0] : null;
    var imageUrl = '';
    var downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.style.display = 'block';
    var resumeDisplayElement = "\n        <h1><b>".concat(fname, "'s Resume</b></h1>\n        <br>\n        <h2>Information</h2>\n        <p><b>First Name: </b>").concat(fname, "</p>\n        <p><b>Last Name: </b>").concat(lname, "</p>\n        <p><b>Email: </b>").concat(email, "</p>\n        <p><b>Contact Number: </b>").concat(contact, "</p>\n        <p><b>Gender: </b>").concat(gender, "</p>\n        <p><b>Education: </b>").concat(edu, "</p>\n        <p><b>Skills: </b>").concat(skills, "</p>\n        <p><b>Experience: </b>").concat(exp, "</p>\n    ");
    resumeDisplay.innerHTML = resumeDisplayElement;
    if (pictureFile) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            imageUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            var imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.style.maxWidth = "100px";
            imgElement.style.display = "block";
            var imageContainer = document.createElement('div');
            imageContainer.style.textAlign = "right";
            imageContainer.appendChild(imgElement);
            resumeDisplay.appendChild(imageContainer);
        };
        reader.readAsDataURL(pictureFile);
    }
    downloadBtn.addEventListener('click', function () {
        var pdfContent = "\n            <h1>".concat(fname, "'s Resume</h1>\n            <h2>Information</h2>\n            <img src=\"").concat(imageUrl, "\" style=\"width: 200px; height:200px;\" />\n            <p><b>First Name: </b>").concat(fname, "</p>\n            <p><b>Last Name: </b>").concat(lname, "</p>\n            <p><b>Email: </b>").concat(email, "</p>\n            <p><b>Contact Number: </b>").concat(contact, "</p>\n            <p><b>Gender: </b>").concat(gender, "</p>\n            <p><b>Education: </b>").concat(edu, "</p>\n            <p><b>Skills: </b>").concat(skills, "</p>\n            <p><b>Experience: </b>").concat(exp, "</p>\n            \n        ");
        var pdfWindow = window.open('', '_blank');
        pdfWindow === null || pdfWindow === void 0 ? void 0 : pdfWindow.document.write('<html><head><title>Resume</title></head><body>');
        pdfWindow === null || pdfWindow === void 0 ? void 0 : pdfWindow.document.write(pdfContent);
        pdfWindow === null || pdfWindow === void 0 ? void 0 : pdfWindow.document.write('</body></html>');
        pdfWindow === null || pdfWindow === void 0 ? void 0 : pdfWindow.document.close();
        pdfWindow === null || pdfWindow === void 0 ? void 0 : pdfWindow.print();
    });
});
