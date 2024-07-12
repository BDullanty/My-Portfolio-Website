import { Button, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export function GithubLinkCard() { 
    return (
        <Card>
            <CardContent>
            <h3>Github:</h3>
        
        
            </CardContent>
            <CardActions>
                <Button variant="contained" size="large" onClick={() => {
                window.location.href = "https://github.com/bdullanty";
                
            }}
                
                >Link</Button>
            </CardActions>
        </Card>
    )
}

export function LinkedInLinkCard() { 
    return (
        <Card>
            <CardContent>
            <h3>LinkedIn:</h3>
        
        
            </CardContent>
            <CardActions>
                <Button variant="contained" size="large" onClick={() => {
                window.location.href = "https://LinkedIn.com/in/bdullanty";
                }}
                
                >Link</Button>
            </CardActions>
        </Card>
    )
}
