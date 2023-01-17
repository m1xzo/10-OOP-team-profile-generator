# Team Profile Generator
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](http://choosealicense.com/licenses/mit/)
  ## Description
  A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)  
  - [Screenshots](#screenshots)  
  - [Contributing](#contributing)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  ## Installation
  The application can be installed by running: 
  ```bash
  npm init
  npm i inquirer@8.2.4
  npm i jest
  ```
  ## Usage
  The application will be invoked by using the following command: 
  ```bash
  node index.js
  ```
  By successfully answering the prompts, an HTML file should be generated in folder: dist. It displays a formatted team roster based on user input. By clicking on an email address in the HTML, the default email program opens and populates the TO field of the email with the address. By clicking on the GitHub username, that GitHub profile opens in a new tab.
  ## Screenshots
  https://drive.google.com/file/d/1SyDug-OPpuouxywQWJpIA_pry3exYhVn/view
  ## Contributing
  N/A
  ## Credits
  [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4)<br/> [Jest package](https://www.npmjs.com/package/jest)
  ## Tests
  To run the tests following command:
  ```bash
  npm test
  ```
  ## Questions
  If you have any additional questions, please do not hesitate to contact me:
  | GitHub     | Email      |
  | ---------- | ---------- |
  | [@m1xzo](https://www.github.com/m1xzo) | zoumacy@gmail.com |
  ## License
  This application is released under the *[MIT License](http://choosealicense.com/licenses/mit/)*.
  <details>
  <summary>MIT License &copy 2023</summary>
  <p><blockquote>MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</blockquote></p>
  </details>
