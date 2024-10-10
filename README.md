## Technical Test Submission by Mohammad Kawadri - mohammadkawadri.com

## Project Overview

Hi! I really enjoyed working on this task. Below is a breakdown of my thought process and approach during its implementation.

## Technologies Used

React.js: For building UI components using the latest version.
Styled-components: For creating modular and reusable component styling.
JavaScript (ES6+): Leveraging modern language features.
Redux Toolkit: For managing and sharing state across components.
Dayjs: A lightweight alternative to Moment.js for date manipulation.
PropTypes: For validating component props.
Note: Everything else was built from scratch. No additional libraries were used.

## Component Design Breakdown

I typically start by writing a to-do list to break down large tasks into manageable solutions. After reviewing the Figma file, I divided the design into potential common, feature, and layout components.

However, as I worked on implementing the design system and icons, I began to deviate from the to-do list. Although I appreciated the style guide provided, I found the color variants a bit confusing. Hopefully, I've come close to achieving the intended design.

## Project Setup

Early on, I realized that the app was built using Create React App with Webpack hidden behind a React eject. I wasn't sure if I should eject the project to expose Webpack for adding aliases and parsing SVG files.

Instead, I decided not to eject or introduce Vite or Webpack changes, as doing so in a real-world project would require planning and discussion with the team. Since this was a mock task, I opted to stick with the existing setup.

I did attempt to use the Craco library for aliasing, but it caused issues midway through the task, so I removed it and reverted to the original setup.

## Branches and Merge Requests

I intended to create separate branches for each common, feature, and layout component, but I had to balance completing other technical tests alongside this one. Ultimately, I focused on completing the task as thoroughly as possible.

## Redux and Thunk

I chose to use Redux over the Context API because I find Redux Toolkit to be more robust, and since Redux is part of your tech stack, I wanted to demonstrate my experience with it in this project.

In the services file, there was a mock service function called getSearchResults. I created additional mock services for the dropdown filters by using the provided mock data to generate filter options. Each filter property was used to generate mock filtered results.

I also implemented mock async HTTP requests to demonstrate my proficiency with Redux Thunk for handling asynchronous actions.

## Unit testing

Due to my current workload, including technical tests for other companies, I was unable to allocate sufficient time to write unit tests for this project. Although I understand the importance of unit testing in ensuring code reliability and maintainability, I had to prioritize completing the core functionality of the task within the given timeframe. Under different circumstances, I would have dedicated time to implementing a full suite of tests to validate the components and logic thoroughly.

## Bugs

The only bug I’m currently aware of in this submission is that when switching pages, the page size incorrectly defaults to showing 10 results per page, regardless of the selected page size.

Although, the page size filter and other filters work as intended.

## Conclusion:

I really enjoyed working on this project, and look forward to hearing your feedback soon.

Kind regards,

Mohammad Kawadri

mohammadkawadri.com
