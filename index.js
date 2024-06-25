// Função para calcular o MMC (Mínimo Múltiplo Comum)
function calcularMMC(a, b) {
    let maior = Math.max(a, b);
    let menor = Math.min(a, b);
    let mmc = maior;

    while (mmc % menor !== 0) {
        mmc += maior;
    }

    return mmc;
}

// Função principal para solicitar números e calcular o MMC
function main() {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Digite o primeiro número: ', (num1) => {
        rl.question('Digite o segundo número: ', (num2) => {
            const a = parseInt(num1);
            const b = parseInt(num2);

            if (isNaN(a) || isNaN(b)) {
                console.log('Por favor, insira números válidos.');
            } else {
                const mmc = calcularMMC(a, b);
                console.log(`O MMC de ${a} e ${b} é: ${mmc}`);
            }

            rl.close();
        });
    });
}

// Executa a função principal
main();
