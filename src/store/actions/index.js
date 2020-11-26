import axios from 'axios'

export const setCampaigns = (campaigns) => {
    return {
        type: 'SET_CAMPAIGNS',
        payload: campaigns
    }
}

export const getCampaigns = () => {
    return (dispatch) => {
        dispatch(setCampaigns([]))
        axios({
            method: 'get',
            url: 'https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json'
        })
        .then(res => {
            dispatch(setCampaigns(res.data.data))
        })
        .catch(err => {
            console.log(err)
        })
    }
}