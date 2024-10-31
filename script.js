let allCourses = []; // Store all courses data
let filteredCourses = []; // Store filtered data for rendering

// Load and parse CSV
Papa.parse("cc.csv", {
    download: true,
    header: true,
    complete: function(results) {
        allCourses = results.data;
        console.log("Parsed Data:", allCourses); // Debugging: Check parsed data structure
    }
});

// Populate Subcategories based on selected Area of Study
function populateSubCategories() {
    const areaOfStudy = document.getElementById("areaOfStudy").value;
    const subCategory = document.getElementById("subCategory");

    // Clear previous subcategories
    subCategory.innerHTML = '<option value="">Select Subcategory</option>';

    // Define subcategories for each area
    const subCategories = {
        "CAPA": ["Advancement of Public Action", "Conflict Resolution"],
        "Music": ["Composition", "Ethnomusicology", "Fundamentals", "History", "Instrumental Study", "Performance", "Sound Design and Recording", "Theory", "Voice"],
        "Cultural Studies and Languages": ["Chinese", "CSL", "French", "Japanese", "Spanish"],
        "Science and Mathematics": ["Biology", "Chemistry", "Computer Science", "Earth Science", "Mathematics", "Physics"],
        "Visual Arts": ["Architecture", "Art History", "Ceramics", "Design", "Digital Arts", "Drawing", "Film and Video", "Media Arts", "Painting", "Photography", "Printmaking", "Sculpture", "Visual Arts (VA)"],
        "Society Culture and Thought": ["Anthropology", "History", "Linguistics", "Media Studies", "Philosophy", "Political Economy", "Politics", "Psychology", "SCT", "Sociolinguistics", "Sociology"]
    };

    // Populate subcategories if they exist for the selected area
    if (subCategories[areaOfStudy]) {
        subCategories[areaOfStudy].forEach(sub => {
            const option = document.createElement("option");
            option.value = sub;
            option.textContent = sub;
            subCategory.appendChild(option);
        });
        subCategory.style.display = "inline-block";
    } else {
        subCategory.style.display = "none";
    }
}

// Apply Filters and Display Results
function applyFilters() {
    const areaOfStudy = document.getElementById("areaOfStudy").value.toLowerCase();
    const subCategory = document.getElementById("subCategory").value.toLowerCase();
    const allWords = document.getElementById("allWords").value.toLowerCase().split(" ");
    const exactPhrase = document.getElementById("exactPhrase").value.toLowerCase();
    const anyWords = document.getElementById("anyWords").value.toLowerCase().split(" ");
    const noneWords = document.getElementById("noneWords").value.toLowerCase().split(" ");
    
    filteredCourses = allCourses.filter(course => {
        const areas = course.areaOfStudy ? course.areaOfStudy.split(",").map(area => area.trim().toLowerCase()) : [];

        // Check if the selected area of study is in the course's areas
        const matchesAreaOfStudy = areaOfStudy ? areas.includes(areaOfStudy) : true;

        // Check if both area of study and subcategory match when subcategory is selected
        let matchesSubCategory = true;
        if (subCategory) {
            matchesSubCategory = areas.includes(areaOfStudy) && areas.includes(subCategory);
        }

        // Helper function to check if any column contains a given text
        const columnContains = (text) => {
            return Object.values(course).some(value => 
                value && value.toString().toLowerCase().includes(text)
            );
        };

        // Check if all specified words are present across any columns
        const matchesAllWords = allWords.every(word => word === "" || columnContains(word));

        // Check if the exact phrase is present across any columns
        const matchesExactPhrase = exactPhrase ? columnContains(exactPhrase) : true;

        // Check if any of the specified words are present across any columns
        const matchesAnyWords = anyWords.some(word => word === "" || columnContains(word));

        // Check if none of the specified words are present across any columns
        const matchesNoneWords = noneWords.every(word => !columnContains(word));

        // Combine all conditions
        return matchesAreaOfStudy && matchesSubCategory && matchesAllWords && matchesExactPhrase && matchesAnyWords && matchesNoneWords;
    });

    displayCourses(); // Display filtered data
}


// Display data in a table
function displayCourses() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    if (filteredCourses.length === 0) {
        resultsDiv.innerHTML = "<p>No courses match the selected filters.</p>";
        return;
    }

    const table = document.createElement("table");
    table.innerHTML = `
        <thead>
            <tr>
                <th>Title</th>
                <th>Area of Study</th>
                <th>Delivery Method</th>
                <th>Credits</th>
                <th>Level</th>
                <th>Session</th>
            </tr>
        </thead>
    `;

    const tbody = document.createElement("tbody");
    filteredCourses.forEach(course => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${course.Title || 'N/A'}</td>
            <td>${course.areaOfStudy || 'N/A'}</td>
            <td>${course.delivery_method || 'N/A'}</td>
            <td>${course.credits || 'N/A'}</td>
            <td>${course.level || 'N/A'}</td>
            <td>${course.is_this_a_full_term_course_or_a_module_or_seven_week_course || 'N/A'}</td>
        `;
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    resultsDiv.appendChild(table);
}

// Clear results when "Clear Search" button is clicked
function clearResults() {
    document.getElementById("results").innerHTML = "";
}
