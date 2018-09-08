var api_url = '';

switch( process.env.NODE_ENV ){
  case 'development':
    api_url = 'http://localhost:8000';
  break;
  case 'production':
    api_url = 'https://roastandbrew.coffee/api/v1';
  break;
}

export const EXPERTS_CONFIG = {
  API_URL: api_url,
}