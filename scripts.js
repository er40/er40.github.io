window.onload = function()
{
createName();
}
var NumberOfAdjectives = 58;
var NumberOfShapes = 48;

var adjectives = new BuildArray(NumberOfAdjectives);
var shapes = new BuildArray(NumberOfShapes);

var adjectives = [
  "Gyakuto",
  "Ageru",
  "Aiki",
  "Aisha",
  "Aki",
  "Akuma",
  "Akunin",
  "Ashi",
  "Waza",
  "Baka",
  "Baketsu",
  "Bugei",
  "Iri",
  "Jo",
  "Cho",
  "Chugi",
  "Chunin",
  "Do",
  "Doko",
  "Domo",
  "Kamae",
  "Don'yoku",
  "Doryo",
  "Dosha",
  "Ensho",
  "Fu",
  "Furi",
  "Futari",
  "Fuyu",
  "Gakko",
  "Gakusei",
  "Gaito",
  "Gekken",
  "Genin",
  "Genkotsu",
  "Geta",
  "Gion",
  "Giri",
  "Giso",
  "Go",
  "Gorin",
  "Goyoku",
  "Gyaku",
  "Hachi",
  "Uchi",
  "Haito",
  "Aruki",
  "Haiyu",
  "Hanjo",
  "Happo",
  "Hara",
  "Harai",
  "Hari",
  "Heiho",
  "Hiji",
  "Hiki",
  "Hisso",
  "Hoka"
  ]

var shapes = [
  "Tsuki",
  "Jinchi",
  "Batto",
  "Binwanka",
  "Bisento",
  "Bojutsu",
  "Ankokuto",
  "Bugeisha",
  "Nagumogaku",
  "Bunkai",
  "Buki",
  "Shihai",
  "Chakuzen",
  "Chiku",
  "Chikuto",
  "Doku",
  "Dokute",
  "Dokyu",
  "Donryu",
  "Geri",
  "Feruzue",
  "Fudo",
  "Myo",
  "Fudoshin",
  "Fudotai",
  "Uchi",
  "Fudoza",
  "Fukidake",
  "Garami",
  "Garyu",
  "Gatame",
  "Gekigan",
  "Ansatsunin",
  "Godai",
  "Gojo",
  "Gowaza",
  "Nage",
  "Nigiri",
  "Tsuki",
  "Hachiwara",
  "Haishu",
  "Hakama",
  "Hakari",
  "Hakariwaza",
  "Hakkakubo",
  "Haiboku",
  "Hayagake",
  "Heikisho"
  ]

function BuildArray(size){
  this.length = size
  for (var i = 1; i <= size; i++){
  this[i] = null}
  return this
}

function createName() {
  var randomAdjective = adjectives[Math.ceil(Math.random() * NumberOfAdjectives)];
  var randomShape = shapes[Math.ceil(Math.random() * NumberOfShapes)];
  var gloriousName = randomAdjective + " " + randomShape;
  document.getElementById("name").innerHTML = gloriousName;
}

