import {createStore} from 'redux';
import rootreducer from './Reducer/main';

const storereducer= createStore (rootreducer);

export default storereducer;