// Banco de questões — Juros Compostos.
// Mesmo estilo do banco de Juros Simples (fechadas A-E + abertas a/b/c), com
// enunciados e números próprios. "dicas" são reveladas uma de cada vez,
// antes da resposta/resolução completa.
var QUESTOES_JUROS_COMPOSTOS = [

  // --- Fechadas: montante composto ---
  { enunciado: "Um capital de R$ 5.000 é aplicado a juros compostos de 2% a.m., durante 6 meses. O <strong>montante</strong> da aplicação é de:<br>" +
      "(A) R$ 5.100,00 &nbsp; (B) R$ 5.600,00 &nbsp; (C) R$ 5.630,81 &nbsp; (D) R$ 630,81 &nbsp; (E) R$ 6.000,00",
    dicas: [
      "Em juros compostos, use M = C(1+i)ⁿ — não confunda com a fórmula de juros simples.",
      "Calcule (1,02)⁶ primeiro, depois multiplique por 5.000."
    ],
    resposta: "(C) R$ 5.630,81",
    resolucao: "M = C(1+i)ⁿ = 5000×(1,02)⁶ ≈ 5.630,81. (A) aplica a taxa uma única vez; (B) usa a fórmula de juros simples (5000×1,12); (D) é só o juro." },

  { enunciado: "Um capital de R$ 8.000 é aplicado a juros compostos de 1,5% a.m., durante 8 meses. O <strong>montante</strong> da aplicação é de:<br>" +
      "(A) R$ 8.120,00 &nbsp; (B) R$ 8.960,00 &nbsp; (C) R$ 9.011,94 &nbsp; (D) R$ 1.011,94 &nbsp; (E) R$ 9.600,00",
    dicas: [
      "Use M = C(1+i)ⁿ.",
      "Calcule (1,015)⁸ primeiro, depois multiplique por 8.000."
    ],
    resposta: "(C) R$ 9.011,94",
    resolucao: "M = 8000×(1,015)⁸ ≈ 9.011,94. (B) usa a fórmula de juros simples (8000×1,12); (A) aplica a taxa uma única vez." },

  { enunciado: "Um capital de R$ 3.000 é aplicado a juros compostos de 3% a.m., durante 5 meses. O <strong>montante</strong> da aplicação é de:<br>" +
      "(A) R$ 3.090,00 &nbsp; (B) R$ 3.450,00 &nbsp; (C) R$ 3.477,82 &nbsp; (D) R$ 477,82 &nbsp; (E) R$ 3.600,00",
    dicas: [
      "Use M = C(1+i)ⁿ.",
      "Calcule (1,03)⁵ primeiro, depois multiplique por 3.000."
    ],
    resposta: "(C) R$ 3.477,82",
    resolucao: "M = 3000×(1,03)⁵ ≈ 3.477,82. (B) usa a fórmula de juros simples; (A) aplica a taxa uma única vez." },

  // --- Fechadas: valor presente composto ---
  { enunciado: "Quanto se deve investir hoje, a 2% a.m. (juros compostos), para se ter R$ 8.000 em 6 meses?<br>" +
      "(A) R$ 7.103,15 &nbsp; (B) R$ 7.142,86 &nbsp; (C) R$ 7.843,14 &nbsp; (D) R$ 9.009,30 &nbsp; (E) R$ 7.000,00",
    dicas: [
      "Valor presente em juros compostos é o caminho inverso do montante: C = M/(1+i)ⁿ.",
      "Calcule (1,02)⁶ primeiro, depois divida 8.000 por esse valor."
    ],
    resposta: "(A) R$ 7.103,15",
    resolucao: "C = M/(1+i)ⁿ = 8000/(1,02)⁶ ≈ 7.103,15. (B) usa a fórmula de valor presente de juros simples; (D) multiplica em vez de dividir." },

  { enunciado: "Quanto se deve investir hoje, a 1% a.m. (juros compostos), para se ter R$ 12.000 em 10 meses?<br>" +
      "(A) R$ 10.862,78 &nbsp; (B) R$ 10.909,09 &nbsp; (C) R$ 11.881,19 &nbsp; (D) R$ 13.255,46 &nbsp; (E) R$ 11.000,00",
    dicas: [
      "C = M/(1+i)ⁿ.",
      "Calcule (1,01)¹⁰ primeiro, depois divida 12.000 por esse valor."
    ],
    resposta: "(A) R$ 10.862,78",
    resolucao: "C = M/(1+i)ⁿ = 12000/(1,01)¹⁰ ≈ 10.862,78. (B) usa a fórmula de juros simples; (D) multiplica em vez de dividir." },

  // --- Fechadas: achando a taxa ---
  { enunciado: "Um capital de R$ 2.000 cresceu para R$ 3.000 em 5 meses, a juros compostos. A <strong>taxa mensal</strong> dessa aplicação foi de:<br>" +
      "(A) 8,45% a.m. &nbsp; (B) 10,00% a.m. &nbsp; (C) 108,45% a.m. &nbsp; (D) 50,00% a.m. &nbsp; (E) 30,00% a.m.",
    dicas: [
      "Aqui o prazo n já é conhecido e a taxa i é a incógnita na base da potência — isso pede uma raiz, não logaritmo.",
      "i = (M/C)^(1/n) − 1. Substitua M=3000, C=2000, n=5."
    ],
    resposta: "(A) 8,45% a.m.",
    resolucao: "i = (M/C)^(1/n) − 1 = (3000/2000)^(1/5) − 1 ≈ 0,0845. (B) divide o crescimento total (50%) por n, errado em regime composto; (C) esquece de subtrair 1; (D) é só o crescimento total, sem dividir pelo prazo." },

  { enunciado: "Um capital de R$ 6.000 cresceu para R$ 9.000 em 4 meses, a juros compostos. A <strong>taxa mensal</strong> dessa aplicação foi de:<br>" +
      "(A) 10,67% a.m. &nbsp; (B) 12,50% a.m. &nbsp; (C) 110,67% a.m. &nbsp; (D) 50,00% a.m. &nbsp; (E) 25,00% a.m.",
    dicas: [
      "A incógnita está na base — use raiz, não logaritmo.",
      "i = (9000/6000)^(1/4) − 1."
    ],
    resposta: "(A) 10,67% a.m.",
    resolucao: "i = (9000/6000)^(1/4) − 1 ≈ 0,1067. (B) divide o crescimento total (50%) por n; (C) esquece de subtrair 1." },

  // --- Fechadas: achando o prazo ---
  { enunciado: "Um capital de R$ 1.000, a juros compostos de 2% a.m., dobra em aproximadamente:<br>" +
      "(A) 2 meses &nbsp; (B) 17,5 meses &nbsp; (C) 35 meses &nbsp; (D) 50 meses &nbsp; (E) 70 meses",
    dicas: [
      "Aqui a taxa i já é conhecida e o prazo n é a incógnita no expoente — isso pede logaritmo.",
      "n = log(M/C) / log(1+i), com M/C = 2 (dobrar) e i = 0,02."
    ],
    resposta: "(C) 35 meses",
    resolucao: "n = log(2)/log(1,02) ≈ 35. (D) divide 100%/2% de forma linear, que só valeria em juros simples." },

  { enunciado: "Um capital de R$ 1.000, a juros compostos de 2,5% a.m., triplica em aproximadamente:<br>" +
      "(A) 3 meses &nbsp; (B) 22,25 meses &nbsp; (C) 44,5 meses &nbsp; (D) 66,75 meses &nbsp; (E) 80 meses",
    dicas: [
      "A incógnita está no expoente — use logaritmo.",
      "n = log(3) / log(1,025), já que triplicar significa M/C = 3."
    ],
    resposta: "(C) 44,5 meses",
    resolucao: "n = log(3)/log(1,025) ≈ 44,5. (E) divide 200%/2,5% de forma linear, que só valeria em juros simples." },

  // --- Fechada: taxas proporcionais x compostas ---
  { enunciado: "A uma taxa de 1% a.m., a taxa <strong>efetiva anual</strong> (juros compostos) é de aproximadamente:<br>" +
      "(A) 12,00% a.a. &nbsp; (B) 12,68% a.a. &nbsp; (C) 1,00% a.a. &nbsp; (D) 132,00% a.a. &nbsp; (E) 24,00% a.a.",
    dicas: [
      "A taxa proporcional (multiplicar por 12) só vale em juros simples — em compostos, capitalize a taxa mensal 12 vezes.",
      "i_efetiva = (1+i_mensal)¹² − 1."
    ],
    resposta: "(B) 12,68% a.a.",
    resolucao: "i_efetiva = (1,01)¹² − 1 ≈ 12,68%. (A) é a taxa proporcional, que só vale no regime simples." },

  // --- Fechada: conceitual ---
  { enunciado: "Para a mesma taxa i, o mesmo capital C e um prazo n > 1 período, assinale a alternativa <strong>correta</strong>:<br>" +
      "(A) O montante composto é sempre menor que o montante simples.<br>" +
      "(B) Os dois regimes sempre resultam no mesmo montante.<br>" +
      "(C) O montante composto é sempre maior que o montante simples.<br>" +
      "(D) A diferença entre os dois regimes é constante, independente de n.<br>" +
      "(E) O montante simples cresce exponencialmente e o composto, linearmente.",
    dicas: [
      "Compare as duas fórmulas: M_simples = C(1+i·n) e M_composto = C(1+i)ⁿ.",
      "Teste com um exemplo pequeno, como n=2: (1+i)² = 1+2i+i² — o termo i² extra é sempre positivo."
    ],
    resposta: "(C)",
    resolucao: "Para n > 1, (1+i)ⁿ > (1+i·n) — o regime composto sempre supera o simples, e a diferença cresce com n (não é constante, eliminando a D)." },

  // --- Abertas ---
  { enunciado: "Um capital de R$ 4.000 é aplicado a juros compostos de 2,5% a.m.<br>" +
      "(a) Qual o montante após 8 meses?<br>" +
      "(b) Quanto seria necessário investir hoje, à mesma taxa, para se ter R$ 10.000 em 12 meses?",
    dicas: [
      "Resolva as duas partes separadamente: (a) é um montante direto, (b) é um valor presente.",
      "Para (a), use M=C(1+i)ⁿ com C=4000, n=8. Para (b), use C=M/(1+i)ⁿ com M=10000, n=12."
    ],
    resposta: "(a) M ≈ R$ 4.873,62; (b) C ≈ R$ 7.435,66",
    resolucao: "(a) M = 4000×(1,025)⁸ ≈ 4.873,62. (b) C = 10000/(1,025)¹² ≈ 7.435,66." },

  { enunciado: "Um capital de R$ 3.000 cresceu para R$ 4.500 em 6 meses, a juros compostos.<br>" +
      "(a) Qual a taxa mensal composta dessa aplicação?<br>" +
      "(b) Mantendo essa taxa, em quantos meses esse mesmo capital dobraria?",
    dicas: [
      "Para (a), a incógnita é a taxa (está na base) — use raiz.",
      "Para (b), use a taxa que você achou em (a) e aplique logaritmo, já que agora o prazo é a incógnita (M/C = 2)."
    ],
    resposta: "(a) i ≈ 6,99% a.m.; (b) n ≈ 10,26 meses",
    resolucao: "(a) i = (4500/3000)^(1/6) − 1 ≈ 0,0699. (b) n = log(2)/log(1,0699) ≈ 10,26." },

  { enunciado: "A uma taxa de 1,5% a.m., calcule:<br>" +
      "(a) a taxa anual proporcional (regime simples);<br>" +
      "(b) a taxa anual efetiva (juros compostos);<br>" +
      "(c) explique por que as duas são diferentes.",
    dicas: [
      "(a) é só multiplicar por 12 — taxa proporcional, regime simples.",
      "(b) é elevar (1+i) à 12ª potência e subtrair 1 — taxa efetiva, regime composto. Compare os dois resultados pra responder (c)."
    ],
    resposta: "(a) 18,00% a.a.; (b) ≈ 19,56% a.a.",
    resolucao: "(a) 1,5%×12 = 18%. (b) (1,015)¹² − 1 ≈ 19,56%. (c) Em regime composto, os juros de cada mês incidem também sobre os juros acumulados — uma PG de razão (1+i), não uma soma — por isso o crescimento supera a taxa simplesmente multiplicada por 12." },

  { enunciado: "O saldo de uma aplicação de R$ 2.000 a juros compostos de 4% a.m. forma uma progressão geométrica.<br>" +
      "(a) Qual a razão dessa PG?<br>" +
      "(b) Escreva os 4 primeiros termos (meses 0 a 3).<br>" +
      "(c) Qual o saldo no mês 5, usando a fórmula do termo geral?",
    dicas: [
      "A razão da PG é exatamente (1+i).",
      "Para os termos, multiplique repetidamente pela razão; para o mês 5, use M = C·qⁿ diretamente (sem repetir a multiplicação 5 vezes)."
    ],
    resposta: "(a) q = 1,04; (b) 2.000,00 / 2.080,00 / 2.163,20 / 2.249,73; (c) M ≈ R$ 2.433,31",
    resolucao: "(a) q = (1+i) = 1,04. (b) 2000; 2000×1,04=2080; 2080×1,04=2163,20; 2163,20×1,04≈2249,73. (c) M = 2000×(1,04)⁵ ≈ 2.433,31." }
];
