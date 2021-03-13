let deck = [];
let player = [];
let comp = [];
let center = [];
let playerScore = [];
let compScore = [];
function popDeck()
{
  document.getElementById("play").disabled = false;
  for(let i = 1; i < 14; i++)
  {
    for(let j = 1; j < 5; j++)
    {
      let card = i + "-" + j;
      deck.push(card);
    }
  }
  shuffle(deck);
  //display(deck);
  distribute(deck);
}
function shuffle(deck)
{
  for(let i = deck.length - 1; i > 0; i--)
  {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }
}
function displayP(deck)
{
  while(document.getElementById("player").hasChildNodes())
    document.getElementById("player").removeChild(document.getElementById("player").firstChild);
  for(let i = 0; i < deck.length; i++)
  {
    let img = document.createElement("IMG");
    img.src = deck[i] + ".png";
    document.getElementById("player").appendChild(img)
  }
}
function displayC(deck)
{
  /*while(document.getElementById("center").hasChildNodes())
  {
    center.splice(0,center.length)
    document.getElementById("center").removeChild(document.getElementById("center").firstChild);
  }*/
  for(let i = 0; i < deck.length; i++)
  {
    let img = document.createElement("IMG");
    img.src = deck[i] + ".png";
    document.getElementById("center").appendChild(img)
  }
}
function distribute(deck)
{
  for(let i = 0; i < deck.length; i++)
  {
    if(i % 2== 0)
      player.push(deck[i]);
    else if(i % 2 == 1)
      comp.push(deck[i]);
  }
  cardBack(comp);
  displayP(player);
}
function cardBack(deck)
{
  while(document.getElementById("comp").hasChildNodes())
    document.getElementById("comp").removeChild(document.getElementById("comp").firstChild);
  for(let i = 0; i < deck.length; i++)
  {
    let img = document.createElement("IMG");
    img.src =  "purple_back.png";
    document.getElementById("comp").appendChild(img)
  }
}
function playCard()
{
  for(let i = 0; i < player.length; i++)
  {
    if(removedCard.value == player[i])
    {
      center.push(player[i]);
      center.push(comp[0]);
      player.splice(i,1);
      comp.splice(0,1);
    }
  }
  checkWin();
  displayP(player);
  cardBack(comp);
  displayC(center);
  while(document.getElementById("center").hasChildNodes())
  {
    center.splice(0,center.length)
    document.getElementById("center").removeChild(document.getElementById("center").firstChild);
  }
}
function checkWin()
{
  if(player.length == 0)
  {
    document.getElementById("play").disabled = true;
    if(playerScore.length > compScore.legnth)
    {
      document.getElementById("pScore").innnerHTML = "WINNER";
    }
    else if(playerScore.length < compScore.legnth)
    {
      document.getElementById("cScore").innnerHTML = "WINNER";
    }
  }
  else
  {
    if(center[0] > center[1])
    {
      for(let i = 0; i < center.length; i++)
        playerScore.push(center[i]);
        document.getElementById("pScore").innerHTML = "User Score: " + playerScore.length;
    }
    else if(center[1] > center[0])
    {
      for(let i = 0; i < center.length; i++)
        compScore.push(center[i]);
        document.getElementById("cScore").innerHTML = "Comp Score: " + compScore.length;
    }
  }
}
