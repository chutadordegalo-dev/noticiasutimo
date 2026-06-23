import readline from "node:readline";

function input(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question(pergunta, resposta => {
            rl.close();
            resolve(resposta);
        });
    });
}

export default input