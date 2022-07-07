function DisplayMenu() {
  var menu = document.getElementById('menu');
  var whoPicks = document.getElementById('WhoPicks');
  var randomPickedOpening = document.getElementById('RandomPickedOpening');
  var randomPickedMain = document.getElementById('RandomPickedMain');
  var button = document.getElementById('menuDisplay');
  /* הופך את הדיב מנסתר לנראה */
  if (menu.style.display === 'none') {
    menu.style.display = 'flex'
  } else {
    menu.style.display = 'flex';
  }
  
  /* סט של Arrays */
  const Names = ['איציק', 'ספי', 'אור', 'מתן'];
  let NamesRnd = Math.floor(Math.random() * (Names.length - 0) + 0);
  var Name = Names[NamesRnd];
  const Foods = {
    'first': ['בורקס בשר', 'דגים'],
    'last': ['ממולאים - בלי מנה ראשונה!', 'אורז + שעועית לבנה ועוף בגריל עם תפוחי אדמה', 'באחש', 'אורז צהוב עם ירקות + על האש פרגיות קבב', 'אורז סיני ותבשיל קציצות צהוב עם בצל מטוגן']};
  var FirstRnd = Math.floor(Math.random() * (Foods['first'].length - 0) + 0);
  var LastRnd = Math.floor(Math.random() * (Foods['last'].length - 0) + 0);
  /* הופך את התוכן של הכותרות */
  whoPicks.innerHTML = "שלום אסנת, אני אוצ'נוך ואני כאן לשירותך!\nמה דעתך לבשל השבוע:"
  randomPickedOpening.innerHTML = "<b>למנת פתיחה:</b> " + Foods['first'][FirstRnd];
  randomPickedMain.innerHTML = "<b>למנה עיקרית: </b>" + Foods['last'][LastRnd];
  
  button.innerHTML = 'לא טוב? בואי נחליף!';
}