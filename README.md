# Ecommerce-Admin
Our E-commerce Dashboard is designed to revolutionize the way businesses manage their online stores. This integrated management system features a user-friendly interface and a flexible online store platform, enabling seamless updates and efficient management. With real-time tracking of key performance indicators, it empowers businesses to optimize their digital storefronts effectively

### Prerequisites
Node version 14.x

### Steps to Run the Project
Clone the repo using 
```shell 
git clone https://github.com/aiishaan/ecommerceDashboard.git
```
### Install packages
```shell
npm i
```
### Setup .env file
Note - you can generate all these keys by creating accounts on clerk, neon db, cloudinary and stripe. (follow their own documentation)
```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```
### Connect to NeonDB and Push Prisma
```shell
npx prisma generate
npx prisma db push
```
### Start the app

```shell
npm run dev
```
## Available commands
Running commands with npm `npm run [command]`
| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
