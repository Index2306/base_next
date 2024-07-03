import {Provider} from 'react-redux';
import {store} from './store';

export default function StoreProviders({children}: any) {
    return (
        <>
            <Provider store={store}>{children}</Provider>
        </>
    );
}