export default function initTranslations() {
  const translations = {
    pt: {
      languageSelector: "Selecione um idioma:",
      languageOptionPt: "Português",
      languageOptionEn: "Inglês",   
      navigationList0: "Sobre LIS",
      navigationList1: "Personagens",
      navigationList2: "Galeria de Imagens",
      navigationList3: "Trailers",
      navigationList4: "Episódios",
      navigationList5: "Contato",
    },
  
    en: {
      languageSelector: "Select a language:",
      languageOptionPt: "Portuguese",
      languageOptionEn: "English",
      navigationList0: "About LIS",
      navigationList1: "Characters",
      navigationList2: "Image gallery",
      navigationList3: "Trailers",
      navigationList4: "Episodes",
      navigationList5: "Contact",
    }
  }
  
  const languageSelectOp = document.querySelectorAll(".language-option");
  
  let languageSelector = document.getElementById("language-selector");
  let languageOptionPt = document.getElementById("language-option-pt");
  let languageOptionEn = document.getElementById("language-option-en");
  let navigationListItems = document.querySelectorAll(".navigation-list a");
  
  
  languageSelectOp.forEach(option => {
    option.addEventListener("click", (event) => {
      setLanguage(event.currentTarget.id);
    })
  })
  
  const setLanguage = (language) => {
    if(language == "language-option-pt") {
      languageSelector.innerText = translations.pt.languageSelector;
      languageOptionPt.childNodes[2].nodeValue = translations.pt.languageOptionPt;
      languageOptionEn.childNodes[2].nodeValue = translations.pt.languageOptionEn;
      navigationListItems.forEach((item, index) => {
        item.innerText = translations.pt[`navigationList${index}`];
      });
    }
    else if(language == "language-option-en") {
      languageSelector.innerText = translations.en.languageSelector;
      languageOptionPt.childNodes[2].nodeValue = translations.en.languageOptionPt;
      languageOptionEn.childNodes[2].nodeValue = translations.en.languageOptionEn;  
      navigationListItems.forEach((item, index) => {
        item.innerText = translations.en[`navigationList${index}`];
      });
    }
  }
}