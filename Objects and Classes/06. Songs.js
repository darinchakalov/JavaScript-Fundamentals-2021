function solve(arr) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let n = arr.shift();
  let type = arr.pop();
  for (let i = 0; i < n; i++) {
    let currentSong = arr[i].split("_");
    let song = new Song(...currentSong);
    if (song.typeList === type || type === "all") {
      console.log(song.name);
    }
  }
}
solve([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
