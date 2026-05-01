
function openPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function goHome(){
  document.querySelectorAll('.page').forEach(p=>p.classList.add('hidden'));
  document.getElementById('home').classList.remove('hidden');
}

function tg(user){
  window.open("https://t.me/" + user.replace("@",""));
}

function setLang(lang){
  if(lang === "ru"){
    btn1.innerText="✈️ Бронирование";
    btn2.innerText="🛂 Виза ответы";
    btn3.innerText="👥 Группа";
    btn4.innerText="📞 Поддержка";
    btn5.innerText="📝 Анкета";
    btn6.innerText="📄 Услуги";
    subtitle.innerText="Сервис";
  }else{
    btn1.innerText="✈️ Aviabilet";
    btn2.innerText="🛂 Viza";
    btn3.innerText="👥 Telegram";
    btn4.innerText="📞 Yordam";
    btn5.innerText="📝 Anketa";
    btn6.innerText="📄 Uslugalar";
    subtitle.innerText="Servis";
  }
}
