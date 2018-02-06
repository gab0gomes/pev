angular.module('ionicApp', ['ionic', 'ngCordova'])

.config(function($ionicConfigProvider)   {
    if (ionic.Platform.isAndroid())
       $ionicConfigProvider.scrolling.jsScrolling(false);
     })

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('intro', {
      url: '/intro',
      templateUrl: 'templates/intro.html',
      controller: 'IntroCtrl'
    })
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.project', {
      url: "/project",
      views: {
        'home-tab': {
          templateUrl: "templates/project.html"
        }
      }
    })
    .state('tabs.conceitos', {
      url: "/conceitos",
      views: {
        'home-tab': {
          templateUrl: "templates/conceitos.html"
        }
      }
    })
    .state('tabs.meioamb', {
      url: "/meioamb",
      views: {
        'home-tab': {
          templateUrl: "templates/meioamb.html"
        }
      }
    })
    .state('tabs.educamb', {
      url: "/educamb",
      views: {
        'home-tab': {
          templateUrl: "templates/educamb.html"
        }
      }
    })
    .state('tabs.desesus', {
      url: "/desesus",
      views: {
        'home-tab': {
          templateUrl: "templates/desesus.html"
        }
      }
    })
    .state('tabs.cartilhas', {
      url: "/cartilhas",
      views: {
        'home-tab': {
          templateUrl: "templates/cartilhas.html"
        }
      }
    })
    .state('tabs.legislacao', {
      url: "/legislacao",
      views: {
        'home-tab': {
          templateUrl: "templates/legislacao.html"
        }
      }
    })
    .state('tabs.educambdisc', {
      url: "/educambdisc",
      views: {
        'home-tab': {
          templateUrl: "templates/educambdisc.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/about.html"
        }
      }
    })
    .state('tabs.agradecimentos', {
      url: "/agradecimentos",
      views: {
        'home-tab': {
          templateUrl: "templates/agradecimentos.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html"
        }
      }
    });

$urlRouterProvider.otherwise("/intro");
   //$urlRouterProvider.otherwise("/tab/home");

})


.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {

  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('tabs.home');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
  $scope.text =
    {
      text1: 'Este é o APP do Projeto Escola Verde (PEV). Sua função é auxiliar os professores de diferentes áreas do conhecimento nas atividades de Educação Ambiental (EA), nas escolas da região do Vale do São Francisco e de todo Brasil.',
      text2: 'O produto final é resultado de um esforço conjunto de professores e alunos da Universidade Federal do Vale do São Francisco (Univasf), e outras instituições de ensino superior da região, empenhados em construir coletivamente alternativas (práticas e teóricas) diante das problemáticas socioambientais locais, tomando a Escola como centro difusor de novas percepções e ações frente dos desafios vivenciados.'
    };
})


.config(function($ionicConfigProvider){
  $ionicConfigProvider.tabs.position('bottom')
})

.controller('oqueCtrl', ['$scope', function($scope) {
  $scope.text =
    {
    	text1: 'A Educação Ambiental (EA) pode ser desenvolvida e vivenciada de maneiras diferentes, sobretudo nas escolas, onde o ambiente é propício para a aprendizagem, o conhecimento e a mudança de comportamento. Muitas vezes, a promoção da EA nas escolas é dificultada pela pouca instituicionalização da questão ambiental nos Projetos Políticos Pedagógicos – PPPs, currículos e outros documentos normativos das instituições; ou pelas limitações dos professores em desenvolver a temática ambiental a partir dos conteúdos disciplinares; ou pela carência de material didático; ou mesmo pela inadequação estrutural e ergonômica das escolas para o desenvolvimento de práticas educativas em EA, colaborando para que as instituições de ensino reproduzam um modelo de comportamento descomprometido com a sustentabilidade socioambiental.',
    	text2: 'O objetivo central do Projeto Escola Verde (PEV) é investigar estas dificuldades e promover ações no sentido de minimizar os problemas identificados, a partir da participação das comunidades escolares. Trata-se de uma Pesquisa Aplicada, do tipo Pesquisa-Ação, de caráter qualiquantitativo, que está sendo desenvolvida nas escolas de ensino fundamental, médio e superior da região do Vale do São Francisco. As atividades de pesquisa servem de embasamento e direcionamento das ações extensivas.',
    	text3: 'São utilizados Formulários aplicados junto aos gestores escolares, bem como Questionários, aplicados junto aos professores, a fim de identificar estas dificuldades. Além de Pesquisa Documental junto aos PPPs e outros documentos que normatizam o funcionamento das instituições, Observação do cotidiano escolar e Registro Fotográfico.',
    	text4: 'As ações consistem em realização de Seminários Temáticos Interdisciplinares e Oficinas, visando parte da capacitação dos professores para a promoção da EA nas atividades educativas cotidianas; implantação de Coleta Seletiva de lixo; arborização das escolas; estímulo na institucionalização da Educação Ambiental, como prática pedagógica interdisciplinar; além de elaboração de material didático para a EA, a partir da participação das comunidades escolares envolvidas no processo.'
    };
}])

.controller('meioambCtrl', ['$scope', function($scope) {
  $scope.text =
    {
    	text1: 'O Novo Dicionário da Língua Portuguesa Aurélio define meio como lugar onde se vive, com suas características e condicionamentos geofísicos; esfera social ou profissional onde se vive ou trabalha, e ambiente como o conjunto de condições naturais e de influências que atuam sobre os organismos vivos e os seres humanos.',
    	text2: 'Na legislação brasileira o conceito legal de meio ambiente encontra-se disposto no art. 3º, 1, da Lei nº. 6.938/81, dispões sobre a Política Nacional do Meio Ambiente, que diz que meio ambiente é “o conjunto de condições, leis, influências e interações de ordem física, química e biológica, que permite, abriga e rege a vida em todas as suas formas”.',
    	text3: 'Entretanto, podemos definir meio ambiente de forma mais simplista se observarmos como trabalha o funcionamento do nosso planeta, um sistema formado por elementos naturais e artificiais relacionados entre si e que são modificados pela ação humana. Trata-se do meio que condiciona a forma de vida da sociedade e que inclui valores naturais, sociais e culturais que existem num determinado local e momento. Os seres vivos, o solo, a água, o ar, os objetos físicos fabricados pelo homem e os elementos simbólicos (como as tradições, por exemplo) compõem o meio ambiente.'
    };
}])

.controller('educambCtrl', ['$scope', function($scope) {
  $scope.text =
    {
    	text1: 'Segundo Reigota (1998), a educação ambiental aponta para propostas pedagógicas centradas na conscientização, mudança de comportamento, desenvolvimento de competências, capacidade de avaliação e participação dos educandos.',
    	text2: 'Assim a educação ambiental deve ser acima de tudo um ato político voltado para a transformação social. O seu enfoque deve buscar uma perspectiva holística de ação, que relaciona o homem, a natureza, e o universo, tendo em conta que os recursos naturais se esgotam e que o principal responsável pela sua degradação é o homem (Jacobi, 2003).',
    	text3: 'O principal eixo de atuação da educação ambiental deve buscar, acima de tudo, a solidariedade, a igualdade e o respeito à diferença através de formas democráticas de atuação baseadas em práticas interativas e dialógicas. Isto se consubstancia no objetivo de criar novas atitudes e comportamentos diante do consumo na nossa sociedade e de estimular a mudança de valores individuais e coletivos (Jacobi, 1997).'
    };
}])

.controller('desesusCtrl', ['$scope', function($scope) {
  $scope.text =
    {
    	text1: 'O conceito de Desenvolvimento Sustentável surgiu em 1987 quando em assembleia coordenada por Gro Brundtland na comissão Mundial sobre o Meio Ambiente e Desenvolvimento da ONU, divulgou o relatório conhecido como Nosso Futuro Comum, onde trouxe que desenvolvimento sustentável é “um processo de mudança na qual a exploração dos recursos, o direcionamento dos investimentos, a orientação do desenvolvimento tecnológico e a mudança institucional estão em harmonia e reforçam o atual e futuro potencial para satisfazer as aspirações e necessidades humanas sem comprometer a habilidades das futuras gerações de atender suas próprias necessidades”.',
    	text2: 'Assim, o desenvolvimento sustentável deve satisfazer as necessidades básicas do ser humano, contemplando a solidariedade com as gerações futuras incluindo a participação da população envolvida em todo seu desenvolvimento, a preservação dos recursos naturais e do meio ambiente em geral, a elaboração de um sistema social garantindo emprego, segurança social e respeito a outras culturas e programas de educação. Ou seja, em linhas gerais o desenvolvimento sustentável é agregado por três pilares: o econômico, o social e o ambiental, pois, sem isso, não há como garantir a sustentabilidade do desenvolvimento.'
    };
}])

.controller('agradecimentosCtrl', ['$scope', function($scope) {
  $scope.text =
    {
    	text1: 'Este trabalho não poderia ter sido concretizado sem a colaboração de várias pessoas, sobretudo os alunos e professores integrantes do Projeto Escola Verde (PEV) e do Núcleo Temático de Educação Ambiental Interdisciplinar (NUTEAI), que deram um pouco de si para se pensar em como a Educação Ambiental pode traçar um caminho alternativo, percorrendo diferentes disciplinas, conhecimentos e práticas na busca de soluções para os problemas socioambientais, com a participação direta das comunidades.',
    	text2: 'Agradecimento especial aos parceiros que colaboraram direta e indiretamente com a realização deste produto. Ao Ministério da Educação, através do Programa de Extensão Universitária (PROEXT), pelo apoio nas ações do PEV;',
      text3:'À Universidade Federal do Vale do São Francisco (UNIVASF), através da Pró-Reitoria de Extensão (PROEX), da Pró-Reitoria de Ensino (PROEN), Pró-Reitoria de Planejamento e Desenvolvimento Institucional (PROPLADI), a Pró-Reitoria de Pesquisa e Pós-Graduação (PRPPG), Centro de Referência para Recuperação das Áreas Degradadas (CRAD) e ao Centro de Manejo da Fauna da Caatinga (CEMAFAUNA);',
      text4:'Às Universidades parceiras neste trabalho: Universidade de Pernambuco (UPE), Universidade do Estado da Bahia (UNEB), Instituto Federal do Sertão Pernambucano (IF-PE), Faculdades Montenegro (FAM) e Faculdade de Ciências Sociais Aplicadas de Petrolina (FACAPE);',
      text5:'Às Prefeituras de Petrolina-PE e Juazeiro-BA, através de suas Secretarias de Educação;',
      text6:'Ao Instituto Regional da Pequena Agropecuária Apropriada (IRPAA), à Empresa Brasileira de Pesquisa Agropecuária (EMBRAPA) e a Companhia Hidrelétrica do São Francisco (CHESF);',
      text7:'Aos professores, gestores, alunos e familiares, das escolas públicas, envolvidos com as atividades do Projeto Escola Verde, base fundamental para a realização desta obra;',
      text8:'Às Organizações Não-Governamentais (ONGs), empresas públicas e privadas que apoiam o PEV.'
    };
}])

.controller('legislacaoCtrl', ['$scope', function($scope) {
  $scope.texts = [
    {
    	header: 'LEI Nº 9.795/99',
    	text: 'LEI Nº 9.795/99 que institui a Educação Ambiental no Brasil – que é a base da resolução Nº 2, de 15 de junho de 2012, que estabelece as a Diretrizes Curriculares Nacionais para a Educação Ambiental – para que docentes possam aprimorar suas práticas tornando a Educação Ambiental interdisciplinar, em todas as séries e em todas as disciplinas, bem como em todos os níveis de ensino, desde a Educação Infantil ao Ensino Superior.',
    	path: 'http://www.escolaverde.org/pevmovel/Lei%209.795.pdf'
    },
    {
    	header: 'Programa de Prevenção de Riscos Ambientais',
    	text: 'Conjunto de ações visando a preservação da saúde e da integridade dos trabalhadores, através da antecipação, reconhecimento, avaliação e consequente controle da ocorrência de riscos ambientais existentes ou que venham a existir no ambiente de trabalho, tendo em consideração a proteção do meio ambiente e dos recursos naturais.',
    	path: 'http://www.escolaverde.org/pevmovel/Programa%20de%20Prevencao%20de%20Riscos%20Ambientais.pdf'
    },
    {
    	header: 'PCNs - Tema Transversal - Meio Ambiente',
    	text: 'Parâmetros Curriculares Nacionais que enfatizam a urgência da implantação de um trabalho de Educação Ambiental que contemple as questões da vida cotidiana do cidadão e discuta algumas visões polêmicas sobre essa temática.',
    	path: 'http://www.escolaverde.org/pevmovel/PCNs%20Tema%20Transversal%20Meio%20Ambiente.pdf'
    },
    {
    	header: 'Manual Escolas Sustentáveis',
    	text: 'Orientações operacionais para apoiar a implementação da Resolução CD/FNDE número 18, de 21 de maio de 2013, que destina recursos financeiros, nos moldes operacionais do PDDE, à escolas públicas municipais, estaduais e distritais que possuam alunos matriculados na educação básica, de acordo com dados extraídos do Censo Escolar do exercícios imediatamente anterior ao do repasse, a fim de favorecer a melhoria da qualidade de ensino e a promoção da sustentabilidade nas unidades escolares.',
    	path: 'http://www.escolaverde.org/pevmovel/Manual%20Escolas%20Sustentaveis.pdf'
    }
  ];
}])

.controller('cartilhasCtrl', ['$scope', function($scope) {
  $scope.texts = [
    {
    	header: 'Agenda Ambiental na Administração Pública',
    	text: 'A Agenda Ambiental na Administração Pública (A3P) foi criada pelo Ministério do Meio Ambiente em 1999 com o objetivo de reforçar e instigar a necessidade de uma gestão socioambiental por parte dos gestores públicos proporcionando o uso racional dos recursos naturais, seja na parte de investimentos, compras ou contratos.',
    	path: 'http://www.escolaverde.org/pevmovel/A3P.pdf'
    },
    {
    	header: 'Necessidade de Adequação Ambiental',
    	text: 'A preocupação com a adequação do ambiente é de fundamental importância, pois é na escola que as principais atividades humanas são desenvolvidas. Este local possui a características de abrigar uma grande quantidade de pessoas que buscam adquirir conhecimento e cultura.',
    	path: 'http://www.escolaverde.org/pevmovel/Necessidade%20de%20adequacao%20ambiental.pdf'
    },
    {
    	header: 'Agenda Ambiental na Administração Pública',
    	text: 'O Ministério do Meio Ambiente criou em 1999 o programa Agenda Ambiental na Administração Pública (A3P), que pode ser entendida como uma ação que busca a construção de uma nova cultura institucional nos órgãos e entidades públicos. Logo em 2002 foi reconhecida pela UNESCO (Organização para a Educação, a Ciência e a Cultura das Nações Unidas) devido ao grande valor do trabalho desempenhado e dos resultados positivos obtidos ao longo do seu desenvolvimento, ganhando o prêmio “O melhor dos exemplos” na categoria Meio Ambiente.',
    	path: 'http://www.escolaverde.org/pevmovel/A3P%202.pdf'
    },
    {
    	header: 'PPP e Legislação Ambiental',
    	text: 'O que é o Projeto Político Pedagógico? Segundo Silva (2003) o projeto político-pedagógico (PPP) é conceituado como: “Um documento que pressupõe relações de interdependência e reciprocidade entre dois polos, elaborado coletivamente pelos sujeitos da escola e que aglutina os pensamentos políticos e filosóficos em que a comunidade acredita.',
    	path: 'http://www.escolaverde.org/pevmovel/PPP%20e%20Legislacao%20Ambiental.pdf'
    },
    {
    	header: 'COM-VIDAS',
    	text: 'O que é a COM-VIDAS (Comissão de Meio Ambiente e Qualidade de Vida na Escola) é uma forma de organização na escola, com círculos de atividades e cultura, na qual os alunos são os principais articuladores.',
    	path: 'http://www.escolaverde.org/pevmovel/COM-VIDAS.pdf'
    },
    {
    	header: 'Associativismo de Equipes - Interdisciplinaridade',
    	text: 'O avanço tecnológico trazido pelo século XX, onde as informações se processam de forma cada vez mais rápida, sinaliza para uma pluralidade de olhares onde o conhecimento se complete, congregando num mesmo foco, diferentes formas de ação que convergem para uma efetiva atuação do sujeito social no mundo globalizado.',
    	path: 'http://www.escolaverde.org/pevmovel/Associativismo%20de%20equipes-Interdisciplinaridade.pdf'
    }
  ];
}])

.controller('SwipeCtrl', function ($scope, $ionicTabsDelegate) {

    $scope.goForward = function () {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1) {
            $ionicTabsDelegate.select(selected + 1);
        }
    };

    $scope.goBack = function () {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1 && selected != 0) {
            $ionicTabsDelegate.select(selected - 1);
        }
    };
})



.controller('HomeTabCtrl', function($scope) {

});
