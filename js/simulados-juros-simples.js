// Banco de questões — Juros Simples (Unidade I).
// Estilo (fechadas de A-E + abertas com itens a/b/c) inspirado na Prova 1 da disciplina,
// mas com enunciados e números próprios — não são as questões da prova real.
// "dicas" são reveladas uma de cada vez, antes da resposta/resolução completa.
var QUESTOES_JUROS_SIMPLES = [

  // --- Fechadas: montante simples ---
  { enunciado: "Um capital de R$ 6.000 é aplicado a juros simples, à taxa de 2,5% a.m., durante 10 meses. O <strong>montante</strong> da aplicação é de:<br>" +
      "(A) R$ 1.500,00 &nbsp; (B) R$ 6.150,00 &nbsp; (C) R$ 7.500,00 &nbsp; (D) R$ 7.680,50 &nbsp; (E) R$ 9.000,00",
    dicas: [
      "Você precisa da fórmula do montante em juros simples — ela relaciona capital, taxa e prazo.",
      "M = C(1 + i·n). Substitua C = 6000, i = 0,025 e n = 10."
    ],
    resposta: "(C) R$ 7.500,00",
    resolucao: "J = 6000 · 0,025 · 10 = 1.500; M = 6000 + 1.500 = 7.500. (A) é só o juro; (B) aplica a taxa uma única vez (6000×1,025); (D) usa juros compostos (6000×1,025¹⁰)." },

  { enunciado: "Um capital de R$ 10.000 é aplicado a juros simples, à taxa de 1% a.m., durante 15 meses. O <strong>montante</strong> da aplicação é de:<br>" +
      "(A) R$ 1.500,00 &nbsp; (B) R$ 10.100,00 &nbsp; (C) R$ 11.500,00 &nbsp; (D) R$ 11.609,69 &nbsp; (E) R$ 13.000,00",
    dicas: [
      "Use a fórmula do montante em juros simples.",
      "M = C(1 + i·n), com C = 10000, i = 0,01 e n = 15."
    ],
    resposta: "(C) R$ 11.500,00",
    resolucao: "J = 10000 · 0,01 · 15 = 1.500; M = 10000 + 1.500 = 11.500. (B) aplica a taxa uma única vez; (D) usa juros compostos (10000×1,01¹⁵)." },

  { enunciado: "Um capital de R$ 4.000 é aplicado a juros simples, à taxa de 4% a.m., durante 6 meses. O <strong>montante</strong> da aplicação é de:<br>" +
      "(A) R$ 960,00 &nbsp; (B) R$ 4.160,00 &nbsp; (C) R$ 4.960,00 &nbsp; (D) R$ 5.061,28 &nbsp; (E) R$ 5.600,00",
    dicas: [
      "Use a fórmula do montante em juros simples.",
      "M = C(1 + i·n), com C = 4000, i = 0,04 e n = 6."
    ],
    resposta: "(C) R$ 4.960,00",
    resolucao: "J = 4000 · 0,04 · 6 = 960; M = 4000 + 960 = 4.960. (A) é só o juro; (D) usa juros compostos (4000×1,04⁶)." },

  // --- Fechadas: taxa média ---
  { enunciado: "Uma empresa aplicou R$ 6.000 a 2% a.m. e R$ 4.000 a 5% a.m., ambos pelo mesmo prazo. A <strong>taxa média</strong> dessas aplicações é de:<br>" +
      "(A) 2,0% a.m. &nbsp; (B) 3,2% a.m. &nbsp; (C) 3,5% a.m. &nbsp; (D) 5,0% a.m. &nbsp; (E) 7,0% a.m.",
    dicas: [
      "Taxa média não é a média aritmética simples — ela é ponderada pelo capital de cada aplicação.",
      "i_m = (C1·i1 + C2·i2) / (C1+C2). Substitua C1=6000, i1=0,02, C2=4000, i2=0,05."
    ],
    resposta: "(B) 3,2% a.m.",
    resolucao: "i_m = (6000·0,02 + 4000·0,05) / 10000 = (120+200)/10000 = 3,2% a.m. (C) é a média aritmética simples (2%+5%)/2, incorreta porque os capitais são diferentes." },

  { enunciado: "Uma empresa aplicou R$ 3.000 a 3% a.m. e R$ 7.000 a 6% a.m., ambos pelo mesmo prazo. A <strong>taxa média</strong> dessas aplicações é de:<br>" +
      "(A) 3,0% a.m. &nbsp; (B) 4,5% a.m. &nbsp; (C) 5,1% a.m. &nbsp; (D) 6,0% a.m. &nbsp; (E) 9,0% a.m.",
    dicas: [
      "Lembre que a taxa média pondera pelos capitais, não é uma média simples.",
      "i_m = (3000·0,03 + 7000·0,06) / 10000."
    ],
    resposta: "(C) 5,1% a.m.",
    resolucao: "i_m = (3000·0,03 + 7000·0,06) / 10000 = (90+420)/10000 = 5,1% a.m. (B) é a média aritmética simples, incorreta porque os capitais são diferentes." },

  { enunciado: "Uma empresa aplicou R$ 12.000 a 1,5% a.m. e R$ 8.000 a 4% a.m., ambos pelo mesmo prazo. A <strong>taxa média</strong> dessas aplicações é de:<br>" +
      "(A) 1,5% a.m. &nbsp; (B) 2,5% a.m. &nbsp; (C) 2,75% a.m. &nbsp; (D) 4,0% a.m. &nbsp; (E) 5,5% a.m.",
    dicas: [
      "A taxa média é ponderada pelos capitais, não é a média aritmética simples.",
      "i_m = (12000·0,015 + 8000·0,04) / 20000."
    ],
    resposta: "(B) 2,5% a.m.",
    resolucao: "i_m = (12000·0,015 + 8000·0,04) / 20000 = (180+320)/20000 = 2,5% a.m. (C) é a média aritmética simples, incorreta porque os capitais são diferentes." },

  // --- Fechadas: desconto comercial (valor líquido) ---
  { enunciado: "Um título de R$ 12.000 é descontado 5 meses antes do vencimento, em uma operação de <strong>desconto comercial</strong> (por fora), à taxa de 3% a.m. O <strong>valor líquido</strong> recebido é de:<br>" +
      "(A) R$ 1.800,00 &nbsp; (B) R$ 10.200,00 &nbsp; (C) R$ 10.434,78 &nbsp; (D) R$ 12.360,00 &nbsp; (E) R$ 13.800,00",
    dicas: [
      "No desconto comercial, o percentual incide sobre o valor nominal N, não sobre o valor atual.",
      "Calcule D_c = N·i·n e depois A_c = N − D_c, com N=12000, i=0,03, n=5."
    ],
    resposta: "(B) R$ 10.200,00",
    resolucao: "i·n = 0,15; D_c = 12000×0,15 = 1.800; A_c = 12000−1.800 = 10.200. (A) é o desconto, não o valor líquido; (C) é o valor do desconto racional; (D) aplica 3% uma única vez." },

  { enunciado: "Um título de R$ 25.000 é descontado 6 meses antes do vencimento, em uma operação de <strong>desconto comercial</strong> (por fora), à taxa de 2% a.m. O <strong>valor líquido</strong> recebido é de:<br>" +
      "(A) R$ 3.000,00 &nbsp; (B) R$ 22.000,00 &nbsp; (C) R$ 22.321,43 &nbsp; (D) R$ 25.500,00 &nbsp; (E) R$ 28.000,00",
    dicas: [
      "O percentual do desconto comercial incide sobre N.",
      "D_c = N·i·n; A_c = N − D_c, com N=25000, i=0,02, n=6."
    ],
    resposta: "(B) R$ 22.000,00",
    resolucao: "i·n = 0,12; D_c = 25000×0,12 = 3.000; A_c = 25000−3.000 = 22.000. (C) é o valor do desconto racional; (D) aplica 2% uma única vez." },

  { enunciado: "Um título de R$ 9.000 é descontado 3 meses antes do vencimento, em uma operação de <strong>desconto comercial</strong> (por fora), à taxa de 4% a.m. O <strong>valor líquido</strong> recebido é de:<br>" +
      "(A) R$ 1.080,00 &nbsp; (B) R$ 7.920,00 &nbsp; (C) R$ 8.035,71 &nbsp; (D) R$ 9.360,00 &nbsp; (E) R$ 10.080,00",
    dicas: [
      "O percentual do desconto comercial incide sobre N.",
      "D_c = N·i·n; A_c = N − D_c, com N=9000, i=0,04, n=3."
    ],
    resposta: "(B) R$ 7.920,00",
    resolucao: "i·n = 0,12; D_c = 9000×0,12 = 1.080; A_c = 9000−1.080 = 7.920. (C) é o valor do desconto racional; (D) aplica 4% uma única vez." },

  // --- Fechadas: conceituais sobre desconto ---
  { enunciado: "Sobre descontos simples, com a mesma taxa e o mesmo prazo, assinale a alternativa <strong>correta</strong>:<br>" +
      "(A) No desconto racional, o percentual incide sobre o valor nominal.<br>" +
      "(B) Os dois descontos sempre resultam no mesmo valor atual.<br>" +
      "(C) No desconto comercial, o percentual incide sobre o valor atual.<br>" +
      "(D) A taxa efetiva do desconto comercial é maior que a taxa de desconto anunciada.<br>" +
      "(E) O desconto racional é sempre maior que o desconto comercial.",
    dicas: [
      "Revise sobre qual valor cada tipo de desconto aplica o percentual: comercial sobre N, racional sobre A.",
      "Pense na taxa efetiva do desconto comercial: ela é D_c/A_c — compare com a taxa i·n anunciada."
    ],
    resposta: "(D)",
    resolucao: "A taxa efetiva é D_c/A_c = i·n/(1−i·n), que é sempre maior que i·n. (A) e (C) trocam as bases: o comercial incide sobre N e o racional sobre A. (E) é o inverso do correto: D_c > D_r." },

  { enunciado: "Sobre a relação entre o desconto comercial (D_c) e o desconto racional (D_r), para a mesma taxa i e o mesmo prazo n, assinale a alternativa <strong>correta</strong>:<br>" +
      "(A) D_c = D_r (são sempre iguais)<br>" +
      "(B) D_c = D_r · (1 + i·n)<br>" +
      "(C) D_r = D_c · (1 + i·n)<br>" +
      "(D) D_c é sempre menor que D_r<br>" +
      "(E) A relação entre eles depende do valor nominal N",
    dicas: [
      "Escreva as duas fórmulas: D_c = N·i·n e D_r = N·i·n/(1+i·n).",
      "Divida D_c por D_r e simplifique — o que sobra?"
    ],
    resposta: "(B) D_c = D_r · (1 + i·n)",
    resolucao: "D_c = N·i·n e D_r = N·i·n/(1+i·n), logo D_c = D_r·(1+i·n). Como (1+i·n) > 1, isso confirma que D_c > D_r sempre, independente de N." },

  // --- Fechada: achando o prazo ---
  { enunciado: "Um capital de R$ 5.000, aplicado a juros simples de 2% a.m., gerou R$ 1.000 de juro. O <strong>prazo</strong> da aplicação foi de:<br>" +
      "(A) 5 meses &nbsp; (B) 8 meses &nbsp; (C) 10 meses &nbsp; (D) 20 meses &nbsp; (E) 1.000 meses",
    dicas: [
      "Em juros simples, J = C·i·n — isole o n.",
      "n = J/(C·i). Substitua J=1000, C=5000, i=0,02."
    ],
    resposta: "(C) 10 meses",
    resolucao: "n = J/(C·i) = 1000/(5000×0,02) = 1000/100 = 10." },

  // --- Abertas: juros simples e taxas proporcionais ---
  { enunciado: "Uma empresa aplicou um capital de R$ 7.000 em juros simples, que rendeu R$ 840 em 6 meses.<br>" +
      "(a) Qual é a taxa mensal da aplicação?<br>" +
      "(b) Qual é a taxa anual proporcional a essa taxa mensal?<br>" +
      "(c) Se um capital de R$ 12.000 fosse aplicado à mesma taxa mensal por 4 meses, qual seria o juro e o montante?",
    dicas: [
      "Para achar a taxa, isole i na fórmula do juro simples: i = J/(C·n).",
      "Depois, para a taxa anual proporcional, multiplique por 12. Por fim, aplique a mesma taxa na nova situação (C=12000, n=4)."
    ],
    resposta: "(a) i = 2% a.m.; (b) 24% a.a.; (c) J = R$ 960,00, M = R$ 12.960,00",
    resolucao: "(a) i = J/(C·n) = 840/(7000×6) = 0,02 = 2% a.m. (b) i_ano = 2%×12 = 24%. (c) J = 12000×0,02×4 = 960; M = 12000+960 = 12.960." },

  { enunciado: "Uma empresa aplicou um capital de R$ 5.000 em juros simples, que rendeu R$ 600 em 4 meses.<br>" +
      "(a) Qual é a taxa mensal da aplicação?<br>" +
      "(b) Qual é a taxa anual proporcional a essa taxa mensal?<br>" +
      "(c) Se um capital de R$ 9.000 fosse aplicado à mesma taxa mensal por 7 meses, qual seria o juro e o montante?",
    dicas: [
      "Para achar a taxa, isole i na fórmula do juro simples: i = J/(C·n).",
      "Depois multiplique por 12 pra taxa anual, e aplique a taxa na nova situação (C=9000, n=7)."
    ],
    resposta: "(a) i = 3% a.m.; (b) 36% a.a.; (c) J = R$ 1.890,00, M = R$ 10.890,00",
    resolucao: "(a) i = J/(C·n) = 600/(5000×4) = 0,03 = 3% a.m. (b) i_ano = 3%×12 = 36%. (c) J = 9000×0,03×7 = 1.890; M = 9000+1.890 = 10.890." },

  // --- Abertas: comparação de descontos ---
  { enunciado: "Uma duplicata de R$ 30.000 será descontada 4 meses antes do vencimento, à taxa de 3% a.m.<br>" +
      "(a) Calcule o desconto e o valor líquido no desconto comercial.<br>" +
      "(b) Calcule o desconto e o valor atual no desconto racional.<br>" +
      "(c) Explique, com base na base de incidência do percentual, por que um desconto resultou maior que o outro.<br>" +
      "(d) Calcule a taxa efetiva mensal da operação de desconto comercial.",
    dicas: [
      "Calcule primeiro i·n = 0,12. Depois aplique a fórmula de cada tipo de desconto separadamente (comercial incide sobre N, racional sobre A).",
      "Para a taxa efetiva, lembre: i_ef = D_c/A_c (não D_c/N) — e depois divida pelo número de meses pra achar a taxa mensal."
    ],
    resposta: "(a) D_c = R$ 3.600,00, A_c = R$ 26.400,00; (b) D_r ≈ R$ 3.214,29, A_r ≈ R$ 26.785,71; (d) i_ef ≈ 3,41% a.m.",
    resolucao: "i·n = 0,12. (a) D_c = 30000×0,12 = 3.600; A_c = 30000−3.600 = 26.400. (b) A_r = 30000/1,12 ≈ 26.785,71; D_r ≈ 3.214,29. (c) No comercial os 12% incidem sobre N (30.000); no racional, sobre A (26.785,71) — base maior gera desconto maior. (d) i_ef = D_c/A_c = 3600/26400 ≈ 13,64% em 4 meses, ou ≈ 3,41% a.m. (contra 3% anunciados)." },

  { enunciado: "Uma duplicata de R$ 16.000 será descontada 3 meses antes do vencimento, à taxa de 5% a.m.<br>" +
      "(a) Calcule o desconto e o valor líquido no desconto comercial.<br>" +
      "(b) Calcule o desconto e o valor atual no desconto racional.<br>" +
      "(c) Explique, com base na base de incidência do percentual, por que um desconto resultou maior que o outro.<br>" +
      "(d) Calcule a taxa efetiva mensal da operação de desconto comercial.",
    dicas: [
      "Calcule primeiro i·n = 0,15. Depois aplique a fórmula de cada tipo de desconto separadamente.",
      "Para a taxa efetiva, i_ef = D_c/A_c, depois divida pelo número de meses."
    ],
    resposta: "(a) D_c = R$ 2.400,00, A_c = R$ 13.600,00; (b) D_r ≈ R$ 2.086,96, A_r ≈ R$ 13.913,04; (d) i_ef ≈ 5,88% a.m.",
    resolucao: "i·n = 0,15. (a) D_c = 16000×0,15 = 2.400; A_c = 16000−2.400 = 13.600. (b) A_r = 16000/1,15 ≈ 13.913,04; D_r ≈ 2.086,96. (c) No comercial os 15% incidem sobre N (16.000); no racional, sobre A (13.913,04) — base maior gera desconto maior. (d) i_ef = D_c/A_c = 2400/13600 ≈ 17,65% em 3 meses, ou ≈ 5,88% a.m. (contra 5% anunciados)." },

  // --- Abertas: prazo médio ---
  { enunciado: "Uma empresa tem três títulos a receber: R$ 3.000 em 15 dias, R$ 5.000 em 40 dias e R$ 6.000 em 70 dias.<br>" +
      "(a) Calcule o prazo médio para negociar os três títulos em conjunto.<br>" +
      "(b) Calcule também a média aritmética simples dos prazos e explique por que ela não representa corretamente a situação.",
    dicas: [
      "O prazo médio pondera cada prazo pelo valor do título correspondente — não é a média simples dos prazos.",
      "n_m = Σ(C·n)/ΣC. Depois calcule a média aritmética simples dos três prazos pra comparar."
    ],
    resposta: "(a) n_m = 47,5 dias; (b) média simples ≈ 41,67 dias",
    resolucao: "(a) n_m = (3000·15 + 5000·40 + 6000·70)/14000 = 665000/14000 = 47,5 dias. (b) Média simples = (15+40+70)/3 ≈ 41,67 dias — trata os três títulos com o mesmo peso, mas o de R$ 6.000 (o maior valor) vence mais tarde e deve pesar mais, puxando o prazo médio pra cima." },

  { enunciado: "Uma empresa tem três títulos a receber: R$ 2.000 em 10 dias, R$ 4.000 em 25 dias e R$ 9.000 em 55 dias.<br>" +
      "(a) Calcule o prazo médio para negociar os três títulos em conjunto.<br>" +
      "(b) Calcule também a média aritmética simples dos prazos e explique por que ela não representa corretamente a situação.",
    dicas: [
      "O prazo médio pondera pelo valor de cada título, não é a média simples dos prazos.",
      "n_m = Σ(C·n)/ΣC. Depois compare com a média aritmética simples dos três prazos."
    ],
    resposta: "(a) n_m = 41 dias; (b) média simples = 30 dias",
    resolucao: "(a) n_m = (2000·10 + 4000·25 + 9000·55)/15000 = 615000/15000 = 41 dias. (b) Média simples = (10+25+55)/3 = 30 dias — trata os três títulos com o mesmo peso, mas o de R$ 9.000 (60% do valor total) vence mais tarde e deve pesar mais, puxando o prazo médio pra cima." }
];
