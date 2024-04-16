//   // Function to save data to local storage
//   function saveData() {
//     // Retrieve old data from local storage for all inputs
//     var oldData1 = localStorage.getItem('inputData1');
//     var oldData2 = localStorage.getItem('inputData2');
//     var oldData3 = localStorage.getItem('inputData3');
//     var oldData4 = localStorage.getItem('inputData4');
//     var oldData5 = localStorage.getItem('inputData5');
//     var oldData6 = localStorage.getItem('inputData6');
//     // var oldData7 = localStorage.getItem('inputData7');
    
//     // Get the new data from the inputs
//     var newData1 = document.getElementById('inputField1').value;
//     var newData2 = document.getElementById('inputField2').value;
//     var newData3 = document.getElementById('inputField3').value;
//     var newData4 = document.getElementById('inputField4').value;
//     var newData5 = document.getElementById('inputField5').value;
//     var newData6 = document.getElementById('inputField6').value;
//     // var newData7 = document.getElementById('inputField7').value;

//     // Combine old data with new data, separated by a delimiter
//     var combinedData1 = (oldData1 ? oldData1 + ' | ' : '') + newData1;
//     var combinedData2 = (oldData2 ? oldData2 + ' | ' : '') + newData2;
//     var combinedData3 = (oldData3 ? oldData3 + ' | ' : '') + newData3;
//     var combinedData4 = (oldData4 ? oldData4 + ' | ' : '') + newData4;
//     var combinedData5 = (oldData5 ? oldData5 + ' | ' : '') + newData5;
//     var combinedData6 = (oldData6 ? oldData6 + ' | ' : '') + newData6;
//     // var combinedData7 = (oldData7 ? oldData7 + '|' : '') + newData7;

//     // Store combined data in local storage
//     localStorage.setItem('inputData1', combinedData1);
//     localStorage.setItem('inputData2', combinedData2);
//     localStorage.setItem('inputData3', combinedData3);
//     localStorage.setItem('inputData4', combinedData4);
//     localStorage.setItem('inputData5', combinedData5);
//     localStorage.setItem('inputData6', combinedData6);
//     // localStorage.setItem('inputData7', combinedData7);

//     // Get the selected option
//     var selectedOption = document.querySelector('input[name="gender"]:checked');
//     if (selectedOption) {
//         // Store the selected option value in local storage
//         localStorage.setItem('selectedOption', selectedOption.value);
//     }

//     alert('Data saved successfully!');
// }

// // Check if data exists in local storage on page load
// window.onload = function() {
//     // Populate input fields with stored data
//     document.getElementById('inputField1').value = localStorage.getItem('inputData1') || ' ';
//     document.getElementById('inputField2').value = localStorage.getItem('inputData2') || ' ';
//     document.getElementById('inputField3').value = localStorage.getItem('inputData3') || ' ';
//     document.getElementById('inputField4').value = localStorage.getItem('inputData4') || ' ';
//     document.getElementById('inputField5').value = localStorage.getItem('inputData5') || ' ';
//     document.getElementById('inputField6').value = localStorage.getItem('inputData6') || ' ';
//     document.getElementById('inputField7').value = localStorage.getItem('inputData7') || ' ';

//     // Select radio button based on stored preference
//     var storedOption = localStorage.getItem('selectedOption');
//     if (storedOption !== null) {
//         document.querySelector('input[value="' + storedOption + '"]').checked = true;
//     }
// };
function saveData() {
    // Get the input values
    var data = {
        name: document.getElementById('inputField1').value,
        Email: document.getElementById('inputField2').value,
        phone: document.getElementById('inputField3').value,
        pay: document.getElementById('inputField4').value,
       track: document.getElementById('inputField5').value,
        language: document.getElementById('inputField6').value,
        // input7: document.getElementById('inputField7').value,
        gender: document.querySelector('input[name="gender"]:checked').value
    };

    // Convert the object to a JSON string and store it in local storage
    localStorage.setItem('userDataObject', JSON.stringify(data));

    alert('Data saved successfully!');
}