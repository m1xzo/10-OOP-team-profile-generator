// Generate cards for member profiles
function generateTeam(team) {
    if (!team.length) {
        return "";
    }

    let result = "";
    team.forEach((employee) => {
        result += renderCard(employee);
    });

    return result;
}

// Display details for each card
function renderCard(employee) {

  // define variables
  let icon;
  let info;

  // Manager
  if (employee.getRole() === 'Manager') {
    icon = 'fa-mug-hot';
    info = `<span class="font-weight-bold">Office number: </span>
    ${employee.officeNumber}`;
  }
  // Engineer
  if (employee.getRole() === 'Engineer') {
    icon = 'fa-glasses';
    info = `<span class="font-weight-bold">GitHub: </span>
    <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a>`;
  }
  // Intern
  if (employee.getRole() === 'Intern') {
    icon = 'fa-user-graduate';
    info = `<span class="font-weight-bold">School: </span>
    ${employee.school}`;
  }

  // HTML format for card content
  let content = `<div class="card m-3 shadow">
    <div class="card-header bg-primary text-light">
      <p class="h4">${employee.name}</p>
      <p class="h5">
        <i class="fas ${icon} mr-1"></i>
        ${employee.getRole()}
      </p>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group">
        <li class="list-group-item">
          <span class="font-weight-bold">ID: </span>
          ${employee.id}
        </li>
        <li class="list-group-item">
          <span class="font-weight-bold">Email: </span>
          <a href="mailto:${employee.email}">${employee.email}</a>
        </li>
        <li class="list-group-item">
          ${info}
        </li>
      </ul>
    </div>
  </div>`;

  return content;
}

// Generate HTML
function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link rel="stylesheet" href="../dist/style.css" />
      <title>Team Profile Generator</title>
    </head>
    
    <body>
      <header class="p-4 mb-3 text-center">
        <h2 class="text-light">My Team</h2>
      </header>
      <div class="p-3 d-flex flex-wrap flex-md-row flex-column justify-content-center align-items-center">
        ${generateTeam(data)}
      </div>
     
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="./assets/js/script.js"></script>
    </body>
    </html>`;
  }
  
  module.exports = generateHTML;