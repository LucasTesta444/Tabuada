const botao = document.getElementById("botao-tabuada");
const saida = document.querySelector(".campoTabuada");

botao.addEventListener("click", (event) => {
    event.preventDefault()
    let n = (document.getElementById("numeroDaTabuada").value);
    if(n <=0) {
        alert("Digite um numero maior que 0!");
    }else{
        saida.classList.replace("campoTabuada", "campoTabuadaON")
        c=1
        saida.innerHTML = ''
        while(c <= 10){
            var calc = `${n} * ${c} = ${n*c}`
            var resultado = document.createElement("p");
            resultado.innerHTML = calc
            saida.appendChild(resultado);
            c++
        }
        }
    }
)
