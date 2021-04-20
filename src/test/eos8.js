
import axios from '../axios/index';

export const queryDictType = async (data="pip-ccocci-topic") => {
    let resp
    resp = await axios.post('/org.gocom.components.coframe.dict.DictManager.queryDictType.biz.ext',{
        "dicttypeid":data,
    })
    if (!resp.error) {
        return resp.data
    }
}


export const queryDict = async (data) => {
    let resp
    resp = await axios.post('/org.gocom.components.coframe.dict.DictManager.queryDict.biz.ext',data)
    if(!resp.error){
        return resp.data
    }
}



