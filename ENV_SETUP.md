# Setup Environment Variables

## Buat file `.env.local` di root project dengan isi berikut:

```env
# NextAuth Configuration
AUTH_SECRET="e6Zrr4xLNdTybIAGiMtr0p7WZ25br0fWpqr8jdKyPrM="
AUTH_URL="http://localhost:3000"

# Google OAuth (Replace with your actual credentials)
GOOGLE_CLIENT_ID="your-google-client-id-here"
GOOGLE_CLIENT_SECRET="your-google-client-secret-here"
```

## Langkah-langkah:

1. **Copy AUTH_SECRET** yang sudah di-generate: `e6Zrr4xLNdTybIAGiMtr0p7WZ25br0fWpqr8jdKyPrM=`

2. **Dapatkan Google OAuth Credentials**:

   - Ikuti panduan di `GOOGLE_AUTH_SETUP.md`
   - Ganti `your-google-client-id-here` dengan Client ID Anda
   - Ganti `your-google-client-secret-here` dengan Client Secret Anda

3. **Restart server** setelah menambahkan environment variables:
   ```bash
   npm run dev
   ```

## Catatan:

- File `.env.local` tidak akan di-commit ke repository (sudah di .gitignore)
- Jangan share AUTH_SECRET atau Client Secret dengan siapapun
- Untuk production, gunakan environment variables yang berbeda
