import React, {useState, useEffect} from 'react'
import "./ProductListingPageWithFilters.css"
import {productListFiltersDataObj} from "./constant"
import NavBar from './Components/NavBar'
import FilterSection from './Components/FIlterSection'
import ProductList from './Components/ProductList'

const updatingCurrentFilterHandler=({selectedFilters, setSelectedFilters, parentFilterKey, childFilterkey, isSelected}) => {
    let tempSelectedFilters={}

    if (selectedFilters[parentFilterKey]) {
        if (isSelected) {
            let filterValues=selectedFilters[parentFilterKey]
            filterValues=filterValues+','+childFilterkey
            tempSelectedFilters={
                ...selectedFilters,
                [parentFilterKey]: filterValues
            }
        } else {
            let filterValues=selectedFilters[parentFilterKey]
            filterValues=filterValues.split(',').filter((filter) => filter!==childFilterkey).join(',')
            tempSelectedFilters={
                ...selectedFilters,
                [parentFilterKey]: filterValues
            }
        }
        const filterValues=tempSelectedFilters[parentFilterKey]
        if (filterValues.length<=0) {
            delete tempSelectedFilters[parentFilterKey]
        }
    } else {
        tempSelectedFilters={
            ...selectedFilters,
            [parentFilterKey]: childFilterkey
        }
    }

    setSelectedFilters(tempSelectedFilters)

    return tempSelectedFilters
}

const filterProductListHandler=({tempSelectedFilters, productListFiltersDataObj, setProductListData, }) => {
    if (Object.keys(tempSelectedFilters).length<=0) {
        setProductListData(productListFiltersDataObj.products)
    } else {
        let filteredProductsList=productListFiltersDataObj.products
        let tempFilteredProductsList=[]

        Object.entries(tempSelectedFilters).forEach(([key, filteredString]) => {
            const filterValues=filteredString.split(',')
            filteredProductsList.forEach((product) => {
                if (filterValues.includes(product.filters[key])) {
                    tempFilteredProductsList.push(product)
                }
            })
            filteredProductsList=JSON.parse(JSON.stringify(tempFilteredProductsList))
            tempFilteredProductsList=[]
        })
        setProductListData(filteredProductsList)
    }
}

const getEncodedQueryString=(query) => {
    return Object.keys(query).map((key) => encodeURIComponent(key)+'='+encodeURIComponent(query[key])).join('&')
}

const getQueryObjectFromUrl=(queryString) => {
    const urlParams=new URLSearchParams(queryString)
    const paramsObj=Object.fromEntries(urlParams)
    console.log("paramsObj>>>>>", paramsObj);
    return paramsObj
}

const addFiltersInUrl=(currentFilters) => {
    const newUrl=window.location.pathname+'?'+getEncodedQueryString(currentFilters)
    window.history.pushState({}, '', newUrl)
}

const setFiltersFromUrlHandler=({params={}, setFilterData}) => {
    const filterData=productListFiltersDataObj.filters
    const tempFilterData=filterData.values.map((filters) => {
        if (Object.hasOwn(params, filters.key)) {
            const filterValues=params[filters.key].split(',')
            const updatedChildFiltersList=filters.values.map((ele) => {
                if (filterValues.includes(ele.key)) {
                    return {
                        ...ele,
                        selected: true
                    }
                } else {
                    return ele
                }
            })
            return {
                ...filters,
                values: updatedChildFiltersList
            }
        } else {
            return filters
        }
    })
    setFilterData({...filterData, values: tempFilterData})
}

function ProductListingPageWithFilters() {
    const [filterData, setFilterData]=useState({})
    const [productListData, setProductListData]=useState(productListFiltersDataObj.products)
    const [selectedFilters, setSelectedFilters]=useState(getQueryObjectFromUrl(location.search)||{})

    const filterHandler=({parentFilterKey, childFilterkey, isSelected}) => {
        const tempFilterData=filterData.values.map((filters) => {
            if (filters.key===parentFilterKey) {
                const updatedChildFiltersList=filters.values.map((ele) => {
                    if (ele.key===childFilterkey) {
                        return {
                            ...ele,
                            selected: isSelected
                        }
                    } else {
                        return ele
                    }
                })
                return {
                    ...filters,
                    values: updatedChildFiltersList
                }
            } else {
                return filters
            }
        })
        setFilterData({...filterData, values: tempFilterData})

        const tempSelectedFilters=updatingCurrentFilterHandler({selectedFilters, setSelectedFilters, parentFilterKey, childFilterkey, isSelected})

        filterProductListHandler({tempSelectedFilters, productListFiltersDataObj, setProductListData})

        addFiltersInUrl(tempSelectedFilters)
    }

    useEffect(() => {
        const params=getQueryObjectFromUrl(location.search)
        if (Object.keys(params).length>0) {
            setFiltersFromUrlHandler({params, setFilterData})
            filterProductListHandler({tempSelectedFilters: params, productListFiltersDataObj, setProductListData})
        } else {
            setFilterData(productListFiltersDataObj.filters)
        }
    }, [])


    return (
        <React.Fragment>
            <NavBar />
            <div style={{display: "flex"}} >
                <div className='filterSectionContainer' >
                    <FilterSection filterData={filterData} onClickHandler={filterHandler} />
                </div>
                <div className='productListContainer'>
                    <ProductList productList={productListData} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductListingPageWithFilters
