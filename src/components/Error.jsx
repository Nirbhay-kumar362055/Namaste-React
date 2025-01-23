import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h2>OOPS! something went wrong</h2>
            <p>Maybe wrong route</p>
            <p>{err.status}: {err.statusText}</p>
            <p>message: {err.data}</p>
        </div>
    )
};
export default Error;