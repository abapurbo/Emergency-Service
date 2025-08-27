const cards = [
    { numberCategory: 'National Emergency Number', serviceName: 'National Emergency', number: "999", serviceImg: './assets/emergency.png', serviceCategory: 'All' },
    { numberCategory: 'Police Helpline Number', serviceName: 'Police', number: "999", serviceImg: './assets/police.png', serviceCategory: 'Police' },
    { numberCategory: 'Fire Service Number', serviceName: 'Fire Service', number: "999", serviceImg: './assets/fire-service.png', serviceCategory: 'Fire' },
    { numberCategory: 'Ambulance Service', serviceName: 'Ambulance', number: "1994-999999", serviceImg: './assets/ambulance.png', serviceCategory: 'Health' },
    { numberCategory: 'Women & Child Helpline', serviceName: 'Women & Child Helpline', number: "109", serviceImg: './assets/emergency.png', serviceCategory: 'Help' },
    { numberCategory: 'Anti-Corruption Helpline', serviceName: 'Anti-Corruption', number: "106", serviceImg: './assets/emergency.png', serviceCategory: 'Govt.' },
    { numberCategory: 'Electricity Helpline', serviceName: 'Electricity Outage', number: "16216", serviceImg: './assets/emergency.png', serviceCategory: 'Electricity' },
    { numberCategory: 'Brac Helpline', serviceName: 'Brac', number: "16445", serviceImg: './assets/emergency.png', serviceCategory: 'NGO' },
    { numberCategory: 'Bangladesh Railway Helpline ', serviceName: 'Bangladesh Railway', number: "163", serviceImg: './assets/emergency.png', serviceCategory: 'Travel' }
];

const serviceCard = document.getElementById('card-parent');
// card add in cards section    
cards.forEach((card, index) => {
    const div = document.createElement('div');
    div.innerHTML = ` 
     <div class="bg-white shadow-lg w-[270px] h-[290px] rounded-xl p-4">
        <div class="h-full flex flex-col">
            <div>
                <p class="flex justify-between items-center mb-3">
                    <img class="${card.serviceCategory == 'Police' ? 'w-12 rounded-xl p-3 bg-[#DFEFFF]' : 'w-12 rounded-xl p-3 bg-[#FFE3E2]'}" 
                         src=${card?.serviceImg} alt="emergency image">
                    <i onclick="countHeard()" class="fa-solid fa-heart text-gray-300 hover:text-red-500 cursor-pointer text-xl"></i>
                </p>
                <h1 class="text-[17px] font-bold">${card?.numberCategory}</h1>
                <h3 class="text-[15px] text-[#5C5C5C]">${card?.serviceName}</h3>
            </div>

            <div class="flex-auto mt-3">
                <h1 class="text-2xl font-bold mb-2">${card?.number}</h1>
                <p class="px-4 py-1 text-[16px] text-gray-600 rounded-3xl bg-gray-200 w-fit">${card?.serviceCategory}</p>
            </div>

            <div class="flex items-center space-x-2">
                <button onclick="copyNumber('${card.number}')" 
                        class="btn flex-1 btn-outline text-[16px] border border-gray-400">
                    <i class="fa-regular fa-copy"></i> Copy
                </button>
                
                <a href="tel:${card.number}" 
                   id="service-call-${index+1}" 
                   class="bg-[#00A63E] flex-1 text-white btn text-center">
                    <i class="fa-solid fa-phone-volume text-white"></i> Call
                </a>
            </div>
        </div>
    </div>`;
    
    serviceCard.appendChild(div);
});

