### Requirements

This project uses local HTTPS with custom certificates for development.

If you don't have the required certificate files, you can generate them automatically:

```sh
npm run generate-cert
```

This will create two files in the project root:

- `certificate.pem`: Your SSL certificate
- `key.pem`: Your private key

> ⚠️ **Important**: These files are **not included** in the repository and should **never** be committed. Make sure to add them to `.gitignore`.

## Getting Started

```sh
npm install
npm run generate-cert
npm run dev
```

Then open https://localhost:8080

## License

MIT — Feel free to remix, adapt, and share, just credit the original.
