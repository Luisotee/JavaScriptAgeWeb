function calcular()
{
    var data = new Date()
    var anoAtual = data.getFullYear()
    var ano = Number(document.getElementById("txtano").value)
    var idade = anoAtual - ano
    var res = document.getElementById("res")
    var img = document.createElement("img")
    img.setAttribute("id", "foto")
    var genero = " "
    var sex = document.getElementsByName("radsex")
    if (ano > anoAtual || ano < 0)
    {
        alert("Valores incorretos")
    }
    if (sex[0].checked)
        genero = "Masculino"

    else
       genero = "Feminino" 

    if (genero == "Masculino")
    {
        if (idade < 4)
        {
            img.setAttribute("src", "foto-bebe-m.png")
        }
        else if (idade < 18)
        {
            img.setAttribute("src", "foto-jovem-m.png")
        }
        else if (idade < 65)
        {
            img.setAttribute("src", "foto-adulto-m.png")
        }
        else if (idade >= 65)
        {
            img.setAttribute("src", "foto-idoso-m.png")
        }
    }
    else
    {
        if (idade < 4)
        {
            //img.setAttribute("src", "foto-bebe-f.png")
        }
        else if (idade < 18)
        {
            img.setAttribute("src", "foto-jovem-f.png")
        }
        else if (idade < 65)
        {
            img.setAttribute("src", "foto-adulto-f.png")
        }
        else if (idade >= 65)
        {
            img.setAttribute("src", "foto-idoso-f.png")
        }
    }
    res.style.textAlign = "center"
    res.innerHTML = `A sua idade é de ${idade} anos`
    res.appendChild(img)
}