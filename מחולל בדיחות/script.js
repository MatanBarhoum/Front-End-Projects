const jokes = ["גבר צעיר יושב בקופת חולים ליד מבוגרת. הצעיר שואל את המבוגרת: מה את עושה בחיים?\nאני נהגת מרוצים.\nוואלה, בגילך? מתפלא הבחור\n כן, אני מסיעה את הנכדים והם מרוצים.",
               "רוני בא לבקר את אביו בבית אבות ושואל איך המקום,\nנהדר, עונה לו אביו, חוץ מבעיית הסמים. \n סמים? בבית אבות? מתפלא הבן. \nכן, עונה האב הקשיש. לא זוכרים איפה שמים את המשקפיים, איפה שמים את השיניים",
               'שני קשישים נפגשו בפארק: \n "אתה בן 82, נכון? איך אתה מרגיש?" \n בכנות, אני מרגיש כמו תינוק: \n אין לי שיער, גם לא שיניים ואני צריך להחליף את החיתולים שלי כמה פעמים ביום',
               'בלונדינית אחת מתקשרת למשטרה: \n "גנבו לי את הכול מהרכב! את ההגה, גם את הדוושות, הכול!" \n אחרי 2 דקות היא מתקשרת שוב: \n "סליחה, ישבתי במושב האחורי"'];

const makeJoke = () => {
  const min = 0;
  let rndNum = Math.floor(Math.random() * (jokes.length - min) + min);
  let joke = jokes[rndNum];
  var JokeLabel = document.getElementById('Joke')
  JokeLabel.innerHTML = joke;
  
  var mainBox = document.getElementById('main-box');
    if (mainBox.style.display === "none") {
    mainBox.style.display = "block";
   } else {
     mainBox.style.display = "block";
   }
  
  var button = document.getElementById('makeJoke');
  button.innerHTML = "ספר לי עוד בדיחה";
};

const popup = () => {
  var popup1 = document.getElementById("myPopup");
  popup1.classList.toggle("show");
};