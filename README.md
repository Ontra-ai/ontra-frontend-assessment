# ontra-frontend-assessment

## The challenge
We'd like you to create an Ember component for displaying document data in tabular form, and then integrate that component into an existing Ember app.

![alt text](https://github.com/ontra-ai/ontra-frontend-assessment/raw/main/mockup.png)

## Desired behavior
* You're only responsible for implementing the table. All other elements have been provided for you.
* Clicking anywhere in a table row should transition to the `document` route, passing in the appropriate `document_id` (see router.js)
* Choosing a document type from the dropdown menu should filter the table by only showing documents of that type.
* The table should be sorted by the `opened` field, descending (newest at the top)
* The `opened` field should be formatted like `Month, Day, Year`, as in `October 22, 2020`
* The `status` field should be formatted as follows:
  * `followed-up` displays as `Followed up with counterparty`
  * `document-sent` displays as `Document sent to counterparty`

## Other requirements
* The table component should be inserted into `app/templates/index.hbs`, as indicated in that file.
* The source of the tabular data should come from the array of JavaScript objects defined in `app/routes/index.js`. This data array is available via `this.model` from `app/controllers/index.js`
* You'll have to modify the existing Document Type dropdown menu so your code can tell which document type has been selected. The possible document types are:
  * `non-disclosure`
  * `consulting-agreement`
* The component should work in Chrome. Don't worry about cross-browser compatibility.
* You should create a new, reusable, Ember component that is separate from the rest of the elements on the page.
* The component should visually match what's shown in the mockup, though it doesn't have to be pixel perfect.
* Use only Ember, JavaScript and native browser APIs. Don't use any additional Ember addons or libraries.
* You're free to modify any file in this project. Don't modify the raw table data itself, though you're free to transform the data before displaying it.


## Prerequisites

You will need the following installed on your computer:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)

## Installation

* `git clone https://github.com/ontra-ai/ontra-frontend-assessment.git`
* `cd ontra-frontend-assessment`
* `npm install`
* `npm start`
* Visit the app at [http://localhost:4200](http://localhost:4200).

## How to submit your work
* Don't fork this repository on Github or submit a pull request, as that would make your solution public for others to see. Instead, just clone this repository and work locally on it.
* After you clone, create a new branch and commit all your work there.
* When you're done, use this command to generate a patch file:
```
git format-patch main --stdout > ontra-frontend-assessment.patch
```
* Then, submit the file to Greenhouse using the link you've been given.
