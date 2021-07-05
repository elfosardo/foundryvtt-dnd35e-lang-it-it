import * as cache from "../../systems/D35E/module/cache.js";
import { CACHE } from "../../systems/D35E/module/cache.js";

const classTransformation = {
  Druid: "Druido",
  Barbarian: "Barbaro",
  Cleric: "Chierico",
  Fighter: "Guerriero",
  Monk: "Monaco",
  Paladin: "Paladino",
  Rogue: "Ladro",
  Sorcerer: "Stregone",
  Wizard: "Mago",
  Bard: "Bardo",
  "Aristocrat (NPC)": "Aristocratico (PNG)",
  "Commoner (NPC)": "Popolano (PNG)",
  "Warrior (NPC)": "Combattente (PNG)",
  "Psychic Warrior": "Psychic Warrior",
  Blackguard: "Guardia Nera",
  "Expert (NPC)": "Esperto (PNG)",
  "Adept (NPC)": "Adepto (PNG)",
  Soulknife: "Soulknife",
  "Wizard Familiar": "Famiglio",
  "Animal Companion": "Compagno Animale",
  Ranger: "Ranger",
  Assassin: "Assassino",
  "Arcane Trickster": "Arcane Trickster",
  "Dwarven Defender": "Difensore Nanico",
};

const domainTransofrmation = {
  Sun: "Sole",
  Nobility: "Nobiltà",
  Plant: "Vegetale",
  Darkness: "Oscurità",
  Madness: "Follia",
  Chaos: "Caos",
  Destruction: "Distruzione",
  Water: "Acqua",
  Magic: "Magia",
  Weather: "Tempo Atmosferico",
  Scalykind: "Rettili",
  Air: "Aria",
  Death: "Morte",
  Liberation: "Libertà",
  Protection: "Protezione",
  Artifice: "Artificio",
  Law: "Legge",
  Travel: "Viaggio",
  Repose: "Riposo",
  Charm: "Charme",
  Community: "Comunità",
  Evil: "Male",
  Luck: "Fortuna",
  Knowledge: "Conoscenza",
  Creation: "Creazione",
  Earth: "Terra",
  Animal: "Animale",
  Fire: "Fuoco",
  Trickery: "Inganno",
  War: "Guerra",
  Rune: "Rune",
  Good: "Bene",
  Glory: "Gloria",
  Healing: "Guarigione",
  Strength: "Forza",
};

const domainAndSchoolsTransformation = {
  "Sun Domain": "Dominio del Sole",
  "Nobility Domain": "Dominio della Nobiltà",
  "Plant Domain": "Dominio Vegetale",
  "Darkness Domain": "Dominio dell'Oscurità",
  "Madness Domain": "Dominio della Follia",
  "Chaos Domain": "Dominio del Caos",
  "Destruction Domain": "Dominio della Distruzione",
  "Water Domain": "Dominio dell'Acqua",
  "Magic Domain": "Dominio della Magia",
  "Weather Domain": "Dominio del Tempo Atmosferico",
  "Scalykind Domain": "Dominio dei Rettili",
  "Air Domain": "Dominio dell'Aria",
  "Death Domain": "Dominio della Morte",
  "Liberation Domain": "Dominio della Libertà",
  "Protection Domain": "Dominio della Protezione",
  "Artifice Domain": "Dominio dell'Artificio",
  "Law Domain": "Dominio della Legge",
  "Travel Domain": "Dominio del Viaggio",
  "Repose Domain": "Dominio del Riposo",
  "Charm Domain": "Dominio dello Charme",
  "Community Domain": "Dominio della Comunità",
  "Evil Domain": "Dominio del Male",
  "Luck Domain": "Dominio della Fortuna",
  "Knowledge Domain": "Dominio della Conoscenza",
  "Creation Domain": "Dominio della Creazione",
  "Earth Domain": "Dominio della Terra",
  "Animal Domain": "Dominio Animale",
  "Fire Domain": "Dominio del Fuoco",
  "Trickery Domain": "Dominio dell'Inganno",
  "War Domain": "Dominio della Guerra",
  "Rune Domain": "Dominio delle Rune",
  "Good Domain": "Dominio del Bene",
  "Glory Domain": "Dominio della Gloria",
  "Healing Domain": "Dominio della Guarigione",
  "Strength Domain": "Dominio della Forza",
  "Abjuration Spell School": "Scuola dell'Abiurazione",
  "Conjuration Spell School": "Scuola dell'Invocazione",
  "Evocation Spell School": "Scuola dell'Evocazione'",
  "Illusion Spell School": "Scuola della Illusione",
  "Enchantment Spell School": "Scuola dell'Ammaliamento",
  "Necromancy Spell School": "Scuola della Necromanzia",
  "Transmutation Spell School": "Scuola della Trasmutazione",
};

async function fixSystemCache() {
  await cache.rebuildCache();
  console.log("IT-TRANSLATION | Cache is ", CACHE);
  const cacheReady = !Object.keys(CACHE)
    .map((k) => CACHE[k])
    .some((map) => {
      if (map.size !== undefined) {
        return map.size === 0;
      }
      return map.length === 0;
    });

  if (cacheReady) {
    return;
  }
  setTimeout(fixSystemCache, 5000);
}

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
    });
  }
});

Hooks.once("canvasReady", async () => {
  setTimeout(fixSystemCache, 5000);
});
