import React, {useEffect, useState} from 'react';
import {Grid, Box, Paper, Typography} from '@mui/material';
import HotelService from '../../API/HotelService';
import styles from '../../CSS/MapStyle.module.css';
import SearchBarComponent from './SearchBarComponent';
import MapComponent from './MapComponent';
import ElementsListComponent from './ElementsListComponent';
import PlannerIconsComponent from './PlannerIconsComponent;';
import AirportService from '../../API/AirportService';
import PlanService from '../../API/PlanService';
import {handleLoginError} from '../../Objects/HandleLogin'
import {useLocation, useNavigate} from 'react-router-dom';
import {getPlaceById} from '../../Objects/GetPlaceById';
import LoadingComponent from '../LoadingComponent';
import SelectSaveSlotComponent from './SelectSaveSlotComponent';
import SingleLocationComponent from './SingleLocationComponent';

const PlanEditorComponent = ({
    hotel,
    setHotel,
    airportDeparture,
    setAirportDeparture,
    airportArrival,
    plans,
    addLocation,
    setAirportArrival,
    savePlan
}) => {
    const [step,
        setStep] = useState(1);
    const [selectedElement,
        setSelectedElement] = useState(null);
    const [points,
        setPoints] = useState([]);
    const [mapCentre,
        setMapCentre] = useState([52.52000660, 13.40495400]);
    const [zoom,
        setZoom] = useState(10);
    const [loading,
        setLoading] = useState(true);

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        try {
            const plan = location.state.data;
            setHotel(plan.hotel);
            setAirportArrival(plan.airportArrival);
            setAirportDeparture(plan.airportDeparture);
            console.log(plan);
        } catch {
            console.log("There is no data passed threw save")
        }

        if (navigator.geolocation) {
            navigator
                .geolocation
                .getCurrentPosition((pos) => {
                    setMapCentre([pos.coords.latitude, pos.coords.longitude]);
                    setLoading(false);
                }, (err) => {
                    console.error("Error fetching location:", err);
                    setLoading(false);
                });
        } else {
            console.error("Geolocation is not supported by this browser.");
            setLoading(false);
        }


        console.log(plans);
    }, []);

    useEffect(() => {
        if (loading) 
            return;
        
        const fetchData = async() => {
            setLoading(true);
            try {
                switch (step) {
                    case 1:
                        setSelectedElement(null)
                        setZoom(10);
                        await updateHotels(mapCentre);
                        break;
                    case 2:
                        setSelectedElement(null)
                        setZoom(8);
                        await updateAirports(mapCentre);
                        break;
                    case 3:
                        setSelectedElement(null)
                        setZoom(8);
                        await updateAirports(mapCentre);
                        break;
                    default:
                        break;
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [step, mapCentre]);

    const updateHotels = async(location) => {
        try {
            const hotels = await HotelService.getHotels(location);
            setPoints(hotels);
        } catch (error) {
            console.error("Error fetching hotels:", error);
        }
    };

    const updateAirports = async(location) => {
        try {
            const airports = await AirportService.getAirports(location);
            console.log(airports);
            setPoints(airports);
        } catch (error) {
            console.error("Error fetching airports:", error);
        }
    };

    const setFinal = (element) => {
        switch (step) {
            case 1:
                setHotel(element.id);
                break;
            case 2:
                setAirportDeparture(element.id);
                break;
            case 3:
                setAirportArrival(element.id);
                break;
            default:
                break;
        }
    };

    return (
        <Grid container className={styles.container}>
            <Grid item xs={12} md={3} display="flex">
                <Box width="100%" height="90hv" display="flex" flexDirection="column">
                    <PlannerIconsComponent
                        hotel={hotel}
                        chooseHotel={() => setStep(1)}
                        airportDeparture={airportDeparture}
                        chooseAirportDeparture={() => setStep(2)}
                        airportArrival={airportArrival}
                        chooseAirportArrival={() => setStep(3)}
                        save={savePlan}/> 
                        
                        {loading
                        ? (<LoadingComponent/>)
                        : (<ElementsListComponent
                            points={points}
                            addLocation={addLocation}
                            setFinal={setFinal}
                            selectedElement={selectedElement}
                            setSelectedElement={setSelectedElement}/>)}
                </Box>
            </Grid>
            <Grid item xs={12} md={2} display="flex">
                <Box 
                    width="100%" 
                    height="90hv" 
                    display="flex" 
                    flexDirection="column"
                    padding="4vh" 
                >
                    {plans.map((loc) => (
                        <SingleLocationComponent location={loc} />
                    ))}
                </Box>
            </Grid>

            <Grid item xs={12} md={7} height='90vh'>
                <SearchBarComponent setMainLocation={setMapCentre}/>
                <MapComponent
                    location={mapCentre}
                    points={points}
                    setSelectedElement={setSelectedElement}
                    zoom={zoom}/>
            </Grid>
        </Grid>
    );
};

export default PlanEditorComponent;