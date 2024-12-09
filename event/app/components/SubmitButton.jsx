import { useFormStatus } from "react-dom";

export default function SubmitButton({ message }) {
    // Prevent the button from being used while an action is pending
    const { pending } = useFormStatus();
    return (
        <button className={`${pending && "disabled-btn"}`} disabled={pending} type="submit">
            {pending ? message.pending : message.default}
        </button>
    );
}
