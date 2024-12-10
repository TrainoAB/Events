"use client";

import { useState } from "react";
import { useTrainoContext } from "@/app/context/TrainoContext";
import { useFetch } from "@/app/customHooks";
import ListToggle from "@/app/components/ListToggle";

import "./page.css";

export default function InterestedPage({ params }) {
    const { DEBUG, BASE_URL } = useTrainoContext();
    const [listToggle, setListToggle] = useState(true);

    // Toggle between lists
    const handleSetList = () => {
        setListToggle(!listToggle);
    };

    // Fetch interested sponsors
    const {
        data: interestedSponsors,
        isPending: sponsorsPending,
        error: sponsorsError,
    } = useFetch(`${BASE_URL}/api/interested/sponsors?event-id=${params.id}`);
    DEBUG && console.log("Interested sponsors: ", interestedSponsors);

    // Fetch interested volunteers
    const {
        data: interestedVolunteers,
        isPending: volunteersPending,
        error: volunteersError,
    } = useFetch(`${BASE_URL}/api/interested/volunteers?event-id=${params.id}`);
    DEBUG && console.log("Interested volunteers: ", interestedVolunteers);

    // Renders the list of interested sponsors/volunteers
    const InterestedList = ({ list, pending, error }) => {
        if (pending) {
            return <p>Laddar...</p>;
        }

        if (error) {
            return <p>{error.message}</p>;
        }

        if (list.length === 0) {
            return <p>Ingen har registrerat intresse för tillfället.</p>;
        }

        return (
            <ul className="interested-list max-width">
                <li className="interested-list__headings b-radius">
                    <h3>Email</h3>
                    <h3>Telefon</h3>
                </li>
                {list.map((item) => (
                    <li className="interested-item b-radius" key={item.email}>
                        <p className="interested-item__email">{item.email}</p>
                        <p className="interested-item__phone">{item.phone}</p>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <main id="interested-page" className="flex-col align-c">
            <h1 className="interested-page__title">Intressenter</h1>
            <ListToggle
                title1="Sponsorer"
                title2="Voluntärer"
                setIsFirstTitleShown={handleSetList}
            />
            {listToggle ? (
                <InterestedList
                    list={interestedSponsors}
                    pending={sponsorsPending}
                    error={sponsorsError}
                />
            ) : (
                <InterestedList
                    list={interestedVolunteers}
                    pending={volunteersPending}
                    error={volunteersError}
                />
            )}
        </main>
    );
}
