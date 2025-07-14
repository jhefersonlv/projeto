function mudaTema() {
  const html = document.documentElement

  // if (html.classList.contains("modo-branco")) {
  //  html.classList.remove("modo-branco")
  // } else {
  //  html.classList.add("modo-branco")
  // }
  // }
  // o codigo abaixo é um programa interno que faz o que o codigo de cima faz

  html.classList.toggle("modo-branco")

  const imagem = document.querySelector("#profile img")

  if (html.classList.contains("modo-branco")) {
    imagem.setAttribute("src", "./assets/avatar-branco.png")
    imagem.setAttribute("alt", "Foto modo branco")
  } else {
    imagem.setAttribute("src", "./assets/avatar.png")
    imagem.setAttribute("alt", "Foto modo escuro")
  }
}
