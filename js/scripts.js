// Predefined data for the tables
const tableData = {
    1: [
        { Module: "Computer Architecture", Grade: "B+" },
        { Module: "Critical Skills Development", Grade: "B" },
        { Module: "Business & Information Systems", Grade: "A" },
        { Module: "Discrete Mathematics 1", Grade: "B" },
        { Module: "Software Development 1", Grade: "B+" },
        { Module: "Visual Design & User Experience", Grade: "A" },
        { Module: "Social Media Communications", Grade: "A" },
        { Module: "Database Fundamentals", Grade: "B" },
        { Module: "Operating Systems Fundamentals", Grade: "B" },
        { Module: "Statistics", Grade: "B+" },
        { Module: "Software Development 2", Grade: "B" },
        { Module: "Systems Analysis", Grade: "B+" }
    ],
    2: [
        { Module: "Advanced Database Technologies", Grade: "B+" },
        { Module: "Discrete Mathematics 2", Grade: "B+" },
        { Module: "Network Fundamentals", Grade: "B" },
        { Module: "Software Quality Assurance", Grade: "A" },
        { Module: "Software Development 3", Grade: "A" },
        { Module: "Client-Side Web Development", Grade: "B+" },
        { Module: "Data Administration", Grade: "C" },
        { Module: "Management Science", Grade: "C" },
        { Module: "Routing & Switching", Grade: "B" },
        { Module: "Information Security", Grade: "D" },
        { Module: "Software Development 4", Grade: "D" },
        { Module: "Project", Grade: "B" }
    ],
    3: [
        { Module: "Server-Side Web Development", Grade: "B-" },
        { Module: "Operating Systems", Grade: "C" },
        { Module: "Cloud Services & Computing", Grade: "C+" },
        { Module: "Big Data Technologies", Grade: "B" },
        { Module: "Data Structures & Algorithms", Grade: "B" },
        { Module: "Data Analysis", Grade: "B" },
        { Module: "Work Placement", Grade: "Achieved" }
    ]
};

        // Function to create and display a table
function createTable(data) {
    const table = document.createElement('table');

    // Create the header row
    const headerRow = document.createElement('tr');
    const headers = Object.keys(data[0]); // Extract keys from the first object
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create the data rows
    data.forEach(row => {
        const tr = document.createElement('tr');
        headers.forEach(header => {
            const td = document.createElement('td');
            td.textContent = row[header]; // Access value by key
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });

    return table;
}

// Function to switch between tables
function switchTable(tableKey) {
    const container = document.getElementById('table-container');
    container.innerHTML = ''; // Clear existing table

    const table = createTable(tableData[tableKey]);
    container.appendChild(table);
}

// Show the first table by default
switchTable(1);

const differentTitles = [
    "🎁",
    "🪂",
    "🍄",
    "🛺",
    "🐧",
    "🪅",
    "🥇",
    "🦩",
    "🍋‍🟩",
];

// Select a random title from the array
const selectedTitle = differentTitles[Math.floor(Math.random() * differentTitles.length)];

// Set the page title dynamically
document.title = selectedTitle;

// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when the user scrolls down 100px from the top of the document
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
