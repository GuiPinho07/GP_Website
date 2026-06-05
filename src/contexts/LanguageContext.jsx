import React, { createContext, useContext, useState } from 'react';

// Language context provides current language and a toggle function
const LanguageContext = createContext({
  language: 'pt', // default Portuguese
  toggleLanguage: () => { }
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');
  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'pt' ? 'en' : 'pt'));
  };
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

// Helper hook to translate keys
export const useTranslation = () => {
  const { language } = useLanguage();
  const t = (key) => {
    // fallback to key if missing
    return translations[language]?.[key] || key;
  };
  return { t, language };
};

// Translation dictionary – keys used throughout the UI
export const translations = {
  pt: {
    // ── NAVBAR / GLOBAL ──
    curriculum: 'Currículo',
    contacts: 'Contactos',
    about: 'Sobre Mim',
    language: 'Eng',

    // ── HOME PAGE ──
    what_moves: 'O que me move',
    my_values: 'Os meus Valores',
    my_toolkit: 'O meu toolkit',
    key_skills: 'Competências-Chave',
    "home.what_moves": "O que me move",
    "home.my_values": "Os meus Valores",
    "home.values_subtitle": "Os princípios que guiam as minhas decisões técnicas e a forma como colaboro em equipa.",
    "home.values.innovation.title": "Inovação",
    "home.values.innovation.desc": "Acredito que a melhor solução ainda não foi encontrada. Questiono o status quo e procuro abordagens criativas para problemas complexos.",
    "home.values.collaboration.title": "Colaboração",
    "home.values.collaboration.desc": "Os melhores produtos nascem de equipas diversas com comunicação aberta. Valorizo a partilha de conhecimento e o crescimento coletivo.",
    "home.values.simplicity.title": "Simplicidade",
    "home.values.simplicity.desc": "A elegância está na simplicidade. Esforço-me por criar soluções intuitivas que resolvem problemas reais sem complexidade desnecessária.",
    "home.my_toolkit": "O meu toolkit",
    "home.key_skills": "Competências-Chave",
    "home.skills_subtitle": "Tecnologias e metodologias com as quais trabalho no dia-a-dia.",

    // ── CONTACT PAGE ──
    "contact.eyebrow": "Entra em contacto",
    "contact.title_start": "Vamos",
    "contact.title_gradient": "conversar",
    "contact.subtitle": "Estou sempre aberto a novas oportunidades, colaborações criativas ou simplesmente a uma boa conversa sobre tecnologia e design. Se tens um projeto em mente ou quiseres trocar ideias, não hesites em entrar em contacto — respondo sempre!",
    "contact.methods_title": "Métodos de Contacto",
    "contact.aria_linkedin": "Contactar via LinkedIn",
    "contact.aria_email": "Contactar via Email",
    "contact.response_time_label": "Tempo de resposta:",
    "contact.response_time_desc": "Normalmente respondo dentro de 24–48 horas. Para assuntos urgentes, o LinkedIn é o mais rápido. 🚀",
    "contact.form_title": "Enviar Mensagem",
    "contact.success_title": "Mensagem enviada!",
    "contact.success_message_part1": "Obrigado pelo contacto,",
    "contact.success_message_part2": "! Responderei o mais brevemente possível.",
    "contact.button_send_another": "Enviar outra mensagem",
    "contact.form.name_label": "Nome",
    "contact.form.name_placeholder": "O teu nome completo",
    "contact.form.email_label": "Email",
    "contact.form.email_placeholder": "o.teu@email.com",
    "contact.form.message_label": "Mensagem",
    "contact.form.message_placeholder": "Descreve o teu projeto, ideia ou questão...",
    "contact.form.message_hint": "Mínimo de 10 caracteres",
    "contact.button_sending": "A enviar...",
    "contact.button_send": "Enviar Mensagem",
    "contact.privacy_note": "Os teus dados são usados apenas para responder ao teu contacto. Nunca são partilhados.",
    "contact.form.errors.name_required": "O nome é obrigatório.",
    "contact.form.errors.email_required": "O email é obrigatório.",
    "contact.form.errors.email_invalid": "Introduz um endereço de email válido.",
    "contact.form.errors.message_empty": "A mensagem não pode estar vazia.",
    "contact.form.errors.message_short": "A mensagem deve ter pelo menos 10 caracteres.",

    // ── CURRICULUM PAGE ──
    "curriculum.eyebrow_formation": "Formação",
    "curriculum.title_academic": "Percurso Académico",
    "curriculum.subtitle_academic": "A minha base de engenharia e investigação.",
"curriculum.academic_narrative.p1": "A minha jornada começou na Faculdade de Engenharia da Universidade do Porto (FEUP), onde estudo Engenharia Informática e Computação. Durante o meu percurso académico, desenvolvi uma base sólida em resolução de problemas e engenharia de software, trabalhando em projetos práticos e diversos — desde o desenvolvimento de sistemas de baixo nível em C até à criação de aplicações web completas.",
    "curriculum.academic_narrative.p2": "Atualmente, continuo a aprofundar os meus conhecimentos com foco em arquiteturas escaláveis e design centrado no utilizador. O trabalho colaborativo em metodologias ágeis tem sido essencial para perceber a importância de um código limpo e de uma boa comunicação. O meu objetivo é continuar a crescer tecnicamente, unindo o rigor da engenharia ao impacto real dos produtos que construo.",
    "curriculum.heading_degrees": "Graus Académicos",
    "curriculum.heading_achievements": "Conquistas",
    "curriculum.heading_certifications": "Certificações",
    "curriculum.eyebrow_experience": "Experiência",
    "curriculum.title_experience": "Percurso Profissional",
    "curriculum.subtitle_experience": "Onde apliquei e desenvolvi as minhas competências.",
    "curriculum.eyebrow_skills": "Competências",
    "curriculum.title_skills": "Matriz de Competências",
    "curriculum.subtitle_skills": "O meu arsenal técnico e interpessoal.",
    "curriculum.degree.leic.title": "Licenciatura em Engenharia Informática e Computação",
    "curriculum.degree.leic.institution": "Faculdade de Engenharia da Universidade do Porto (FEUP)",
    "curriculum.degree.leic.dates": "2024 — Presente",
    "curriculum.degree.leic.gpa": "Média: 13.5",
    "curriculum.achievements.1": "[Prémio ou distinção académica relevante]",
    "curriculum.achievements.2": "Publicação em [Nome da Conferência/Revista]",
    "curriculum.exp.1.company": "[Nome da Empresa Atual]",
    "curriculum.exp.1.role": "[Cargo/Função]",
    "curriculum.exp.1.dates": "Jan 20XX — Presente",
    "curriculum.exp.1.bullet.1": "Liderou o desenvolvimento de [funcionalidade/produto], reduzindo o tempo de [processo] em X%.",
    "curriculum.exp.1.bullet.2": "Colaborou com equipas multidisciplinares para implementar [solução técnica].",
    "curriculum.skills.technical": "Técnicas",
    "curriculum.skills.tools": "Ferramentas",
    "curriculum.skills.soft": "Soft Skills",
    "curriculum.skills.soft.teamwork": "Trabalho em equipa",
    "curriculum.skills.soft.problem_solving": "Resolução de problemas",
    "curriculum.skills.soft.communication": "Comunicação"
  },

  en: {
    // ── NAVBAR / GLOBAL ──
    curriculum: 'Curriculum',
    contacts: 'Contacts',
    about: 'About Me',
    language: 'Pt',

    // ── HOME PAGE ──
    what_moves: 'What moves me',
    my_values: 'My Values',
    my_toolkit: 'My Toolkit',
    key_skills: 'Key Skills',
    "home.what_moves": "What drives me",
    "home.my_values": "My Values",
    "home.values_subtitle": "The principles that guide my technical decisions and how I collaborate in a team.",
    "home.values.innovation.title": "Innovation",
    "home.values.innovation.desc": "I believe the best solution hasn't been found yet. I question the status quo and seek creative approaches to complex problems.",
    "home.values.collaboration.title": "Collaboration",
    "home.values.collaboration.desc": "The best products are born from diverse teams with open communication. I value knowledge sharing and collective growth.",
    "home.values.simplicity.title": "Simplicity",
    "home.values.simplicity.desc": "Elegance lies in simplicity. I strive to create intuitive solutions that solve real problems without unnecessary complexity.",
    "home.my_toolkit": "My toolkit",
    "home.key_skills": "Core Skills",
    "home.skills_subtitle": "Technologies and methodologies I work with daily.",

    // ── CONTACT PAGE ──
    "contact.eyebrow": "Get in touch",
    "contact.title_start": "Let's",
    "contact.title_gradient": "talk",
    "contact.subtitle": "I'm always open to new opportunities, creative collaborations, or just a good conversation about tech and design. If you have a project in mind or want to exchange ideas, don't hesitate to reach out — I always reply!",
    "contact.methods_title": "Contact Methods",
    "contact.aria_linkedin": "Contact via LinkedIn",
    "contact.aria_email": "Contact via Email",
    "contact.response_time_label": "Response time:",
    "contact.response_time_desc": "I usually reply within 24–48 hours. For urgent matters, LinkedIn is the fastest way. 🚀",
    "contact.form_title": "Send Message",
    "contact.success_title": "Message sent!",
    "contact.success_message_part1": "Thanks for reaching out,",
    "contact.success_message_part2": "! I'll get back to you as soon as possible.",
    "contact.button_send_another": "Send another message",
    "contact.form.name_label": "Name",
    "contact.form.name_placeholder": "Your full name",
    "contact.form.email_label": "Email",
    "contact.form.email_placeholder": "[EMAIL_ADDRESS]",
    "contact.form.message_label": "Message",
    "contact.form.message_placeholder": "Describe your project, idea or question...",
    "contact.form.message_hint": "Minimum of 10 characters",
    "contact.button_sending": "Sending...",
    "contact.button_send": "Send Message",
    "contact.privacy_note": "Your data is only used to respond to your contact. It is never shared.",
    "contact.form.errors.name_required": "Name is required.",
    "contact.form.errors.email_required": "Email is required.",
    "contact.form.errors.email_invalid": "Please enter a valid email address.",
    "contact.form.errors.message_empty": "Message cannot be empty.",
    "contact.form.errors.message_short": "Message must be at least 10 characters long.",

    // ── CURRICULUM PAGE ──
    "curriculum.eyebrow_formation": "Education",
    "curriculum.title_academic": "Academic Background",
    "curriculum.subtitle_academic": "My engineering and research foundation.",
"curriculum.academic_narrative.p1": "My journey began at the Faculty of Engineering of the University of Porto (FEUP), where I am pursuing a degree in Informatics and Computing Engineering. Throughout my academic path, I have built a strong foundation in problem-solving and software development, working on diverse hands-on projects—ranging from low-level systems programming in C to full-stack web applications.",
    "curriculum.academic_narrative.p2": "Currently, I am deepening my expertise with a focus on scalable architectures and user-centric design. Collaborating within agile environments has taught me the immense value of clean code and effective communication. My goal is to keep growing technically, bridging the rigor of engineering with the real-world impact of the products I build.",
    "curriculum.heading_degrees": "Academic Degrees",
    "curriculum.heading_achievements": "Achievements",
    "curriculum.heading_certifications": "Certifications",
    "curriculum.eyebrow_experience": "Experience",
    "curriculum.title_experience": "Professional Journey",
    "curriculum.subtitle_experience": "Where I applied and developed my skills.",
    "curriculum.eyebrow_skills": "Skills",
    "curriculum.title_skills": "Skills Matrix",
    "curriculum.subtitle_skills": "My technical and interpersonal arsenal.",
    "curriculum.degree.leic.title": "Bachelor in Informatics and Computing Engineering",
    "curriculum.degree.leic.institution": "Faculty of Engineering of the University of Porto (FEUP)",
    "curriculum.degree.leic.dates": "2024 — Present",
    "curriculum.degree.leic.gpa": "GPA: 13.5",
    "curriculum.achievements.1": "[Relevant academic award or distinction]",
    "curriculum.achievements.2": "Publication in [Conference/Journal Name]",
    "curriculum.exp.1.company": "[Current Company Name]",
    "curriculum.exp.1.role": "[Job Title]",
    "curriculum.exp.1.dates": "Jan 20XX — Present",
    "curriculum.exp.1.bullet.1": "Led the development of [feature/product], reducing [process] time by X%.",
    "curriculum.exp.1.bullet.2": "Collaborated with multidisciplinary teams to implement [technical solution].",
    "curriculum.skills.technical": "Technical",
    "curriculum.skills.tools": "Tools",
    "curriculum.skills.soft": "Soft Skills",
    "curriculum.skills.soft.teamwork": "Teamwork",
    "curriculum.skills.soft.problem_solving": "Problem Solving",
    "curriculum.skills.soft.communication": "Communication"
  }
};