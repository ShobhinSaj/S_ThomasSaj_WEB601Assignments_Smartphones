# Angular Application v5

Angular App based on the theme "Smartphones" developed as part of Assignment #2 for the course WEB601[JavaScript 5].

## Changes/Additions
1. New component Create-Content added to enable adding new devices to the array.
2. Create-Content component html modified to have a form to enter the new device information.
3. Create-Content component ts file modified to validate the new device obnject and emit the same to be received at Content-list component.
4. addNewDev() method added to Content-list component ts to receive the new device objct emitted by Create-Content component and add it to contentArray[Array of devices]

## Getting Started

Follow these steps to set up and run the app locally:

1. **Clone the Repository in Visual Studio Code:**
```
git clone https://github.com/ShobhinSaj/S_ThomasSaj_WEB601Assignments_Smartphones.git
```
2. Open terminal in VS Code and enter command "npm start"/"ng serve"

3. Application will Build and output will be displayed in browser window

## Author

Shobhin Thomas Saj

