<a name="readme-top"></a>

<!-- PROJECT TITLE -->

# **Gemuhabu - A Gaming Hub**

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#links">Links</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#project-description">Project Description</a></li>
        <li><a href="#user-stories">User Stories</a></li>
        <li><a href="#notable-features">Notable Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#api-endpoints">API Endpoints</a>
      <ul>
        <li><a href="#client-apis">Client APIs</a></li>
        <li><a href="#general-apis">General APIs</a></a></li>
        <li><a href="#management-apis">Management APIs</a></a></li>
        <li><a href="#sales-apis">Sales APIs</a></li>
      </ul>
    </li>
    <li>
      <a href="#entity-relationship-diagram">Entity Relationship Diagram</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

---

<!-- LINKS -->

## **Links**

- Repository: [https://github.com/hoanglechau/gemuhabu](https://github.com/hoanglechau/gemuhabu)
- Deployed Website: [https://gemuhabu.vercel.app/](https://gemuhabu.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- ABOUT THE PROJECT -->

## **About The Project**

[![Gemuhabu Screenshot One][screenshot-one]](https://example.com)

[![Gemuhabu Screenshot Two][screenshot-two]](https://example.com)

[![Gemuhabu Screenshot Three][screenshot-three]](https://example.com)

[![Gemuhabu Screenshot Four][screenshot-four]](https://example.com)

[![Gemuhabu Screenshot Five][screenshot-five]](https://example.com)

### **Project Description**

Gemuhabu is a gaming hub application that allows users to search for game information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### **User Stories**

- As a user, I can view a list of all the games.
- As a user, I can toggle between light and dark modes.
- As a user, I can filter games by genres using the left side bar.
- As a user, I can filter games by platforms using the dropdown button.
- As a user, I can order games by relevance, date added, name, release date, popularity, and average rating.
- As a user, I can search for specific games using the search input.
- As a user, I can find more details about a game by clicking on its name to go to the game details page.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### **Built With**

- React
- React Query
- React Router
- Zustand (state management)
- Chakra UI
- ESLint
- Prettier

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- GETTING STARTED -->

## **Getting Started**

### **Prerequisites**

1. Check your version of Node.js and npm
   ```sh
   node -v
   npm -v
   ```
2. Install Node.js and npm if needed at [https://nodejs.org/en/download](https://nodejs.org/en/download)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### **Installation**

1. Clone the repo
   ```sh
   git clone https://github.com/hoanglechau/gemuhabu.git
   cd gemuhabu
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Get a RAWG API key at https://rawg.io/apidocs. You'll have to create an account first
4. Create an `.env` file with the following contents
   ```js
   VITE_API_KEY = your_api_key;
   ```
5. Replace the value of `VITE_API_KEY` with your RAWR API key
6. Build the app
   ```sh
   npm run build
   ```
7. Run the app
   ```sh
   npm run start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[screenshot-one]: public/images/Gemuhabu.png
[screenshot-two]: public/images/Gemuhabu%202.png
[screenshot-three]: public/images/Gemuhabu%203.png
[screenshot-four]: public/images/Gemuhabu%204.png
[screenshot-five]: public/images/Gemuhabu%205.png
