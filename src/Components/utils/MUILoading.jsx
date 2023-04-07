
import { RotatingLines } from 'react-loader-spinner';

const MUILoading = () => {

    return(
        <div style={{height:"75vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <RotatingLines strokeColor="grey"/>
        </div>
    )
}
export default MUILoading