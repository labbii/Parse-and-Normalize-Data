# KytoDeveloperTask

# Overview
This task involves creating a web page to parse and normalize personal data using HTML, CSS, and JavaScript. Each person's data is represented on a single line and consists of the following fields in the following order:

    •	Salutation (optional)
    •	Name (required)
    •	Surname (required) 
    •	Telephone (optional)
    •	Email (optional)
The normalized data will be displayed as an output in a table.

# Data Validation
  •	The Name and Surname fields are required and must be present in each line of data. If either of these fields is empty, the data is considered invalid.
  •	The Telephone field is optional, but if present, it must be in a valid format. Valid formats for telephone numbers include:
    o	+4915712345689
    o	4915712345689
    o	+1-98712345689
  •	The Name and Surname fields may contain special characters.
  •	There cannot be duplicated data within the dataset.

The line is split into array with ‘space’ for example, the input should be like:

  Mr. Max Mustermann +4915712345689 max@example.com
  John Doe john@example.com
  Mrs Alice Wonderland +1-98712345689
  Harry Potter 
