const countHeard = () => {
    const countHeart = document.getElementById('count-heart');
    const perviouCountHeart = parseInt(countHeart.innerText)
    console.log(perviouCountHeart)
    countHeart.innerText = perviouCountHeart + 1;

}

// service call button
const callHistory = document.getElementById("call-history");
const callLists = []
const serviceCallButton = (numberId, serviceNameId) => {
    const serviceName = document.getElementById(serviceNameId).innerText;
    const serviceNumber = document.getElementById(numberId).innerText;
    const serviceCoin = document.getElementById("service-coin");
    const coinValue = parseInt(serviceCoin.innerText)

    const date = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    })
    if (numberId && serviceNameId && coinValue >= 20) {
        alert(`📞 Caling ${serviceName} on ${serviceNumber}...`)
        callLists.push({ serviceName: serviceName, serviceNumber: serviceNumber, time: date })
        serviceCoin.innerText = coinValue - 20;

        const historyDiv = document.createElement("div");
        for (const call of callLists) {
            historyDiv.innerHTML = `<div class="bg-gray-100 p-2 rounded-sm flex justify-between items-center ">
                        <div>
                            <h1 class="font-bold text-[16px] w-46">${call?.serviceName}</h1>
                            <h2 class="text-[14px]">${call?.serviceNumber}</h2>
                        </div>
                        <p class="lg:text-[14px] text-[10px]">${call?.time}</p>
                    </div>`
            callHistory.appendChild(historyDiv)
        }
    }
    else {
        alert("😔 You don't have enough coins to make a call. Please recharge your coins to proceed.")
    }
    //call history show in UI




}
// clear  call history
document.getElementById("clear-history").addEventListener("click", function () {
    callHistory.textContent = " ";
    callLists.length = 0
})

// copy button
const copyButton = (copyNumberId) => {
    const countCopy=document.getElementById('count-copy');
    const perviousCountCopy=parseInt(countCopy.innerText);
    countCopy.innerText=perviousCountCopy+1;
    const copynumber =document.getElementById(copyNumberId).innerText;
    navigator.clipboard.writeText(copynumber);
    alert(`📋 Copied the text: ${copynumber}`);


}