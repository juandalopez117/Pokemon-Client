import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Nav({isLoading, setIsLoading}){
    return (
        <div>
            <div>
                <Link to="/">
                    <button type="button"> 
                        Back 
                    </button>
                </Link>
                <Link to="/create">
                    <button type="button">
                        Register your Pokemon
                    </button> 
                </Link>
            </div>
            <SearchBar isLoading={isLoading} setIsLoading={setIsLoading}/> 
        </div>
    )
}