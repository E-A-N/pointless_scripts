
groundNormals = [
    "5p",
    "2p",
    "6p",
    "5k",
    "2k",
    "6k",
    "2S",
    "5S",
    "c.S",
    "2h",
    "5h",
    "6h",
    "5d",
    "2d"
];

aerialNormals = [
    "j.p",
    "j.k",
    "j.s",
    "j.h",
    "j.d"
];
specialMoveList = ["carcass raid", "stinger aim", "dhm", "ball summon", "mad struggle"]
specialMoveData = [
    {
        "name": "carcass raid",
        "buttons": ["s", "h", "d"],
        "aerial": false,
        "variation": ["default", "charged lvl1", "charged lvl2", "forcebreak"]
    },
    {
        "name": "stinger aim",
        "buttons": ["s", "h", "d"],
        "aerial": false,
        "variation": ["default", "charged lvl1", "charged lvl2", "forcebreak"]
    },
    {
        "name": "dhm",
        "buttons": ["s", "h", "d"],
        "aerial": false,
        "variation": ["default", "forcebreak"]
    },
    {
        "name": "ball summon",
        "buttons": ["p", "k", "s", "h", "d"],
        "aerial": true,
        "variation": ["default", "forcebreak"]
    },
    {
        "name": "mad struggle",
        "buttons": ["s", "h", "d"],
        "aerial": true,
        "variation": ["default", "tigerknee", "forcebreak"]
    },
];

for (var i = 0; i < specialMoveData.length; i++){
    var item = specialMoveData[i].name;
    console.log("Item is: ",item);
}
//const createSpecialMoveContext = (special) => {};


const randomizeSpecial = (specials, btnInputs) => {
    const btnNumber     = Math.floor(Math.random() * btnInputs.length);
    const specialNumber = Math.floor(Math.random() * specials.length);
    const btnChoice     = btnInputs[btnNumber]
    const specialChoice = specials[specialNumber]

    const createdSpecialMove = `${btnChoice} ${specialChoice}`;
    return createdSpecialMove
};

//console.log(randomizeSpecial(specialMoveList, groundNormals));
