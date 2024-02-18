const sits = document.getElementsByClassName('sit')
let sitLeft = 40;
let sitAdd = 0;

for (const sit of sits) {
   sit.addEventListener('click', function (e) {
      // sit decrerment
      sitLeft = sitLeft - 1;
      setInnerText('sit-left',sitLeft)
      // sit increment
      sitAdd = sitAdd + 1;
      setInnerText('sit-add',sitAdd)
      
      // set sitinnerText
      const sitInnerText=e.target.innerText;
      console.log(sitInnerText)
      
})
}