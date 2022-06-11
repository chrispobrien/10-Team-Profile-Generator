// Helper functions

// Each person card has some common data
generateStandardPerson = (person, position, borderColor) => {
    return `
    <div class="grid grid-cols-2 border-b-4 border-solid border-${borderColor}">
        <div class="text-2xl">${person.name}</div>
        <div class="text-sm text-right align-text-bottom"><span class="oi" data-glyph="person" title="person" aria-hidden="true" style="font-size: 12px"></span> ${position}</div>
    </div>
    <div class="">Employee ID: ${person.employeeId}</div>
    <div class="">Email: <a href="mailto:${person.email}" class="text-blue-500">${person.email}</a></div>
    `
}

// Only one manager
generateManager = (manager) => {
    return `
    <section id="manager" class="lg:col-span-2 sm:col-span-1 border-solid border-slate-800 border-2 rounded-xl bg-slate-300 w-96 m-5 p-5">
        ${generateStandardPerson(manager,'Manager','slate-800')}
        <div class="">Office Phone: ${manager.getFormattedPhone()}</div>
    </section>
`
};

// One or more engineers
generateEngineer = (engineer) => {
    return `
    <div class="border-solid border-red-800 border-2 rounded-xl bg-slate-300 w-96 m-5 p-5">
        ${generateStandardPerson(engineer,'Engineer','red-800')}
        <div class="">GitHub User Name: <a href="https://github.com/${engineer.githubUserName}" target="_blank">ericlevynr</a> <span class="oi" data-glyph="external-link" title="external link" aria-hidden="true" style="font-size: 12px"></span></div>
    </div>
`
};

// One or more interns
generateIntern = (intern) => {
    return `
    <div class="border-solid border-blue-800 border-2 rounded-xl bg-slate-300 w-96 m-5 p-5">
        ${generateStandardPerson(intern,'Intern','blue-800')}
        <div class="">School: ${intern.school}</div>
    </div>
`
};

// Render the HTML
function generateHTML (team) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <!-- Tailwind CSS -->
        <script src="https://cdn.tailwindcss.com"></script>
        <!-- Open iconic -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic.min.css" integrity="sha512-LeCmts7kEi09nKc+DwGJqDV+dNQi/W8/qb0oUSsBLzTYiBwxj0KBlAow2//jV7jwEHwSCPShRN2+IWwWcn1x7Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <meta name="description" content="Team Profile">
        <title>Team Profile</title>
    </head>
    <body class="bg-white text-black text-lg">
    <header class="bg-red-500 px-4 py-4 mr-0 w-screen">
        <section id="title" class="text-xl text-white font-bold">${team.name} Team Profile</section>
    </header>

    <main class="m-5 grid lg:grid-cols-2 sm:grid-cols-1">
        ${generateManager(team.manager)}

        <section id="engineers">
            <div class="text-2xl ml-10 text-red-800 font-bold">Engineers</div>
            ${team.engineers.reduce((engineersEl,engineer) => engineersEl+generateEngineer(engineer),'')}
        </section>

        <section id="interns">
            <div class="text-2xl ml-10 text-blue-800 font-bold">Interns</div>
            ${team.interns.reduce((internsEl, intern) => internsEl+generateIntern(intern),'')}
        </section>

    </main>
    </body>
        
</html>
    `
};

module.exports = generateHTML;