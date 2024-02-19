const sits = document.getElementsByClassName('sit')
let sitLeft = 40;
let sitAdd = 0;

for (const sit of sits) {
   sit.addEventListener('click', function (e) {

      // set sitinnerText




      if (sitAdd <= 3) {
         // sit decrerment
         sitLeft = sitLeft - 1;
         setInnerText('sit-left', sitLeft);

         // sit increment
         sitAdd = sitAdd + 1;
         setInnerText('sit-add', sitAdd);
         const sitInnerText = e.target.innerText;
         // console.log(sitInnerText);

         const ticketDetails = document.getElementById('ticket-container');
         const li = document.createElement('li');
         const p = document.createElement('p');
         p.innerText = sitInnerText;

         const p2 = document.createElement('p')
         const staticText = document.createTextNode('Economy');
         p2.appendChild(staticText);

         const p3 = document.createElement('p')
         const fixedPrice = document.createTextNode(550);

         p3.appendChild(fixedPrice);
         // const p4 = parseInt(p3);
         // console.log(typeof (p4))

         li.appendChild(p);
         li.appendChild(p2);
         li.appendChild(p3);
         ticketDetails.appendChild(li);

         // total cost added
         const totalCost = document.getElementById('total-cost').innerText;
         const convertedTotalCost = parseInt(totalCost);
         // console.log(typeof(convertedTotalCost))
         document.getElementById('total-cost').innerText = convertedTotalCost + 550;

         // grand totalcost
         const grandTotal = document.getElementById('grand-total').innerText;
         const convertedGrandTotal = parseInt(grandTotal);
         // console.log(typeof (convertedGrandTotal));
         document.getElementById('grand-total').innerText = convertedGrandTotal + 550;


         // set button background color
         sit.classList.add('bg-lime-500');
      } else {
         sit.ariaDisabled;
         alert('Go Back!!! youn can not booked over 4 tickets')
      }
   })
}







// setInnerText common function
function setInnerText(id, value) {
   document.getElementById(id).innerText = value;
}
