export const handleCollapse = (idList) => {
    idList.forEach(id => {
        document.getElementById(id).classList.toggle("collapsed");
    })
};
