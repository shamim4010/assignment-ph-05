const loadAllData = async () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((allData) => allData.json())
    .then((viewData) => rcvData(viewData.data))
}

const rcvData = (rcvAllData) => {
    
}

loadAllData()