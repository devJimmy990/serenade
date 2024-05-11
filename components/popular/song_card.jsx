import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { PlayCircle } from '@mui/icons-material';

const SongCard = ({ song }) => {
    return (
        <Card className="swiper-wrapper bg-transparent">
            <CardMedia
                component="img"
                height="auto"
                image={song.img}
                alt={song.title}
            />
            <CardContent className="slide-overlay">
                <Typography variant="h2">{song.title}</Typography>
                <Button
                    variant="contained"
                    endIcon={<PlayCircle />}
                    style={{ textTransform: 'capitalize' }}
                >
                    Listen Now
                </Button>
            </CardContent>
        </Card>
    );
};

export default SongCard;
