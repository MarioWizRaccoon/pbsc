"use strict";

import {applyMiddleware, compose, createStore} from "redux";
import asyncAwait from "redux-async-await";
import thunk from "redux-thunk";
import reducers from "./reducers/addPerson";

const store = createStore(reducers, {}, compose(applyMiddleware(asyncAwait, thunk)));

export default store;