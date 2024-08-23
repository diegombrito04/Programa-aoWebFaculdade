function transporMatriz(A) {
    let linhas = A.length;
    let colunas = A[0].length;
    
    
    let matrizTransposta = [];
    for (let i = 0; i < colunas; i++) {
        matrizTransposta[i] = [];
        for (let j = 0; j < linhas; j++) {
            matrizTransposta[i][j] = A[j][i];
        }
    }

    console.log("Matriz Original:");
    for (let i = 0; i < linhas; i++) {
        console.log(A[i]);
    }

    console.log("\nMatriz Transposta:");
    for (let i = 0; i < colunas; i++) {
        console.log(matrizTransposta[i]);
    }
}

// Um exemplo do uso:
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

transporMatriz(matriz);

