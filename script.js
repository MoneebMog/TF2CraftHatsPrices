
const scout_dict = {'Alien Cranium': 3.77, 'Argyle Ace': 1.44, 'Backwards Ballcap': 1.88, "Baseball Bill's Sports Shine": 2.55, 'Beastly Bonnet': 1.55, 'Beep Boy': 1.44, 'Big Elfin Deal': 1.44, 'Bigg Mann on Campus': 2.0, 'Biomech Backpack': 4.22, 'Bonk Boy': 1.55, 'Bonk Helm': 2.22, 'Bootenkhamuns': 1.44, 'Bootie Time': 1.44, 'Boston Boom-Bringer': 1.44, 'Buck Turner All-Stars': 32.77, 'Caffeine Cooler': 1.44, 'Cheet Sheet': 1.77, 'Champ Stamp': 1.55, 'Chucklenuts': 1.44, 'Cool Cat Cardigan': 2.11, 'Crafty Hair': 2.0, 'Cross-Comm Express': 2.33, "Delinquent's Down Vest": 2.66, "Dillinger's Duffel": 1.66, 'Digit Divulger': 2.11, 'Fast Learner': 2.44, "Fed-Fightin' Fedora": 1.44, 'Flapjack': 4.22, 'Flipped Trilby': 1.33, 'Flight of the Monarch': 1.55, 'Flunkyware': 1.77, "Frickin' Sweet Ninja Hood": 2.88, 'Front Runner': 1.66, "Frenchman's Formals": 1.44, 'Greased Lightning': 1.44, 'Hanger-On Hood': 2.11, "Hero's Tail": 10.44, 'Hermes': 1.44, 'Little Drummer Mann': 1.44, 'Macho Mann': 5.77, 'Milkman': 1.44, 'Mutton Mann': 1.44, "Orion's Belt": 1.44, 'Paisley Pro': 1.44, 'Planeswalker Goggles': 1.66, 'Pomade Prince': 1.44, 'Red Socks': 1.44, "Runner's Warm-Up": 1.44, 'Scout Shako': 1.44, "Sign of the Wolf's School": 1.66, 'Sole Saviors': 1.55, 'Southie Shinobi': 2.0, 'Stereoscopic Shades': 1.44, 'Superfan': 'price', 'Teufort Tooth Kicker': 1.44, 'Ticket Boy': 3.44, 'Tomb Wrapper': 1.44, 'Track Terrorizer': 1.77, 'Triad Trinket': 1.66, "Troublemaker's Tossle Cap": 2.33, 'Whoopee Cap': 1.44, 'Wilson Weave': 1.44, 'Xeno Suit': 3.33, 'Ye Olde Baker Boy': 1.66, 'El Jefe': 1.44, 'Bacteria Blocker': 2.22, 'Bombing Run': 1.44, 'Half-Pipe Hurdler': 1.44, 'Weight Room Warmer': 8.11, 'Spooky Shoes': 1.55, 'Spooky Sleeves': 1.66}
;

const soldier_dict = {'All-Father': 12.0, 'Antarctic Parka': 9.66, 'Armored Authority': 1.55, 'Brawling Buccaneer': 2.33, 'Brain Bucket': 1.55, 'Battle Bob': 2.33, 'Big Daddy': 1.44, 'Bonedolier': 1.44, "Captain's Cocktails": 1.44, 'Caribbean Conqueror': 1.55, "Chieftain's Challenge": 1.44, 'Chief Constable': 1.44, 'Cloud Crasher': 1.44, 'Colonial Clogs': 1.44, 'Compatriot': 1.44, 'Conquistador': 1.44, 'Crafty Hair': 2.0, 'Cuban Bristle Crisis': 14.77, 'Deadliest Duckling': 2.88, 'Defiant Spartan': 1.44, 'Doe-Boy': 1.44, 'Exorcizor': 1.77, 'Exquisite Rack': 2.44, 'Fancy Dress Uniform': 2.22, 'First American': 1.55, 'Founding Father': 1.55, 'Furious Fukaamigasa': 1.44, 'Gilded Guard': 1.44, "Grenadier's Softcap": 1.55, 'Ground Control': 3.0, 'Hat With No Name': 1.55, 'Helmet Without a Home': 1.33, "Hero's Hachimaki": 1.88, 'Hornblower': 2.0, 'Infernal Impaler': 1.441, "Jumper's Jeepcap": 1.44, "Killer's Kabuto": 1.77, "Killer's Kit": 13.0, 'Kringle Collection': 2.55, 'Lieutenant Bites': 1.55, "Lord Cockswain's Novelty Mutton Chops and Pipe": 2.44, "Lord Cockswain's Pith Helmet": 1.44, 'Lucky Shot': 1.44, 'Macho Mann': 5.77, 'Man in Slacks': 3.0, "Marshall's Mutton Chops": 1.55, 'Menpo': 4.44, 'Mutton Mann': 1.44, 'Ornament Armament': 1.44, 'Pocket Medic': 1.44, 'Powdered Practitioner': 1.44, "Professor's Pineapple": 1.77, 'Rebel Rouser': 1.44, "Sergeant's Drill Hat": 1.44, "Shogun's Shoulder Guard": 2.44, 'Slo-Poke': 1.44, "Soldier's Slope Scopers": 1.44, "Soldier's Stogie": 5.44, 'Spook Specs': 2.0, 'Stahlhelm': 1.44, 'Stainless Pot': 1.55, 'Stout Shako': 1.44, 'Teufort Tooth Kicker': 1.44, 'Toy Soldier': 1.33, "Tyrant's Helm": 1.66, 'Valley Forge': 1.44, 'Viking Braider': 1.44, 'War Pig': 2.22, 'Whirly Warrior': 1.44, "Honcho's Headgear": 1.55, 'Cross-Comm Crash Helmet': 1.55, 'Team Captain': 13.11, 'Classified Coif': 8.0}


const pyro_dict = {'Air Raider': 1.66, 'Area 451': 2.11, 'Attendant': 1.44, 'Backpack Broiler': 1.44, 'Beep Boy': 1.44, 'Birdcage': 1.44, 'Blizzard Breather': 1.88, 'Bone Dome': 1.44, 'Bonedolier': 1.44, 'Breather Bag': 1.77, 'Bubble Pipe': 1.44, 'Burning Bandana': 1.33, 'Burning Bongos': 1.44, 'Centurion': 1.77, 'Combustible Kabuto': 1.33, "Connoisseur's Cap": 1.55, "Cremator's Conscience": 1.66, 'Cute Suit': 18.11, 'Dead Cone': 1.44, 'Deadliest Duckling': 2.88, 'DethKapp': 3.44, 'El Muchacho': 1.88, 'Employee of the Mmmph': 1.33, 'Exorcizor': 1.77, 'Frymaster': 1.441, 'Flamboyant Flamenco': 1.44, 'Gas Guzzler': 1.44, "Handyman's Handle": 1.44, 'Hive Minder': 1.33, 'HazMat Headcase': 2.22, 'Head Warmer': 1.77, "Hottie's Hoodie": 1.44, 'Infernal Orchestrina': 1.44, 'Jingle Belt': 1.44, 'Last Breath': 8.44, 'Little Buddy': 1.44, "Lunatic's Leathers": 6.44, 'Madame Dixie': 1.44, 'Mair Mask': 1.66, 'Moonman Backpack': 1.44, "Napper's Respite": 1.55, 'Nabler': 1.66, 'Nose Candy': 3.88, 'Old Guadalajara': 1.44, 'Ornament Armament': 1.44, 'Pampered Pyro': 1.33, 'Person in the Iron Mask': 1.44, 'Pop-Eyes': 1.66, "Prancer's Pride": 1.44, "Professor's Pineapple": 1.77, "Pyromancer's Mask": 4.66, 'Rail Spikes': 3.44, 'Respectless Rubber Glove': 1.44, 'Russian Rocketeer': 1.44, 'Sengoku Scorcher': 1.55, 'Sight for Sore Eyes': 3.11, 'Smoking Skid Lid': 1.55, 'Sole Mate': 1.77, 'Special Eyes': 3.55, 'Stately Steel Toe': 1.44, 'Steel Sixpack': 2.33, 'Sub Zero Suit': 16.22, 'Soot Suit': 1.77, 'Tiny Timber': 1.331, 'Triboniophorus Tyrannus': 1.44, 'Toy Tailor': 1.44, "Trickster's Turnout Gear": 4.0, 'Vintage Merryweather': 1.55, 'Waxy Wayfinder': 1.44, 'Whiskered Gentleman': 1.44, 'Winter Wonderland Wrap': 1.55, 'Wraith Wrap': 1.44, 'Scrap Pack': 1.44, 'Coffin Kit': 1.44, 'Trail-Blazer': 1.33, "Apparition's Aspect": 3.44, 'Brigade Helm': 1.77, 'Pyrotechnic Tote': 1.44}
;

const demoman_dict = {'A Whiff of the Old Brimstone': 1.44, "Aladdin's Private Reserve": 1.44, 'All-Father': 12.0, 'Allbrero': 1.44, 'Bearded Bombardier': 8.22, 'Bird-Man of Aberdeen': 1.55, 'Black Watch': 1.55, 'Blind Justice': 1.44, 'Bolgan': 1.44, 'Bonedolier': 1.44, 'Buck Turner All-Stars': 32.77, "Buccaneer's Bicorne": 1.66, 'Bushi-Dou': 14.77, "Carouser's Capotain": 1.44, 'Cool Breeze': 3.333, "Conjurer's Cowl": 1.44, 'Dark Age Defender': 3.66, 'Deadliest Duckling': 2.88, 'Frontier Djustice': 1.661, 'Gaelic Garb': 3.44, 'Gaelic Golf Bag': 1.44, 'Glasgow Great Helm': 1.77, 'Glengarry Bonnet': 1.44, 'Hat With No Name': 1.55, 'Highland High Heels': 1.55, "Hustler's Hallmark": 1.44, 'Hurt Locher': 1.55, 'Juggernaut Jacket': 5.335, 'King of Scotland Cape': 6.0, 'K-9 Mane': 1.44, 'Liquor Locker': 1.441, 'Macho Mann': 5.77, 'Mask of the Shaman': 1.44, 'Menpo': 4.44, 'Mutton Mann': 1.44, 'Ornament Armament': 1.44, 'Pirate Bandana': 1.55, "Prince Tavish's Crown": 2.11, 'Private Eye': 1.55, "Professor's Pineapple": 1.77, 'Reggaelator': 1.66, 'Rimmed Raincatcher': 1.44, 'Samur-Eye': 2.11, 'Sangu Sleeves': 2.88, 'Scotch Bonnet': 1.55, 'Seeing Double': 1.44, 'Six Pack Abs': 1.66, 'Snapped Pupil': 1.55, 'Sole Saviors': 1.55, 'Sober Stuntman': 1.44, 'Spooky Sleeves': 1.66, 'Stylish DeGroot': 1.44, 'Sub Zero Suit': 16.22, "Sultan's Ceremonial": 1.44, 'Tartan Shade': 5.44, 'Tartan Spartan': 1.44, 'Tartan Tyrolean': 1.44, 'Teufort Tooth Kicker': 1.44, "Tippler's Tricorne": 1.44, 'Toowoomba Tunic': 2.55, 'Voodoo JuJu (Slight Return)': 1.33, 'Weight Room Warmer': 8.11, 'Whiskey Bib': 2.11, 'Wilson Weave': 1.44, "Tam O' Shanter": 1.44, 'Razor Cut': 1.44, "Scotsman's Stove Pipe": 1.44, 'Tartantaloons': 6.33, 'Tavish DeGroot Experience': 1.44, "Stormin' Norman": 1.44}
;

const heavy_dict = {'All-Father': 12.0, 'Aqua Flops': 6.77, 'Bear Necessities': 1.55, 'Big Chief': 1.44, 'Big Steel Jaw of Summer Fun': 1.44, 'Bolshevik Biker': 1.44, 'Borscht Belt': 1.44, "Brock's Locks": 2.0, 'Bullet Buzz': 2.0, "Cadaver's Cranium": 1.33, "Capo's Capper": 1.55, 'Carl': 4.224, 'Champ Stamp': 1.55, 'Cold War Luchador': 1.44, 'Combat Slacks': 7.44, "Copper's Hard Top": 1.44, 'Crafty Hair': 22.11, 'Cuban Bristle Crisis': 14.77, 'Dread Knot': 1.44, 'Dragonborn Helmet': 1.44, "Eliminator's Safeguard": 3.88, 'Gabe Glasses': 1.44, 'Gone Commando': 8.22, 'Gym Rat': 1.44, 'Hard Counter': 1.44, 'Hound Dog': 1.44, 'Hunger Force': 3.44, 'Jungle Booty': 1.551, 'K-9 Mane': 1.44, 'Katyusha': 1.44, 'Large Luchadore': 1.44, 'Leftover Trap': 2.88, 'Little Bear': 1.33, 'Macho Mann': 5.77, 'Magnificent Mongolian': 1.44, 'Mann of the House': 2.44, 'Minnesota Slick': 1.55, 'Mutton Mann': 1.44, 'One-Man Army': 1.66, 'Outdoorsman': 1.44, 'Pilotka': 1.55, 'Pocket Medic': 1.44, 'Pounding Father': 1.44, "Pugilist's Protector": 1.44, 'Purity Fist': 2.55, 'Rat Stompers': 1.44, 'Red Army Robin': 2.0, 'Sammy Cap': 1.88, 'Sandvich Safe': 1.44, 'Security Shades': 3.22, 'Siberian Sophisticate': 7.44, 'Soviet Gentleman': 1.66, 'Spooky Sleeves': 1.66, 'Team Captain': 13.11, "Tough Guy's Toque": 1.44, 'Trash Man': 1.55, 'Triad Trinket': 1.66, 'Tsarboosh': 1.33, 'Tyurtlenek': 1.33, 'Viking Braider': 1.44, 'War Goggles': 2.44, 'War Head': 1.44, 'Warmth Preserver': 2.11, 'Wilson Weave': 1.44, "Yuri's Revenge": 2.0, 'Heavy Duty Rag': 1.44, "Officer's Ushanka": 3.44, "Apparatchik's Apparel": 1.55, "Coupe D'isaster": 1.44, 'Heavy Lifter': 19.77, "Heavy Artillery Officer's Cap": 1.55, 'Heavy-Weight Champ': 1.44, 'Weight Room Warmer': 8.11, "Heavy's Hockey Hair": 1.33, 'Der Maschinensoldaten-Helm': 4.11, 'Die Regime-Panzerung': 6.22, 'Toss-Proof Towel': 1.44}
;

const engineer_dict = {'All-Father': 12.0, 'Antarctic Researcher': 8.66, 'Beep Boy': 1.44, 'Big Country': 1.44, 'Brainiac Goggles': 1.44, 'Brainiac Hairpiece': 1.66, "Buckaroo's Hat": 1.441, "Builder's Blueprints": 1.44, 'Champ Stamp': 1.55, 'Crafty Hair': 2.0, 'Cuban Bristle Crisis': 14.77, 'Cute Suit': 18.11, 'Danger': 8.88, 'Deadliest Duckling': 2.88, 'Dogfighter': 6.666, 'Dry Gulch Gulp': 1.44, "Egghead's Overalls": 7.55, 'Ein': 1.77, 'Endothermic Exowear': 3.77, "Engineer's Cap": 1.44, 'Face Full of Festive': 1.66, 'Flared Frontiersman': 1.44, 'Googly Gazer': 1.44, 'Gold Digger': 2.77, 'Grizzled Growth': 2.33, 'Hat With No Name': 1.55, "Hetman's Headpiece": 1.33, 'Hotrod': 1.44, 'Idea Tube': 1.441, 'Industrial Festivizer': 2.55, 'Itsy Bitsy Spyer': 1.44, 'Joe-on-the-Go': 1.44, 'Last Straw': 1.77, 'Level Three Chin': 12.33, 'Lonesome Loafers': 1.44, 'Macho Mann': 5.775, 'Mister Bubbles': 1.551, 'Mutton Mann': 1.44, "Ol' Geezer": 1.44, "Pardner's Pompadour": 1.44, 'Pencil Pusher': 1.33, "Peacenik's Ponytail": 1.33, 'Pip-Boy': 3.44, 'Pocket Purrer': 1.441, 'Pocket Pyro': 1.44, 'Prairie Heel Biters': 1.44, 'Prize Plushy': 1.44, "Professor's Peculiarity": 1.44, "Safe'n'Sound": 1.44, 'Scotch Saver': 11.22, 'Special Eyes': 3.55, 'Spooky Sleeves': 1.66, 'Stocking Stuffer': 1.44, "Trencher's Topper": 1.55, "Trencher's Tunic": 5.66, 'Triad Trinket': 1.66, 'Virtual Reality Headset': 1.44, 'Viking Braider': 1.44, 'Vox Diabolus': 1.44, 'Wingstick': 1.33, 'Wilson Weave': 1.442, "Texas Slim's Dome Shine": 2.55, 'Trash Toter': 1.55, 'Teufort Tooth Kicker': 1.44, 'Tools of the Trade': 1.44, 'Texas Ten Gallon': 3.88, 'Teddy Roosebelt': 1.44, 'Barnstormer': 1.44, 'Texas Half-Pants': 1.55, 'Western Wear': 1.44}
;

const medic_dict = {'A Brush with Death': 4.66, 'All-Father': 12.0, 'Angel of Death': 6.22, 'Archimedes': 4.55, 'Baron von Havenaplane': 1.33, 'Blighted Beak': 11.44, 'Chronoscarf': 1.66, "Colonel's Coat": 5.44, "Combat Medic's Crusher Cap": 3.44, 'Couvre Corner': 1.44, 'Crafty Hair': 2.0, 'Das Fantzipantzen': 1.77, 'Das Gutenkutteharen': 1.55, 'Das Hazmattenhatten': 1.44, 'Das Maddendoktor': 1.55, 'Das Metalmeatencasen': 1.44, 'Das Naggenvatcher': 1.55, 'Das Ubersternmann': 1.55, 'Das Feelinbeterbager': 1.44, 'Der Wintermantel': 2.22, "Doctor's Sack": 1.44, "Doc's Holiday": 2.0, 'Dough Puncher': 2.55, 'Dr. Whoa': 1.44, 'Exorcizor': 1.771, 'Fashionable Megalomaniac': 2.55, 'Foppish Physician': 2.66, 'Gaiter Guards': 3.55, "Gentleman's Gatsby": 1.44, "Gentleman's Ushanka": 1.44, 'Geisha Boy': 1.44, 'German Gonzila': 1.44, 'Grimm Hatte': 1.55, 'Heat of Winter': 22.88, "Heer's Helmet": 3.0, 'Mann of Reason': 1.44, 'Macho Mann': 5.77, 'Medi-Mask': 1.77, "Medic's Mountain Cap": 1.44, 'Medical Mystery': 2.22, 'Medicine Manpurse': 1.55, 'Nunhood': 8.11, "Otolaryngologist's Mirror": 1.44, "Physician's Procedure Mask": 1.44, 'Planeswalker Helm': 1.44, 'Powdered Practitioner': 1.441, 'Private Eye': 1.55, 'Quadwrangler': 5.11, 'Ruffled Ruprecht': 2.11, 'Scrap Pack': 1.44, 'Slick Cut': 1.44, 'Smock Surgeon': 5.44, "Surgeon's Side Satchel": 1.441, "Surgeon's Stahlhelm": 1.44, "Surgeon's Stethoscope": 1.44, 'Teutonic Toque': 1.66, 'Team Captain': 13.11, 'Vintage Tyrolean': 1.44, 'Ward': 1.66, 'Weather Master': 1.66, 'Wilson Weave': 1.44, 'Ze Goggles': 1.441, 'Ze Übermensch': 1.55, 'Mutton Mann': 1.44, "Berliner's Bucket Helm": 1.44, 'Nine-Pipe Problem': 1.77}
;

const sniper_dict = {'All-Father': 12.0, "Liquidator's Lid": 1.66, 'Koala Compact': 1.44, 'Anger': 3.44, 'Sir Hootsalot': 1.44, 'Outback Intellectual': 1.77, 'Toowoomba Tunic': 2.55, "Professional's Panama": 1.44, 'Deep Cover Operator': 3.0, "Ritzy Rick's Hair Fixative": 1.66, 'Your Worst Nightmare': 2.22, 'Mutton Mann': 1.44, 'Brim-Full of Bullets': 1.55, "Villain's Veil": 2.22, 'Snow Scoper': 3.55, 'Deadliest Duckling': 2.88, "Bushman's Boonie": 1.55, 'Wet Works': 1.44, 'HazMat Headcase': 2.22, 'Dread Hiding Hood': 1.55, 'Itsy Bitsy Spyer': 1.44, 'Champ Stamp': 1.55, 'Golden Garment': 2.11, 'Spooky Sleeves': 1.66, 'Desert Marauder': 1.44, 'Crocleather Slouch': 1.44, "Huntsman's Essentials": 1.55, "Shooter's Sola Topi": 1.44, "Master's Yellow Belt": 1.44, "Triggerman's Tacticals": 10.22, 'Criminal Cloak': 1.44, 'Five-Month Shadow': 3.0, 'Extra Layer': 1.55, 'Falconer': 1.441, 'Triad Trinket': 1.661, 'Crocodile Smile': 1.44, "Swagman's Swatter": 1.55, 'Birdman of Australiacatraz': 1.55, "Li'l Snaggletooth": 1.44, 'Steel Songbird': 1.33, "Archer's Groundings": 2.11, 'Cobber Chameleon': 1.44, 'Teufort Tooth Kicker': 1.44, 'Doublecross-Comm': 9.66, 'Stovepipe Sniper Shako': 1.44, 'Sydney Straw Boat': 1.44, 'Larrikin Robin': 1.44, "Scoper's Smoke": 1.66, 'Hat With No Name': 1.55, "Ol' Snaggletooth": 1.441, 'Toy Soldier': 1.33, 'Fruit Shoot': 1.44, 'Macho Mann': 5.775, "Bloke's Bucket Hat": 1.44, 'Chronomancer': 2.77, 'Cold Killer': 1.55, 'Lone Star': 1.66}


const spy_dict = 
{'After Dark': 1.44, 'Au Courant Assassin': 1.44, 'Aviator Assassin': 1.44, "Backbiter's Billycock": 1.44, "Backstabber's Boomslang": 2.33, 'Belgian Detective': 1.77, 'Blood Banker': 1.55, 'Business Casual': 1.551, 'Camera Beard': 1.44, "Charmer's Chapeau": 1.55, 'Cosa Nostra Cap': 2.66, 'Counterfeit Billycock': 1.44, 'Cut Throat Concierge': 2.77, "Dashin' Hashshashin": 5.0, 'Deep Cover Operator': 3.0, 'Distinguished Rogue': 2.0, 'Détective Noir': 1.44, 'Doublecross-Comm': 9.66, 'Dr. Whoa': 1.44, 'Escapist': 1.44, 'Exorcizor': 1.771, 'Familiar Fez': 1.55, "Frenchman's Beret": 1.55, "Frenchman's Formals": 1.44, 'Harmburg': 1.44, 'Hat of Cards': 2.0, 'Janissary Ketche': 1.44, "L'homme Burglerre": 1.44, "L'Inspecteur": 1.44, 'Le Party Phantom': 1.44, 'Macho Mann': 5.77, 'Made Man': 1.66, "Magistrate's Mullet": 1.44, 'Nanobalaclava': 1.44, 'Noh Mercy': 4.77, 'Pom-Pommed Provocateur': 1.44, 'Powdered Practitioner': 1.44, 'Private Eye': 1.55, "Rogue's Brogues": 1.44, "Rogue's Col Roule": 1.882, "Rogue's Robe": 3.33, 'Scarecrow': 1.44, 'Sky Captain': 1.44, 'Sneaky Spats of Sneaking': 2.33, "Spectre's Spectacles": 1.44, 'Triad Trinket': 1.661, 'Lacking Moral Fiber Mask': 2.33, 'Napoleon Complex': 1.44}
;

const all_class_dict = 
{"Crone's Dome": 1.66, "Merc's Mohawk": 1.44, "Dr's Dapper Topper": 1.77, 'Tuxxy': 1.55, "Merc's Muffler": 2.22, 'Prinny Pouch': 1.55, 'Human Cannonball': 1.44, 'Modest Pile of Hat': 1.44, 'Mark of the Saint': 1.55, 'Whale Bone Charm': 1.55, 'Clan Pride': 1.33, 'Hitt Mann Badge': 1.55, "Crosslinker's Coil": 1.55, 'Reindoonicorn': 1.441, 'Point and Shoot': 5.33, 'Tomb Readers': 3.77, 'Deus Specs': 1.66, 'Dadliest Catch': 1.88, 'Graybanns': 8.66, 'A Rather Festive Tree': 1.44, 'Flair!': 5.115, 'Dictator': 2.0, 'Virtual Viewfinder': 1.55, "Croft's Crest": 1.551, 'Killer Exclusive': 1.44, 'Executioner': 1.66, 'Cotton Head': 1.44, 'Faerie Solitaire Pin': 1.551, 'Prinny Hat': 2.22, 'Horrific Headsplitter': 1.44, 'Mustachioed Mann': 2.0, 'Vigilant Pin': 1.55, 'Eye-Catcher': 1.661, 'Law': 1.88, 'Dead of Night': 31.11, 'Marxman': 1.66, "Rump-o'-Lantern": 1.44, 'Federal Casemaker': 1.77, 'Well-Rounded Rifleman': 1.44, 'Towering Pillar of Hats': 1.44, 'Hot Dogger': 1.44, 'Crown of the Old Kingdom': 1.44, 'Hong Kong Cone': 12.88, 'Brotherhood of Arms': 5.11, 'Salty Dog': 1.55, 'Dark Falkirk Helm': 1.55, "That '70s Chapeau": 9.11, 'Brimstone': 1.88, 'Bolgan Family Crest': 1.44, 'Company Man': 1.55, 'Noble Amassment of Hats': 1.44, 'Balloonicorn': 1.55, 'Hardy Laurel': 3.33, 'Fortune Hunter': 1.77, 'Athletic Supporter': 'price', 'Merc Medal': 1.55, 'Breakneck Baggies': 8.44, 'Kiss King': 1.331, 'Warsworn Helmet': 1.44, 'Photo Badge': 2.33, "Bruiser's Bandanna": 10.88, 'Baronial Badge': 1.44, 'Pocket Raiders': 1.44, 'Antlers': 1.44, 'Polar Pullover': 1.55, 'Vive La France': 1.66, 'Brown Bomber': 1.55, 'Neckwear Headwear': 1.33, 'Awesomenauts Badge': 1.55, 'Tipped Lid': 1.44, 'Atomic Accolade': 1.55, 'Heroic Companion Badge': 1.551, 'Tough Stuff Muffs': 1.44, 'Cockfighter': 3.33, 'Brütal Bouffant': 8.55, 'MK 50': 3.22, 'Smissmas Wreath': 1.44}
;

// Function to create HTML elements for items and their values
function createItemList(itemDict) {
  const itemList = document.createElement("div");
  for (const item in itemDict) {
    const itemElement = document.createElement("div");
    itemElement.className = "item";
    itemElement.textContent = `${item}: ${itemDict[item]}`;
    itemList.appendChild(itemElement);
  }
  return itemList;
}

// Function to toggle visibility of the items list when clicking the section header
function toggleItemsList(sectionId) {
  const itemsList = document.getElementById(sectionId);
  itemsList.classList.toggle("collapsed"); // Toggle the 'collapsed' class
}


document.addEventListener("DOMContentLoaded", () => {
  const scoutItemsList = createItemList(scout_dict);
  document.getElementById("scout-items").appendChild(scoutItemsList);

  const soldierItemsList = createItemList(soldier_dict);
  document.getElementById("soldier-items").appendChild(soldierItemsList);

  const pyroItemsList = createItemList(pyro_dict);
  document.getElementById("pyro-items").appendChild(pyroItemsList);

  const demomanItemsList = createItemList(demoman_dict);
  document.getElementById("demoman-items").appendChild(demomanItemsList);

  const heavyItemsList = createItemList(heavy_dict);
  document.getElementById("heavy-items").appendChild(heavyItemsList);

  const engineerItemsList = createItemList(engineer_dict);
  document.getElementById("engineer-items").appendChild(engineerItemsList);

  const medicItemsList = createItemList(medic_dict);
  document.getElementById("medic-items").appendChild(medicItemsList);

  const sniperItemsList = createItemList(sniper_dict);
  document.getElementById("sniper-items").appendChild(sniperItemsList);

  const spyItemsList = createItemList(spy_dict);
  document.getElementById("spy-items").appendChild(spyItemsList);

  const allClassItemsList = createItemList(all_class_dict);
  document.getElementById("all-class-items").appendChild(allClassItemsList);

  // Set up click event listeners for the section headers to toggle visibility
  document.getElementById("scout-section").addEventListener("click", () => {
    toggleItemsList("scout-items");
  });

  document.getElementById("soldier-section").addEventListener("click", () => {
    toggleItemsList("soldier-items");
  });

  document.getElementById("pyro-section").addEventListener("click", () => {
    toggleItemsList("pyro-items");
  });

  document.getElementById("demoman-section").addEventListener("click", () => {
    toggleItemsList("demoman-items");
  });

  document.getElementById("heavy-section").addEventListener("click", () => {
    toggleItemsList("heavy-items");
  });

  document.getElementById("engineer-section").addEventListener("click", () => {
    toggleItemsList("engineer-items");
  });

  document.getElementById("medic-section").addEventListener("click", () => {
    toggleItemsList("medic-items");
  });

  document.getElementById("sniper-section").addEventListener("click", () => {
    toggleItemsList("sniper-items");
  });

  document.getElementById("spy-section").addEventListener("click", () => {
    toggleItemsList("spy-items");
  });

  document.getElementById("all-class-section").addEventListener("click", () => {
    toggleItemsList("all-class-items");
  });
});
