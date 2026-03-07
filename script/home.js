const loadAllData = async () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((allData) => allData.json())
    .then((viewData) => rcvData(viewData.data))
}

const btnAll = document.getElementById("btn-all");
const btnOpen = document.getElementById("btn-open");
const btnClosed = document.getElementById("btn-closed");

const all = document.getElementById("all");
const openn = document.getElementById("open");
const closed = document.getElementById("closed");

const allCount = document.getElementById("all-issues-count");
const openCount = document.getElementById("open-issues-count");
const closedCount = document.getElementById("closed-issues-count");

const btnClickHandler = (btnClicked) => {
    btnAll.classList.remove('bg-primary','text-white');
    btnOpen.classList.remove('bg-green-500','text-white');
    btnClosed.classList.remove('bg-purple-600','text-white');

    allCount.classList.add('hidden');
    openCount.classList.add('hidden');
    closedCount.classList.add('hidden');

    all.classList.add('hidden');
    openn.classList.add('hidden');
    closed.classList.add('hidden');

    if(btnClicked === 'btn-all'){
        btnAll.classList.add('bg-primary','text-white');
        allCount.classList.remove('hidden');
        all.classList.remove('hidden');
    }
    else if(btnClicked === 'btn-open'){
        btnOpen.classList.add('bg-green-500','text-white');
        openCount.classList.remove('hidden');
        openn.classList.remove('hidden');
    }
    else if(btnClicked === 'btn-closed'){
        btnClosed.classList.add('bg-purple-600','text-white');
        closedCount.classList.remove('hidden');
        closed.classList.remove('hidden');
    }
}

const rcvData = (allData) => {
    allData.forEach(item => {
        if (item.status === "open"){
            const div = document.createElement('div');
            div.className = 'card-open';
            div.innerHTML = `
                <div class="px-[8px] flex flex-col gap-2">
                    <div class="flex justify-between items-center">
                        <img src="../assets/Open-Status.png" alt="">
                        <p id="priority-${item.id}" class="all text-[9px] font-semibold px-3 py-[3px] rounded-lg">${item.priority}</p>
                    </div>
                    <h2 class="text-[14px]">${item.title}</h2>
                    <p class="text-[10px] opacity-[0.7]">${item.description}</p>
                    <div class="labels flex gap-2">
                    </div>
                </div>
                <hr class="opacity-[0.3] mt-4 mb-4">
                <div class="px-[8px]">
                    <p class="text-[10px] opacity-[0.7]">#1 by john_doe</p>
                    <p class="text-[10px] opacity-[0.7]">1/15/2024</p>
                </div>
            `
            all.appendChild(div);
        }
        else if (item.status === "closed"){
            const div = document.createElement('div');
            div.className = 'card-closed';
            div.innerHTML = `
                <div class="px-[8px] flex flex-col gap-2">
                    <div class="flex justify-between items-center">
                        <img src="../assets/Closed- Status .png" alt="">
                        <p id="priority-${item.id}" class="all text-[9px] text- font-semibold px-3 py-[3px] rounded-lg">${item.priority}</p>
                    </div>
                    <h2 class="text-[14px]">${item.title}</h2>
                    <p class="text-[10px] opacity-[0.7]">${item.description}</p>
                    <div class="labels flex gap-2">
                    </div>
                </div>
                <hr class="opacity-[0.3] mt-4 mb-4">
                <div class="px-[8px]">
                    <p class="text-[10px] opacity-[0.7]">#1 by john_doe</p>
                    <p class="text-[10px] opacity-[0.7]">1/15/2024</p>
                </div>
            `
            all.appendChild(div);
        }
    });

    allData.forEach(item => {
        if (item.status === "open"){
            const div = document.createElement('div');
            div.className = 'card-open';
            div.innerHTML = `
                <div class="px-[8px] flex flex-col gap-2">
                    <div class="flex justify-between items-center">
                        <img src="../assets/Open-Status.png" alt="">
                        <p id="priority-${item.id}" class="all text-[9px] font-semibold px-3 py-[3px] rounded-lg">${item.priority}</p>
                    </div>
                    <h2 class="text-[14px]">${item.title}</h2>
                    <p class="text-[10px] opacity-[0.7]">${item.description}</p>
                    <div class="labels flex gap-2">
                    </div>
                </div>
                <hr class="opacity-[0.3] mt-4 mb-4">
                <div class="px-[8px]">
                    <p class="text-[10px] opacity-[0.7]">#1 by john_doe</p>
                    <p class="text-[10px] opacity-[0.7]">1/15/2024</p>
                </div>
            `
            openn.appendChild(div);
        }
        else if (item.status === "closed"){
            const div = document.createElement('div');
            div.className = 'card-closed';
            div.innerHTML = `
                <div class="px-[8px] flex flex-col gap-2">
                    <div class="flex justify-between items-center">
                        <img src="../assets/Closed- Status .png" alt="">
                        <p id="priority-${item.id}" class="all text-[9px] text- font-semibold px-3 py-[3px] rounded-lg">${item.priority}</p>
                    </div>
                    <h2 class="text-[14px]">${item.title}</h2>
                    <p class="text-[10px] opacity-[0.7]">${item.description}</p>
                    <div class="labels flex gap-2">
                    </div>
                </div>
                <hr class="opacity-[0.3] mt-4 mb-4">
                <div class="px-[8px]">
                    <p class="text-[10px] opacity-[0.7]">#1 by john_doe</p>
                    <p class="text-[10px] opacity-[0.7]">1/15/2024</p>
                </div>
            `
            closed.appendChild(div);
        }
    });

    const py = document.querySelectorAll(".all");
    for (let p of py){
        if (p.innerHTML === "high"){
                p.classList.add('bg-red-100','text-red-500');
                p.innerHTML = 'HIGH';
        }
        else if (p.innerHTML === "medium"){
            p.classList.add('bg-orange-100','text-orange-500');
            p.innerHTML = 'MEDIUM'
        }
        else if(p.innerHTML === "low"){
            p.classList.add('bg-gray-200','text-gray-500');
            p.innerHTML = 'LOW'
        }
    }

    /* count data */
    allCount.innerHTML = all.children.length;
    openCount.innerHTML = openn.children.length;
    closedCount.innerHTML = closed.children.length;
}

loadAllData();