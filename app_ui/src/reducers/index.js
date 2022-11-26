import  {combineReducers} from 'redux';
import authReducer from './authReducer';
import profile from './profile';
import userProfile from './userProfile';
import user_form_updatesReducer from './userUpdates';
import codeMappers from './mapperReducer'
import codeExecutor from './executorReducer'
import generatorReducer from './generatorReducer';

export default combineReducers({
    auth:authReducer,
    user_form_updates: user_form_updatesReducer,
    profile,
    userProfile,
    codeMappers,
    codeExecutor,
    generatorReducer
});