function test(val) {
	alert("This is from JS FILE: " + val);
}

//////////////////////////////////////////////////////////
// ЗАДАЧА по подсчету слов с небольшими улучшениями - повторяиющиеся операции обернуты в функцию
//////////////////////////////////////////////////////////

var text = ' #$##-- Uno$Dos###Tres - Quatro  Umberto,,,,, Rodrigues, Albano;$ Cavado   ###';
var deviders = ' ,;-=$#';


console.log("Total words: ", wordCounter(text, deviders));

// функция, которая считает слова, принимает в себя 2 параметра:
// @ строку текста, где надо подсчитать слова
// @ строку разделителей любой длины
function wordCounter(text, deviders) {
	var wordsCounter = 0;
	var lastDividerPosition = 0;

	// внутренняя функция, которая умеет определить - является ли переданный ей символ разделителем
	// @ строка - симпол разделитель
	// @ строка - все разделители
	function isDivider(needle, dev) {
		for (var i = 0; i < dev.length; i++) {
			if (needle === dev[i]) {
				return true; // да, является разделителем
			}
		}
		return false; // не является разделителем
	}

	for (var i = 0 ; i < text.length; i++){
		// последовательно проверяем всю строку, если текущий символ является разделителем,
		// тогда проваливаемся в условие и смотрим дальше
		if (isDivider(text[i], deviders)) {
			lastDividerPosition = i; // запоминаем позицию последнего разделителя

			// в улсовие ниже мы проверяем разделители, которые идут подряд
			if (!i || isDivider(text[i-1], deviders)) { // если текущий символя является первым в строке (т.е. нулевой индекс)
				// ИЛИ прыдедущий символ строки является разделителем, тогда CONTINUE
				continue; // переходим на след.шаг цикла
			}
			wordsCounter++; // в противном случае - закончилось слово и надо увеличить счетчик слов
		}


	}
	// если позиция последнего разделителя совпадает с позицией последнего символа в строке,
	// тогда возвращаем просто счетчик слов
	// иначе мы должны искуственно прибавить 1 к счетчику слов, т.к. он не учитывает последнее слово,
	// после которого нет разделителей
	return lastDividerPosition == text.length - 1 ? wordsCounter : wordsCounter + 1;
	/*
	последняя строка эквивалентна
	if (lastDividerPosition == text.length - 1) return wordsCounter;
	else return wordsCounter + 1;

	что в свою очередь можно упростить до:
	if (lastDividerPosition == text.length - 1) return wordsCounter;
	return wordsCounter + 1;
	*/
}