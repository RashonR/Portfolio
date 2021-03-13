function displayBH()
{
  document.getElementById("wt").style.display = "none";
  document.getElementById("bh").style.display = "block";
  document.getElementById("lb").style.display = "none";
  document.body.style.backgroundImage = "url('KingsCanyon.png')";
  document.getElementById("bhinfo").style.color = "white";
}
function displayWT()
{
  document.getElementById("bh").style.display = "none";
  document.getElementById("wt").style.display = "block";
  document.getElementById("lb").style.display = "none";
  document.body.style.backgroundImage = "url('WorldsEdge.png')";
  document.getElementById("wtinfo").style.color = "black";
}
function displayLB()
{
  document.getElementById("bh").style.display = "none";
  document.getElementById("wt").style.display = "none";
  document.getElementById("lb").style.display = "block";
  document.body.style.backgroundImage = "url('Olympus.png')";
  document.getElementById("lbinfo").style.color = "#D3402C"
}
