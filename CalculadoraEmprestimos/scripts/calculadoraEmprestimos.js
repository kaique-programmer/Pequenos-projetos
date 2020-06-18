function calculate() {
    let amount = document.getElementById("amount");
    let apr = document.getElementById("apr");
    let years = document.getElementById("years");
    let zipcode = document.getElementById("zipcode");
    let payment = document.getElementById("payment");
    let total = document.getElementById("total");
    let totalinterest = document.getElementById("totalinterest");

    // Converte os juros de porcentagem para decimais e converte de taxa
    //anual para taxa mensal. Converte o período de pagemento em anos para o número
    //de pagamentos em anos
    let principal = parseFloat(amount.value);
    let interest = parseFloat(apr.value) / 100 / 12;
    let payments = parseFloat(years.value) * 12;

    // calcula o valor do pagamento mensal
    let x = Math.pow(1 + interest, payments);
    let monthly = (principal * x * interest) / (x - 1);

    // se o resultado é um número finito, a entrada do usuário estava correta e 
    // temos resultados significativos para exibir

    if (isFinite(monthly)) {
        // Preenche os campos de saída, arredondando para 2 casas decimais
        payment.innerHTML = monthly.toFixed(2);
        total.innerHTML = (monthly * payments).toFixed(2);
        totalinterest.innerHTML = ((monthly * payments) - principal).toFixed(2);

        // salva a entrada do usuário para que possamos recuperá-la na próxima vez que visitar
        save(amount.value, apr.value, years.value, zipcode.value);
        // anúncio: Localiza e exibi financeiras locais, mas ignora erros de rede
        try {
            getLenders(amount.value, apr.value, years.value, zipcode.value);
        } catch (e) {
            // traça o gráfico do saldo devedor, dos juros e dos pagamentos do capital
            chart(principal, interest, monthly, payments);
        }
    } else {
        // o resultado foi Not-a-Number ou infinito, o que significa que a entrada é inválida
        // apaga qualquer saída exibida anteriormente
        payment.innerHTML = "";
        total.innerHTML = "";
        totalinterest = "";
        // chart(); // sem argumento, apaga o gráfico
    }
}
/* Salva a entrada do usuário como propriedades do objeto localStorage. Essas propriedades ainda existirão 
    quando o usuário visitar no futuro*/
function save(amount, apr, years, zipcode) {
    if (window.localStorage) { // só faz isso se o navegador suportar
        localStorage.loan_amount = amount;
        localStorage.loan_apr = apr;
        localStorage.loan_years = years;
        localStorage.loan_zipcode = zipcode;
    }
}

// Tenta restaurar os campos de entrada automaticamente quando o documento é carregado pela 1° vez
window.onload = function () {
    if (window.localStorage && localStorage.loan_amount) {
        document.getElementById("amount").value = localStorage.loan_amount;
        document.getElementById("apr").value = localStorage.loan_apr;
        document.getElementById("years").value = localStorage.loan_years;
        document.getElementById("zipcode").value = localStorage.loan_zipcode;
    }
}

/*  Passa a entrada do usuário para um script no lado do servidor que (teoricamente) pode retornar
uma lista de links para financeiras locais interessadas em fazer empréstimos. 
Este exemplo não funciona de forma real, mas funcionaria se o serviço existisse
 */
/*function getLenders(amount, apr, years, zipcode) {
    if (!window.XMLHttpRequest) // se o navegador não suporta o objeto XMLHttpRequest, não faz nada
        return;

    // Localiza o elemento para exibir a lista de financeiras
    let ad = document.getElementById("lenders");
    if (!ad) return; // encerra se há ponto de saída;
    // Codifica a entrada do usuário como parâmetros de consulta em um URL
    let url = "getLenders.php" + "?amt=" + encodeURIComponent(amount) +
        "&apr=" + encodeURIComponent(apr) +
        "&yrs=" + encodeURIComponent(years) +
        "&zip=" + encodeURIComponent(zipcode);

    // Busca o conteúdo desse URL usando o objeto XMLHttpRequest
    let req = new XMLHttpRequest(); // inicia uma nova requisição
    req.open("GET", url); // uma requisição GET para o url
    req.send(null); // Envia o pedido sem corpo

     Antes de retornar, registra uma função de rotina de tratamento de evento que será chamada em um momento
    posterior, quando a resposta do servidor de HTTP chegar. Esse tipo de programação assínrona é muito comum em
    javascript do lado do cliente

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            // Se chegarmos até aqui, obtivemos uma resposta HTTP válida  e completa
            let response = req.responseText(); // resposta HTTP como string
            let lenders = JSON.parse(response); // Analisa em um array Js

            // converte o array de objetos lenders em uma string HTML
            let list = "";
            for (let index = 0; index < lenders.length; index++) {
                list += "<li><a href='" + lenders[index].url + "'>" + lenders[index].name + "</a>";
            }
            // exibe o código HTML no elemento acima
            ad.innerHTML = "<ul>" + list + "</ul>";
        }
    }
}*/

function chart(principal, interest, monthly, payments) {
    var graph = document.getElementById("graph"); // obtém a marcas canvas
    graph.width = graph.width; // Mágica para apagar e redefinir o elemento

    // se achamos sem argumentos ou se esse navegador não suporta elementos canvas, basta retornar agora
    if (arguments.length == 0 || !graph.getContext) return;

    // Obtém o objeto "contexto" de <canvas> que define a API de desenho
    let g = graph.getContext("2d"); // todo desenho é feito com esse objeto
    let width = graph.width, height = graph.height; // Obtém o tamanho da tela de desenho

    // Essas funções convertem números de pagemento de valores monetários em pixels
    function paymentToX(n) {
        return n * width / payments;
    }
    function amountToY(a) {
        return height - (a * height / (monthly * payments * 1.05));
    }

    // Os pagamentos são uma linha reta de (0,0) a (payments, monthly*payments)
    g.moveTo(paymentToX(0), amountToY(0)); // Começa no canto inferior esquerdo
    g.lineTo(paymentToX(payments), amountToY(monthly * payments));
    g.lineTo(paymentToX(payments), amountToY(0)); // Para baixo, até o canto inferior direito

    g.closePath();
    g.fillStyle = "#f88";
    g.fill(); // preenche o triângulo
    g.font = "bold 12px sans-serif";
    g.fillText("Total Interest Payment", 20, 20); // desenha o texto na legenda

    // o capital acumulado não é linear, e é mais complicado de representar no gráfico
    let equity = 0;
    g.beginPath(); // inicia uma nova figura
    g.moveTo(paymentToX(0), amountToY(0)); // começando no canto inferior esquerdo

    for (let p = 1; p <= payments; p++) {
        // Para cada pagamento descobre quanto é juros
        let thisMonthsInterest = (principal - equity) * interest;
        equity += (monthly - thisMonthsInterest); // O resto vai para o capital
        g.lineTo(paymentToX(p), amountToY(equity)); // Linha até este ponto
    }

    g.lineTo(paymentToX(payments), amountToY(0)); // Linha de volta para o eixo X
    g.closePath(); // e volta para o ponto inicial
    g.fillStyle = "green"; // agora usa tinta verde
    g.fill(); // e preenche a área sob a curva
    g.fillText("Total Equity", 20, 35); // rotula em verde

    // Faz laço novamente, como acima, mas representa o saldo devedor como uma linha
    // presta grossa no gráfico

    let bal = principal;
    g.beginPath();
    g.moveTo(paymentToX(0), amountToY(bal));
    for (let p = 1; p <= payments; p++) {
        let thisMonthsInterest = bal * interest;
        bal -= (monthly - thisMonthsInterest);
        g.lineTo(paymentToX(p), amountToY(bal));
    }
    g.lineWidth = 3; // usa uma linha grossa
    g.stroke(); // desenha a curva do saldo
    g.fillStyle = "black"; // troca para texto preto
    g.fillText("Loan Balance", 20, 50); // entrada da legenda

    // agora faz marcações anuais e os números de ano no eixo X
    g.textAlign = "center"; // centraliza o texto nas marcas

    let y = amountToY(0); // Coordenada Y do eixo X
    for (let year = 1; year * 12 <= payments; year++) { // para cada ano
        let x = paymentToX(year * 12); // calcula a posição da marca
        g.fillRect(x - 0.5, y - 3, 1, 3); // desenha a marca

        if (year == 1) // rotula o texto
            g.fillText("Year", x, y-5);

        if (year % 5 == 0 && year * 12 !== payments) // numera a cada 5 anos                
            g.fillText(String(year), x, y-5);
    }

    // Marca valores de pagamento ao longo da margem direita
    g.textAlign = "right"; // alinha o texto à direita
    g.textBaseline = "middle"; // centraliza verticalmente
    let ticks = [monthly * payments, principal]; // os dois pontos que marcaremos
    let rightEdge = paymentToX(payments);
    for (let i = 0; i < ticks.length; i++) {
        let y = amountToY(ticks[i]); // calcula a posição Y da marca
        g.fillRect(rightEdge - 3, y - 0.5, 3, 1);
        g.fillText(String(ticks[i].toFixed(0)), rightEdge - 5, y);
    }

}

