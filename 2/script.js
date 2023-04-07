const text = '<div id="text">Очищенная<br /> строка<img /></div>';
function deleteTags(str) {
 return str.replace(/(\<(\/?[^>]+)>)/gi, '');
};
console.log(deleteTags(text));