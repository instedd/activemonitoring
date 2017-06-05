import * as api from '../api'
import { push } from 'react-router-redux'

export const CAMPAIGN_CREATE = 'CAMPAIGN_CREATE'
export const CAMPAIGN_CREATED = 'CAMPAIGN_CREATED'
export const CAMPAIGN_FETCH = 'CAMPAIGN_FETCH'
export const CAMPAIGN_FETCHED = 'CAMPAIGN_FETCHED'
export const CAMPAIGN_UPDATE = 'CAMPAIGN_UPDATE'
export const CAMPAIGN_UPDATED = 'CAMPAIGN_UPDATED'

export const createCampaign = (campaignParams) => (dispatch) => {
  dispatch({type: CAMPAIGN_CREATE})

  api.createCampaign(campaignParams)
     .then((campaign) => {
       dispatch(campaignCreated(campaign))
       dispatch(push(`/campaigns/${campaign.id}`))
     })
}

export const campaignCreated = (campaign) => {
  return { type: CAMPAIGN_CREATED, campaign }
}

export const campaignFetch = (id) => (dispatch) => {
  dispatch({type: CAMPAIGN_FETCH, id: id})

  api.fetchCampaign(id)
     .then((campaign) => {
       dispatch({ type: CAMPAIGN_FETCHED, campaign })
     })
}

export const campaignUpdate = (campaign) => (dispatch) => {
  dispatch({type: CAMPAIGN_UPDATE, campaign})

  api.updateCampaign(campaign)
     .then((campaign) => {
       dispatch({ type: CAMPAIGN_UPDATED, campaign })
     })
}

export const campaignUpdated = (campaign) => {
  return { type: CAMPAIGN_UPDATED, campaign }
}
