async function getApiData() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  // update dom element to get the advice no to the advice section
  document.querySelector(".adviceno").innerHTML = data.slip.id;
  // update dom element to get the advice text to the advice section
  document.querySelector(".subText").innerHTML = '" ' + data.slip.advice + ' "';
}
debugger;
window.onload = getApiData();
document.querySelector(".bttn").addEventListener("click", getApiData);
