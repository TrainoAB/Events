import AdminHeader from "@/app/components/AdminHeader";

import "./layout.css";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const fetchEvent = async (eventId) => {
    try {
        const res = await fetch(`${BASE_URL}/api/event?id=${eventId}`);
        if (!res.ok) {
            throw new Error("Failed to fetch event");
        }
        const event = await res.json();
        return { event };
    } catch (error) {
        return { error: error.message };
    }
};

export default async function ManageLayout({ children, params }) {
    const { event, error } = await fetchEvent(params.id);

    return (
        <>
            <AdminHeader params={params} />
            {error && <p className="event-indicator">{error}</p>}

            {!error && (
                <p className="event-indicator">
                    <span>Event:</span>
                    {` ${event.competition} (${event.start_date})`}
                </p>
            )}
            {children}
        </>
    );
}
