export type Language = "en" | "ru" | "pt";

export interface Translations {
  navigation: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    contact: string;
  };
  sections: {
    about: string;
    workExperience: string;
    technologies: string;
    contact: string;
  };
  common: {
    downloadPdf: string;
    printResume: string;
    switchLanguage: string;
    yearsExperience: string;
    present: string;
  };
  contact: {
    email: string;
    telegram: string;
    location: string;
    linkedin: string;
    github: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    navigation: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
    },
    sections: {
      about: "About",
      workExperience: "Experience",
      technologies: "Skills",
      contact: "Contacts",
    },
    common: {
      downloadPdf: "Download PDF",
      printResume: "Print Resume",
      switchLanguage: "Switch Language",
      yearsExperience: "years of experience",
      present: "Present",
    },
    contact: {
      email: "Email",
      telegram: "Telegram",
      location: "Location",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
  ru: {
    navigation: {
      home: "Главная",
      about: "О себе",
      experience: "Опыт",
      skills: "Навыки",
      contact: "Контакты",
    },
    sections: {
      about: "Обо мне",
      workExperience: "Опыт работы",
      technologies: "Навыки",
      contact: "Контакты",
    },
    common: {
      downloadPdf: "Скачать PDF",
      printResume: "Печать резюме",
      switchLanguage: "Сменить язык",
      yearsExperience: "лет опыта",
      present: "Настоящее время",
    },
    contact: {
      email: "Электронная почта",
      telegram: "Telegram",
      location: "Местоположение",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
  pt: {
    navigation: {
      home: "Início",
      about: "Sobre",
      experience: "Experiência",
      skills: "Habilidades",
      contact: "Contato",
    },
    sections: {
      about: "Sobre mim",
      workExperience: "Experiência",
      technologies: "Habilidades",
      contact: "Contactos",
    },
    common: {
      downloadPdf: "Baixar PDF",
      printResume: "Imprimir Currículo",
      switchLanguage: "Trocar Idioma",
      yearsExperience: "anos de experiência",
      present: "Presente",
    },
    contact: {
      email: "Email",
      telegram: "Telegram",
      location: "Localização",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
};

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations.en;
}

export function detectLanguage(pathname: string): Language {
  const langSegment = pathname.split("/")[1];
  return (langSegment as Language) || "en";
}
