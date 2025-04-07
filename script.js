import jsonData from './data.json' with {type: "json"};

let section_2 = document.querySelector('.cards');
let section_2_cards = document.querySelector('#section-2-part-2 .card-container');
let mid_nav = document.querySelector('.mid-nav');
let sec = document.querySelector('.section-2');

let filtered_data= jsonData;
let filtered_input = document.getElementById('search-input-box');


let filtered_data_2 = jsonData;
let filtered_input_2 = document.getElementById('search-filter') ;

function threeLines(text, maxLength = 100) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}


const display_service_data = (filtered_data) =>
    {
        console.log(filtered_data);
        let str = filtered_data.map(elem =>

       

     `<div class="card1">
                <div class="heading">
                    <p class="p">${elem.service_name}</p>
                    <p>${threeLines(elem.service_description)}</p>
                </div>
                <div class="line"></div>
                <div class="bottom">
                    <div class="button-1">${elem.practice_name}</div>
                    <div class="button-2">Starting from <span class="price">&#8377;  ${elem.price}</span></div>
                </div>
            </div>`).join('');


section_2.innerHTML = str;

}






let filter_data = () => {
    const service_input_text = filtered_input.value.toLowerCase();
   
    if (service_input_text === "") {
        // agar input box empty hai , restore the original data
        filtered_data = jsonData;
    } else {
        filtered_data = jsonData.filter((value) =>
            value.service_name.toLowerCase().includes(service_input_text)
        );
    }
 
    display_service_data(filtered_data);
};
 
 
filtered_input.addEventListener("input", filter_data)
console.log(filter_data);
 
display_service_data(jsonData)









let Part_1_cards = document.querySelectorAll('.cards .card1');




Part_1_cards.forEach(function(elem){
    let isSelected = false;
    elem.addEventListener("click", function(){
        if (!isSelected) {
           //  elem.style.border = `1px solid #ffb938`;
            mid_nav.style.flexDirection = 'column';
        
            section_2_cards.style.flexDirection = 'column';
            section_2.style.width='100%';
          
            sec.style.display = 'flex';
           sec.style.flexDirection = 'row';


            Part_1_cards.forEach(function(card1){
                card1.style.width = '100%';
            
            });

            let div2 = document.getElementById("section-2-part-2");
            console.log(div2);
            div2.style.display = "block";
        } else {
            //elem.style.border = `1px solid #d4d4d4`;
            section_2_cards.style.flexDirection = 'row';
           
            section_2.style.width = '100%';
            document.querySelector('.mid-nav').style.flexDirection = 'row';
            Part_1_cards.forEach(function(card){
                card.style.width = '32.5%';
            });
        }
        isSelected = !isSelected;
    });
});



// let section_2 = document.getElementById('service-section'); // Ensure this exists in your HTML

const display_service_data_2 = (filtered_data_2) => {
    console.log(filtered_data_2);
    let str2 = filtered_data_2.map(elem2 =>
        `<div class="card">
            <div class="left-side">
                <h2>${elem2.service_name}</h2>
                <p>${elem2.service_description}</p>
                <div class="reviews">
                    <img src="zarthiassets/Frame (3).svg" alt="">
                    <h4>100+ Successful Deliveries</h4>
                    <h4 id="review">12 Reviews</h4>
                    <img src="zarthiassets/external-link 1.svg" alt="">
                </div>
            </div>
            <div class="right-side">
                <h3>&#8377; ${elem2.price} <span>/ wireframe</span></h3>
                <h4>Avg. SLA 12hr</h4>
                <button>Request </button>
            </div>
        </div>`
    ).join('');

    section_2_cards.innerHTML = str2; // Corrected line
};

let filter_data_2 = () => {
    const service_input_text_2 = filtered_input_2.value.toLowerCase();

    if (service_input_text_2 === "") {
        // Restore the original data if input is empty
        filtered_data_2 = jsonData;
    } else {
        filtered_data_2 = jsonData.filter(value =>
            value.service_name.toLowerCase().includes(service_input_text_2)
        );
    }

    display_service_data_2(filtered_data_2);
};

filtered_input_2.addEventListener("input", filter_data_2);

console.log(filter_data_2); // Fixed function name

display_service_data_2(jsonData);































section_2_cards.innerHTML = str2;
let allCard = document.querySelectorAll('.card');

// allCard.forEach(function (card) {
//     card.addEventListener("click", function () {
//         console.log("click");
//         let div2 = document.getElementById("section-2-part-2");
//         div2.style.display = "flex";
//     });
// });

 
 
allCard.addEventListener("click", function () {
    console.log("click");
    let div2 = document.getElementById("section-2-part-2");
    div2.style.display = "flex"; // 
});
 


