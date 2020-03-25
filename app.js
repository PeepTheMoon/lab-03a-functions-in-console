console.log('hello world');

document.body.style.color = 'purple';

const vanilla = { name: 'Vanilla', popularity: 5 };

const orangeSherbert = { name: 'Orange Sherbert', popularity: 7 };

const strawberry = { name: 'Strawberry', popularity: 6 };

const coffeeMocha = { name: 'Coffee Mocha', popularity: 8 };

const chocolate = { name: 'Chocolate', popularity: 10 };

const spumoni = { name: 'Spumoni', popularity: 10 };

const iceCreamFlavors = [vanilla, orangeSherbert, strawberry, coffeeMocha, chocolate, spumoni];

function logOutThings() {
    console.log('Here are your', iceCreamFlavors.length, 'things!');
    for (let i = 0; i < iceCreamFlavors.length; i++) {
        console.log(iceCreamFlavors[i]);
    };
};

logOutThings();
