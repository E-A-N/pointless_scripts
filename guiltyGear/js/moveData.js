
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
specialMoveData = {
    "name": "specials moves",
    "data": [
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
            "buttons": ["p", "k", "s", "h", "d", "j.p", "j.k", "j.s", "j.h", "j.d"],
            "aerial": true,
            "variation": ["default", "forcebreak"]
        },
        {
            "name": "mad struggle",
            "buttons": ["j.s", "j.h", "j.d"],
            "aerial": true,
            "variation": ["default", "tigerknee", "forcebreak"]
        },
    ]
}

for (var i = 0; i < specialMoveData.data.length; i++){
    var item = specialMoveData.data[i].name;
    console.log("Item is: ",item);
}
const createSpecialMoveContext = (data) => {
    const select = Math.floor(Math.random() * data.data.length);
    const choice = data.data[select];
    const inAir = choice.aerial ? Math.random() > 0.5 : false;
    const normals = inAir ? ["p","k","s","h"] : ["j.p", "j.k", "j.s", "j.h"];
    switch(choice.name){
        case: "carcass raid":
        break;

        case: "stinger aim":
        break;

        case: "dhm":
        break;

        case: "ball summon":
        break;

        case: "mad struggle":
        break;
    }
};


const randomizeSpecial = (specials, btnInputs) => {
    const btnNumber     = Math.floor(Math.random() * btnInputs.length);
    const specialNumber = Math.floor(Math.random() * specials.length);
    const btnChoice     = btnInputs[btnNumber]
    const specialChoice = specials[specialNumber]

    const createdSpecialMove = `${btnChoice} ${specialChoice}`;
    return createdSpecialMove
};

//console.log(randomizeSpecial(specialMoveList, groundNormals));
