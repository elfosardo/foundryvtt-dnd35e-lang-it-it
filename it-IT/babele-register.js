import * as cache from "../../systems/D35E/module/cache.js";
import { CACHE } from "../../systems/D35E/module/cache.js";

function classTransformation(cl) {
  switch (cl) {
    case "Druid":
      return "Druido";
    case "Barbarian":
      return "Barbaro";
    case "Cleric":
      return "Chierico";
    case "Fighter":
      return "Guerriero";
    case "Monk":
      return "Monaco";
    case "Paladin":
      return "Paladino";
    case "Rogue":
      return "Ladro";
    case "Sorcerer":
      return "Stregone";
    case "Wizard":
      return "Mago";
    case "Bard":
      return "Bardo";
    case "Aristocrat (NPC)":
      return "Aristocratico (PNG)";
    case "Commoner (NPC)":
      return "Popolano (PNG)";
    case "Warrior (NPC)":
      return "Combattente (PNG)";
    case "Psychic Warrior":
      return "Psychic Warrior";
    case "Blackguard":
      return "Guardia Nera";
    case "Expert (NPC)":
      return "Esperto (PNG)";
    case "Adept (NPC)":
      return "Adepto (PNG)";
    case "Soulknife":
      return "Soulknife";
    case "Wizard Familiar":
      return "Famiglio";
    case "Animal Companion":
      return "Compagno Animale";
    case "Ranger":
      return "Ranger";
    case "Assassin":
      return "Assassino";
    case "Arcane Trickster":
      return "Arcane Trickster";
    case "Dwarven Defender":
      return "Difensore Nanico";
    default:
      return cl;
  }
}

async function fixSystemCache() {
  await cache.rebuildCache();
  console.log("IT-TRANSLATION | Cache is ", CACHE);
  const cacheReady = !Object.keys(CACHE)
    .map((k) => CACHE[k])
    .some((map) => {
      if (map.size !== undefined) {
        return map.size === 0;
      }
      return map.lenght === 0;
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
      classNames: (associations) => {
        if (associations.classes) {
          associations.classes.map((association) => {
            association[0] = classTransformation(association[0]);
            return association;
          });
        }
        return associations;
      },
    });
  }
});

Hooks.once("canvasReady", async () => {
  setTimeout(fixSystemCache, 5000);
});
