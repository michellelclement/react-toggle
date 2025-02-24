# Seneca Frontend Technical Task

The task was to create a component in React for a user to select the correct answers to a question by sliding several toggles into their correct positions. Once the user has selected all the correct options, the sliders 'lock' and the user can no longer change their answers.

This project was bootstrapped with the [Create React App](https://create-react-app.dev/docs/getting-started/) to allow me to quickly set up a working React environment and focus on building the component logic and UI.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Limitations](#limitations)
- [Assumptions](#assumptions)
- [Future Improvements](#future-improvements)
- [Installation](#installation)

## Technologies used:

- HTML
- SASS
- React
- Javascript

## Usage:

- The component is designed to display a set of toggles, each providing two options to choose from: one correct option and one incorrect option.
- Users can interact with the toggles to select answers, and the component will lock once all correct answers are selected.
- The background colour will update based on the percentage of correct answers the user selects.
- Component is responsive down to screens 320px wide.

## Code Structure:

- `/src`
  - `/components`: Contains React components such as `Toggle`, `Toggles`, etc.
  - `/styles`: Includes SASS files for styling.
  - `App.js`: The main component that ties everything together.
  - `index.js`: The entry point for the app.

## Limitations:

- **Limited React Experience**: I am currently in the process of learning React, and this task provided an excellent opportunity to focus on learning the core concepts and apply them in a real project. While I have successfully implemented the required functionality, there may be areas for improvement and further expansion of my knowledge and understanding.
- **TypeScript Not Used**: The task required TypeScript, but due to my lack of experience with it to date, I implemented the solution using JavaScript instead, leveraging my existing skills to deliver the best result possible. Given more time, I would like to learn and apply TypeScript to improve the solution.
- **Accessibility Considerations**: While performing accessibility checks using the [Silktide Extension](https://silktide.com/), unfortunately, the colour contrast did not meet the recommended accessibility guidelines. I would enhance the contrast in future versions to ensure they are WCAG-compliant.
- **Screen Reader Compatibility**: The component has been tested with a screen reader, but it does not cycle through the toggle options as expected. Due to time constraints, I was unable to fully address this issue, but I recognize the importance of making the component accessible to screen reader users and would plan to revisit it in future updates.

## Assumptions:

- **Toggle start position**: I have assumed that all toggles start in the same default position, with no answer pre-selected (a ‘null’ state). This requires the user to actively select an answer. However, this raises some considerations:
  - If a toggle starts on the correct answer, the user may not realize they need to interact with it to confirm their choice. Adding an instructional message could help clarify this, such as 'Please select an answer'.
  - If all toggles start in an 'incorrect' position, the user may automatically know what each of the answers is, reducing the challenge.
  - There is no option for a user to de-select, or reset their answers, as I do not see there being a reason to need this.
- **User assumption**: It is assumed that the user understands how to interact with toggles. Brief instructions or prompts could be added for clarity.
- **Background colour changing**: I have assumed that the background colour change is based on the percentage of correct answers rather than changing with each correct answer. This assumption is based on the following:
  - The Figma design shows three background colour variations, but one example has four toggles while the others have three.
  - Since the component needs to support a variable number of toggles, using an overall percentage of correctness ensures a scalable approach, rather than hardcoding specific colour changes for an unknown number of toggles.
  - This approach could be improved by introducing additional colour transition points, such as 25% and 75% correctness if the number of toggles is expected to be greater than three or four.
- **Stacked option design on small screens**: Based on the supplied designs, I have assumed that when an option with longer text is present, the layout changes for easier readability. I have added a check to see if the option text is over a certain length, and if it is, add a class to the `Toggle`, to style it differently. This stops text stacking to one word per line on small screens.
- **Browser testing**: The component has been designed to be responsive down to 320px and tested on modern browsers. However, it has not been tested on older browsers.

## Future Improvements:

- Implement TypeScript for better type safety and code maintainability.
- Update the component to allow for 2 or 3 options per toggle.
- Add instructions for the user: Add an instruction for the user to select an answer if the correct option is already preselected (but a null state).
- **Accessibility**: Improve accessibility for screen reader users and those with impaired vision (colour contrast).

## Installation:

### Clone the repository

[https://github.com/michellelclement/react-toggle](https://github.com/michellelclement/react-toggle)

### Install dependencies:

#### `npm install`

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
