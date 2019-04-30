Jisho('wordlist.json')

async function Jisho(wordlist) {
    let words = await fetch(wordlist);
    words = await words.json();
    words = words.filter(word => word.l == 'High Lulani');
    words.forEach(word => word.n = FIRST(word.m));
    let jisho = `<dl>${words.map(
            word => `<dt>${word.t}</dt><dd><em>${POS(word)}</em> ${word.n}</dd>`
        ).join('\n')}</dl>`
    words.forEach(word => word.q = STRIP(word.n));
    words.sort((a, b) => a.q > b.q ? 1 : a.q < b.q ? -1 : 0);
    jisho += `<dl>${words.map(
            word => `<dt>${word.n}</dt><dd><em>${POS(word)}</em> ${word.t}</dd>`
        ).join('\n')}</dl>`
    const destination = document.getElementById('jisho');
    destination.innerHTML = jisho;
}

const LEMMA = word => STRIP(FIRST(word));
const STRIP = word => word.replace(/^(to )*(be )*(.*?)/, '$3');
const SAVE = word => word.replace(/&(.*?);/g, '&$1&&&').replace(/;/g, '&sem;')
                            .replace(/&(.*?)&&&/g, '&$1;')
const FIRST = word => SAVE(word).split('&sem;')[0];

const POS = word => {
    if (word.p.includes('pronoun') || word.p.includes('pro-form')) {return 'pro.' }
    else if (word.p.includes('noun')) {
        if (word.p.includes('proper')) {pos = 'np.'}
        else if (word.p.includes('animate')) {pos = 'na.'}
        else if (word.p.includes('inanimate')) {pos = 'ni.'}
        else pos = 'n.';
        return word.p.includes('mass') ? pos + ' (mass)' : pos;
    }
    else if (word.p.includes('verb')) {
        if (word.p.includes('intransitive')) {return 'vi.'}
        else if (word.p.includes('transitive')) {return 'vt.'}
        else if (word.p.includes('ambitransitive')) {return 'vi./vt.'}
        else return 'v.'
    }
    else if (word.p.includes('adposition')) {return 'adpos.' }
    else if (word.p.includes('modal')) {return 'mod. adv.' }
    else if (word.p.includes('adverb')) {return 'adv.' }
    else if (word.p.includes('interjection')) {return 'inj.' }
    else if (word.p.includes('subordinating')) {return 'sub. conj.' }
    else if (word.p.includes('conjunction')) {return 'sub. conj.' }
    else if (word.p.includes('auxiliary')) {return 'aux.' }
    else if (word.p.includes('suffix')) {return 'suff.' }
    else if (word.p.includes('particle')) {return 'part.' }
    else if (word.p.includes('determiner')) {return 'det.' }
    else if (word.p.includes('cardinal')) {return 'num.' }
    else if (word.p.includes('ordinal')) {return 'num.' }
    else if (word.p.includes('mathematics')) {return 'math.' }
    else return word.p.join(' ');
}
