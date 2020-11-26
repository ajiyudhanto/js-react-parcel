import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCampaigns, setCampaigns } from './store/actions'
import CampaignCard from './components/CampaignCard'
import { Row, Col, Button, Image } from 'react-bootstrap'

export default function App () {
    const dispatch = useDispatch()
    const campaigns = useSelector(state => state.campaigns)
    const [sortingBy, setSortingBy] = useState('donation goal')

    useEffect(() => {
        dispatch(getCampaigns())
    }, [])

    function sorting(campaignKey) {
        const newCampaigns = JSON.parse(JSON.stringify(campaigns))
        if(campaignKey === 'donationGoal') {
            newCampaigns.sort(function(a, b) {
                if (a.donation_target < b.donation_target) {
                    return -1
                }
                
                if (a.donation_target > b.donation_target) {
                    return 1
                }
    
                return 0
            })
            setSortingBy('order')
        } else {
            newCampaigns.sort(function(a, b) {
                if (a.order < b.order) {
                    return -1
                }
                
                if (a.order > b.order) {
                    return 1
                }
    
                return 0
            })
            setSortingBy('donation goal')
        }
        dispatch(setCampaigns(newCampaigns))
    }

    return (
        <div className='container'>
            <Row>
                <Col>
                    <Row>
                        <Col className='brand' xs={2}>
                            <Image className='logo' src='https://academy.alterra.id/images/logo_kitabisa.webp' rounded />
                        </Col>
                        <Col className='brand'>
                            <h1>Kitabisa</h1>
                        </Col>
                    </Row>
                </Col>
                <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    {
                        sortingBy === 'donation goal' ?
                        <Button variant='grey' onClick={() => sorting('donationGoal')}>Sorting By Donation Goal</Button> :
                        <Button variant='grey' onClick={() => sorting()}>Back</Button>
                    }
                </Col>
            </Row>
            <Row>
                {
                    campaigns.map(campaign => {
                        return <CampaignCard campaign={ campaign } key={ campaign.id } />
                    })
                }
            </Row>
        </div>
    )
}