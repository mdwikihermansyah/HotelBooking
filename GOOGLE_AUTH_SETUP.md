# Setup Google OAuth untuk Booking Hotel

## Langkah-langkah Setup Google OAuth

### 1. Buat Google Cloud Project

1. Kunjungi [Google Cloud Console](https://console.cloud.google.com/)
2. Buat project baru atau pilih project yang sudah ada
3. Aktifkan Google+ API

### 2. Buat OAuth 2.0 Credentials

1. Buka menu "APIs & Services" > "Credentials"
2. Klik "Create Credentials" > "OAuth 2.0 Client IDs"
3. Pilih "Web application"
4. Isi form:
   - **Name**: Booking Hotel OAuth
   - **Authorized JavaScript origins**:
     - `http://localhost:3000` (development)
     - `http://localhost:3001` (development)
     - `http://localhost:3002` (development)
     - `https://yourdomain.com` (production)
   - **Authorized redirect URIs**:
     - `http://localhost:3000/api/auth/callback/google` (development)
     - `http://localhost:3001/api/auth/callback/google` (development)
     - `http://localhost:3002/api/auth/callback/google` (development)
     - `https://yourdomain.com/api/auth/callback/google` (production)

### 3. Dapatkan Client ID dan Client Secret

Setelah membuat credentials, Anda akan mendapatkan:

- **Client ID**: `123456789-abcdefghijklmnop.apps.googleusercontent.com`
- **Client Secret**: `GOCSPX-abcdefghijklmnopqrstuvwxyz`

### 4. Buat File Environment Variables

Buat file `.env.local` di root project dengan isi:

```env
# NextAuth Configuration
AUTH_SECRET="your-super-secret-key-here-minimum-32-characters"
AUTH_URL="http://localhost:3000"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id-here"
GOOGLE_CLIENT_SECRET="your-google-client-secret-here"
```

### 5. Generate AUTH_SECRET

Untuk generate AUTH_SECRET yang aman, jalankan:

```bash
openssl rand -base64 32
```

### 6. Restart Development Server

Setelah menambahkan environment variables, restart server:

```bash
npm run dev
```

## Troubleshooting

### Error: "Invalid redirect_uri"

- Pastikan redirect URI di Google Cloud Console sama persis dengan yang digunakan aplikasi
- Termasuk protokol (http/https) dan port

### Error: "Client ID not found"

- Pastikan GOOGLE_CLIENT_ID sudah benar
- Pastikan project di Google Cloud Console sudah aktif

### Error: "Client secret is invalid"

- Pastikan GOOGLE_CLIENT_SECRET sudah benar
- Jangan ada spasi atau karakter tambahan

## Keamanan

- Jangan pernah commit file `.env.local` ke repository
- Gunakan environment variables yang berbeda untuk development dan production
- Rotasi Client Secret secara berkala
