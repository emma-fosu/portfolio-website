export default function initDocumentationNav(
  documentationArea: HTMLElement,
  documentNav: HTMLElement
) {
  populateNav(documentNav, getSectionSchemes(documentationArea));
}

type SectionMetaData = {
  id: string;
  name: string;
  isTechnical: boolean;
  deepLevels?: SectionMetaData[];
};

type SectionMetaDataSchemes = Map<string, SectionMetaData>;
function getSectionSchemes(
  documentationArea: HTMLElement
): SectionMetaDataSchemes {
  const sectionMetatDataSchemes: SectionMetaDataSchemes = new Map();
  const topLevelSections =
    documentationArea.querySelectorAll(":scope > section");
  topLevelSections.forEach((section) => {
    const topLevelMetaDataScheme = getSectionMetaDataScheme(section as HTMLElement, 2)
    const deepLevelSections = section.querySelectorAll(":scope > section");
    if (deepLevelSections.length !== 0) {
      const deepLevelSectionSchemes = [] as SectionMetaData[];
      deepLevelSections.forEach((section) => {
        deepLevelSectionSchemes.push(getSectionMetaDataScheme(section as HTMLElement, 3));
      });

      topLevelMetaDataScheme.deepLevels = deepLevelSectionSchemes;
    }

    sectionMetatDataSchemes.set(section.id, topLevelMetaDataScheme);
  });

  return sectionMetatDataSchemes;
}
function populateNav(
  documentationNav: HTMLElement,
  sectionMetaDataSchemes: SectionMetaDataSchemes
) {
  let documentationNavUl = documentationNav.querySelector(":scope > ul");
  if (!documentationNavUl) {
    const newDocumentationNavUL = document.createElement("ul");
    documentationNavUl = documentationNav.appendChild(newDocumentationNavUL);
  }

  sectionMetaDataSchemes.forEach((value, key) => {
    const newLinkList = createLinkList(
      `#${key}`,
      value.name,
      value.isTechnical
    );
    documentationNavUl.appendChild(newLinkList);

    if (value.deepLevels) {
      const deepLevelMetaDataSchemes = value.deepLevels;
      const deepLevelUl = document.createElement("ul");
      deepLevelMetaDataSchemes.forEach((value) => {
        deepLevelUl.appendChild(
          createLinkList(`#${value.id}`, value.name, value.isTechnical ?? false)
        );
      });
      newLinkList.appendChild(deepLevelUl);
    }
  });
}

function getSectionMetaDataScheme(section: HTMLElement, level: number = 2): SectionMetaData {
  const sectionMetaData = {} as SectionMetaData;
  sectionMetaData.id = section.id;
  const isTechnical = section.hasAttribute("technical");
  sectionMetaData.isTechnical = isTechnical;
  const headingElem = section.querySelector(`:scope > h${level}`);
  if (headingElem) {
    const headingName = headingElem.textContent;
    sectionMetaData.name = headingName;
  }

  return sectionMetaData;
}

function createLinkList(href: string, name: string, isTechnical: boolean) {
  const ListElem = document.createElement("li");
  const ListElemTextNode = document.createTextNode(name);
  const LinkElem = document.createElement("a");
  if (isTechnical) LinkElem.setAttribute("technical", "");
  LinkElem.href = href;
  LinkElem.appendChild(ListElemTextNode);
  ListElem.appendChild(LinkElem);
  return ListElem;
}
