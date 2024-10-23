dataSetVersion = "2024-10-21"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Game of Origin",
    key: "game",
    tooltip: "Check this to restrict to certain games.",
    checked: false,
    sub: [
      { name: "Mario Party 1", key: "1" },
      { name: "Mario Party 2", key: "2" },
      { name: "Mario Party 3", key: "3" },
      { name: "Mario Party 4", key: "4" },
      { name: "Mario Party 5", key: "5" },
      { name: "Mario Party 6", key: "6" },
      { name: "Mario Party 7", key: "7" },
      { name: "Mario Party 8", key: "8" },
      { name: "Mario Party 9", key: "9" },
      { name: "Mario Party 10", key: "10" },
      { name: "Super Mario Party", key: "S" },
      { name: "Super Mario Party Jamboree", key: "J" },
      { name: "Mario Party Advance", key: "A" },
      { name: "Mario Party DS", key: "DS" },
      { name: "Mario Party Island Tour", key: "IT" },
      { name: "Mario Party Star Rush", key: "SR" },
      { name: "Wii Party", key: "W" },
      { name: "Wii Party U", key: "U" },
      { name: "Mario Party: The Top 100", key: "100" },
      { name: "Mario Party Superstars", key: "SS" }
    ]
  },
  {
    name: "Filter by Minigame Type",
    key: "type",
    tooltip: "Check this to restrict to particular minigame types.",
    checked: false,
    sub: [
      { name: "4-Player", tooltip:"Includes Battle minigames due to the distinction being dropped for Top 100 & Superstars", key: "4p" },
      { name: "1-vs.-3", key: "1v3" },
      { name: "2-vs.-2", key: "2v2" },
      { name: "Team", tooltip: "Exclusively in Super Mario Party", key: "T" },
      { name: "1-Player", tooltip: "Featured in Mario Party 1, 8, and Advance", key: "1p" },
      { name: "Item", tooltip: "Featured in Mario Party 2, 3, and Jamboree", key: "I" },
      { name: "Marathon", tooltip: "Featured as Coinathlon in Star Rush and Koopathlon in Jamboree", key: "M" },
      { name: "Duel", key: "D" },
      { name: "Gambling", key: "G" },
      { name: "Bowser Survival", tooltip: "Does not include Bowser Party minigames from Mario Party 10", key: "BS" },
      { name: "Bowser Party", tooltip: "Exclusively in Mario Party 10", key: "BP" },
      { name: "Donkey Kong", key: "DK" },
      { name: "8-Player", tooltip: "Exclusively in Mario Party 7", key: "8p" },
      { name: "Pair", tooltip: "Includes minigames in Wii Party and Bowser Jr. Minigames from Mario Party 9", key: "P" },
      { name: "Co-Op", tooltip: "Includes minigames in Super Mario Party, Jamboree, and Mario Party 1", key: "D" },
      { name: "Boss Battle", tooltip: "Featured in Mario Party 9, 10, Star Rush, and Jamboree", key: "BB" },
      { name: "Story", tooltip: "Featured in Mario Party 3, 4, 5, 7, 8, DS, and Island Tour", key: "D" },
      { name: "Rhythm", key: "R" },
      { name: "Extra", key: "E" },
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Mushroom Mix-Up",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1", "SS" ],
      type: ["4p"]
    }
  },
  {
    name: "Face Lift (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1", "100", "SS" ],
      type: ["4p"]
    }
  },
  {
    name: "Bombsketball",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["2v2"]
    }
  },
  {
    name: "Ghost Guess",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["1p"]
    }
  },
  {
    name: "Ground Pound",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["1p"]
    }
  },
  {
    name: "Knock Block Tower",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["1p"]
    }
  },
  {
    name: "Limbo Dance",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["1p"]
    }
  },
  {
    name: "Memory Match",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["1p"]
    }
  },
  {
    name: "Pedal Power",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["1p"]
    }
  },
  {
    name: "Shell Game",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["1p"]
    }
  },
  {
    name: "Slot Machine",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["1p"]
    }
  },
  {
    name: "Teetering Towers",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["1p"]
    }
  },
  {
    name: "Whack-a-Plant",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["1p"]
    }
  },
  {
    name: "Bash 'n' Cash",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["1v3"]
    }
  },
  {
    name: "Bowl Over (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["1v3"]
    }
  },
  {
    name: "Coin Block Bash",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["1v3"]
    }
  },
  {
    name: "Coin Shower Flower",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["1v3"]
    }
  },
  {
    name: "Crane Game (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["1v3"]
    }
  },
  {
    name: "Paddle Battle",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["1v3"]
    }
  },
  {
    name: "Pipe Maze",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["1v3"]
    }
  },
  {
    name: "Piranha's Pursuit",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1", "100", "SS" ],
      type: ["1v3"]
    }
  },
  {
    name: "Tightrope Treachery",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["1v3"]
    }
  },
  {
    name: "Tug o' War",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1", "100", "SS" ],
      type: ["1v3"]
    }
  },
  {
    name: "Bobsled Run (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1", "SS" ],
      type: ["2v2"]
    }
  },
  {
    name: "Deep Sea Divers",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["2v2"]
    }
  },
  {
    name: "Desert Dash",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1", "100" ],
      type: ["2v2"]
    }
  },
  {
    name: "Handcar Havoc (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1", "SS" ],
      type: ["2v2"]
    }
  },
  {
    name: "Balloon Burst (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["4p"]
    }
  },
  {
    name: "Balloon Burst (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["4p"]
    }
  },
  {
    name: "Balloon Burst (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["4p"]
    }
  },
  {
    name: "Balloon Burst (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["4p"]
    }
  },
  {
    name: "Balloon Burst (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["4p"]
    }
  },
  {
    name: "Balloon Burst (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["4p"]
    }
  },
  {
    name: "Balloon Burst (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["4p"]
    }
  },
  {
    name: "Balloon Burst (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["4p"]
    }
  },
  {
    name: "Balloon Burst (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["4p"]
    }
  },
  {
    name: "Balloon Burst (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["4p"]
    }
  },
  {
    name: "Balloon Burst (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["4p"]
    }
  },
  {
    name: "Balloon Burst (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["4p"]
    }
  },
  {
    name: "Balloon Burst (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["4p"]
    }
  },
  {
    name: "Balloon Burst (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["4p"]
    }
  },
  {
    name: "Balloon Burst (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["4p"]
    }
  },
  {
    name: "Balloon Burst (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["4p"]
    }
  },
  {
    name: "Balloon Burst (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["4p"]
    }
  },
  {
    name: "Balloon Burst (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["4p"]
    }
  },
  {
    name: "Balloon Burst (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["4p"]
    }
  },
  {
    name: "Balloon Burst (1)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "1" ],
      type: ["4p"]
    }
  },
  {
    name: "Handcar Havoc",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "2", "100" ],
      type: ["2v2"]
    }
  },
  {
    name: "Ridiculous Relay",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "3" ],
      type: ["1v3"]
    }
  },
  {
    name: "Bobbing Bow-loons",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "3", "SS" ],
      type: ["I"]
    }
  },
  {
    name: "The Final Battle!",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "3" ],
      type: ["S"]
    }
  },
  {
    name: "Mario Speedwagons",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "4", "100" ],
      type: ["4p"]
    }
  },
  {
    name: "Shock Absorbers (5)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "5" ],
      type: ["D"]
    }
  },
  {
    name: "Lab Brats",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "6" ],
      type: ["E"]
    }
  },
  {
    name: "Shock Absorbers (7)",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "7" ],
      type: ["8p"]
    }
  },
  {
    name: "Jump, Man",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "7" ],
      type: ["DK"]
    }
  },
  {
    name: "Fruits of Doom",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "4" ],
      type: ["BS"]
    }
  },
  {
    name: "Stampede",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "8" ],
      type: ["1p"]
    }
  },
  {
    name: "Pair 'Em",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "A" ],
      type: ["G"]
    }
  },
  {
    name: "Sock it to Lakitu",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "9" ],
      type: ["BB"]
    }
  },
  {
    name: "Feed and Seed",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "DS" ],
      type: ["S"]
    }
  },
  {
    name: "The Final Battle!",
    img: "6TYFHkd.jpg",
    opts: {
      game: [ "3" ],
      type: ["S"]
    }
  }
];
