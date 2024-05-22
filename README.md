**Project Title: React Portfolio App with Vite**

## Table of Contents

1. [Description](#description)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Version History](#version-history)
5. [Getting Started](#getting-started)
6. [Contributing](#contributing)
7. [License](#license)

## Description

This repository contains a sleek and professional portfolio website built using ReactJS and Vite. The application serves as a showcase for your projects, skills, and experiences, demonstrating your expertise to potential employers or clients. With its modern design and intuitive user interface, this portfolio app is sure to leave a lasting impression.

## Features

- **Customizable Content**: Easily update and customize your portfolio content, including projects, skills, and contact information.
- **Responsive Design**: Ensures your portfolio looks great on all devices, from desktops to smartphones.
- **Project Showcase**: Highlight your projects with detailed descriptions, screenshots, and links to live demos or repositories.
- **Skills Section**: Showcase your skills and technologies you're proficient in, helping visitors understand your expertise.
- **Contact Form**: Allows visitors to reach out to you directly through a contact form, enhancing communication.
- **Social Media Integration**: Links to your social media profiles for increased visibility and networking opportunities.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool that significantly improves the frontend development experience.
- **React Hooks**: Allows functional components to manage state and side effects.
- **Tailwind CSS**: A utility-first CSS framework packed with classes.
- **Vitest**: JavaScript testing framework.
- **ESLint**: JavaScript linting utility for maintaining code quality.
- **Prettier**: Code formatter for ensuring consistent code style.

## Version History

- **Version 1.0.0** (Initial Release - 2024-02-15):

  - Implemented basic portfolio structure with project showcase, skills section, and contact form.
  - Integrated smooth page transitions for enhanced user experience.
  - Updated dependencies to the latest versions for improved performance and security.
  - Added multi-language support for internationalization.

- **Version 1.1.0** (2024-05-22):
  - Changed the Persian font to Yekan Bakh.
  - Changed the project structure to use TypeScript.
  - As it is not a good thing to use database to store static data, the necessary information is now stored inside of project folders.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository: `git clone https://github.com/yourusername/react-portfolio-app.git`
2. Navigate to the project directory: `cd react-portfolio-app`
3. Install dependencies: `npm install`
4. Customize the content in the `src/components` directory to match your portfolio.
5. Run the development server: `npm run dev`
6. Open [http://localhost:5173](http://localhost:5173) in your browser to view your portfolio.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name: `git checkout -b feature/my-new-feature`.
3. Make your changes and commit them with descriptive commit messages: `git commit -am 'Add new feature'`.
4. Push your changes to your fork: `git push origin feature/my-new-feature`.
5. Submit a pull request detailing the changes you made and why they are necessary.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<!-- I use this rule for my applications:

x.y.z

Where:

x = main version number, 1-~.
y = feature number, 0-9. Increase this number if the change contains new features with or without bug fixes.
z = hotfix number, 0-~. Increase this number if the change only contains bug fixes.
Example:

For new application, the version number starts with 1.0.0.
If the new version contains only bug fixes, increase the hotfix number so the version number will be 1.0.1.
If the new version contains new features with or without bug fixes, increase the feature number and reset the hotfix number to zero so the version number will be 1.1.0. If the feature number reaches 9, increase the main version number and reset the feature and hotfix number to zero (2.0.0 etc) -->
