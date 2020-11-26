import React from 'react'
import { Card, Col, ProgressBar, Row } from 'react-bootstrap'

export default function CampaignCard(props) {
    const { campaign } = props
    const donation = campaign.donation_received.toLocaleString('de-DE')

    return (
        <>
            <Col xs={4} style={{ marginTop: '3%' }}>
                <Card style={{ borderWidth: 0 }}>
                    <Card.Img variant="top" src={ campaign.image } />
                    <Card.Body>
                        <Card.Title>{ campaign.title }</Card.Title>
                        <ProgressBar 
                            variant={ campaign.donation_percentage >= 100 ? 'pink' : 'grey' } 
                            now={ campaign.donation_percentage } 
                            className='details'
                        />
                        <footer>
                            <Row className='details'>
                                <Col>Terkumpul</Col>
                                <Col style={{ textAlign: 'right' }}>Sisa hari</Col>
                            </Row>
                            <Row className='details'>
                                <Col>{ `Rp. ${donation}` }</Col>
                                <Col style={{ textAlign: 'right' }}>{ campaign.days_remaining }</Col>
                            </Row>
                        </footer>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}