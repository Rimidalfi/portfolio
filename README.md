# Portfolio Website

This is the README for my Portfolio Website project, built using TypeScript and React, styled with Tailwind CSS, and connected to Contentful via a RESTful API.

## Overview

My portfolio website is a dynamic platform where almost every element is controlled via Contentful, enabling easy customization and future management without code. From logos to social media links, almost everything is dynamically integrated via Contentful, making the website highly flexible.

## Features

- **Contentful Integration**: The website is closely connected to Contentful, allowing easy content management and updates. Nearly all elements on the page are dynamically fetched from Contentful.
- **Dynamic Project Display**: New projects can be easily added and will automatically render as cards in the project section. Titles, cover images, rich text, etc., are pulled from Contentful content.
- **Dynamic Vita Timeline**: Each point in the vita, created in Contentful with title, image, description, and date, is automatically displayed in the vita timeline.
- **Contact Form and Nodemailer Micro App**: Visitors can send a message via the contact form, which is secured with spam protection (simple math challenge) and controls a custom Nodemailer micro app. This micro app, built with Express.js, receives information from the contact form card via a RESTful API and forwards it to the website owner's email account.
- **Skeleton Display**: The website features a skeleton display to enhance user experience during loading.
- **React Helmet for SEO**: React Helmet is used to improve SEO optimization.

## Technologies

- **React**: The website is developed in React, enabling fast and scalable development.
- **TypeScript**: TypeScript is used to type the codebase, providing a robust development environment.
- **Tailwind CSS**: Tailwind CSS is utilized for styling, enabling quick customization and consistent design.
- **Contentful**: Contentful serves as the Headless CMS for managing content and dynamically integrating it into the website.

To successfully operate the website, along with the Contentful token, you'll need to set the API address for the Contact Nodemailer App in the environment variables. The following variables should be included in the environment file:

- `VITE_ACCESS_TOKEN`: Contentful access token
- `VITE_SPACE_ID`: Contentful space ID
- `VITE_EMAIL_API`: API address for the Contact Nodemailer App

## Installation and Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   ```

2. Install dependencies:

   ```bash
   cd portfolio-website
   npm install
   ```

3. Set the required environment variables for connecting to Contentful and the Nodemailer API.

4. Start the development server:

   ```bash
   npm start
   ```

## Contribution

I welcome contributions and suggestions for improvement. Please open an issue to report bugs or submit a pull request for new features or bug fixes.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for more information.

Copyright (c) 2024 Wladimir Janowitsch
