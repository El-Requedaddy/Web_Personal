// =============================================================================
// About / CV content
// -----------------------------------------------------------------------------
// Per-locale content for the "Sobre mí" CV page. The narrative paragraphs are
// ported verbatim from the previous Markdown pages (src/pages/about.md and the
// en/ ja/ variants) so the hand-written Japanese is preserved.
// Consumed by src/components/about/AboutCv.astro.
// =============================================================================

export type NarrativeBlock =
  | { type: 'h'; text: string }
  | { type: 'p'; text: string }
  | { type: 'img'; src: string; alt: string };

export interface SkillGroup {
  icon: string;
  title: string;
  items: string[];
}

export interface TimelineEntry {
  period: string;
  title: string;
  org: string;
  description: string;
  icon: string;
}

export interface AboutContent {
  /** Document title + cover banner */
  title: string;
  coverTitle: string;
  /** Hero */
  greeting: string;
  name: string;
  role: string;
  tagline: string;
  /** Section labels */
  labels: {
    skills: string;
    education: string;
    contact: string;
    downloadCv: string;
    viewProjects: string;
    aboutMe: string;
  };
  cvHref: string;
  narrative: NarrativeBlock[];
  skills: SkillGroup[];
  education: TimelineEntry[];
}

const CV_HREF = '/cv/Carlos_Requena_CV.pdf';
const NAME = 'Carlos Requena Doña';
const SENDAI_IMG = '/img/projects/aboutme1.webp';

export const aboutContent: Record<string, AboutContent> = {
  es: {
    title: 'Sobre Mí',
    coverTitle: 'Sobre Mí',
    greeting: 'Hola, soy',
    name: NAME,
    role: 'Desarrollador de Software',
    tagline: 'Apasionado por los videojuegos, los motores gráficos y la inteligencia artificial.',
    labels: {
      skills: 'Habilidades',
      education: 'Educación',
      contact: 'Contacto',
      downloadCv: 'Descargar CV',
      viewProjects: 'Ver mis proyectos',
      aboutMe: 'Sobre mí',
    },
    cvHref: CV_HREF,
    narrative: [
      {
        type: 'p',
        text: 'Soy un desarrollador de software apasionado por la creación de videojuegos y motores gráficos. Me especializo en C++, Unity y OpenGL.',
      },
      { type: 'p', text: 'Con el tiempo he acabado inclinándome por la IA y las redes neuronales.' },
      {
        type: 'p',
        text: 'Amante de la cultura japonesa y su idioma, llegando a estudiar el idioma hasta proficiencia en entornos profesionales.',
      },
      { type: 'h', text: 'Experiencia en Japón' },
      {
        type: 'p',
        text: 'Durante un año tuve el honor de poder estudiar en Japón como estudiante de intercambio en la Ritsumeikan University, donde pude desarrollarme en el idioma y en la inteligencia artificial.',
      },
      { type: 'p', text: 'Por supuesto, también pude disfrutar de la cultura del entretenimiento que ofrece Japón.' },
      { type: 'img', src: SENDAI_IMG, alt: 'Estación de Sendai' },
      {
        type: 'p',
        text: 'Por otro lado, tras cursar asignaturas de japonés en el propio Japón, pude elevar mi nivel de dominio sobre el idioma a nivel avanzado. Dichas asignaturas reforzaron mi inmersión y entendimiento sobre el idioma y su gente.',
      },
    ],
    skills: [
      { icon: 'ri:code-s-slash-line', title: 'Lenguajes', items: ['C++', 'C#', 'JavaScript / TypeScript', 'GLSL'] },
      { icon: 'ri:gamepad-line', title: 'Motores y Gráficos', items: ['Unity', 'OpenGL', 'Renderizado 3D'] },
      {
        icon: 'ri:brain-line',
        title: 'IA y Optimización',
        items: ['Redes neuronales', 'Metaheurísticas', 'Algoritmos genéticos'],
      },
      { icon: 'ri:tools-line', title: 'Herramientas', items: ['Git', 'Visual Studio', 'VS Code'] },
      { icon: 'ri:translate-2', title: 'Idiomas', items: ['Español (nativo)', 'Inglés (C1 Cambridge)', 'Japonés (N1–N2)'] },
    ],
    education: [
      {
        period: '2024 – 2025',
        title: 'Estudiante de intercambio',
        org: 'Ritsumeikan University · Japón',
        description: 'Inteligencia artificial y estudios avanzados de japonés.',
        icon: 'ri:global-line',
      },
      {
        period: '2021 – 2026',
        title: 'Grado en Ingeniería Informática',
        org: 'Universidad de Jaén',
        description: 'Graduación prevista en 2026.',
        icon: 'ri:graduation-cap-line',
      },
    ],
  },

  en: {
    title: 'About Me',
    coverTitle: 'About Me',
    greeting: "Hi, I'm",
    name: NAME,
    role: 'Software Developer',
    tagline: 'Passionate about video games, graphics engines and artificial intelligence.',
    labels: {
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
      downloadCv: 'Download CV',
      viewProjects: 'See my projects',
      aboutMe: 'About me',
    },
    cvHref: CV_HREF,
    narrative: [
      {
        type: 'p',
        text: 'I am a software developer passionate about creating video games and graphics engines. I specialize in C++, Unity, and OpenGL.',
      },
      { type: 'p', text: "Over time, I've found myself leaning towards AI and neural networks." },
      {
        type: 'p',
        text: "I'm a lover of Japanese culture and its language, having studied the language to a professional proficiency level.",
      },
      { type: 'h', text: 'Experience in Japan' },
      {
        type: 'p',
        text: 'For a year, I had the honor of studying in Japan as an exchange student at Ritsumeikan University, where I was able to develop my skills in the language and artificial intelligence.',
      },
      { type: 'p', text: 'Of course, I was also able to enjoy the entertainment culture that Japan offers.' },
      { type: 'img', src: SENDAI_IMG, alt: 'Sendai Station' },
    ],
    skills: [
      { icon: 'ri:code-s-slash-line', title: 'Languages', items: ['C++', 'C#', 'JavaScript / TypeScript', 'GLSL'] },
      { icon: 'ri:gamepad-line', title: 'Engines & Graphics', items: ['Unity', 'OpenGL', '3D Rendering'] },
      { icon: 'ri:brain-line', title: 'AI & Optimization', items: ['Neural networks', 'Metaheuristics', 'Genetic algorithms'] },
      { icon: 'ri:tools-line', title: 'Tools', items: ['Git', 'Visual Studio', 'VS Code'] },
      {
        icon: 'ri:translate-2',
        title: 'Spoken languages',
        items: ['Spanish (native)', 'English (C1 Cambridge)', 'Japanese (N1–N2)'],
      },
    ],
    education: [
      {
        period: '2024 – 2025',
        title: 'Exchange Student',
        org: 'Ritsumeikan University · Japan',
        description: 'Artificial intelligence and advanced Japanese studies.',
        icon: 'ri:global-line',
      },
      {
        period: '2021 – 2026',
        title: "Bachelor's in Computer Engineering",
        org: 'University of Jaén',
        description: 'Expected graduation in 2026.',
        icon: 'ri:graduation-cap-line',
      },
    ],
  },

  ja: {
    title: '私について',
    coverTitle: '私について',
    greeting: 'こんにちは、',
    name: NAME,
    role: 'ソフトウェア開発者',
    tagline: 'ビデオゲーム、グラフィックスエンジン、人工知能に情熱を注ぐ開発者。',
    labels: {
      skills: 'スキル',
      education: '学歴',
      contact: 'お問い合わせ',
      downloadCv: '履歴書をダウンロード',
      viewProjects: 'プロジェクトを見る',
      aboutMe: '私について',
    },
    cvHref: CV_HREF,
    narrative: [
      {
        type: 'p',
        text: 'カルロスと申します。コンピューターサイエンスの世界に飛び込みました。現在は情報工学を専攻しており、特にニューラルネットワーク（人工知能）を専門としています。',
      },
      { type: 'p', text: '日本での留学経験を通じて、AIや最新技術への関心がより一層深まりました。' },
      { type: 'p', text: '日本文化と言語を愛しており、プロフェッショナルなレベルまで日本語を学ぶことができました。' },
      { type: 'h', text: '趣味について' },
      {
        type: 'p',
        text: '子供の頃からパソコンに興味を持たれてきました。父親にパソコンを触らせてくれた日以来、良いことにパソコンやゲームから離れることが出来ませんでした。',
      },
      {
        type: 'p',
        text: '私の趣味はパソコンやゲームの世界だけで留まりません。健康的なライフスタイルを維持するため、ジムでの筋トレにも情熱を注いでいます。身体と筋肉を鍛えることで工学者としてのパーフォマンスを上昇できます。',
      },
      { type: 'h', text: '日本での経験' },
      {
        type: 'p',
        text: '1年間、立命館大学の交換留学生として日本で勉強する機会に恵まれ、そこで語学力と人工知能の知識を深めることができました。尚且つ、日本に対しての関心はより強調するようになりました。',
      },
      { type: 'p', text: 'もちろん、日本が提供するエンターテインメント文化も大いに楽しむことができました。' },
      { type: 'img', src: SENDAI_IMG, alt: '仙台駅前' },
    ],
    skills: [
      { icon: 'ri:code-s-slash-line', title: 'プログラミング言語', items: ['C++', 'C#', 'JavaScript / TypeScript', 'GLSL'] },
      { icon: 'ri:gamepad-line', title: 'エンジン・グラフィックス', items: ['Unity', 'OpenGL', '3Dレンダリング'] },
      {
        icon: 'ri:brain-line',
        title: 'AI・最適化',
        items: ['ニューラルネットワーク', 'メタヒューリスティクス', '遺伝的アルゴリズム'],
      },
      { icon: 'ri:tools-line', title: 'ツール', items: ['Git', 'Visual Studio', 'VS Code'] },
      { icon: 'ri:translate-2', title: '言語', items: ['スペイン語（母語）', '英語（C1 ケンブリッジ）', '日本語（N1〜N2）'] },
    ],
    education: [
      {
        period: '2024 – 2025',
        title: '交換留学生',
        org: '立命館大学 · 日本',
        description: '人工知能と上級日本語の学習。',
        icon: 'ri:global-line',
      },
      {
        period: '2021 – 2026',
        title: '情報工学 学士',
        org: 'ハエン大学（スペイン）',
        description: '2026年卒業見込み。',
        icon: 'ri:graduation-cap-line',
      },
    ],
  },
};
