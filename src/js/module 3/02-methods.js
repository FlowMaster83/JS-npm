// методы объекты ключевое слово this
// метод это функция, которая работает со свойствами объекта

const playlist = {
  name: "My playlist",
  rating: 5,
  tracks: ["track 01", "track 02", "track 03"],
  trackCount: 3,

  // изменение имени объекта
  // внутри объекта НИКОГДА не использовать имя самого объекта(использовать this)
  // замена синтаксиса - changeName: function ()

  changeName(newName) {
    this.name = newName; // this есть только у функции
  },

  //    добавление
  // метод объекта (функция)
  addTrack(track) {
    this.tracks.push(track); // ['track 01', 'track 03', 'track 03', 'New track']
    this.trackCount = this.tracks.length;
  },

  //    изменение
  // метод объекта (функция)
  updateRating(newRating) {
    this.rating = newRating;
  },

  // метод объекта (функция)
  getTrackCount() {
    return this.tracks.length;
  },
};

playlist.changeName("New name");

playlist.addTrack("New track 1");
playlist.addTrack("New track 2");
playlist.updateRating(4);

console.log(playlist);
