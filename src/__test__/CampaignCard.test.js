import React from 'react'
import { configure, shallow, mount, render } from 'enzyme'
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import CampaignCard from '../components/CampaignCard'
import { Card, Col } from 'react-bootstrap'

configure({ adapter: new Adapter() });

const campaign = {
    id: 94597,
    order: 1,
    parent_project_id: 0,
    title: "#BisaBangkit Bersama Kitabisa",
    expired: 2147483647,
    image: "https://img.staging.kitabisa.cc/size/664x357/0f9a7205-79ef-49c9-a95a-49347fbd00a6.jpg",
    days_remaining: 0,
    donation_received: 178613497,
    campaigner: "Kitabisa.com",
    campaigner_type: "PERSONAL",
    campaigner_badge: "https://assets.kitabisa.com/images/icon__verified-user.svg",
    campaigner_is_verified: true,
    category_name: "Bencana Alam",
    is_forever_running: true,
    is_open_goal: false,
    request_userdata:false,
    donation_target: 500000000,
    donation_percentage: 0.357227,
    short_url: "bisabangkit",
    is_featured: 0,
    custom_fb_pixel: ""
}
const donation = campaign.donation_received.toLocaleString('de-DE')

describe('campaign card test', () => {
    const wrapper = mount(<CampaignCard campaign={ campaign } />)

    it('accept campaign props', () => {
        expect(wrapper.props().campaign).toEqual(campaign);
    })

    it('correct title campaign', () => {
        expect(wrapper.find(Card.Title)).toHaveLength(1)
        expect(wrapper.find(Card.Title).text()).toEqual(campaign.title)
    })

    it('correct left card details', () => {
        expect(wrapper.contains(<Col>Terkumpul</Col>)).toEqual(true);
        expect(wrapper.contains(<Col>{ `Rp. ${donation}` }</Col>)).toEqual(true);
    })

    it('correct right card details', () => {
        expect(wrapper.contains(<Col style={{ textAlign: 'right' }}>Sisa hari</Col>)).toEqual(true);
        expect(wrapper.contains(<Col style={{ textAlign: 'right' }}>{ campaign.days_remaining }</Col>)).toEqual(true);
    })
})