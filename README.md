## Introduction

The Course Filter Application was developed to address a critical need among students at Bennington College, where searching for courses to match specific interests, schedules, and academic requirements can be time-consuming. Recognizing the challenges students face in sifting through hundreds of course options,me and my friend Abraar Arpon set out to create a streamlined solution that allows students to filter and search courses based on multiple parameters.

The project concept was initiated by Tanvir Anjum who had feedbacks from students and academic advisors, and identified a gap in quickly locating courses that met personalized criteria. Our goal was to reduce the time students spend on course selection, and we achieved this with a powerful filtering system that will serve over 900 students effectively.


# **Course Filter Application**

A web-based tool designed to help users filter and search for courses based on multiple parameters. This project leverages HTML, CSS, JavaScript, and PapaParse to load course data from a CSV file and apply complex search filters.

## **Features**

* **Keyword Search**: Find courses using exact words, phrases, and optional exclusion filters.  
* **Filter Options**:  
  * **Delivery Method**: Hybrid, In-Person, Remote.  
  * **Area of Study**: Options include CAPA, Music, Visual Arts, etc.  
  * **Subcategory**: Dynamically populated based on selected Area of Study.  
  * **Credits**: Select course credits ranging from 1-6.  
  * **Course Level**: Options include 2000 and 4000 level.  
  * **Session**: Select from different session modules (e.g., 1st 7 Week, 2nd Module Block).  
* **Display Results**: Filtered courses are displayed in a scrollable table format.  
* **Responsive Design**: The layout adjusts to various screen sizes.

  ## **Setup**

1. **Clone the repository**:  
   * Run the command:  
     * `git clone <repository-url>`  
     * `cd <repository-directory>`  
* **Install Dependencies**: This project uses PapaParse to parse CSV data. Ensure you have internet access, as it’s loaded via CDN in the `index.html` file:  
  html  
  Copy code  
  `<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>`  
2.   
3. **Run the Project**:  
   * Open `index.html` in a web browser.  
   * The application will automatically load the `cc.csv` file and populate data for filtering.

   ## **Usage**

   ### **Searching Courses**

1. **Keyword Search**: Enter keywords in the respective fields (All Words, Exact Phrase, Any Words, None of These Words).  
2. **Select Filters**:  
   * **Area of Study**: Choose an area of study from the dropdown. This will dynamically populate subcategories.  
   * **Additional Filters**: Select delivery method, credits, level, and session.  
3. **Action Buttons**:  
   * **Search Courses**: Applies the filters and displays matching courses in a table.  
   * **Clear Search**: Clears all selected filters and results.

   ## **Code Overview**

   ### **HTML Structure (`index.html`)**

* Contains the main structure for the application, including form fields, dropdowns, and a container for results.  
* Uses PapaParse to load the CSV file (`cc.csv`) and send data to the JavaScript function for filtering.

  ### **CSS Styling (`styles.css`)**

* Provides styling for the application, focusing on a clean and accessible layout.  
* Includes responsive design considerations, styling for action buttons, and scrollable results container.

  ### **JavaScript Functionality (`script.js`)**

* **Loading Data**: Parses `cc.csv` file and stores data in an array.  
* **Filtering Data**: Functions to filter courses based on the form inputs and dropdown selections.  
  * `applyFilters()` applies the selected filters to the course data.  
  * `displayCourses()` renders the filtered results in a table format.  
  * `clearResults()` resets all filters and clears displayed results.  
* **Subcategory Population**: Dynamically updates subcategory options based on the selected Area of Study.

  ### **CSV File (`cc.csv`)**

* The CSV file contains course data with fields like `Title`, `facultyname`, `courselevel`, `delivery_method`, `credits`, and others, which are used in filtering and display.

  ## **Future Enhancements**

* **Improved Filtering Logic**: Additional logic to handle more complex keyword combinations.  
* **Additional Fields**: Adding more fields to the display table for better user insights.  
* **Enhanced Responsiveness**: Optimizing the layout for smaller screens and mobile devices.  
* 


