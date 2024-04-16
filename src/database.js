const ferramentas = [
  {
    id: 1,
    tipo: "Ambientes de Desenvolvimento Integrado (IDEs)",
    titulo: "VS Code",
    link: "https://code.visualstudio.com/Download",
    sobre:
      "O Visual Studio Code (VS Code) é um editor de código-fonte desenvolvido pela Microsoft. Ele é altamente elogiado pela sua leveza, rapidez e pela vasta gama de extensões que oferece, tornando-o uma escolha popular entre desenvolvedores de software de diversos tipos.",
  },
  {
    id: 2,
    tipo: "Ambientes de Desenvolvimento Integrado (IDEs)",
    titulo: "Eclipse",
    link: "https://www.eclipse.org/downloads/",
    sobre:
      "O Eclipse é uma IDE (Integrated Development Environment) de código aberto amplamente utilizada para o desenvolvimento de software em várias linguagens, mas é mais conhecida por ser uma das principais ferramentas para desenvolvimento em Java. ",
  },
  {
    id: 3,
    tipo: "Ambientes de Desenvolvimento Integrado (IDEs)",
    titulo: " IntelliJ IDEA",
    link: "https://lp.jetbrains.com/intellij-idea-features-promo/?msclkid=b8ac52cc92401e60250234d15a38900e&utm_source=bing&utm_medium=cpc&utm_campaign=AMER_en_BR_IDEA_Branded&utm_term=intellij%20IDEA&utm_content=intellij%20idea",
    sobre:
      "O IntelliJ IDEA é uma poderosa IDE (Integrated Development Environment) desenvolvida pela JetBrains, projetada principalmente para desenvolvimento em Java, mas também oferece suporte a uma ampla gama de outras linguagens de programação, como Kotlin, Scala, Groovy, JavaScript, TypeScript e mais.",
  },
  {
    id: 4,
    tipo: "Modelos de Processos de Software",
    titulo: "Microsoft Visio",
    link: "https://support.microsoft.com/pt-br/office/instalar-o-visio-ou-acessar-o-visio-na-web-f98f21e3-aa02-4827-9167-ddab5b025710",
    sobre:
      "O Microsoft Visio é uma ferramenta amplamente utilizada para criação de diagramas de diversos tipos, incluindo diagramas de fluxo de processo. Embora não seja exclusivamente uma ferramenta de BPM, o Visio oferece recursos robustos para modelagem de processos de software, permitindo aos usuários criar diagramas detalhados usando diferentes notações, como BPMN, UML e fluxogramas. Ele é especialmente popular entre as organizações que já utilizam outros produtos da suíte Microsoft Office.",
  },
  {
    id: 5,
    tipo: "Modelos de Processos de Software",
    titulo: "Bizagi Modeler",
    link: "https://www.bizagi.com/pt/plataforma/try-modeler",
    sobre:
      "O Bizagi Modeler é uma ferramenta gratuita e de fácil utilização para modelagem de processos de negócio, baseada na notação BPMN (Business Process Model and Notation). Ele permite aos usuários criar diagramas de processos de forma intuitiva e colaborativa, facilitando a visualização e análise dos fluxos de trabalho. O Bizagi Modeler suporta recursos avançados, como simulação de processos e geração automática de documentação, tornando-o uma escolha popular para profissionais que buscam uma ferramenta eficiente para modelagem de processos de software.",
  },
  {
    id: 6,
    tipo: "Modelos de Processos de Software",
    titulo: "Lucidchart",
    link: "https://lucid.app/pt/pricing/lucidchart?_gl=1*1cd14ol*_ga*NDQwMzg2NjE0LjE3MTMyMjgwMjc.*_ga_MPV5H3XMB5*MTcxMzIyODAyNi4xLjAuMTcxMzIyODAyNi42MC4wLjA.*_gcl_au*MzEzMDk3MTIwLjE3MTMyMjgwMjc.&anonId=0.35172e0318ee4590218&sessionDate=2024-04-16T00%3A40%3A22.301Z&sessionId=0.b7e5303418ee459021c&referer=https%3A%2F%2Fwww.lucidchart.com%2Fpages%2Fpt#/pricing/chart",
    sobre:
      "O Lucidchart é uma plataforma de diagramação online que oferece uma variedade de modelos e ferramentas para modelagem de processos de software. Ele permite aos usuários criar diagramas de fluxo de processo usando notações como BPMN, fluxogramas, diagramas de sequência e muito mais. O Lucidchart é conhecido pela sua interface amigável, recursos de colaboração em tempo real e integração com outras ferramentas de produtividade, tornando-o uma escolha popular entre equipes distribuídas.",
  },
  {
    id: 7,
    tipo: "Análise, especificação, validação e gestão de requisitos.",
    titulo: "IBM DOORS",
    link: "https://www.ibm.com/support/pages/ibm-rational-doors-version-93",
    sobre:
      "O IBM DOORS é uma ferramenta líder de mercado para gestão de requisitos. Ele permite capturar, rastrear, analisar e gerenciar requisitos de forma eficaz ao longo do ciclo de vida do projeto. Com recursos avançados de análise, colaboração e personalização, o DOORS ajuda as equipes a garantir que os requisitos sejam claros, consistentes e verificáveis. Ele também oferece integração com outras ferramentas de desenvolvimento de software, como ferramentas de modelagem UML e ferramentas de gestão de projetos.",
  },
  {
    id: 8,
    tipo: "Análise, especificação, validação e gestão de requisitos.",
    titulo: "Jama Connect",
    link: "https://support.jamasoftware.com/hc/en-us/articles/21866328952077-Installing-Jama-Connect-Traditional",
    sobre:
      "O Jama Connect é uma plataforma de gestão de requisitos que oferece uma abordagem colaborativa para capturar, validar e gerenciar requisitos de forma centralizada. Ele fornece recursos avançados de rastreamento de requisitos, revisão de requisitos, verificação e validação de requisitos, e integração com outras ferramentas de desenvolvimento de software. O Jama Connect é conhecido pela sua flexibilidade e escalabilidade, tornando-o uma escolha popular para equipes de desenvolvimento de software de todos os tamanhos.",
  },
  {
    id: 9,
    tipo: "Análise, especificação, validação e gestão de requisitos.",
    titulo: "Microsoft Azure DevOps",
    link: "https://learn.microsoft.com/en-us/azure/devops/server/download/azuredevopsserver?view=azure-devops",
    sobre:
      "O Microsoft Azure DevOps é uma plataforma de colaboração e gestão de ciclo de vida de aplicativos que inclui um conjunto abrangente de ferramentas para desenvolvimento de software. Ele oferece recursos para rastreamento e gerenciamento de requisitos, planejamento de projetos, controle de versão, automação de build e implantação, testes de software e muito mais. Embora não seja exclusivamente uma ferramenta de gestão de requisitos, o Azure DevOps oferece funcionalidades que cobrem várias etapas do processo de desenvolvimento de software, incluindo a gestão de requisitos.",
  },
  {
    id: 10,
    tipo: "Testes de Software",
    titulo: "Selenium",
    link: "https://www.selenium.dev/downloads/",
    sobre:
      "O Selenium é uma ferramenta de automação de teste de software utilizada principalmente para testar aplicativos da web. Ele permite que os desenvolvedores escrevam scripts de teste automatizados que simulam a interação do usuário com o navegador da web. O Selenium suporta várias linguagens de programação, incluindo Java, Python, C#, Ruby, JavaScript, entre outras, o que o torna uma escolha versátil para equipes de desenvolvimento. Ele pode ser usado para testar diversos cenários, como testes de funcionalidade, testes de aceitação e testes de regressão em diferentes navegadores e sistemas operacionais.",
  },
  {
    id: 11,
    tipo: "Testes de Software",
    titulo: "JUnit",
    link: "https://sourceforge.net/projects/junit-5.mirror/",
    sobre:
      "O JUnit é um framework de teste unitário para Java. Ele fornece uma estrutura para escrever e executar testes automatizados para validar o comportamento de unidades individuais de código Java, como métodos e classes. O JUnit simplifica o processo de teste, permitindo que os desenvolvedores criem casos de teste facilmente, executem testes de forma automatizada e obtenham resultados claros sobre o sucesso ou falha dos testes. Ele é amplamente utilizado em projetos Java para garantir a qualidade e a confiabilidade do código.",
  },
  {
    id: 12,
    tipo: "Testes de Software",
    titulo: "Postman",
    link: "https://www.postman.com/downloads/",
    sobre:
      "O Postman é uma plataforma de colaboração para desenvolvimento de APIs (Application Programming Interfaces). Embora seja mais conhecido por sua ferramenta de teste de API, o Postman oferece uma gama de recursos para o ciclo de vida completo de desenvolvimento de APIs, incluindo a criação, documentação, teste e monitoramento de APIs. Ele permite aos desenvolvedores enviar e receber solicitações HTTP para testar APIs RESTful, criar scripts de teste automatizados, gerar documentação interativa de APIs e colaborar com outras equipes durante o processo de desenvolvimento. O Postman é amplamente utilizado por desenvolvedores de API em todo o mundo devido à sua facilidade de uso e recursos abrangentes.",
  },
  {
    id: 13,
    tipo: "Prototipação",
    titulo: "Sketch",
    link: "https://www.sketch.com/",
    sobre:
      "Sketch é uma ferramenta de design de interface de usuário exclusiva para macOS que oferece recursos avançados para criação de protótipos de alta fidelidade. Ele permite que os designers criem interfaces de usuário pixel-perfect, usem componentes reutilizáveis, criem animações e prototipem interações complexas entre diferentes telas. O Sketch é amplamente utilizado por designers de produtos digitais para criar protótipos detalhados e visualmente impressionantes de aplicativos e sites.",
  },
  {
    id: 14,
    tipo: "Prototipação",
    titulo: "Adobe XD",
    link: "https://adobe-xd.softonic.com.br/",
    sobre:
      "Adobe XD é uma ferramenta de design e prototipação desenvolvida pela Adobe. Ele permite que os designers criem protótipos interativos de aplicativos e sites com facilidade, sem a necessidade de escrever código. O Adobe XD oferece uma variedade de recursos, como ferramentas de design vetorial, animações, transições, prototipagem de alta fidelidade e colaboração em tempo real. Ele é amplamente utilizado por designers e equipes de desenvolvimento para criar protótipos visuais e testar a usabilidade de interfaces de usuário.",
  },
  {
    id: 15,
    tipo: "Prototipação",
    titulo: "Figma",
    link: "https://www.figma.com/downloads/",
    sobre:
      "Figma é uma ferramenta de design de interface de usuário baseada na web que inclui recursos poderosos para prototipagem de designs de aplicativos e sites. Ele permite que os designers criem protótipos interativos, colaborem em tempo real e compartilhem facilmente seus designs com outras pessoas. O Figma oferece uma interface intuitiva e fácil de usar, suporte para colaboração em equipe e integração com outras ferramentas de design e desenvolvimento.",
  },
  {
    id: 16,
    tipo: "Gerenciamento de Projetos",
    titulo: "Jira",
    link: "https://www.atlassian.com/software/jira/download.",
    sobre:
      "O Jira é uma ferramenta popular de gerenciamento de projetos desenvolvida pela Atlassian. Ele oferece uma ampla gama de recursos para planejamento, rastreamento e gerenciamento de projetos ágeis e tradicionais. O Jira permite que as equipes criem histórias de usuário, atribuam tarefas, acompanhem o progresso do trabalho, definam sprints e epics, gerenciem cronogramas e muito mais. Ele é amplamente utilizado por equipes de desenvolvimento de software, mas também é adequado para outros tipos de projetos.",
  },
  {
    id: 17,
    tipo: "Gerenciamento de Projetos",
    titulo: "Trello",
    link: "https://trello.com/pt-BR",
    sobre:
      "O Trello é uma ferramenta de gerenciamento de projetos baseada em quadros visuais, cartões e listas. Ele oferece uma abordagem simplificada para planejamento e organização de tarefas, permitindo que as equipes criem quadros personalizados, adicionem cartões para representar tarefas individuais e movam os cartões entre diferentes colunas para acompanhar o progresso do trabalho. O Trello é conhecido por sua interface intuitiva e flexibilidade, tornando-o uma escolha popular para equipes de todos os tamanhos e setores.",
  },
  {
    id: 18,
    tipo: "Gerenciamento de Projetos",
    titulo: "Asana",
    link: "https://asana.com/pt/download",
    sobre:
      "O Asana é uma plataforma de gerenciamento de trabalho que ajuda as equipes a planejar, organizar e acompanhar projetos de ponta a ponta. Ele oferece uma variedade de recursos, incluindo listas de tarefas, calendários, quadros de projetos, fluxos de trabalho personalizáveis e relatórios de progresso. O Asana é conhecido por sua interface limpa e amigável, integrações com outras ferramentas de produtividade e recursos avançados de automação, tornando-o uma escolha popular para equipes que buscam uma solução abrangente para gerenciamento de projetos.",
  },
  {
    id: 19,
    tipo: "Ferramentas base para frameworks ágeis",
    titulo: "Atlassian JIRA Agile",
    link: "https://www.atlassian.com/software/jira/download.",
    sobre:
      "O Atlassian JIRA Agile, agora conhecido como JIRA Software, é uma ferramenta de gerenciamento de projetos ágeis desenvolvida pela Atlassian. Ele é projetado para apoiar equipes que adotam metodologias ágeis, como Scrum e Kanban. O JIRA Software oferece recursos para planejamento de sprint, criação de backlogs, rastreamento de tarefas, criação de quadros Kanban e Scrum, gerenciamento de histórias de usuário e muito mais. Ele também fornece integrações com outras ferramentas da Atlassian, como Confluence e Bitbucket, para facilitar a colaboração e o desenvolvimento de software..",
  },
  {
    id: 20,
    tipo: "Ferramentas base para frameworks ágeis",
    titulo: "VersionOne",
    link: "https://www.softwaretestinghelp.com/versionone-tutorial/",
    sobre:
      "O VersionOne é uma plataforma de gerenciamento ágil de projetos que oferece suporte para Scrum, Kanban, XP e outras metodologias ágeis. Ele fornece recursos abrangentes para planejamento de releases, gestão de backlogs, rastreamento de progresso, relatórios e análise de métricas de desempenho. O VersionOne é conhecido por sua flexibilidade e escalabilidade, tornando-o adequado para equipes de desenvolvimento de software de todos os tamanhos. Ele também oferece integrações com várias ferramentas de desenvolvimento e colaboração, como JIRA, GitHub e Slack.",
  },
  {
    id: 21,
    tipo: "Ferramentas base para frameworks ágeis",
    titulo: "Targetprocess",
    link: "https://www.targetprocess.com/guide/",
    sobre:
      "O Targetprocess é uma plataforma de gerenciamento ágil que oferece uma abordagem visual para planejamento e execução de projetos. Ele permite que as equipes criem quadros personalizados, fluxos de trabalho, dashboards e relatórios para acompanhar o progresso do trabalho e aprimorar a colaboração. O Targetprocess oferece suporte para uma ampla gama de metodologias ágeis, incluindo Scrum, Kanban, XP e Lean. Ele também fornece integrações com outras ferramentas populares de desenvolvimento de software, como JIRA, GitHub, GitLab e Azure DevOps.",
  },
  {
    id: 22,
    tipo: "Outras Ferramentas Úteis para o Desenvolvimento de Aplicações",
    titulo: "GitLab",
    link: "https://about.gitlab.com/install/",
    sobre:
      "GitLab é uma plataforma de desenvolvimento de software baseada em Git que oferece uma ampla gama de ferramentas para gerenciamento de código-fonte, integração contínua (CI), implantação contínua (CD), gerenciamento de projetos e colaboração. Ele fornece um repositório Git privado para armazenar o código-fonte do projeto, pipelines CI/CD para automatizar o processo de construção, teste e implantação de aplicativos, e ferramentas de rastreamento de problemas e solicitações de merge para facilitar a colaboração entre os membros da equipe.",
  },
  {
    id: 23,
    tipo: "Outras Ferramentas Úteis para o Desenvolvimento de Aplicações",
    titulo: "PostgreSQL",
    link: "https://www.postgresql.org/download/",
    sobre:
      "PostgreSQL é um sistema de gerenciamento de banco de dados relacional de código aberto conhecido por sua confiabilidade, robustez e recursos avançados. Ele oferece suporte para a maioria dos recursos do SQL padrão e possui extensões que permitem armazenar e processar dados de forma eficiente. PostgreSQL é amplamente utilizado em aplicações web e móveis devido à sua escalabilidade e capacidade de lidar com grandes volumes de dados.",
  },
  {
    id: 24,
    tipo: "Outras Ferramentas Úteis para o Desenvolvimento de Aplicações",
    titulo: "Docker",
    link: "https://docs.docker.com/desktop/install/windows-install/",
    sobre:
      "Docker é uma plataforma de código aberto que facilita a criação, implantação e execução de aplicativos em contêineres. Os contêineres Docker permitem que os desenvolvedores empacotem um aplicativo com todas as suas dependências em uma unidade padronizada, garantindo que ele seja executado de maneira consistente em qualquer ambiente. Docker é amplamente utilizado para criar ambientes de desenvolvimento consistentes, facilitar a integração contínua e implantação contínua (CI/CD), e simplificar o processo de migração de aplicativos entre diferentes infraestruturas.",
  },
  {
    id: 25,
    tipo: "IA's para desenvolvimento de software",
    titulo: "TabNine",
    link: "https://www.tabnine.com/install",
    sobre:
      "TabNine é um plugin de IA para diversos editores de código que oferece sugestões de código inteligentes enquanto você digita. Ele utiliza um modelo de linguagem de inteligência artificial treinado em milhões de exemplos de código para prever continuamente o que você está tentando escrever. TabNine pode ajudar os desenvolvedores a escrever código mais rapidamente e com menos erros.",
  },
  {
    id: 26,
    tipo: "IA's para desenvolvimento de software",
    titulo: "GitHub Copilot",
    link: "https://marketplace.visualstudio.com/items?itemName=GitHub.copilotvs",
    sobre:
      "GitHub Copilot é uma ferramenta de codificação baseada em IA desenvolvida pela GitHub e OpenAI. Ela fornece sugestões de código em tempo real enquanto os desenvolvedores escrevem, com base no contexto do código e nas melhores práticas de programação. O Copilot pode ajudar os desenvolvedores a escrever código mais rapidamente, oferecendo completions de código, snippets e até mesmo funções inteiras.",
  },
  {
    id: 27,
    tipo: "IA's para desenvolvimento de software",
    titulo: "CodeGuru da AWS",
    link: "https://aws.amazon.com/pt/codeguru/",
    sobre:
      "O Amazon CodeGuru é um serviço da AWS que utiliza técnicas de machine learning para automatizar revisões de código e melhorar a qualidade do software. Ele fornece recomendações para otimização de desempenho e identificação de código com potencial de causar problemas de segurança, além de oferecer insights sobre as práticas recomendadas de codificação.",
  },
];

export default ferramentas;
