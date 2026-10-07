// Conteúdo enriquecido — Anemia Falciforme (Doença Falciforme)
//
// Estrutura alinhada ao template institucional "Saúde Negra de A a Z" (ver
// Apresentação Institucional PPTX, slide "Modelo de Conteúdo"): O que é / Por
// que importa / Sinais / Quem fica atento / Prevenir / Diagnóstico /
// Tratamento / Quando ir / Onde no SUS / Fontes — mas segmentado em 3 níveis
// de profundidade/linguagem, por audiência profissional, conforme solicitado:
//   - medico:      conteúdo técnico-científico (fisiopatologia, diagnóstico
//                   diferencial, condutas, evidência, referências PCDT/MS)
//   - enfermeiro:   conteúdo clínico intermediário (triagem, manejo de crise,
//                   cuidado continuado, orientação ao paciente)
//   - usuario:      linguagem acessível (o que é, sinais de alerta, cuidado
//                   do dia a dia, onde buscar ajuda no SUS)
//
// Parceria técnica: ABRADFAL (Associação Brasiliense das Pessoas com Doença
// Falciforme) — ver site/src/data/project.ts. Tema prioritário do App Sentinela.

export interface AudienceSection {
  heading: string;
  body: string[]; // parágrafos (cada item = 1 parágrafo renderizado)
}

export interface AudienceContent {
  summary: string; // 1-2 frases de abertura, exibidas no topo da aba
  sections: AudienceSection[];
}

export interface DiseaseHeroImage {
  url: string;
  alt: string;
  credit: string;
  isPlaceholder: true;
}

export interface DiseaseSource {
  label: string;
  detail: string;
}

export interface DiseaseDeepContent {
  heroImage: DiseaseHeroImage;
  audiences: {
    medico: AudienceContent;
    enfermeiro: AudienceContent;
    usuario: AudienceContent;
  };
  sources: DiseaseSource[];
}

export const anemiaFalciformeContent: DiseaseDeepContent = {
  heroImage: {
    url: 'https://sspark.genspark.ai/i/U0fgB9sbw0tFlBV7?width=2560',
    alt: 'Micrografia eletrônica colorizada comparando hemácias normais em forma de disco biconcavo com uma hemácia em formato de foice (drepanócito), característica da doença falciforme',
    credit: 'Pixnio — domínio público / CC0 (placeholder científico, substituir por material próprio se necessário)',
    isPlaceholder: true,
  },

  audiences: {
    // ======================= MÉDICOS E PESQUISADORES =======================
    medico: {
      summary:
        'Fisiopatologia, diagnóstico diferencial, condutas clínicas e evidência atualizada para a prática médica e a pesquisa em doença falciforme (DF).',
      sections: [
        {
          heading: 'O que é — fisiopatologia',
          body: [
            'A doença falciforme (DF) é uma hemoglobinopatia hereditária autossômica recessiva causada por uma mutação pontual no gene da beta-globina (HBB), no cromossomo 11 (substituição de ácido glutâmico por valina na posição 6 da cadeia beta — GAG→GTG), resultando na hemoglobina S (HbS).',
            'Em condições de baixa tensão de oxigênio, acidose ou desidratação, a HbS polimeriza, deformando a hemácia em formato de foice (drepanócito). Essas células rígidas e pouco deformáveis causam vaso-oclusão microvascular, hemólise extravascular e intravascular crônica, inflamação endotelial sustentada e um estado de hipercoagulabilidade — a tríade fisiopatológica central (vaso-oclusão, hemólise, inflamação) que explica a maior parte das manifestações clínicas.',
            'Genótipos clinicamente relevantes: HbSS (forma mais grave, "anemia falciforme" em sentido estrito), HbSC, HbS/beta-talassemia (S-beta-zero e S-beta-mais) e o traço falciforme heterozigoto HbAS (portador assintomático na maioria dos casos, mas não isento de risco em situações extremas de hipóxia/exercício intenso — rabdomiólise, morte súbita em esforço extremo são descritas, ainda que raras).',
          ],
        },
        {
          heading: 'Por que importa — epidemiologia e recorte racial',
          body: [
            'A DF é a doença monogênica mais prevalente no Brasil, com incidência estimada em 1:1.000 a 1:1.400 nascidos vivos, e prevalência do traço falciforme (HbAS) de cerca de 2% na população geral — chegando a 6-10% em populações afrodescendentes de algumas regiões, refletindo a origem da mutação como provável vantagem seletiva histórica contra a malária (heterozigoto protegido) na África Subsaariana.',
            'Por sua distribuição genética ligada à ancestralidade africana, a DF é um marcador direto de como o racismo estrutural se traduz em inequidade em saúde: subdiagnóstico, atraso no início do tratamento, descrédito da dor relatada por pacientes negros (viés documentado na literatura internacional de manejo de dor) e menor investimento histórico em pesquisa comparado a condições de prevalência similar em populações majoritariamente brancas.',
          ],
        },
        {
          heading: 'Diagnóstico',
          body: [
            'Triagem neonatal universal (Programa Nacional de Triagem Neonatal / "teste do pezinho", Portaria MS) por eletroforese em pH alcalino ou HPLC — padrão-ouro para confirmação diagnóstica, complementado por estudo familiar quando indicado.',
            'Diagnóstico diferencial inclui outras hemoglobinopatias (HbC, HbD-Punjab, talassemias), anemias hemolíticas de outras etiologias e, na crise aguda, abdome agudo cirúrgico, osteomielite e artrite séptica (importante em criança com dor óssea e febre).',
            'Acompanhamento laboratorial de rotina: hemograma completo com reticulócitos, LDH, bilirrubina indireta, função renal (a nefropatia falciforme é subdiagnosticada), ultrassom transcraniano com Doppler em crianças (triagem de risco de AVC isquêmico) e avaliação cardiopulmonar periódica (ecocardiograma para hipertensão pulmonar, função respiratória).',
          ],
        },
        {
          heading: 'Tratamento e condutas',
          body: [
            'Hidroxiureia é a terapia modificadora de doença de primeira linha, disponível no SUS — aumenta HbF (hemoglobina fetal), reduzindo frequência de crises vaso-oclusivas e síndrome torácica aguda; requer monitoramento hematológico (risco de mielossupressão) e ajuste de dose individualizado.',
            'Profilaxia com penicilina oral até os 5 anos (risco aumentado de sepse por S. pneumoniae por asplenia funcional) e esquema vacinal ampliado (pneumocócica conjugada e polissacarídica, meningocócica, Haemophilus influenzae tipo b) são condutas-padrão em crianças com HbSS/S-beta-zero.',
            'Manejo da crise vaso-oclusiva: hidratação, analgesia multimodal e escalonada (incluindo opioides quando indicado — vigilância ativa contra subtratamento da dor por viés racial), oxigenoterapia se hipoxemia, e investigação de gatilhos/complicações associadas.',
            'Transfusão crônica (programa de hipertransfusão ou exsanguineotransfusão parcial) indicada em prevenção secundária de AVC, síndrome torácica aguda grave e outras complicações graves recorrentes; requer vigilância de sobrecarga de ferro (quelação) e aloimunização.',
            'Terapias emergentes: voxelotor (inibidor de polimerização da HbS), crizanlizumabe (anti-P-selectina, redução de crises vaso-oclusivas), L-glutamina oral, e terapia genética (edição de genes — exa-cel/Casgevy, lovotibeglogene autotemcel) já aprovadas em outras jurisdições, com discussão de incorporação no SUS em curso — acompanhar PCDT vigente do Ministério da Saúde.',
            'Transplante de células-tronco hematopoiéticas (TCTH) alogênico permanece a única modalidade curativa estabelecida, reservado a casos graves com doador compatível, dado o risco de morbimortalidade do procedimento.',
          ],
        },
        {
          heading: 'Quando referenciar / sinais de alarme clínico',
          body: [
            'Febre ≥38°C em paciente com DF é emergência até prova em contrário (risco de sepse por asplenia funcional) — hemocultura e antibioticoterapia empírica precoce.',
            'Síndrome torácica aguda (novo infiltrado radiológico + febre/dor torácica/hipoxemia) é a principal causa de morte em adultos com DF — manejo hospitalar agressivo, suporte respiratório e considerar exsanguineotransfusão.',
            'Déficit neurológico focal agudo (mesmo transitório) exige investigação imediata de AVC — maior risco em crianças com HbSS, rastreio por Doppler transcraniano permite prevenção primária com transfusão crônica.',
            'Priapismo >4h, sequestro esplênico agudo (criança pequena, esplenomegalia súbita + queda de Hb) e crise aplásica (geralmente por parvovírus B19) são emergências que exigem intervenção imediata.',
          ],
        },
        {
          heading: 'Fontes e diretrizes',
          body: [
            'Protocolo Clínico e Diretrizes Terapêuticas (PCDT) da Doença Falciforme, Ministério da Saúde — referência normativa para conduta no SUS.',
            'Parceria técnica ABRADFAL (Associação Brasiliense das Pessoas com Doença Falciforme) fundamenta a curadoria e revisão deste conteúdo junto ao App Sentinela.',
            'Literatura internacional consolidada (NHLBI Evidence-Based Management of Sickle Cell Disease; American Society of Hematology guidelines) orienta as condutas descritas acima — sempre cotejar com protocolo institucional local.',
          ],
        },
      ],
    },

    // ======================= ENFERMEIROS E TÉCNICOS =======================
    enfermeiro: {
      summary:
        'Triagem, manejo de crises, cuidado continuado e orientação ao paciente/família — conteúdo clínico de nível intermediário para a rotina de enfermagem na Atenção Básica e na urgência/emergência.',
      sections: [
        {
          heading: 'O que é',
          body: [
            'A doença falciforme é uma condição genética hereditária (não é contagiosa, não é "contaminação") em que as hemácias, em vez de manterem o formato arredondado normal, podem assumir formato de foice sob certas condições (falta de oxigênio, desidratação, frio, esforço físico intenso, infecção).',
            'Essas hemácias em foice são mais rígidas e "entopem" vasos sanguíneos pequenos, causando dor (crise) e, ao longo do tempo, dano a órgãos como baço, rins, pulmões e ossos. A pessoa com DF também tem anemia crônica, porque essas hemácias se rompem (hemolisam) mais rápido que o normal.',
          ],
        },
        {
          heading: 'Sinais que a equipe deve reconhecer',
          body: [
            'Dor aguda e intensa, geralmente em ossos longos, peito, abdômen ou articulações — é o motivo mais comum de busca por atendimento, chamada de "crise de dor" ou "crise vaso-oclusiva". A intensidade relatada pelo paciente deve ser sempre levada a sério: pessoas negras historicamente têm sua dor subestimada e subtratada no sistema de saúde — é um viés a ser ativamente combatido na triagem.',
            'Palidez, icterícia (olhos/pele amarelados), cansaço desproporcional e falta de ar podem indicar agravamento da anemia ou sequestro esplênico (em crianças pequenas).',
            'Febre em pessoa com DF NUNCA deve ser minimizada — classificar como prioridade alta/vermelha no acolhimento, pois pode ser sinal de infecção grave (o baço geralmente não funciona bem nessas pessoas, aumentando risco de infecções graves).',
            'Falta de ar associada a dor no peito e febre pode ser síndrome torácica aguda, uma complicação grave que precisa de avaliação médica imediata.',
            'Em homens, ereção dolorosa prolongada (priapismo, mais de 4 horas) é emergência urológica — orientar busca imediata de atendimento.',
          ],
        },
        {
          heading: 'Quem fica atento — grupos de risco e acompanhamento',
          body: [
            'Toda criança deve ter o resultado do "teste do pezinho" verificado — é nele que a DF costuma ser identificada no Brasil, ainda nos primeiros dias de vida. Crianças diagnosticadas precisam de acompanhamento regular, vacinação em dia (incluindo vacinas extras recomendadas) e, até os 5 anos, uso contínuo de penicilina para prevenir infecções graves — reforçar a adesão com a família em cada contato.',
            'Adultos com DF precisam de acompanhamento hematológico regular, mesmo em períodos sem crise — a doença continua "trabalhando" silenciosamente nos órgãos.',
            'Pessoas com traço falciforme (que têm o "gene", mas não a doença) geralmente não têm sintomas, mas devem saber informar isso em situações de exercício físico extremo, desidratação severa ou altitude elevada, e é informação relevante para planejamento familiar (risco de ter filho com a doença se o parceiro/parceira também tiver o traço).',
          ],
        },
        {
          heading: 'Manejo da crise de dor — o que fazer na unidade',
          body: [
            'Acolher rapidamente, classificar risco considerando a história de DF como fator automático de atenção prioritária, e iniciar hidratação (oral se tolerado, venosa se necessário) o quanto antes.',
            'Seguir o protocolo de analgesia escalonada da unidade sem demora — crises de dor falciforme exigem controle rápido e eficaz da dor; não é "drama" nem "procura por medicamento controlado", é manifestação direta da doença.',
            'Observar sinais vitais, saturação de oxigênio e temperatura com frequência — aplicar oxigênio se houver queda de saturação.',
            'Registrar e comunicar imediatamente à equipe médica qualquer sinal de alarme: febre, dificuldade respiratória, dor torácica, alteração neurológica (fala, força, visão), priapismo ou baço muito aumentado em criança.',
          ],
        },
        {
          heading: 'Cuidado continuado e orientação ao paciente/família',
          body: [
            'Reforçar hidratação adequada no dia a dia, evitar exposição a frio intenso e extremos de esforço físico sem preparo, e buscar atendimento precoce diante de febre — são as orientações de autocuidado mais efetivas para reduzir crises.',
            'Orientar sobre a importância de não interromper a hidroxiureia (quando prescrita) sem orientação médica, mesmo em períodos sem sintomas — é tratamento contínuo, não "de crise".',
            'Apoiar psicossocialmente: DF é doença crônica, dolorosa e muitas vezes invisibilizada; o acolhimento humanizado da equipe de enfermagem é determinante para a adesão ao tratamento e para a confiança no sistema de saúde.',
            'Encaminhar à Rede SUS local (ver página "Rede SUS" desta plataforma) para vínculo com hematologia de referência, serviço social e, quando pertinente, a ABRADFAL (associação de pacientes, parceira técnica deste projeto).',
          ],
        },
      ],
    },

    // ============================== USUÁRIOS ===============================
    usuario: {
      summary:
        'O que é a anemia falciforme, sinais de alerta, cuidados do dia a dia e onde buscar ajuda no SUS — em linguagem simples e direta.',
      sections: [
        {
          heading: 'O que é',
          body: [
            'A anemia falciforme (também chamada de doença falciforme) é uma doença do sangue que a pessoa já nasce com ela — passada pelos pais, no "sangue" (genes). Não é uma doença contagiosa: não se "pega" de ninguém.',
            'Na anemia falciforme, os glóbulos vermelhos do sangue (que levam oxigênio para o corpo) podem mudar de formato: em vez de redondinhos, ficam parecidos com uma foice (lua crescente). Esses glóbulos em formato de foice entopem vasinhos de sangue pequenos, o que causa dores fortes e pode machucar órgãos do corpo com o tempo.',
            'É a doença genética mais comum no Brasil, e é bem mais frequente entre pessoas negras — por isso é um tema tão importante para a nossa comunidade.',
          ],
        },
        {
          heading: 'Por que isso importa',
          body: [
            'Quem tem anemia falciforme pode ter uma vida longa e de qualidade com acompanhamento médico regular, remédios certos e cuidados simples no dia a dia. O problema não é a doença "não ter solução" — é o atraso no diagnóstico, o preconceito, e a dor da pessoa não ser levada a sério nos atendimentos de saúde.',
            'Historicamente, a dor de pessoas negras é mais desacreditada nos hospitais. Isso é um tipo de racismo institucional que custa vidas — e é algo que esta plataforma existe para combater.',
          ],
        },
        {
          heading: 'Sinais de alerta — fique atento(a)',
          body: [
            'Dor forte e repentina em ossos, barriga, peito ou juntas — é a chamada "crise de dor" e é o sinal mais comum. Nunca minimize: procure atendimento.',
            'Febre é sempre um sinal de alerta em pessoa com anemia falciforme — mesmo que pareça "só uma febrezinha", procure a Unidade Básica de Saúde (UBS) ou emergência no mesmo dia.',
            'Cansaço fora do normal, falta de ar, olhos ou pele amarelados (icterícia) e palidez podem indicar que a anemia está mais forte — vale uma consulta.',
            'Criança pequena com a barriga inchando de repente (baço aumentado) precisa de atendimento urgente.',
            'Em homens, ereção dolorida que não passa (mais de 4 horas) é emergência — procure o hospital imediatamente, não espere.',
          ],
        },
        {
          heading: 'Cuidados do dia a dia',
          body: [
            'Beba bastante água todos os dias — a desidratação é um dos principais gatilhos de crise de dor.',
            'Evite ficar muito tempo no frio intenso e evite esforço físico muito pesado sem preparo — ambos podem provocar crises.',
            'Se toma remédio contínuo (como hidroxiureia), não pare por conta própria, mesmo se estiver se sentindo bem — ele ajuda a prevenir crises mesmo quando você não sente nada.',
            'Mantenha as vacinas em dia — pessoas com anemia falciforme têm risco maior de infecções graves, então estar vacinado(a) é uma proteção extra importante.',
            'Se seu filho(a) tem anemia falciforme e tem menos de 5 anos, o uso diário de penicilina (conforme orientação médica) ajuda a prevenir infecções graves — é um cuidado simples, mas que salva vidas.',
          ],
        },
        {
          heading: 'Onde buscar ajuda no SUS',
          body: [
            'Todo bebê faz o "teste do pezinho" nos primeiros dias de vida — é assim que a anemia falciforme costuma ser descoberta no Brasil. Se seu filho(a) tem o diagnóstico, procure a Unidade Básica de Saúde (UBS) da sua região para ser encaminhado(a) ao acompanhamento com hematologia.',
            'Para dor forte ou febre, vá à UBS mais próxima ou, se for fora do horário ou a dor for muito intensa, procure a UPA (Unidade de Pronto Atendimento) ou pronto-socorro.',
            'Use a página "Rede SUS" desta plataforma para encontrar as unidades de saúde mais próximas de você no Distrito Federal.',
            'A ABRADFAL (Associação Brasiliense das Pessoas com Doença Falciforme) é parceira deste projeto e pode oferecer apoio, informação e acolhimento entre pessoas que vivem a mesma realidade.',
          ],
        },
      ],
    },
  },

  sources: [
    {
      label: 'ABRADFAL',
      detail: 'Associação Brasiliense das Pessoas com Doença Falciforme — parceria técnica de conteúdo e curadoria clínica.',
    },
    {
      label: 'Ministério da Saúde — PCDT Doença Falciforme',
      detail: 'Protocolo Clínico e Diretrizes Terapêuticas vigente, referência normativa para a conduta no SUS.',
    },
    {
      label: 'Programa Nacional de Triagem Neonatal',
      detail: '"Teste do pezinho" — diagnóstico precoce padrão no Brasil, base da identificação neonatal da doença falciforme.',
    },
    {
      label: 'NHLBI / American Society of Hematology',
      detail: 'Diretrizes internacionais de manejo clínico baseado em evidência, usadas como referência complementar.',
    },
  ],
};
