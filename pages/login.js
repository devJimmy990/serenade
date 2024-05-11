import React from 'react';
import { Container, Paper, TextField, Button, Typography, Box, Fab } from '@mui/material';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

function LoginPage() {
    const session = useSession();
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);

    const handleGoogleSignIn = async () => {
        await signIn("google", { callbackUrl: "/auth" });
        setLoading(true);
    };

    const handleGithubSignIn = () => {
        signIn("github", { callbackUrl: "/auth" });
        setLoading(true);
    };

    return (
        <Container component="main" maxWidth={false} sx={{
            height: '90vh',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <Paper elevation={6} sx={{
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                opacity: loading ? 0.5 : .9,
                gap: 2,
                width: '100%',
                maxWidth: '400px',
                borderRadius: '16px',
                backdropFilter: 'blur(8px)',
            }}>
                <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
                    Sign In
                </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, borderRadius: '20px', width: '60%', margin: 'auto', textTransform: 'capitalize', fontSize: '18px' }}
                >
                    Sign In
                </Button>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, }}>
                    <Fab
                        onClick={handleGithubSignIn}
                        aria-label="sign-in with GitHub"
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            '&:hover': {
                                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
                                transform: 'scale(1.1)'
                            },
                            transition: 'transform 0.3s, box-shadow 0.3s'
                        }}
                    >
                        <GitHubIcon sx={{ color: 'black' }} />
                    </Fab>
                    <Fab
                        onClick={handleGoogleSignIn}
                        aria-label="sign-in with Google"
                        sx={{
                            backgroundColor: 'red',
                            borderRadius: '50%',
                            '&:hover': {
                                backgroundColor: 'red',
                                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
                                transform: 'scale(1.1)',
                            },
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            width: '56px',
                            height: '56px',
                        }}
                    >
                        <GoogleIcon sx={{ color: 'white' }} />
                    </Fab>
                </Box>
                {loading && <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>Loading...</Typography>}
                <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                    Don&apos;t have an account?{' '}
                    <Link href="/register" passHref>
                        <Button sx={{ p: 0, minWidth: 'auto', textTransform: 'none', color: 'secondary.main' }}>
                            Create new
                        </Button>
                    </Link>
                </Typography>
            </Paper>
        </Container>
    );
}

export default LoginPage;
