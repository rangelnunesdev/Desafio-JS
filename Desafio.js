let lista = 
[
  {nome: 'Juca', idade: 21, cargo: 'front-end'},
  {nome: 'Márcia', idade: 32, cargo: 'back-end'},
  {nome: 'Victória', idade: 24, cargo: 'designer'},
  {nome: 'Rangel', idade: 30, cargo: 'fullstack'},
  {nome: 'Renner', idade: 18, cargo: 'mananger'}
]

function orderUser(array = [])
{
  for (let i = 0; i < 5; i++)
  {
   for (let x = 0; x < 4; x++)
    {
      if (lista[i].idade < lista[x].idade)
      {
        let aux = lista[i]
          lista[i] = lista[x]
          lista[x] = aux
      }
    }
  } 
  return lista
}

console.log(orderUser())