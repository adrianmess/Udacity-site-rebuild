# Site Rebuild: <span style="margin-left: 10px;"><IMG  SRC="https://www.udacity.com/assets/iridium/images/core/header/udacity-wordmark.svg"></span>

#### By Adrian Messado
[Adrian Messado](https://github.com/adrianmess)


# Site-Rebuild Under Construction  <span style="margin-left: 160px;" > <img width="120"  src="https://cdn.dribbble.com/users/448601/screenshots/2169052/crane_dribbble.gif"></span>
* Need to add more info and additional instructions to README
* Some features have not been implemented





## Description
For this project I am creating a copy of the Udacity website. I will be using Angular and Firebase.
  * Firebase will be used to store objects on the page like

## Objectives:

* Well-separated components
* A working database
* Live deployment

**Part 1:**
*  Build out the basic structure of application and separate the code into working components.


**Part 2:**
* Components are used to create display and behavior for templates.
* A router is used to navigate between different pages, including at least one dynamic route.
* A service shares data between multiple components.
* Application can create, edit, and delete instances of a model, persisting all changes in Firebase.
* Data is retrieved from Firebase and displayed in the application.
* Models can be filtered using a custom pipe.
* Project is in a polished, portfolio-quality state.
* Optional: Application has been deployed.


## Setup/Installation Requirements
#### Pre-requisites

### NPM & Node Installation
* Install Node.js
  * https://www.npmjs.com/get-npm

* Install TypeScript
      $ npm install -g typescript
* Install Angularcli
      $ npm install -g @angular/cli@1.6.5

### Clone
  * Clone this repo to your local machine from: https://github.com/adrianmess/site-rebuild

      $ git clone https://github.com/adrianmess/site-rebuild


Open **site-rebuild** folder from terminal.

### NPM Installation
      $ npm install

## Start Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

* The following command will start the server and automatically open the browser.      
      $ng serve --open

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Specifications
 **Site Header**
  - When you scroll down the initial header disappears, a floating header with different color scheme will appear. The floating header will reappear when you scroll back to the top.
  - **Site Header Contains:**  

| @Media width at 992px or higher | @Media width **below** 992px  
| :-------------     | :-------------
|  <b>Udacity Logo<b>  <br><br><img src=https://storage.googleapis.com/theonemaxim.com/github-site-rebuild-images/udacity-logo-large.png>  | <img src=https://storage.googleapis.com/theonemaxim.com/github-site-rebuild-images/udacity-logo-small.png> |
| <b>Links:</b> Catalog - Explore - Nanodegree - For Business Sign-in  Get Started (button)<br> | |
| <b> Header transform when scrolling down</b> <br><br> <img src="https://storage.googleapis.com/theonemaxim.com/github-site-rebuild-images/udacity-wide-header-transition.gif"> | <b>Logo</b> <br><br><img src=https://storage.googleapis.com/theonemaxim.com/github-site-rebuild-images/udacity-logo-small-transition.png> |





### Site Layout
<img height="1000" src="https://storage.googleapis.com/theonemaxim.com/github-site-rebuild-images/Site%20Rebuild%20-%20Udacity%20-%20Flow%20Chart.png">

  * A list of 6 nano degree's in grid format
    * Use Bootstrap Card with Image Cap to replicate look.


## User Stories

| Status | View | Basic Features | Component
| :-------------  
| Done | NAV | Navigate to home page | Root
| Done | Browse | White header drops down as overlay when scrolling down | Header
| Done | Browse | Interact with carousel by pressing nav buttons | Student Quotes
|

## Features



* As Admin - Generate links on bottom from Firebase

## Features - In Progress
* As Admin - Edit/Update/Delete Links from Admin page

## Future Features
* As Admin - Generate nanodegree cards from firebase with ability to Edit/Update/Delete cards from Admin page.

## Known Bugs
  * No known bugs at this time.

## Technologies Used


* Angular
* Node.js
* Firebase
* TypeScript
* Bootstrap 4


## License

* GPL

Adrian Messado © 2018
