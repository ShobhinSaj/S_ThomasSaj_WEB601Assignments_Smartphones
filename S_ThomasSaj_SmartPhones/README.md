# Angular Application v6

Angular App based on the theme "Smartphones" developed as part of Assignment #6 for the course WEB601[JavaScript 5].

## Changes/Additions
1. New item contentDb added to helper files directory to store the array of content.
2. content-list.component.ts and content-list.component.html modified to get content array from contentDb.
3. New service "SmartPhoneService" created under services folder to retrieve the content array from the contentDb file and return it using the obserable pattern.
4. New component called MessageComponent and service "MessageService" added to display relevant messages when content is retrieved from contentDb.
5. app.config.ts modified to inject new services created.

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

