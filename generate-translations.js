import fs from 'fs';
import path from 'path';

const API_KEY = 'AIzaSyDgyWwwmHOROsPZclCm-LGzZs_uoYNhVDk';
const URL = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;

const languages = [
    'en', 'es', 'fr', 'pt', 'de', 'ar', 'hi', 'bn', 'zh-CN', 'ja',
    'id', 'tr', 'vi', 'ko', 'ru', 'it', 'pl', 'th', 'tl'
];

const enObj = {
    "intro": {
        "title": "Activities You Enjoy",
        "subtitle": "Rediscovering Joyful Moments",
        "p1": "When you're feeling low, anxious, or overwhelmed, it can be hard to remember what brings you joy.",
        "p2": "This activity is not about doing more. It is about noticing small moments that feel light, calm, or meaningful.",
        "p3": "There is no pressure to feel happy. We are simply exploring what feels even slightly good.",
        "button": "Begin"
    },
    "recall": {
        "title": "Think About a Moment",
        "p1": "Take a moment to remember a time — recent or distant — when you felt even a small sense of enjoyment, peace, or comfort. It does not have to be big.",
        "input1_label": "One activity I enjoy (or used to enjoy) is...",
        "input1_placeholder": "e.g. walking in the park",
        "input2_label": "When I do this, I usually feel...",
        "input2_placeholder": "e.g. calm and present",
        "button": "Continue"
    },
    "meaning": {
        "title": "What Makes It Meaningful?",
        "p1": "Sometimes the activity itself is not the only source of joy. It may be the feeling, the environment, or the connection around it.",
        "input1_label": "I enjoy this because...",
        "input1_placeholder": "e.g. it gives me a sense of freedom",
        "input2_label": "This activity helps me feel more...",
        "input2_placeholder": "e.g. connected and grounded",
        "input3_label": "It reminds me of...",
        "input3_placeholder": "e.g. summers as a child",
        "button": "Save My Reflection"
    },
    "smallStep": {
        "title": "A Small Step Forward",
        "p1": "You do not need to change everything at once.",
        "p2": "Would it feel possible to reconnect with this activity in a small way?",
        "input1_label": "One small step I could take this week is...",
        "input1_placeholder": "e.g. go for a 10-minute walk",
        "button_save": "Save",
        "button_home": "Go to Home"
    },
    "affirmation": {
        "title": "You Took a Beautiful Step",
        "p1": "Reconnecting with what brings you joy — even in the smallest way — is an act of kindness toward yourself.",
        "p2": "You deserve moments of lightness and peace. Keep nurturing what makes your heart feel full. 💛",
        "button": "Back to Home"
    }
};

async function translateText(text, targetLang) {
    if (targetLang === 'en') return text;
    try {
        const res = await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ q: text, target: targetLang, format: 'text' })
        });
        const data = await res.json();
        return data.data.translations[0].translatedText;
    } catch (e) {
        console.error(`Failed to translate: ${text}`, e);
        return text; // fallback to original
    }
}

async function translateObject(obj, targetLang) {
    if (targetLang === 'en') return obj;
    const newObj = {};
    for (const [k, v] of Object.entries(obj)) {
        if (typeof v === 'string') {
            newObj[k] = await translateText(v, targetLang);
        } else if (typeof v === 'object' && v !== null) {
            newObj[k] = await translateObject(v, targetLang);
        } else {
            newObj[k] = v;
        }
    }
    return newObj;
}

async function run() {
    for (const lang of languages) {
        const root = path.join(process.cwd(), 'public', 'locales', lang);
        if (!fs.existsSync(root)) {
            fs.mkdirSync(root, { recursive: true });
        }

        console.log(`Translating to ${lang}...`);
        const translated = await translateObject(enObj, lang);
        fs.writeFileSync(path.join(root, 'translation.json'), JSON.stringify(translated, null, 2));
    }
    console.log('Translations generated.');
}

run();
