
function openPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function tg(user){
  window.open("https://t.me/" + user.replace("@",""));
}

function setLang(lang){
  if(lang === "ru"){
    btn1.innerText="✈️ Билеты";
    btn2.innerText="🛂 Виза";
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
    btn6.innerText="📄 Xizmatlar";
    subtitle.innerText="Servis";
  }
}
