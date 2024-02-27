const getStoredDonation = () =>{
    const storedDonation = localStorage.getItem('donations');
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}
const saveDonation = id =>{
    const storedDonations = getStoredDonation();
    const exists = storedDonations.find(jobId => jobId === id);
    if(!exists){
        storedDonations.push(id);
        localStorage.setItem('donations', JSON.stringify( storedDonations))
    }
}

export { getStoredDonation, saveDonation};