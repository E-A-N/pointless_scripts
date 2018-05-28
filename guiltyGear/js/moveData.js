
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
    "carcass raid": {
        "buttons": ["s", "h", "d"],
        "aerial": False,
        "variation": ["default", "charged lvl1", "charged lvl2", "forcebreak"]
    },
    "stinger aim":{
        "buttons": ["s", "h", "d"],
        "aerial": False,
        "variation": ["default", "charged lvl1", "charged lvl2", "forcebreak"]
    },
    "dhm":{
        "buttons": ["s", "h", "d"],
        "aerial": False,
        "variation": ["default", "forcebreak"]
    },
    "ball summon":{
        "buttons": ["p", "k", "s", "h", "d"],
        "aerial": True,
        "variation": ["default", "forcebreak"]
    },
    "mad struggle":{
        "buttons": ["s", "h", "d"],
        "aerial": True,
        "variation": ["default", "tigerknee", "forcebreak"]
    },
}

for (var = 0; i < specialMoveList.length; i++){:
    console.log(specialMoveData[i])
}
const createSpecialMoveContext = (special) => {};


const randomizeSpecial = (specials, btnInputs) => {
    var btnNumber = random.randint(0, len(btnInputs) - 1)
    var specialNumber = random.randint(0, len(specials) - 1)
    var btnChoice = btnInputs[btnNumber]
    var specialChoice = specials[specialNumber]

    var createdSpecialMove = btnChoice + " " + specialChoice;
    return createdSpecialMove
};

console.log(randomizeSpecial(specialMoveList, groundNormals));
