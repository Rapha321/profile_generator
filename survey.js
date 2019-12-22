const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let result = "";


rl.question('What\'s your name? Nicknames are also acceptable :) ', (ansName) => {
  rl.question('What\'s an activity you like doing?', (ansActivity) => {
    rl.question('What do you listen to while doing that?', (ansMusic) => {
      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.)', (ansMeal) => {
        rl.question('What\'s your favourite thing to eat for that meal?', (ansThingToEat) => {
          rl.question('Which sport is your absolute favourite?', (ansSport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (ansSuperpower) => {
                console.log(`Hello everyone. My name is ${ansName}.
                             I like playing ${ansActivity} while listening to ${ansMusic}.
                             My favorite meal is ${ansMeal} and my favorite thing for that meal is ${ansThingToEat}
                             My absolute favorite sport if ${ansSport}.
                             My superpower of ${ansSuperpower}.`
                            )
              rl.close();
            })
          });
        });
      });
    });
  });
});










