import { Dropdown } from 'monday-ui-react-core';
import { useEffect, useState, useCallback } from 'react'
import ApiService from '../../../services/ApiService'

function LocationFilter({ }) {

    const [citiesList, setCitiesList] = useState([
        {value: "All locations", label: "All locations"}
    ]);

    useEffect(() => {
        fetchCities();
    }, []);

    const fetchCities = useCallback(
        async () => {
            const cities = await ApiService.getCities()
            const citiesOptions = cities.map(city => {
                return {value: city.name, label: city.name}
            })
            setCitiesList(value => [...value, ...citiesOptions]);
        }, []);

    return (
        <div style={{ width: "40%", marginRight: "15px" }}>
            <Dropdown
                options={citiesList}
                defaultValue={citiesList[0]}
                //onChange={}
                clearable={false}
                className={"dropdown-stories-styles_big-spacing"} />
        </div>
    );
}

export default LocationFilter