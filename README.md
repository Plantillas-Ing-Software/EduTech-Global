# UniversityFinder Web Application

## Project Overview

**UniversityFinder** is a web application designed to promote EduTech Global Solutions, LLC's new platform. The application utilizes the **UniversityFinder RESTful API**, which provides access to detailed university data from around the world. This project specifically focuses on listing universities that include the word "ciencias" in their names. The primary objective is to develop a frontend web application using **TypeScript** and **Angular**.

## Features

- **Toolbar**: Displays a title "Science-Focused Universities" at the top of the page.
- **University List**: The default view shows a collection of cards, each containing the following information for a university:
  - University Name
  - Country Name
  - Country Code
  - Domain
  - Domain Logo
  - Website URL
- **Internationalization (i18n)**: Supports both English and Spanish languages. The action button within each card displays "Read more" in English or "Ver más" in Spanish, depending on the selected language.
- **Footer**: Includes two lines of text:
  - "Copyright © 2024 EduGlobal Tech LLC. All rights reserved."
  - "Developed by" followed by your name and developer code.

### API Endpoint
`http://universities.hipolabs.com/search?name=ciencias`
## Technical Requirements

1. **Frontend Framework**: Angular (with TypeScript)
2. **UI Library**: Angular Material
3. **Backend Communication**: HttpClient (included in `@angular/common/http`)
4. **Internationalization**: Implement i18n for language switching in the footer and action buttons.
5. **ARIA Attributes**: Ensure accessibility by using ARIA attributes and providing alternate text for images.
6. **Code Organization**: Apply a domain-driven, layered architecture:
   - `public`: For general UI components (e.g., toolbar, footer).
   - `universities`: For components related to university data display (e.g., cards).

## Technical Constraints

- The user interface must be compatible with **JetBrains WebStorm**.
- No sidebar or routing features are required for this version.

## Developer Information

- **Author**: [Your Name]

## References

- [Angular HttpClient Guide](https://angular.io/guide/http)
- [Angular Material Toolbar](https://material.angular.io/components/toolbar/overview)
- [Angular Material Card](https://material.angular.io/components/card/overview)
- [WAI-ARIA Usage](https://www.w3.org/TR/wai-aria/#usage)

---

This project implements internationalization, accessibility, and usability best practices, ensuring a smooth user experience across different devices and languages.
