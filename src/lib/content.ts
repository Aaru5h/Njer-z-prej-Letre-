export type Article = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  categorySlug: string;
  author: string;
  authorSlug: string;
  date: string;
  read: string;
  number: string;
  tone: string;
  excerpt: string;
  tags: string[];
  paragraphs: string[];
  quote?: string;
};

export const sections = [
  { slug: "letersi", name: "Letërsi", description: "Tregime, poezi dhe ese që mbeten me ne edhe pasi mbyllim faqen." },
  { slug: "zera-te-rinj", name: "Zëra të rinj", description: "Një hapësirë për autorët që ende po kërkojnë vendin e tyre në botim." },
  { slug: "diaspora", name: "Diaspora", description: "Shkrimi mes gjuhëve, vendeve dhe kujtesave." },
  { slug: "kritike", name: "Kritikë letrare", description: "Lexime të kujdesshme, argumente të hapura dhe pyetje të mira." },
  { slug: "ide", name: "Ide & reflektime", description: "Mendime mbi identitetin, marrëdhëniet, besimin dhe jetën e përditshme." },
];

export const authors = [
  { slug: "elira-k", name: "Elira K.", place: "Tiranë / Berlin", bio: "Profil ilustrues për prototipin. Një zë editorial i përdorur për të treguar si do të paraqiten biografitë, vendndodhja dhe shkrimet e një autori." },
  { slug: "arin-b", name: "Arin B.", place: "Prishtinë / Londër", bio: "Profil ilustrues për prototipin. Përmbajtja dhe identiteti do të zëvendësohen me materialet e autorëve të miratuar para publikimit." },
  { slug: "mira-d", name: "Mira D.", place: "Shkodër / Milano", bio: "Profil ilustrues për prototipin. Faqja përmbledh shkrimet dhe krijon një vend të qartë për autorin brenda revistës." },
];

export const articles: Article[] = [
  {
    slug: "gjuha-qe-marrim-me-vete", title: "Gjuha që marrim me vete", dek: "Çfarë ndodh me fjalët tona kur shtëpia bëhet më shumë se një vend?", category: "Diaspora", categorySlug: "diaspora", author: "Elira K.", authorSlug: "elira-k", date: "24 tetor 2026", read: "7 min lexim", number: "01", tone: "rose", excerpt: "Një ese mbi gjuhën e parë, heshtjen dhe mënyrat e vogla me të cilat e rindërtojmë përkatësinë.", tags:["gjuhë","identitet","diasporë"],
    paragraphs: ["Ka fjalë që nuk udhëtojnë lehtë. I mbajmë me vete në valixhe, në telefonata, në recetat që përpiqemi t'i përsërisim larg shtëpisë. Më vonë kuptojmë se ato kanë ndryshuar pak, si ne.", "Të shkruash në një gjuhë ndërsa jeton brenda një tjetre do të thotë të dëgjosh vazhdimisht dy ritme. Njëri është ritmi i ditës së sotme; tjetri ruan mënyrën si dikur na thërrisnin në shtëpi.", "Ndoshta përkatësia nuk është një pikë në hartë. Ndoshta është mundësia për t'i lënë këto ritme të flasin me njëri-tjetrin, pa kërkuar që njëri të heshtë."], quote: "Ndonjëherë një gjuhë është vendi i vetëm ku mund të kthehemi pa biletë."
  },
  {
    slug: "ne-skaj-te-faqes", title: "Në skaj të faqes", dek: "Për shënimet që na ndryshojnë leximin.", category: "Letërsi", categorySlug: "letersi", author: "Arin B.", authorSlug: "arin-b", date: "18 tetor 2026", read: "5 min lexim", number: "02", tone: "ochre", excerpt: "Një reflektim mbi marginaliet, rileximin dhe librat që mbajnë gjurmët tona.", tags:["lexim","libra","marginalia"],
    paragraphs: ["Një libër i nënvizuar nuk është më i njëjti libër. Ai mban një bisedë të papërfunduar mes asaj që shkroi autori dhe asaj që kuptuam ne në një ditë të caktuar.", "Kur i kthehemi vite më vonë, shënimet në margjina mund të na duken të huaja. Pikërisht kjo është dhurata e tyre: na tregojnë sa kemi ndryshuar pa na kërkuar të japim llogari.", "Leximi, atëherë, nuk është vetëm marrje. Është një mënyrë për të lënë një gjurmë të vogël pranë mendimit të dikujt tjetër."], quote: "Në margjina shkruajmë jo vetëm për librin, por për veten që e lexoi."
  },
  {
    slug: "te-drejten-per-te-mos-pelqyer", title: "E drejta për të mos pëlqyer", dek: "Pse një kritikë e mirë mund të jetë akt kujdesi.", category: "Kritikë letrare", categorySlug: "kritike", author: "Mira D.", authorSlug: "mira-d", date: "12 tetor 2026", read: "6 min lexim", number: "03", tone: "charcoal", excerpt: "Mbi kritikën si bisedë serioze, jo si verdikt apo rekomandim i shpejtë.", tags:["kritikë","libra","ese"],
    paragraphs: ["Kritika letrare shpesh ngatërrohet me gjykimin. Por një lexim kritik nuk e mbyll veprën; ai hap më shumë dyer se sa mbyll.", "Të thuash se një libër nuk të bindi kërkon më shumë vëmendje se sa një vlerësim i nxituar. Duhet të tregosh çfarë premtoi, çfarë provoi dhe ku mendon se humbi rrugën.", "Në këtë kuptim, mospajtimi nuk është mungesë dashurie për letërsinë. Mund të jetë një nga mënyrat më të ndershme për ta marrë seriozisht."], quote: "Një kritikë e mirë i jep veprës kohë, edhe kur nuk i jep të drejtë."
  },
  {
    slug: "nje-dhome-per-nje-ze-te-ri", title: "Një dhomë për një zë të ri", dek: "Për guximin e faqes së parë.", category: "Zëra të rinj", categorySlug: "zera-te-rinj", author: "Arin B.", authorSlug: "arin-b", date: "8 tetor 2026", read: "4 min lexim", number: "04", tone: "blue", excerpt: "Një prozë e shkurtër për fillimet, pritjen dhe mundësinë e të qenit i lexuar.", tags:["prozë","zëra të rinj","fillime"],
    paragraphs: ["Dritarja ishte e hapur dhe faqja e bardhë dukej më e madhe se dhoma. Ajo shkroi një fjali, e fshiu, pastaj e shkroi sërish pa ndryshuar asgjë.", "Në rrugë, njerëzit vazhdonin ditën e tyre. Askush nuk e dinte se brenda asaj dhome po ndodhte një fillim i vogël.", "Më vonë, kur e lexoi me zë, fjalia iu duk më pak e vetmuar. Ajo la lapsin mbi tavolinë dhe vendosi ta vazhdonte."], quote: "Çdo zë i ri ka nevojë, së pari, për një vend ku të dëgjohet."
  },
  {
    slug: "arti-i-pyetjes", title: "Arti i pyetjes", dek: "Të mendosh pa nxituar drejt përgjigjes.", category: "Ide & reflektime", categorySlug: "ide", author: "Elira K.", authorSlug: "elira-k", date: "2 tetor 2026", read: "6 min lexim", number: "05", tone: "sage", excerpt: "Një ese mbi kuriozitetin, pasigurinë dhe hapësirën që i lëmë mendimit të tjetrit.", tags:["ide","kuriozitet","reflektim"],
    paragraphs: ["Në shumë biseda kërkojmë një përgjigje para se të kemi dëgjuar pyetjen deri në fund. Shpejtësia na jep siguri, por rrallë na jep kuptim.", "Një pyetje e mirë nuk është bosh. Ajo mban brenda vëmendje, dyshim dhe gatishmërinë për të ndryshuar mendje.", "Mbase mund të fillojmë me një gjest të thjeshtë: të qëndrojmë pak më gjatë te ajo që nuk kuptojmë. Prej aty mund të nisë një bisedë e vërtetë."], quote: "Pyetja është një mënyrë për t'i bërë vend dikujt tjetër."
  }
];

export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);
