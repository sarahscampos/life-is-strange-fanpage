export default function initTranslations() {
  const translations = {
    pt: {
      languageSelector: "Selecione um idioma:",
      languageOptionPt: "Português",
      languageOptionEn: "Inglês",   
      navigationList0: "Sobre LiS",
      navigationList1: "Personagens",
      navigationList2: "Galeria de imagens",
      navigationList3: "Trailers",
      navigationList4: "Episódios",
      aboutTitle: "Sobre Life is Strange",
      about0: '"Life Is Strange" se passa na cidade fictícia de Arcadia Bay, Oregon, durante a semana de 7 de outubro de 2013. A história é contada através dos olhos de Maxine Caulfield, uma estudante de fotografia que descobre que tem a habilidade de voltar no tempo à vontade. Este novo poder significa que cada escolha que ela faz cria um efeito borboleta. Quando Max prevê a chegada de uma tempestade devastadora, ela assume a responsabilidade de evitar que sua cidade seja destruída.',
      about1: 'As ações do jogador moldam a narrativa à medida que ela avança. Missões secundárias e mudanças ambientais servem como quebra-cabeças, e um sistema de diálogo ramificado enriquece as interações com outros personagens.',
      about2: '"Life Is Strange: Double Exposure" é a emocionante continuação da história de Max Caulfield. Max, a talentosa fotógrafa da conceituada Universidade Caledon, fica arrasada ao descobrir que sua amiga Safi foi assassinada na neve. Numa tentativa desesperada de salvá-la, Max tenta voltar no tempo. No entanto, sem usar seu poder há anos, ela inadvertidamente abre um portal para uma linha do tempo alternativa onde Safi ainda está viva, mas enfrenta um perigo iminente.',
      about3: 'À medida que Max navega nesta nova realidade, ela percebe que o assassino está planejando atacar novamente em ambos os mundos, iniciando uma emocionante corrida contra o tempo para deter o assassino e salvar sua amiga.',
      charactersTitle: 'Personagens',
      galleryTitle: 'Galeria de imagens',
      episodesTitle: 'Episódios', 
      footerCredits: 'Página de fã não oficial de Life is Strange. Todos os direitos reservados à Dontnod Entertainment, Deck Nine Games e Square Enix.',
      myMedia: 'Feito por Sarah Campos',
    },
  
    en: {
      languageSelector: "Select a language:",
      languageOptionPt: "Portuguese",
      languageOptionEn: "English",
      navigationList0: "About LiS",
      navigationList1: "Characters",
      navigationList2: "Image gallery",
      navigationList3: "Trailers",
      navigationList4: "Episodes",
      aboutTitle: "About Life is Strange",
      about0: '"Life Is Strange" unfolds in the fictional town of Arcadia Bay, Oregon, during the week of October 7, 2013. The story is told through the eyes of Maxine Caulfield, a photography student who discovers she has the ability to rewind time at will. This newfound power means that every choice she makes creates a butterfly effect. When Max foresees the arrival of a devastating storm, she takes it upon herself to prevent her town from being destroyed.',
      about1: 'The player\'s actions shape the narrative as it progresses. Side missions and environmental changes serve as puzzles, and a branching dialogue system enriches interactions with other characters.',
      about2: '"Life Is Strange: Double Exposure" is the thrilling continuation of Max Caulfield\'s story. Max, the talented photographer at the esteemed Caledon University, is shattered when she discovers her friend Safi murdered in the snow. In a desperate bid to save her, Max attempts to rewind time. However, having not used her power in years, she inadvertently opens a portal to an alternate timeline where Safi is still alive but facing imminent danger.',
      about3: 'As Max navigates this new reality, she realizes that the murderer is planning to strike again in both worlds, setting off a thrilling race against time to stop the killer and save her friend.',
      charactersTitle: 'Characters',
      galleryTitle: 'Image gallery',
      episodesTitle: 'Episodes',
      footerCredits: 'Unofficial fanpage of Life is Strange. All rights reserved to Dontnod Entertainment, Deck Nine Games and Square Enix.',
      myMedia: 'Made by Sarah Campos',
    }
  }
  
  const languageSelectOp = document.querySelectorAll(".language-option");
  
  let languageSelector = document.getElementById("language-selector");
  let languageOptionPt = document.getElementById("language-option-pt");
  let languageOptionEn = document.getElementById("language-option-en");
  let navigationListItems = document.querySelectorAll(".navigation-list a");
  let navigationListItemsHam = document.querySelectorAll(".off-screen-menu a");
  let aboutTitle = document.querySelector('#about h1');
  let aboutTexts = document.querySelectorAll("#about .texts p");
  let charactersTitle = document.querySelector('#characters h1');
  let galleryTitle = document.querySelector('#gallery h1');
  let episodesTitle = document.querySelector('#episodes h1');
  let credits = document.querySelector('footer p');
  let media = document.querySelector('footer .social p');
  
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
      navigationListItemsHam.forEach((item, index) => {
        item.innerText = translations.pt[`navigationList${index}`];
      });
      aboutTexts.forEach((item, index) => {
        item.innerText = translations.pt[`about${index}`];
      });
      aboutTitle.innerText = translations.pt.aboutTitle;
      charactersTitle.innerText = translations.pt.charactersTitle;
      galleryTitle.innerText = translations.pt.galleryTitle;
      episodesTitle.innerText = translations.pt.episodesTitle;
      credits.innerText = translations.pt.footerCredits;
      media.innerText = translations.pt.myMedia;
    }
    else if(language == "language-option-en") {
      languageSelector.innerText = translations.en.languageSelector;
      languageOptionPt.childNodes[2].nodeValue = translations.en.languageOptionPt;
      languageOptionEn.childNodes[2].nodeValue = translations.en.languageOptionEn;  
      navigationListItems.forEach((item, index) => {
        item.innerText = translations.en[`navigationList${index}`];
      });
      navigationListItemsHam.forEach((item, index) => {
        item.innerText = translations.en[`navigationList${index}`];
      });
      aboutTexts.forEach((item, index) => {
        item.innerText = translations.en[`about${index}`];
      });
      aboutTitle.innerText = translations.en.aboutTitle;
      charactersTitle.innerText = translations.en.charactersTitle;
      galleryTitle.innerText = translations.en.galleryTitle;
      episodesTitle.innerText = translations.en.episodesTitle;
      credits.innerText = translations.en.footerCredits;
      media.innerText = translations.en.myMedia;
    }
  }
}