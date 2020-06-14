
module.exports = {
    ROOT: __dirname,
    FILE_PATH:'/outputs/',
    ERROR_FILE_PATH: '',
    STATS_MIN_VALUE: 3,
    STATS_MIN_SUM: 40,
    STATS_MAX_ROLLABLE: 12,
    HP_BASE: 10,
    HP_VITALITY_INCREASE: 4,
    HP_LEVEL_INCREASE: 5,
    ENUM_SKILL_NAMES: {
        lockPicking: 'Lock picking',
        steal: 'Steal',
        dagger: 'Dagger',
        oneHandSword: '1H Sword',
        twoHandSword: '2H Sword',
        archer: 'archer',
        staff: 'Staff',
        shield: 'Shield',
        axe: 'Axe',
        mace: 'Mace',
        spear: 'Spear',
        fishing: 'Fishing',
        cooking: 'Cooking',
        tracking: 'Tracking',
        persuade: 'Persuade',
        swim: 'Swim',
        lightArmor: 'Light Armor',
        heavyArmor: 'Heavy Armor',
        robes: 'Robes',
        scout: 'Scout',
        findTraps: 'Find traps',
        healing: 'Healing',
        hunting: 'Hunting',
        woodWorking: 'Wood working',
        scholar: 'Scholar'
    },
    ENUM_STAT_NAMES: {
        strength: 'strength',
        agility: 'agility',
        vitality: 'vitality',
        intelligence: 'intelligence',
        wisdom: 'wisdom',
        luck: 'luck',
        charm: 'charm'
    },
    ENUM_JOB_NAMES: {
        rouge: 'Rouge',
        fighter: 'Fighter',
        knight: 'Knight',
        wizard: 'Wizard',
        cleric: 'Cleric',
        thief: 'Thief',
        noble: 'Noble',
        peseant: 'Peseant',
        monk: 'Monk',
        ranger: 'Ranger'
    },
    ENUM_LANGUAGES: {
        common: 'Common',
        commonElven: 'Common elven',
        highElven: 'High elven',
        darkElven: 'Dark elven',
        woodElven: 'Wood elven',
        dwarven: 'Dwarven',
        ancient: 'Ancient',
        black: 'Black',
        orcen: 'Orc',
        nobility: 'Nobility'
    },
    ENUM_RACE_NAMES: {
        human: 'Human',
        halfElf: 'Half elf',
        highElf: 'High elf',
        darkElf: 'Dark elf',
        woodElf: 'Wood elf',
        halfling: 'Halfling',
        dwarf: 'Dwarf'
    },
    ENUM_EQUIPMENT_TYPE: {
        oneHandSword: 'one hand sword',
        twoHandSword: 'two hand sword',
        lightArmor: 'light armor',
        heavyArmor: 'heavy armor',
        
    },
    ENUM_BODY_PART: {
        head:'head',
        rightHand:'rightHand',
        leftHand: 'leftHand',
        body: 'body',
        legs: 'legs'
    },
    ENUM_DICE: {
        d4:'D4',
        d6:'D6',
        d8:'D8',
        d10:'D10',
        d12:'D12',
        d20:'D20',
    },
    ENUM_PERSONALITY_TRAITS: {
        egoistic:'egoistic',
        currious:'currious',
        friendly:'friendly',
        lonewolf:'lonewolf',
        stoic:'stoic',
        leader:'leader',
        loudmouth:'loudmouth',
        clumpsy:'clumpsy',
        meddler:'meddler',
        knowsItAll: 'knowsItAll',
        all:'all',
        none: 'none'
    },
    ENUM_SEASONS: {
        winter: 'Winter',
        spring: 'Spring',
        summer: 'Summer',
        fall: 'Fall'
    },
    ENUM_EXPLORE_DIR: {
        north: 'N',
        south: 'S',
        west: 'W',
        east: 'E',
        unknown: 'U'
    },
    ENUM_EXPLORE_STATUS: {
        valid: 1,
        visited: 2,
        empty: 3,
        start: 4,
        goal: 5,
        obstacle:6,
        blocked:7,
        invalid:8,
        unknown:9
    },
    ENUM_BIOMES: {
        forest: 'F',
        hills: 'H',
        swamp: 'S',
        mountains: 'M',
        plains: 'P',
        lake: 'L',
        dessert: 'D',
        badlands: 'B',
        city: 'C',
        road: 'R',
        questLocation: 'Q'
    },
    ENUM_BIOME_DESCRIPTIONS: {
        forest: 'forest',
        hills: 'hills',
        swamp: 'swamp',
        mountains: 'mountains',
        plains: 'plains',
        lake: 'lake',
        dessert: 'dessert',
        badlands: 'badlands'
    },
    ENUM_EVENT_TYPE: {
        restEvent:'restEvent',
        travelEvent:'travelEvent',
        questEvent: 'questEvent'
    },
    ENUM_CHARACTER_STATUS: {
        dead: 'dead',
        alive: 'alive',
        died: 'died'
    },
    ENUM_TRAVEL_RESULTS: {
        allGood: 'allGood',
        noTravel: 'noTravel'
    },
    ENUM_SPELLS: {
        burst:'burst',
        heal: 'heal',
        protection:'protection',
        trueSight:'trueSight'
    },
    ENUM_QUESTS: {
        rumorsOfLostCaravan: 'rumorsOfLostCaravan',
        rumorsOfRuins:'rumorsOfRuins',
        rumorsOfMagic:'rumorsOfMagic',
        rumorsOfTreasure: 'rumorsOfTreasure',
        rumorsOfMonster: 'rumorsOfMonster'
    },
    ENUM_QUEST_STATUS: {
        ONGOING: 0,
        COMPLETED: 1
    }
}