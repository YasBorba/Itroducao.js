const somar =()=>{
    let num1 = parseFloat (document.getElementById("resu1").value);
    let num2 = parseFloat(document.getElementById("resu2").value);

    let soma = num1 + num2

    document.getElementById("resultado"). innerText = soma

   
}

const subtrair =()=>{
    let num1 = parseFloat (document.getElementById("resu1").value);
    let num2 = parseFloat(document.getElementById("resu2").value);

    let soma = num1 - num2

    document.getElementById("resultado"). innerText = soma

   
}

const multiplicacao =()=>{
    let num1 = parseFloat (document.getElementById("resu1").value);
    let num2 = parseFloat(document.getElementById("resu2").value);

    let soma = num1 * num2

    document.getElementById("resultado"). innerText = soma

   
}

const divisao =()=>{
    let num1 = parseFloat (document.getElementById("resu1").value);
    let num2 = parseFloat(document.getElementById("resu2").value);

    let soma = num1 / num2

    document.getElementById("resultado"). innerText = soma

   
}