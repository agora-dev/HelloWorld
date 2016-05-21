'use strict';

const sentences = [
    { subject: 'Python', verb: 'is', object: 'great' },
    { subject: 'Monkey', verb: 'is', object: 'funny' }
];

function say({subject, verb, object}) {
    console.log(`${subject} ${verb} ${object}`);
}

for (let s of sentences) {
    say(s);
}