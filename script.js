document.addEventListener("DOMContentLoaded", () => {
    const grauSelecionado = localStorage.getItem("grauSelecionado"); // Recupera o grau do localStorage
    const tituloGrau = document.getElementById("grau");
    const formula = document.getElementById("formula");
    const coeficientesContainer = document.getElementById("coeficientes-container");
    const formulaSubstituida = document.getElementById("formula-substituida");

    if (!grauSelecionado) {
        alert("Nenhum grau foi selecionado. Retornando à página anterior.");
        window.location.href = "regressao.html";
        return;
    }

    // Coeficientes para cada grau de polinômio
    const coeficientes = {
        1: { formula: "f(sales) = a × TV + b", valores: { A: 0.0555, B: 6.9748 }, substituida: "f(sales) = 0.0555 × TV + 6.9748" },

        2: { 
            formula: "f(sales) = a × TV + b × Radio + c × TV² + d × Radio² + intercept", 
            valores: { 
                A: 0.0862, 
                B: 0.0175, 
                C: -0.0001, 
                D: 0.002, 
                Intercept: 3.7413 
            }, 
            substituida: "f(sales) = 0.0862 × TV + 0.0175 × Radio - 0.0001 × TV² + 0.002 × Radio² + 3.7413"
        },

        3: { 
            formula: "f(sales) = a × TV + b × Radio + c × TV² + d × Radio² + e × TV³ + f × Radio³ + intercept", 
            valores: { 
                A: 0.099, 
                B: 0.1726, 
                C: -0.0002, 
                D: -0.006, 
                E: 2.68E-07, 
                F: 0.0001, 
                Intercept: 2.8782 
            }, 
            substituida: "f(sales) = 0.099 × TV + 0.1726 × Radio - 0.0002 × TV² - 0.006 × Radio² + 2.68E-07 × TV³ + 0.0001 × Radio³ + 2.8782"
        },

    };

    const grauAtual = coeficientes[grauSelecionado];

    if (grauAtual) {
        // Atualiza os elementos na página
        tituloGrau.textContent = grauSelecionado;
        formula.textContent = grauAtual.formula;

        // Adiciona os valores dos coeficientes
        coeficientesContainer.innerHTML = ""; // Limpa os coeficientes anteriores
        Object.keys(grauAtual.valores).forEach((key) => {
            const coefDiv = document.createElement("div");
            coefDiv.classList.add("valor-coeficiente");
            coefDiv.innerHTML = `<span>${key}</span><p>${grauAtual.valores[key]}</p>`;
            coeficientesContainer.appendChild(coefDiv);
        });

        formulaSubstituida.textContent = grauAtual.substituida;
    } else {
        alert("Erro: Os dados do grau selecionado não foram encontrados.");
        window.location.href = "regressao.html";
    }
});
