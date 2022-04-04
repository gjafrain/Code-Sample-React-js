import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
/// CSS
import 'react-toastify/dist/ReactToastify.css';
// 
import { store, persistor } from './redux/store';
import { Modal } from './components/molecules/Modal';

import { AppLoading } from './components/atoms'

const Main = React.lazy(() => import('./Main'));

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Modal />
                <Router>
                    <Suspense fallback={<AppLoading />}>
                        <Switch>
                            <Route component={Main} />
                        </Switch>
                    </Suspense>
                </Router>
            </PersistGate>
        </Provider >
    );
}

export default App;
