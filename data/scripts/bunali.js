let sep = 'a';

async function bunali() {
    let words = await fetch("wordlist.json");
    words = await words.json()
    words = words.filter(word => word.l == "High Lulani");
    words.forEach(word => word.bunali = rhyme(word.t));
    words.sort((a, b) => a.bunali.localeCompare(b.bunali));
    document.getElementsByClassName('bunali')[0].innerHTML =
        words.map(word => `${separate(word.bunali)}${word.t} &ndash; <em>${word.m}</em><br>`).join('');
}

function rhyme(word) {
    return word.replace(/&rsquo;/g, 'z').replace(/&#294;/g, 'zz')
               .replace(/(\w)\1/g, ';').replace(/[^aiu;]/g, '')
}

function separate(word) {
    let old = sep;
    sep = word;
    return old != word ? '<hr>' : '';
}
