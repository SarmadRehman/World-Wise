# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Css Rules

## FOR A .module.css FILE ALL THE STYLES DEFINED LIKE .nav WOULD BE GIVEN A RANDOM ID WHICH IS ATTACED WITH THEM IN BROWSER CHECKING THEM TO BE USED ELSEWERE NOT IMPOTED FOR THIS REMEDY IS

using a syntax like :
`css`
.nav :global(.active) {
background-color : green ;
}

FOR APPLYING CERTAIN STYLES NECESSARY
