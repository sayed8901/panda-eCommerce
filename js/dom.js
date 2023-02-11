// 2. setting all h2 color to blue instead of lightblue
const allH2 = document.getElementsByTagName('h2');
for(const h2 of allH2){
    h2.style.color = 'blue';
}

// 3. changing bg color to tomato to the backpack id section
const backpackSection = document.getElementById('backpack');
backpackSection.style.backgroundColor = 'tomato';

// 4. setting up 30px border-radius to to all the card classes
const allCards = document.getElementsByClassName('card');
for(const card of allCards){
    card.style.borderRadius = '30px';
}

// 5. adding an event handler function to a button on click
function console(){
    document.getElementById('button-event').style.backgroundColor = 'yellowgreen';
}

// 7. after making the submit button disabled, if you type exactly 'email' in the input field, then it will be active.
document.getElementById('exampleInputEmail1').addEventListener('keyup', function (event){
    const sampleText = event.target.value;
    const submitButton = document.getElementById('submit-btn');
    if(sampleText === 'email'){
        submitButton.removeAttribute('disabled');
    }
    else{
        submitButton.setAttribute('disabled', true);
    }
})

// 8. when mouse enters on the shoe image, it will transform to 1.25 scale & whet mouse outs it will become normal.
const targetImage = document.getElementById('image-change');
targetImage.addEventListener('mouseenter', function(){
    targetImage.style.transform = 'scale(1.25)';
})
targetImage.addEventListener('mouseout', function(){
    targetImage.style.transform = 'scale(1)';
})

// 9. change the background color on double click
document.getElementById('temp-gb-color').addEventListener('dblclick', function(){
    document.getElementById('subscribe').style.backgroundColor = 'yellow';
})

// 6. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে card টা ওয়েবসাইট থেকে রিমুভ হয়ে যায়।

