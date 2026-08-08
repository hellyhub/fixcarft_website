const menu=document.querySelector('.menu');const nav=document.querySelector('.nav nav');menu.addEventListener('click',()=>nav.classList.toggle('open'));

document.getElementById('quoteForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const phone=document.getElementById('phoneInput').value.trim();
  const service=document.getElementById('service').value;
  const city=document.getElementById('city').value.trim();
  const details=document.getElementById('details').value.trim();
  const message=`Hi FixCraft! I would like a quote.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0ACity/ZIP: ${encodeURIComponent(city)}%0AProject: ${encodeURIComponent(details)}`;
  window.location.href=`sms:+15103978880?body=${message}`;
});
