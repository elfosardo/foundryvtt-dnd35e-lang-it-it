import * as cache from "../../systems/D35E/module/cache.js";
import { CACHE } from "../../systems/D35E/module/cache.js";

const classTransformation = {
  "Adept (NPC)": "Adepto (PNG)",
  "Animal Companion": "Compagno Animale",
  "Arcane Trickster": "Arcane Trickster",
  "Aristocrat (NPC)": "Aristocratico (PNG)",
  Assassin: "Assassino",
  Barbarian: "Barbaro",
  Bard: "Bardo",
  Blackguard: "Guardia Nera",
  Cleric: "Chierico",
  "Commoner (NPC)": "Popolano (PNG)",
  Druid: "Druido",
  "Dwarven Defender": "Difensore Nanico",
  "Expert (NPC)": "Esperto (PNG)",
  Fighter: "Guerriero",
  Monk: "Monaco",
  Paladin: "Paladino",
  "Psychic Warrior": "Psychic Warrior",
  Ranger: "Ranger",
  Rogue: "Ladro",
  Sorcerer: "Stregone",
  Soulknife: "Soulknife",
  "Warrior (NPC)": "Combattente (PNG)",
  "Wizard Familiar": "Famiglio",
  Wizard: "Mago",
};

const domainTransofrmation = {
  Air: "Aria",
  Animal: "Animale",
  Artifice: "Artificio",
  Chaos: "Caos",
  Charm: "Charme",
  Community: "Comunità",
  Creation: "Creazione",
  Darkness: "Oscurità",
  Death: "Morte",
  Destruction: "Distruzione",
  Earth: "Terra",
  Evil: "Male",
  Fire: "Fuoco",
  Glory: "Gloria",
  Good: "Bene",
  Healing: "Guarigione",
  Knowledge: "Conoscenza",
  Law: "Legge",
  Liberation: "Libertà",
  Luck: "Fortuna",
  Madness: "Follia",
  Magic: "Magia",
  Nobility: "Nobiltà",
  Plant: "Vegetale",
  Protection: "Protezione",
  Repose: "Riposo",
  Rune: "Rune",
  Scalykind: "Rettili",
  Strength: "Forza",
  Sun: "Sole",
  Travel: "Viaggio",
  Trickery: "Inganno",
  War: "Guerra",
  Water: "Acqua",
  Weather: "Tempo Atmosferico",
};

const domainAndSchoolsTransformation = {
  "Abjuration Spell School": "Scuola dell'Abiurazione",
  "Air Domain": "Dominio dell'Aria",
  "Animal Domain": "Dominio Animale",
  "Artifice Domain": "Dominio dell'Artificio",
  "Chaos Domain": "Dominio del Caos",
  "Charm Domain": "Dominio dello Charme",
  "Community Domain": "Dominio della Comunità",
  "Conjuration Spell School": "Scuola dell'Invocazione",
  "Creation Domain": "Dominio della Creazione",
  "Darkness Domain": "Dominio dell'Oscurità",
  "Death Domain": "Dominio della Morte",
  "Destruction Domain": "Dominio della Distruzione",
  "Earth Domain": "Dominio della Terra",
  "Enchantment Spell School": "Scuola dell'Ammaliamento",
  "Evil Domain": "Dominio del Male",
  "Evocation Spell School": "Scuola dell'Evocazione'",
  "Fire Domain": "Dominio del Fuoco",
  "Glory Domain": "Dominio della Gloria",
  "Good Domain": "Dominio del Bene",
  "Healing Domain": "Dominio della Guarigione",
  "Illusion Spell School": "Scuola della Illusione",
  "Knowledge Domain": "Dominio della Conoscenza",
  "Law Domain": "Dominio della Legge",
  "Liberation Domain": "Dominio della Libertà",
  "Luck Domain": "Dominio della Fortuna",
  "Madness Domain": "Dominio della Follia",
  "Magic Domain": "Dominio della Magia",
  "Necromancy Spell School": "Scuola della Necromanzia",
  "Nobility Domain": "Dominio della Nobiltà",
  "Plant Domain": "Dominio Vegetale",
  "Protection Domain": "Dominio della Protezione",
  "Repose Domain": "Dominio del Riposo",
  "Rune Domain": "Dominio delle Rune",
  "Scalykind Domain": "Dominio dei Rettili",
  "Strength Domain": "Dominio della Forza",
  "Sun Domain": "Dominio del Sole",
  "Transmutation Spell School": "Scuola della Trasmutazione",
  "Travel Domain": "Dominio del Viaggio",
  "Trickery Domain": "Dominio dell'Inganno",
  "War Domain": "Dominio della Guerra",
  "Water Domain": "Dominio dell'Acqua",
  "Weather Domain": "Dominio del Tempo Atmosferico",
};

const raceTransformation = {
  "Aasimar": "Aasimar",
  "Dromite": "Dromite",
  "Duergar": "Duergar",
  "Dwarf, Deep": "Nano delle Profondità",
  "Dwarf, Hill": "Nano delle Colline",
  "Dwarf, Mountain": "Nano delle Montagne",
  "Elan": "Elan",
  "Elf, Aquatic": "Elfo Acquatico",
  "Elf, Drow": "Drow (Elfo Scuro)",
  "Elf, Grey": "Elfo Grigio",
  "Elf, High": "Elfo Alto",
  "Elf, Wild": "Elfo Selvaggio",
  "Elf, Wood": "Elfo dei Boschi",
  "Gnome, Forest": "Gnomo della Foresta",
  "Gnome, Rock": "Gnomo delle Rocce",
  "Gnome, Svirfneblin": "Svirfneblin (Gnomo delle Profondità)",
  "Goblin": "Goblin",
  "Goblin, Blue": "Goblin Blu",
  "Half-Elf": "Mezzelfo",
  "Half-Giant": "Mezzo Gigante",
  "Halfling, Deep": "Halfling delle Profondità",
  "Halfling, Lightfoot": "Halfling Piedelesto",
  "Halfling, Tallfellow": "Halfling Spilungoni",
  "Half-Orc": "Mezzorco",
  "Human": "Umano",
  "Kobold": "Coboldo",
  "Maenad": "Maenad",
  "Merfolk": "Merfolk",
  "Orc": "Orco",
  "Sprite, Pixie": "Sprite, Pixie",
  "Tiefling": "Tiefling",
  "Xeph": "Xeph",
};

Hooks.once("init", () => {
  if (typeof Babele !== "undefined") {
    Babele.get().register({
      module: "FoundryVTT-dnd35e-it",
      lang: "it",
      dir: "compendium",
    });

    Babele.get().registerConverters({
      classNames: (className) => {
        return classTransformation[className]
          ? classTransformation[className]
          : className;
      },
      domainAndSchoolNames: (itemName) => {
        return domainAndSchoolsTransformation[itemName]
          ? domainAndSchoolsTransformation[itemName]
          : itemName;
      },
      classNamesArray: (classesArray) => {
        classesArray.map((classArray) => {
          classArray[0] = classTransformation[classArray[0]]
            ? classTransformation[classArray[0]]
            : classArray[0];
          return classArray;
        });
        return classesArray;
      },
      domainNamesArray: (domainssArray) => {
        domainssArray.map((domainArray) => {
          domainArray[0] = domainTransofrmation[domainArray[0]]
            ? domainTransofrmation[domainArray[0]]
            : domainArray[0];
          return domainArray;
        });
        return domainssArray;
      },
      raceNames: (raceName) => {
        return raceTransformation[raceName]
          ? raceTransformation[raceName]
          : raceName;
      },
    });
  }
});

Hooks.once(`babele.ready`, cache.rebuildCache);
