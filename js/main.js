var userName = prompt('Ismingizni kiriting: ');
var userMoney = prompt('Sizda qancha pul borligini kiriting(so\'mda kiriting):');
var forTicket = 500;
var forHotel = 250;
var forMuseum = 120;

var total = (forHotel + forTicket) * 11230 + forMuseum * 11700;
console.log(total);

var elTitle = document.querySelector('.title');

if (userMoney >= total) {
   elTitle.textContent = 'Oq yo\'l,' + ' ' + userName + '!';
}else (
   elTitle.textContent = userName + ' ' + ', ozgina sabr qilish kerak bo\'lar ekan.'
)