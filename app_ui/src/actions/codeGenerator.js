import axios from 'axios';
import {authRecord, accessURL} from '../apis/backend_api';
import { GENERATOR_SUCCESS, GENERATOR_FAILED, GENERATOR_LOADING } from './actionTypes';

export const codeGeneratorAPI = (data, setLoading) => async (dispatch,getState) =>{
    try{
        setLoading(true);
        dispatch({type:GENERATOR_LOADING,payload:{isLoading: true}});
        const formData = new FormData();
        formData.append('source_json', JSON.stringify(data.json_file));
        formData.append('mapping_file', data.csv_mapping);

        const response = await authRecord(data.token).post('/main/generator/', formData);
        console.log(JSON.stringify(response));
        console.log(response.data);
        dispatch({type:GENERATOR_SUCCESS,payload:{data: response.data}});
    } catch(e){
        console.log(e);
        dispatch({type:GENERATOR_FAILED,payload:{error: e}});
    }
    setLoading(false);
}