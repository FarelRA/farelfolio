# farelfolio

Personal portfolio of [Farel Reski Aditiya](https://farel.is-a.dev) — React.

Originally based on [Reactfolio](https://github.com/truethari/reactfolio) (MIT), since customized with my own content, design, and branding.

## Stack

- React (CRA) + webp assets
- Deployed as a static site behind [static-web-server](https://static-web-server.net)
- CI/CD: GitHub Actions builds and publishes the container image to `ghcr.io/farelra/farelfolio` (linux/arm64)

## Development

```bash
npm install
npm start        # dev server on :3000
npm run build    # production build to ./build
```

## Deployment

Handled automatically: every push to `master` triggers a build → GHCR image → the server pulls and recreates the container.

## License

Site content © Farel Reski Aditiya. Template code under its original MIT license.
