/* const loadAllData = async () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((allData) => allData.json())
    .then((viewData) => rcvData(viewData.data))
} */

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