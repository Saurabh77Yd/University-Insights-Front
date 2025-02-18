# University-Insights-Front

#Vercel_APP => https://university-insights-front.vercel.app/

#Design Approach

The design of the webpage follows a clean and minimalistic approach with an emphasis on usability and accessibility. Tailwind CSS was used to ensure an efficient and visually appealing layout. The use of white space, clear typography, and structured sections makes navigation effortless for users.

Key Design Features:

Hero Section:

A welcoming banner with a bold heading, a short description, and a Call-to-Action (CTA) button.

The CTA button encourages users to start the application process immediately by scrolling to the lead form.

Why Study MBBS Abroad Section:

A concise explanation highlighting key benefits like affordability, global recognition, and quality education.

Top Countries Section:

A grid layout with hover effects on country names, making the section visually appealing and engaging.

Tailwind CSS was used to add a hover effect that changes background and text color while slightly enlarging the element.

Admission Process & Eligibility:

Brief details explaining the simple admission process to guide prospective students.

Lead Form Section:

A responsive form with input validation to collect user details such as Name, Email, Phone, and Country of Interest.

The form ensures that only valid data is submitted through regular expression-based validation for each field.

Submission Table:

Displays submitted details dynamically using JavaScript.

The table is made responsive using the overflow-x-auto class to allow horizontal scrolling on smaller screens.

#Development Approach

The webpage was built using HTML, Tailwind CSS, and JavaScript to ensure simplicity and efficiency. Below are the key development considerations:

1. Form Handling & Validation

JavaScript was used to validate form fields before submission.

Input fields ensure:

Name contains only alphabets.

Email follows a standard format.

Phone number is a 10-digit numeric value.

2. Dynamic Data Insertion

When users submit the form, their details are dynamically added to the table.

This was achieved using JavaScript to append a new row inside the <tbody> of the table.

3. Smooth Scrolling Effect

The Get Started button was programmed to smoothly scroll to the form when clicked, improving user experience.

4. Responsive Design Implementation

Tailwind’s grid system (grid-cols-2 md:grid-cols-3) ensures adaptability across different screen sizes.

The submission table is wrapped inside a div with overflow-x-auto, allowing horizontal scrolling on smaller devices.