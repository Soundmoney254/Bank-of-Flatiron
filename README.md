<br />
<div align="center">

<h3 align="center">Bank of FlatIron - for all your security needs </h3>

  <p align="center">
    This is a web application allows users to view or search their latest bank transactions and add new transactions to the transaction list
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

### Built With

* HTML: provides the structure of the web page.
* CSS: provides the styling of the web page.
* React JS: provides the functionality of the web page.

<!-- GETTING STARTED -->
## Getting Started/Setup
### Installation


1. Use the netlify live link
  ```sh
  https://vocal-selkie-9eacea.netlify.app/?
  ```

2. Clone the repo
```sh
https://github.com/Soundmoney254/Bank-of-Flatiron


* Download the code files from the repository.
* Open the files on your code editor.
* Run "npm start" inside the app's  root directory.
* The live server will launch a browser window with the app
```

<!-- USAGE EXAMPLES -->
## Usage

* A user can see their recent transactions as fetched from the database
* Enter a movie name in the Movie Name input accompanied with its release year in the year released input.
* You can use this movies as a test but the website can search any movie publicly available in IMDBs' database which is most movies

    ```sh
      inception 2010
      titanic 1997
      sharper 2023
      avatar 2009
   ```
* After fetching the website will render a movies trailer and it's movie report.
* From there a user can decide to add the movie to their watched list by typing the movies name in the input field, selecting a ranking category and clicking the 'Add to watchlist' button.
* The movie will be added to the watchlist together with buttons to send the movie to the already watched, and bin list.
* All this lists are stored in the browsers locals storage in JSON format and readded back to the page when it loads fully.

<!-- ROADMAP -->
## Features

- The web page has a simple and user-friendly interface.
- The web page allows a user to search either movies or series as long as they are available on IMDB and see their trailer and other  data.
- The web page allows the user save the movies they want to see in their browser and see them later.

## Limitations
* The web page does not persist data to a database and hence clearing the cookies loses the list data.
* IMDB's free api keys rate limit to 100 fetch requests a day for the free version. 
* If you need to create a personal api key follow this link "https://imdb-api.com/Identity/Account/Register" to register and create an apikey and copy it from your profile to line 17

<!-- CONTRIBUTING -->
## Contributing

* Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

<!-- LICENSE -->
## License
* The code is released under the General Public License.
* Feel free to use and modify the code for personal or commercial purposes.

<!-- CONTACT -->
## Author
* This project was created by Samuel Mbugua.
