# Notes

- IF YOU ARE USING VSCODE, MAKE SURE TO INSTALL THE FOLLOWING EXTENSIONS FOR IMPROVED READABILITY AND PROGRAMMING EXPERIENCE: Better Comments, Bracket Pair Colorizer, GitLens
- Put components and pages in their own folder so it's easier to move around and test individually

# Structure of App.js

## Pages

- Pages of the applications
- Includes:
  - Not Found (404 page)
  - Landing Page

## Components

- Meant for reusable components that'll appear across other pages
- e.g. navbar, header, footer
- Will look to utilize more in iteration 2

## Contexts

- Meant to serve as a state management tool
- e.g. authentication status of current user

## Reducers

- Will contains actions, which ultimately modify our state
- e.g. add/remove patient

## Theme

- Includes the MUI theme, which will import our color palette and typography.

## Images

- To store logos, images, etc
