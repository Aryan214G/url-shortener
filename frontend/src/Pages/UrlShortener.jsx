import React from 'react'
import {Button, Center, Stack, Text, TextInput, Title} from '@mantine/core'

const UrlShortener = () => {
    const[originalUrl, setOriginalUrl] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [custom, setCustom] = React.useState("");
    const [expiryDate, setExpiryDate] = React.useState("");
  return (
    <Center style={{height: '100vh'}}>
        <Stack align="center" spacing="md">
            <Title>URL Shortener Page</Title>    
            <TextInput
                placeholder="Enter URL to shorten" 
                value={originalUrl}
                withAsterisk
                onChange={(e) => setOriginalUrl(e.target.value)}
                style={{width: '300px'}}
            />
             <TextInput
                placeholder="Customise Your Url"
                value={custom}
                withAsterisk
                onChange={(e) => setCustom(e.target.value)}
                style={{width: '300px'}}
            />
            <TextInput
                placeholder="Title"
                value={title}
                withAsterisk
                onChange={(e) => setTitle(e.target.value)}
                style={{width: '300px'}}
            />
            <TextInput
                placeholder="Date of expiry"
                value={expiryDate}
                withAsterisk
                onChange={(e) => setExpiryDate(e.target.value)}
                style={{width: '300px'}}
                type="date"
            />
            <Button style={{width: '300px'}}>Shorten URL</Button>
        </Stack>
    </Center>
  )
}

export default UrlShortener