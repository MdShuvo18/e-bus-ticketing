const sits = document.getElementsByClassName('sit')
let sitLeft = 40;
let sitAdd = 0;

for (const sit of sits) {
   sit.addEventListener('click', function (e) {

      // set sitinnerText
      const sitInnerText = e.target.innerText;
      console.log(sitInnerText);

      if (sitAdd <= 3) {
         // sit decrerment
         sitLeft = sitLeft - 1;
         setInnerText('sit-left', sitLeft);

         // sit increment
         sitAdd = sitAdd + 1;
         setInnerText('sit-add', sitAdd);

         // set button background color
         sit.classList.add('bg-lime-500');
      }else {
         sit.ariaDisabled;
         alert('Go Back!!! youn can not booked over 4 tickets')
      }
   })
}






// setInnerText common function
function setInnerText(id,value){
   document.getElementById(id).innerText = value;
}
