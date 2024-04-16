
function saveData() {
    
    var data = {
        name: document.getElementById('inputField1').value,
        Email: document.getElementById('inputField2').value,
        phone: document.getElementById('inputField3').value,
        pay: document.getElementById('inputField4').value,
       track: document.getElementById('inputField5').value,
        question: document.getElementById('inputField6').value,
        
        gender: document.querySelector('input[name="gender"]:checked').value
    };
    for (var key in data) {
        if (data.hasOwnProperty(key) && data[key] === "") {
            alert("Please fill all fields before saving!");
            return;
        }
    }


    localStorage.setItem('userDataObject', JSON.stringify(data));

    alert('Data saved successfully!');
}


