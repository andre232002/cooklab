// =========================
// DÁTA – RECEPTY (SLOVENSKY)
// =========================

const recipes = [
  {
    title: "Špagety Aglio e Olio",
    emoji: "🍝",
    image: "img/spagety-aglio-olio.jpg",
    keywords: ["špagety", "cestoviny", "cesnak", "olivový olej", "chilli"],
    shortDescription: "Jednoduché cesnakové špagety hotové za pár minút.",
    description:
      "Špagety s cesnakom, olivovým olejom a chilli patria medzi najjednoduchšie talianske jedlá – zvládneš ich aj v malej internátnej kuchynke.",
    steps: [
      "Do veľkého hrnca daj variť vodu, pridaj soľ (asi 1 lyžica na 3–4 litre) a vlož špagety. Var podľa návodu na obale, kým sú al dente.",
      "Kým sa špagety varia, na panvici na miernom ohni zohrej olivový olej. Pridaj na plátky nakrájaný cesnak a trochu chilli. Miešaj a daj pozor, aby cesnak nezhnedol – bol by horký.",
      "Keď sú špagety uvarené, sceď ich, ale odlož si asi pol hrnčeka vody z varenia.",
      "Špagety presuň na panvicu k cesnaku, premiešaj a podľa potreby pridaj pár lyžíc vody z cestovín, aby sa všetko pekne spojilo.",
      "Dochuť soľou, čiernym korením a nasekanou petržlenovou vňaťou. Podávaj hneď, prípadne posyp strúhaným syrom."
    ]
  },
  {
    title: "Špagety Carbonara (jednoduchá verzia)",
    emoji: "🥓",
    image: "img/spagety-carbonara.jpg",
    keywords: ["špagety", "cestoviny", "vajcia", "slanina", "syr"],
    shortDescription: "Krémové špagety so slaninou a syrom na rýchlu večeru.",
    description:
      "Študentská verzia carbonary – bez zbytočných komplikácií, ale stále krémová a chutná.",
    steps: [
      "Špagety uvar v osolenej vode podľa návodu a po uvarení odlož trochu vody z cestovín.",
      "Na panvici opeč na kocky nakrájanú slaninu do chrumkava, potom panvicu stiahni z ohňa.",
      "V miske rozšľahaj vajcia so strúhaným syrom, pridaj štipku soli a čierneho korenia.",
      "Horúce cestoviny presuň na panvicu so slaninou, premiešaj a nechaj chvíľu postáť, aby panvica nebola úplne rozpálená.",
      "Prilej vajíčkovú zmes a rýchlo miešaj, aby sa vajíčka len jemne zahustili a nevytvorili sa kúsky praženice. V prípade potreby pridaj trochu vody z cestovín. Podávaj ihneď."
    ]
  },
  {
    title: "Paradajkové cestoviny",
    emoji: "🍅",
    image: "img/paradajkove-cestoviny.jpg",
    keywords: ["cestoviny", "paradajky", "cesnak", "cibuľa", "olivový olej"],
    shortDescription: "Cestoviny s rýchlou paradajkovou omáčkou z pár surovín.",
    description:
      "Jednoduché cestoviny s domácou paradajkovou omáčkou, ktoré si vieš prispôsobiť podľa toho, čo máš v špajzi.",
    steps: [
      "Cestoviny uvar v osolenej vode podľa návodu na obale.",
      "Na panvici zohrej olivový olej, pridaj nadrobno nakrájanú cibuľu a opekaj 3–5 minút do sklovita.",
      "Pridaj nasekaný cesnak, premiešaj a po pol minúte pridaj nakrájané paradajky alebo paradajkové pyré.",
      "Omáčku osoľ, okoreň a nechaj na miernom ohni jemne bublať 10–15 minút. Podľa chuti pridaj sušenú bazalku alebo oregáno.",
      "Scedené cestoviny premiešaj s omáčkou priamo na panvici, aby sa dobre obalili. Podávaj so syrom alebo čerstvými bylinkami."
    ]
  },
  {
    title: "Krémové cestoviny so syrom",
    emoji: "🧀",
    image: "img/kremove-cestoviny-so-syrom.jpg",
    keywords: ["cestoviny", "syr", "maslo", "mlieko"],
    shortDescription: "Rýchle a krémové cestoviny zo syra, masla a mlieka.",
    description:
      "Ideálne jedlo na dni, keď nechceš stáť dlho pri sporáku – minimum surovín a maximum komfortu.",
    steps: [
      "Cestoviny uvar v osolenej vode a následne sceď.",
      "V menšom hrnci roztop maslo, pridaj 1–2 lyžice hladkej múky a miešaj 1 minútu, aby vznikla svetlá zápražka.",
      "Postupne prilievaj mlieko a stále miešaj, aby sa nevytvorili hrudky. Var na miernom ohni, kým omáčka nezhustne.",
      "Pridaj nastrúhaný syr a miešaj, kým sa úplne neroztopí. Dochuť soľou, čiernym korením a prípadne muškátovým orieškom.",
      "Vmiešaj uvarené cestoviny do omáčky tak, aby sa dobre obalili. Podávaj okamžite."
    ]
  },
  {
    title: "Pečené zemiakové mesiačiky",
    emoji: "🥔",
    image: "img/pecene-zemiaky.jpg",
    keywords: ["zemiaky", "olej", "soľ", "paprika", "bylinky"],
    shortDescription: "Chrumkavé pečené zemiaky z rúry.",
    description:
      "Jednoduchá príloha alebo hlavné jedlo – pečené zemiaky, ktoré môžeš doplniť dipom alebo zeleninovým šalátom.",
    steps: [
      "Rúru predhrej na 200 °C a plech vylož papierom na pečenie.",
      "Zemiaky dôkladne umy (šupku môžeš nechať), nakrájaj na mesiačiky približne rovnakej veľkosti.",
      "V mise ich premiešaj s olejom, soľou, mletou paprikou a sušenými bylinkami.",
      "Zemiaky rozlož v jednej vrstve na plech a peč 30–40 minút, kým sú zvonka chrumkavé a vnútri mäkké.",
      "Podávaj horúce, ideálne s jogurtovým alebo cesnakovým dipom."
    ]
  },
  {
    title: "Zemiaková kaša s opečenou cibuľkou",
    emoji: "🥣",
    image: "img/zemiakova-kasa.jpg",
    keywords: ["zemiaky", "mlieko", "maslo", "cibuľa"],
    shortDescription: "Jemná zemiaková kaša so sladkou opečenou cibuľkou.",
    description:
      "Klasika, ktorá sa hodí k mäsu aj samotná – zemiaková kaša so špeci bonusom: karamelizovanou cibuľkou.",
    steps: [
      "Zemiaky ošúp a nakrájaj na menšie kúsky, aby sa uvarili rýchlejšie. Daj ich do hrnca, zalej studenou vodou, osoľ a var do mäkka.",
      "Uvarené zemiaky sceď. Pridaj maslo a teplé mlieko a roztlač ich pučidlom, kým nevznikne hladká kaša.",
      "Cibuľu nakrájaj na tenké plátky a pomaly opekaj na masle alebo oleji 8–10 minút, kým nezmäkne a nezhnedne.",
      "Kašu dochuť soľou a čiernym korením. Podávaj s kopčekom opečenej cibuľky navrchu."
    ]
  },
  {
    title: "Zeleninové rizoto z ryže",
    emoji: "🥕",
    image: "img/zeleninove-rizoto.jpg",
    keywords: ["ryža", "mrkva", "hrášok", "cibuľa"],
    shortDescription: "Jednoduché ryžové rizoto so zeleninou.",
    description:
      "Lacné a sýte jedlo, ktoré využije aj mrazenú zeleninovú zmes. Vhodné ako hlavné jedlo aj príloha.",
    steps: [
      "Ryžu prepláchni pod tečúcou vodou, kým nie je odtekajúca voda číra.",
      "Na oleji opraž nadrobno nakrájanú cibuľu do sklovita.",
      "Pridaj ryžu, krátko ju orestuj a potom zalej dvojnásobným množstvom vody alebo vývaru.",
      "Pridaj na malé kocky nakrájanú mrkvu a hrášok (alebo zeleninovú zmes), osoľ a prikry pokrievkou.",
      "Var na miernom ohni, kým ryža vsaje všetku tekutinu a je mäkká. Na konci rizoto premiešaj vidličkou."
    ]
  },
  {
    title: "Kuracie mäso s ryžou",
    emoji: "🍗",
    image: "img/kuracie-s-ryzou.jpg",
    keywords: ["kuracie mäso", "ryža", "olej", "soľ"],
    shortDescription: "Základné kuracie mäso na prírodno s ryžou.",
    description:
      "Jednoduchý fit obed – kuracie prsia opečené na panvici a k tomu klasická ryža.",
    steps: [
      "Ryžu uvar v osolenej vode podľa návodu a nechaj ju odpočívať pod pokrievkou.",
      "Kuracie prsia očisti, nakrájaj na plátky alebo kocky, osoľ a okoreň podľa chuti.",
      "Na panvici zohrej trochu oleja a mäso opekaj z oboch strán, kým je prepečené a šťavnaté.",
      "Podávaj mäso na ryži, môžeš doplniť zeleninovým šalátom alebo kyslou uhorkou."
    ]
  },
  {
    title: "Cestovinový šalát s tuniakom",
    emoji: "🥗",
    image: "img/cestovinovy-salat-tuniak.jpg",
    keywords: ["cestoviny", "tuniak", "kukurica", "jogurt"],
    shortDescription: "Studený šalát s tuniakom, kukuricou a jogurtovým dresingom.",
    description:
      "Výborný do krabičky – cestovinový šalát, ktorý zasýti a dá sa pripraviť dopredu.",
    steps: [
      "Krátku cestovinu uvar v osolenej vode, sceď a nechaj úplne vychladnúť.",
      "Tuniaka z konzervy sceď a vidličkou rozmiešaj na menšie kúsky.",
      "V miske zmiešaj biely jogurt s trochou soli, korenia a citrónovej šťavy. Pridaj kukuricu.",
      "Jogurtový dresing, tuniaka a cestoviny spolu premiešaj. Podľa chuti ešte dochuť.",
      "Pred podávaním nechaj aspoň 20 minút chladiť v chladničke."
    ]
  },
  {
    title: "Tuniaková nátierka na chlieb",
    emoji: "🥪",
    image: "img/tuniakova-natierka.jpg",
    keywords: ["tuniak", "maslo", "cibuľa", "chlieb"],
    shortDescription: "Rýchla tuniaková nátierka na raňajky alebo večeru.",
    description:
      "Skvelý spôsob, ako využiť konzervu tuniaka – stačí trocha masla, cibuľa a čerstvý chlieb.",
    steps: [
      "Tuniaka z konzervy sceď a daj do misky.",
      "Pridaj mäkké maslo alebo nátierkový syr a vidličkou všetko roztlač na hladkú nátierku.",
      "Cibuľu nakrájaj úplne nadrobno a vmiešaj ju k tuniakovej zmesi.",
      "Dochuť soľou, čiernym korením a pár kvapkami citrónovej šťavy.",
      "Natieraj na chlieb alebo pečivo a podávaj so zeleninou."
    ]
  },
  {
    title: "Chlieb vo vajci",
    emoji: "🍳",
    image: "img/chlieb-vo-vajci.jpg",
    keywords: ["chlieb", "vajcia", "olej", "soľ"],
    shortDescription: "Klasický chlieb obalený vo vajíčku a opečený na panvici.",
    description:
      "Rýchla večera alebo sýte raňajky – hotové za pár minút z úplne základných surovín.",
    steps: [
      "V miske rozšľahaj vajcia so štipkou soli a čierneho korenia.",
      "Plátky chleba namáčaj z oboch strán do vajíčkovej zmesi tak, aby ju pekne nasali.",
      "Na panvici rozohrej olej a plátky chleba opeč z oboch strán do zlatista.",
      "Podávaj ešte teplé, napríklad s kečupom, syrom alebo zeleninou."
    ]
  },
  {
    title: "Praženica s cibuľkou",
    emoji: "🥚",
    image: "img/prazenica-cibulka.jpg",
    keywords: ["vajcia", "cibuľa", "olej", "soľ"],
    shortDescription: "Jednoduchá praženica s opečenou cibuľkou.",
    description:
      "Základné jedlo, ktoré zvládne každý – stačí pár vajíčok a cibuľa.",
    steps: [
      "Cibuľu nakrájaj nadrobno.",
      "Na panvici rozohrej olej a cibuľu opeč 3–4 minúty, kým zmäkne a začne zlátnuť.",
      "Vajcia rozšľahaj v miske so soľou a prípadne korením, potom ich vlej na panvicu k cibuli.",
      "Na strednom ohni miešaj, kým vajíčka neztuhnú podľa tvojej chuti.",
      "Podávaj s chlebom alebo pečivom a čerstvou zeleninou."
    ]
  },
  {
    title: "Omeleta so syrom",
    emoji: "🧇",
    image: "img/omeleta-so-syrom.jpg",
    keywords: ["vajcia", "syr", "olej"],
    shortDescription: "Nadýchaná omeleta plnená syrom.",
    description:
      "Výborné raňajky alebo rýchla večera – hotová za menej ako 10 minút.",
    steps: [
      "Vajcia rozšľahaj v miske so soľou a mletým korením.",
      "Na panvici zohrej trochu oleja a vlej vajíčka, panvicu jemne nakláňaj, aby sa rozliali do tenšej vrstvy.",
      "Keď omeleta začína tuhnúť, ale povrch je ešte jemne tekutý, posyp ju nastrúhaným syrom.",
      "Omeletu prelož na polovicu a ešte minútku dopeč, aby sa syr roztopil.",
      "Podávaj s pečivom a zeleninou."
    ]
  },
  {
    title: "Ovsená kaša s ovocím",
    emoji: "🥣",
    image: "img/ovsena-kasa.jpg",
    keywords: ["ovsené vločky", "mlieko", "ovocie", "med"],
    shortDescription: "Teplá ovsená kaša s ovocím a medom.",
    description:
      "Ideálne raňajky na chladnejšie rána – dodá energiu na celé dopoludnie.",
    steps: [
      "Do hrnca nasyp ovsené vločky a zalej ich mliekom alebo vodou (1 diel vločiek a 2 diely tekutiny).",
      "Na miernom ohni miešaj, kým kaša nezhustne a vločky nezmäknú (cca 5–8 minút).",
      "Kašu doslaď medom alebo cukrom a dochuť škoricou, ak ju máš rada.",
      "Prelož do misky a navrch pridaj čerstvé alebo mrazené ovocie, oriešky či semienka."
    ]
  },
  {
    title: "Jogurtová miska s ovocím",
    emoji: "🍓",
    image: "img/jogurtova-miska.jpg",
    keywords: ["jogurt", "ovocie", "ovsené vločky"],
    shortDescription: "Studená jogurtová miska bez varenia.",
    description:
      "Keď nemáš čas variť, ale chceš niečo ľahké – stačí jogurt, ovocie a vločky.",
    steps: [
      "Do misky daj biely alebo ochutený jogurt.",
      "Ovocie (banán, jahody, jablko a pod.) nakrájaj na kúsky a pridaj do jogurtu.",
      "Posyp ovsenými vločkami alebo granolou, podľa chuti pridaj oriešky.",
      "Ak chceš sladšie raňajky, doslaď medom alebo javorovým sirupom."
    ]
  },
  {
    title: "Cesnaková polievka so zemiakmi",
    emoji: "🧄",
    image: "img/cesnakova-polievka.jpg",
    keywords: ["cesnak", "zemiaky", "chlieb", "olej"],
    shortDescription: "Silná cesnaková polievka výborná pri nachladnutí.",
    description:
      "Jednoduchá domáca cesnačka, ktorú môžeš podávať s opečeným chlebom.",
    steps: [
      "V hrnci na troche oleja veľmi jemne opeč nasekaný cesnak (len pár sekúnd, aby nezhnedol).",
      "Pridaj na kocky nakrájané zemiaky, zalej vodou alebo vývarom a osoľ.",
      "Var, kým sú zemiaky mäkké (asi 15–20 minút). Časť polievky môžeš rozmixovať, aby bola hustejšia.",
      "Podávaj s opečeným chlebom alebo krutónmi a podľa chuti posyp majoránkou."
    ]
  }
];

// =========================
// LOGIKA – VYHĽADÁVANIE
// =========================

function findBestRecipe(userIngredients) {
  const normalized = userIngredients.map((i) => i.trim().toLowerCase());
  let bestRecipe = null;
  let bestScore = 0;

  recipes.forEach((recipe) => {
    let score = 0;
    recipe.keywords.forEach((kw) => {
      if (normalized.includes(kw.toLowerCase())) {
        score++;
      }
    });

    if (score > bestScore) {
      bestScore = score;
      bestRecipe = recipe;
    }
  });

  return bestRecipe;
}

function renderRecipe(recipe, showNoMatchMessage = false) {
  const resultSection = document.getElementById("result");
  const titleEl = document.getElementById("recipeTitle");
  const descEl = document.getElementById("recipeDescription");
  const emojiEl = document.getElementById("recipeEmoji");
  const imgEl = document.getElementById("recipeImage");
  const tagsEl = document.getElementById("recipeTags");
  const stepsEl = document.getElementById("recipeSteps");

  if (!resultSection) return;

  resultSection.classList.remove("hidden");

  if (!recipe) {
    titleEl.textContent = "Nenašiel sa žiadny recept";
    descEl.textContent = showNoMatchMessage
      ? "Skús pridať viac bežných surovín (napr. cestoviny, ryža, zemiaky, vajcia, tuniak) alebo ich napíš trochu inak."
      : "Skús inú kombináciu surovín.";
    emojiEl.textContent = "🤷‍♀️";
    imgEl.src = "";
    imgEl.alt = "Bez obrázka";
    tagsEl.innerHTML = "";
    stepsEl.innerHTML = "";
    return;
  }

  titleEl.textContent = recipe.title;
  descEl.textContent = recipe.description;
  emojiEl.textContent = recipe.emoji || "🍽️";
  imgEl.src = recipe.image;
  imgEl.alt = recipe.title;

  // tagy – suroviny
  tagsEl.innerHTML = "";
  recipe.keywords.forEach((kw) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = kw;
    tagsEl.appendChild(span);
  });

  // kroky
  stepsEl.innerHTML = "";
  recipe.steps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    stepsEl.appendChild(li);
  });
}

// =========================
// POPULÁRNE RECEPTY
// =========================

function renderPopularList() {
  const container = document.getElementById("popularList");
  if (!container) return;

  const popular = recipes.slice(0, 6);

  popular.forEach((recipe) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "popular-item";

    const icon = document.createElement("div");
    icon.className = "popular-item-icon";
    icon.textContent = recipe.emoji || "🍽️";

    const textWrap = document.createElement("div");
    textWrap.className = "popular-item-text";

    const title = document.createElement("p");
    title.className = "popular-item-title";
    title.textContent = recipe.title;

    const desc = document.createElement("p");
    desc.className = "popular-item-desc";
    desc.textContent = recipe.shortDescription;

    textWrap.appendChild(title);
    textWrap.appendChild(desc);

    item.appendChild(icon);
    item.appendChild(textWrap);

    item.addEventListener("click", () => {
      renderRecipe(recipe);
      window.scrollTo({ top: 140, behavior: "smooth" });
    });

    container.appendChild(item);
  });
}

// =========================
// INIT – PO NAČÍTANÍ STRÁNKY
// =========================

document.addEventListener("DOMContentLoaded", () => {
  renderPopularList();

  const searchBtn = document.getElementById("searchBtn");
  const inputEl = document.getElementById("ingredientsInput");

  if (searchBtn && inputEl) {
    searchBtn.addEventListener("click", () => {
      const raw = inputEl.value.trim();
      if (!raw) {
        alert("Prosím, zadaj aspoň jednu surovinu 🙂");
        return;
      }

      const ingredients = raw.split(",");
      const recipe = findBestRecipe(ingredients);

      if (!recipe) {
        renderRecipe(null, true);
      } else {
        renderRecipe(recipe);
        window.scrollTo({ top: 140, behavior: "smooth" });
      }
    });

    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        searchBtn.click();
      }
    });
  }
});
