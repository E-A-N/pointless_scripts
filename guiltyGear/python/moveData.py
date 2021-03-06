import random

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
]

aerialNormals = [
    "j.p",
    "j.k",
    "j.s",
    "j.h",
    "j.d"
]
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

# for i in specialMoveList:
#     print(specialMoveData[i])

def createSpecialMoveContext(special):
    

def randomizeSpecial(specials, btnInputs):
    btnNumber = random.randint(0, len(btnInputs) - 1)
    specialNumber = random.randint(0, len(specials) - 1)
    btnChoice = btnInputs[btnNumber]
    specialChoice = specials[specialNumber]

    createdSpecialMove = btnChoice + " " + specialChoice
    return createdSpecialMove

print(randomizeSpecial(specialMoveList, groundNormals))
