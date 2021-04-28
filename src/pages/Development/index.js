import React from 'react';
import Container from '../../styles/container';
import { Card } from '../../styles/card';

export default function Development() {
    return(
        <Container style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <Card style={{padding: '32px'}}>
                <h2>Em desenvolvimento...</h2>
            </Card>
        </Container>
    )
}