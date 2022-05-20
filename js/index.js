card = (data) => {

    const container1 = document.getElementById("container1")
                    
    for(let i=0; i < data.length; i++){

        const cards = document.createElement("div")
            cards.classList = "cards"
        container1.appendChild(cards)

            const img = document.createElement("img")
                img.classList = "imagem"
                cards.appendChild(img)
                img.src = data[i].img
                img.alt = data[i].nameItem

        const cards2 = document.createElement("div")
            cards2.classList = "cards2"
        

            const button = document.createElement("button")            
                button.classList = "categories"
                button.innerHTML = `${data[i].tag}`     
            
            const p1 = document.createElement("p")
                p1.classList = "title"
                p1.innerHTML = `${data[i].nameItem}`
            const p2 = document.createElement("p")
                p2.innerHTML = `${data[i].description}`
            const p3 = document.createElement("p")
                p3.innerHTML = `R$ ${data[i].value},00`
            const button2 = document.createElement("button")
                button2.classList = "adc-carrinho"
                button2.innerHTML = `${data[i].addCart}`

            container1.appendChild(cards2)
            cards.appendChild(cards2)
            cards2.appendChild(button)
            cards2.appendChild(p1)
            cards2.appendChild(p2)
            cards2.appendChild(p3)
            cards2.appendChild(button2)  
        

    }
        const container2 = document.createElement("div")
                container2.classList = "container2"    

        const pesquisar = document.createElement("div")
            pesquisar.classList = "pesquisar"

        const input = document.createElement("input")
            input.classList = "search1"
            input.placeholder = "Digite aqui sua pesquisa"

            const button3 = document.createElement("button")
                button3.classList = "search"
                button3.innerHTML = "Pesquisar"

            const section = document.querySelector("section")
            section.appendChild(container2)

            container2.appendChild(pesquisar)
                pesquisar.appendChild(input)
                pesquisar.appendChild(button3)

        const carrinho = document.createElement("div")
            carrinho.classList = "carrinho"

            const h2 = document.createElement("h2")
                h2.innerText = "Carrinho de compras"

        const itensCarrinho = document.createElement("div")
            itensCarrinho.classList = "itens-carrinho"
            const h3 = document.createElement("h3")
                h3.classList = "carrinho-vazio"
                h3.innerText = "Carrinho vázio"
            const p4 = document.createElement("p")
                p4.classList = "adicone-itens"
                p4.innerText = "Adicione itens"  
                
            container2.appendChild(carrinho)
                carrinho.appendChild(h2)
                
            container2.appendChild(itensCarrinho)
                itensCarrinho.appendChild(h3)
                itensCarrinho.appendChild(p4)  

            const box = document.createElement("div")
              box.classList = "box"
            const box2 = document.createElement("div")
              box2.classList = "box2"

            const boxItens = document.createElement("div")
              boxItens.classList = "boxItens"

              box.appendChild(boxItens)

            const productList = document.createElement("ul")
              boxItens.appendChild(productList)

            container2.appendChild(box2)

            
                
let botaoAdicionar = document.getElementsByClassName("adc-carrinho")


atualizarCarrinho = () => {

  box2.innerHTML = ""
   
  const quantidadeItens = document.createElement("p")
    quantidadeItens.classList = "quantidadeItens" 
  const quantidadeTotal = document.createElement("p")
    quantidadeTotal.classList = "quantidadeTotal"
    quantidadeTotal.innerHTML = "Quantidade:"
    box2.appendChild(quantidadeTotal)
    box2.appendChild(quantidadeItens)              
    quantidadeItens.innerHTML = quantidade
  
  const valorItens = document.createElement("p")
    valorItens.classList = "valorItens"
  const valorTotal = document.createElement("p")
    valorTotal.classList = "valorTotal"
    valorTotal.innerHTML = "Total:"
    box2.appendChild(valorTotal)
    box2.appendChild(valorItens)
    valorItens.innerHTML = `R$ ${soma},00`

}


  var soma = 0
  var quantidade = 0

addCarrinho = (products) => { 

    for(let i=0; i < products.length; i++){  
   
        botaoAdicionar[i].addEventListener("click", function(){
          
          carrinho.appendChild(box)

          const productImg = document.createElement("img")
            productImg.src = products[i].img
            productImg.classList = "imagemCarrinho"

          boxItens.appendChild(productImg)

          const productName = document.createElement("li")
                productName.innerHTML = products[i].nameItem
                productName.classList = "nomeProduto"

            boxItens.appendChild(productName)

          const productPrice = document.createElement("li")
                productPrice.innerHTML = `R$ ${products[i].value},00`
                productPrice.classList = "precoProduto"

                boxItens.appendChild(productPrice)

          const removerProduto = document.createElement("button")
              removerProduto.classList = "removerProduto"
              removerProduto.innerHTML = "Remover produto"
              removerProduto.setAttribute("onclick","removerCarrinho("+products[i].id+")")

              boxItens.appendChild(removerProduto)         

              soma += products[i].value
              quantidade++

              console.log(removerProduto)
              
atualizarCarrinho()
            
        })

    }    
}
addCarrinho(data)


removerCarrinho = (id) => {
  for(let i=0; i < data.length;i++){
    if(data[i].id == id){
        var subtrair = soma - data[i].value
        var subQuant = quantidade - 1
      data.splice(i, 1)
      console.log(subtrair)
      console.log(subQuant)
      
      
                }
              }
            }
}

card(data)




