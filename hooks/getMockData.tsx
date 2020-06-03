import React from 'react';
import data from '../src/mocks/mock.json'

const useGetMockData = () => {
    const [mockData, setMockData] = React.useState([])
    React.useEffect(() => {
        setMockData(data)
    }, [])
    return mockData.shops
}

export default useGetMockData