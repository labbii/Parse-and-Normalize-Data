function submitData() {
  // Create an object 
  var dataObject = {};

  var input = document.getElementById('data-input').value;

  var lines = input.split('\n');

  // A function for telephone number and format of the number!
  function isTelephone(str) {
    return /^(\+[0-9]{1,3}[-\s]?|[0-9]{0,3})[0-9]{3,12}([-\s]?[0-9]{3,4})?$/.test(str);
  }
  // Function to check if name contains, special characters!
  function isNameSurname(str) {
    return /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\u00C0-\u017F ]+$/.test(str);
  }

  for (let i = 0; i < lines.length; i++) {
    const data = lines[i].split(" ");

    // Check if the line has two inputs
    if (data[0] && data[1] ) {

      let salutation = "";
      let name = "";
      let surname = "";
      let telephone = "";
      let email = "";

      // Check if the first input is Salutation or name! Check also for phone number and email 
      if (data[0].toLowerCase() === "mr" || data[0].toLowerCase() === "mrs" || data[0].toLowerCase() === "mr." || data[0].toLowerCase() === "mrs.") {
        if (data[2]) {
          if (isNameSurname(data[1]) && isNameSurname(data[2])) {
              salutation = data[0].trim();
              name = data[1].trim();
              surname = data[2] ? data[2].trim() : "";
          }
          
          if (isTelephone(data[3])) {
            telephone = data[3].trim();
            email = data[4] ? data[4].trim() : "";
          }else {
             email = data[3] ? data[3].trim() : "";
          }
        }      
        
     } else {
        if (isNameSurname(data[0]) && isNameSurname(data[1])) {
           name = data[0].trim();
           surname = data[1].trim();
        }
        
        if (isTelephone(data[2])) {
          telephone = data[2] ? data[2].trim() : "";
          email = data[3] ? data[3].trim() : "";
        }else{
          email = data[2] ? data[2].trim() : "";
        }       
      };

      // Filter out duplicates
      if (!(name + ' ' + surname in dataObject)) {
        
        dataObject[name + ' ' + surname] = {
          salutation: salutation,
          name: name,
          surname: surname,
          telephone: telephone,
          email: email
        };
      }
    }
  }

  var table = document.getElementById('output-table');
  table.innerHTML = '<tr><th>Salutation</th><th>Name</th><th>Surname</th><th>Telephone</th><th>Email</th></tr>';

  // add each data to the output table
  for (var key in dataObject) {
    var entry = dataObject[key];
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = entry.salutation;
    cell2.innerHTML = entry.name;
    cell3.innerHTML = entry.surname;
    cell4.innerHTML = entry.telephone;
    cell5.innerHTML = entry.email;
  }
}
