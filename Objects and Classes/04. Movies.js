function solve(arr) {
  let result = [];

  class Movies {
    constructor(name, director, date) {
      this.name = name;
      this.director = director;
      this.date = date;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let currentLine = arr[i].split(" ");
    if (currentLine.includes("addMovie")) {
      currentLine.shift();
      result.push(new Movies(currentLine.join(" "), null, null));
    } else if (currentLine.includes("directedBy")) {
      let directedByMovieName = currentLine.splice(0, currentLine.indexOf("directedBy")).join(" ");
      if (movieExists(directedByMovieName) !== undefined) {
        let movie = movieExists(directedByMovieName);
        movie.director = currentLine.splice(currentLine.indexOf("directedBy") + 1, currentLine.length).join(' ')
      }
    } else if (currentLine.includes("onDate")) {
      let onDateMovieName = currentLine.splice(0, currentLine.indexOf('onDate')).join(' ')
      if (movieExists(onDateMovieName) !== undefined) {
        let movie = movieExists(onDateMovieName);
        currentLine.shift()
        movie.date = currentLine.splice(currentLine).join(' ')
      }
    }
  }

  //result.forEach(element => element.name !== null && element.director !== null && element.date !== null ? console.log(JSON.stringify(element)): null);
  result.forEach(element => {
   if (Object.keys(element).length === 3) {
     console.log(JSON.stringify(element));
   } 
  });

  function movieExists(movieName) {
    let movie = result.find(m => m.name === movieName);
    return movie;
  }

}
solve([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
