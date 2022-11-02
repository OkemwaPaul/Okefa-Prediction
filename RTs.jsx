import { Routes, Route} from 'react-router-dom';
import Quotes from './components/Welcome';
import motivation from './components/details';
import inspiration from './components/more';

function RT() {
    return (
        <div>
            <Routes>
                <Route path="quotes" element={<Welcome />} />
                <Route path="details" element={<Details />} />
                <Route path= "more" element={<More />} />
                <Route path= "updates" element={<Updates />} />
            </Routes>
        </div>
    );
}
export default RT;