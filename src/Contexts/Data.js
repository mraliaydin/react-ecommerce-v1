import { createContext, useEffect, useState } from 'react';
import axios from 'axios';


//Actual value to access
export const DataContext = createContext({
    data: [], brandNames: [], sortByCreatedAtAscending: () => null, sortByCreatedAtDescending: () => null,
    sortByPriceDescending: () => null, sortByPriceAscending: () => null, filterByBrandByLetter: () => null, filterByBrand: () => null
});

//The provider for the data
export const DataProvider = ({ children }) => {
    //here is where you set the initial value of the context.

    const [data, setData] = useState(null);
    const [brandNames, setBrandNames] = useState(null);
    const [filteredBrandNames, setFilteredBrandNames] = useState(null)
    const [filteredData, setFilteredData] = useState(null)


    useEffect(() => {
        axios
            .get("https://5fc9346b2af77700165ae514.mockapi.io/products")
            .then((response) => {
                setData(response.data);
                setFilteredData(response.data);
                const tempBrandNames = [
                    ...new Set(response.data.map((item) => item.brand)),
                ];
                setBrandNames(tempBrandNames);
                setFilteredBrandNames(tempBrandNames)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    const sortByCreatedAtAscending = () => {
        const newData = data.sort(function (a, b) {
            return new Date(a.createdAt) - new Date(b.createdAt);
        })
        console.log("ascending")
        setFilteredData([...newData]);
    }

    const sortByCreatedAtDescending = () => {
        const newData = data.sort(function (a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
        console.log("descending")
        setFilteredData([...newData]);
    }

    const sortByPriceDescending = () => {
        const newData = data.sort(function (a, b) {
            return b.price - a.price;
        });
        setFilteredData([...newData]);
    }

    const sortByPriceAscending = () => {
        const newData = data.sort(function (a, b) {
            return a.price - b.price;
        });
        setFilteredData([...newData]);
    }


    const filterByBrandByLetter = (value) => {
        const newData = brandNames.filter((name) =>
            name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredBrandNames([...newData]);
    };





    const filterByBrand = (brandName) => {
        if (brandName == null) {
            setFilteredData([...data])
        }
        else {
            const newData = data.filter(function (item) {
                return item.brand === brandName;
            });
            setFilteredData([...newData])
        }
    };



    const value = { data: filteredData, brandNames: filteredBrandNames, sortByCreatedAtAscending, sortByCreatedAtDescending, sortByPriceDescending, sortByPriceAscending, filterByBrandByLetter, filterByBrand };
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};