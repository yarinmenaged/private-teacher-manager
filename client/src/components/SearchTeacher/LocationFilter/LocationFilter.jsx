import { Dropdown } from 'monday-ui-react-core';
import { useEffect, useState, useCallback } from 'react'
import ApiService from '../../../services/ApiService'

function LocationFilter({ chooseLocationAction, chosenLocation }) {

    const [citiesList, setCitiesList] = useState([
        { value: "All locations", label: "All locations" }
    ]);

    useEffect(() => {
        fetchCities();
    }, []);

    const fetchCities = useCallback(
        async () => {
            const cities = await ApiService.getCities()
            const citiesOptions = cities.map(city => {
                return { value: city.name, label: city.name }
            })
            setCitiesList(value => [...value, ...citiesOptions]);
        }, []);

    const chooseLocation = useCallback((event) => {
        chooseLocationAction(event.value)
        }, [chooseLocationAction]);

    return (
        <div style={{ width: "40%", marginRight: "15px" }}>
            <Dropdown
                options={citiesList}
                value={chosenLocation}
                onChange={(event) => chooseLocation(event)}
                clearable={false}
                placeholder="Select Location"
                className={"dropdown-stories-styles_big-spacing"} />
        </div>
    );
}

export default LocationFilter