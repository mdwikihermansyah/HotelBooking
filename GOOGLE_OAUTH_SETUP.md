# Google OAuth Setup untuk Hotel Booking App

## Langkah-langkah Setup Google OAuth

### 1. Buat Project di Google Cloud Console

1. Buka [Google Cloud Console](https://console.cloud.google.com/)
2. Buat project baru atau pilih project yang sudah ada
3. Aktifkan Google+ API

### 2. Buat OAuth 2.0 Credentials

1. Buka menu "APIs & Services" > "Credentials"
2. Klik "Create Credentials" > "OAuth 2.0 Client IDs"
3. Pilih "Web application"
4. Isi form dengan informasi berikut:
   - **Name**: Hotel Booking App
   - **Authorized JavaScript origins**:
     - `http://localhost:3000` (untuk development)
     - `http://localhost:3001` (untuk development)
     - `https://your-domain.vercel.app` (untuk production)
   - **Authorized redirect URIs**:
     - `http://localhost:3000/api/auth/callback/google` (untuk development)
     - `http://localhost:3001/api/auth/callback/google` (untuk development)
     - `https://your-domain.vercel.app/api/auth/callback/google` (untuk production)

### 3. Update Environment Variables

Setelah mendapatkan Client ID dan Client Secret, update file `.env`:

```env
AUTH_SECRET="your-secret-key-here"
AUTH_GOOGLE_ID="your-google-client-id-here"
AUTH_GOOGLE_SECRET="your-google-client-secret-here"
```

### 4. Test OAuth

1. Jalankan development server: `npm run dev`
2. Buka `http://localhost:3000/signin`
3. Klik "Sign In With Google"
4. Pastikan redirect berfungsi dengan baik

### 5. Troubleshooting

- **Error 500**: Pastikan environment variables sudah benar
- **Redirect URI mismatch**: Pastikan URI di Google Console sama dengan yang digunakan aplikasi
- **CORS Error**: Pastikan domain sudah ditambahkan ke Authorized JavaScript origins

### 6. Production Setup

Untuk deployment ke Vercel:

1. Update Authorized redirect URIs di Google Console dengan domain Vercel
2. Set environment variables di Vercel dashboard
3. Deploy aplikasi
