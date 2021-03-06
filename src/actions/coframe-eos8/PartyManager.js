//This file is automatically generated

// PartyManager

import { PartyManager } from '../controller';
export default {
    actions: {
        [PartyManager.queryPartyWithPartyId.method] : {
            summary: 'queryPartyWithPartyId',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.rights.PartyManager.queryPartyWithPartyId.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.rights.PartyManager.queryPartyWithPartyId_params','description':'org.gocom.components.coframe.rights.PartyManager.queryPartyWithPartyId_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.rights.PartyManager.queryPartyWithPartyId_params'}}],
        },
        [PartyManager.saveParty.method] : {
            summary: 'saveParty',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.rights.PartyManager.saveParty.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.rights.PartyManager.saveParty_params','description':'org.gocom.components.coframe.rights.PartyManager.saveParty_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.rights.PartyManager.saveParty_params'}}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
