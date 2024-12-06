## How to run
```bash
npm i
npm run dev
```


### Linter & Prettier
```bash
npm run lint:fix
npm run format
```
## Building

### It's using emailjs for the form
```bash
VITE_PUBLIC_KEY=
VITE_SERVICE_ID=
VITE_TEMPLATE_ID=
```

and Whatsapp for the errors
```bash
VITE_WHATSAPP_TOKEN=
VITE_PHONE_NUMBER=
VITE_RECIPIENT_PHONE=
```

### It will deploy in github Pages
```bash
npm run build
```