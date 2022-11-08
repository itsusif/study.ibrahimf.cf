// Header
window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById('header').style.fontSize = '10px';
	} else {
		document.getElementById('header').style.fontSize = '20px';
	}
}
// remove space in a function

function removeSpaces(string) {
	return string.trim();
}

// aquarium |  منتزة الاحياء المائية

const an1 = document.getElementById('an1');
const bt1 = document.getElementById('bt1');

bt1.addEventListener('click', () => {
	if (an1.value.toLowerCase() === 'aquarium') {
		document.getElementById('bt1').style.display = 'none';
		document.getElementById('an1').style.display = 'none';
		document.getElementById('wo1').style.display = 'initial';
	} else {
		bt1.innerText = 'Wrong!';
		document.getElementById('bt1').style.background = 'red';
	}
});

// botanical garden | حديقة نباتية

const an2 = document.getElementById('an2');
const bt2 = document.getElementById('bt2');

bt2.addEventListener('click', () => {
	if (an2.value.toLowerCase() === 'botanical garden') {
		document.getElementById('bt2').style.display = 'none';
		document.getElementById('an2').style.display = 'none';
		document.getElementById('wo2').style.display = 'initial';
	} else {
		bt2.innerText = 'Wrong!';
		document.getElementById('bt2').style.background = 'red';
	}
});

// sports centre |  مركز رياضي

const an3 = document.getElementById('an3');
const bt3 = document.getElementById('bt3');

bt3.addEventListener('click', () => {
	if (an3.value.toLowerCase() === 'sports centre') {
		document.getElementById('bt3').style.display = 'none';
		document.getElementById('an3').style.display = 'none';
		document.getElementById('wo3').style.display = 'initial';
	} else {
		bt3.innerText = 'Wrong!';
		document.getElementById('bt3').style.background = 'red';
	}
});

// lake |  بحيرة

const an4 = document.getElementById('an4');
const bt4 = document.getElementById('bt4');

bt4.addEventListener('click', () => {
	if (an4.value.toLowerCase() === 'lake') {
		document.getElementById('bt4').style.display = 'none';
		document.getElementById('an4').style.display = 'none';
		document.getElementById('wo4').style.display = 'initial';
	} else {
		bt4.innerText = 'Wrong!';
		document.getElementById('bt4').style.background = 'red';
	}
});

// monuments |  آثار

const an5 = document.getElementById('an5');
const bt5 = document.getElementById('bt5');

bt5.addEventListener('click', () => {
	if (an5.value.toLowerCase() === 'monuments') {
		document.getElementById('bt5').style.display = 'none';
		document.getElementById('an5').style.display = 'none';
		document.getElementById('wo5').style.display = 'initial';
	} else {
		bt5.innerText = 'Wrong!';
		document.getElementById('bt5').style.background = 'red';
	}
});

// peaceful |  هادئ/مسالم

const an6 = document.getElementById('an6');
const bt6 = document.getElementById('bt6');

bt6.addEventListener('click', () => {
	if (an6.value.toLowerCase() === 'peaceful') {
		document.getElementById('bt6').style.display = 'none';
		document.getElementById('an6').style.display = 'none';
		document.getElementById('wo6').style.display = 'initial';
	} else {
		bt6.innerText = 'Wrong!';
		document.getElementById('bt6').style.background = 'red';
	}
});

// traffic |  حركة المرور

const an7 = document.getElementById('an7');
const bt7 = document.getElementById('bt7');

bt7.addEventListener('click', () => {
	if (an7.value.toLowerCase() === 'traffic') {
		document.getElementById('bt7').style.display = 'none';
		document.getElementById('an7').style.display = 'none';
		document.getElementById('wo7').style.display = 'initial';
	} else {
		bt7.innerText = 'Wrong!';
		document.getElementById('bt7').style.background = 'red';
	}
});

// especially |  خصوصا/خصيصا

const an8 = document.getElementById('an8');
const bt8 = document.getElementById('bt8');

bt8.addEventListener('click', () => {
	if (an8.value.toLowerCase() === 'especially') {
		document.getElementById('bt8').style.display = 'none';
		document.getElementById('an8').style.display = 'none';
		document.getElementById('wo8').style.display = 'initial';
	} else {
		bt8.innerText = 'Wrong!';
		document.getElementById('bt8').style.background = 'red';
	}
});

// corner |  ركن

const an9 = document.getElementById('an9');
const bt9 = document.getElementById('bt9');

bt9.addEventListener('click', () => {
	if (an9.value.toLowerCase() === 'corner') {
		document.getElementById('bt9').style.display = 'none';
		document.getElementById('an9').style.display = 'none';
		document.getElementById('wo9').style.display = 'initial';
	} else {
		bt9.innerText = 'Wrong!';
		document.getElementById('bt9').style.background = 'red';
	}
});

// station |  محطة

const an10 = document.getElementById('an10');
const bt10 = document.getElementById('bt10');

bt10.addEventListener('click', () => {
	if (an10.value.toLowerCase() === 'station') {
		document.getElementById('bt10').style.display = 'none';
		document.getElementById('an10').style.display = 'none';
		document.getElementById('wo10').style.display = 'initial';
	} else {
		bt10.innerText = 'Wrong!';
		document.getElementById('bt10').style.background = 'red';
	}
});

// station |  محطة

const an11 = document.getElementById('an11');
const bt11 = document.getElementById('bt11');

bt11.addEventListener('click', () => {
	if (an11.value.toLowerCase() === 'directions') {
		document.getElementById('bt11').style.display = 'none';
		document.getElementById('an11').style.display = 'none';
		document.getElementById('wo11').style.display = 'initial';
	} else {
		bt11.innerText = 'Wrong!';
		document.getElementById('bt11').style.background = 'red';
	}
});

// borrow |  يستعير

const an12 = document.getElementById('an12');
const bt12 = document.getElementById('bt12');

bt12.addEventListener('click', () => {
	if (an12.value.toLowerCase() === 'borrow') {
		document.getElementById('bt12').style.display = 'none';
		document.getElementById('an12').style.display = 'none';
		document.getElementById('wo12').style.display = 'initial';
	} else {
		bt12.innerText = 'Wrong!';
		document.getElementById('bt12').style.background = 'red';
	}
});

// ruins |  بقايا/حطام

const an13 = document.getElementById('an13');
const bt13 = document.getElementById('bt13');

bt13.addEventListener('click', () => {
	if (an13.value.toLowerCase() === 'ruins') {
		document.getElementById('bt13').style.display = 'none';
		document.getElementById('an13').style.display = 'none';
		document.getElementById('wo13').style.display = 'initial';
	} else {
		bt13.innerText = 'Wrong!';
		document.getElementById('bt13').style.background = 'red';
	}
});

// pollution |  تلوث

const an14 = document.getElementById('an14');
const bt14 = document.getElementById('bt14');

bt14.addEventListener('click', () => {
	if (an14.value.toLowerCase() === 'pollution') {
		bt14.style.display = 'none';
		an14.style.display = 'none';
		document.getElementById('wo14').style.display = 'initial';
	} else {
		bt14.innerText = 'Wrong!';
		bt14.style.background = 'red';
	}
});

// nature reserve |  محمية طبيعية

const an15 = document.getElementById('an15');
const bt15 = document.getElementById('bt15');

bt15.addEventListener('click', () => {
	if (an15.value.toLowerCase() === 'nature reserve') {
		bt15.style.display = 'none';
		an15.style.display = 'none';
		document.getElementById('wo15').style.display = 'initial';
	} else {
		bt15.innerText = 'Wrong!';
		bt15.style.background = 'red';
	}
});

// area |  منطقة/مساحة

const an16 = document.getElementById('an16');
const bt16 = document.getElementById('bt16');

bt16.addEventListener('click', () => {
	if (an16.value.toLowerCase() === 'area') {
		bt16.style.display = 'none';
		an16.style.display = 'none';
		document.getElementById('wo16').style.display = 'initial';
	} else {
		bt16.innerText = 'Wrong!';
		bt16.style.background = 'red';
	}
});

// sphinx |  ابو الهول

const an17 = document.getElementById('an17');
const bt17 = document.getElementById('bt17');

bt17.addEventListener('click', () => {
	if (an17.value.toLowerCase() === 'sphinx') {
		bt17.style.display = 'none';
		an17.style.display = 'none';
		document.getElementById('wo17').style.display = 'initial';
	} else {
		bt17.innerText = 'Wrong!';
		bt17.style.background = 'red';
	}
});

// include |  يشمل

const an18 = document.getElementById('an18');
const bt18 = document.getElementById('bt18');

bt18.addEventListener('click', () => {
	if (an18.value.toLowerCase() === 'include') {
		bt18.style.display = 'none';
		an18.style.display = 'none';
		document.getElementById('wo18').style.display = 'initial';
	} else {
		bt18.innerText = 'Wrong!';
		bt18.style.background = 'red';
	}
});

// nature |  طبيعي

const an19 = document.getElementById('an19');
const bt19 = document.getElementById('bt19');

bt19.addEventListener('click', () => {
	if (an19.value.toLowerCase() === 'nature') {
		bt19.style.display = 'none';
		an19.style.display = 'none';
		document.getElementById('wo19').style.display = 'initial';
	} else {
		bt19.innerText = 'Wrong!';
		bt19.style.background = 'red';
	}
});

// unnatural |  غير طبيعي

const an20 = document.getElementById('an20');
const bt20 = document.getElementById('bt20');

bt20.addEventListener('click', () => {
	if (an20.value.toLowerCase() === 'unnatural') {
		bt20.style.display = 'none';
		an20.style.display = 'none';
		document.getElementById('wo20').style.display = 'initial';
	} else {
		bt20.innerText = 'Wrong!';
		bt20.style.background = 'red';
	}
});

// event |  حدث هام

const an21 = document.getElementById('an21');
const bt21 = document.getElementById('bt21');

bt21.addEventListener('click', () => {
	if (an21.value.toLowerCase() === 'event') {
		bt21.style.display = 'none';
		an21.style.display = 'none';
		document.getElementById('wo21').style.display = 'initial';
	} else {
		bt21.innerText = 'Wrong!';
		bt21.style.background = 'red';
	}
});

// useful |  مفيد

const an22 = document.getElementById('an22');
const bt22 = document.getElementById('bt22');

bt22.addEventListener('click', () => {
	if (an22.value.toLowerCase() === 'useful') {
		bt22.style.display = 'none';
		an22.style.display = 'none';
		document.getElementById('wo22').style.display = 'initial';
	} else {
		bt22.innerText = 'Wrong!';
		bt22.style.background = 'red';
	}
});

// useless |  مفيد

const an23 = document.getElementById('an23');
const bt23 = document.getElementById('bt23');

bt23.addEventListener('click', () => {
	if (an23.value.toLowerCase() === 'useless') {
		bt23.style.display = 'none';
		an23.style.display = 'none';
		document.getElementById('wo23').style.display = 'initial';
	} else {
		bt23.innerText = 'Wrong!';
		bt23.style.background = 'red';
	}
});

// the suez canal |  قناة السويس

const an24 = document.getElementById('an24');
const bt24 = document.getElementById('bt24');

bt24.addEventListener('click', () => {
	if (an24.value.toLowerCase() === 'the suez canal') {
		bt24.style.display = 'none';
		an24.style.display = 'none';
		document.getElementById('wo24').style.display = 'initial';
	} else {
		bt24.innerText = 'Wrong!';
		bt24.style.background = 'red';
	}
});

// take the second road |  يتخذ الطريق الثاني

const an25 = document.getElementById('an25');
const bt25 = document.getElementById('bt25');

bt25.addEventListener('click', () => {
	if (an25.value.toLowerCase() === 'take the second road') {
		bt25.style.display = 'none';
		an25.style.display = 'none';
		document.getElementById('wo25').style.display = 'initial';
	} else {
		bt25.innerText = 'Wrong!';
		bt25.style.background = 'red';
	}
});

// on the lake |  على البحيرة

const an26 = document.getElementById('an26');
const bt26 = document.getElementById('bt26');

bt26.addEventListener('click', () => {
	if (an26.value.toLowerCase() === 'on the lake') {
		bt26.style.display = 'none';
		an26.style.display = 'none';
		document.getElementById('wo26').style.display = 'initial';
	} else {
		bt26.innerText = 'Wrong!';
		bt26.style.background = 'red';
	}
});

// look like |  يشبه

const an27 = document.getElementById('an27');
const bt27 = document.getElementById('bt27');

bt27.addEventListener('click', () => {
	if (an27.value.toLowerCase() === 'look like') {
		bt27.style.display = 'none';
		an27.style.display = 'none';
		document.getElementById('wo27').style.display = 'initial';
	} else {
		bt27.innerText = 'Wrong!';
		bt27.style.background = 'red';
	}
});

// with beaches around it |  يشبه

const an28 = document.getElementById('an28');
const bt28 = document.getElementById('bt28');

bt28.addEventListener('click', () => {
	if (an28.value.toLowerCase() === 'with beaches around it') {
		bt28.style.display = 'none';
		an28.style.display = 'none';
		document.getElementById('wo28').style.display = 'initial';
	} else {
		bt28.innerText = 'Wrong!';
		bt28.style.background = 'red';
	}
});

// more than usual |  أكثر من المعتاد

const an29 = document.getElementById('an29');
const bt29 = document.getElementById('bt29');

bt29.addEventListener('click', () => {
	if (an29.value.toLowerCase() === 'more than usual') {
		bt29.style.display = 'none';
		an29.style.display = 'none';
		document.getElementById('wo29').style.display = 'initial';
	} else {
		bt29.innerText = 'Wrong!';
		bt29.style.background = 'red';
	}
});

// on map |  على الخريطة

const an30 = document.getElementById('an30');
const bt30 = document.getElementById('bt30');

bt30.addEventListener('click', () => {
	if (an30.value.toLowerCase() === 'on map') {
		bt30.style.display = 'none';
		an30.style.display = 'none';
		document.getElementById('wo30').style.display = 'initial';
	} else {
		bt30.innerText = 'Wrong!';
		bt30.style.background = 'red';
	}
});

// attractive |  جذاب

const an31 = document.getElementById('an31');
const bt31 = document.getElementById('bt31');

bt31.addEventListener('click', () => {
	if (an31.value.toLowerCase() === 'attractive') {
		bt31.style.display = 'none';
		an31.style.display = 'none';
		document.getElementById('wo31').style.display = 'initial';
	} else {
		bt31.innerText = 'Wrong!';
		bt31.style.background = 'red';
	}
});

// ugly |  قبيح

const an32 = document.getElementById('an32');
const bt32 = document.getElementById('bt32');

bt32.addEventListener('click', () => {
	if (an32.value.toLowerCase() === 'ugly') {
		bt32.style.display = 'none';
		an32.style.display = 'none';
		document.getElementById('wo32').style.display = 'initial';
	} else {
		bt32.innerText = 'Wrong!';
		bt32.style.background = 'red';
	}
});

// modren |  حديث

const an33 = document.getElementById('an33');
const bt33 = document.getElementById('bt33');

bt33.addEventListener('click', () => {
	if (an33.value.toLowerCase() === 'modren') {
		bt33.style.display = 'none';
		an33.style.display = 'none';
		document.getElementById('wo33').style.display = 'initial';
	} else {
		bt33.innerText = 'Wrong!';
		bt33.style.background = 'red';
	}
});

// ancient |  قديم

const an34 = document.getElementById('an34');
const bt34 = document.getElementById('bt34');

bt34.addEventListener('click', () => {
	if (an34.value.toLowerCase() === 'ancient') {
		bt34.style.display = 'none';
		an34.style.display = 'none';
		document.getElementById('wo34').style.display = 'initial';
	} else {
		bt34.innerText = 'Wrong!';
		bt34.style.background = 'red';
	}
});

// peaceful |  هادئ/مسالم

const an35 = document.getElementById('an35');
const bt35 = document.getElementById('bt35');

bt35.addEventListener('click', () => {
	if (an35.value.toLowerCase() === 'peaceful') {
		bt35.style.display = 'none';
		an35.style.display = 'none';
		document.getElementById('wo35').style.display = 'initial';
	} else {
		bt35.innerText = 'Wrong!';
		bt35.style.background = 'red';
	}
});

// noisy |  مزعج

const an36 = document.getElementById('an36');
const bt36 = document.getElementById('bt36');

bt36.addEventListener('click', () => {
	if (an36.value.toLowerCase() === 'noisy') {
		bt36.style.display = 'none';
		an36.style.display = 'none';
		document.getElementById('wo36').style.display = 'initial';
	} else {
		bt36.innerText = 'Wrong!';
		bt36.style.background = 'red';
	}
});

// borrow |  يستعير

const an37 = document.getElementById('an37');
const bt37 = document.getElementById('bt37');

bt37.addEventListener('click', () => {
	if (an37.value.toLowerCase() === 'borrow') {
		bt37.style.display = 'none';
		an37.style.display = 'none';
		document.getElementById('wo37').style.display = 'initial';
	} else {
		bt37.innerText = 'Wrong!';
		bt37.style.background = 'red';
	}
});

// lend |  يقرض

const an38 = document.getElementById('an38');
const bt38 = document.getElementById('bt38');

bt38.addEventListener('click', () => {
	if (an38.value.toLowerCase() === 'lend') {
		bt38.style.display = 'none';
		an38.style.display = 'none';
		document.getElementById('wo38').style.display = 'initial';
	} else {
		bt38.innerText = 'Wrong!';
		bt38.style.background = 'red';
	}
});

// exhibition |  معرض/يعرض

const an39 = document.getElementById('an39');
const bt39 = document.getElementById('bt39');

bt39.addEventListener('click', () => {
	if (an39.value.toLowerCase() === 'exhibition') {
		bt39.style.display = 'none';
		an39.style.display = 'none';
		document.getElementById('wo39').style.display = 'initial';
	} else {
		bt39.innerText = 'Wrong!';
		bt39.style.background = 'red';
	}
});

// space |  فضاء

const an40 = document.getElementById('an40');
const bt40 = document.getElementById('bt40');

bt40.addEventListener('click', () => {
	if (an40.value.toLowerCase() === 'space') {
		bt40.style.display = 'none';
		an40.style.display = 'none';
		document.getElementById('wo40').style.display = 'initial';
	} else {
		bt40.innerText = 'Wrong!';
		bt40.style.background = 'red';
	}
});

// ferry |  معدية

const an41 = document.getElementById('an41');
const bt41 = document.getElementById('bt41');

bt41.addEventListener('click', () => {
	if (an41.value.toLowerCase() === 'ferry') {
		bt41.style.display = 'none';
		an41.style.display = 'none';
		document.getElementById('wo41').style.display = 'initial';
	} else {
		bt41.innerText = 'Wrong!';
		bt41.style.background = 'red';
	}
});

// vally |  وادي

const an42 = document.getElementById('an42');
const bt42 = document.getElementById('bt42');

bt42.addEventListener('click', () => {
	if (an42.value.toLowerCase() === 'vally') {
		bt42.style.display = 'none';
		an42.style.display = 'none';
		document.getElementById('wo42').style.display = 'initial';
	} else {
		bt42.innerText = 'Wrong!';
		bt42.style.background = 'red';
	}
});

// passenger |  ركاب

const an43 = document.getElementById('an43');
const bt43 = document.getElementById('bt43');

bt43.addEventListener('click', () => {
	if (an43.value.toLowerCase() === 'passenger') {
		bt43.style.display = 'none';
		an43.style.display = 'none';
		document.getElementById('wo43').style.display = 'initial';
	} else {
		bt43.innerText = 'Wrong!';
		bt43.style.background = 'red';
	}
});

// below |  أسفل

const an44 = document.getElementById('an44');
const bt44 = document.getElementById('bt44');

bt44.addEventListener('click', () => {
	if (an44.value.toLowerCase() === 'below') {
		bt44.style.display = 'none';
		an44.style.display = 'none';
		document.getElementById('wo44').style.display = 'initial';
	} else {
		bt44.innerText = 'Wrong!';
		bt44.style.background = 'red';
	}
});

// platform |  رصيف محطة القطار

const an45 = document.getElementById('an45');
const bt45 = document.getElementById('bt45');

bt45.addEventListener('click', () => {
	if (an45.value.toLowerCase() === 'platform') {
		bt45.style.display = 'none';
		an45.style.display = 'none';
		document.getElementById('wo45').style.display = 'initial';
	} else {
		bt45.innerText = 'Wrong!';
		bt45.style.background = 'red';
	}
});

// paintings |  لوحات/رسومات

const an46 = document.getElementById('an46');
const bt46 = document.getElementById('bt46');

bt46.addEventListener('click', () => {
	if (an46.value.toLowerCase() === 'paintings') {
		bt46.style.display = 'none';
		an46.style.display = 'none';
		document.getElementById('wo46').style.display = 'initial';
	} else {
		bt46.innerText = 'Wrong!';
		bt46.style.background = 'red';
	}
});

// objects |  أشياء/مقتنيات

const an47 = document.getElementById('an47');
const bt47 = document.getElementById('bt47');

bt47.addEventListener('click', () => {
	if (an47.value.toLowerCase() === 'objects') {
		bt47.style.display = 'none';
		an47.style.display = 'none';
		document.getElementById('wo47').style.display = 'initial';
	} else {
		bt47.innerText = 'Wrong!';
		bt47.style.background = 'red';
	}
});

// timetable |  جدول مواعيد

const an48 = document.getElementById('an48');
const bt48 = document.getElementById('bt48');

bt48.addEventListener('click', () => {
	if (an48.value.toLowerCase() === 'timetable') {
		bt48.style.display = 'none';
		an48.style.display = 'none';
		document.getElementById('wo48').style.display = 'initial';
	} else {
		bt48.innerText = 'Wrong!';
		bt48.style.background = 'red';
	}
});

// cross words |  كلمات متقاطعة

const an49 = document.getElementById('an49');
const bt49 = document.getElementById('bt49');

bt49.addEventListener('click', () => {
	if (an49.value.toLowerCase() === 'cross words') {
		bt49.style.display = 'none';
		an49.style.display = 'none';
		document.getElementById('wo49').style.display = 'initial';
	} else {
		bt49.innerText = 'Wrong!';
		bt49.style.background = 'red';
	}
});

// floor |  طابق 

const an50 = document.getElementById('an50');
const bt50 = document.getElementById('bt50');

bt50.addEventListener('click', () => {
	if (an50.value.toLowerCase() === 'floor') {
		bt50.style.display = 'none';
		an50.style.display = 'none';
		document.getElementById('wo50').style.display = 'initial';
	} else {
		bt50.innerText = 'Wrong!';
		bt50.style.background = 'red';
	}
});

// electric |  كهربي

const an51 = document.getElementById('an51');
const bt51 = document.getElementById('bt51');

bt51.addEventListener('click', () => {
	if (an51.value.toLowerCase() === 'electric') {
		bt51.style.display = 'none';
		an51.style.display = 'none';
		document.getElementById('wo51').style.display = 'initial';
	} else {
		bt51.innerText = 'Wrong!';
		bt51.style.background = 'red';
	}
});

// stop |  محطة الاتوبيس

const an52 = document.getElementById('an52');
const bt52 = document.getElementById('bt52');

bt52.addEventListener('click', () => {
	if (an52.value.toLowerCase() === 'stop') {
		bt52.style.display = 'none';
		an52.style.display = 'none';
		document.getElementById('wo52').style.display = 'initial';
	} else {
		bt52.innerText = 'Wrong!';
		bt52.style.background = 'red';
	}
});

// engineering works |  أعمال هندسية

const an53 = document.getElementById('an53');
const bt53 = document.getElementById('bt53');

bt53.addEventListener('click', () => {
	if (an53.value.toLowerCase() === 'engineering works') {
		bt53.style.display = 'none';
		an53.style.display = 'none';
		document.getElementById('wo53').style.display = 'initial';
	} else {
		bt53.innerText = 'Wrong!';
		bt53.style.background = 'red';
	}
});

// guard |  حارس

const an54 = document.getElementById('an54');
const bt54 = document.getElementById('bt54');

bt54.addEventListener('click', () => {
	if (an54.value.toLowerCase() === 'guard') {
		bt54.style.display = 'none';
		an54.style.display = 'none';
		document.getElementById('wo54').style.display = 'initial';
	} else {
		bt54.innerText = 'Wrong!';
		bt54.style.background = 'red';
	}
});

// univercity |  جامعة

const an55 = document.getElementById('an55');
const bt55 = document.getElementById('bt55');

bt55.addEventListener('click', () => {
	if (an55.value.toLowerCase() === 'univercity') {
		bt55.style.display = 'none';
		an55.style.display = 'none';
		document.getElementById('wo55').style.display = 'initial';
	} else {
		bt55.innerText = 'Wrong!';
		bt55.style.background = 'red';
	}
});

// types |  أنواع

const an56 = document.getElementById('an56');
const bt56 = document.getElementById('bt56');

bt56.addEventListener('click', () => {
	if (an56.value.toLowerCase() === 'types') {
		bt56.style.display = 'none';
		an56.style.display = 'none';
		document.getElementById('wo56').style.display = 'initial';
	} else {
		bt56.innerText = 'Wrong!';
		bt56.style.background = 'red';
	}
});

// transport |  نقل/مواصلات

const an57 = document.getElementById('an57');
const bt57 = document.getElementById('bt57');

bt57.addEventListener('click', () => {
	if (an57.value.toLowerCase() === 'transport') {
		bt57.style.display = 'none';
		an57.style.display = 'none';
		document.getElementById('wo57').style.display = 'initial';
	} else {
		bt57.innerText = 'Wrong!';
		bt57.style.background = 'red';
	}
});

// cross |  يعبر

const an58 = document.getElementById('an58');
const bt58 = document.getElementById('bt58');

bt58.addEventListener('click', () => {
	if (an58.value.toLowerCase() === 'cross') {
		bt58.style.display = 'none';
		an58.style.display = 'none';
		document.getElementById('wo58').style.display = 'initial';
	} else {
		bt58.innerText = 'Wrong!';
		bt58.style.background = 'red';
	}
});

// railway |  خط سكة حديد

const an59 = document.getElementById('an59');
const bt59 = document.getElementById('bt59');

bt59.addEventListener('click', () => {
	if (an59.value.toLowerCase() === 'railway') {
		bt59.style.display = 'none';
		an59.style.display = 'none';
		document.getElementById('wo59').style.display = 'initial';
	} else {
		bt59.innerText = 'Wrong!';
		bt59.style.background = 'red';
	}
});

// energy |  طاقة

const an60 = document.getElementById('an60');
const bt60 = document.getElementById('bt60');

bt60.addEventListener('click', () => {
	if (an60.value.toLowerCase() === 'energy') {
		bt60.style.display = 'none';
		an60.style.display = 'none';
		document.getElementById('wo60').style.display = 'initial';
	} else {
		bt60.innerText = 'Wrong!';
		bt60.style.background = 'red';
	}
});

// environment |  بيئة

const an61 = document.getElementById('an61');
const bt61 = document.getElementById('bt61');

bt61.addEventListener('click', () => {
	if (an61.value.toLowerCase() === 'environment') {
		bt61.style.display = 'none';
		an61.style.display = 'none';
		document.getElementById('wo61').style.display = 'initial';
	} else {
		bt61.innerText = 'Wrong!';
		bt61.style.background = 'red';
	}
});

// prefer |  يفضل

const an62 = document.getElementById('an62');
const bt62 = document.getElementById('bt62');

bt62.addEventListener('click', () => {
	if (an62.value.toLowerCase() === 'prefer') {
		bt62.style.display = 'none';
		an62.style.display = 'none';
		document.getElementById('wo62').style.display = 'initial';
	} else {
		bt62.innerText = 'Wrong!';
		bt62.style.background = 'red';
	}
});

// rails |  قضائب سكة الحديدية

const an63 = document.getElementById('an63');
const bt63 = document.getElementById('bt63');

bt63.addEventListener('click', () => {
	if (an63.value.toLowerCase() === 'rails') {
		bt63.style.display = 'none';
		an63.style.display = 'none';
		document.getElementById('wo63').style.display = 'initial';
	} else {
		bt63.innerText = 'Wrong!';
		bt63.style.background = 'red';
	}
});

// central |  مركزي

const an64 = document.getElementById('an64');
const bt64 = document.getElementById('bt64');

bt64.addEventListener('click', () => {
	if (an64.value.toLowerCase() === 'central') {
		bt64.style.display = 'none';
		an64.style.display = 'none';
		document.getElementById('wo64').style.display = 'initial';
	} else {
		bt64.innerText = 'Wrong!';
		bt64.style.background = 'red';
	}
});

// catch |  يلحق - يصطاد

const an65 = document.getElementById('an65');
const bt65 = document.getElementById('bt65');

bt65.addEventListener('click', () => {
	if (an65.value.toLowerCase() === 'catch') {
		bt65.style.display = 'none';
		an65.style.display = 'none';
		document.getElementById('wo65').style.display = 'initial';
	} else {
		bt65.innerText = 'Wrong!';
		bt65.style.background = 'red';
	}
});

// show - showed - shown |  يبين

const an66 = document.getElementById('an66');
const bt66 = document.getElementById('bt66');
const mw2 = ['show', 'showed', 'shown'];

bt66.addEventListener('click', () => {
	if (mw2.includes(an66.value.toLowerCase())) {
		bt66.style.display = 'none';
		an66.style.display = 'none';
		document.getElementById('wo66').style.display = 'initial';
	} else {
		bt66.innerText = 'Wrong!';
		bt66.style.background = 'red';
	}
});

// leave - left |  يغادر

const an67 = document.getElementById('an67');
const bt67 = document.getElementById('bt67');
const mw3 = ['leave', 'left'];

bt67.addEventListener('click', () => {
	if (mw3.includes(an67.value.toLowerCase())) {
		bt67.style.display = 'none';
		an67.style.display = 'none';
		document.getElementById('wo67').style.display = 'initial';
	} else {
		bt67.innerText = 'Wrong!';
		bt67.style.background = 'red';
	}
});

// follow directions |  يتبع الاتجهات

const an68 = document.getElementById('an68');
const bt68 = document.getElementById('bt68');
const mw4 = ['follow directions', 'follow direction'];

bt68.addEventListener('click', () => {
	if (mw4.includes(an68.value.toLowerCase())) {
		bt68.style.display = 'none';
		an68.style.display = 'none';
		document.getElementById('wo68').style.display = 'initial';
	} else {
		bt68.innerText = 'Wrong!';
		bt68.style.background = 'red';
	}
});

// follow rules |  يتبع القوانين

const an69 = document.getElementById('an69');
const bt69 = document.getElementById('bt69');
const mw5 = [
	'follow rules',
	'follow rule',
	'follow the rules',
	'follow the rule'
];

bt69.addEventListener('click', () => {
	if (mw5.includes(an69.value.toLowerCase())) {
		bt69.style.display = 'none';
		an69.style.display = 'none';
		document.getElementById('wo69').style.display = 'initial';
	} else {
		bt69.innerText = 'Wrong!';
		bt69.style.background = 'red';
	}
});

// get a train |  يستقل القطار

const an70 = document.getElementById('an70');
const bt70 = document.getElementById('bt70');

bt70.addEventListener('click', () => {
	if (an70.value.toLowerCase() === 'get a train') {
		bt70.style.display = 'none';
		an70.style.display = 'none';
		document.getElementById('wo70').style.display = 'initial';
	} else {
		bt70.innerText = 'Wrong!';
		bt70.style.background = 'red';
	}
});

// go upstairs |  يصعد الطابق العل

const an71 = document.getElementById('an71');
const bt71 = document.getElementById('bt71');
const m6 = ['go upstairs', 'go up stairs'];
bt71.addEventListener('click', () => {
	if (m6.includes(an71.value.toLowerCase())) {
		bt71.style.display = 'none';
		an71.style.display = 'none';
		document.getElementById('wo71').style.display = 'initial';
	} else {
		bt71.innerText = 'Wrong!';
		bt71.style.background = 'red';
	}
});

// look out of the window |  ينظر حلال النافذه

const an72 = document.getElementById('an72');
const bt72 = document.getElementById('bt72');
bt72.addEventListener('click', () => {
	if (an72.value.toLowerCase() === 'look out of the window') {
		bt72.style.display = 'none';
		an72.style.display = 'none';
		document.getElementById('wo72').style.display = 'initial';
	} else {
		bt72.innerText = 'Wrong!';
		bt72.style.background = 'red';
	}
});

// busy cities |  مدينة مزدحمه

const an73 = document.getElementById('an73');
const bt73 = document.getElementById('bt73');
bt73.addEventListener('click', () => {
	if (an73.value.toLowerCase() === 'busy cities') {
		bt73.style.display = 'none';
		an73.style.display = 'none';
		document.getElementById('wo73').style.display = 'initial';
	} else {
		bt73.innerText = 'Wrong!';
		bt73.style.background = 'red';
	}
});

// travel around |  يتجول

const an74 = document.getElementById('an74');
const bt74 = document.getElementById('bt74');
bt74.addEventListener('click', () => {
	if (an74.value.toLowerCase() === 'travel around') {
		bt74.style.display = 'none';
		an74.style.display = 'none';
		document.getElementById('wo74').style.display = 'initial';
	} else {
		bt74.innerText = 'Wrong!';
		bt74.style.background = 'red';
	}
});

// what's special about ... ? |  ما الذي يميز

const an75 = document.getElementById('an75');
const bt75 = document.getElementById('bt75');
const m7 = [
	`what's special about ... ?`,
	`what's special about ...`,
	`what's special about`,
	`what is special about ... ?`,
	`what is special about ...`,
	`what is special about`
];

bt75.addEventListener('click', () => {
	if (m7.includes(an75.value.toLowerCase())) {
		bt75.style.display = 'none';
		an75.style.display = 'none';
		document.getElementById('wo75').style.display = 'initial';
	} else {
		bt75.innerText = 'Wrong!';
		bt75.style.background = 'red';
	}
});

// usual |  عادي

const an76 = document.getElementById('an76');
const bt76 = document.getElementById('bt76');
bt76.addEventListener('click', () => {
	if (an76.value.toLowerCase() === 'usual') {
		bt76.style.display = 'none';
		an76.style.display = 'none';
		document.getElementById('wo76').style.display = 'initial';
	} else {
		bt76.innerText = 'Wrong!';
		bt76.style.background = 'red';
	}
});

// unusual |  غير عادي

const an77 = document.getElementById('an77');
const bt77 = document.getElementById('bt77');
bt77.addEventListener('click', () => {
	if (an77.value.toLowerCase() === 'unusual') {
		bt77.style.display = 'none';
		an77.style.display = 'none';
		document.getElementById('wo77').style.display = 'initial';
	} else {
		bt77.innerText = 'Wrong!';
		bt77.style.background = 'red';
	}
});

// jewellery |  مجوهرات

const an78 = document.getElementById('an78');
const bt78 = document.getElementById('bt78');
bt78.addEventListener('click', () => {
	if (an78.value.toLowerCase() === 'jewellery') {
		bt78.style.display = 'none';
		an78.style.display = 'none';
		document.getElementById('wo78').style.display = 'initial';
	} else {
		bt78.innerText = 'Wrong!';
		bt78.style.background = 'red';
	}
});

// pottery |  أواني فخارية

const an79 = document.getElementById('an79');
const bt79 = document.getElementById('bt79');
bt79.addEventListener('click', () => {
	if (an79.value.toLowerCase() === 'pottery') {
		bt79.style.display = 'none';
		an79.style.display = 'none';
		document.getElementById('wo79').style.display = 'initial';
	} else {
		bt79.innerText = 'Wrong!';
		bt79.style.background = 'red';
	}
});

// century |  قريه

const an80 = document.getElementById('an80');
const bt80 = document.getElementById('bt80');
bt80.addEventListener('click', () => {
	if (an80.value.toLowerCase() === 'century') {
		bt80.style.display = 'none';
		an80.style.display = 'none';
		document.getElementById('wo80').style.display = 'initial';
	} else {
		bt80.innerText = 'Wrong!';
		bt80.style.background = 'red';
	}
});

// suggestion |  اقتراح

const an81 = document.getElementById('an81');
const bt81 = document.getElementById('bt81');
bt81.addEventListener('click', () => {
	if (an81.value.toLowerCase() === 'suggestion') {
		bt81.style.display = 'none';
		an81.style.display = 'none';
		document.getElementById('wo81').style.display = 'initial';
	} else {
		bt81.innerText = 'Wrong!';
		bt81.style.background = 'red';
	}
});

// respond |  يرد - يستجيب

const an82 = document.getElementById('an82');
const bt82 = document.getElementById('bt82');
bt82.addEventListener('click', () => {
	if (an82.value.toLowerCase() === 'respond') {
		bt82.style.display = 'none';
		an82.style.display = 'none';
		document.getElementById('wo82').style.display = 'initial';
	} else {
		bt82.innerText = 'Wrong!';
		bt82.style.background = 'red';
	}
});

// indoors |  داخل المنزل

const an83 = document.getElementById('an83');
const bt83 = document.getElementById('bt83');
const m8 = ['indoors', 'indoor'];

bt83.addEventListener('click', () => {
	if (m8.includes(an83.value.toLowerCase())) {
		bt83.style.display = 'none';
		an83.style.display = 'none';
		document.getElementById('wo83').style.display = 'initial';
	} else {
		bt83.innerText = 'Wrong!';
		bt83.style.background = 'red';
	}
});

// outdoors |  خارج المنزل

const an84 = document.getElementById('an84');
const bt84 = document.getElementById('bt84');
const m9 = ['outdoors', 'outdoor'];

bt84.addEventListener('click', () => {
	if (m9.includes(an84.value.toLowerCase())) {
		bt84.style.display = 'none';
		an84.style.display = 'none';
		document.getElementById('wo84').style.display = 'initial';
	} else {
		bt84.innerText = 'Wrong!';
		bt84.style.background = 'red';
	}
});

// disagree |  يرفض

const an85 = document.getElementById('an85');
const bt85 = document.getElementById('bt85');

bt85.addEventListener('click', () => {
	if (an85.value.toLowerCase() === 'disagree') {
		bt85.style.display = 'none';
		an85.style.display = 'none';
		document.getElementById('wo85').style.display = 'initial';
	} else {
		bt85.innerText = 'Wrong!';
		bt85.style.background = 'red';
	}
});

// politely |  بادب

const an86 = document.getElementById('an86');
const bt86 = document.getElementById('bt86');

bt86.addEventListener('click', () => {
	if (an86.value.toLowerCase() === 'politely') {
		bt86.style.display = 'none';
		an86.style.display = 'none';
		document.getElementById('wo86').style.display = 'initial';
	} else {
		bt86.innerText = 'Wrong!';
		bt86.style.background = 'red';
	}
});

// arrange |  يرتب

const an87 = document.getElementById('an87');
const bt87 = document.getElementById('bt87');

bt87.addEventListener('click', () => {
	if (an87.value.toLowerCase() === 'arrange') {
		bt87.style.display = 'none';
		an87.style.display = 'none';
		document.getElementById('wo87').style.display = 'initial';
	} else {
		bt87.innerText = 'Wrong!';
		bt87.style.background = 'red';
	}
});

// describe |  يوصف

const an88 = document.getElementById('an88');
const bt88 = document.getElementById('bt88');

bt88.addEventListener('click', () => {
	if (an88.value.toLowerCase() === 'describe') {
		bt88.style.display = 'none';
		an88.style.display = 'none';
		document.getElementById('wo88').style.display = 'initial';
	} else {
		bt88.innerText = 'Wrong!';
		bt88.style.background = 'red';
	}
});

// opinion |  راي

const an89 = document.getElementById('an89');
const bt89 = document.getElementById('bt89');

bt89.addEventListener('click', () => {
	if (an89.value.toLowerCase() === 'opinion') {
		bt89.style.display = 'none';
		an89.style.display = 'none';
		document.getElementById('wo89').style.display = 'initial';
	} else {
		bt89.innerText = 'Wrong!';
		bt89.style.background = 'red';
	}
});

// feelings |  مشاعر

const an90 = document.getElementById('an90');
const bt90 = document.getElementById('bt90');

bt90.addEventListener('click', () => {
	if (an90.value.toLowerCase() === 'feelings') {
		bt90.style.display = 'none';
		an90.style.display = 'none';
		document.getElementById('wo90').style.display = 'initial';
	} else {
		bt90.innerText = 'Wrong!';
		bt90.style.background = 'red';
	}
});

// final |  نهائي

const an91 = document.getElementById('an91');
const bt91 = document.getElementById('bt91');

bt91.addEventListener('click', () => {
	if (an91.value.toLowerCase() === 'final') {
		bt91.style.display = 'none';
		an91.style.display = 'none';
		document.getElementById('wo91').style.display = 'initial';
	} else {
		bt91.innerText = 'Wrong!';
		bt91.style.background = 'red';
	}
});

// decision |  قرار

const an92 = document.getElementById('an92');
const bt92 = document.getElementById('bt92');

bt92.addEventListener('click', () => {
	if (an92.value.toLowerCase() === 'decision') {
		bt92.style.display = 'none';
		an92.style.display = 'none';
		document.getElementById('wo92').style.display = 'initial';
	} else {
		bt92.innerText = 'Wrong!';
		bt92.style.background = 'red';
	}
});



// wild |  بري

const an93 = document.getElementById('an93');
const bt93 = document.getElementById('bt93');

bt93.addEventListener('click', () => {
	if (an93.value.toLowerCase() === 'wild') {
		bt93.style.display = 'none';
		an93.style.display = 'none';
		document.getElementById('wo93').style.display = 'initial';
	} else {
		bt93.innerText = 'Wrong!';
		bt93.style.background = 'red';
	}
});

// review |  مقال نقدي

const an94 = document.getElementById('an94');
const bt94 = document.getElementById('bt94');

bt94.addEventListener('click', () => {
	if (an94.value.toLowerCase() === 'review') {
		bt94.style.display = 'none';
		an94.style.display = 'none';
		document.getElementById('wo94').style.display = 'initial';
	} else {
		bt94.innerText = 'Wrong!';
		bt94.style.background = 'red';
	}
});

// khedive |  خديوي

const an95 = document.getElementById('an95');
const bt95 = document.getElementById('bt95');

bt95.addEventListener('click', () => {
	if (an95.value.toLowerCase() === 'khedive') {
		bt95.style.display = 'none';
		an95.style.display = 'none';
		document.getElementById('wo95').style.display = 'initial';
	} else {
		bt95.innerText = 'Wrong!';
		bt95.style.background = 'red';
	}
});

// invitation |  دعوه

const an96 = document.getElementById('an96');
const bt96 = document.getElementById('bt96');

bt96.addEventListener('click', () => {
	if (an96.value.toLowerCase() === 'invitation') {
		bt96.style.display = 'none';
		an96.style.display = 'none';
		document.getElementById('wo96').style.display = 'initial';
	} else {
		bt96.innerText = 'Wrong!';
		bt96.style.background = 'red';
	}
});

// nearby |  قريب من

const an97 = document.getElementById('an97');
const bt97 = document.getElementById('bt97');
const m10 = ['near by','nearby']
bt97.addEventListener('click', () => {
	if (m10.includes(an97.value.toLowerCase())) {
		bt97.style.display = 'none';
		an97.style.display = 'none';
		document.getElementById('wo97').style.display = 'initial';
	} else {
		bt97.innerText = 'Wrong!';
		bt97.style.background = 'red';
	}
});

// caught |  التحق - اصطاد

const an98 = document.getElementById('an98');
const bt98 = document.getElementById('bt98');
const mw1 = ['caught'];

bt98.addEventListener('click', () => {
	if (mw1.includes(an98.value.toLowerCase())) {
		bt98.style.display = 'none';
		an98.style.display = 'none';
		document.getElementById('wo98').style.display = 'initial';
	} else {
		bt98.innerText = 'Wrong!';
		bt98.style.background = 'red';
	}
});

// caught |  التحق - اصطاد

const an99 = document.getElementById('an99');
const bt99 = document.getElementById('bt99');

bt99.addEventListener('click', () => {
	if (mw1.includes(an99.value.toLowerCase())) {
		bt99.style.display = 'none';
		an99.style.display = 'none';
		document.getElementById('wo99').style.display = 'initial';
	} else {
		bt99.innerText = 'Wrong!';
		bt99.style.background = 'red';
	}
});