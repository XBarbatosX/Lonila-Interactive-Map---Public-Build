(() => {
  "use strict";

  const viewport = document.getElementById("mapViewport");
  const stage = document.getElementById("mapStage");
  const image = document.getElementById("worldMap");
  const markerLayer = document.getElementById("markerLayer");
  const zoomInBtn = document.getElementById("zoomInBtn");
  const zoomOutBtn = document.getElementById("zoomOutBtn");
  const resetBtn = document.getElementById("resetBtn");
  const coordinateModeBtn = document.getElementById("coordinateModeBtn");
  const coordinateReadout = document.getElementById("coordinateReadout");
  const coordinateText = document.getElementById("coordinateText");
  const developerCoordinateText = document.getElementById("developerCoordinateText");
  const copyCoordinateBtn = document.getElementById("copyCoordinateBtn");
  const legendList = document.getElementById("legendList");
  const locationPopup = document.getElementById("locationPopup");
  const locationPopupContent = document.getElementById("locationPopupContent");
  const closePopupBtn = document.getElementById("closePopupBtn");
  const modalRegionName = document.getElementById("modalRegionName");
  const modalNationName = document.getElementById("modalNationName");

  const choiceBackdrop = document.getElementById("choiceBackdrop");
  const nationChoiceSheet = document.getElementById("nationChoiceSheet");
  const choiceSheetRegion = document.getElementById("choiceSheetRegion");
  const choiceSheetTitle = document.getElementById("choiceSheetTitle");
  const choiceSheetCards = document.getElementById("choiceSheetCards");
  const closeChoiceSheetBtn = document.getElementById("closeChoiceSheetBtn");

  const locations = [
    {
      id: "asteldiom",
      symbol: "✥",
      symbolName: "Radiant star",
      name: "Astel",
      regionName: "Asteldiom",
      displayName: "Theocracy of Astel",
      type: "nation",
      x: 33.83,
      y: 83.81,
      image: "assets/astel-poster.png",
      description: "Astel occupies the Asteldiom region.",
      roleplays: [
        {
          id: "saint-saintess",
          title: "Saint / Saintess",
          thumbnail: "assets/saint-saintess-thumbnail.png",
          choices: [
            {
              id: "your-legacy",
              title: "Your Legacy — Lonila",
              thumbnail: "assets/your-legacy-thumbnail.png",
              url: "https://janitorai.com/characters/450187a7-d01a-4aa6-86dd-6be3810a0a17_character-your-legacy-lonila"
            },
            {
              id: "saintess-delight",
              title: "A Saintess's Delight — Lonila Tales",
              thumbnail: "assets/saintess-delight-thumbnail.png",
              url: "https://janitorai.com/characters/b21c7c59-67e1-4302-873a-80e11dc31cfb_character-a-saintesss-delight-lonila-tales"
            },
            {
              id: "betrayal-legacy",
              title: "Betrayal Legacy — Lonila",
              thumbnail: "assets/betrayal-legacy-thumbnail.png",
              url: "https://janitorai.com/characters/9c695d3b-1cf1-4794-92d0-203a1ee1dd1e_character-betrayal-legacy-lonila"
            },
            {
              id: "heros-reprieve",
              title: "A Hero's Reprieve — Lonila Tales",
              thumbnail: "assets/heros-reprieve-thumbnail.png",
              url: "https://janitorai.com/characters/dc70b2b3-3b2d-450f-9827-a0d6423b43a8_character-a-heros-reprieve-lonila-tales"
            }
          ]
        },
        {
          id: "villain-villainess",
          title: "The Villain / Villainess",
          thumbnail: "assets/astel-villain-villainess-thumbnail.png",
          choices: [
            {
              id: "to-be-a-villain",
              title: "To Be a Villain — Lonila",
              thumbnail: "assets/to-be-a-villain-thumbnail.png",
              url: "https://janitorai.com/characters/223b1d2d-4813-4b14-823f-c57709f5131e_character-to-be-a-villain-lonila"
            }
          ]
        },
        {
          id: "the-extra",
          title: "The Extra",
          thumbnail: "assets/astel-extra-thumbnail.png",
          choices: [
            {
              id: "heroine-dunit",
              title: "Heroine Dunit! — Lonila",
              thumbnail: "assets/heroine-dunit-thumbnail.png",
              url: "https://janitorai.com/characters/e205261a-ddf2-4809-ba5c-c1d361362afe_character-heroine-dunit-lonila"
            }
          ]
        }
      ]
    },
    {
      id: "rondiand",
      symbol: "✧",
      symbolName: "Arcane star",
      name: "Lirael",
      regionName: "Rondiand",
      displayName: "Arcane Dominion of Lirael",
      type: "nation",
      x: 16.17,
      y: 56.16,
      image: "assets/lirael-poster.png",
      description: "Lirael occupies the Rondiand region.",
      roleplays: [
        {
          id: "the-prodigy",
          title: "The Prodigy",
          thumbnail: "assets/lirael-prodigy-thumbnail.png",
          choices: [
            {
              id: "scholastic-prodigies",
              title: "Scholastic Prodigies — Lonila",
              thumbnail: "assets/scholastic-prodigies-thumbnail.png",
              url: "https://janitorai.com/characters/64f7d86e-286f-48ef-a7c8-22a029fc24a0_character-scholastic-prodigies-lonila"
            },
            {
              id: "scholastic-geniuses",
              title: "Scholastic Geniuses — Lonila",
              thumbnail: "assets/scholastic-geniuses-thumbnail.png",
              url: "https://janitorai.com/characters/1e7d609c-9946-42ec-8e5d-4f4df888de0c_character-scholastic-geniuses-lonila"
            }
          ]
        }
      ]
    },
    {
      id: "helmire",
      symbol: "☠",
      symbolName: "Demonic skull",
      name: "Xilvath",
      regionName: "Helmire",
      displayName: "Demon Empire of Xilvath",
      type: "nation",
      x: 68.06,
      y: 80.09,
      image: "assets/xilvath-poster.png",
      description: "Xilvath occupies the Helmire region.",
      roleplays: [
        {
          id: "the-debtor",
          title: "The Debtor",
          thumbnail: "assets/xilvath-debtor-thumbnail.png",
          choices: [
            {
              id: "demons-debts",
              title: "Demon's Debts — Lonila",
              thumbnail: "assets/demons-debts-thumbnail.png",
              url: "https://janitorai.com/characters/a15b4767-01e9-4b23-a84e-0148fee64c3d_character-demons-debts-lonila"
            },
            {
              id: "queens-temptation",
              title: "A Queen's Temptation — Lonila Tales",
              thumbnail: "assets/queens-temptation-thumbnail.png",
              url: "https://janitorai.com/characters/c9968c57-ca25-41e6-881f-d41cb413eb7b_character-a-queens-temptation-lonila-tales"
            }
          ]
        }
      ]
    },
    {
      id: "darim",
      symbol: "❀",
      symbolName: "Sacred lotus",
      name: "Morzhananda",
      regionName: "Darim",
      displayName: "Sacred Realm of Morzhananda",
      type: "nation",
      x: 59.90,
      y: 54.01,
      image: "assets/morzhananda-poster.png",
      description: "Morzhananda occupies the Darim region.",
      roleplays: [
        {
          id: "the-master",
          title: "The Master",
          thumbnail: "assets/morzhananda-master-thumbnail.png",
          choices: [
            {
              id: "arena-tumble",
              title: "Arena Tumble | Lonila",
              thumbnail: "assets/arena-tumble-thumbnail.png",
              url: "https://janitorai.com/characters/031daa40-55b2-49ca-ba62-df07efcd134c_character-arena-tumble-lonila"
            }
          ]
        }
      ]
    },
    {
      id: "tashimura",
      symbol: "☀",
      symbolName: "Radiant sun",
      name: "Seisha",
      regionName: "Tashimura",
      displayName: "Bakufu of Seisha",
      type: "nation",
      x: 88.04,
      y: 53.15,
      image: "assets/seisha-poster.png",
      description: "Seisha occupies the Tashimura Archipelago.",
      roleplays: [
        {
          id: "the-dweller",
          title: "The Dweller",
          thumbnail: "assets/seisha-dweller-thumbnail.png",
          choices: [
            {
              id: "merchants-interest",
              title: "A Merchant's Interest — Lonila Tales",
              thumbnail: "assets/merchants-interest-thumbnail.png",
              url: "https://janitorai.com/characters/3af88e68-d0f8-4214-a469-4678f5230c0b_character-a-merchants-interest-lonila-tales"
            }
          ]
        },
        {
          id: "the-keijin",
          title: "The Keijin",
          thumbnail: "assets/seisha-keijin-thumbnail.png",
          choices: [
            {
              id: "sentenced-to-be-disposable",
              title: "Sentenced to be Disposable — Lonila",
              thumbnail: "assets/sentenced-to-be-disposable-thumbnail.png",
              url: "https://janitorai.com/characters/1f2abcd6-ac2d-46f6-a73b-e6d9039947a6_character-sentenced-to-be-disposable-lonila"
            }
          ]
        }
      ]
    },
    {
      id: "cariam",
      symbol: "☯",
      symbolName: "Celestial balance",
      name: "Zhǎng",
      regionName: "Cariam",
      displayName: "Celestial Empire of Zhǎng",
      type: "nation",
      x: 70.48,
      y: 21.35,
      image: "assets/zhang-poster.png",
      description: "Zhǎng occupies the Cariam region.",
      roleplays: [
        {
          id: "the-heir",
          title: "The Heir",
          thumbnail: "assets/zhang-heir-thumbnail.png",
          choices: [
            {
              id: "royal-reverie",
              title: "A Royal Reverie — Lonila",
              thumbnail: "assets/royal-reverie-thumbnail.png",
              url: "https://janitorai.com/characters/2d56cf51-a35f-4a91-8850-8a5658690b93_character-a-royal-reverie-lonila"
            },
            {
              id: "consorts-concern",
              title: "A Consort's Concern — Lonila Tales",
              thumbnail: "assets/consorts-concern-thumbnail.png",
              url: "https://janitorai.com/characters/9ca8127f-8a24-422a-90e9-d85930183355_character-a-consorts-concern-lonila-tales"
            },
            {
              id: "royal-skirmish",
              title: "A Royal Skirmish — Lonila",
              thumbnail: "assets/royal-skirmish-thumbnail.png",
              url: "https://janitorai.com/characters/72669580-d726-4bb5-80c9-d5d6f6465f64_character-a-royal-skirmish-lonila"
            }
          ]
        }
      ]
    },
    {
      id: "elaria",
      symbol: "❄",
      symbolName: "Frozen crownland",
      name: "Redranova",
      regionName: "Elaria",
      displayName: "Tsardom of Redranova",
      type: "nation",
      x: 33.74,
      y: 30.37,
      image: "assets/redranova-poster.png",
      description: "Redranova occupies the Elarian region. This popup is a test using your existing nation poster exactly as provided.",
      roleplays: [
        {
          id: "hunter",
          title: "The Hunter",
          thumbnail: "assets/redranova-hunter-thumbnail.png",
          choices: [
            {
              id: "silver-hearts",
              title: "Silver Hearts — Lonila",
              thumbnail: "assets/silver-hearts-thumbnail.png",
              url: "https://janitorai.com/characters/094cc0fb-4a18-4547-b8af-689362e5ec63_character-silver-hearts-lonila"
            }
          ]
        },
        {
          id: "hound",
          title: "The Hound",
          thumbnail: "assets/redranova-hound-thumbnail.webp",
          choices: [
            {
              id: "hymn-of-smiles-part-1",
              title: "Hymn of Smiles (Part 1)",
              thumbnail: "assets/hymn-of-smiles-part-1-thumbnail.png",
              url: "https://janitorai.com/characters/9baf13cd-3ad3-45f3-8d6f-87cd7bfdf2c8_character-the-hymn-of-smiles-lonila"
            },
            {
              id: "hymn-of-frowns-part-2",
              title: "Hymn of Frowns (Part 2)",
              thumbnail: "assets/hymn-of-frowns-part-2-thumbnail.png",
              url: "https://janitorai.com/characters/696dfbca-ce03-4d17-9169-aa97edd3ed33_character-the-hymn-of-frowns-lonila"
            }
          ]
        }
      ]
    }
  ];

  const state = {
    scale: 1,
    minScale: 1,
    maxScale: 5,
    x: 0,
    y: 0,
    dragging: false,
    pointerId: null,
    pointerDownX: 0,
    pointerDownY: 0,
    lastPointerX: 0,
    lastPointerY: 0,
    movedDuringPointer: false,
    coordinateMode: false,
    lastCoordinate: null,
    selectedLocationId: null
  };

  const ZOOM_FACTOR = 1.18;
  const CLICK_MOVE_TOLERANCE = 5;

  function render() {
    stage.style.transform = `translate(${state.x}px, ${state.y}px) scale(${state.scale})`;
  }

  function getImageSize() {
    return {
      width: image.naturalWidth || image.width || 1,
      height: image.naturalHeight || image.height || 1
    };
  }

  function calculateFitScale() {
    const { width, height } = getImageSize();
    return Math.min(viewport.clientWidth / width, viewport.clientHeight / height);
  }

  function centerMap() {
    const { width, height } = getImageSize();
    state.x = (viewport.clientWidth - width * state.scale) / 2;
    state.y = (viewport.clientHeight - height * state.scale) / 2;
  }

  function resetView() {
    const fitScale = calculateFitScale();
    state.minScale = fitScale;
    state.scale = fitScale;
    state.maxScale = fitScale * 6;
    centerMap();
    render();
  }

  function clampPosition() {
    const { width, height } = getImageSize();
    const mapWidth = width * state.scale;
    const mapHeight = height * state.scale;

    if (mapWidth <= viewport.clientWidth) {
      state.x = (viewport.clientWidth - mapWidth) / 2;
    } else {
      state.x = Math.min(0, Math.max(viewport.clientWidth - mapWidth, state.x));
    }

    if (mapHeight <= viewport.clientHeight) {
      state.y = (viewport.clientHeight - mapHeight) / 2;
    } else {
      state.y = Math.min(0, Math.max(viewport.clientHeight - mapHeight, state.y));
    }
  }

  function zoomAt(clientX, clientY, nextScale) {
    const rect = viewport.getBoundingClientRect();
    const cursorX = clientX - rect.left;
    const cursorY = clientY - rect.top;
    const previousScale = state.scale;

    nextScale = Math.max(state.minScale, Math.min(state.maxScale, nextScale));
    if (Math.abs(nextScale - previousScale) < 0.0001) return;

    const mapX = (cursorX - state.x) / previousScale;
    const mapY = (cursorY - state.y) / previousScale;

    state.scale = nextScale;
    state.x = cursorX - mapX * nextScale;
    state.y = cursorY - mapY * nextScale;

    clampPosition();
    render();
  }

  function zoomFromCenter(direction) {
    const rect = viewport.getBoundingClientRect();
    zoomAt(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
      direction > 0 ? state.scale * ZOOM_FACTOR : state.scale / ZOOM_FACTOR
    );
  }

  function isChoiceSheetOpen() {
    return !nationChoiceSheet.hidden;
  }

  function closeChoiceSheet() {
    nationChoiceSheet.hidden = true;
    choiceBackdrop.hidden = true;
    choiceSheetCards.innerHTML = "";
    document.body.classList.remove("choice-open");
  }

  function openRoleplayChoices(location, category) {
    choiceSheetRegion.textContent = `${location.displayName || location.name}`;
    choiceSheetTitle.textContent = category.title;
    choiceSheetCards.innerHTML = "";

    // Back card
    const backCard = document.createElement("article");
    backCard.className = "choice-card";
    const backButton = document.createElement("button");
    backButton.type = "button";
    backButton.className = "choice-card__button choice-card__back";
    backButton.innerHTML = `
      <span class="choice-card__body">
        <span class="choice-card__type">Back</span>
        <span class="choice-card__name">← Return to ${location.name}</span>
        <span class="choice-card__note">Nation and character options.</span>
      </span>
    `;
    backButton.addEventListener("click", () => openChoiceSheet(location));
    backCard.appendChild(backButton);
    choiceSheetCards.appendChild(backCard);

    for (const choice of category.choices) {
      const card = document.createElement("article");
      card.className = "choice-card";

      const link = document.createElement("a");
      link.className = "choice-card__link";
      link.href = choice.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.innerHTML = `
        <span class="choice-card__image-wrap">
          <img class="choice-card__image"
            src="${choice.thumbnail}"
            alt="${choice.title} roleplay thumbnail">
        </span>
        <span class="choice-card__body">
          <span class="choice-card__type">Roleplay</span>
          <span class="choice-card__name">${choice.title}</span>
          <span class="choice-card__note">Click the thumbnail to open the roleplay.</span>
        </span>
      `;
      card.appendChild(link);
      choiceSheetCards.appendChild(card);
    }
  }

  function openChoiceSheet(location) {
    choiceSheetRegion.textContent = `${location.regionName || location.name} Region`;
    choiceSheetTitle.textContent = location.displayName || location.name;
    choiceSheetCards.innerHTML = "";

    const nationCard = document.createElement("article");
    nationCard.className = "choice-card";

    const nationButton = document.createElement("button");
    nationButton.type = "button";
    nationButton.className = "choice-card__button";
    nationButton.innerHTML = `
      <span class="choice-card__image-wrap">
        <img class="choice-card__image"
          src="${location.image}"
          alt="${location.displayName || location.name} nation poster">
      </span>
      <span class="choice-card__body">
        <span class="choice-card__type">Nation</span>
        <span class="choice-card__name">Read ${location.displayName || location.name}</span>
        <span class="choice-card__note">Open the full nation poster and lore.</span>
      </span>
    `;
    nationButton.addEventListener("click", () => {
      closeChoiceSheet();
      openLocationPopup(location);
    });

    nationCard.appendChild(nationButton);
    choiceSheetCards.appendChild(nationCard);

    for (const roleplay of (location.roleplays || [])) {
      const card = document.createElement("article");
      card.className = "choice-card";

      if (Array.isArray(roleplay.choices)) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "choice-card__button";
        button.innerHTML = `
          <span class="choice-card__image-wrap">
            <img class="choice-card__image"
              src="${roleplay.thumbnail}"
              alt="${roleplay.title} category thumbnail">
          </span>
          <span class="choice-card__body">
            <span class="choice-card__type">Characters</span>
            <span class="choice-card__name">${roleplay.title}</span>
            <span class="choice-card__note">${roleplay.choices.length ? "Choose a related roleplay." : "Chronicle entries coming soon."}</span>
          </span>
        `;
        button.addEventListener("click", () => openRoleplayChoices(location, roleplay));
        card.appendChild(button);
      } else if (roleplay.url) {
        const link = document.createElement("a");
        link.className = "choice-card__link";
        link.href = roleplay.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.innerHTML = `
          <span class="choice-card__image-wrap">
            <img class="choice-card__image"
              src="${roleplay.thumbnail}"
              alt="${roleplay.title} roleplay thumbnail">
          </span>
          <span class="choice-card__body">
            <span class="choice-card__type">Roleplay</span>
            <span class="choice-card__name">${roleplay.title}</span>
            <span class="choice-card__note">Open this roleplay in a new tab.</span>
          </span>
        `;
        card.appendChild(link);
      }

      choiceSheetCards.appendChild(card);
    }

    choiceBackdrop.hidden = false;
    nationChoiceSheet.hidden = false;
    document.body.classList.add("choice-open");
    closeChoiceSheetBtn.focus();
  }

  function isNationModalOpen() {
    return !locationPopup.hidden;
  }

  function openLocationPopup(location) {
    state.selectedLocationId = location.id;
    updateSelectedMarker();

    if (!location.image) {
      return;
    }

    modalRegionName.textContent = `${location.regionName || location.name} Region`;
    modalNationName.textContent = location.displayName || location.name;

    locationPopupContent.innerHTML = `
      <div class="nation-poster-stage">
        <img
          class="nation-poster-full"
          src="${location.image}"
          alt="${location.displayName || location.name} nation poster"
          draggable="false"
        >
      </div>
    `;

    /*
      Critical behavior:
      The viewer is outside #mapViewport.
      While open, the body is locked and all map gestures are ignored.
    */
    locationPopup.hidden = false;
    document.body.classList.add("modal-open");

    // Always begin at the top-left so the poster can be read naturally.
    locationPopupContent.scrollTop = 0;
    locationPopupContent.scrollLeft = 0;

    // Move keyboard focus into the modal.
    closePopupBtn.focus();
  }

  function closeLocationPopup() {
    locationPopup.hidden = true;
    locationPopupContent.innerHTML = "";
    modalRegionName.textContent = "";
    modalNationName.textContent = "";
    document.body.classList.remove("modal-open");

    state.selectedLocationId = null;
    updateSelectedMarker();
    viewport.focus();
  }

  function focusLocation(location) {
    const { width, height } = getImageSize();
    const targetImageX = (location.x / 100) * width;
    const targetImageY = (location.y / 100) * height;
    const targetScale = Math.min(state.maxScale, Math.max(state.minScale * 2.2, state.scale));

    state.scale = targetScale;
    state.x = viewport.clientWidth / 2 - targetImageX * targetScale;
    state.y = viewport.clientHeight / 2 - targetImageY * targetScale;
    clampPosition();
    render();

    if (location.roleplays && location.roleplays.length > 0) {
      openChoiceSheet(location);
    } else {
      openLocationPopup(location);
    }
  }

  function updateSelectedMarker() {
    markerLayer.querySelectorAll(".location-marker").forEach((marker) => {
      marker.classList.toggle("is-selected", marker.dataset.locationId === state.selectedLocationId);
    });
  }

  function renderLocations() {
    markerLayer.querySelectorAll(".location-marker").forEach((m) => m.remove());
    if (legendList) legendList.innerHTML = "";

    for (const location of locations) {
      const marker = document.createElement("button");
      marker.type = "button";
      marker.className = "location-marker";
      marker.dataset.locationId = location.id;
      marker.dataset.nation = location.name;
      marker.style.left = `${location.x}%`;
      marker.style.top = `${location.y}%`;
      marker.setAttribute("aria-label", `${location.symbolName || "Nation"} marker — open ${location.displayName || location.name}`);

      marker.innerHTML = `
        <span class="location-marker__ring" aria-hidden="true"></span>
        <span class="location-marker__symbol" aria-hidden="true">${location.symbol || "◆"}</span>
        <span class="location-marker__label" aria-hidden="true">
          <span class="location-marker__region">${location.regionName || location.name}</span>
          <span class="location-marker__nation">${location.displayName || location.name}</span>
        </span>
      `;

      marker.addEventListener("pointerdown", (event) => event.stopPropagation());

      const regionOutline = document.getElementById(`region-${location.id}`);
      const showRegionOutline = () => {
        if (regionOutline) regionOutline.classList.add("is-visible");
      };
      const hideRegionOutline = () => {
        if (regionOutline) regionOutline.classList.remove("is-visible");
      };

      marker.addEventListener("pointerenter", showRegionOutline);
      marker.addEventListener("pointerleave", hideRegionOutline);
      marker.addEventListener("focus", showRegionOutline);
      marker.addEventListener("blur", hideRegionOutline);

      marker.addEventListener("click", (event) => {
        event.stopPropagation();
        focusLocation(location);
      });

      markerLayer.appendChild(marker);

      if (legendList) {
        const legendButton = document.createElement("button");
        legendButton.type = "button";
        legendButton.className = "legend-item";
        legendButton.textContent = location.displayName || location.name;
        legendButton.addEventListener("click", () => focusLocation(location));
        legendList.appendChild(legendButton);
      }
    }
  }

  function clientPointToMapPercent(clientX, clientY) {
    const rect = viewport.getBoundingClientRect();
    const { width, height } = getImageSize();

    const imageX = ((clientX - rect.left) - state.x) / state.scale;
    const imageY = ((clientY - rect.top) - state.y) / state.scale;

    if (imageX < 0 || imageY < 0 || imageX > width || imageY > height) return null;

    return {
      x: (imageX / width) * 100,
      y: (imageY / height) * 100
    };
  }

  function showCoordinate(point) {
    if (!point) return;

    const x = Number(point.x.toFixed(2));
    const y = Number(point.y.toFixed(2));
    state.lastCoordinate = { x, y };

    coordinateText.textContent = `X: ${x}%   Y: ${y}%`;
    developerCoordinateText.textContent = `X: ${x}%, Y: ${y}%`;
    coordinateReadout.hidden = false;

    const oldPin = markerLayer.querySelector(".coordinate-pin");
    if (oldPin) oldPin.remove();

    const pin = document.createElement("div");
    pin.className = "coordinate-pin";
    pin.style.left = `${x}%`;
    pin.style.top = `${y}%`;
    markerLayer.appendChild(pin);
  }

  function setCoordinateMode(enabled) {
    state.coordinateMode = enabled;
    coordinateModeBtn.setAttribute("aria-pressed", enabled ? "true" : "false");
    coordinateModeBtn.textContent = enabled ? "Coordinates: On" : "Coordinates: Off";
    viewport.classList.toggle("coordinate-mode", enabled);
  }

  viewport.addEventListener("wheel", (event) => {
    if (isNationModalOpen()) return;
    event.preventDefault();
    zoomAt(
      event.clientX,
      event.clientY,
      event.deltaY < 0 ? state.scale * ZOOM_FACTOR : state.scale / ZOOM_FACTOR
    );
  }, { passive: false });

  viewport.addEventListener("pointerdown", (event) => {
    if (isNationModalOpen()) return;
    if (event.button !== undefined && event.button !== 0) return;

    state.dragging = true;
    state.pointerId = event.pointerId;
    state.pointerDownX = event.clientX;
    state.pointerDownY = event.clientY;
    state.lastPointerX = event.clientX;
    state.lastPointerY = event.clientY;
    state.movedDuringPointer = false;

    viewport.classList.add("is-dragging");
    viewport.setPointerCapture(event.pointerId);
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!state.dragging || event.pointerId !== state.pointerId) return;

    if (
      Math.abs(event.clientX - state.pointerDownX) > CLICK_MOVE_TOLERANCE ||
      Math.abs(event.clientY - state.pointerDownY) > CLICK_MOVE_TOLERANCE
    ) {
      state.movedDuringPointer = true;
    }

    state.x += event.clientX - state.lastPointerX;
    state.y += event.clientY - state.lastPointerY;
    state.lastPointerX = event.clientX;
    state.lastPointerY = event.clientY;

    clampPosition();
    render();
  });

  viewport.addEventListener("pointerup", (event) => {
    if (event.pointerId !== state.pointerId) return;

    const wasClick = !state.movedDuringPointer;
    state.dragging = false;
    state.pointerId = null;
    viewport.classList.remove("is-dragging");

    if (viewport.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }

    if (wasClick && state.coordinateMode) {
      showCoordinate(clientPointToMapPercent(event.clientX, event.clientY));
    }
  });

  zoomInBtn.addEventListener("click", () => zoomFromCenter(1));
  zoomOutBtn.addEventListener("click", () => zoomFromCenter(-1));
  resetBtn.addEventListener("click", resetView);
  coordinateModeBtn.addEventListener("click", () => setCoordinateMode(!state.coordinateMode));
  closePopupBtn.addEventListener("click", closeLocationPopup);
  closeChoiceSheetBtn.addEventListener("click", closeChoiceSheet);
  choiceBackdrop.addEventListener("click", closeChoiceSheet);

  // The poster viewer owns its own scroll gestures.
  locationPopup.addEventListener("wheel", (event) => {
    event.stopPropagation();
  }, { passive: true });

  locationPopup.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
  });

  // Escape closes the full-screen viewer.
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    if (isChoiceSheetOpen()) {
      event.preventDefault();
      closeChoiceSheet();
      return;
    }

    if (isNationModalOpen()) {
      event.preventDefault();
      closeLocationPopup();
    }
  });

  copyCoordinateBtn.addEventListener("click", async () => {
    if (!state.lastCoordinate) return;
    const value = `x: ${state.lastCoordinate.x}, y: ${state.lastCoordinate.y}`;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
        copyCoordinateBtn.textContent = "Copied!";
      } else {
        window.prompt("Copy these coordinates:", value);
      }
    } catch {
      window.prompt("Copy these coordinates:", value);
    }

    setTimeout(() => copyCoordinateBtn.textContent = "Copy", 1400);
  });

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resetView, 120);
  });

  function initializeMap() {
    markerLayer.style.width = `${image.naturalWidth}px`;
    markerLayer.style.height = `${image.naturalHeight}px`;

    const regionLayer = document.getElementById("regionLayer");
    if (regionLayer) {
      regionLayer.style.width = `${image.naturalWidth}px`;
      regionLayer.style.height = `${image.naturalHeight}px`;
    }

    resetView();
    renderLocations();
  }

  image.addEventListener("load", initializeMap);

  if (image.complete && image.naturalWidth > 0) {
    initializeMap();
  }
})();


  // Map / Timeline view navigation
  const mapTabBtn = document.getElementById("mapTabBtn");
  const timelineTabBtn = document.getElementById("timelineTabBtn");
  const mapView = document.getElementById("mapView");
  const timelineView = document.getElementById("timelineView");

  function setLonilaView(view) {
    const showTimeline = view === "timeline";
    mapView.hidden = showTimeline;
    timelineView.hidden = !showTimeline;
    mapTabBtn.classList.toggle("is-active", !showTimeline);
    timelineTabBtn.classList.toggle("is-active", showTimeline);
    if (!showTimeline && typeof resetView === "function") {
      requestAnimationFrame(() => resetView());
    }
  }

  mapTabBtn.addEventListener("click", () => setLonilaView("map"));
  timelineTabBtn.addEventListener("click", () => setLonilaView("timeline"));


// World Atlas -> Era Chronicle preview shortcut
const openChronicleBtn = document.getElementById("openChronicleBtn");
if (openChronicleBtn) {
  openChronicleBtn.addEventListener("click", () => {
    if (typeof setLonilaView === "function") {
      setLonilaView("timeline");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (timelineTabBtn) {
      timelineTabBtn.click();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}


// Era Chronicle historical era navigation
(() => {
  const buttons = [...document.querySelectorAll("[data-era]")];
  const panels = [...document.querySelectorAll("[data-era-panel]")];
  if (!buttons.length || !panels.length) return;
  function selectEra(era) {
    buttons.forEach(btn => btn.classList.toggle("is-active", btn.dataset.era === era));
    panels.forEach(panel => { panel.hidden = panel.dataset.eraPanel !== era; });
  }
  buttons.forEach(btn => btn.addEventListener("click", () => selectEra(btn.dataset.era)));
})();
