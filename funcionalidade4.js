// Funcionalidade 4: Dividir dois números
function dividir(a, b) 
    if (b === 0) {
        return "Erro: Divisão por zero não permitida.";
    }
    return a / b;
}

// Testando a funcionalidade
console.log(dividir(10, 2)); // Deve imprimir 5
console.log(dividir(10, 0)); // Deve imprimir "Erro: Divisão por zero não permitida."
