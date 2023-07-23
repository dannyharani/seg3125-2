import { useNavigate } from "react-router-dom";

function Back() {
    let navigate = useNavigate();

    return (
        <div className="backBtn" onClick={() => navigate(-1)}>&#60; Back </div>
    );
}

export default Back;