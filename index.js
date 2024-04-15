      const apiKey = "a7ba3e52";
      const apiUrl = "http://www.omdbapi.com/?t=";

      const searchBox = document.querySelector("#text");
      const searchBtn = document.querySelector("#button");
      const movieImg = document.querySelector("#image");

      async function movieCheck(name) {
        const response = await fetch(apiUrl+name+`&apikey=${apiKey}`);
        console.log(response);
        const data = await response.json();
        console.log(data);


          // Update HTML elements with data from API
        document.querySelector("#name").innerHTML = data.Title;
        document.querySelector("#date").innerHTML = data.Released;
        document.querySelector("#rating").innerHTML = data.imdbRating;
        document.querySelector("#budget").innerHTML = data.Plot;

        const movieUrl = data.Poster;
        movieImg.innerHTML = `<img src="${movieUrl}">`;
        }
      searchBtn.addEventListener("click", () => {
        movieCheck(searchBox.value);
      })
      // Example usage
      movieCheck("avatar");
      