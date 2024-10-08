// * * * * * * * * * * * * * * * * * * * GLOBALS * * * * * * * * * * * * * * * * * * *
let bossHealth, team, teamMembers, players, currentQuestion; 
let questionSet = []

// * * * * * * * * * * * * * * * * * * * TEAM INFO * * * * * * * * * * * * * * * * * * *
geographyTeam={
    name: "Geography",
    members: [  ["Alex", "warrior-male-9"],
                ["Ashlyn", "mage-female-9"],
                ["Elaina", "healer-female-1"],
                ["Elijah", "warrior-male-6"],
                ["Ella", "mage-female-3"],
                ["Kylee", "healer-female-9"],
                ["Ariela", "healer-female-4"]
            ],
    shield: "5"
}
literatureTeam={
    name: "Literature",
    members: [  ["Alaina", "healer-female-7"],
                ["AnnaLisa", "healer-female-6"],
                ["Aidan", "healer-male-6"],
                ["Ellie", "mage-female-6"],
                ["Emersyn", "archer-female-7"],
                ["Ephraim", "mage-male-10"],
                ["Isaac", "mage-male-12"],
                ["Kody", "healer-male-3"],
                ["Liam", "healer-male-13"],
                ["Mikhail", "archer-male-2"]
            ],
    shield: "3"
},
microTeam={
    name: "Microschool",
    members: [  
        ["Alaina", "healer-female-7"],
        ["AnnaLisa", "healer-female-6"],
        ["Aidan", "healer-male-6"],
        ["Kody", "healer-male-3"],
        ["Liam", "healer-male-13"],
        ["Mikhail", "archer-male-2"]
    ],
    shield: "2"
}
// gameschoolTeam={
//     name: "Mystics",
//     members: [  ["Ethan", "archer-male-3"],
//                 ["Emma", "bard-female-12"],
//                 ["Gwen", "warrior-female-11"]
//             ],
//     shield: "2"
//}
// * * * * * * * * * * * * * * * * * * * QUESTION SETS * * * * * * * * * * * * * * * * * * *
/*geo1l3={
    qa: [
        ["What iscartography?","the study of making maps"],
        ["What is geography?","a description of the earth and the people who live on it"],
        ["What is mathematical geography?","a description of the earth and space using numbers and measurements"],
        ["What is the earth's orbit?","the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once."],
        ["What is the earth's axis?","a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours."]
    ]
}
geo1l5={
    qa: [
        ["What iscartography?","the study of making maps"],
        ["What is geography?","a description of the earth and the people who live on it"],
        ["What is mathematical geography?","a description of the earth and space using numbers and measurements"],
        ["What is the earth's orbit?","the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once."],
        ["What is the earth's axis?","a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours."],
        ["What is shape (in geographical terms)?","the outline of an area or figure"],
        ["What is form?","an object that is not flat but has height, width, and depth (three-dimensional)"],
        ["What is a relief map?","a map or model that includes three-dimensional (3D) forms"]       
    ]
}
geo1l6={
    qa: [
        ["What iscartography?","the study of making maps"],
        ["What is geography?","a description of the earth and the people who live on it"],
        ["What is mathematical geography?","a description of the earth and space using numbers and measurements"],
        ["What is the earth's orbit?","the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once."],
        ["What is the earth's axis?","a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours."],
        ["What is shape (in geographical terms)?","the outline of an area or figure"],
        ["What is form?","an object that is not flat but has height, width, and depth (three-dimensional)"],
        ["What is a relief map?","a map or model that includes three-dimensional (3D) forms"],
        ["What is a cloud?","a grouping of tiny water drops and/or ice crystals that float in the air"],
        ["What is cirrus?","thin, wispy clouds found high in the sky"],
        ["What is cirrocumulus?","small, rounded white puffs; clouds that form long rows in the sky"],
        ["What is cumulus?","big, white puffy clouds"],
        ["What is cumulonimbus?","large, gray cumulus clouds that are heavy with water"],
        ["What is stratus?","low, flat clouds that bring rain or snow"]
    ]
}
geo1l7={
    qa: [
        ["What iscartography?","the study of making maps"],
        ["What is geography?","a description of the earth and the people who live on it"],
        ["What is mathematical geography?","a description of the earth and space using numbers and measurements"],
        ["What is the earth's orbit?","the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once."],
        ["What is the earth's axis?","a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours."],
        ["What is shape (in geographical terms)?","the outline of an area or figure"],
        ["What is form?","an object that is not flat but has height, width, and depth (three-dimensional)"],
        ["What is a relief map?","a map or model that includes three-dimensional (3D) forms"],
        ["What is a cloud?","a grouping of tiny water drops and/or ice crystals that float in the air"],
        ["What is cirrus?","thin, wispy clouds found high in the sky"],
        ["What is cirrocumulus?","small, rounded white puffs; clouds that form long rows in the sky"],
        ["What is cumulus?","big, white puffy clouds"],
        ["What is cumulonimbus?","large, gray cumulus clouds that are heavy with water"],
        ["What is stratus?","low, flat clouds that bring rain or snow"],
        ["What is atmosphere?","the entire mass of fluid, air, and vapors surrounding the earth"]
    ]
}
geo1l8={
    qa: [
        ["What iscartography?","the study of making maps"],
        ["What is geography?","a description of the earth and the people who live on it"],
        ["What is mathematical geography?","a description of the earth and space using numbers and measurements"],
        ["What is the earth's orbit?","the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once."],
        ["What is the earth's axis?","a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours."],
        ["What is shape (in geographical terms)?","the outline of an area or figure"],
        ["What is form?","an object that is not flat but has height, width, and depth (three-dimensional)"],
        ["What is a relief map?","a map or model that includes three-dimensional (3D) forms"],
        ["What is a cloud?","a grouping of tiny water drops and/or ice crystals that float in the air"],
        ["What is cirrus?","thin, wispy clouds found high in the sky"],
        ["What is cirrocumulus?","small, rounded white puffs; clouds that form long rows in the sky"],
        ["What is cumulus?","big, white puffy clouds"],
        ["What is cumulonimbus?","large, gray cumulus clouds that are heavy with water"],
        ["What is stratus?","low, flat clouds that bring rain or snow"],
        ["What is atmosphere?","the entire mass of fluid, air, and vapors surrounding the earth"],
        ["What is a climate?","an average of the high and low temperatures in an area on the earth over a long period of time (about 30 years)"],
        ["What is weather?","the condition of the atmosphere at any given moment"]
    ]
}
geo1l10={
    qa: [
        ["What iscartography?","the study of making maps"],
        ["What is geography?","a description of the earth and the people who live on it"],
        ["What is mathematical geography?","a description of the earth and space using numbers and measurements"],
        ["What is the earth's orbit?","the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once."],
        ["What is the earth's axis?","a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours."],
        ["What is shape (in geographical terms)?","the outline of an area or figure"],
        ["What is form?","an object that is not flat but has height, width, and depth (three-dimensional)"],
        ["What is a relief map?","a map or model that includes three-dimensional (3D) forms"],
        ["What is a cloud?","a grouping of tiny water drops and/or ice crystals that float in the air"],
        ["What is cirrus?","thin, wispy clouds found high in the sky"],
        ["What is cirrocumulus?","small, rounded white puffs; clouds that form long rows in the sky"],
        ["What is cumulus?","big, white puffy clouds"],
        ["What is cumulonimbus?","large, gray cumulus clouds that are heavy with water"],
        ["What is stratus?","low, flat clouds that bring rain or snow"],
        ["What is atmosphere?","the entire mass of fluid, air, and vapors surrounding the earth"],
        ["What is a climate?","an average of the high and low temperatures in an area on the earth over a long period of time (about 30 years)"],
        ["What is weather?","the condition of the atmosphere at any given moment"],
        ["What is a hydrosphere?","all of the water contained on the earth; divided into two sections: oceanic waters and continental waters"],
        ["What is a gulf?","a large extension of an ocean or sea into the land"],
        ["What is a bay?","a body of water smaller than a gulf that is nearly surrounded by land"],
        ["What is a fjord?","a narrow inlet of the sea with steep banks made by a glacier"],
        ["What is a harbor?","a part of an ocean or lake next to land that is protected and deep enough for ships to anchor"]        
    ]
}
geo1l11={
    qa: [
        ["What iscartography?","the study of making maps"],
        ["What is geography?","a description of the earth and the people who live on it"],
        ["What is mathematical geography?","a description of the earth and space using numbers and measurements"],
        ["What is the earth's orbit?","the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once."],
        ["What is the earth's axis?","a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours."],
        ["What is shape (in geographical terms)?","the outline of an area or figure"],
        ["What is form?","an object that is not flat but has height, width, and depth (three-dimensional)"],
        ["What is a relief map?","a map or model that includes three-dimensional (3D) forms"],
        ["What is a cloud?","a grouping of tiny water drops and/or ice crystals that float in the air"],
        ["What is cirrus?","thin, wispy clouds found high in the sky"],
        ["What is cirrocumulus?","small, rounded white puffs; clouds that form long rows in the sky"],
        ["What is cumulus?","big, white puffy clouds"],
        ["What is cumulonimbus?","large, gray cumulus clouds that are heavy with water"],
        ["What is stratus?","low, flat clouds that bring rain or snow"],
        ["What is atmosphere?","the entire mass of fluid, air, and vapors surrounding the earth"],
        ["What is a climate?","an average of the high and low temperatures in an area on the earth over a long period of time (about 30 years)"],
        ["What is weather?","the condition of the atmosphere at any given moment"],
        ["What is a hydrosphere?","all of the water contained on the earth; divided into two sections: oceanic waters and continental waters"],
        ["What is a gulf?","a large extension of an ocean or sea into the land"],
        ["What is a bay?","a body of water smaller than a gulf that is nearly surrounded by land"],
        ["What is a fjord?","a narrow inlet of the sea with steep banks made by a glacier"],
        ["What is a harbor?","a part of an ocean or lake next to land that is protected and deep enough for ships to anchor"],
        ["What is a glacier?","large body of slowly moving ice flowing downward from the mountains"],
        ["What is a river?","large stream of water flowing through land"],
        ["What is a lake?","large body of water surrounded by land"],
        ["What is a saltwater lake?","lake which has water entering, but no outlet, so the water is salty"]
        
    ]
}
geo1l12={
    qa: [
        ["What iscartography?","the study of making maps"],
        ["What is geography?","a description of the earth and the people who live on it"],
        ["What is mathematical geography?","a description of the earth and space using numbers and measurements"],
        ["What is the earth's orbit?","the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once."],
        ["What is the earth's axis?","a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours."],
        ["What is shape (in geographical terms)?","the outline of an area or figure"],
        ["What is form?","an object that is not flat but has height, width, and depth (three-dimensional)"],
        ["What is a relief map?","a map or model that includes three-dimensional (3D) forms"],
        ["What is a cloud?","a grouping of tiny water drops and/or ice crystals that float in the air"],
        ["What is cirrus?","thin, wispy clouds found high in the sky"],
        ["What is cirrocumulus?","small, rounded white puffs; clouds that form long rows in the sky"],
        ["What is cumulus?","big, white puffy clouds"],
        ["What is cumulonimbus?","large, gray cumulus clouds that are heavy with water"],
        ["What is stratus?","low, flat clouds that bring rain or snow"],
        ["What is atmosphere?","the entire mass of fluid, air, and vapors surrounding the earth"],
        ["What is a climate?","an average of the high and low temperatures in an area on the earth over a long period of time (about 30 years)"],
        ["What is weather?","the condition of the atmosphere at any given moment"],
        ["What is a hydrosphere?","all of the water contained on the earth; divided into two sections: oceanic waters and continental waters"],
        ["What is a gulf?","a large extension of an ocean or sea into the land"],
        ["What is a bay?","a body of water smaller than a gulf that is nearly surrounded by land"],
        ["What is a fjord?","a narrow inlet of the sea with steep banks made by a glacier"],
        ["What is a harbor?","a part of an ocean or lake next to land that is protected and deep enough for ships to anchor"],
        ["What is a glacier?","large body of slowly moving ice flowing downward from the mountains"],
        ["What is a river?","large stream of water flowing through land"],
        ["What is a lake?","large body of water surrounded by land"],
        ["What is a saltwater lake?","lake which has water entering, but no outlet, so the water is salty"],
        ["What is a groundwater?","he water found beneath the surface of the ground"],
        ["What is a channel?","deep, narrow body of water connecting two larger bodies of water"],
        ["What is a lock?","a device used for raising and lowering boats, ships, and other watercraft between stretches of water of different levels on rivers and canals"],
        ["What is a canal?","a man-made ditch for transporting people and things"]
        
    ]
}
geo1l13={
    qa: [
        ["What iscartography?","the study of making maps"],
        ["What is geography?","a description of the earth and the people who live on it"],
        ["What is mathematical geography?","a description of the earth and space using numbers and measurements"],
        ["What is the earth's orbit?","the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once."],
        ["What is the earth's axis?","a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours."],
        ["What is shape (in geographical terms)?","the outline of an area or figure"],
        ["What is form?","an object that is not flat but has height, width, and depth (three-dimensional)"],
        ["What is a relief map?","a map or model that includes three-dimensional (3D) forms"],
        ["What is a cloud?","a grouping of tiny water drops and/or ice crystals that float in the air"],
        ["What is cirrus?","thin, wispy clouds found high in the sky"],
        ["What is cirrocumulus?","small, rounded white puffs; clouds that form long rows in the sky"],
        ["What is cumulus?","big, white puffy clouds"],
        ["What is cumulonimbus?","large, gray cumulus clouds that are heavy with water"],
        ["What is stratus?","low, flat clouds that bring rain or snow"],
        ["What is atmosphere?","the entire mass of fluid, air, and vapors surrounding the earth"],
        ["What is a climate?","an average of the high and low temperatures in an area on the earth over a long period of time (about 30 years)"],
        ["What is weather?","the condition of the atmosphere at any given moment"],
        ["What is a hydrosphere?","all of the water contained on the earth; divided into two sections: oceanic waters and continental waters"],
        ["What is a gulf?","a large extension of an ocean or sea into the land"],
        ["What is a bay?","a body of water smaller than a gulf that is nearly surrounded by land"],
        ["What is a fjord?","a narrow inlet of the sea with steep banks made by a glacier"],
        ["What is a harbor?","a part of an ocean or lake next to land that is protected and deep enough for ships to anchor"],
        ["What is a glacier?","large body of slowly moving ice flowing downward from the mountains"],
        ["What is a river?","large stream of water flowing through land"],
        ["What is a lake?","large body of water surrounded by land"],
        ["What is a saltwater lake?","lake which has water entering, but no outlet, so the water is salty"],
        ["What is a groundwater?","he water found beneath the surface of the ground"],
        ["What is a channel?","deep, narrow body of water connecting two larger bodies of water"],
        ["What is a lock?","a device used for raising and lowering boats, ships, and other watercraft between stretches of water of different levels on rivers and canals"],
        ["What is a canal?","a man-made ditch for transporting people and things"],
        ["What is a valley?","lowland between hills or mountains"],
        ["What is a canyon?","a deep, narrow valley with steep walls"]
        
    ]
}
geo1l14={
    qa: [
        ["What iscartography?","the study of making maps"],
        ["What is geography?","a description of the earth and the people who live on it"],
        ["What is mathematical geography?","a description of the earth and space using numbers and measurements"],
        ["What is the earth's orbit?","the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once."],
        ["What is the earth's axis?","a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours."],
        ["What is shape (in geographical terms)?","the outline of an area or figure"],
        ["What is form?","an object that is not flat but has height, width, and depth (three-dimensional)"],
        ["What is a relief map?","a map or model that includes three-dimensional (3D) forms"],
        ["What is a cloud?","a grouping of tiny water drops and/or ice crystals that float in the air"],
        ["What is cirrus?","thin, wispy clouds found high in the sky"],
        ["What is cirrocumulus?","small, rounded white puffs; clouds that form long rows in the sky"],
        ["What is cumulus?","big, white puffy clouds"],
        ["What is cumulonimbus?","large, gray cumulus clouds that are heavy with water"],
        ["What is stratus?","low, flat clouds that bring rain or snow"],
        ["What is atmosphere?","the entire mass of fluid, air, and vapors surrounding the earth"],
        ["What is a climate?","an average of the high and low temperatures in an area on the earth over a long period of time (about 30 years)"],
        ["What is weather?","the condition of the atmosphere at any given moment"],
        ["What is a hydrosphere?","all of the water contained on the earth; divided into two sections: oceanic waters and continental waters"],
        ["What is a gulf?","a large extension of an ocean or sea into the land"],
        ["What is a bay?","a body of water smaller than a gulf that is nearly surrounded by land"],
        ["What is a fjord?","a narrow inlet of the sea with steep banks made by a glacier"],
        ["What is a harbor?","a part of an ocean or lake next to land that is protected and deep enough for ships to anchor"],
        ["What is a glacier?","large body of slowly moving ice flowing downward from the mountains"],
        ["What is a river?","large stream of water flowing through land"],
        ["What is a lake?","large body of water surrounded by land"],
        ["What is a saltwater lake?","lake which has water entering, but no outlet, so the water is salty"],
        ["What is a groundwater?","he water found beneath the surface of the ground"],
        ["What is a channel?","deep, narrow body of water connecting two larger bodies of water"],
        ["What is a lock?","a device used for raising and lowering boats, ships, and other watercraft between stretches of water of different levels on rivers and canals"],
        ["What is a canal?","a man-made ditch for transporting people and things"],
        ["What is a valley?","lowland between hills or mountains"],
        ["What is a canyon?","a deep, narrow valley with steep walls"],
        ["What is a mountain?","high, rocky land, usually with steep sides and a pointed or rounded top, higher than a hill"],
        ["What is a hill?","raised part of the earth’s surface, with sloping slides; smaller than a mountain"],
        ["What is a mountain range?","mountain range —a group of mountains bordered by lowlands"],
        ["What is a divide?","a height of land that separates river basins"],
        ["What is a beach?","a narrow, gently sloping strip of land along the edge of a body of water"]
         
    ]
}
geo1l15={
    qa: [
        ["What iscartography?","the study of making maps"],
        ["What is geography?","a description of the earth and the people who live on it"],
        ["What is mathematical geography?","a description of the earth and space using numbers and measurements"],
        ["What is the earth's orbit?","the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once."],
        ["What is the earth's axis?","a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours."],
        ["What is shape (in geographical terms)?","the outline of an area or figure"],
        ["What is form?","an object that is not flat but has height, width, and depth (three-dimensional)"],
        ["What is a relief map?","a map or model that includes three-dimensional (3D) forms"],
        ["What is a cloud?","a grouping of tiny water drops and/or ice crystals that float in the air"],
        ["What is cirrus?","thin, wispy clouds found high in the sky"],
        ["What is cirrocumulus?","small, rounded white puffs; clouds that form long rows in the sky"],
        ["What is cumulus?","big, white puffy clouds"],
        ["What is cumulonimbus?","large, gray cumulus clouds that are heavy with water"],
        ["What is stratus?","low, flat clouds that bring rain or snow"],
        ["What is atmosphere?","the entire mass of fluid, air, and vapors surrounding the earth"],
        ["What is a climate?","an average of the high and low temperatures in an area on the earth over a long period of time (about 30 years)"],
        ["What is weather?","the condition of the atmosphere at any given moment"],
        ["What is a hydrosphere?","all of the water contained on the earth; divided into two sections: oceanic waters and continental waters"],
        ["What is a gulf?","a large extension of an ocean or sea into the land"],
        ["What is a bay?","a body of water smaller than a gulf that is nearly surrounded by land"],
        ["What is a fjord?","a narrow inlet of the sea with steep banks made by a glacier"],
        ["What is a harbor?","a part of an ocean or lake next to land that is protected and deep enough for ships to anchor"],
        ["What is a glacier?","large body of slowly moving ice flowing downward from the mountains"],
        ["What is a river?","large stream of water flowing through land"],
        ["What is a lake?","large body of water surrounded by land"],
        ["What is a saltwater lake?","lake which has water entering, but no outlet, so the water is salty"],
        ["What is a groundwater?","he water found beneath the surface of the ground"],
        ["What is a channel?","deep, narrow body of water connecting two larger bodies of water"],
        ["What is a lock?","a device used for raising and lowering boats, ships, and other watercraft between stretches of water of different levels on rivers and canals"],
        ["What is a canal?","a man-made ditch for transporting people and things"],
        ["What is a valley?","lowland between hills or mountains"],
        ["What is a canyon?","a deep, narrow valley with steep walls"],
        ["What is a mountain?","high, rocky land, usually with steep sides and a pointed or rounded top, higher than a hill"],
        ["What is a hill?","raised part of the earth’s surface, with sloping slides; smaller than a mountain"],
        ["What is a mountain range?","mountain range —a group of mountains bordered by lowlands"],
        ["What is a divide?","a height of land that separates river basins"],
        ["What is a beach?","a narrow, gently sloping strip of land along the edge of a body of water"],
        ["What is a basin?","an area of land drained by a river that is largely enclosed by higher land"],
        ["What is a plateau?","region that is mostly high and flat"],
        ["What is a plain?","broad, level land"],
        ["What is a island?","a piece of land  entirely surrounded by water, smaller than a continent"]
        
    ]
}
geo1l16={
    qa: [
        ["What iscartography?","the study of making maps"],
        ["What is geography?","a description of the earth and the people who live on it"],
        ["What is mathematical geography?","a description of the earth and space using numbers and measurements"],
        ["What is the earth's orbit?","the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once."],
        ["What is the earth's axis?","a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours."],
        ["What is shape (in geographical terms)?","the outline of an area or figure"],
        ["What is form?","an object that is not flat but has height, width, and depth (three-dimensional)"],
        ["What is a relief map?","a map or model that includes three-dimensional (3D) forms"],
        ["What is a cloud?","a grouping of tiny water drops and/or ice crystals that float in the air"],
        ["What is cirrus?","thin, wispy clouds found high in the sky"],
        ["What is cirrocumulus?","small, rounded white puffs; clouds that form long rows in the sky"],
        ["What is cumulus?","big, white puffy clouds"],
        ["What is cumulonimbus?","large, gray cumulus clouds that are heavy with water"],
        ["What is stratus?","low, flat clouds that bring rain or snow"],
        ["What is atmosphere?","the entire mass of fluid, air, and vapors surrounding the earth"],
        ["What is a climate?","an average of the high and low temperatures in an area on the earth over a long period of time (about 30 years)"],
        ["What is weather?","the condition of the atmosphere at any given moment"],
        ["What is a hydrosphere?","all of the water contained on the earth; divided into two sections: oceanic waters and continental waters"],
        ["What is a gulf?","a large extension of an ocean or sea into the land"],
        ["What is a bay?","a body of water smaller than a gulf that is nearly surrounded by land"],
        ["What is a fjord?","a narrow inlet of the sea with steep banks made by a glacier"],
        ["What is a harbor?","a part of an ocean or lake next to land that is protected and deep enough for ships to anchor"],
        ["What is a glacier?","large body of slowly moving ice flowing downward from the mountains"],
        ["What is a river?","large stream of water flowing through land"],
        ["What is a lake?","large body of water surrounded by land"],
        ["What is a saltwater lake?","lake which has water entering, but no outlet, so the water is salty"],
        ["What is a groundwater?","he water found beneath the surface of the ground"],
        ["What is a channel?","deep, narrow body of water connecting two larger bodies of water"],
        ["What is a lock?","a device used for raising and lowering boats, ships, and other watercraft between stretches of water of different levels on rivers and canals"],
        ["What is a canal?","a man-made ditch for transporting people and things"],
        ["What is a valley?","lowland between hills or mountains"],
        ["What is a canyon?","a deep, narrow valley with steep walls"],
        ["What is a mountain?","high, rocky land, usually with steep sides and a pointed or rounded top, higher than a hill"],
        ["What is a hill?","raised part of the earth’s surface, with sloping slides; smaller than a mountain"],
        ["What is a mountain range?","mountain range —a group of mountains bordered by lowlands"],
        ["What is a divide?","a height of land that separates river basins"],
        ["What is a beach?","a narrow, gently sloping strip of land along the edge of a body of water"],
        ["What is a basin?","an area of land drained by a river that is largely enclosed by higher land"],
        ["What is a plateau?","region that is mostly high and flat"],
        ["What is a plain?","broad, level land"],
        ["What is a island?","a piece of land  entirely surrounded by water, smaller than a continent"],
        ["What is a volcano?","an opening in the earth’s crust through which lava, volcanic ash, and gases escape."],
        ["What is a lava?","molten rock on the earth’s surface"],
        ["What is a magma?","molten rock within the earth"]
    ]
}
geo2l2={
    qa: [
        ["What is a hydrosphere?","all of the water contained on the earth; divided into two sections: oceanic waters and continental waters"],
        ["What is a gulf?","a large extension of an ocean or sea into the land"],
        ["What is a bay?","a body of water smaller than a gulf that is nearly surrounded by land"],
        ["What is a fjord?","a narrow inlet of the sea with steep banks made by a glacier"],
        ["What is a harbor?","a part of an ocean or lake next to land that is protected and deep enough for ships to anchor"],
        ["What is a glacier?","large body of slowly moving ice flowing downward from the mountains"],
        ["What is a river?","large stream of water flowing through land"],
        ["What is a lake?","large body of water surrounded by land"],
        ["What is a saltwater lake?","lake which has water entering, but no outlet, so the water is salty"],
        ["What is a groundwater?","he water found beneath the surface of the ground"],
        ["What is a channel?","deep, narrow body of water connecting two larger bodies of water"],
        ["What is a lock?","a device used for raising and lowering boats, ships, and other watercraft between stretches of water of different levels on rivers and canals"],
        ["What is a canal?","a man-made ditch for transporting people and things"],
        ["What is a valley?","lowland between hills or mountains"],
        ["What is a canyon?","a deep, narrow valley with steep walls"],
        ["What is a mountain?","high, rocky land, usually with steep sides and a pointed or rounded top, higher than a hill"],
        ["What is a hill?","raised part of the earth’s surface, with sloping slides; smaller than a mountain"],
        ["What is a mountain range?","mountain range —a group of mountains bordered by lowlands"],
        ["What is a divide?","a height of land that separates river basins"],
        ["What is a beach?","a narrow, gently sloping strip of land along the edge of a body of water"],
        ["What is a basin?","an area of land drained by a river that is largely enclosed by higher land"],
        ["What is a plateau?","region that is mostly high and flat"],
        ["What is a plain?","broad, level land"],
        ["What is a island?","a piece of land  entirely surrounded by water, smaller than a continent"],
        ["What is a volcano?","an opening in the earth’s crust through which lava, volcanic ash, and gases escape."],
        ["What is a lava?","molten rock on the earth’s surface"],
        ["What is a magma?","molten rock within the earth"],
        ["What is a biome?","a very large area of the earth’s surface that has a particular climate, soil, and elevation"]
        
    ]
}
geo2l3={
    qa: [
        ["What iscartography?","the study of making maps"],
        ["What is geography?","a description of the earth and the people who live on it"],
        ["What is mathematical geography?","a description of the earth and space using numbers and measurements"],
        ["What is the earth's orbit?","the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once."],
        ["What is the earth's axis?","a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours."],
        ["What is shape (in geographical terms)?","the outline of an area or figure"],
        ["What is form?","an object that is not flat but has height, width, and depth (three-dimensional)"],
        ["What is a relief map?","a map or model that includes three-dimensional (3D) forms"],
        ["What is a cloud?","a grouping of tiny water drops and/or ice crystals that float in the air"],
        ["What is cirrus?","thin, wispy clouds found high in the sky"],
        ["What is cirrocumulus?","small, rounded white puffs; clouds that form long rows in the sky"],
        ["What is cumulus?","big, white puffy clouds"],
        ["What is cumulonimbus?","large, gray cumulus clouds that are heavy with water"],
        ["What is stratus?","low, flat clouds that bring rain or snow"],
        ["What is atmosphere?","the entire mass of fluid, air, and vapors surrounding the earth"],
        ["What is a climate?","an average of the high and low temperatures in an area on the earth over a long period of time (about 30 years)"],
        ["What is weather?","the condition of the atmosphere at any given moment"],
        ["What is a hydrosphere?","all of the water contained on the earth; divided into two sections: oceanic waters and continental waters"],
        ["What is a gulf?","a large extension of an ocean or sea into the land"],
        ["What is a bay?","a body of water smaller than a gulf that is nearly surrounded by land"],
        ["What is a fjord?","a narrow inlet of the sea with steep banks made by a glacier"],
        ["What is a harbor?","a part of an ocean or lake next to land that is protected and deep enough for ships to anchor"],
        ["What is a glacier?","large body of slowly moving ice flowing downward from the mountains"],
        ["What is a river?","large stream of water flowing through land"],
        ["What is a lake?","large body of water surrounded by land"],
        ["What is a saltwater lake?","lake which has water entering, but no outlet, so the water is salty"],
        ["What is a groundwater?","he water found beneath the surface of the ground"],
        ["What is a channel?","deep, narrow body of water connecting two larger bodies of water"],
        ["What is a lock?","a device used for raising and lowering boats, ships, and other watercraft between stretches of water of different levels on rivers and canals"],
        ["What is a canal?","a man-made ditch for transporting people and things"],
        ["What is a biome?","a very large area of the earth’s surface that has a particular climate, soil, and elevation"],
        ["What is a tundra biome?","the coldest biome with long, cold, dark winters"]
        
    ]
}
geo2l4={
    qa: [
        ["What is a hydrosphere?","all of the water contained on the earth; divided into two sections: oceanic waters and continental waters"],
        ["What is a gulf?","a large extension of an ocean or sea into the land"],
        ["What is a bay?","a body of water smaller than a gulf that is nearly surrounded by land"],
        ["What is a fjord?","a narrow inlet of the sea with steep banks made by a glacier"],
        ["What is a harbor?","a part of an ocean or lake next to land that is protected and deep enough for ships to anchor"],
        ["What is a glacier?","large body of slowly moving ice flowing downward from the mountains"],
        ["What is a river?","large stream of water flowing through land"],
        ["What is a lake?","large body of water surrounded by land"],
        ["What is a saltwater lake?","lake which has water entering, but no outlet, so the water is salty"],
        ["What is a groundwater?","he water found beneath the surface of the ground"],
        ["What is a channel?","deep, narrow body of water connecting two larger bodies of water"],
        ["What is a lock?","a device used for raising and lowering boats, ships, and other watercraft between stretches of water of different levels on rivers and canals"],
        ["What is a canal?","a man-made ditch for transporting people and things"],
        ["What is a valley?","lowland between hills or mountains"],
        ["What is a canyon?","a deep, narrow valley with steep walls"],
        ["What is a mountain?","high, rocky land, usually with steep sides and a pointed or rounded top, higher than a hill"],
        ["What is a hill?","raised part of the earth’s surface, with sloping slides; smaller than a mountain"],
        ["What is a mountain range?","mountain range —a group of mountains bordered by lowlands"],
        ["What is a divide?","a height of land that separates river basins"],
        ["What is a beach?","a narrow, gently sloping strip of land along the edge of a body of water"],
        ["What is a basin?","an area of land drained by a river that is largely enclosed by higher land"],
        ["What is a plateau?","region that is mostly high and flat"],
        ["What is a plain?","broad, level land"],
        ["What is a island?","a piece of land  entirely surrounded by water, smaller than a continent"],
        ["What is a volcano?","an opening in the earth’s crust through which lava, volcanic ash, and gases escape."],
        ["What is a lava?","molten rock on the earth’s surface"],
        ["What is a magma?","molten rock within the earth"],
        ["What is a biome?","a very large area of the earth’s surface that has a particular climate, soil, and elevation"],
        ["What is a tundra biome?","the coldest biome with long, cold, dark winters"],
        ["What is a taiga biome?","the largest biome with cold winters and warm, rainy summers"]
         
    ]
}
geo2l5={
    qa: [
        ["What iscartography?","the study of making maps"],
        ["What is geography?","a description of the earth and the people who live on it"],
        ["What is mathematical geography?","a description of the earth and space using numbers and measurements"],
        ["What is the earth's orbit?","the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once."],
        ["What is the earth's axis?","a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours."],
        ["What is shape (in geographical terms)?","the outline of an area or figure"],
        ["What is form?","an object that is not flat but has height, width, and depth (three-dimensional)"],
        ["What is a relief map?","a map or model that includes three-dimensional (3D) forms"],
        ["What is a cloud?","a grouping of tiny water drops and/or ice crystals that float in the air"],
        ["What is cirrus?","thin, wispy clouds found high in the sky"],
        ["What is cirrocumulus?","small, rounded white puffs; clouds that form long rows in the sky"],
        ["What is cumulus?","big, white puffy clouds"],
        ["What is cumulonimbus?","large, gray cumulus clouds that are heavy with water"],
        ["What is stratus?","low, flat clouds that bring rain or snow"],
        ["What is atmosphere?","the entire mass of fluid, air, and vapors surrounding the earth"],
        ["What is a climate?","an average of the high and low temperatures in an area on the earth over a long period of time (about 30 years)"],
        ["What is weather?","the condition of the atmosphere at any given moment"],
        ["What is a hydrosphere?","all of the water contained on the earth; divided into two sections: oceanic waters and continental waters"],
        ["What is a gulf?","a large extension of an ocean or sea into the land"],
        ["What is a bay?","a body of water smaller than a gulf that is nearly surrounded by land"],
        ["What is a fjord?","a narrow inlet of the sea with steep banks made by a glacier"],
        ["What is a harbor?","a part of an ocean or lake next to land that is protected and deep enough for ships to anchor"],
        ["What is a glacier?","large body of slowly moving ice flowing downward from the mountains"],
        ["What is a river?","large stream of water flowing through land"],
        ["What is a lake?","large body of water surrounded by land"],
        ["What is a saltwater lake?","lake which has water entering, but no outlet, so the water is salty"],
        ["What is a groundwater?","he water found beneath the surface of the ground"],
        ["What is a channel?","deep, narrow body of water connecting two larger bodies of water"],
        ["What is a lock?","a device used for raising and lowering boats, ships, and other watercraft between stretches of water of different levels on rivers and canals"],
        ["What is a canal?","a man-made ditch for transporting people and things"],
        ["What is a biome?","a very large area of the earth’s surface that has a particular climate, soil, and elevation"],
        ["What is a tundra biome?","the coldest biome with long, cold, dark winters"],
        ["What is a taiga biome?","the largest biome with cold winters and warm, rainy summers"],
        ["What is a temperate rain forest?","a wet and rainy biome that experiences all four seasons"]
        
    ]
}
geo2l6={
    qa: [
        ["What iscartography?","the study of making maps"],
        ["What is geography?","a description of the earth and the people who live on it"],
        ["What is mathematical geography?","a description of the earth and space using numbers and measurements"],
        ["What is the earth's orbit?","the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once."],
        ["What is the earth's axis?","a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours."],
        ["What is shape (in geographical terms)?","the outline of an area or figure"],
        ["What is form?","an object that is not flat but has height, width, and depth (three-dimensional)"],
        ["What is a relief map?","a map or model that includes three-dimensional (3D) forms"],
        ["What is a cloud?","a grouping of tiny water drops and/or ice crystals that float in the air"],
        ["What is cirrus?","thin, wispy clouds found high in the sky"],
        ["What is cirrocumulus?","small, rounded white puffs; clouds that form long rows in the sky"],
        ["What is cumulus?","big, white puffy clouds"],
        ["What is cumulonimbus?","large, gray cumulus clouds that are heavy with water"],
        ["What is stratus?","low, flat clouds that bring rain or snow"],
        ["What is atmosphere?","the entire mass of fluid, air, and vapors surrounding the earth"],
        ["What is a climate?","an average of the high and low temperatures in an area on the earth over a long period of time (about 30 years)"],
        ["What is weather?","the condition of the atmosphere at any given moment"],
        ["What is a biome?","a very large area of the earth’s surface that has a particular climate, soil, and elevation"],
        ["What is a tundra biome?","the coldest biome with long, cold, dark winters"],
        ["What is a taiga biome?","the largest biome with cold winters and warm, rainy summers"],
        ["What is a temperate rain forest?","a wet and rainy biome that experiences all four seasons"],
        ["What is an alpine biome?","a cold and windy biome in high mountains"]
        
    ]
}
geo2l7={
    qa: [
        ["What is a hydrosphere?","all of the water contained on the earth; divided into two sections: oceanic waters and continental waters"],
        ["What is a gulf?","a large extension of an ocean or sea into the land"],
        ["What is a bay?","a body of water smaller than a gulf that is nearly surrounded by land"],
        ["What is a fjord?","a narrow inlet of the sea with steep banks made by a glacier"],
        ["What is a harbor?","a part of an ocean or lake next to land that is protected and deep enough for ships to anchor"],
        ["What is a glacier?","large body of slowly moving ice flowing downward from the mountains"],
        ["What is a river?","large stream of water flowing through land"],
        ["What is a lake?","large body of water surrounded by land"],
        ["What is a saltwater lake?","lake which has water entering, but no outlet, so the water is salty"],
        ["What is a groundwater?","he water found beneath the surface of the ground"],
        ["What is a channel?","deep, narrow body of water connecting two larger bodies of water"],
        ["What is a lock?","a device used for raising and lowering boats, ships, and other watercraft between stretches of water of different levels on rivers and canals"],
        ["What is a canal?","a man-made ditch for transporting people and things"],
        ["What is a biome?","a very large area of the earth’s surface that has a particular climate, soil, and elevation"],
        ["What is a tundra biome?","the coldest biome with long, cold, dark winters"],
        ["What is a taiga biome?","the largest biome with cold winters and warm, rainy summers"],
        ["What is a temperate rain forest?","a wet and rainy biome that experiences all four seasons"],
        ["What is an alpine biome?","a cold and windy biome in high mountains"],
        ["What is a chaparral biome?","a biome with wet winters and long, dry summers"]
        
    ]
}
geo2l8={
    qa: [
        ["What is a valley?","lowland between hills or mountains"],
        ["What is a canyon?","a deep, narrow valley with steep walls"],
        ["What is a mountain?","high, rocky land, usually with steep sides and a pointed or rounded top, higher than a hill"],
        ["What is a hill?","raised part of the earth’s surface, with sloping slides; smaller than a mountain"],
        ["What is a mountain range?","mountain range —a group of mountains bordered by lowlands"],
        ["What is a divide?","a height of land that separates river basins"],
        ["What is a beach?","a narrow, gently sloping strip of land along the edge of a body of water"],
        ["What is a basin?","an area of land drained by a river that is largely enclosed by higher land"],
        ["What is a plateau?","region that is mostly high and flat"],
        ["What is a plain?","broad, level land"],
        ["What is a island?","a piece of land  entirely surrounded by water, smaller than a continent"],
        ["What is a volcano?","an opening in the earth’s crust through which lava, volcanic ash, and gases escape."],
        ["What is a lava?","molten rock on the earth’s surface"],
        ["What is a magma?","molten rock within the earth"],
        ["What is a biome?","a very large area of the earth’s surface that has a particular climate, soil, and elevation"],
        ["What is a tundra biome?","the coldest biome with long, cold, dark winters"],
        ["What is a taiga biome?","the largest biome with cold winters and warm, rainy summers"],
        ["What is a temperate rain forest?","a wet and rainy biome that experiences all four seasons"],
        ["What is an alpine biome?","a cold and windy biome in high mountains"],
        ["What is a chaparral biome?","a biome with wet winters and long, dry summers"],
        ["What is a grassland bome?","a biome with only enough rain for grasses and flowers, but few if any trees"]
        
    ]
}
geo2l9={
    qa: [
        ["What iscartography?","the study of making maps"],
        ["What is geography?","a description of the earth and the people who live on it"],
        ["What is mathematical geography?","a description of the earth and space using numbers and measurements"],
        ["What is the earth's orbit?","the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once."],
        ["What is the earth's axis?","a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours."],
        ["What is shape (in geographical terms)?","the outline of an area or figure"],
        ["What is form?","an object that is not flat but has height, width, and depth (three-dimensional)"],
        ["What is a relief map?","a map or model that includes three-dimensional (3D) forms"],
        ["What is a cloud?","a grouping of tiny water drops and/or ice crystals that float in the air"],
        ["What is cirrus?","thin, wispy clouds found high in the sky"],
        ["What is cirrocumulus?","small, rounded white puffs; clouds that form long rows in the sky"],
        ["What is cumulus?","big, white puffy clouds"],
        ["What is cumulonimbus?","large, gray cumulus clouds that are heavy with water"],
        ["What is stratus?","low, flat clouds that bring rain or snow"],
        ["What is atmosphere?","the entire mass of fluid, air, and vapors surrounding the earth"],
        ["What is a climate?","an average of the high and low temperatures in an area on the earth over a long period of time (about 30 years)"],
        ["What is weather?","the condition of the atmosphere at any given moment"],
        ["What is a biome?","a very large area of the earth’s surface that has a particular climate, soil, and elevation"],
        ["What is a tundra biome?","the coldest biome with long, cold, dark winters"],
        ["What is a taiga biome?","the largest biome with cold winters and warm, rainy summers"],
        ["What is a temperate rain forest?","a wet and rainy biome that experiences all four seasons"],
        ["What is an alpine biome?","a cold and windy biome in high mountains"],
        ["What is a chaparral biome?","a biome with wet winters and long, dry summers"],
        ["What is a grassland bome?","a biome with only enough rain for grasses and flowers, but few if any trees"],
        ["What is a deciduous forest biome?","a biome with many deciduous trees that lose their leaves in the autumn and experiences all four seasons"]
        
    ]
}
geo2l10={
    qa: [
        ["What is a hydrosphere?","all of the water contained on the earth; divided into two sections: oceanic waters and continental waters"],
        ["What is a gulf?","a large extension of an ocean or sea into the land"],
        ["What is a bay?","a body of water smaller than a gulf that is nearly surrounded by land"],
        ["What is a fjord?","a narrow inlet of the sea with steep banks made by a glacier"],
        ["What is a harbor?","a part of an ocean or lake next to land that is protected and deep enough for ships to anchor"],
        ["What is a glacier?","large body of slowly moving ice flowing downward from the mountains"],
        ["What is a river?","large stream of water flowing through land"],
        ["What is a lake?","large body of water surrounded by land"],
        ["What is a saltwater lake?","lake which has water entering, but no outlet, so the water is salty"],
        ["What is a groundwater?","he water found beneath the surface of the ground"],
        ["What is a channel?","deep, narrow body of water connecting two larger bodies of water"],
        ["What is a lock?","a device used for raising and lowering boats, ships, and other watercraft between stretches of water of different levels on rivers and canals"],
        ["What is a canal?","a man-made ditch for transporting people and things"],
        ["What is a biome?","a very large area of the earth’s surface that has a particular climate, soil, and elevation"],
        ["What is a tundra biome?","the coldest biome with long, cold, dark winters"],
        ["What is a taiga biome?","the largest biome with cold winters and warm, rainy summers"],
        ["What is a temperate rain forest?","a wet and rainy biome that experiences all four seasons"],
        ["What is an alpine biome?","a cold and windy biome in high mountains"],
        ["What is a chaparral biome?","a biome with wet winters and long, dry summers"],
        ["What is a grassland bome?","a biome with only enough rain for grasses and flowers, but few if any trees"],
        ["What is a deciduous forest biome?","a biome with many deciduous trees that lose their leaves in the autumn and experiences all four seasons"],
        ["What is a desert biome?","a very hot and dry biome with plants and animals that have often adapted to store water"]
        
    ]
}
geo2l11={
    qa: [
        ["What is a valley?","lowland between hills or mountains"],
        ["What is a canyon?","a deep, narrow valley with steep walls"],
        ["What is a mountain?","high, rocky land, usually with steep sides and a pointed or rounded top, higher than a hill"],
        ["What is a hill?","raised part of the earth’s surface, with sloping slides; smaller than a mountain"],
        ["What is a mountain range?","mountain range —a group of mountains bordered by lowlands"],
        ["What is a divide?","a height of land that separates river basins"],
        ["What is a beach?","a narrow, gently sloping strip of land along the edge of a body of water"],
        ["What is a basin?","an area of land drained by a river that is largely enclosed by higher land"],
        ["What is a plateau?","region that is mostly high and flat"],
        ["What is a plain?","broad, level land"],
        ["What is a island?","a piece of land  entirely surrounded by water, smaller than a continent"],
        ["What is a volcano?","an opening in the earth’s crust through which lava, volcanic ash, and gases escape."],
        ["What is a lava?","molten rock on the earth’s surface"],
        ["What is a magma?","molten rock within the earth"],
        ["What is a biome?","a very large area of the earth’s surface that has a particular climate, soil, and elevation"],
        ["What is a tundra biome?","the coldest biome with long, cold, dark winters"],
        ["What is a taiga biome?","the largest biome with cold winters and warm, rainy summers"],
        ["What is a temperate rain forest?","a wet and rainy biome that experiences all four seasons"],
        ["What is an alpine biome?","a cold and windy biome in high mountains"],
        ["What is a chaparral biome?","a biome with wet winters and long, dry summers"],
        ["What is a grassland bome?","a biome with only enough rain for grasses and flowers, but few if any trees"],
        ["What is a deciduous forest biome?","a biome with many deciduous trees that lose their leaves in the autumn and experiences all four seasons"],
        ["What is a desert biome?","a very hot and dry biome with plants and animals that have often adapted to store water"],
        ["What is a tropical seasonal forest?","a biome with a dry season and wet season"]
        
    ]
}
geo2l12={
    qa: [
        ["What iscartography?","the study of making maps"],
        ["What is geography?","a description of the earth and the people who live on it"],
        ["What is mathematical geography?","a description of the earth and space using numbers and measurements"],
        ["What is the earth's orbit?","the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once."],
        ["What is the earth's axis?","a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours."],
        ["What is shape (in geographical terms)?","the outline of an area or figure"],
        ["What is form?","an object that is not flat but has height, width, and depth (three-dimensional)"],
        ["What is a relief map?","a map or model that includes three-dimensional (3D) forms"],
        ["What is a cloud?","a grouping of tiny water drops and/or ice crystals that float in the air"],
        ["What is cirrus?","thin, wispy clouds found high in the sky"],
        ["What is cirrocumulus?","small, rounded white puffs; clouds that form long rows in the sky"],
        ["What is cumulus?","big, white puffy clouds"],
        ["What is cumulonimbus?","large, gray cumulus clouds that are heavy with water"],
        ["What is stratus?","low, flat clouds that bring rain or snow"],
        ["What is atmosphere?","the entire mass of fluid, air, and vapors surrounding the earth"],
        ["What is a climate?","an average of the high and low temperatures in an area on the earth over a long period of time (about 30 years)"],
        ["What is weather?","the condition of the atmosphere at any given moment"],
        ["What is a biome?","a very large area of the earth’s surface that has a particular climate, soil, and elevation"],
        ["What is a tundra biome?","the coldest biome with long, cold, dark winters"],
        ["What is a taiga biome?","the largest biome with cold winters and warm, rainy summers"],
        ["What is a temperate rain forest?","a wet and rainy biome that experiences all four seasons"],
        ["What is an alpine biome?","a cold and windy biome in high mountains"],
        ["What is a chaparral biome?","a biome with wet winters and long, dry summers"],
        ["What is a grassland bome?","a biome with only enough rain for grasses and flowers, but few if any trees"],
        ["What is a deciduous forest biome?","a biome with many deciduous trees that lose their leaves in the autumn and experiences all four seasons"],
        ["What is a desert biome?","a very hot and dry biome with plants and animals that have often adapted to store water"],
        ["What is a tropical seasonal forest?","a biome with a dry season and wet season"],
        ["What is a tropical rain forest?","a warm biome with much rain and plants with large leaves"]
        
    ]
}
geo2l13={
    qa: [
        ["What is a hydrosphere?","all of the water contained on the earth; divided into two sections: oceanic waters and continental waters"],
        ["What is a gulf?","a large extension of an ocean or sea into the land"],
        ["What is a bay?","a body of water smaller than a gulf that is nearly surrounded by land"],
        ["What is a fjord?","a narrow inlet of the sea with steep banks made by a glacier"],
        ["What is a harbor?","a part of an ocean or lake next to land that is protected and deep enough for ships to anchor"],
        ["What is a glacier?","large body of slowly moving ice flowing downward from the mountains"],
        ["What is a river?","large stream of water flowing through land"],
        ["What is a lake?","large body of water surrounded by land"],
        ["What is a saltwater lake?","lake which has water entering, but no outlet, so the water is salty"],
        ["What is a groundwater?","he water found beneath the surface of the ground"],
        ["What is a channel?","deep, narrow body of water connecting two larger bodies of water"],
        ["What is a lock?","a device used for raising and lowering boats, ships, and other watercraft between stretches of water of different levels on rivers and canals"],
        ["What is a canal?","a man-made ditch for transporting people and things"],
        ["What is a biome?","a very large area of the earth’s surface that has a particular climate, soil, and elevation"],
        ["What is a tundra biome?","the coldest biome with long, cold, dark winters"],
        ["What is a taiga biome?","the largest biome with cold winters and warm, rainy summers"],
        ["What is a temperate rain forest?","a wet and rainy biome that experiences all four seasons"],
        ["What is an alpine biome?","a cold and windy biome in high mountains"],
        ["What is a chaparral biome?","a biome with wet winters and long, dry summers"],
        ["What is a grassland bome?","a biome with only enough rain for grasses and flowers, but few if any trees"],
        ["What is a deciduous forest biome?","a biome with many deciduous trees that lose their leaves in the autumn and experiences all four seasons"],
        ["What is a desert biome?","a very hot and dry biome with plants and animals that have often adapted to store water"],
        ["What is a tropical seasonal forest?","a biome with a dry season and wet season"],
        ["What is a tropical rain forest?","a warm biome with much rain and plants with large leaves"],
        ["What is an aquatic biome?","a biome in varieties of water, such as swamps, marshes, rivers, lakes, and oceans"]
        
    ]
}
geo2l14={
    qa: [
        ["What is a valley?","lowland between hills or mountains"],
        ["What is a canyon?","a deep, narrow valley with steep walls"],
        ["What is a mountain?","high, rocky land, usually with steep sides and a pointed or rounded top, higher than a hill"],
        ["What is a hill?","raised part of the earth’s surface, with sloping slides; smaller than a mountain"],
        ["What is a mountain range?","mountain range —a group of mountains bordered by lowlands"],
        ["What is a divide?","a height of land that separates river basins"],
        ["What is a beach?","a narrow, gently sloping strip of land along the edge of a body of water"],
        ["What is a basin?","an area of land drained by a river that is largely enclosed by higher land"],
        ["What is a plateau?","region that is mostly high and flat"],
        ["What is a plain?","broad, level land"],
        ["What is a island?","a piece of land  entirely surrounded by water, smaller than a continent"],
        ["What is a volcano?","an opening in the earth’s crust through which lava, volcanic ash, and gases escape."],
        ["What is a lava?","molten rock on the earth’s surface"],
        ["What is a magma?","molten rock within the earth"],
        ["What is a biome?","a very large area of the earth’s surface that has a particular climate, soil, and elevation"],
        ["What is a tundra biome?","the coldest biome with long, cold, dark winters"],
        ["What is a taiga biome?","the largest biome with cold winters and warm, rainy summers"],
        ["What is a temperate rain forest?","a wet and rainy biome that experiences all four seasons"],
        ["What is an alpine biome?","a cold and windy biome in high mountains"],
        ["What is a chaparral biome?","a biome with wet winters and long, dry summers"],
        ["What is a grassland bome?","a biome with only enough rain for grasses and flowers, but few if any trees"],
        ["What is a deciduous forest biome?","a biome with many deciduous trees that lose their leaves in the autumn and experiences all four seasons"],
        ["What is a desert biome?","a very hot and dry biome with plants and animals that have often adapted to store water"],
        ["What is a tropical seasonal forest?","a biome with a dry season and wet season"],
        ["What is a tropical rain forest?","a warm biome with much rain and plants with large leaves"],
        ["What is an aquatic biome?","a biome in varieties of water, such as swamps, marshes, rivers, lakes, and oceans"],
        ["What does it mean tomigrate?","to move from one region or habitat to another"],
        ["What does it mean toimmigrate?","the act of coming to live permanently in a foreign country"]
        
    ]
}
geo2l15={
    qa: [
        ["What iscartography?","the study of making maps"],
        ["What is geography?","a description of the earth and the people who live on it"],
        ["What is mathematical geography?","a description of the earth and space using numbers and measurements"],
        ["What is the earth's orbit?","the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once."],
        ["What is the earth's axis?","a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours."],
        ["What is shape (in geographical terms)?","the outline of an area or figure"],
        ["What is form?","an object that is not flat but has height, width, and depth (three-dimensional)"],
        ["What is a relief map?","a map or model that includes three-dimensional (3D) forms"],
        ["What is a cloud?","a grouping of tiny water drops and/or ice crystals that float in the air"],
        ["What is cirrus?","thin, wispy clouds found high in the sky"],
        ["What is cirrocumulus?","small, rounded white puffs; clouds that form long rows in the sky"],
        ["What is cumulus?","big, white puffy clouds"],
        ["What is cumulonimbus?","large, gray cumulus clouds that are heavy with water"],
        ["What is stratus?","low, flat clouds that bring rain or snow"],
        ["What is atmosphere?","the entire mass of fluid, air, and vapors surrounding the earth"],
        ["What is a climate?","an average of the high and low temperatures in an area on the earth over a long period of time (about 30 years)"],
        ["What is weather?","the condition of the atmosphere at any given moment"],
        ["What is a biome?","a very large area of the earth’s surface that has a particular climate, soil, and elevation"],
        ["What is a tundra biome?","the coldest biome with long, cold, dark winters"],
        ["What is a taiga biome?","the largest biome with cold winters and warm, rainy summers"],
        ["What is a temperate rain forest?","a wet and rainy biome that experiences all four seasons"],
        ["What is an alpine biome?","a cold and windy biome in high mountains"],
        ["What is a chaparral biome?","a biome with wet winters and long, dry summers"],
        ["What is a grassland bome?","a biome with only enough rain for grasses and flowers, but few if any trees"],
        ["What is a deciduous forest biome?","a biome with many deciduous trees that lose their leaves in the autumn and experiences all four seasons"],
        ["What is a desert biome?","a very hot and dry biome with plants and animals that have often adapted to store water"],
        ["What is a tropical seasonal forest?","a biome with a dry season and wet season"],
        ["What is a tropical rain forest?","a warm biome with much rain and plants with large leaves"],
        ["What is an aquatic biome?","a biome in varieties of water, such as swamps, marshes, rivers, lakes, and oceans"],
        ["What does it mean tomigrate?","to move from one region or habitat to another"],
        ["What does it mean toimmigrate?","the act of coming to live permanently in a foreign country"],
        ["What is a passport?","an official government document given to a person by their government that lets government officials from other countries know your identity and your citizenship"]
        
    ]
}
geo2l16={
    qa: [
        ["What is a hydrosphere?","all of the water contained on the earth; divided into two sections: oceanic waters and continental waters"],
        ["What is a gulf?","a large extension of an ocean or sea into the land"],
        ["What is a bay?","a body of water smaller than a gulf that is nearly surrounded by land"],
        ["What is a fjord?","a narrow inlet of the sea with steep banks made by a glacier"],
        ["What is a harbor?","a part of an ocean or lake next to land that is protected and deep enough for ships to anchor"],
        ["What is a glacier?","large body of slowly moving ice flowing downward from the mountains"],
        ["What is a river?","large stream of water flowing through land"],
        ["What is a lake?","large body of water surrounded by land"],
        ["What is a saltwater lake?","lake which has water entering, but no outlet, so the water is salty"],
        ["What is a groundwater?","he water found beneath the surface of the ground"],
        ["What is a channel?","deep, narrow body of water connecting two larger bodies of water"],
        ["What is a lock?","a device used for raising and lowering boats, ships, and other watercraft between stretches of water of different levels on rivers and canals"],
        ["What is a canal?","a man-made ditch for transporting people and things"],
        ["What is a biome?","a very large area of the earth’s surface that has a particular climate, soil, and elevation"],
        ["What is a tundra biome?","the coldest biome with long, cold, dark winters"],
        ["What is a taiga biome?","the largest biome with cold winters and warm, rainy summers"],
        ["What is a temperate rain forest?","a wet and rainy biome that experiences all four seasons"],
        ["What is an alpine biome?","a cold and windy biome in high mountains"],
        ["What is a chaparral biome?","a biome with wet winters and long, dry summers"],
        ["What is a grassland bome?","a biome with only enough rain for grasses and flowers, but few if any trees"],
        ["What is a deciduous forest biome?","a biome with many deciduous trees that lose their leaves in the autumn and experiences all four seasons"],
        ["What is a desert biome?","a very hot and dry biome with plants and animals that have often adapted to store water"],
        ["What is a tropical seasonal forest?","a biome with a dry season and wet season"],
        ["What is a tropical rain forest?","a warm biome with much rain and plants with large leaves"],
        ["What is an aquatic biome?","a biome in varieties of water, such as swamps, marshes, rivers, lakes, and oceans"],
        ["What does it mean tomigrate?","to move from one region or habitat to another"],
        ["What does it mean toimmigrate?","the act of coming to live permanently in a foreign country"],
        ["What is a passport?","an official government document given to a person by their government that lets government officials from other countries know your identity and your citizenship"],
        ["What is a census?","an official count, or survey, of a population"],
        ["What is a population?","the count of all of the people living in a specified area"]
        
    ]
}
lit1l3={
    qa: [
        ["What is fiction?","A made up or imaginary story."],
        ["What is nonfiction?","Writing based on real life fact or information; not made up."],
        ["What is historical fiction?","A story that contains some real parts from history and some made up (or fictional) parts. The real parts may be places, events, or people. The fiction is something the author adds to make the story more interesting, including people, details, events, conversations, etc."],
        ["What is foreshadowing?","To give clues or hints to suggest events that will occur later in the story, either good or bad."],
        ["What is alliteration?","The repetition of initial (or beginning) sounds of words"]
]}
lit1l4={
    qa: [
        ["What is fiction?","A made up or imaginary story."],
        ["What is nonfiction?","Writing based on real life fact or information; not made up."],
        ["What is historical fiction?","A story that contains some real parts from history and some made up (or fictional) parts. The real parts may be places, events, or people. The fiction is something the author adds to make the story more interesting, including people, details, events, conversations, etc."],
        ["What is foreshadowing?","To give clues or hints to suggest events that will occur later in the story, either good or bad."],
        ["What is alliteration?","The repetition of initial (or beginning) sounds of words"],
        ["What is personification?","A type of metaphor in which an idea, a thing, or an animal is given human characteristics"],
        ["What is conflict?","A struggle between the protagonist and antagonist or between two opposing forces- internal or external."]
    ]}
lit1l5={
    qa: [
        ["What is fiction?","A made up or imaginary story."],
        ["What is nonfiction?","Writing based on real life fact or information; not made up."],
        ["What is historical fiction?","A story that contains some real parts from history and some made up (or fictional) parts. The real parts may be places, events, or people. The fiction is something the author adds to make the story more interesting, including people, details, events, conversations, etc."],
        ["What is foreshadowing?","To give clues or hints to suggest events that will occur later in the story, either good or bad."],
        ["What is alliteration?","The repetition of initial (or beginning) sounds of words"],
        ["What is personification?","A type of metaphor in which an idea, a thing, or an animal is given human characteristics"],
        ["What is conflict?","A struggle between the protagonist and antagonist or between two opposing forces- internal or external."],
        ["What is a man vs nature?","A conflict in which a person battles something in nature or any other nonhuman element."],
        ["What is a man vs man ?","A conflict in which one person has opposition from another person."],
        ["What is a man vs society?","A conflict in which a person has to stand up to or go against an entire society and its ways."],
        ["What is a man vs himself?","A conflict in which a person struggles to decide between two opposing actions or ideas."]
    ]}
lit1l6={
    qa: [
        ["What is fiction?","A made up or imaginary story."],
        ["What is nonfiction?","Writing based on real life fact or information; not made up."],
        ["What is historical fiction?","A story that contains some real parts from history and some made up (or fictional) parts. The real parts may be places, events, or people. The fiction is something the author adds to make the story more interesting, including people, details, events, conversations, etc."],
        ["What is foreshadowing?","To give clues or hints to suggest events that will occur later in the story, either good or bad."],
        ["What is alliteration?","The repetition of initial (or beginning) sounds of words"],
        ["What is personification?","A type of metaphor in which an idea, a thing, or an animal is given human characteristics"],
        ["What is conflict?","A struggle between the protagonist and antagonist or between two opposing forces- internal or external."],
        ["What is a man vs nature?","A conflict in which a person battles something in nature or any other nonhuman element."],
        ["What is a man vs man ?","A conflict in which one person has opposition from another person."],
        ["What is a man vs society?","A conflict in which a person has to stand up to or go against an entire society and its ways."],
        ["What is a man vs himself?","A conflict in which a person struggles to decide between two opposing actions or ideas."],
        ["What is character?","A character's external and internal qualities; his or her fellings, personality, and motivations."]
    ]}
lit1l7={
    qa: [
        ["What is fiction?","A made up or imaginary story."],
        ["What is nonfiction?","Writing based on real life fact or information; not made up."],
        ["What is historical fiction?","A story that contains some real parts from history and some made up (or fictional) parts. The real parts may be places, events, or people. The fiction is something the author adds to make the story more interesting, including people, details, events, conversations, etc."],
        ["What is foreshadowing?","To give clues or hints to suggest events that will occur later in the story, either good or bad."],
        ["What is alliteration?","The repetition of initial (or beginning) sounds of words"],
        ["What is personification?","A type of metaphor in which an idea, a thing, or an animal is given human characteristics"],
        ["What is conflict?","A struggle between the protagonist and antagonist or between two opposing forces- internal or external."],
        ["What is a man vs nature?","A conflict in which a person battles something in nature or any other nonhuman element."],
        ["What is a man vs man ?","A conflict in which one person has opposition from another person."],
        ["What is a man vs society?","A conflict in which a person has to stand up to or go against an entire society and its ways."],
        ["What is a man vs himself?","A conflict in which a person struggles to decide between two opposing actions or ideas."],
        ["What is character?","A character's external and internal qualities; his or her fellings, personality, and motivations."],
        ["What is a protagonist?","The main character in a story; the character who has a problem to overcome."]
    ]}
lit1l8={
    qa: [
        ["What is fiction?","A made up or imaginary story."],
        ["What is nonfiction?","Writing based on real life fact or information; not made up."],
        ["What is historical fiction?","A story that contains some real parts from history and some made up (or fictional) parts. The real parts may be places, events, or people. The fiction is something the author adds to make the story more interesting, including people, details, events, conversations, etc."],
        ["What is foreshadowing?","To give clues or hints to suggest events that will occur later in the story, either good or bad."],
        ["What is alliteration?","The repetition of initial (or beginning) sounds of words"],
        ["What is personification?","A type of metaphor in which an idea, a thing, or an animal is given human characteristics"],
        ["What is conflict?","A struggle between the protagonist and antagonist or between two opposing forces- internal or external."],
        ["What is a man vs nature?","A conflict in which a person battles something in nature or any other nonhuman element."],
        ["What is a man vs man ?","A conflict in which one person has opposition from another person."],
        ["What is a man vs society?","A conflict in which a person has to stand up to or go against an entire society and its ways."],
        ["What is a man vs himself?","A conflict in which a person struggles to decide between two opposing actions or ideas."],
        ["What is character?","A character's external and internal qualities; his or her fellings, personality, and motivations."],
        ["What is a protagonist?","The main character in a story; the character who has a problem to overcome."],
        ["What is characterization?","How the author reveals the external and internal qualities of a character, including the character's name, how the character looks, what the character does, says, and thinks, others' reactions to the character, elements of the setting, and character foils."]
    ]}
lit1l9={
    qa: [
        ["What is fiction?","A made up or imaginary story."],
        ["What is nonfiction?","Writing based on real life fact or information; not made up."],
        ["What is historical fiction?","A story that contains some real parts from history and some made up (or fictional) parts. The real parts may be places, events, or people. The fiction is something the author adds to make the story more interesting, including people, details, events, conversations, etc."],
        ["What is foreshadowing?","To give clues or hints to suggest events that will occur later in the story, either good or bad."],
        ["What is alliteration?","The repetition of initial (or beginning) sounds of words"],
        ["What is personification?","A type of metaphor in which an idea, a thing, or an animal is given human characteristics"],
        ["What is conflict?","A struggle between the protagonist and antagonist or between two opposing forces- internal or external."],
        ["What is a man vs nature?","A conflict in which a person battles something in nature or any other nonhuman element."],
        ["What is a man vs man ?","A conflict in which one person has opposition from another person."],
        ["What is a man vs society?","A conflict in which a person has to stand up to or go against an entire society and its ways."],
        ["What is a man vs himself?","A conflict in which a person struggles to decide between two opposing actions or ideas."],
        ["What is character?","A character's external and internal qualities; his or her fellings, personality, and motivations."],
        ["What is a protagonist?","The main character in a story; the character who has a problem to overcome."],
        ["What is characterization?","How the author reveals the external and internal qualities of a character, including the character's name, how the character looks, what the character does, says, and thinks, others' reactions to the character, elements of the setting, and character foils."],
        ["What is a theme?","A theme of a poem, play, or novel is the idea or concept about people, life, or the world that the author wants us to understand. It is the moral or message of the work."]
    ]}
lit1l10={
    qa: [
        ["What is fiction?","A made up or imaginary story."],
        ["What is nonfiction?","Writing based on real life fact or information; not made up."],
        ["What is historical fiction?","A story that contains some real parts from history and some made up (or fictional) parts. The real parts may be places, events, or people. The fiction is something the author adds to make the story more interesting, including people, details, events, conversations, etc."],
        ["What is foreshadowing?","To give clues or hints to suggest events that will occur later in the story, either good or bad."],
        ["What is alliteration?","The repetition of initial (or beginning) sounds of words"],
        ["What is personification?","A type of metaphor in which an idea, a thing, or an animal is given human characteristics"],
        ["What is conflict?","A struggle between the protagonist and antagonist or between two opposing forces- internal or external."],
        ["What is a man vs nature?","A conflict in which a person battles something in nature or any other nonhuman element."],
        ["What is a man vs man ?","A conflict in which one person has opposition from another person."],
        ["What is a man vs society?","A conflict in which a person has to stand up to or go against an entire society and its ways."],
        ["What is a man vs himself?","A conflict in which a person struggles to decide between two opposing actions or ideas."],
        ["What is character?","A character's external and internal qualities; his or her fellings, personality, and motivations."],
        ["What is a protagonist?","The main character in a story; the character who has a problem to overcome."],
        ["What is characterization?","How the author reveals the external and internal qualities of a character, including the character's name, how the character looks, what the character does, says, and thinks, others' reactions to the character, elements of the setting, and character foils."],
        ["What is a theme?","A theme of a poem, play, or novel is the idea or concept about people, life, or the world that the author wants us to understand. It is the moral or message of the work."],
        ["What is an external characteristic?","Characteristics that can be seen: hair color, clothing, age, height, etc."],
        ["What is an internal characteristic?","Characteristics that are part of who a person is: kind, honest, rude, funny, trusting, gullible, etc. "]
    ]}
lit1l11={
    qa: [
        ["What is fiction?","A made up or imaginary story."],
        ["What is nonfiction?","Writing based on real life fact or information; not made up."],
        ["What is historical fiction?","A story that contains some real parts from history and some made up (or fictional) parts. The real parts may be places, events, or people. The fiction is something the author adds to make the story more interesting, including people, details, events, conversations, etc."],
        ["What is foreshadowing?","To give clues or hints to suggest events that will occur later in the story, either good or bad."],
        ["What is alliteration?","The repetition of initial (or beginning) sounds of words"],
        ["What is personification?","A type of metaphor in which an idea, a thing, or an animal is given human characteristics"],
        ["What is conflict?","A struggle between the protagonist and antagonist or between two opposing forces- internal or external."],
        ["What is a man vs nature?","A conflict in which a person battles something in nature or any other nonhuman element."],
        ["What is a man vs man ?","A conflict in which one person has opposition from another person."],
        ["What is a man vs society?","A conflict in which a person has to stand up to or go against an entire society and its ways."],
        ["What is a man vs himself?","A conflict in which a person struggles to decide between two opposing actions or ideas."],
        ["What is character?","A character's external and internal qualities; his or her fellings, personality, and motivations."],
        ["What is a protagonist?","The main character in a story; the character who has a problem to overcome."],
        ["What is characterization?","How the author reveals the external and internal qualities of a character, including the character's name, how the character looks, what the character does, says, and thinks, others' reactions to the character, elements of the setting, and character foils."],
        ["What is a theme?","A theme of a poem, play, or novel is the idea or concept about people, life, or the world that the author wants us to understand. It is the moral or message of the work."],
        ["What is an external characteristic?","Characteristics that can be seen: hair color, clothing, age, height, etc."],
        ["What is an internal characteristic?","Characteristics that are part of who a person is: kind, honest, rude, funny, trusting, gullible, etc. "],
        ["What is a plot?","The order of events in the story and their causes and consequences."],
        ["What is an exposition?","The introduction and background to a story."]
    ]}
lit1l12={
    qa: [
        ["What is fiction?","A made up or imaginary story."],
        ["What is nonfiction?","Writing based on real life fact or information; not made up."],
        ["What is historical fiction?","A story that contains some real parts from history and some made up (or fictional) parts. The real parts may be places, events, or people. The fiction is something the author adds to make the story more interesting, including people, details, events, conversations, etc."],
        ["What is foreshadowing?","To give clues or hints to suggest events that will occur later in the story, either good or bad."],
        ["What is alliteration?","The repetition of initial (or beginning) sounds of words"],
        ["What is personification?","A type of metaphor in which an idea, a thing, or an animal is given human characteristics"],
        ["What is conflict?","A struggle between the protagonist and antagonist or between two opposing forces- internal or external."],
        ["What is a man vs nature?","A conflict in which a person battles something in nature or any other nonhuman element."],
        ["What is a man vs man ?","A conflict in which one person has opposition from another person."],
        ["What is a man vs society?","A conflict in which a person has to stand up to or go against an entire society and its ways."],
        ["What is a man vs himself?","A conflict in which a person struggles to decide between two opposing actions or ideas."],
        ["What is character?","A character's external and internal qualities; his or her fellings, personality, and motivations."],
        ["What is a protagonist?","The main character in a story; the character who has a problem to overcome."],
        ["What is characterization?","How the author reveals the external and internal qualities of a character, including the character's name, how the character looks, what the character does, says, and thinks, others' reactions to the character, elements of the setting, and character foils."],
        ["What is a theme?","A theme of a poem, play, or novel is the idea or concept about people, life, or the world that the author wants us to understand. It is the moral or message of the work."],
        ["What is an external characteristic?","Characteristics that can be seen: hair color, clothing, age, height, etc."],
        ["What is an internal characteristic?","Characteristics that are part of who a person is: kind, honest, rude, funny, trusting, gullible, etc. "],
        ["What is a plot?","The order of events in the story and their causes and consequences."],
        ["What is an exposition?","The introduction and background to a story."],
        ["What is rising action?","The events, decisions, and problems in a story that lead to the story's climax."]
    ]}
lit1l13={
    qa: [
        ["What is fiction?","A made up or imaginary story."],
        ["What is nonfiction?","Writing based on real life fact or information; not made up."],
        ["What is historical fiction?","A story that contains some real parts from history and some made up (or fictional) parts. The real parts may be places, events, or people. The fiction is something the author adds to make the story more interesting, including people, details, events, conversations, etc."],
        ["What is foreshadowing?","To give clues or hints to suggest events that will occur later in the story, either good or bad."],
        ["What is alliteration?","The repetition of initial (or beginning) sounds of words"],
        ["What is personification?","A type of metaphor in which an idea, a thing, or an animal is given human characteristics"],
        ["What is conflict?","A struggle between the protagonist and antagonist or between two opposing forces- internal or external."],
        ["What is a man vs nature?","A conflict in which a person battles something in nature or any other nonhuman element."],
        ["What is a man vs man ?","A conflict in which one person has opposition from another person."],
        ["What is a man vs society?","A conflict in which a person has to stand up to or go against an entire society and its ways."],
        ["What is a man vs himself?","A conflict in which a person struggles to decide between two opposing actions or ideas."],
        ["What is character?","A character's external and internal qualities; his or her fellings, personality, and motivations."],
        ["What is a protagonist?","The main character in a story; the character who has a problem to overcome."],
        ["What is characterization?","How the author reveals the external and internal qualities of a character, including the character's name, how the character looks, what the character does, says, and thinks, others' reactions to the character, elements of the setting, and character foils."],
        ["What is a theme?","A theme of a poem, play, or novel is the idea or concept about people, life, or the world that the author wants us to understand. It is the moral or message of the work."],
        ["What is an external characteristic?","Characteristics that can be seen: hair color, clothing, age, height, etc."],
        ["What is an internal characteristic?","Characteristics that are part of who a person is: kind, honest, rude, funny, trusting, gullible, etc. "],
        ["What is a plot?","The order of events in the story and their causes and consequences."],
        ["What is an exposition?","The introduction and background to a story."],
        ["What is rising action?","The events, decisions, and problems in a story that lead to the story's climax."],
        ["What is a setting?","Where and when the story takes place, including culture, beliefs, and traditions of the people."]
    ]}
lit1l14={
    qa: [
        ["What is fiction?","A made up or imaginary story."],
        ["What is nonfiction?","Writing based on real life fact or information; not made up."],
        ["What is historical fiction?","A story that contains some real parts from history and some made up (or fictional) parts. The real parts may be places, events, or people. The fiction is something the author adds to make the story more interesting, including people, details, events, conversations, etc."],
        ["What is foreshadowing?","To give clues or hints to suggest events that will occur later in the story, either good or bad."],
        ["What is alliteration?","The repetition of initial (or beginning) sounds of words"],
        ["What is personification?","A type of metaphor in which an idea, a thing, or an animal is given human characteristics"],
        ["What is conflict?","A struggle between the protagonist and antagonist or between two opposing forces- internal or external."],
        ["What is a man vs nature?","A conflict in which a person battles something in nature or any other nonhuman element."],
        ["What is a man vs man ?","A conflict in which one person has opposition from another person."],
        ["What is a man vs society?","A conflict in which a person has to stand up to or go against an entire society and its ways."],
        ["What is a man vs himself?","A conflict in which a person struggles to decide between two opposing actions or ideas."],
        ["What is character?","A character's external and internal qualities; his or her fellings, personality, and motivations."],
        ["What is a protagonist?","The main character in a story; the character who has a problem to overcome."],
        ["What is characterization?","How the author reveals the external and internal qualities of a character, including the character's name, how the character looks, what the character does, says, and thinks, others' reactions to the character, elements of the setting, and character foils."],
        ["What is a theme?","A theme of a poem, play, or novel is the idea or concept about people, life, or the world that the author wants us to understand. It is the moral or message of the work."],
        ["What is an external characteristic?","Characteristics that can be seen: hair color, clothing, age, height, etc."],
        ["What is an internal characteristic?","Characteristics that are part of who a person is: kind, honest, rude, funny, trusting, gullible, etc. "],
        ["What is a plot?","The order of events in the story and their causes and consequences."],
        ["What is an exposition?","The introduction and background to a story."],
        ["What is rising action?","The events, decisions, and problems in a story that lead to the story's climax."],
        ["What is a setting?","Where and when the story takes place, including culture, beliefs, and traditions of the people."],
        ["What is an antagonist?","A person or situation that opposes, or goes against, the protagonist."]
    ]}
lit1l15={
    qa: [
        ["What is fiction?","A made up or imaginary story."],
        ["What is nonfiction?","Writing based on real life fact or information; not made up."],
        ["What is historical fiction?","A story that contains some real parts from history and some made up (or fictional) parts. The real parts may be places, events, or people. The fiction is something the author adds to make the story more interesting, including people, details, events, conversations, etc."],
        ["What is foreshadowing?","To give clues or hints to suggest events that will occur later in the story, either good or bad."],
        ["What is alliteration?","The repetition of initial (or beginning) sounds of words"],
        ["What is personification?","A type of metaphor in which an idea, a thing, or an animal is given human characteristics"],
        ["What is conflict?","A struggle between the protagonist and antagonist or between two opposing forces- internal or external."],
        ["What is a man vs nature?","A conflict in which a person battles something in nature or any other nonhuman element."],
        ["What is a man vs man ?","A conflict in which one person has opposition from another person."],
        ["What is a man vs society?","A conflict in which a person has to stand up to or go against an entire society and its ways."],
        ["What is a man vs himself?","A conflict in which a person struggles to decide between two opposing actions or ideas."],
        ["What is character?","A character's external and internal qualities; his or her fellings, personality, and motivations."],
        ["What is a protagonist?","The main character in a story; the character who has a problem to overcome."],
        ["What is characterization?","How the author reveals the external and internal qualities of a character, including the character's name, how the character looks, what the character does, says, and thinks, others' reactions to the character, elements of the setting, and character foils."],
        ["What is a theme?","A theme of a poem, play, or novel is the idea or concept about people, life, or the world that the author wants us to understand. It is the moral or message of the work."],
        ["What is an external characteristic?","Characteristics that can be seen: hair color, clothing, age, height, etc."],
        ["What is an internal characteristic?","Characteristics that are part of who a person is: kind, honest, rude, funny, trusting, gullible, etc. "],
        ["What is a plot?","The order of events in the story and their causes and consequences."],
        ["What is an exposition?","The introduction and background to a story."],
        ["What is rising action?","The events, decisions, and problems in a story that lead to the story's climax."],
        ["What is a setting?","Where and when the story takes place, including culture, beliefs, and traditions of the people."],
        ["What is an antagonist?","A person or situation that opposes, or goes against, the protagonist."],
        ["What is a character foil?","A character who contrasts with another character in order to highlight certain traits of each character."]
    ]}
lit1l16={
    qa: [
        ["What is fiction?","A made up or imaginary story."],
        ["What is nonfiction?","Writing based on real life fact or information; not made up."],
        ["What is historical fiction?","A story that contains some real parts from history and some made up (or fictional) parts. The real parts may be places, events, or people. The fiction is something the author adds to make the story more interesting, including people, details, events, conversations, etc."],
        ["What is foreshadowing?","To give clues or hints to suggest events that will occur later in the story, either good or bad."],
        ["What is alliteration?","The repetition of initial (or beginning) sounds of words"],
        ["What is personification?","A type of metaphor in which an idea, a thing, or an animal is given human characteristics"],
        ["What is conflict?","A struggle between the protagonist and antagonist or between two opposing forces- internal or external."],
        ["What is a man vs nature?","A conflict in which a person battles something in nature or any other nonhuman element."],
        ["What is a man vs man ?","A conflict in which one person has opposition from another person."],
        ["What is a man vs society?","A conflict in which a person has to stand up to or go against an entire society and its ways."],
        ["What is a man vs himself?","A conflict in which a person struggles to decide between two opposing actions or ideas."],
        ["What is character?","A character's external and internal qualities; his or her fellings, personality, and motivations."],
        ["What is a protagonist?","The main character in a story; the character who has a problem to overcome."],
        ["What is characterization?","How the author reveals the external and internal qualities of a character, including the character's name, how the character looks, what the character does, says, and thinks, others' reactions to the character, elements of the setting, and character foils."],
        ["What is a theme?","A theme of a poem, play, or novel is the idea or concept about people, life, or the world that the author wants us to understand. It is the moral or message of the work."],
        ["What is an external characteristic?","Characteristics that can be seen: hair color, clothing, age, height, etc."],
        ["What is an internal characteristic?","Characteristics that are part of who a person is: kind, honest, rude, funny, trusting, gullible, etc. "],
        ["What is a plot?","The order of events in the story and their causes and consequences."],
        ["What is an exposition?","The introduction and background to a story."],
        ["What is rising action?","The events, decisions, and problems in a story that lead to the story's climax."],
        ["What is a setting?","Where and when the story takes place, including culture, beliefs, and traditions of the people."],
        ["What is an antagonist?","A person or situation that opposes, or goes against, the protagonist."],
        ["What is a character foil?","A character who contrasts with another character in order to highlight certain traits of each character."],
        ["What is a climax?","The high point of the story."],
        ["What is falling action?","Results and consequences of the climax. The action winds down to a conclusion."],
        ["What is a denouement?","Conclusion or final outcome of the story."]
    ]}
lit2l2={
    qa: [
        ["What is fiction?","A made up or imaginary story."],
        ["What is nonfiction?","Writing based on real life fact or information; not made up."],
        ["What is historical fiction?","A story that contains some real parts from history and some made up (or fictional) parts. The real parts may be places, events, or people. The fiction is something the author adds to make the story more interesting, including people, details, events, conversations, etc."],
        ["What is foreshadowing?","To give clues or hints to suggest events that will occur later in the story, either good or bad."],
        ["What is alliteration?","The repetition of initial (or beginning) sounds of words"],
        ["What is personification?","A type of metaphor in which an idea, a thing, or an animal is given human characteristics"],
        ["What is conflict?","A struggle between the protagonist and antagonist or between two opposing forces- internal or external."],
        ["What is a man vs nature?","A conflict in which a person battles something in nature or any other nonhuman element."],
        ["What is a man vs man ?","A conflict in which one person has opposition from another person."],
        ["What is a man vs society?","A conflict in which a person has to stand up to or go against an entire society and its ways."],
        ["What is a man vs himself?","A conflict in which a person struggles to decide between two opposing actions or ideas."],
        ["What is character?","A character's external and internal qualities; his or her fellings, personality, and motivations."],
        ["What is a protagonist?","The main character in a story; the character who has a problem to overcome."],
        ["What is characterization?","How the author reveals the external and internal qualities of a character, including the character's name, how the character looks, what the character does, says, and thinks, others' reactions to the character, elements of the setting, and character foils."],
        ["What is a theme?","A theme of a poem, play, or novel is the idea or concept about people, life, or the world that the author wants us to understand. It is the moral or message of the work."],
        ["What is an external characteristic?","Characteristics that can be seen: hair color, clothing, age, height, etc."],
        ["What is an internal characteristic?","Characteristics that are part of who a person is: kind, honest, rude, funny, trusting, gullible, etc. "],
        ["What is a plot?","The order of events in the story and their causes and consequences."],
        ["What is an exposition?","The introduction and background to a story."],
        ["What is rising action?","The events, decisions, and problems in a story that lead to the story's climax."],
        ["What is a setting?","Where and when the story takes place, including culture, beliefs, and traditions of the people."],
        ["What is an antagonist?","A person or situation that opposes, or goes against, the protagonist."],
        ["What is a character foil?","A character who contrasts with another character in order to highlight certain traits of each character."],
        ["What is a climax?","The high point of the story."],
        ["What is falling action?","Results and consequences of the climax. The action winds down to a conclusion."],
        ["What is a denouement?","Conclusion or final outcome of the story."],
        ["What is imagery?","An author's use of vivid and descriptive language. Imagery can involve all of the senses- sight, hearing, taste, touch, and smell, and often uses metaphors and similes to express ideas."]
    ]}
lit2l12={
    qa: [
        ["What is fiction?","A made up or imaginary story."],
        ["What is nonfiction?","Writing based on real life fact or information; not made up."],
        ["What is historical fiction?","A story that contains some real parts from history and some made up (or fictional) parts. The real parts may be places, events, or people. The fiction is something the author adds to make the story more interesting, including people, details, events, conversations, etc."],
        ["What is foreshadowing?","To give clues or hints to suggest events that will occur later in the story, either good or bad."],
        ["What is alliteration?","The repetition of initial (or beginning) sounds of words"],
        ["What is personification?","A type of metaphor in which an idea, a thing, or an animal is given human characteristics"],
        ["What is conflict?","A struggle between the protagonist and antagonist or between two opposing forces- internal or external."],
        ["What is a man vs nature?","A conflict in which a person battles something in nature or any other nonhuman element."],
        ["What is a man vs man ?","A conflict in which one person has opposition from another person."],
        ["What is a man vs society?","A conflict in which a person has to stand up to or go against an entire society and its ways."],
        ["What is a man vs himself?","A conflict in which a person struggles to decide between two opposing actions or ideas."],
        ["What is character?","A character's external and internal qualities; his or her fellings, personality, and motivations."],
        ["What is a protagonist?","The main character in a story; the character who has a problem to overcome."],
        ["What is characterization?","How the author reveals the external and internal qualities of a character, including the character's name, how the character looks, what the character does, says, and thinks, others' reactions to the character, elements of the setting, and character foils."],
        ["What is a theme?","A theme of a poem, play, or novel is the idea or concept about people, life, or the world that the author wants us to understand. It is the moral or message of the work."],
        ["What is an external characteristic?","Characteristics that can be seen: hair color, clothing, age, height, etc."],
        ["What is an internal characteristic?","Characteristics that are part of who a person is: kind, honest, rude, funny, trusting, gullible, etc. "],
        ["What is a plot?","The order of events in the story and their causes and consequences."],
        ["What is an exposition?","The introduction and background to a story."],
        ["What is rising action?","The events, decisions, and problems in a story that lead to the story's climax."],
        ["What is a setting?","Where and when the story takes place, including culture, beliefs, and traditions of the people."],
        ["What is an antagonist?","A person or situation that opposes, or goes against, the protagonist."],
        ["What is a character foil?","A character who contrasts with another character in order to highlight certain traits of each character."],
        ["What is a climax?","The high point of the story."],
        ["What is falling action?","Results and consequences of the climax. The action winds down to a conclusion."],
        ["What is a denouement?","Conclusion or final outcome of the story."],
        ["What is imagery?","An author's use of vivid and descriptive language. Imagery can involve all of the senses- sight, hearing, taste, touch, and smell, and often uses metaphors and similes to express ideas."],
        ["What is a rhyme?","Rhyming words have the same ending sound and a different beginning sound, like 'wave' and 'gave.'"],
        ["What is a slant rhyme?","Two words that look as if they should rhyme, but do not, or that sound close to being a rhyme, but are not."]
    ]}*/
let qa = [{
        "q": "What is cartography?",
        "a": "the study of making maps",
        "class": "geography1",
        "lesson": 1
    }, {
        "q": "What is geography?",
        "a": "a description of the earth and the people who live on it",
        "class": "geography1",
        "lesson": 1
    },{
        "q": "What is the lithosphere?",
        "a": "the portion of the earth that is land",
        "class": "geography1",
        "lesson": 1
    },{
        "q": "What is the atmosphere?",
        "a": "the entire mass of fluid, air, and vapors surrounding the earth",
        "class": "geography1",
        "lesson": 1
    },{
        "q": "What is the hydrosphere?",
        "a": "all the water contained on the earth",
        "class": "geography1",
        "lesson": 1
    }, {
        "q": "What is mathematical geography?",
        "a": "a description of the earth and space using numbers and measurements",
        "class": "geography1",
        "lesson": 3
    }, {
        "q": "What is the earth's orbit?",
        "a": "the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once.",
        "class": "geography1",
        "lesson": 3
    }, {
        "q": "What is the earth's axis?",
        "a": "a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours.",
        "class": "geography1",
        "lesson": 3
    }, {
        "q": "What is shape?",
        "a": "the outline of an area or figure",
        "class": "geography1",
        "lesson": 5
    }, {
        "q": "What is form?",
        "a": "an object that is not flat but has height, width, and depth (three-dimensional)",
        "class": "geography1",
        "lesson": 5
    }, {
        "q": "What is a relief map?",
        "a": "a map or model that includes three-dimensional (3D) forms",
        "class": "geography1",
        "lesson": 5
    }, {
        "q": "What is a cloud?",
        "a": "a grouping of tiny water drops and/or ice crystals that float in the air",
        "class": "geography1",
        "lesson": 6
    }, {
        "q": "What is cirrus",
        "a": "thin, wispy clouds found high in the sky",
        "class": "geography1",
        "lesson": 6
    }, {
        "q": "What is cirrocumulus?",
        "a": "small, rounded white puffs; clouds that form long rows in the sky",
        "class": "geography1",
        "lesson": 6
    }, {
        "q": "What is cumulus?",
        "a": "big, white puffy clouds",
        "class": "geography1",
        "lesson": 6
    }, {
        "q": "What is cumulonimbus",
        "a": "large, gray cumulus clouds that are heavy with water",
        "class": "geography1",
        "lesson": 6
    }, {
        "q": "What is stratus",
        "a": "low, flat clouds that bring rain or snow",
        "class": "geography1",
        "lesson": 6
    }, {
        "q": "What is atmosphere?",
        "a": "the entire mass of fluid, air, and vapors surrounding the earth",
        "class": "geography1",
        "lesson": 7
    }, {
        "q": "What is a climate?",
        "a": "an average of the high and low temperatures in an area on the earth over a long period of time (about 30 years)",
        "class": "geography1",
        "lesson": 8
    }, {
        "q": "What is weather?",
        "a": "the condition of the atmosphere at any given moment",
        "class": "geography1",
        "lesson": 8
    }, {
        "q": "What is the hydrosphere?",
        "a": "all of the water contained on the earth; divided into two sections: oceanic waters and continental water",
        "class": "geography1",
        "lesson": 10
    }, {
        "q": "What is a gulf?",
        "a": "a large extension of an ocean or sea into the land",
        "class": "geography1",
        "lesson": 10
    }, {
        "q": "What is a bay?",
        "a": "a body of water smaller than a gulf that is nearly surrounded by land",
        "class": "geography1",
        "lesson": 10
    }, {
        "q": "What is a fjord?",
        "a": "a narrow inlet of the sea with steep banks made by a glacier",
        "class": "geography1",
        "lesson": 10
    }, {
        "q": "What is a harbor?",
        "a": "a part of an ocean or lake next to land that is protected and deep enough for ships to anchor",
        "class": "geography1",
        "lesson": 10
    }, {
        "q": "What is a glacier?",
        "a": "large body of slowly moving ice flowing downward from the mountains",
        "class": "geography1",
        "lesson": 11
    }, {
        "q": "What is a river?",
        "a": "large stream of water flowing through land",
        "class": "geography1",
        "lesson": 11
    }, {
        "q": "What is a lake?",
        "a": "large body of water surrounded by land",
        "class": "geography1",
        "lesson": 11
    }, {
        "q": "What is a saltwater lake?",
        "a": "lake which has water entering, but no outlet, so the water is salty",
        "class": "geography1",
        "lesson": 11
    }, {
        "q": "What is a groundwater?",
        "a": "the water found beneath the surface of the ground",
        "class": "geography1",
        "lesson": 12
    }, {
        "q": "What is a channel?",
        "a": "deep, narrow body of water connecting two larger bodies of water",
        "class": "geography1",
        "lesson": 12
    }, {
        "q": "What is a lock?",
        "a": "a device used for raising and lowering boats, ships, and other watercraft between stretches of water of different levels on rivers and canals",
        "class": "geography1",
        "lesson": 12
    }, {
        "q": "What is a canal?",
        "a": "a man-made ditch for transporting people and things",
        "class": "geography1",
        "lesson": 12
    }, {
        "q": "What is a valley?",
        "a": "lowland between hills or mountains",
        "class": "geography1",
        "lesson": 13
    }, {
        "q": "What is a canyon?",
        "a": "a deep, narrow valley with steep walls",
        "class": "geography1",
        "lesson": 13
    }, {
        "q": "What is a mountain?",
        "a": "high, rocky land, usually with steep sides and a pointed or rounded top, higher than a hill",
        "class": "geography1",
        "lesson": 14
    }, {
        "q": "What is a hill?",
        "a": "raised part of the earth’s surface, with sloping slides; smaller than a mountain",
        "class": "geography1",
        "lesson": 14
    }, {
        "q": "What is a mountain range?",
        "a": "a group of mountains bordered by lowlands",
        "class": "geography1",
        "lesson": 14
    }, {
        "q": "What is a divide?",
        "a": "a height of land that separates river basins",
        "class": "geography1",
        "lesson": 14
    }, {
        "q": "What is a beach?",
        "a": "a narrow, gently sloping strip of land along the edge of a body of water",
        "class": "geography1",
        "lesson": 14
    }, {
        "q": "What is a basin?",
        "a": "an area of land drained by a river that is largely enclosed by higher land",
        "class": "geography1",
        "lesson": 15
    }, {
        "q": "What is a plateau?",
        "a": "region that is mostly high and flat",
        "class": "geography1",
        "lesson": 15
    }, {
        "q": "What is a plain?",
        "a": "broad, level land",
        "class": "geography1",
        "lesson": 15
    }, {
        "q": "What is a island?",
        "a": "a piece of land  entirely surrounded by water, smaller than a continent",
        "class": "geography1",
        "lesson": 15
    }, {
        "q": "What is a volcano?",
        "a": "an opening in the earth’s crust through which lava, volcanic ash, and gases escape",
        "class": "geography1",
        "lesson": 15
    }, {
        "q": "What is a lava?",
        "a": "molten rock on the earth’s surface",
        "class": "geography1",
        "lesson": 16
    }, {
        "q": "What is a magma?",
        "a": "molten rock within the earth",
        "class": "geography1",
        "lesson": 16
    }, {
        "q": "What is a biome?",
        "a": "a very large area of the earth’s surface that has a particular climate, soil, and elevation",
        "class": "geography2",
        "lesson": 2
    }, {
        "q": "What is a tundra biome?",
        "a": "the coldest biome with long, cold, dark winters",
        "class": "geography2",
        "lesson": 3
    }, {
        "q": "What is a taiga biome?",
        "a": "the largest biome with cold winters and warm, rainy summers",
        "class": "geography2",
        "lesson": 4
    }, {
        "q": "What is a temperate rain forest?",
        "a": "a wet and rainy biome that experiences all four seasons",
        "class": "geography2",
        "lesson": 5
    }, {
        "q": "What is an alpine biome?",
        "a": "a cold and windy biome in high mountains",
        "class": "geography2",
        "lesson": 6
    }, {
        "q": "What is a chaparral biome?",
        "a": "a biome with wet winters and long, dry summers",
        "class": "geography2",
        "lesson": 7
    }, {
        "q": "What is a grassland bome?",
        "a": "a biome with only enough rain for grasses and flowers, but few if any trees",
        "class": "geography2",
        "lesson": 8
    }, {
        "q": "What is a deciduous forest biome?",
        "a": "a biome with many deciduous trees that lose their leaves in the autumn and experiences all four seasons",
        "class": "geography2",
        "lesson": 9
    }, {
        "q": "What is a desert biome?",
        "a": "a very hot and dry biome with plants and animals that have often adapted to store water",
        "class": "geography2",
        "lesson": 10
    }, {
        "q": "What is a tropical seasonal forest?",
        "a": "a biome with a dry season and wet season",
        "class": "geography2",
        "lesson": 11
    }, {
        "q": "What is a tropical rain forest?",
        "a": "a warm biome with much rain and plants with large leaves",
        "class": "geography2",
        "lesson": 12
    }, {
        "q": "What is an aquatic biome?",
        "a": "a biome in varieties of water, such as swamps, marshes, rivers, lakes, and oceans",
        "class": "geography2",
        "lesson": 13
    }, {
        "q": "What does it mean to migrate?",
        "a": "to move from one region or habitat to another",
        "class": "geography2",
        "lesson": 14
    }, {
        "q": "What does it mean to immigrate?",
        "a": "the act of coming to live permanently in a foreign country",
        "class": "geography2",
        "lesson": 14
    }, {
        "q": "What is a passport?",
        "a": "an official government document given to a person by their government that lets government officials from other countries know your identity and your citizenship",
        "class": "geography2",
        "lesson": 15
    }, {
        "q": "What is a census?",
        "a": "an official count, or survey, of a population",
        "class": "geography2",
        "lesson": 16
    }, {
        "q": "What is a population?",
        "a": "the count of all of the people living in a specified area",
        "class": "geography2",
        "lesson": 16
    }, {
        "q": "What is fiction?",
        "a": "A made up or imaginary story.",
        "class": "literature",
        "lesson": 1
    }, {
        "q": "What is nonfiction?",
        "a": "Writing based on real life fact or information; not made up",
        "class": "literature",
        "lesson": 1

    }, {
        "q": "What is historical fiction?",
        "a": "A story that contains some real parts from history and some made up (or fictional) parts. The real parts may be places, events, or people. The fiction is something the author adds to make the story more interesting, including people, details, events, conversations, etc.",
        "class": "literature",
        "lesson": 1
    }, {
        "q": "Define parley.",
        "a": "a meeting or conference; an informal conference between enemies under a truce, especially to discuss terms, bargain, conditions of surrender, etc.",
        "class": "literature",
        "lesson": 1

    },{
        "q": "Define cease.",
        "a": "to stop; to come to an end.",
        "class": "literature",
        "lesson": 1

    },{
        "q": "Define conceal.",
        "a": "to hide; withdraw or remove from observation; cover or keep from sight.",
        "class": "literature",
        "lesson": 1

    },{
        "q": "Define companion.",
        "a": "a person who is frequently in the company of, associates with, or accompanies another.",
        "class": "literature",
        "lesson": 1

    },{
        "q": "Define intruder.",
        "a": "a person who comes in without invitation, permission, or welcome.",
        "class": "literature",
        "lesson": 1

    },{
        "q": "Define enclose.",
        "a": "to shut or hem in; close in on all sides; to surround.",
        "class": "literature",
        "lesson": 1

    },{
        "q": "Define ravine.",
        "a": "a narrow steep-sided valley commonly eroded by running water.",
        "class": "literature",
        "lesson": 1

    },{
        "q": "Define grasp.",
        "a": "to seize upon; hold firmly or to get hold of mentally; comprehend; understand.",
        "class": "literature",
        "lesson": 1

    },{
        "q": "Define profit.",
        "a": "advantage; benefit; gain.",
        "class": "literature",
        "lesson": 1

    },{
        "q": "What is foreshadowing?",
        "a": "To give clues or hints to suggest events that will occur later in the story, either good or bad.",
        "class": "literature",
        "lesson": 3
    }, {
        "q": "What is alliteration?",
        "a": "The repetition of initial (or beginning) sounds of words.",
        "class": "literature",
        "lesson": 3
    }, {
        "q": "What is a homophone?",
        "a": "Words that sound the same but have different meanings.",
        "class": "literature",
        "lesson": 3
    }, {
        "q": "What is pitch?",
        "a": "a black, sticky substance.",
        "class": "literature",
        "lesson": 3
    }, {
        "q": "What is a spit?",
        "a": "a narrow point of land.",
        "class": "literature",
        "lesson": 3
    }, {
        "q": "What is a lair?",
        "a": "a den or resting place of a wild animal.",
        "class": "literature",
        "lesson": 3
    }, {
        "q": "What is a simile?",
        "a": "A comparison that uses the words 'like' or 'as'",
        "class": "literature",
        "lesson": 3
    },{
        "q": "What is personification?",
        "a": "A type of metaphor in which an idea, a thing, or an animal is given human characteristics.",
        "class": "literature",
        "lesson": 4
    }, {
        "q": "What is conflict?",
        "a": "A struggle between the protagonist and antagonist or between two opposing forces- internal or external.",
        "class": "literature",
        "lesson": 4
    }, {
        "q": "What is a man vs nature conflict?",
        "a": "A conflict in which a person battles something in nature or any other nonhuman element.",
        "class": "literature",
        "lesson": 5
    }, {
        "q": "What is a man vs man conflict?",
        "a": "A conflict in which one person has opposition from another person.",
        "class": "literature",
        "lesson": 5
    }, {
        "q": "What is a man vs society conflict?",
        "a": "A conflict in which a person has to stand up to or go against an entire society and its ways.",
        "class": "literature",
        "lesson": 5
    }, {
        "q": "What is a man vs himself conflict?",
        "a": "A conflict in which a person struggles to decide between two opposing actions or ideas.",
        "class": "literature",
        "lesson": 5
    }, {
        "q": "What is character?",
        "a": "A character's external and internal qualities; his or her fellings, personality, and motivations.",
        "class": "literature",
        "lesson": 6
    }, {
        "q": "What does fierce mean?",
        "a": "violent in force, intensity, etc.",
        "class": "literature",
        "lesson": 6
    }, {
        "q": "What are haunches?",
        "a": "hindquarters or backside",
        "class": "literature",
        "lesson": 6
    },{
        "q": "Define warily?",
        "a": "carefully, cautiously, suspiciously",
        "class": "literature",
        "lesson": 6
    },{
        "q": "What is a protagonist?",
        "a": "The main character in a story; the character who has a problem to overcome.",
        "class": "literature",
        "lesson": 7
    }, {
        "q": "What is characterization?",
        "a": "How the author reveals the external and internal qualities of a character, including the character's name, how the character looks, what the character does, says, and thinks, others' reactions to the character, elements of the setting, and character foils.",
        "class": "literature",
        "lesson": 8
    }, {
        "q": "What is a theme?",
        "a": "A theme of a poem, play, or novel is the idea or concept about people, life, or the world that the author wants us to understand. It is the moral or message of the work.",
        "class": "literature",
        "lesson": 9
    }, {
        "q": "What is an external characteristic?",
        "a": "Characteristics that can be seen: hair color, clothing, age, height, etc.",
        "class": "literature",
        "lesson": 10
    }, {
        "q": "What is an internal characteristic?",
        "a": "Characteristics that are part of who a person is: kind, honest, rude, funny, trusting, gullible, etc.",
        "class": "literature",
        "lesson": 10
    }, {
        "q": "What is a plot?",
        "a": "The order of events in the story and their causes and consequences.",
        "class": "literature",
        "lesson": 11
    }, {
        "q": "What is an exposition?",
        "a": "The introduction and background to a story",
        "class": "literature",
        "lesson": 11
    }, {
        "q": "What is rising action?",
        "a": "The events, decisions, and problems in a story that lead to the story's climax.",
        "class": "literature",
        "lesson": 12
    }, {
        "q": "What is a setting?",
        "a": "Where and when the story takes place, including culture, beliefs, and traditions of the people.",
        "class": "literature",
        "lesson": 13
    }, {
        "q": "What is an antagonist?",
        "a": "A person or situation that opposes, or goes against, the protagonist.",
        "class": "literature",
        "lesson": 14
    }, {
        "q": "What is a character foil?",
        "a": "A character who contrasts with another character in order to highlight certain traits of each character.",
        "class": "literature",
        "lesson": 15
    }, {
        "q": "What is a climax?",
        "a": "The high point of the story.",
        "class": "literature",
        "lesson": 16
    }, {
        "q": "What is falling action?",
        "a": "Results and consequences of the climax. The action winds down to a conclusion.",
        "class": "literature",
        "lesson": 16
    }, {
        "q": "What is a denouement?",
        "a": "Conclusion or final outcome of the story.",
        "class": "literature",
        "lesson": 16
    }, {
        "q": "What is imagery?",
        "a": "An author's use of vivid and descriptive language. Imagery can involve all of the senses- sight, hearing, taste, touch, and smell, and often uses metaphors and similes to express ideas",
        "class": "literature",
        "lesson": 17
    }, {
        "q": "What is a rhyme?",
        "a": "Rhyming words have the same ending sound and a different beginning sound, like 'wave' and 'gave.'",
        "class": "literature",
        "lesson": 18
    }, {
        "q": "What is a slant rhyme?",
        "a": "Two words that look as if they should rhyme, but do not, or that sound close to being a rhyme, but are not.",
        "class": "literature",
        "lesson": 18
    }]

// * * * * * * * * * * * * * * * * * * * MONSTERS * * * * * * * * * * * * * * * * * * *
const monsterNames=["Stormborn",
"Thornscale Serpent",
"Darkbloom",
"Stonefury",
"Frostfury",
"Frostbite",
"Nightmaw",
"Ashenclaw Gargoyle",
"Stone Hound",
"Nightfury",
"Winter Rose",
"Frosthowl",
"Shy Basilisk",
"Stonewhisper",
"Shadowthorn Basilisk",
"Rainbow Lizard Dog",
"Rainbow Frostfire",
"Winter Ember",
"Poisonlife",
"Nightshade",
"Spiny Poison",
"Venomstalker",
"Bloodmoon",
"Cotton Candy Nightmare",
"Flameshard",
"Flame Blossom",
"Flame Lizard",
"Ironclaw",
"Poison",
"Ironfang Kraken",
"Baby Sea Monster",
"Fire Spirit",
"Shy Emberthorne",
"Emberclaw",
"Nightstalkers",
"Stormrider",
"Thunderstrike",
"Cotton Candy Beetle Blossom",
"Sunburn",
"Monster of the Seas",
"Birdie Death",
"Nightfall",
"Shadowtalon",
"Nightreaver"
]
// * * * * * * * * * * * * * * * * * * * START BATTLE * * * * * * * * * * * * * * * * * * *
function validation(){
    let team = document.getElementById("select-team");
    let course = document.getElementById("select-course");
    let lesson = document.getElementById("select-lesson");

    if(!team.value){
        team.style.backgroundColor="#FFD5D5";
    } else if(!course.value){
        course.style.backgroundColor="#FFD5D5";
    } else if(!lesson.value){
        lesson.style.backgroundColor="#FFD5D5";
    } else {
        startBattle();
    }

}

function startBattle() {
    team = document.getElementById("select-team").value;
    let course = document.getElementById("select-course").value;
    let lessonNum = document.getElementById("select-lesson").value;
    let chooseDiv = document.getElementById("choose-div");
    let displayDiv = document.getElementById("display-div");

    //set questionSet

    if(course === "geography2"){
        
        //find the Geo2 questions
        for (var i=0; i<qa.length; i++){
            if(qa[i].class === course && qa[i].lesson <= lessonNum){
                questionSet.push(qa[i]);
            }
        }
        //find the geo1 questions
        let tempQuestions = [];
        for (var i=0; i<qa.length; i++){
            if(qa[i].class === "geography1" /*&& qa[i].lesson <= lessonNum*/){
                tempQuestions.push(qa[i]);
            }
        }
        //fill in the remainder questions with geo1 questions
        for(var i= 20-questionSet.length; i>0; i--){
            let random = Math.floor(Math.random() * tempQuestions.length);
            questionSet.push(tempQuestions[random]);
            tempQuestions.splice(random, 1);
        }
    } else {
        //fill with questions from the course.
        for (var i=0; i<qa.length; i++){
            if(qa[i].class === course && qa[i].lesson <= lessonNum){
                questionSet.push(qa[i]);
            }
        }
    }
    
    
    //hide choices
    chooseDiv.classList.add('display-none');

    //create array of monsters
    let monsters = [];
    for (let i = 0; i<43; i++){
        monsters[i] = i+1;
    }
    
    //choose a monster to battle
    let monster = Math.floor(Math.random() * monsters.length);
    
    //create and display monster image
    let monsterImg = appendElement("img","boss-battle-img", "monster-img");
    monsterImg.src= "img/creatures/monsters/"+(monster+1)+".jpg";
    displayDiv.appendChild(monsterImg);

    //add VS
    let vsText = appendElement("h1", "boss-battle-text", "vs", "VS")
    displayDiv.appendChild(vsText);

    //identify team
    let teamSource;
    switch(team){
        case geographyTeam.name:
            teamSource = geographyTeam.shield;
            teamMembers = geographyTeam.members;
            break;
        case literatureTeam.name:
            teamSource = literatureTeam.shield;
            teamMembers = literatureTeam.members;
            break;
        // case gameschoolTeam.name:
        //     teamSource = gameschoolTeam.shield;
        //     teamMembers = gameschoolTeam.members;
        //     break;
        case microTeam.name:
            teamSource = microTeam.shield;
            teamMembers = microTeam.members;
            break;
    }
    
    //display team crest
    let teamCrest = appendElement("img", "boss-battle-img", "player-img");
    teamCrest.src = "img/shields/"+teamSource+".jpg";
    displayDiv.appendChild(teamCrest);
    
    // display monster name
    let monsterName = appendElement("h1", "boss-battle-name", "monster-name", monsterNames[monster]);
    displayDiv.appendChild(monsterName);
    
    //add START button
        let beginBtn = appendElement("button", "submit-btn", "game-start-btn", "Begin!");
    beginBtn.setAttribute("onclick", "beginGame()");
    displayDiv.appendChild(beginBtn);

    //display team name
    let teamName = appendElement("h1", "boss-battle-name", "team-name", team);
    displayDiv.appendChild(teamName);
}
// * * * * * * * * * * * * * * * * * * * APPEND ELEMENT * * * * * * * * * * * * * * * * * * *
function appendElement(element, elClass, elId, text){
    let newElement = document.createElement(element);
    if(elClass){
        newElement.classList.add(elClass);
    }
    if(elId){
        newElement.id = elId;
    }
    if(text){
        newElement.innerHTML = text;
    }
    
    return newElement
}
// * * * * * * * * * * * * * * * * * * * BEGIN GAME * * * * * * * * * * * * * * * * * * *
function beginGame(){
    //set bossHealth and players
    if(Math.floor(questionSet.length * .75)<20){
        bossHealth = Math.floor(questionSet.length * .75);
    } else {
        bossHealth = 20;
    }
    
    resetPlayers()

    //remove start button
    let btn = document.getElementById("game-start-btn");
    btn.remove();

    //display boss health
    let bossHealthDisplay = appendElement("p", "", "boss-health", bossHealth);
    let displayDiv = document.getElementById("display-div");
    displayDiv.appendChild(bossHealthDisplay);

    runGame();
}

function runGame(){
    //reset players if needed
    if(players.length===0){
        resetPlayers();
    }
    
    //get a random player - if none left, reset players.
    let randomNumber = Math.floor(Math.random() * players.length);
    let randomPlayer = players[randomNumber];

    //display avatar and name
    let playerImg = document.getElementById("player-img");
    playerImg.src = "img/avatars/"+randomPlayer[1]+".jpg";

    let playerName = document.getElementById("team-name");
    playerName.innerHTML = randomPlayer[0];

    //remove player from players
    players.splice(randomNumber, 1)
    
    //Ask a question
    askQuestion();
}

function askQuestion(){
    let questionBtns = document.getElementById("question-btns");
    let questionText = document.getElementById("question-div-text")
    let max = questionSet.length;
    let random = Math.floor(Math.random() * max);
    let question = questionSet[random].q;
    currentQuestion = [random]
    //display the random question
    questionText.innerHTML = question;

    //display button to see the answer
    let checkBtn = appendElement("button", "submit-btn", "checkBtn", "Check Answer");
    checkBtn.setAttribute("onclick", "displayAnswer()");
    questionBtns.appendChild(checkBtn);
    
}

function displayAnswer(){
    //display answer
    let questionText = document.getElementById("question-div-text");
    questionText.innerHTML = questionSet[currentQuestion].a;

    //remove check button
    let checkBtn = document.getElementById("checkBtn");
    checkBtn.remove();

    //add buttons to choose correct or incorrect
    let btnDiv = document.getElementById("question-btns");
    let correctBtn = appendElement("button", "submit-btn", "correct-btn", "Correct");
    let incorrectBtn = appendElement("button", "submit-btn", "incorrect-btn", "Incorrect");
    
    //button.onclick= "inCorrect(answer)"
    correctBtn.setAttribute("onclick", "inCorrect('correct')");
    incorrectBtn.setAttribute("onclick", "inCorrect('incorrect')");
    
    //append buttons
    btnDiv.appendChild(correctBtn);
    btnDiv.appendChild(incorrectBtn);
    //remove question from questionSet
    questionSet.splice(currentQuestion, 1);

    //remove explosion-animation class
    let explosionMonster = document.getElementById("explosion-monster");
    explosionMonster.classList.remove("explosion-animation");
    let crit = document.getElementById("crit");
    crit.classList.remove("critmiss-animation"); 
    let miss = document.getElementById("crit");
    miss.classList.remove("critmiss-animation"); 
    
}

function inCorrect(answer){
    //remove buttons
    let questionBtns = document.getElementById("question-btns");
    questionBtns.innerHTML = "";

    //remove explosion-animation class
    let explosionMonster = document.getElementById("explosion-monster");
    // explosionMonster.classList.remove("explosion-animation");
    let crit = document.getElementById("crit");
    // crit.classList.remove("critmiss-animation"); 
    let miss = document.getElementById("miss");
    // miss.classList.remove("critmiss-animation"); 
    
    //if correction then...
    if(answer === "correct"){
        //5% chance of critical hit, 5% chance of miss
        let random = Math.random();
        let damage = 1;
        if(random >= 0.95){
            damage = 2;
            crit.classList.add("critmiss-animation"); 
        } else if (random <= 0.05){
            damage = 0;
            miss.classList.add("critmiss-animation"); 
        }
        //remove boss health and display it
        bossHealth = bossHealth - damage;
        let bossHealthDisplay= document.getElementById("boss-health");
        bossHealthDisplay.innerHTML = bossHealth;

        //display hit with an animation
        explosionMonster.classList.add("explosion-animation");
        
    } else {
        
    }
        //if no more questions, end game
            if (questionSet.length <= 0 || bossHealth <= 0){
                endGame();
            } else {
                runGame()
            }
}

function resetPlayers(){
    players = [...teamMembers];
}

function endGame(){
    let displayDiv = document.getElementById("display-div");
    let questionDiv = document.getElementById("question-div");
    questionDiv.innerHTML = ""

    let vs = document.getElementById("vs");
    vs.remove()

    let bossHeathDisplay = document.getElementById("boss-health");
    bossHeathDisplay.remove()

    let monsterImg = document.getElementById("monster-img");
    let monsterName = document.getElementById("monster-name");
    let playerImg = document.getElementById("player-img");
    let playerName = document.getElementById("team-name");
    let explosionMonster = document.getElementById("explosion-monster");
    let crit = document.getElementById("crit");
    let miss = document.getElementById("miss");

    playerImg.remove();
    playerName.remove();
    explosionMonster.remove();
    crit.remove();
    miss.remove();
    

    if(bossHealth > 0){
        
        //display sorry banner
        let sorry = appendElement("h1", "", "end-game-banner", "Sorry! Better Luck Next Time!")
        displayDiv.appendChild(sorry);
        
    } else {
        //display congrats banner
        let contrats = appendElement("h1", "", "end-game-banner", "Congratulations! You did it!")
        displayDiv.appendChild(contrats);

        //show the team by removing monster and adding all team members
        monsterImg.remove();
        monsterName.remove();

        resetPlayers();

        players.forEach(player => {
            let winnerDiv = appendElement("div", "winner-div")

            let name = appendElement("h1", "boss-battle-name", "", player[0])
            winnerDiv.appendChild(name)
            let img = appendElement("img", "boss-battle-img")
            img.src="img/avatars/"+player[1]+".jpg";
            winnerDiv.appendChild(img);

            displayDiv.appendChild(winnerDiv);
        });
        

    }
}
