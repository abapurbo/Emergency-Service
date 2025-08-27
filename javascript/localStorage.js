const getLocalStorage = () => {
    const storageDate = localStorage.getItem('call-history');
    const callHistory = JSON.parse(storageDate);
    if (callHistory) {
        return callHistory
    }
    return []
}
const setLocalStorage = (call) => {
    const callHistory = getLocalStorage();
    callHistory.push(call);
    localStorage.setItem("call-history", JSON.stringify(callHistory));

}
const removeLocalStorage = () => {
    localStorage.removeItem("call-history");
}
export { getLocalStorage, setLocalStorage,removeLocalStorage }