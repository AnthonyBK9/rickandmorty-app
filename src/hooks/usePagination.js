import { useState } from "react";
import useLocation from "./useLocation";

const usePagination = () => {
    const { dimension } = useLocation();
    const [currentPage, setCurrentPage] = useState(1);

    let arrayResidents = [];
    const residentPerPage = 8;
    if(dimension?.residents?.length < residentPerPage) {
        arrayResidents = [...dimension?.residents]
    } else {
        const lastResident = currentPage * residentPerPage
        arrayResidents = dimension?.residents?.slice(lastResident - residentPerPage, lastResident)
    }
    let arrayPages = []
    let quantityPages = Math.ceil(dimension?.residents?.length / residentPerPage) // 11 = cantidad paginas máximas
    const pagesPerBlock = 5
    let currentBlock = Math.ceil(currentPage / pagesPerBlock) // 2 = segundo bloque
    // Analiza si estamos en el último(true) o no(false)
    if(currentBlock * pagesPerBlock >= quantityPages){
        // Cuando es el último bloque
        for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages ;i++) {
        arrayPages.push(i)
        }
    } else {
        // cuando no es el último bloque
        for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock;i++){
        arrayPages.push(i)
        }
    }


  return { arrayResidents, arrayPages, currentPage, setCurrentPage, quantityPages }
}

export default usePagination