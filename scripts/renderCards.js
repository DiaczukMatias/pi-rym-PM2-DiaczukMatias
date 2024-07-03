const container = document.getElementById('films-container');


const renderCards = (data) => {
    data.map(movie => {
      const card = document.createElement("div");
      card.classList.add("card");
  
  
      const poster = document.createElement("img");
      poster.classList.add("card-image");
      poster.src = movie.poster;
  
  
      const title = document.createElement("h3");
      title.classList.add("card-title");
      title.innerHTML = movie.title;
  
  
      const year = document.createElement("p");
      year.classList.add("card-text");
      year.innerHTML = movie.year;
  
      
      const genre = document.createElement("div");
      genre.classList.add("card-genre");
      genre.innerHTML = movie.genre.map(g => `<span>${g}</span>`).join('');
      
  
      const rate = document.createElement("div");
      rate.classList.add("card-rate");
      rate.innerHTML = `⭐ ${movie.rate}`;
  
  
      card.appendChild(poster);
      card.appendChild(title);
      card.appendChild(year);
      card.appendChild(genre);
      card.appendChild(rate);
  
      container.appendChild(card);
    });
    
  };

  module.exports = renderCards;